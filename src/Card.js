import React from 'react'
import { Card as MCard} from '@material-ui/core'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const Card = ({style, description, title, image}) => {
  return (
    <MCard className={style}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt={description}
          image={image}
          title={title}
          style={{maxWidth: '400px'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      </MCard>
  )
}

export default Card
