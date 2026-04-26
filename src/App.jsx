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
import { useEffect } from "react";
import { useAuthStore } from "./store/useAuthStore";
import ProtectedRoute from "./protectRoute";
import Loader from "./pages/Loader";
import Profile from "./pages/Profile";
import { useOrgStore } from "./store/useOrgStore";
import Attendance from "./dashboard/Attendance";
import Settings from "./dashboard/Setting";
import DashboardHome from "./dashboard/DashboardHome";
import Organization from "./dashboard/Organization";

function App() {
  const { pathname } = useLocation();
  const showNavbar = !pathname.startsWith("/dashboard");
  const fetchUser = useAuthStore((state) => state.fetchUser);
  const fetchOrg = useOrgStore((state) => state.get);
  const loading = useAuthStore((s) => s.loading);

  console.log(fetchUser);

  useEffect(() => {
    fetchUser();
    fetchOrg();
  }, [fetchUser]);

  return loading ? (
    <Loader />
  ) : (
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
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />

          <Route path="students" element={<Students />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="organization" element={<Organization />} />
          <Route path="employees" element={<Employees />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showNavbar && <Footer />}
    </>
  );
}

export default App;
