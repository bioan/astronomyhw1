import React from 'react'
import { useHistory } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const stringToUri = string => string.replace(/\s+/g, '-').toLowerCase();

const MyDrawer = ({classes}) => {
  let history = useHistory();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Starry night
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
          {['Introduction', 'Inspiration', 'Sketches', 'Letters', 'Date and time', 'Legacy', 'Conclusion', 'References'].map((text, index) => (
            <ListItem button key={text} onClick={() => history.push(stringToUri(text))}>
              <ListItemIcon>{index > 0 && <ChevronRightIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </>
  )
}

export default MyDrawer
