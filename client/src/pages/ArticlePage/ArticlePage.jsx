import { Paper } from '@mui/material';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackLink from '../../components/BackLink/BackLink';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import '../Page.css';
import './ArticlePage.css';
import CardArticle from '../../components/Card/CardArticle';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { articles } from '../../articles/articles';
import { Helmet } from 'react-helmet';

const ArticlePage = () => {
  let [elId, setElId] = useState(0);
  let { id } = useParams();
  
  const article = articles.filter((el) => el._id === id);
  const articleList = articles.filter((el) => el._id !== id);
  let headnum = 0;

  const [width, setWidth] = useState(window.innerWidth);

  const setWindowDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);
    return () => {
      window.removeEventListener('resize', setWindowDimensions);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
 

  return (
    <>
    <Helmet>
      <title>{article[0].title}</title>
      <meta name="description" content={article[0].description}/>
    </Helmet>

 <Layout>
      <div className='article-page'>
        <Paper className='page-container'>
          <BackLink />
          <h1>{article[0].title}</h1>
          <div className='date-container'>
            <CalendarTodayIcon />
            <em>{article[0].date}</em>
          </div>

          <div>
            {article[0].text.map((paragraph, index) => {
              let header = paragraph.includes('*');

              if(header) {
                paragraph = paragraph.split('*')[1];
              }

              let link = paragraph.split("/");

              return index === 2 ?
                <>
                <div key={index}>
                  <img
                    src={article[0].img}
                    alt={article[0].alt}
                    className='article-img'
                  />

                  {header &&
                  <h2>{article[0].headers[headnum++]}</h2>
                  }    

                  {link.length > 1 &&
                    <p>{link[0]} <strong>
                  <a className="article-link" href={article[0].link}>{link[1]}</a>
                  </strong>
                  {link.length > 2 && link[2]}
                </p>
                  }

                  {link.length === 1 &&
                  <p>{paragraph}</p>
                  }

                </div>              
                </>

               : <>
               {header &&
                  <h2>{article[0].headers[headnum++]}</h2>
                  }    

                  {link.length > 1 &&
                    <p>{link[0]} <strong>
                  <a className="article-link" href={article[0].link}>{link[1]}</a>
                  </strong>
                  {link.length > 2 && link[2]}
                </p>
                  }

                  {link.length === 1 &&
                  <p>{paragraph}</p>
                  }
               </>;
            })
            
            }
          </div>

          <br />
        </Paper>
        <Paper className='list-container'>
          <h3>Читайте також:</h3>
          <div className='list'>
            {width > 1000 ? (
              <>
                {articleList.splice(0,5).map((article) => {
                  return <CardArticle key={article._id} article={article} />;
                })}
              </>
            ) : (
              <>
                <button
                  className='slider'
                  onClick={() => {
                    elId !== 0
                      ? setElId(--elId)
                      : setElId(articleList.length - 1);
                  }}
                >
                  <ArrowCircleLeftOutlinedIcon />
                </button>
                <CardArticle key={article._id} article={articleList[elId]} />
                <button
                  className='slider'
                  onClick={() => {
                    elId < articleList.length - 1
                      ? setElId(++elId)
                      : setElId(0);
                  }}
                >
                  <ArrowCircleRightOutlinedIcon />
                </button>
              </>
            )}
          </div>
        </Paper>
      </div>
    </Layout>
    </>
   
  );
};

export default ArticlePage;
