import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Paper } from '@mui/material';
import BackLink from '../../components/BackLink/BackLink';
import { useEffect, useState } from 'react';
import { getArticles } from '../../API/mongoDBServises';
import ArticleCard from '../../components/ArticleCard/ArticleCard';

const ArticleListPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(()=> {
        const fetchData = async () => {
      const data = await getArticles();
      setArticles(data);
    }
    fetchData();
  },[])
  
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
      {Object.keys(articles).length > 0 && articles.map((article) => {
        return <ArticleCard key={article._id} article={article}/>
      })}
    </Layout>
  );
};

export default ArticleListPage;

