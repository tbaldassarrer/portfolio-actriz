import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

// ✅ Páginas legales
import Cookies from "./pages/legal/Cookies";
import LegalNotice from "./pages/legal/LegalNotice";
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";

// ✅ AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
      offset: 0,
    });
  }, []);

  // ✅ Importante: refrescar AOS al cambiar de ruta (React Router)
  useEffect(() => {
    AOS.refreshHard();
  }, [location.pathname]);

  return (
    <div className="page">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* ✅ rutas legales */}
        <Route path="/aviso-legal" element={<LegalNotice />} />
        <Route path="/privacidad" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/condiciones" element={<Terms />} />
      </Routes>

      <Footer />
    </div>
  );
}