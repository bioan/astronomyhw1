import React from 'react'
import Typography from '@material-ui/core/Typography'
// import Card from '../Card'

const Letters = ({classes}) => {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
        Letters
      </Typography>
    </main>
  )
}

export default Letters