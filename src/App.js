import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Login from "./components/Login";
import More from "./components/More";
import Navbar from "./components/Navbar";
import MyContext from "./context";
import Home from "./Home";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <>
      <MyContext.Provider value={{ dark, setDark }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/more" element={<More />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
