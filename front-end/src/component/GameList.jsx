import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  styled,
} from "@mui/material";
import { CardCustom } from "./InputRecommend";

const Div = styled("div")({
  margin: "32px",
});

const GameCard = (props) => {
  return (
    <CardCustom sx={{ minWidth: 375 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Visit
        </Button>
      </CardActions>
    </CardCustom>
  );
};

const GameList = (props) => {
  return (
    <Div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {props.results.map((title, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <GameCard title={title}/>
          </Grid>
        ))}
      </Grid>
    </Div>
  );
};

export default GameList;