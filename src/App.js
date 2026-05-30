import './App.css';
import Footer from './Componets/Footer';
import Hero from './Componets/Hero';
import Home from './Componets/Home';
import Navbar from './Componets/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from './Componets/Product';
import BlogDetail from './Componets/BlogDetail';
import Service from './Componets/Service';
import Contact from './Componets/Contact';
import About from './Componets/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Product" element={<Product />} ></Route >
          <Route path="/BlogDetail" element={<BlogDetail />}></Route >
          <Route path="/Service" element={<Service />}></Route >
          <Route path="/Contact" element={<Contact />}></Route >
          <Route path="/About" element={<About />}></Route >
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
