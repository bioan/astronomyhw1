import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '../Card'

const book = [{
  description: 'First Romanian astronomy book written by Gh. Asachi and A. Marin',
  image: '/AsachiBook.png'
}]

const Nineteenth = ({classes}) => {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
      1823 - A rich poet named Costache Conachi bought a telescope(focal length of 2m and a mirror diameter of 157mm) from Vienna. This telescope was used by students in their practical studies. Later the telescope was donated(again) to the Observatory of Iasi.
      </Typography>

      <Typography paragraph>
      1828-1832 - New observations were made, determining the geographical coordinates of some of the biggest cities in Romania(of that time). Cities like Iași, Galaţi(again), Bucharest, Călăraşi, Craiova, Constanţa, Calafat.
      </Typography>

      <Typography paragraph>
      1829,1830 - The first romanian astronomy textbooks were written, by A. Marin and Gheorghe Asachi respectively.
      <Card style={classes.root}  data={book}/>
      
      </Typography>

      <Typography paragraph>
      1874 - The first romanian professor of astronomy Neculai Culianu, together with prof. Stefan Micle observed the transit of the planet Venus over the disk of the Sun.
      </Typography>

      <Typography paragraph>
        1880 - Constantin Căpităneanu drew a precise map of the country using binoculars for the latitudes, two refracting telescopes, a chronograph and several precision clocks.
      </Typography>
    </main>
  )
}

export default Nineteenth
