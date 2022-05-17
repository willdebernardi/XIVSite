import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Results.css";

const Results = () => {
    const [itemData, setItemData] = useState({});
    const [itemIcon, setItemIcon] = useState({});
    const [itemStats, setItemStats] = useState([]);

    const [firstRender, setFirstRender] = useState(true);

    useEffect(() => {
        const fetchItem = async () => {
            const data = await axios.get("https://xivapi.com/Item/1675");
            setItemData(data.data);
            setFirstRender(false);
        }
        fetchItem();
    }, []);

    useEffect(() => {
        if(!firstRender) {
            setItemIcon("https://xivapi.com".concat(itemData.Icon));
            setItemStats(Object.keys(itemData.Stats));
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
                    {itemStats.map(key => <Typography variant="body1">{key}: {itemData.Stats[key].NQ}</Typography>)}
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
};

export default Results;
