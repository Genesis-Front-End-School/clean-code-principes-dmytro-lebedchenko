import { useEffect } from 'react';
import { Outlet } from 'react-router';

import { useAppDispatch } from '../../services/app/hooks';
import { coursesInit } from '../../services/features/coursesSlice';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import './App.scss';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(coursesInit());
  }, [dispatch]);

  return (
    <div className="App">
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
