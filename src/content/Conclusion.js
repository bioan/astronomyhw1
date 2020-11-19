import React from 'react'
import Typography from '@material-ui/core/Typography'
// import Card from '../Card'

const Conclusion = ({classes}) => {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
        Conclusion
      </Typography>
    </main>
  )
}

export default Conclusion