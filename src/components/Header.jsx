import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <AppBar
        position="static"
        className="bg-gradient-to-r from-blue-500 to-teal-500"
      >
        <Toolbar className="flex justify-center">
          <Typography variant="h6" className="font-bold text-2xl">
            Subscriptions Tracker App
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
