import { Main } from "./stylesheet/App.elements";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router";
import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <AppRouter />
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
