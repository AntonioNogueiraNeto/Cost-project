import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";
// components
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <Router>
      <Navbar />

     <Container customClass="min-height" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/empresa" element={<Company />} />
          <Route path="/novoProjeto" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
