import { Container } from "./stylesheet/App.elements";
import Navbar from "./components/Navbar/Navbar";
import TextTest from "./components/Text/TextTest";

function App() {
  return (
    <Container>
      <Navbar />
      <TextTest text="Welcome to Hebras Store!" />
    </Container>
  );
}

export default App;
