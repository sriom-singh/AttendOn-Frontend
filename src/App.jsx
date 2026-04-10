import Home from "./pages/Home";
import Footer from "./components/sections/Footer";
import { Routes, Route, useLocation } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/sections/Navbar";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/dashboard";
import Employees from "./dashboard/Employees";
import Students from "./dashboard/Students";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";

function App() {
  const { pathname } = useLocation();
  const showNavbar = !pathname.startsWith("/dashboard");

  return (
    <>
      {showNavbar && <Navbar active={"Home"} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="employees" element={<Employees />} />
          <Route path="students" element={<Students />} />
          <Route path="attendance" element={<div>Attendance</div>} />
          <Route path="settings" element={<div>Settings</div>}/>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      {showNavbar && <Footer />}
    </>
  );
}

export default App;
