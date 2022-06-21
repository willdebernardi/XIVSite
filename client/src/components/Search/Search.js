import {
    Box,
    TextField,
    Typography,
    InputAdornment,
    Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import "./Results.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchResultsList from "./SearchResultsList/SearchResultsList";

function Search() {
    const [didSearch, setDidSearch] = useState(false);
    const [results, setResults] = useState();
    const [itemID, setItemID] = useState("");
    const [val, setVal] = useState("");
    const [exactMatch, setExactMatch] = useState(false);

    const searchItemID = (event) => {
        event.preventDefault();
        let searchItem = val.toLowerCase();

        axios
            .get(`https://xivapi.com/search?string=` + searchItem)
            .then((res) => {
                setResults(res.data.Results);
                const keys = Object.keys(res.data.Results);
                for (var i = 0; i < keys.length; i++) {
                    let item = res.data.Results[keys[i]];
                    if (
                        item.Name.toLowerCase() === searchItem &&
                        item.UrlType.toLowerCase() === "item"
                    ) {
                        console.log(item.ID);
                        setItemID(item.ID);
                        setExactMatch(true);
                        break;
                    }
                }
                setDidSearch(true);
            });
    };

    if (didSearch && !exactMatch) {
        return <SearchResultsList results={results} />;
    } else {
        return (
            <SearchBox submitFunc={searchItemID} val={val} setVal={setVal} />
        );
    }
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