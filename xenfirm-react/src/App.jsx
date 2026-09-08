import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import SEO from "./components/SEO";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Upskill from "./pages/Upskill";
import Policies from "./pages/Policies";
import NotFound from "./pages/NotFound";
import CertificateSearch from "./pages/CertificateSearch";
import CertificateVerification from "./pages/CertificateVerification";
import { aliases } from "./data/metadata";
export function AppRoutes() {
  return (
    <>
      <SEO />
      <Routes>
        <Route path="/verify" element={<CertificateSearch />} />
        <Route
          path="/verify/:certificateId"
          element={<CertificateVerification />}
        />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {Object.entries(aliases).map(([from, to]) => (
            <Route
              key={from}
              path={from}
              element={<Navigate to={to} replace />}
            />
          ))}
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:slug" element={<ProductDetail />} />
          <Route path="case-studies" element={<Portfolio />} />
          <Route path="case-studies/:slug" element={<Portfolio />} />
          <Route path="insights" element={<Blog />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="upskill" element={<Upskill />} />
          <Route path="privacy" element={<Policies />} />
          <Route path="terms" element={<Policies />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
