import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: 'red',
    fontSize: '2rem',
  },
  colorText: {
    color: '#F2CB05',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#038C33',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#020873',
    fontSize: '4rem',
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Projeto<span className={classes.colorText}>Patriota</span>
          </h1>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            Projeto<span className={classes.colorText}>Patriota.</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
