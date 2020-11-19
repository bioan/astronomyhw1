import React from 'react'
import Typography from '@material-ui/core/Typography'

const References = ({classes}) => {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
          https://www.timeanddate.com/<br></br>
		  https://www.vangoghroute.com/<br></br>
		  http://vangoghletters.org/vg/<br></br>
		  https://www.pri.org/stories/2015-01-29/was-van-goghs-starry-night-inspired-scientific-drawing<br></br>
		https://www.theartnewspaper.com/blog/was-van-gogh-inspired-by-hokusai-s-great-wave-when-he-painted-his-starry-night<br></br>
		https://www.artsy.net/news/artsy-editorial-russia-holding-vincent-van-goghs-sketch-starry-night-secret-storage-facility<br></br>
		http://www.vggallery.com/drawings/p_1540.htm
      </Typography>
    </main>
  )
}

export default References