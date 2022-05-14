import { Box, TextField, Typography, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Results from "./Results";
import "./Results.css"

function Search() {
    const [val, setVal] = useState("");

    const handleSubmit = (event) => {};

    return (
        <div id="SearchContainer">
            <Box
                sx={{ display: "flex", flexDirection: "column", width: "60vw" }}
            >
                <Typography variant="h1">Female Au Ra {">>>"}</Typography>
                <form>
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
                        onChange={(e) => setVal(e.target.value)}
                    />
                </form>
            </Box>
        </div>
    );
}

export default Search;
