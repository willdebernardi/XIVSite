import React from "react";
import "./App.css";
import {
  Container,
  CssBaseline,
  Grid,
  Input,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Search from "./components/Search";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from "./components/Header/Header";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "95vh" }}
      >
        <Grid item xs={12}>
          <Search />
        </Grid>
      </Grid>
    </ThemeProvider>
      
  );
}

export default App;