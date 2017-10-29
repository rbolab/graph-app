export type GraphType = string;

export const GRAPH_TYPES = {
  RATING_DISTRIBUTION: 'RATING_DISTRIBUTION',
  RATING_MEMENTUM: 'RATING_MEMENTUM',
   RATING_UNKNOWN: 'RATING_UNKNOWN'
};

export const URLS = {
  [GRAPH_TYPES.RATING_DISTRIBUTION]: '/api/ratingDistribution',
  [GRAPH_TYPES.RATING_MEMENTUM]: '/api/ratingMementum',
  [GRAPH_TYPES.RATING_UNKNOWN]: '/api/ratingMementum'
};

