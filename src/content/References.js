import React from 'react'
import Typography from '@material-ui/core/Typography'

const References = ({classes}) => {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
          1. Time and Date, URL: https://www.timeanddate.com/<br></br>
		  2. Van Gogh Route, URL:https://www.vangoghroute.com/<br></br>
		  3. Van Gogh Letters, URL: http://vangoghletters.org/vg/<br></br>
          4. Kurt Andersen, January 29, 2015, Was Van Gogh's 'Starry Night' inspired by a scientific drawing?,
             URL: https://www.pri.org/stories/2015-01-29/was-van-goghs-starry-night-inspired-scientific-drawing<br></br>
          5. Martin Bailey, 28th September 2018, How Van Gogh's Starry Night was inspired by Hokusai’s Great Wave,
             URL: https://www.theartnewspaper.com/blog/was-van-gogh-inspired-by-hokusai-s-great-wave-when-he-painted-his-starry-night<br></br>
          6. Alex Wexelman, Aug 27, 2018, Russia is holding Vincent van Gogh’s sketch of “Starry Night” in a secret storage facility.,
             URL: https://www.artsy.net/news/artsy-editorial-russia-holding-vincent-van-goghs-sketch-starry-night-secret-storage-facility<br></br>
          7. Vg Gallery, URL: http://www.vggallery.com/drawings/p_1540.htm
      </Typography>
    </main>
  )
}

export default References