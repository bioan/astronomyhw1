import React from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Welcome from './periods/Welcome'
import MiddleAges from './periods/MiddleAges'
import Nineteenth from './periods/Nineteenth'
import Twentieth from './periods/Twentieth'
import Recent from './periods/Recent'
import MyDrawer from './Drawer';

// import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';


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
  console.log("aaaa", classes)

  return (
    <Router>
      <div className={classes.root}>
      {/* <AppBar position="fixed" className={styles.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Astronomy in Romania
        </Typography>
      </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text} onClick={() => history.push(text)}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer> */}
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
      </Switch>
      </div>
    </Router>
  );
}