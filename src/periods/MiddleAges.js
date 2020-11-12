import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '../Card'

const MiddleAges = ({classes}) => {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
      1445 - Ioan Viteazu(believed to be the first Romanian astronomical observer) establishes the Observatory of Oradea - an important center of Renaissance culture of medieval times(in Romania). The foundation of the Observatory spread the interest of knowledge in the field of astronomy.
      </Typography>

      <Typography paragraph>
      1759 - The construction, led by Maximilian Hell, of the astronomical tower in Transilvania was complete(later destroyed by flames in 1798).
      <br></br>
      <Card style={classes.root} 
          description='Dressed in Sami clothing during his stay at Vardø (Norway) in 1769 to observe the Venus transit'
          title='Maximilian Hell observing a Venus transit'
          image='/MaximilianHell.jpg' 
          style={{maxWidth: '400px'}}/>

      </Typography>

      <Typography paragraph>
      1762 - Ruggero Giuseppe Boscovich(one of the greatest astronomers of the time), made determinations of the latitudes and longitudes of Galaţi(now a city in Romania). Ruggero also supported various other astronomical studies in Galaţi.
      </Typography>

      <Typography paragraph>
      1795 - Opening of the second observatory at Alba Iulia, by Bishop Ignatius Batthyany, a self described "zealous protector and promoter of the sciences in Transylvania". The observatory was later closed in 1860 for unknown reasons.
      </Typography>
    </main>
  )
}

export default MiddleAges
