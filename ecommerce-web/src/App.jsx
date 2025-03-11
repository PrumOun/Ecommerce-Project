import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Productlist from "./page/Productlist/Productlist";
import Productdetails from "./page/Productdetails/Productdetails";
import Contact from "./page/Contect";
import Cart from "./page/Cart";
import Checkout from "./page/Checkout";
import Confirmation from "./page/confirmation";


// Uncomment and import other pages when needed
// import Shop from "./pages/Shop";

function App() {
  return (
    <BrowserRouter>
      {/* Header Component */}
      <Header />

      {/* Define Routes */}
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/productlist" element={<Productlist />} />
        <Route path="/productdetails" element={<Productdetails />} />
        <Route path="/contect" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/confirmation" element={<Confirmation/>}/>
        

      </Routes>

      {/* Footer Component */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;