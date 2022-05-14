import React from "react";
import "./App.css";
import { Container, CssBaseline, Grid, Input, Typography } from "@mui/material";
import { useState } from "react";
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
    const [didSearch, setSearch] = useState(true);

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Header />
            {didSearch ? <Results /> : <Search />}
        </ThemeProvider>
    );
}

export default App;
