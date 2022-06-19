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

    if (didSearch && exactMatch) {
        return <Results itemID={itemID} />;
    } else if (didSearch && !exactMatch) {
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

function Results(props) {
    const [itemData, setItemData] = useState({});
    const [itemIcon, setItemIcon] = useState({});
    const [itemStats, setItemStats] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [firstRender, setFirstRender] = useState(true);

    useEffect(() => {
        const fetchItem = async () => {
            console.log(props.itemID);
            const data = await axios.get(
                `https://xivapi.com/Item/` + props.itemID
            );
            setItemData(data.data);
            setFirstRender(false);
        };
        fetchItem();
    }, []);

    useEffect(() => {
        if (!firstRender) {
            setItemIcon("https://xivapi.com".concat(itemData.Icon));
            if (itemData.Stats) {
                setItemStats(Object.keys(itemData.Stats));
            }
            setIsLoading(false);
        }
    }, [itemData]);

    if (isLoading) {
        return (
            <div className="loadingContainer">
                <Typography varinat="h1">Loading...</Typography>
            </div>
        );
    } else {
        return (
            <div id="ResultContainer">
                <div id="ItemHeader">
                    <Box
                        sx={{ display: "flex", alignItems: "center" }}
                        id="ItemName"
                    >
                        <img src={itemIcon} width="50" height="50"></img>
                        <Box id="NameBox">
                            <Typography variant="h3">
                                {itemData.Name}
                            </Typography>
                        </Box>
                    </Box>
                    <Divider />
                </div>
                <div id="ItemResults">
                    <div className="itemInfo">
                        <Typography variant="h4">Description</Typography>
                        <Typography variant="body1">
                            {itemData.Description}
                        </Typography>
                        {itemStats.map((key) => (
                            <Typography variant="body1">
                                {key}: {itemData.Stats[key].NQ}
                            </Typography>
                        ))}
                    </div>
                    <div className="itemInfo">
                        <Typography variant="h4">Location</Typography>
                        <Typography variant="body1">
                            Blah blah blah three
                        </Typography>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
