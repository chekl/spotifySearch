import { Paper } from '@mui/material'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import { useEffect, useState } from 'react'
import { getArticleById } from '../../API/mongoDBServises'
import { useParams } from 'react-router-dom'
import BackLink from '../../components/BackLink/BackLink'

const ArticlePage = () => {
  const [article, setArticle] = useState({});
  let { id } = useParams();

  useEffect(()=> {
  const fetchData = async () => {
  const data = await getArticleById(id);
  setArticle(data);
}
fetchData();
},[])

  return (
    <Layout>
    
      <Paper>
      <BackLink />
{ Object.keys(article).length > 0 &&
       <>
  <h2>{article.title}</h2>
        <p>
          {article.text[0]}
        </p> 
</>}
      </Paper>
    </Layout>
  )
}

export default ArticlePage
