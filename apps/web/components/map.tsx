import React, { useState, useMemo } from 'react'
// import Image from 'next/image'
import { Map } from 'react-map-gl'
import maplibregl from 'maplibre-gl'
import DeckGL from '@deck.gl/react'
import { MapView } from '@deck.gl/core'
import { IconLayer } from '@deck.gl/layers'

import iconMappingJSON from '../constants/location-icon-mapping.json'
import iconAtlasPNG from '../assets/images/location-icon-atlas.png'

import IconClusterLayer from '../composables/icon-cluster-layer.js'

// // Source data CSV
// const DATA_URL =
//   'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/icon/meteorites.json' // eslint-disable-line

const MAP_VIEW = new MapView({ repeat: true })
const INITIAL_VIEW_STATE = {
  longitude: -35,
  latitude: 36.7,
  zoom: 1.8,
  maxZoom: 20,
  pitch: 0,
  bearing: 0,
}

const MAP_STYLE =
  'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json'

import { useData, useCoins } from '../composables/map.hooks'

function renderTooltip(info) {
  const { object, x, y } = info

  if (info.objects) {
    return (
      <div className="tooltip interactive" style={{ left: x, top: y }}>
        {info.objects.map(({ name, year, mass, class: meteorClass }) => {
          return (
            <div key={name}>
              <h5>{name}</h5>
              <div>Year: {year || 'unknown'}</div>
              <div>Class: {meteorClass}</div>
              <div>Mass: {mass}g</div>
            </div>
          )
        })}
      </div>
    )
  }

  if (!object) {
    return null
  }

  return object.cluster ? (
    <div className="tooltip" style={{ left: x, top: y }}>
      {object.point_count} records
    </div>
  ) : (
    <div className="tooltip" style={{ left: x, top: y }}>
      {object.name} {object.year ? `(${object.year})` : ''}
    </div>
  )
}

export default function SrMap({
  // data = DATA_URL,
  iconMapping = iconMappingJSON,
  iconAtlas = iconAtlasPNG,
  showCluster = false,
  mapStyle = MAP_STYLE,
}: {
  // data?: any
  iconMapping?: any
  iconAtlas?: any
  showCluster?: boolean
  mapStyle?: string
}) {
  // console.log(iconMapping, 'iconMapping')
  // console.log(iconAtlas, 'iconAtlas')
  const [hoverInfo, setHoverInfo] = useState<any>({})
  const { isLoading, data } = useData()

  const retData = useMemo(() => {
    if (!data) return []
    console.log(data, 'retData')
    return data
  }, [data])

  const hideTooltip = () => {
    setHoverInfo({})
  }
  const expandTooltip = (info) => {
    if (info.picked && showCluster) {
      setHoverInfo(info)
    } else {
      setHoverInfo({})
    }
  }

  const layerProps: any = {
    data: retData,
    pickable: true,
    getPosition: (d) => d.coordinates,
    iconAtlas,
    iconMapping,
    onHover: !hoverInfo.objects && setHoverInfo,
  }

  const layer = useMemo(() => {
    console.log('1')
    return showCluster
      ? new IconClusterLayer({
          ...layerProps,
          id: 'icon-cluster',
          sizeScale: 40,
        })
      : new IconLayer({
          ...layerProps,
          id: 'icon',
          getIcon: (d) => 'marker',
          sizeUnits: 'meters',
          sizeScale: 2000,
          sizeMinPixels: 6,
        })
  }, [data])

  return (
    <>
      <DeckGL
        layers={[layer]}
        views={MAP_VIEW}
        initialViewState={INITIAL_VIEW_STATE}
        controller={{ dragRotate: false }}
        onViewStateChange={hideTooltip}
        onClick={expandTooltip}
      >
        <Map
          reuseMaps
          mapLib={maplibregl}
          mapStyle={mapStyle}
          // preventStyleDiffing={true}
        />

        {renderTooltip(hoverInfo)}
      </DeckGL>
    </>
  )
}
