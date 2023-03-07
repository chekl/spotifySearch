import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import App from '../../pages/HomePage/App';
import ArtistPage from '../../pages/ArtistPage/ArtistPage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import ArticleListPage from '../../pages/ArticleListPage/ArticleListPage';
import ArticlePage from '../../pages/ArticlePage/ArticlePage';

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
      path: '/artisles',
      element: <ArticleListPage />,
    },
    {
      path: ':id',
      element: <ArtistPage />,
    },
    {
      path: '/artisles:id',
      element: <ArticlePage />,
    },
  ]);

  return element;
};

const Wrapper = () => {
  return (
    <Router>
      <Element />
    </Router>
  );
};

export default Wrapper;
