import { TOGGLE_SOCKET_STREAMS } from '../../constants';
import { toggleSocketStreams } from '../../actions';

describe('toggleSocketStreams action', () => {
  const expectedActionToggleSocketStreams = {
    type: TOGGLE_SOCKET_STREAMS,
    status: false,
  };

  const { status } = expectedActionToggleSocketStreams;

  it('toggleSocketStreams', () => {
    expect(toggleSocketStreams(status)).toEqual(
      expectedActionToggleSocketStreams,
    );
  });

  it('toggleSocketStreams should return an action', () => {
    expect(toggleSocketStreams(status)).toMatchSnapshot();
  });
});
