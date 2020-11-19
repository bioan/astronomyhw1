import React from 'react'
import Typography from '@material-ui/core/Typography'

const Inspiration = ({classes}) => {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
        Inspiration
      </Typography>
    </main>
  )
}

export default Inspiration