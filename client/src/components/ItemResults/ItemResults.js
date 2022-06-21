import { Box, Divider, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ItemResults() {
    const [itemData, setItemData] = useState({});
    const [itemIcon, setItemIcon] = useState({});
    const [itemStats, setItemStats] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [firstRender, setFirstRender] = useState(true);

    let params = useParams();

    useEffect(() => {
        const fetchItem = async () => {
            const data = await axios.get(
                `https://xivapi.com/Item/${params.id}`
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

export default ItemResults;