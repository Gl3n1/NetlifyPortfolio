import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SvgIcon from '@material-ui/core/SvgIcon';
import FourKIcon from '@material-ui/icons/FourK';
import { Link } from "gatsby";

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

class SwipeableTemporaryDrawer extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['Home'].map((text, index) => (
            <Link to={text === "Home" ? "/" : text} key={text}>
              <ListItem button>
                <HomeIcon className={classes.iconHover} color="error" style={{ fontSize: 30 }} />
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {['blog'].map((text, index) => (
            <Link to={text} key={text}>
              <ListItem button>
                <FourKIcon className={classes.icon} />
                <ListItemText primary={text.replace(/^\w/, c => c.toUpperCase())} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <IconButton 
          className={classes.menuButton} 
          color="inherit" 
          aria-label="Menu"
          onClick={this.toggleDrawer('left', true)}>
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeableTemporaryDrawer);