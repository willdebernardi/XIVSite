import React from "react";
import "./App.css";
import { CssBaseline } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Search from "./components/Search/Search";
import Results from "./components/Search/Results";
import { ThemeProvider, createTheme } from "@mui/material/styles";
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
            <Search />
        </ThemeProvider>
    );
}

export default App;
