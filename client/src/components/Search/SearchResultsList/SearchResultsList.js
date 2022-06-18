import React from "react";
import Grid from "@mui/material/Grid";
import ResultsCard from "./ResultsCard";

function SearchResultsList(props) {
    let resultsCards = props.results.map(item => {
        return <ResultsCard item={item} />
    })

    return (
        <Grid container columns={3}>
            {resultsCards}
        </Grid>
    )
}

export default SearchResultsList;
