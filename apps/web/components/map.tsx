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
  console.log(data)

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

  const iconLayer = new IconLayer({
    id: 'icon-layer',
    data: [data].map((shop) => []),
    getIcon: (d, { index }) => ({
      url: svgToDataURL(createSVGIcon(index)),
      width: 24,
      height: 24,
    }),
    sizeScale: 10,
    getSize: (d) => 4,
    getPosition: (d) => d,
    // Enable picking
    pickable: true,
    // Update app state
    onHover: (info) => {
      // console.log(info)
    },
    onClick: (info) => {
      console.log(info)
    },
  })

  const layers = [iconLayer]

  return (
    <DeckGL
      layers={layers}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      getTooltip={(object) => {
        // console.log(object)
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
