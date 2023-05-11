import userEvent from '@testing-library/user-event';
import { render, screen } from "@testing-library/react";

import { Navbar } from "./Navbar";
import { renderWithRouter } from '../../utils/renderWithRouter';

describe('Navbar component', () => {
  test('links works correctly', () => {
    render(renderWithRouter(<Navbar />));

    const mainLink = screen.getByTestId('link-main');
    const aboutLink = screen.getByTestId('link-about');
    const usersLink = screen.getByTestId('link-users');

    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    userEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
    userEvent.click(usersLink);
    expect(screen.getByTestId('users-page')).toBeInTheDocument();
  })
});
