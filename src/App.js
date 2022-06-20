import { Container } from "./stylesheet/App.elements";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Header from "./components/Header/Header";

function App() {
  return (
    <Container>
      <Header />
      <ItemListContainer greeting="This greeting is coming from App.js" />
    </Container>
  );
}

export default App;
