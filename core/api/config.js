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
  BORDER_LEVELS: {
    FULL: '/levelborders',
    SLUG: '/levelborders/:slug',
  },
  MAPS: {
    FULL: 'https://valorant-api.com/v1/maps',
    SLUG: 'https://valorant-api.com/v1/maps/:slug',
  },
};
