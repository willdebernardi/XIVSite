import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import ResultsCard from "./ResultsCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

function SearchResultsList() {
    const [results, setResults] = useState(null);
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
            setResults(
                response.data.Results.filter((item) => item.UrlType.toLowerCase() === "item")
            );
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
                    navigate(`/item/${item.ID}`, { replace: true });
                }
            }
            setIsLoading(false);
        }
    }, [results]);

    let CreateCards = () =>
        results.map((item) => {
            if (item.UrlType === "item") {
                return <ResultsCard item={item} />;
            }
        });

    return (
        <Grid
            container
            columns={3}
            spacing={1}
            justifyContent={"center"}
            sx={{ padding: "10px" }}
        >
            <Grid item xs={3} textAlign={"center"}>
                Hello World!
            </Grid>
            {!results && (
                <Grid item component={"h2"} textAlign={"center"}>
                    Loading...
                </Grid>
            )}
            {results && results.map((item) => <ResultsCard item={item} />)}
        </Grid>
    );
}

export default SearchResultsList;
