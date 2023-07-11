import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardRecomendArticle.css';

function CardRecomendArticle({ article }) {
  const navigation = useNavigate();
  return (
    <div className='card-simple-article radius-white' onClick={() =>navigation(`/articles/${article._id}`)}>
        <img src={article.img} alt={article.alt} />
        <p>{article.title}</p>
    </div>
  );
}

export default CardRecomendArticle;
