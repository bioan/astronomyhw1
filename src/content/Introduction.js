import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '../Card'

const Introduction = ({classes}) => {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
        Introduction
      </Typography>
    </main>
  )
}

export default Introduction
