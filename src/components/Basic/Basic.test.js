import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Basic from './Basic';

describe('Basic component', () => {
  test('renders correctly', () => {
    render(<Basic />);
    const headerElement = screen.getByText(/Hello world/i);
    const btnElement = screen.getByRole('button');
    const inputElement = screen.getByPlaceholderText(/input value/i);

    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveStyle({ color: 'red' })
    expect(btnElement).toBeInTheDocument();
    // expect(inputElement).toMatchSnapshot();
  });

  test('should be rendered in after getting async data', async () => {
    render(<Basic />);
    const dataEl = await screen.findByTestId('fetch-res');
    expect(dataEl).toBeInTheDocument();
  })

  test('toggle button functionality', () => {
    render(<Basic />);
    const btnElement = screen.getByRole('button');

    expect(screen.queryByText(/hi mom/i)).not.toBeInTheDocument();
    fireEvent.click(btnElement);
    expect(screen.getByText(/hi mom/i)).toBeInTheDocument();
    fireEvent.click(btnElement);
    expect(screen.queryByText(/hi mom/i)).not.toBeInTheDocument();
  })

  test('input functionality', async () => {
    render(<Basic />);
    const inputEl = screen.getByPlaceholderText(/input value/i);

    expect(inputEl).toHaveValue('');
    // fireEvent.input(inputEl, {
    //   target: {
    //     value: 'asdqwe'
    //   }
    // });
    userEvent.type(inputEl, 'asdqwe')
    expect(screen.getByPlaceholderText(/input value/i)).toHaveValue('asdqwe');
    userEvent.clear(inputEl);
    expect(screen.getByPlaceholderText(/input value/i)).toHaveValue('');
  })
});
