import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { encodeQueryData, setDefaultHeaders } from '~/core/api/api';

async function getMaps(filters) {
  filters = encodeQueryData(filters);
  const { data } = await api.get(API.MAPS.FULL + '?' + filters);
  return data;
}

export const useGetFeature = () => {
  return useQuery(['get-bundle-features'], () => getFeature());
};

export async function getBundleSlug({ pageParam = '', language = '' }, slug) {
  let url = API.BUNDLES.SLUG;
  // console.log(pageParam, slug);
  if (pageParam) {
    url = url.replace(':slug', pageParam);
  } else {
    url = url.replace(':slug', slug);
  }
  url += `?language=${language}`;
  const { data } = await api.get(url);
  return data;
}

export const useGetBundleSlug = ({ slug, language = 'vi-VN' }) => {
  return useQuery(['get-bundles-detail', slug], () => getBundleSlug({ pageParam: '', language }, slug));
};
