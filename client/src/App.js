import React from "react";
import "./App.css";
import { CssBaseline } from "@mui/material";
import Search from "./components/Search/Search";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemResults from "./components/ItemResults/ItemResults";
import SearchResultsList from "./components/Search/SearchResultsList/SearchResultsList";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    return (
        <Router>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Header />
                <Routes>
                    <Route path="/" element={<Search />} />
                    <Route path="/item/:id" element={<ItemResults />} />
                    <Route path="/search/:name" element={<SearchResultsList />} />
                </Routes>
            </ThemeProvider>
        </Router>
    );
}

export default App;
