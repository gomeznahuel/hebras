import { Container } from "./stylesheet/App.elements";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router";
import Header from "./common/Header/Header";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </Container>
  );
}

export default App;
