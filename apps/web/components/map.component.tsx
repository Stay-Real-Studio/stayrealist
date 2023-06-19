import React, { useState, useMemo } from 'react';
import { Map } from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import { GeoJsonLayer, ArcLayer, ScatterplotLayer } from '@deck.gl/layers';
import { scaleQuantile } from 'd3-scale';
import { useData } from '../composables/useData.hooks';

const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX_DEFAULT_PUBLIC_ACCESS_TOKEN;

export const inFlowColors = [
  [255, 255, 204],
  [199, 233, 180],
  [127, 205, 187],
  [65, 182, 196],
  [29, 145, 192],
  [34, 94, 168],
  [12, 44, 132],
];

export const outFlowColors = [
  [255, 255, 178],
  [254, 217, 118],
  [254, 178, 76],
  [253, 141, 60],
  [252, 78, 42],
  [227, 26, 28],
  [177, 0, 38],
];

const INITIAL_VIEW_STATE = {
  longitude: -122.402,
  latitude:  37.79,
  zoom: 13,
  maxZoom: 15,
  pitch: 30,
  bearing: 30,
};

const MAP_STYLE =
  'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json';

function calculateArcs(data, selectedCounty) {
  if (!data || !data.length) {
    return null;
  }
  if (!selectedCounty) {
    selectedCounty = data.find((f) => f.properties.name === 'Los Angeles, CA');
  }
  const { flows, centroid } = selectedCounty.properties;

  const arcs = Object.keys(flows).map((toId) => {
    const f = data[toId];
    return {
      source: centroid,
      target: f.properties.centroid,
      value: flows[toId],
    };
  });

  const scale = scaleQuantile()
    .domain(arcs.map((a) => Math.abs(a.value)))
    .range(inFlowColors.map((c, i) => i));

  arcs.forEach((a: any) => {
    a.gain = Math.sign(a.value);
    a.quantile = scale(Math.abs(a.value));
  });

  return arcs;
}

function getTooltip({ object }) {
  return object && object.properties.name;
}

export default function SrlMap({
  strokeWidth = 1,
  mapStyle = MAP_STYLE,
}: {
  strokeWidth: number,
  mapStyle: string,
}) {
  const [selectedCounty, selectCounty] = useState(null);

  const { isLoading, data } = useData();

  const arcs = useMemo(() => {
    if (!data) return [];
    return calculateArcs(data.features, selectedCounty);
  }, [data, selectedCounty]);

  if (isLoading) return;

  const layers = [
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
        {position: [-122.402, 37.79], color: [255, 0, 0], radius: 1000}
      ],
      getPosition: d => d.position,
      getFillColor: d => d.color,
      getRadius: d => d.radius,
      opacity: 0.7
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
        {source: [-122.3998664, 37.7883697], target: [-122.400068, 37.7900503]}
      ],
      getSourcePosition: d => d.source,
      getTargetPosition: d => d.target,
      getSourceColor: [255, 208, 0],
      getTargetColor: [0, 128, 255],
      getWidth: 8
    }),
  ];

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
        mapboxAccessToken={mapboxAccessToken}
      />
    </DeckGL>
  );
}
