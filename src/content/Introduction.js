import React from 'react'
import Typography from '@material-ui/core/Typography'
// import Card from '../Card'

const Introduction = ({classes}) => {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
        We are 3 reporters that worked to build up a short summary of the life of Vincent Van Gogh, spotlighting ‘The Starry Night’. Vincent Van Gogh had a really interesting life, travelling in a lot of cities, taking insight from everything. He had a really close relationship with nature and the way it interacts with our world. He expressed his feelings through art and paintings, most of which were not known during his lifetime.
      </Typography>
    </main>
  )
}

export default Introduction
