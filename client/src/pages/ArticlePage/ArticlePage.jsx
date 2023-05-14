import { CardActionArea, Paper, Card } from '@mui/material';
import React, {useContext} from 'react';
import Layout from '../../components/Layout/Layout';
import { useEffect, useState } from 'react';
import { getArticleById, getArticles } from '../../API/mongoDBServises';
import { useParams } from 'react-router-dom';
import BackLink from '../../components/BackLink/BackLink';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import '../Page.css';
import './ArticlePage.css';
import { Link } from 'react-router-dom';

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

  if (list.length){
    articleList = list.filter((el) => el._id !== id)
  }

  return (
    <Layout>
      <Paper className='page-container'>
        <BackLink />
        {Object.keys(article).length > 0 && (
          <>
            <h2>{article.title}</h2>
            <div className='date-container'>
              <CalendarTodayIcon />
              <em>{article.date}</em>
            </div>
            <div>
              {text.map((text, index) => {
                return index == 2 ? (
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
          </>
        )}
      </Paper>
      {articleList &&
      <Paper>
      <h2>Читайте також:</h2>
       <div>
        {articleList.map((el) => <Card key={el._id}>
          <CardActionArea component={Link} to={`/articles/${el._id}`}>
          <p>{el.title}</p>
          <img src={el.img} alt={el.title} height='100px'/> 
          </CardActionArea>        
          </Card>
        )}
       </div> 
      </Paper>
      }

    </Layout>
  );
};

export default ArticlePage;
