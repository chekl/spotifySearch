import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import App from '../../pages/HomePage/App';
const ArtistPage = lazy(() => import('../../pages/ArtistPage/ArtistPage'));
const ArticleListPage = lazy(() => import('../../pages/ArticleListPage/ArticleListPage'));
const AboutPage = lazy(() => import('../../pages/AboutPage/AboutPage'));
const ArticlePage = lazy(() => import('../../pages/ArticlePage/ArticlePage'));

const Element = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/about',
      element: <AboutPage />,
    },
    {
      path: '/articles',
      element: <ArticleListPage />,
    },
    {
      path: '/articles/:id',
      element: <ArticlePage />,
    },
    {
      path: ':id',
      element: <ArtistPage />,
    },
  ]);

  return element;
};

const Wrapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Element />
      </Router>
    </Suspense>
  );
};

export default Wrapper;
