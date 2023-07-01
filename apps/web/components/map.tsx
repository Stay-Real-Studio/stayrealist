'use client'

import React from 'react'
import { Map } from 'react-map-gl'
import DeckGL from '@deck.gl/react'
import { IconLayer } from '@deck.gl/layers'
import {
  INITIAL_VIEW_STATE,
  MAP_STYLE,
  MapboxAccessToken,
} from '../constants/map.constants'
import { useShops } from '../composables/map.hooks'

export default function SrMap({
  strokeWidth = 1,
  mapStyle = MAP_STYLE,
}: {
  strokeWidth?: number
  mapStyle?: string
}) {
  const { isLoading: isLoadingShops, data }: { isLoading: boolean; data } =
    useShops()

  if (isLoadingShops) return

  const iconLayer = new IconLayer({
    id: 'IconLayer',
    // data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-stations.json',
    data: data.map((shop) => {
      return {
        ...shop,
        coordinates: [shop.location.lng, shop.location.lat],
      }
    }),

    /* props from IconLayer class */

    // alphaCutoff: 0.05,
    // billboard: true,
    // getAngle: 0,
    getColor: (d) => [Math.sqrt(d.exits), 140, 0],
    getIcon: (d) => 'marker',
    // getPixelOffset: [0, 0],
    getPosition: (d) => d.coordinates,
    getSize: (d) => 5,
    iconAtlas:
      'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
    iconMapping: {
      marker: {
        x: 0,
        y: 0,
        width: 128,
        height: 128,
        anchorY: 128,
        mask: true,
      },
    },
    // onIconError: null,
    // sizeMaxPixels: Number.MAX_SAFE_INTEGER,
    // sizeMinPixels: 0,
    sizeScale: 8,
    // sizeUnits: 'pixels',
    // textureParameters: null,

    /* props inherited from Layer class */

    // autoHighlight: false,
    // coordinateOrigin: [0, 0, 0],
    // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
    // highlightColor: [0, 0, 128, 128],
    // modelMatrix: null,
    // opacity: 1,
    pickable: true,
    // visible: true,
    // wrapLongitude: false,
  })

  const layers = [iconLayer]

  return (
    <DeckGL
      layers={layers}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      getTooltip={(object) => {
        console.log(object)
      }}
    >
      <Map
        reuseMaps
        mapStyle={mapStyle}
        mapboxAccessToken={MapboxAccessToken}
      />
    </DeckGL>
  )
}
