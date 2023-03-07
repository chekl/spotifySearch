import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Paper } from '@mui/material';
import BackLink from '../../components/BackLink/BackLink';

const ArticleListPage = () => {
  return (
    <Layout>
      <Paper>
        <BackLink />
        <p>
          Ми пропонуємо не лише слухати українських виконавців, а ще й розширяти
          власні знання про них!
          <br />
          Тут Ви зможете знайти цікаві статті про музику, її розвиток та
          захопливі закутки пісенної творчості наших співвідчизників. Читайте та
          захоплюйтеся!
        </p>
      </Paper>
    </Layout>
  );
};

export default ArticleListPage;
