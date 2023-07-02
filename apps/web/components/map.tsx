'use client'

import React from 'react'
import { Map, Popup } from 'react-map-gl'
import DeckGL from '@deck.gl/react'
import { IconLayer } from '@deck.gl/layers'
import {
  INITIAL_VIEW_STATE,
  MAP_STYLE,
  MapboxAccessToken,
} from '../constants/map.constants'
import { useShops } from '../composables/map.hooks'
import { useState } from 'react'
import { Shop } from 'ui'
import ShopDetails from './shop/shop-details.client'
import { LanguageType } from '../types/i18n.types'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function SrMap({
  strokeWidth = 1,
  mapStyle = MAP_STYLE,
  lng,
}: {
  lng: LanguageType
  strokeWidth?: number
  mapStyle?: string
}) {
  const [currShop, setCurrShop] = useState<Shop | undefined>(undefined)
  const { isLoading: isLoadingShops, data }: { isLoading: boolean; data } =
    useShops()

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  if (isLoadingShops) return

  const iconLayer = new IconLayer({
    id: 'IconLayer',
    // data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-stations.json',
    data: data.map((shop) => {
      if (!shop.location) return shop
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

    onHover: (info, event) => {
      if (!data) return
      if (!info.object) return

      if (!info.object._id) return
      data.map((shop: Shop) => {
        if (shop._id == info.object._id) {
          setCurrShop(shop)
        }
      })
    },
    onClick: (info, event) => {
      router.push(`/${lng}/shops/${info.object._id}`)
    },
  })

  const layers = [iconLayer]

  return (
    <>
      <link
        href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css"
        rel="stylesheet"
      />

      <DeckGL
        layers={layers}
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
      >
        <Map
          reuseMaps
          mapStyle={mapStyle}
          mapboxAccessToken={MapboxAccessToken}
        >
          {currShop && currShop.location && (
            <>
              <Popup
                longitude={currShop.location.lng}
                latitude={currShop.location.lat}
                anchor="bottom"
                offset={23}
                onClose={() => {
                  setCurrShop(undefined)
                }}
              >
                <ShopDetails shop={currShop} lng={lng}></ShopDetails>
              </Popup>
            </>
          )}
        </Map>
      </DeckGL>
    </>
  )
}
