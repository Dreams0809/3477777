import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";


// Import components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx"; // ✅ Only import once!

// Import pages
import Blogs from "./pages/Blogs.jsx";  // ✅ PLURAL
import Vids from "./pages/Vids.jsx";
import Vlogs from "./pages/Vlogs.jsx";
import Signup from "./pages/Signup.jsx"; // ✅ Import Signin page
import Login from "./pages/Login.jsx";



export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" ensureAuth element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/vids" element={<Vids />} />
        <Route path="/vlogs" element={<Vlogs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}
