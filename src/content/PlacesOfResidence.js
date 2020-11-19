import React from 'react'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('30 March 1853 - 30 September 1864','Zundert(Dutch province of North Brabant)'),
  createData('3 September 1866 - 19 March 1868','Tilburg, The Netherlands'),
  createData('19 March 1868 - 30 July 1869','Zundert(Dutch province of North Brabant'),
  createData('30 July 1869 - 10 May 1873','The Hague, The Netherlands'),
  createData('12 May 1873 - 18 May 1873','Paris, France'),
  createData('19 May 1873 - 27 October 1874','London, England'),
  createData('26 October 1874 - 25 December 1874','Paris, France'),
  createData('14 May 1875 - 31 March 1876','Paris, France'),
  createData('16 April 1876 - 23 June 1876','Ramsgate, England'),
  createData('24 June 1876 - 20 December 1876','Isleworth, England'),
  createData('3 January 1877 - 2 May 1877','Dordrecht, The Netherlands'),
  createData('14 May 1877 - 5 July 1878','Amsterdam, The Netherlands'),
  createData('16 July 1878 - 17 July 1878','Brussels, Belgium'),
  createData('1 December 1878 - 1 October 1880','Borinage, Belgium'),
  createData('(VISIT) 3 August 1879','Brussels, Belgium'),
  createData('1 October 1880 - 30 April 1881','Brussels, Belgium'),
  createData('30 April 1881 - 27 November 1881','Etten, The Netherlands'),
  createData('24 November 1881 - 27 November 1881','Amsterdam, The Netherlands'),
  createData('27 November 1881 - 11 September 1883','The Hague, The Netherlands'),
  createData('11 September 1883 - 5 December 1883','Drenthe, The Netherlands'),
  createData('5 December 1883 - 24 November 1885','Nuenen, The Netherlands'),
  createData('24 November 1885 - 28 February 1886','Antwerp, Belgium'),
  createData('(VISIT) 6 October 1885 - 8 October 1885','Amsterdam, The Netherlands'),
  createData('28 February 1886 - 19 February 1888','Paris, France'),
  createData('20 February 1888 - 8 May 1889','Arles, Frane'),
  createData('8 May 1889 - 16 May 1890','Saint-Rémy, France'),
  createData('(VISIT)17 May 1890 - 19 May 1890','Paris, France'),
  createData('(VISIT) 6 July 1890','Paris, France'),
  createData('20 May 1890 - 29 July 1890','Auvers-sur-Oise, France')
];

const Places = ({classes}) => {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
      The parents of Vincent van Gogh were Anna Cornelia Carbentus (1819–1907) and Theodorus “Dorus” van Gogh (1822–1885). He was born on 30 March 1853 in the village of Zundert(Dutch province of North Brabant). Van Gogh lived in a number of places all-over the Europe, below is a timeline of when and where van Gogh lived.
      </Typography>

      <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Period</TableCell>
            <TableCell align="left">Place</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" align="right">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </main>
  )
}

export default Places
