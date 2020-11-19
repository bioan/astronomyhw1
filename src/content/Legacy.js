import React from 'react'
import Typography from '@material-ui/core/Typography'
// import Card from '../Card'

const Legacy = ({classes}) => {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
        Legacy
      </Typography>
    </main>
  )
}

export default Legacy