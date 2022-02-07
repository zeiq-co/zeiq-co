import { useEffect } from 'react';

import Header from './global/Header';
import Footer from './global/Footer';
import ScrollToTop from './global/ScrollToTop';
import jqueryLoad from '../utils/jquery';
import contactData from '../../content/general/contact.yaml';

const Layout = ({ children }) => {
  console.log('contactData', contactData);
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
