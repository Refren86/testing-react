import { screen, render } from '@testing-library/react';

import { renderWithRouter } from '../utils/renderWithRouter';

describe('Router', () => {
  test('invalid url', () => {
    render(renderWithRouter(null, '/some-route'));
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
});
