import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. Scroll to top on every route change
    window.scrollTo({ top: 0, behavior: 'instant' });

    // 2. Reset all animation elements — strip 'visible' so they re-animate
    document.querySelectorAll('.anim-fade-up').forEach((el) => {
      el.classList.remove('visible');
    });

    // 3. Short timeout to let React render the new page DOM, then observe
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // once visible, stop watching
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
      );

      document.querySelectorAll('.anim-fade-up').forEach((el) => {
        observer.observe(el);
      });

      // cleanup returned so React can tear it down on next route change
      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname]); // re-run whenever the route changes

  return (
    <>
      <Navbar />
      {/* 66px navbar + 42px ticker = 108px total top offset */}
      <div style={{ paddingTop: '108px' }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
