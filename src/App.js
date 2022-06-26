import { Container } from "./stylesheet/App.elements";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Header from "./components/Header/Header";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <Container>
      <Header />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </Container>
  );
}

export default App;
