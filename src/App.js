import "./App.css";
import { styled } from "@mui/material/styles";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.h2,
  color: "white",
}));

function App() {
  return (
    <div className="App">
      <Div>{"iFlame Recommendation"}</Div>;
    </div>
  );
}

export default App;
