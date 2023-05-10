import { Paper } from '@mui/material'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import { useEffect, useState } from 'react'
import { getArticleById } from '../../API/mongoDBServises'
import { useParams } from 'react-router-dom'
import BackLink from '../../components/BackLink/BackLink'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import '../Page.css'
import './ArticlePage.css'

const ArticlePage = () => {
  const [article, setArticle] = useState({});
  let { id } = useParams();
  let text = '';

  useEffect(()=> {
  const fetchData = async () => {
  const data = await getArticleById(id);
  setArticle(data);
}
fetchData();
},[])

if(article.text) {
  text = article.text.toString().split('/n')
}

  return (
    <Layout>
    
      <Paper className='page-container'>
      <BackLink />
{ Object.keys(article).length > 0 &&
       <>
  <h2>{article.title}</h2>
  <div className='date-container'>
  <CalendarTodayIcon/>
    <p>
  {article.date}
  </p>
  </div>
  <div className='article-text'>
    {text.map((text, index) => {
       return index == 2 ? 
        <div key={index}>
         <img src={article.img} alt={article.title} className='article-img' />
         <p>{text}</p> 
        </div>
        :     
         <p key={index}>{text}</p>
    })}
  </div>

</>}
      </Paper>
    </Layout>
  )
}

export default ArticlePage
