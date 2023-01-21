import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { encodeQueryData, setDefaultHeaders } from '~/core/api/api';

async function getFeature() {
  //   filters = encodeQueryData({ ...filters, isPlayableCharacter: true });
  const { data } = await api.get('https://api.henrikdev.xyz/valorant/v2/store-featured');
  return data;
}

export const useGetFeature = () => {
  return useQuery(['get-bundle-features'], () => getFeature());
};

export async function getBundleSlug({ pageParam = '', language }, slug) {
  let url = API.AGENTS.DETAIL;
  // console.log(pageParam, slug);
  if (pageParam) url = url.replace(':slug', pageParam);
  else url = url.replace(':slug', slug);
  url += '?language=' + language;
  const { data } = await api.get(url);
  return data;
}

export const useGetBundleSlug = ({ slug, language = 'vi-VN' }) => {
  return useQuery(['get-agents-detail', slug], () => getAgentsDetail({ pageParam: '', language }, slug));
};
