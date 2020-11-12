import React from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Welcome from './periods/Welcome'
import MiddleAges from './periods/MiddleAges'
import Nineteenth from './periods/Nineteenth'
import Twentieth from './periods/Twentieth'
import Recent from './periods/Recent'
import MyDrawer from './Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Conclusion from "./periods/Conclusion";

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
          <Welcome classes={classes} />
        </Route>
        <Route path='/welcome'>
          <Welcome classes={classes} />
        </Route>
        <Route path='/twentieth-century'>
          <Twentieth classes={classes} />
        </Route>
        <Route path='/nineteenth-century'>
          <Nineteenth classes={classes}/>
        </Route>
        <Route path='/middle-ages'>
          <MiddleAges classes={classes}/>
        </Route>
        <Route path='/recent'>
          <Recent classes={classes}/>
        </Route>
        <Route path='/conclusion'>
          <Conclusion classes={classes}/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}