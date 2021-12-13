import React from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { grey, blue } from "@mui/material/colors";
import { AppBar, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

const custtheme = createTheme({
  palette: {
    primary: {
      main: grey[500],
    },
    secondary: {
      main: blue[500],
    },
  },
});

export default function Layout({ children }) {
  return (
    <div>
      <ThemeProvider theme={custtheme}>
        <AppBar>
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome to queryapp
            </Typography>
          </Toolbar>
        </AppBar>

        <div>{children}</div>
      </ThemeProvider>
    </div>
  );
}
