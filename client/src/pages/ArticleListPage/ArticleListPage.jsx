import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Paper } from '@mui/material';
import BackLink from '../../components/BackLink/BackLink';
import { useEffect, useState } from 'react';
import { getArticles } from '../../API/mongoDBServises';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import Loader from '../../components/Loader/Loader';

const ArticleListPage = () => {
  const [articles, setArticles] = useState([]);
  const [footer, setFooter] = useState('absolute');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticles();
      setArticles(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if(Object.keys(articles).length > 0) setFooter('relative')
  }, [articles]);





  return (
    <Layout footerClass={footer}>
          <Paper className='page-container'>
            <BackLink />
            <p>
              Ми пропонуємо не лише слухати українських виконавців, а ще й
              розширяти власні знання про них!
              <br />
              Тут Ви зможете знайти цікаві статті про музику, її розвиток та
              захопливі закутки пісенної творчості наших співвідчизників.
              Читайте та захоплюйтеся!
            </p>
            <br/>
          </Paper>      
      {Object.keys(articles).length > 0 ? 
      (
        <>
          {articles.map((article) => {
            return <ArticleCard key={article._id} article={article} />;
          })}
        </>
      ) : (

        <Loader />
      )}
    </Layout>
  );
};

export default ArticleListPage;
