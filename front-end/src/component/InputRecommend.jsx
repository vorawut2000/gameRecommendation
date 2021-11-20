import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  Button,
  CardContent,
  CardActions,
  TextField,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import GameList from "./GameList";
import Autocomplete from "@mui/material/Autocomplete";

const TextFieldCustom = styled(TextField)({
  backgroundColor: "aliceblue",
  color: "white",
  width: "600px",
  borderRadius: "10px",
  margin: "10px",
  textAlign: "center",
});

export const CardCustom = styled(Card)({
  backgroundColor: "#1C1C25",
  justifyContent: "center",
  borderRadius: "10px",
  marginTop: "30px",
  color: "white",
});

const TypographyCustom = styled(Typography)({
  color: "white",
  padding: "20px 40px 0px 30px",
});

const CardContentCustom = styled(CardContent)({
  textAlign: "center",
});

const InputRecommend = () => {
  const [open, setOpen] = useState(false);
  const [game, setGame] = useState("");
  const [results, setResults] = useState([]);

  const data = axios.get("http://127.0.0.1:5000/games")

  const onRecommend = async () => {
    const result = await axios.post("http://127.0.0.1:5000/predict-game", {
      item_name: game,
    });
    if (result.data) {
      setResults(result.data);
    }
    setOpen(!open);
  };

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <CardCustom sx={{ maxWidth: 800 }}>
          <TypographyCustom>Search game title that you like</TypographyCustom>
          <CardContentCustom>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              sx={{
                backgroundColor: "aliceblue",
                color: "white",
                width: "600px",
                borderRadius: "10px",
                margin: "10px",
                textAlign: "center",
              }}
              options={data}
              renderInput={(params) => <TextField {...params} label="Game" />}
            />
            {/* <TextFieldCustom
              placeholder="Start typing your game"
              onChange={(e) => {
                setGame(e.target.value);
              }}
            /> */}
          </CardContentCustom>
          <CardActions>
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <Button variant="contained" color="primary" onClick={onRecommend}>
                Recommend
              </Button>
            </Grid>
          </CardActions>
        </CardCustom>
      </Grid>
      {results ? <GameList results={results} /> : <div></div>}
    </>
  );
};

export default InputRecommend;
