import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Loader from '../ui/Loader/Loader';
const App = lazy(() => import('../pages/HomePage/App'))
const ArtistPage = lazy(() => import('../pages/ArtistPage/ArtistPage'));
const ArticleListPage = lazy(() => import('../pages/ArticleListPage/ArticleListPage'));
const AboutPage = lazy(() => import('../pages/AboutPage/AboutPage'));
const ArticlePage = lazy(() => import('../pages/ArticlePage/ArticlePage'));

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
    <Suspense fallback={<Loader/>}>
      <Router>
        <Layout>
          <Element />
        </Layout>
      </Router>
    </Suspense>
  );
};

export default Wrapper;
