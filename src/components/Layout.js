import { useEffect } from 'react';

import Header from './global/Header';
import Footer from './global/Footer';
import ScrollToTop from './global/ScrollToTop';
import jqueryLoad from '../utils/jquery';

const Layout = ({ children }) => {
  useEffect(() => {
    jqueryLoad();
  }, []);

  return (
    <div>
      <ScrollToTop />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
