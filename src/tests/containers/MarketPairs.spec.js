import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedMarketPairs, {
  MarketPairs,
} from '../../containers/MarketPairs';

describe('MarketPairs container', () => {
  const props = {
    marketPairs: {},
    activeMarket: {},
    connectSocket: false,
    setActiveMarket: () => {},
    updateMarketPairs: () => {},
    toggleSocketStreams: () => {},
  };

  const mockStore = configureStore();

  describe('MarketPairs container initial', () => {
    const marketPairs = shallow(<MarketPairs {...props} />);

    it('renders initial', () => {
      expect(marketPairs.find('Loader')).toHaveLength(1);
    });

    it('not render <Title>', () => {
      expect(marketPairs.find('Title')).toHaveLength(0);
    });

    it('not render <Table />', () => {
      expect(marketPairs.find('Table')).toHaveLength(0);
    });

    it('renders properly', () => {
      expect(marketPairs.html()).toMatchSnapshot();
    });
  });

  describe('MarketPairs container state', () => {
    const {
      marketPairs: marketPairsProps,
      activeMarket: { market: marketProps },
    } = props;

    const initialState = {
      isLoaded: marketPairsProps && marketProps,
      error: undefined,
    };

    const marketPairs = shallow(<MarketPairs {...props} />);

    it('initialize MarketPairs with initial state', () => {
      marketPairs.setState(initialState);

      expect(marketPairs.state()).toEqual(initialState);
    });

    describe('State handlers', () => {
      describe('MarketPairs container with error', () => {
        const nextState = {
          ...initialState,
          error: {
            message: 'Request failed with status code 400',
          },
        };

        it('initialize MarketPairs with error', () => {
          marketPairs.setState(nextState);

          expect(marketPairs.state().error).toEqual(nextState.error);
        });

        it('renders error', () => {
          expect(marketPairs.find('.alert').text()).toEqual(
            'Request failed with status code 400',
          );
        });

        it('render only one <div>', () => {
          expect(marketPairs.find('div')).toHaveLength(1);
        });

        it('not render <Table />', () => {
          expect(marketPairs.find('Table')).toHaveLength(0);
        });
      });

      describe('MarketPairs container isLoaded', () => {
        it('initialize MarketPairs with isLoaded', () => {
          const nextState = {
            ...initialState,
            isLoaded: true,
          };

          marketPairs.setState(nextState);

          expect(marketPairs.state().isLoaded).toEqual(nextState.isLoaded);
        });

        it('renders <Loader />', () => {
          const nextState = {
            ...initialState,
            isLoaded: true,
          };

          marketPairs.setState(nextState);

          expect(marketPairs.find('Loader')).toHaveLength(0);
        });

        it('initialize MarketPairs without isLoaded', () => {
          const nextState = {
            ...initialState,
            isLoaded: false,
          };

          marketPairs.setState(nextState);

          expect(marketPairs.find('Loader')).toHaveLength(1);
        });

        afterEach(() => {
          marketPairs.setState(initialState);
        });
      });

      afterAll(() => {
        marketPairs.setState(initialState);
      });
    });
  });

  describe('MarketPairs container setActiveMarket', () => {
    const mockSetActiveMarket = jest.fn();
    const nextProps = {
      ...props,
      activeMarket: {
        market: 'BTC',
      },
      marketPairs: {
        BNBBTC: {},
        ETHUSDT: {},
        ENJBTC: {},
      },
      setActiveMarket: mockSetActiveMarket,
    };

    const marketPairs = shallow(<MarketPairs {...nextProps} />);

    describe('when clicking into tab button', () => {
      const tab = 'BNB';

      beforeEach(() => {
        marketPairs.find(`NavItem[pair="${tab}"]`).simulate('click', {
          currentTarget: {
            dataset: {
              tab,
            },
          },
        });
      });

      it('dispatches the `setActiveMarket()` method it receives from props', () => {
        expect(mockSetActiveMarket).toHaveBeenCalledTimes(1);
      });
    });

    describe('when setting active tab', () => {
      const tab = 'BNB';

      beforeEach(() => {
        marketPairs.find(`NavItem[pair="${tab}"]`).simulate('click', tab);
      });

      it('dispatches the `setActiveMarket()` method it receives from props', () => {
        expect(mockSetActiveMarket).toHaveBeenCalled();
      });
    });
  });

  describe('MarketPairs container is loaded', () => {
    const nextProps = {
      ...props,
      activeMarket: {
        market: 'BTC',
      },
      marketPairs: {
        BNBBTC: {
          symbol: 'BNBBTC',
        },
        ETHUSDT: {
          symbol: 'ETHUSDT',
        },
        ENJBTC: {
          symbol: 'ENJBTC',
        },
      },
    };

    const marketPairs = shallow(<MarketPairs {...nextProps} />);

    it('renders <Table /> template', () => {
      expect(marketPairs.find('Table')).toHaveLength(1);
    });

    it('not render <Loader />', () => {
      expect(marketPairs.find('Loader')).toHaveLength(0);
    });

    it('renders properly', () => {
      expect(marketPairs.html()).toMatchSnapshot();
    });

    it('renders class active', () => {
      const { market } = nextProps.activeMarket;

      expect(
        marketPairs.find(`NavItem[pair="${market}"]`).prop('active'),
      ).toEqual(true);
    });
  });

  describe('Connected MarketPairs container', () => {
    const store = mockStore({});

    const marketPairs = shallow(
      <ConnectedMarketPairs store={store} {...props} />,
    );

    it('renders properly', () => {
      expect(marketPairs.html()).toMatchSnapshot();
    });
  });

  describe('MarketPairs container with default props', () => {
    const nextProps = {};

    const marketPairs = shallow(<MarketPairs {...nextProps} />);

    it('renders properly', () => {
      expect(marketPairs.html()).toMatchSnapshot();
    });

    it('not render <Table />', () => {
      expect(marketPairs.find('Table')).toHaveLength(0);
    });

    it('renders <Loader />', () => {
      expect(marketPairs.find('Loader')).toHaveLength(1);
    });
  });
});
