import React from 'react'
import { useNavigate } from 'react-router-dom'
import {BiCalendarAlt} from "react-icons/bi"
import '../../pages/Page.css';
import './ArticleCard.css'


const ArticleCard = ({article}) => {
  const navigation = useNavigate();
  return (
    <div className='page-container radius-white' onClick={() => navigation(`/articles/${article._id}`)}>
         <img
         className='article-card-img'
          height="400px"
          src={article.img}
          alt={article.alt}
        /> 
        <div>
          <h2>
            {article.title}
          </h2>
          <div className='date-container'>
          <BiCalendarAlt/>
            <em>{article.date}</em>
          </div>
          <p>
            {article.description}
          </p>
        </div>
    </div>
  )
}

export default ArticleCard
