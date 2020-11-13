import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { Card as MCard} from '@material-ui/core'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

// const Card = ({style, description, title, image}) => {
const Card = ({ data }) => {

  const classes = useStyles()
  const [modal, setModal] = useState(false)
  const [index, setIndex] = useState(0)

  const handleClose = () => setModal(false)

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
    <MCard className={classes.root} style={{margin: 'auto'}}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt={data[index].description}
          image={data[index].image}
          title={data[index].title}
          style={{maxWidth: '400px'}}
          onClick={() => setModal(true)}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data[index].title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data[index].description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {data.map(({buttonLabel}, idx) => 
          <Button color="primary" onClick={()=> setIndex(idx)}>
            {buttonLabel}
          </Button>
        )}
      </CardActions>
      </MCard>
      <Modal
        style={{display:'flex', justifyContent:'center', alignItems:'center'}}
        open={modal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <img src={data[index].image} onClick={handleClose}/>
      </Modal>
      </div>
  )
}

export default Card
