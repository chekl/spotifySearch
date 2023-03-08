import React from 'react'
import {Card} from '@mui/material'
import {CardActionArea, CardMedia, CardContent} from '@mui/material'
import { Link } from 'react-router-dom'


const ArticleCard = ({article}) => {
  return (
    <Card>
             <CardActionArea component={Link} to={`/articles/${article._id}`}>
{/*         <CardMedia
          component="img"
          height="200"
          image={article.img || "noimage.png"}
          alt="article alt"
        /> */}
        <CardContent>
          <p>
            {article.title}
          </p>
          <p>
            {article.description}
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ArticleCard
