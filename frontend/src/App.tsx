import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/home";
import Store from "./pages/store";
import { Category } from "./pages/category";
import { About } from "./pages/about";
import { NewArrival } from "./pages/newArrival";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/new" element={<NewArrival />} />
      </Routes>
    </Container>
  );
}

export default App;
