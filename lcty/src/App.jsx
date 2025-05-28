import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Programs from "./pages/Programs";
import ProspectiveClients from "./pages/ProspectiveClients";
import OurTeam from "./pages/OurTeam";
import CommunityPartners from "./pages/CommunityPartners";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/prospective-clients" element={<ProspectiveClients />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/community-partners" element={<CommunityPartners />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
