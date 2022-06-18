import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import {
    Avatar,
    Button,
    CardActionArea,
    CardActions,
    CardHeader,
} from "@mui/material";

function ResultsCard(props) {
    return (
        <Grid item>
            <Card>
                <CardActionArea>
                    <CardHeader
                        title={props.item.Name}
                        avatar={
                            <Avatar
                                alt="Item Icon"
                                src={"https://xivapi.com" + props.item.Icon}
                            />
                        }
                    />
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Add to Wishlist
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default ResultsCard;
