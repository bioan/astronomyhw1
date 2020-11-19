import React from 'react'
import Typography from '@material-ui/core/Typography'
// import Card from '../Card'

const Sketches = ({classes}) => {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
        Sketches
      </Typography>
    </main>
  )
}

export default Sketches