import React from "react";
import Grid from "@mui/material/Grid";
import ResultsCard from "./ResultsCard";

function SearchResultsList(props) {
    console.log(props.results);
    let resultsCards = props.results.map(item => {
        if(item.UrlType.toLowerCase() === "item") {
            return <ResultsCard item={item} />
        }
    })

    return (
        <Grid container columns={3} spacing={1} sx= {{padding: "10px"}}>
            {resultsCards}
        </Grid>
    )
}

export default SearchResultsList;
