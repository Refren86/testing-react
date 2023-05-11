import { Route, Routes } from 'react-router-dom';

import { MainPage } from '../pages/MainPage';
import { AboutPage } from '../pages/AboutPage';
import { UsersPage } from '../pages/UsersPage/UsersPage';
import { UserDetailsPage } from '../pages/UserDetailsPage';
import { ErrorPage } from '../pages/ErrorPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/:id" element={<UserDetailsPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};
