import "./App.css";
import { AppBar, Typography, Toolbar, styled } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import InputRecommend from "./component/InputRecommend";

const AppBarCustom = styled(AppBar)({
  backgroundColor: "#1C1C25",
});

function App() {
  return (
    <div className="App">
      <AppBarCustom position="static">
        <Toolbar>
          <SportsEsportsIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            iFlame Recommendation
          </Typography>
        </Toolbar>
      </AppBarCustom>
      <InputRecommend />
    </div>
  );
}

export default App;
