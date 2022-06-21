import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import ResultsCard from "./ResultsCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

function SearchResultsList() {
    const [results, setResults] = useState([]);
    const [firstRender, setFirstRender] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();
    let params = useParams();

    useEffect(() => {
        let searchItem = params.name;

        const fetchItems = async () => {
            let response = await axios.get(
                `https://xivapi.com/search?string=${searchItem}`
            );
            setResults(response.data.Results);
            console.log(results);
            setFirstRender(false);
        };
        fetchItems();
    }, []);

    useEffect(() => {
        if (!firstRender) {
            for (var i = 0; i < results.length; i++) {
                let item = results[i];
                if (
                    item.Name.toLowerCase() === params.name &&
                    item.UrlType.toLowerCase() === "item"
                ) {
                    navigate(`/item/${item.ID}`);
                }
            }
            setIsLoading(false);
        }
    }, [results]);

    let resultsCards = results.map((item) => {
        if (item.UrlType.toLowerCase() === "item") {
            return <ResultsCard item={item} />;
        }
    });

    return ( 
        isLoading ? <h1>Loading...</h1> :
        <Grid container columns={3} spacing={1} sx={{ padding: "10px" }}>
            {resultsCards}
        </Grid>
    );
}

export default SearchResultsList;
