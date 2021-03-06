import { ACTION_TYPES } from '../constants';

const {
  SET_ACTIVE_MARKET,
  UPDATE_MARKET_PAIRS,
  TOGGLE_SOCKET_STREAMS,
} = ACTION_TYPES;

export const setActiveMarket = data => ({ type: SET_ACTIVE_MARKET, data });

export const updateMarketPairs = data => ({ type: UPDATE_MARKET_PAIRS, data });

export const toggleSocketStreams = status => ({
  type: TOGGLE_SOCKET_STREAMS,
  status,
});
