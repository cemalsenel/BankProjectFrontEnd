import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import logo from "../images/logo.png"


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    image:{
        width:65,
        height:45,
        marginRight:15,
    },
    button:{
        color:"white",
        fontSize:15,
        fontWeight:"bold"
    }
  }));


const Header = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant>
        <Link to="/">
            <img className={classes.image} src={logo}/>
        </Link>
          <Typography variant="h6" className={classes.title}>
            Anatolia Bank
          </Typography>
          <Button className={classes.button}>ABOUT US</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;





