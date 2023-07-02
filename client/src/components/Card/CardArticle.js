import React from 'react';
import { CardActionArea, Card } from '@mui/material';
import { Link } from 'react-router-dom';
import './CardArticle.css';

function CardArticle({ article }) {
  return (
    <Card className='card-simple-article'>
      <CardActionArea component={Link} to={`/articles/${article._id}`}>
        <img src={article.img} alt={article.alt} />
        <p>{article.title}</p>
      </CardActionArea>
    </Card>
  );
}

export default CardArticle;
