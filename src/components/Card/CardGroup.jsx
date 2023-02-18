import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardGroup({group}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={group.images[0].url}
          alt={group.name + " фото гурту"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {group.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {group.followers.total}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}