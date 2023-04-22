import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { Category } from "./pages/Category";
import { About } from "./pages/About";
import { NewArrival } from "./pages/NewArrival";
import { Header } from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:1997/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/category" element={<Category />} />
            <Route path="/about" element={<About />} />
            <Route path="/new" element={<NewArrival />} />
          </Routes>
        </Container>
      </ApolloProvider>
    </>
  );
}

export default App;
