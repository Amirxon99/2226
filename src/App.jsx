import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Club from "./pages/club/Club";
import Contact from "./pages/contact/Contact";
import Advantages from "./pages/advantages/Advantages";
import Brand from "./pages/brand/Brand";
import NotFound from "./pages/notFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/club" element={<Club/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/advantages" element={<Advantages/>}></Route>
          <Route path="/brand" element={<Brand/>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
