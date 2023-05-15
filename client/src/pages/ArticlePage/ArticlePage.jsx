import { Paper } from '@mui/material';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useEffect, useState } from 'react';
import { getArticleById, getArticles } from '../../API/mongoDBServises';
import { useParams } from 'react-router-dom';
import BackLink from '../../components/BackLink/BackLink';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import '../Page.css';
import './ArticlePage.css';
import Loader from '../../components/Loader/Loader';
import CardArticle from '../../components/Card/CardArticle';

const ArticlePage = () => {
  const [article, setArticle] = useState({});
  const [list, setList] = useState([]);
  let { id } = useParams();
  let text = '';
  let articleList = [];

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      const data = await getArticleById(id);
      const list = await getArticles();
      setList(list);
      setArticle(data);
    };
    fetchData();
  }, [id]);

  if (article.text) {
    text = article.text.toString().split('/n');
  }

  if (list.length) {
    articleList = list.filter((el) => el._id !== id);
  }

  return (
    <Layout>
     {Object.keys(article).length  > 0 && Object.keys(articleList).length > 0 ? (
      <div className='article-page'>
       <Paper className='page-container'>
        <BackLink />
            <h2>{article.title}</h2>
            <div className='date-container'>
              <CalendarTodayIcon />
              <em>{article.date}</em>
            </div>
            <div>
              {text.map((text, index) => {
                return index === 2 ? (
                  <div key={index}>
                    <img
                      src={article.img}
                      alt={article.title}
                      className='article-img'
                    />
                    <p>{text}</p>
                  </div>
                ) : (
                  <p key={index}>{text}</p>
                );
              })}
            </div>
      </Paper>
        <Paper className="list-container">
          <h3>Читайте також:</h3>
          <div className='list'>
            {articleList.map((article) => (
              <CardArticle key={article._id} article={article}/>
            ))}
          </div>
        </Paper> 
      </div>
      
      ) : (
          <Loader />
        )}
    </Layout>
  );
};

export default ArticlePage;
