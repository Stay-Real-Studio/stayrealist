import { useQuery } from '@tanstack/react-query';

const DATA_URL =
  'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/arc/counties.json'; // eslint-disable-line
const COINS_URL = `https://kfoyr571.api.sanity.io/v2021-06-07/data/query/production?query=*[_type=='coin']`;

const fetchData = () => fetch(DATA_URL).then((response) => response.json());
const fetchCoins = () => fetch(COINS_URL).then((response) => response.json());

export const useData = () => {
  return useQuery(['data'], fetchData);
};

export const useCoins = () => {
  return useQuery(['coins'], fetchCoins, {
    refetchOnWindowFocus: false
  });
};
