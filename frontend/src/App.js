import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OurJourney from "./pages/OurJourney";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/ourJourney" element={<OurJourney />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
