import { UPDATE_MARKET_PAIRS } from '../../constants';
import { updateMarketPairs } from '../../actions';

describe('updateMarketPairs action', () => {
  const expectedActionUpdateMarketPairs = {
    type: UPDATE_MARKET_PAIRS,
    data: {
      BNBBTC: {},
      ETHUSDT: {},
      ENJBTC: {},
    },
  };

  const { data } = expectedActionUpdateMarketPairs;

  it('updateMarketPairs', () => {
    expect(updateMarketPairs(data)).toEqual(expectedActionUpdateMarketPairs);
  });

  it('should handle updateMarketPairs', () => {
    expect(updateMarketPairs(data)).toMatchSnapshot();
  });
});
