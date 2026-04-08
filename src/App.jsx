import Home from "./pages/Home";
import Footer from "./components/sections/Footer";
import { Routes, Route } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/sections/Navbar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar active={"Home"} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
