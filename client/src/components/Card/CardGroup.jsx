import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, Box } from '@mui/material';
import './CardGroup.css';
import { Link } from 'react-router-dom';

export default function CardGroup({ group }) {
  return (
    <Card className='card'>
      <CardActionArea component={Link} to={`/${group.id}`}>
        <Box className='cardContent'>
          <img
            src={group.images.length > 0 ? group.images[0].url : 'noimage.png'}
            alt={group.name + ' фото гурту'}
            className='cardImg'
          />
          <CardContent>
            <h2 className='groupName'>{group.name}</h2>
            <p>Кількість підписників: {group.followers.total}</p>
            <p>Жанр виконання:  
            {group.genres.length ? (
              group.genres.map(
                (genre, index) =>
                  index < 3 && (
                    <span key={index} className='genreSpan'>
                      {genre}
                    </span>
                  )
              )
            ) : (
              <span className='genreSpan'>відсутній</span>
            )}
            </p>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}
