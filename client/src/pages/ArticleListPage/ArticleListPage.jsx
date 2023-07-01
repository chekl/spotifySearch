import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Paper } from '@mui/material';
import BackLink from '../../components/BackLink/BackLink';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import {articles} from '../../articles/articles'
import { Helmet } from 'react-helmet';

const ArticleListPage = () => {
  return (
    <>
    <Helmet>
      <title>Статті про музику | українські пісні</title>
      <meta name="description" content='Українська музика, виконавці, нові хіти та гурти - переходь сюди, щоб поринути в цікавий світ мелодії! Читайте та захоплюйтеся!'/>
    </Helmet>
     <Layout>
          <Paper className='page-container'>
            <BackLink />
            <p>
              Ми пропонуємо не лише слухати українських виконавців, а ще й
              розширяти власні знання про них!</p><p>
              Тут Ви зможете знайти цікаві статті про музику, її розвиток та
              захопливі закутки пісенної творчості наших співвітчизників.
              Читайте та захоплюйтеся!
            </p>
          </Paper>      
          {articles.map((article) => {
            return <ArticleCard key={article._id} article={article} />;
          })}
    </Layout> 
    </>
    
  );
};

export default ArticleListPage;
