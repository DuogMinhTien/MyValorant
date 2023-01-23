import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { encodeQueryData, setDefaultHeaders } from '~/core/api/api';

async function getCurrentMatch() {
  //   filters = encodeQueryData({ ...filters, isPlayableCharacter: true });
  const { data } = await api.get(
    'https://api.henrikdev.xyz/valorant/v3/by-puuid/matches/ap/29b81e17-8292-5a8d-b57b-d046c77f16b7?size=1'
  );
  return data;
}

export const useGetCurrentMatch = () => {
  return useQuery(['get-current-match'], () => getCurrentMatch());
};

async function getListTier(filters) {
  filters = encodeQueryData(filters);
  const { data } = await api.get(API.TIER.FULL + '?' + filters);
  return data;
}

export const useGetListTier = (filters) => {
  return useQuery(['get-list-tier'], () => getListTier(filters));
};
