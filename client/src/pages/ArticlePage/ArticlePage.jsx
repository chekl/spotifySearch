import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackLink from '../../components/BackLink/BackLink';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import '../Page.css';
import './ArticlePage.css';
import { articles } from '../../articles/articles';
import { Helmet } from 'react-helmet';
import ArticleFormat from '../../articles/ArticleFormat';
import ArticleRecomends from '../../components/ArticleRecomends/ArticleRecomends';

const ArticlePage = () => {
  let { id } = useParams();

  const article = articles.filter((el) => el._id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{article[0].title}</title>
        <meta name='description' content={article[0].description} />
      </Helmet>
      
        <div className='article-page'>
          <div className='page-container'>
            <BackLink />
            <h1>{article[0].title}</h1>
            <div className='date-container'>
              <CalendarTodayIcon />
              <em>{article[0].date}</em>
            </div>
            <ArticleFormat article={article} />
          </div>
          <ArticleRecomends id={id} />
        </div>
    </>
  );
};

export default ArticlePage;
