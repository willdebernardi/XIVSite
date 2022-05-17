import { Box, TextField, Typography, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import "./Results.css"

function Search(props) {
    return (
        <div id="SearchContainer">
            <Box
                sx={{ display: "flex", flexDirection: "column", width: "60vw" }}
            >
                <Typography variant="h1">Female Au Ra {">>>"}</Typography>
                <form onSubmit={props.submitFunc}>
                    <TextField
                        id="search"
                        type="search"
                        placeholder="Pee pee poo poo"
                        fullWidth
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        autoComplete="off"
                        onChange={(e) => props.setVal(e.target.value)}
                    />
                </form>
            </Box>
        </div>
    );
}

export default Search;
