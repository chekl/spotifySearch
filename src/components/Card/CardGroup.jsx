import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';
import "./CardGroup.css"

export default function CardGroup({group}) {
  return (
    <Card className="card">
      <CardActionArea >
      <Box className="cardContent">
        <CardMedia
          component="img"
          image={group.images.length > 0 ? group.images[0].url : "paint.jpg"}
          alt={group.name + " фото гурту"}
          className='cardImg'
        />
                 <CardContent>
          <h2>
          {group.name}
          </h2>
          <p>
            Кількість підписників: {group.followers.total} <br/>
          </p>
        </CardContent> 
      </Box>
      </CardActionArea>
    </Card>
  );
}