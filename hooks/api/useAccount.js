import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { encodeQueryData, setDefaultHeaders } from '~/core/api/api';

async function getAccount({ username, tagline }) {
  let url = 'https://api.henrikdev.xyz/valorant/v1/account/:username/:tagline';
  // console.log(pageParam, slug);
  url = url.replace(':username', username);
  url = url.replace(':tagline', tagline);
  const { data } = await api.get(url);
  return data;
}

export const useGetAccount = ({ username, tagline }) => {
  return useQuery(['get-account'], () => getAccount({ username, tagline }));
};

async function getBorderLevel() {
  let url = API.BORDER_LEVELS.FULL;
  const { data } = await api.get(url);
  return data;
}
export const useGetBorderLevel = () => {
  return useQuery(['get-border-level'], () => getBorderLevel());
};
