import React from 'react'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Card from '../Card'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('1889-06-18', '23:42', '02:53', '03:41', '04:17'),
  createData('1889-06-19', '00:06', '02:53', '03:41', '04:17'),
  createData('1889-06-20', '00:25', '02:53', '03:41', '04:17'),
  createData('1889-06-21', '00:47', '02:54', '03:41', '04:17'),
  createData('1889-06-22', '01:11', '02:54', '03:41', '04:17'),
  createData('1889-06-23', '01:35', '02:54', '03:42', '04:18'),
  createData('1889-06-24', '02:00', '02:55', '03:42', '04:18'),
  createData('1889-06-25', '02:28', '02:55', '03:42', '04:18'),
  createData('1889-06-26', '03:00', '02:55', '03:42', '04:19'),
];

const annotated = [{
  description: 'Starry Night, annotated with labels for possible stars',
  title: '',
  image: '/annotated.png' 
}]

const nightsky = [
  {
    image: '/18.png',
    buttonLabel: '18th'
  },
  {
    image: '/19.png',
    buttonLabel: '19th'
  },
  {
    image: '/20.png',
    buttonLabel: '20th'
  },
  {
    image: '/21.png',
    buttonLabel: '21st'
  },
  {
    image: '/22.png',
    buttonLabel: '22nd'
  },
  {
    image: '/23.png',
    buttonLabel: '23rd'
  },
  {
    image: '/24.png',
    buttonLabel: '24th'
  },
  {
    image: '/25.png',
    buttonLabel: '25th'
  },
  
]

const DateTime = ({classes}) => {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
        Based on the letters he sent out, we can narrow the period in which Starry Night was created. 
        On a letter dated on the 18th, he mentions that he started a study about the starry sky.
        From this, we can infer that he didn't start painting until the night of the 18th/early morning of the 19th.
        
        Now that we have an estimate date, we can try to see if we can match the night sky in the picture with the night sky that would've been visible in that period.
      </Typography>
      <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Day</TableCell>
            <TableCell align="right">Moonrise</TableCell>
            <TableCell align="right">Nautical Twilight</TableCell>
            <TableCell align="right">Civil Twilight</TableCell>
            <TableCell align="right">Sunrise</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    Data courtesy of www.timeanddate.com

    <Typography paragraph>
    Furthermore, no sunlight is to be seen, so we can assume that the exact moment would've been between moonrise and nautical twilight.
    Therefore, this could've only occurred between the 18th and 25th, as from the 26th onward, the moon would rise after sunlight would be visible.
    Looking at the night sky in this period, we can determine what some of these stars are. Obviously we have the moon (A).
    Next, we can clearly identify the brightest star (B) as Venus. Above it is the constellation of Aries(C) and to its right are some stars from Pisces, most likely Alpherg (brightest) and Torcular.
    Furthermore, next to Venus, we can clearly see Electra and Atlas, the brightest stars in Taurus(E)
    </Typography>

    <Card data={annotated}/>

    <Typography paragraph>
      From this, we can derive that on the 24th and 25th, the moon would be too low on its trajectory, as it would place it too close to Venus. 
      Given that in the picture it's at the same level as the stars from Aries, we can reduce the date range to 19-21.
      However, it's clear that there is some inconsistency, as the moon is in the wrong phase in these days (Roughly around third quarter),
      while in the picture, it's a waning crescent. This would not happen until the 23rd at the earliest, which would put the rest of the stars 
      out of position.
    </Typography>

    <Card data={nightsky}/>

    <Typography paragraph>
      Clearly, Starry night is not a perfectly accurate depiction of the night sky in that period. Whether Starry Night is a product of several days' worth of starlight, or perhaps Van Gogh "photoshopped" reality a little is hard to say. However, none of this makes it any less magical.
    </Typography>

    </main>
  )
}

export default DateTime