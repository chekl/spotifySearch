import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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
            <h2>{group.name}</h2>
            <br/>
            <p>
              Кількість підписників: {group.followers.total} <br />
              </p>
              <p>Жанр виконання: {group.genres.length !== 0 ? group.genres.map((genre, index) => {
                if(index < 9) {
                  return <span key={genre} className='genreSpan'>{genre}</span>
                }
              }) : <span className='genreSpan'>відсутній</span>
              }
            </p>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}
