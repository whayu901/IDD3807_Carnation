import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import HomeRounded from "@material-ui/icons/HomeRounded";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

import SideBarMenuItem from "./sideBarMenuItem";

// Modified style dari material UI
const drawerWidth = 240;
const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: "100%",
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: "#97c05c",
    },
  })
);

const sideBarCustomizeMenu = [
  {
    name: "Home",
    link: "/dashboard",
    Icon: HomeRounded,
  },
  {
    name: "End User",
    link: "/dashboard/enduser",
    Icon: AssignmentIndIcon,
  },
  {
    name: "Shop Owner",
    link: "/dashboard/shopowner",
    Icon: AssignmentIndIcon,
  }
];

const SideBarMenu = () => {
  const classes = useStyles();
  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {sideBarCustomizeMenu.map((item, key) => (
        <SideBarMenuItem key={key} {...item} />
      ))}
    </List>
  );
};

export default SideBarMenu;
