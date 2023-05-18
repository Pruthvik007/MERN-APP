import { AppBar, Box, CssBaseline, Toolbar } from "@mui/material";
import React from "react";

const NavBar = ({ children }) => {
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
