import {
    Box,
    Typography,
} from "@mui/material";
import React from "react";
import "./Search.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";

function Search() {
    return (
        <div id="SearchContainer">
            <Box
                sx={{ display: "flex", flexDirection: "column", width: "60vw" }}
            >
                <Typography variant="h1">Female Au Ra {">>>"}</Typography>
                <SearchBar />
            </Box>
        </div>
    );
};

export default Search;