export const API_ROOT = process.env.SERVER_URI;

export const TIMEOUT = 15000;

export const API = {
  AGENTS: {
    FULL: '/agents',
    DETAIL: '/agents/:slug',
  },
  BUNDLES: {
    FULL: '/bundles',
    SLUG: '/bundles/:slug',
  },
};
