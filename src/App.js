import { Container } from "./stylesheet/App.elements";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Header from "./components/Header/Header";
// import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  // const onAdd = (count) => {
  //   alert(`Added ${count} matcha to cart`);
  // };

  return (
    <Container>
      <Header />
      <ItemListContainer greeting="Hello World" />
      {/* <ItemCount stock={5} initialCount={1} onAdd={onAdd} /> */}
    </Container>
  );
}

export default App;
