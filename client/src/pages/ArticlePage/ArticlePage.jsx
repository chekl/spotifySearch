import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackLink from '../../ui/BackLink/BackLink';
import { BiCalendarAlt } from 'react-icons/bi';
import '../Page.css';
import './ArticlePage.css';
import { articles } from '../../mock/articles';
import { Helmet } from 'react-helmet';
import ArticleFormat from '../../utils/ArticleFormat';
import ArticleRecomends from '../../components/ArticleRecomends/ArticleRecomends';
import Page404 from '../Page404/Page404';
import navigation from '../../utils/navigation';

const ArticlePage = () => {
  let { id } = useParams();

  const article = articles.filter((el) => el._id === id);

  useEffect(() => {
    navigation()
  }, [id]);

  if(!article.length) {
    return <Page404/>;
  }
  
  return (
    <>
      <Helmet>
        <title>{article[0].title}</title>
        <meta name='description' content={article[0].description} />
      </Helmet>
      
        <div className='article-page'>
          <div className='page-container article-container'>
            <BackLink />
            <h1>{article[0].title}</h1>
            <div className='date-container'>
              <BiCalendarAlt/>
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
