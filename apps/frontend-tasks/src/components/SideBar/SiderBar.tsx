"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { SideBarProps } from "@/components/SideBar/types";
import { usePathname } from "next/navigation";
import { styled } from "@mui/material";
import { PropsWithChildren } from "react";

const drawerWidth = 240;

const StyledHeaderContainer = styled(Box)(({ theme }) => ({

  display: "flex",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  },
  flexDirection: "row",
  alignItems: "center",
  padding: theme.spacing(0, 1)
}));


export const ResponsiveDrawer = function(
  {
    items = [],
    header,
    drawerRef
  }: PropsWithChildren<SideBarProps>) {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const route = usePathname();


  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };


  const drawer = (
    <div>
      <Toolbar>
        <Typography>{route !== "/" ? route : "Tasks"}</Typography>
      </Toolbar>
      <Divider />
      <List>
        {items.map(({ title, icon, itemContainer: ItemContainer = React.Fragment, itemContainerProps = {} }) => {
          return (
            <ItemContainer {...itemContainerProps}>
              <ListItem key={title} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={title} />
                </ListItemButton>
              </ListItem>
            </ItemContainer>
          );
        })}
      </List>

    </div>
  );


  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <Box>
      <StyledHeaderContainer>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        {header}
      </StyledHeaderContainer>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
        }}
        open

        ref={drawerRef}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
