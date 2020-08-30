import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { withRouter, Link } from 'react-router-dom';
import { clearAuthInLS } from '../../helpers/local-storage.helper';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

interface MenuOption {
  path: string;
  name: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: '20px',
      boxShadow: 'none'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textTransform: 'capitalize'
    },
  }),
);

export function NavBar(props: any) {
  const { location } = props;
  const classes = useStyles();

  const menuOptions: MenuOption[] = [
    {
      path: '/about',
      name: 'About'
    },
    {
      path: '/training',
      name: 'Training'
    },
    {
      path: '/dashboard',
      name: 'Dashboard'
    },
    {
      path: '/settings',
      name: 'Settings'
    }
  ]

  const logout = () => {
    props.history.push('/login')
    clearAuthInLS();
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = !!anchorEl;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderTitle = (): string => {
      return !!location && !!location.pathname ? location.pathname.substring(1) : ''
  }

  const renderMenuOptions = (): JSX.Element[] => {
    return menuOptions.map(option => {
      return (
        <MenuItem key={option.path} >
          <Link onClick={handleClose} to={{ pathname: option.path }}> { option.name } </Link>
        </MenuItem>
      )
    })
  }

  return (
    <div className={classes.root}>
        <AppBar elevation={0} color="default" position="static">
          <Toolbar>
            <IconButton onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
              >
                { renderMenuOptions() }
              </Menu>
            <Typography variant="h6" className={classes.title}>
              { renderTitle() }
            </Typography>
            <Button onClick={logout} color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
    </div>
  );
}

export default (withRouter(NavBar));