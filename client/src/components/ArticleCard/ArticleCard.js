import React from 'react'
import {Card} from '@mui/material'
import {CardActionArea, CardMedia, CardContent} from '@mui/material'
import { Link } from 'react-router-dom'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import '../../pages/Page.css';
import './ArticleCard.css'


const ArticleCard = ({article}) => {
  return (
    <Card className='page-container'>
             <CardActionArea component={Link} to={`/articles/${article._id}`}>
         
         <CardMedia
          component="img"
          height="400"
          image={article.img}
          alt={article.alt}
        /> 
        <CardContent>
          <h2>
            {article.title}
          </h2>
          <div className='date-container'>
          <CalendarTodayIcon/>
            <em>{article.date}</em>
          </div>
          <p>
            {article.description}
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ArticleCard
