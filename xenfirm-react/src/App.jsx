import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Upskill from './pages/Upskill';
import CertificateSearch from './pages/CertificateSearch';
import CertificateVerification from './pages/CertificateVerification';

function App() {
  return (
    <Router>
      <Routes>
        {/* Certificate Verification Routes */}
        <Route path="/verify" element={<CertificateSearch />} />
        <Route path="/verify/:certificateId" element={<CertificateVerification />} />

        {/* Main Website Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pages/about" element={<About />} />
          <Route path="pages/services" element={<Services />} />
          <Route path="pages/portfolio" element={<Portfolio />} />
          <Route path="pages/blog" element={<Blog />} />
          <Route path="pages/careers" element={<Careers />} />
          <Route path="pages/contact" element={<Contact />} />
          <Route path="pages/upskill" element={<Upskill />} />
          {/* Short aliases */}
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="upskill" element={<Upskill />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
