import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '../router/AppRouter';

export const AppProviders = ({ children, initialRoute = '/' }) => {
  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {children}
    </MemoryRouter>
  );
};
