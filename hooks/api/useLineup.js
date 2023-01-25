import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { encodeQueryData, setDefaultHeaders } from '~/core/api/api';

async function getCurrentMatch(filters) {
  //   filters = encodeQueryData({ ...filters, isPlayableCharacter: true });
  const { data } = await api.get(
    `https://api.tracker.gg/api/v1/valorant/guides?map=all&agent=sova&ability=all&side=all&sortby=ranking&age=all`
  );
  return data;
}

export const useGetCurrentMatch = (filters) => {
  return useQuery(['get-lineups'], () => getLineups(filters));
};
