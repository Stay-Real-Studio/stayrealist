'use client'

import React, { useState, useMemo } from 'react'
import { Map } from 'react-map-gl'
import DeckGL from '@deck.gl/react'
import {
  GeoJsonLayer,
  ArcLayer,
  ScatterplotLayer,
  IconLayer,
} from '@deck.gl/layers'
import { calculateArcs, getTooltip } from '../composables/map.functions'
import {
  INITIAL_VIEW_STATE,
  MAP_STYLE,
  inFlowColors,
  MapboxAccessToken,
  outFlowColors,
} from '../constants/map.constants'
import { useData, useCoins } from '../composables/map.hooks'

export default function SrMap({
  strokeWidth = 1,
  mapStyle = MAP_STYLE,
}: {
  strokeWidth?: number
  mapStyle?: string
}) {
  const [selectedCounty, selectCounty] = useState(null)
  const { isLoading, data } = useData()
  const { isLoading: isLoadingCoins, data: coins } = useCoins()

  const arcs = useMemo(() => {
    if (!data) return []

    return calculateArcs(data.features, selectedCounty)
  }, [data, selectedCounty])

  if (isLoading) return
  if (!isLoadingCoins) console.log(coins)

  function createSVGIcon(idx) {
    return `
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="rgb(${
          idx * 20
        }, 0, 0)" stroke="#fa1" stroke-width="2"/>
      </svg>
    `
  }

  function svgToDataURL(svg) {
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
  }

  const CENTER = [-122, 37]

  const iconLayer = new IconLayer({
    id: 'icon-layer',
    data: [...new Array(10)].map((_, idx) => [CENTER[0], CENTER[1] + idx]),
    getIcon: (d, { index }) => ({
      url: svgToDataURL(createSVGIcon(index)),
      width: 24,
      height: 24,
    }),
    sizeScale: 10,
    getSize: (d) => 4,
    getPosition: (d) => d,
  })

  const layers = [
    iconLayer,
    new GeoJsonLayer({
      id: 'geojson',
      data,
      stroked: false,
      filled: true,
      getFillColor: [0, 0, 0, 0],
      onClick: ({ object }) => selectCounty(object),
      pickable: true,
    }),
    new ScatterplotLayer({
      id: 'deckgl-circle',
      data: [
        {
          position: [-122.402, 37.79],
          color: [255, 0, 0],
          radius: 1000,
        },
      ],
      getPosition: (d) => d.position,
      getFillColor: (d) => d.color,
      getRadius: (d) => d.radius,
      opacity: 0.7,
    }),
    new ArcLayer({
      id: 'arc',
      data: arcs,
      getSourcePosition: (d) => d.source,
      getTargetPosition: (d) => d.target,
      getSourceColor: (d) =>
        (d.gain > 0 ? inFlowColors : outFlowColors)[d.quantile],
      getTargetColor: (d) =>
        (d.gain > 0 ? outFlowColors : inFlowColors)[d.quantile],
      getWidth: strokeWidth,
    }),
    new ArcLayer({
      id: 'deckgl-arc',
      data: [
        {
          source: [-122.3998664, 37.7883697],
          target: [-122.400068, 37.7900503],
        },
      ],
      getSourcePosition: (d) => d.source,
      getTargetPosition: (d) => d.target,
      getSourceColor: [255, 208, 0],
      getTargetColor: [0, 128, 255],
      getWidth: 8,
    }),
  ]

  return (
    <DeckGL
      layers={layers}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      getTooltip={getTooltip}
    >
      <Map
        reuseMaps
        mapStyle={mapStyle}
        mapboxAccessToken={MapboxAccessToken}
      />
    </DeckGL>
  )
}
