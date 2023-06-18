import { useQuery } from "@tanstack/react-query";


// Source data GeoJSON
const DATA_URL =
  'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/arc/counties.json'; // eslint-disable-line

const fetchData = () => fetch(DATA_URL).then(response => response.json())

export const useData = () => { 
  return useQuery(['data'], fetchData)
}