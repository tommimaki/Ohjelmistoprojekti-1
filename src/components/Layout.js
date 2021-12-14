import React from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { grey, blue } from "@mui/material/colors";
import { AppBar, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, CssBaseline, Tabs, Tab } from "@mui/material";

const custtheme = createTheme({
  palette: {
    background: {
      default: "#edf6f9",
    },
    primary: {
      main: "#006d77",
    },
    secondary: {
      main: "#e29578",
    },
  },
});

export default function Layout(props) {
  const setQueryid = props.setQueryid;

  const handleChange = (event, newValue) => {
    setQueryid(newValue);
  };

  return (
    <div>
      <ThemeProvider theme={custtheme}>
        <CssBaseline />
        <AppBar>
          <Toolbar>
            <Tabs
              value={props.queryid}
              onChange={handleChange}
              textColor="secondary"
            >
              <Tab value="1" label="Query1" />
              <Tab value="2" label="Query2" />
            </Tabs>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome to queryapp
            </Typography>
          </Toolbar>
        </AppBar>

        <div>{props.children}</div>
      </ThemeProvider>
    </div>
  );
}
