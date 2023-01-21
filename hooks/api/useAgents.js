import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { encodeQueryData, setDefaultHeaders } from '~/core/api/api';

async function getAgents(filters) {
  filters = encodeQueryData({ ...filters, isPlayableCharacter: true });
  const { data } = await api.get(API.AGENTS.FULL + '?' + filters);
  return data;
}

export const useGetAgents = (filters) => {
  return useQuery(['get-agents', filters], () => getAgents(filters));
};

export async function getAgentsDetail({ pageParam = '', language }, slug) {
  let url = API.AGENTS.DETAIL;
  // console.log(pageParam, slug);
  if (pageParam) url = url.replace(':slug', pageParam);
  else url = url.replace(':slug', slug);
  url += '?language=' + language;
  const { data } = await api.get(url);
  return data;
}

export const useGetAgentsDetail = ({ slug, language = 'vi-VN' }) => {
  return useQuery(['get-agents-detail', slug], () => getAgentsDetail({ pageParam: '', language }, slug));
};

export const useGetAgentsDetailEn = ({ slug }) => {
  return useQuery(['get-agents-detail-en', slug], () => getAgentsDetail({ pageParam: '', language: 'en-US' }, slug));
};
