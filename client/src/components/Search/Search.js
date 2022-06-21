import {
    Box,
    TextField,
    Typography,
    InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import "./Search.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
    const navigate = useNavigate();

    const [val, setVal] = useState("");

    const searchItemID = (event) => {
        event.preventDefault();

        let searchItem = val.toLowerCase();
        navigate(`/search/${searchItem}`)
    };

    return (
        <SearchBox submitFunc={searchItemID} val={val} setVal={setVal} />
    );
}

function SearchBox(props) {
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