import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { encodeQueryData, setDefaultHeaders } from "~/core/api/api";

// Search alphabet
async function trendingNFT() {
  const { data } = await api.get(API.NFT.TRENDING);
  return data;
}

export const useTrendingNFT = () => {
  return useQuery(["trending-nft"], () => trendingNFT())
};

async function leaderboardNFT() {
  const { data } = await api.get(API.NFT.LEADERBOARD);
  return data;
}

export const useLeaderboardNFT = () => {
  return useQuery(["leaderboard-nft"], () => leaderboardNFT())
};

async function searchNFT(keyword) {
  const { data } = await api.get(API.NFT.SEARCH + "?keyword=" + keyword);
  return data;
}

export const useSearchNFT = (keyword) => {
  return useQuery(["search-nft", keyword], () => searchNFT(keyword))
};

async function newestNFT() {
  const { data } = await api.get(API.NFT.NEWEST);
  return data;
}

export const useNewestNFT = () => {
  return useQuery(["newest-nft"], () => newestNFT())
};

async function sortingNFT(sorting) {
  const { data } = await api.get(API.NFT.SORTING + "?sorting=" + sorting);
  return data;
}

export const useSortingNFT = (sorting) => {
  return useQuery(["sorting-nft", sorting], () => sortingNFT(sorting))
};



