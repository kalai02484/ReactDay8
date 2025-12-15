import React, { useState } from "react";
import PageNotFound from "./pages/PageNotFound";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./pages/Edit";

const App = () => {
  const [id, setId] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setId={setId}/>} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit id={id}/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
