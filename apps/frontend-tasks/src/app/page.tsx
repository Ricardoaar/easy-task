"use client";
import { ResponsiveDrawer } from "@/components/SideBar";
import React from "react";
import Typography from "@mui/material/Typography";
import { AppBar, Stack, styled } from "@mui/material";


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none"
  },
  height: "64px",
  paddingLeft: "248px",
  display: "flex",
  justifyContent: "center",
}));

export default function Home() {

  const header = <Typography sx={{ fontSize: "1.5rem" }}>Easy Tasks Manager </Typography>;


  return (
    <main className="flex min-h-screen flex-col p-4">
      <ResponsiveDrawer header={header}>Test </ResponsiveDrawer>
      <Stack sx={{ ml: "240px" }}>
        <StyledAppBar>
          {header}
        </StyledAppBar>
      </Stack>

    </main>
  );
}
