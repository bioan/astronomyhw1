import React from 'react'
import Typography from '@material-ui/core/Typography'
// import Card from '../Card'

const Conclusion = ({classes}) => {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
        The conclusion that can be drawn from this article is that we cannot know exactly what were the main inspirations for the painting “The Starry Night”, but we can draw some “as close as possible” interpretations. The main interpretations of this painting can be found under the tab “Date and time”, which explains step by step why we think Vincent Van Gogh chose to paint the sky like that. Those conclusions are based purely on the letters sent between him and his brother, Theo van Gogh. 
      </Typography>
    </main>
  )
}

export default Conclusion