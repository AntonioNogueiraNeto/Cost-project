import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// pages
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";
// components
import Container from "./components/layout/Container";


function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/empresa">Empresa</Link>
        <Link to="/novoProjeto">Novo Projeto</Link>
      </div>

     <Container customClass="min-height" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/empresa" element={<Company />} />
          <Route path="/novoProjeto" element={<NewProject />} />
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
