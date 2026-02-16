import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import Navbar from "./pages/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />  {/* Render Navbar once here */}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Router>
  );
}

export default App;