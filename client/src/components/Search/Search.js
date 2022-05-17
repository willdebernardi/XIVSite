import { Box, TextField, Typography, InputAdornment, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import "./Results.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Search() {
    const [didSearch, setSearch] = useState(false);
    const [itemID, setItemID] = useState("");
    const [val, setVal] = useState("");

    const searchItemID = (event) => {
        event.preventDefault();
        let searchItem = val.toLowerCase();

        axios.get(`https://xivapi.com/search?string=` + searchItem).then((res) => {
            const keys = Object.keys(res.data.Results);
            keys.map((result) => {
                let item = res.data.Results[result];
                if (item.Name.toLowerCase() == searchItem) {
                    setItemID(item.ID);
                }
            });
            setSearch(true);
        });
    };

    if (didSearch) {
        return <Results itemID={itemID} />
    } else {
        return <SearchBox submitFunc={searchItemID} val={val} setVal={setVal} />
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
        }
    }, [itemData]);

    return (
        <div id="ResultContainer">
            <div id="ItemHeader">
                <Box
                    sx={{ display: "flex", alignItems: "center" }}
                    id="ItemName"
                >
                    <img src={itemIcon} width="50" height="50"></img>
                    <Box id="NameBox">
                        <Typography variant="h3">{itemData.Name}</Typography>
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

export default Search;
