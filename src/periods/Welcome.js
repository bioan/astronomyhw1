import React from 'react'
import Typography from '@material-ui/core/Typography';

const Welcome = ({classes}) => {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
        A project by Alex Gabor, Cristian Savin and Ioan Botez
      </Typography>

      <Typography paragraph>
        In the Romanian space, astronomy went hand in hand with religion, the first astronomer considered to be the monk Dionisie Exiguus who lived between the 5th and 6th centuries in Tomis, present-day Constanța(a Romanian city). Astronomers consider him the inventor of the Christian era and the establishment of year 1 of the current calendar.
        The monasteries were centers of culture and education before the 18th century. 
      </Typography>

      <Typography paragraph>
        The Prince Constantin Brâncoveanu, founder of churches and supporter of the artistic tendencies of his time, is related to the study of the sky in Romanian premodernity.
        Astronomy in the Romanian space was a passion, but also a scientific effort of some people who were looking for explanations for themselves and for those around them about the physical and the spiritual world. The conflict between science and religion, in the Romanian Lands, is in fact the same type of search.
      </Typography>
    </main>
  )
}

export default Welcome
