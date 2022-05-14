import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Results.css";

const Results = () => {
    const [itemData, setItemData] = useState({});
    const [itemIcon, setItemIcon] = useState("");

    // let mockItem = {
    //     name: "Frank's Favorite Ball of Yarn",
    //     description: "One of the fabled relic weapons.",
    //     stats: {
    //         one: { type: "Strength", value: 14 },
    //         two: { type: "Intellect", value: 23 },
    //     },
    // };

    const findIcon = (url) => {
        return 0;
    };

    useEffect(() => {
        axios.get("https://xivapi.com/Item/1675").then((res) => {
            setItemData(res.data);
        });
    }, []);

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
                        Lorem ipsum dolor sit amet
                    </Typography>
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
