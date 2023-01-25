import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { encodeQueryData, setDefaultHeaders } from '~/core/api/api';

async function getCurrentMatch(filters) {
  //   filters = encodeQueryData({ ...filters, isPlayableCharacter: true });
  const { data } = await api.get(
    `https://api.henrikdev.xyz/valorant/v3/by-puuid/matches/${filters?.region || 'ap'}/${filters?.puuid}?size=${
      filters?.size || '1'
    }`
  );
  return data;
}

export const useGetCurrentMatch = (filters) => {
  return useQuery(['get-current-match'], () => getCurrentMatch(filters));
};

async function getListTier(filters) {
  filters = encodeQueryData(filters);
  const { data } = await api.get(API.TIER.FULL + '?' + filters);
  return data;
}

export const useGetListTier = (filters) => {
  return useQuery(['get-list-tier'], () => getListTier(filters));
};
