import React, { useState } from "react";
import clsx from "clsx";
import { Switch, Route, BrowserRouter, useRouteMatch } from "react-router-dom";
import { makeStyles, useTheme, Theme } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  Container,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useDispatch } from "react-redux";

import Dashboard from "../pages/Dashboard";

import LogoKadence from "../assets/images/kadence-logo.png";
import Sidebar from "../component/SideBar";
import { ModalAction } from "../component/Modal";

import { handleLogout } from "../redux/actions";
import EndUser from "../pages/EndUser";
import ShopOwner from "../pages/ShopOwner";

const Main = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const match = useRouteMatch();
  const [open, setOpen] = React.useState(false);
  const [isVisibleLogout, setVisibleLogout] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const _handleOpenModal = () => {
    setVisibleLogout(true);
  };

  const _handleCloseModal = () => {
    setVisibleLogout(false);
  };

  const _handleLogout = () => {
    dispatch(handleLogout());
  };

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon color="action" />
            </IconButton>
            <img src={LogoKadence} alt="logo" className="img-logo" />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                position: "absolute",
                right: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: 10,
                }}
              >
                {/* <span className="user-text">Ryan mate</span>
                <span className="user-text role">Admin</span> */}
              </div>
              <div></div>
              <div className="line-vertical" />
              <div
                style={{ marginRight: 20, cursor: "pointer" }}
                onClick={_handleOpenModal}
              >
                <ExitToAppIcon color="action" />
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawerPaper, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon color="inherit" />
              )}
            </IconButton>
          </div>
          <Sidebar />
        </Drawer>
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>
            <Switch>
              <Route path={`${match.path}`} exact>
                <Dashboard />
              </Route>
              <Route path={`${match.path}/enduser`}>
                <EndUser />
              </Route>
              <Route path={`${match.path}/shopowner`}>
                <ShopOwner />
              </Route>
            </Switch>
          </Container>
        </main>

        <ModalAction
          isVisible={isVisibleLogout}
          onClose={_handleCloseModal}
          onClick={() => {
            _handleLogout();
            _handleCloseModal();
          }}
          title="Peringatan"
          body="Apakah anda yakin ingin keluar"
          btnTextCancel="Tidak"
          btnTextYes="Ya"
        />
      </div>
    </BrowserRouter>
  );
};

// Custom style for sidebar & appbar
const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "#fff",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundColor: "#70a143 ",
    color: "#fff",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  drawerOpen: {
    backgroundColor: "#F0F1F4",
    whiteSpace: "nowrap",
    color: "#fff",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: "#F0F1F4",
    whiteSpace: "nowrap",
    color: "#fff",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

export default Main;
