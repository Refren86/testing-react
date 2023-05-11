import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';

import { UsersPage } from './UsersPage';
import { renderWithRouter } from '../../utils/renderWithRouter';

jest.mock('axios');

describe('Users component', () => {
  let response;

  beforeAll(() => {
    response = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
        },
        {
          id: 2,
          name: 'Ervin Howell',
        },
        {
          id: 3,
          name: 'Clementine Bauch',
        },
      ],
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders all users', async () => {
    axios.get.mockReturnValue(response);
    render(renderWithRouter(null, '/users'));
    const users = await screen.findAllByRole('listitem');
    expect(axios.get).toBeCalledTimes(1);
    expect(users).toHaveLength(response.data.length);
  });

  test('redirects to user details page on user click', async () => {
    axios.get.mockReturnValue(response);

    render(renderWithRouter(null, '/users'));

    const users = await screen.findAllByRole('link');
    userEvent.click(users[0]);
    expect(screen.getByTestId('user-details-page')).toBeInTheDocument();
  });
});
