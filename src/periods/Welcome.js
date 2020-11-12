import React from 'react'
import Typography from '@material-ui/core/Typography';

const Welcome = ({classes}) => {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
        welcome
      </Typography>
    </main>
  )
}

export default Welcome
