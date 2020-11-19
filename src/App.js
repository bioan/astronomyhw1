import React from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Inspiration from './content/Inspiration'
import Conclusion from './content/Conclusion'
import DateTime from './content/DateTime'
import Introduction from './content/Introduction'
import Legacy from './content/Legacy'
import Letters from './content/Letters'
import Sketches from './content/Sketches'
import References from "./content/References";
import Places from './content/PlacesOfResidence'
import MyDrawer from './Drawer';
import CssBaseline from '@material-ui/core/CssBaseline'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  table: {
    minWidth: 650,
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
      <CssBaseline />
      <MyDrawer classes={classes} />
      <Switch>
        <Route exact path='/'>
          <Introduction classes={classes} />
        </Route>
        <Route path='/introduction'>
          <Introduction classes={classes} />
        </Route>
        <Route path='/inspiration'>
          <Inspiration classes={classes} />
        </Route>
        <Route path='/sketches'>
          <Sketches classes={classes}/>
        </Route>
        <Route path='/letters'>
          <Letters classes={classes}/>
        </Route>
        <Route path='/date-and-time'>
          <DateTime classes={classes}/>
        </Route>
        <Route path='/legacy'>
          <Legacy classes={classes}/>
        </Route>
        <Route path='/places-of-residence'>
          <Places classes={classes}/>
        </Route>
        <Route path='/conclusion'>
          <Conclusion classes={classes}/>
        </Route>
        <Route path='/references'>
          <References classes={classes}/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}