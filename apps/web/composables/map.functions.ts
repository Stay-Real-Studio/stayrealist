import { scaleQuantile } from 'd3-scale'
import { inFlowColors } from '../constants/map.constants'

export function calculateArcs(data, selectedCounty) {
  if (!data || !data.length) {
    return null
  }
  if (!selectedCounty) {
    selectedCounty = data.find((f) => f.properties.name === 'Los Angeles, CA')
  }
  const { flows, centroid } = selectedCounty.properties

  const arcs = Object.keys(flows).map((toId) => {
    const f = data[toId]
    return {
      source: centroid,
      target: f.properties.centroid,
      value: flows[toId],
    }
  })

  const scale = scaleQuantile()
    .domain(arcs.map((a) => Math.abs(a.value)))
    .range(inFlowColors.map((c, i) => i))

  arcs.forEach((a: any) => {
    a.gain = Math.sign(a.value)
    a.quantile = scale(Math.abs(a.value))
  })

  return arcs
}

