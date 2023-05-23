import classNames from 'classnames';
import { useEffect } from 'react';
import { Outlet } from 'react-router';

import { useAppDispatch, useAppSelector } from '../../services/app/hooks';
import { coursesInit } from '../../services/features/coursesSlice';
import { Header, Footer } from '../components/common';
import './App.scss';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isDarkMode } = useAppSelector(state => state.theme);

  useEffect(() => {
    dispatch(coursesInit());
  }, [dispatch]);

  return (
    <div className={classNames('App', {
      'App--dark': isDarkMode,
    })}
    >
      <Header />

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};
