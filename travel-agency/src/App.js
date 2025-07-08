//"react-app",
//     "react-app/jest"
import "./styles/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Tours from "./components/Tours";
import { TourDetails } from "./components/Tours/index";
import Blog from "./components/Blog";
import Travel from "./components/Blog/Travel";
import Health from "./components/Blog/Health";
import Advice from "./components/Blog/Advice";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Terms from "./components/Terms&Privacy/Terms";
import Privacy from "./components/Terms&Privacy/Privacy";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route />
          <Route path="about" element={<About />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tour/:id" element={<TourDetails />} />
          <Route path="blog" element={<Blog />} />
          <Route path="/blog/travel" element={<Travel />} />
          <Route path="/blog/health" element={<Health />} />
          <Route path="/blog/advice" element={<Advice />} />
          <Route path="/terms&conditions" element={<Terms />} />
          <Route path="/privacypolicy" element={<Privacy />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

/*********************** */
