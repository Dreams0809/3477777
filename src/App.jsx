import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Body from "./components/Body.jsx"; // ✅ Only import once!

// Import pages
import Blogs from "./pages/Blogs.jsx";  // ✅ PLURAL
import Vids from "./pages/Vids.jsx";
import Vlogs from "./pages/Vlogs.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/vids" element={<Vids />} />
        <Route path="/vlogs" element={<Vlogs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
