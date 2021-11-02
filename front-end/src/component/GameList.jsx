import React from "react";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
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

const GameCard = () => {
  return (
    <CardCustom sx={{ minWidth: 375 }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1635269541"
          alt="game"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            CSGO
          </Typography>
          {/* <Typography variant="body2" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </Typography> */}
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

const GameList = () => {
  return (
    <Div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <GameCard />
          </Grid>
        ))}
      </Grid>
    </Div>
  );
};

export default GameList;
