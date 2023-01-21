import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { encodeQueryData, setDefaultHeaders } from "~/core/api/api";

async function getBanner(filters) {
  filters = encodeQueryData(filters);
  const { data } = await api.get(API.BANNER + "?" + filters);
  return data;
}

export const useGetBanner = (filters) => {
  return useQuery(["get-banner", filters], () => getBanner(filters))
};
