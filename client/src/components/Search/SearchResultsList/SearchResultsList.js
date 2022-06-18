import React from "react";
import Grid from "@mui/material/Grid";

function SearchResultsList(props) {
    return <Grid container columns={3}>
        {props.Results.forEach((item) => {
            <ResultsCard item={item} />
        })}
    </Grid>;
}

export default SearchResultsList;
