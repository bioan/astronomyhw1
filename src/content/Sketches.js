import React from 'react'
import Typography from '@material-ui/core/Typography'
// import Card from '../Card'

const okok = [{
  description: 'Starry Night, F 1540 / JH 1732',
  title: '',
  image: '/okok.png' 
}]

const Sketches = ({classes}) => {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
        Vincent van Gogh, while being a self-admitted patient at Saint-Paul asylum in Saint-Rémy-de-Provence, produced a number of paintings that are now known as ‘Saint-Paul Asylum, Saint-Rémy’. Many of the paintings and sketches he did in his first month at the asylum, pushed him to produce the ‘Starry Night’, considered as one of his best masterpieces. The most important drawing/sketch of the  ‘Starry Night’ is in fact the ‘Starry Night’ drawing by Vincent van Gogh, which was sent to van Gogh’s brother in a letter. There are also speculations that the sketch is held in a secret storage facility in Russia and belongs to the Museum of Architecture, Moscow. The sketch, previously belonged to Kunsthalle Bremen, during WWII it was seized(alongside 362 other drawings) by Red Army officer Victor Baldin and transported to the Soviet Union.
      </Typography>
	  <Card data={okok}/>
    </main>
  )
}

export default Sketches