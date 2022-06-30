import { Container } from "./stylesheet/App.elements";
import Header from "./components/Header/Header";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";

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
