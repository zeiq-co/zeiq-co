import { useEffect } from 'react';

import Header from './global/Header';
import Footer from './global/Footer';
import ScrollToTop from './global/ScrollToTop';
import jqueryLoad from '../utils/jquery';
import contactData from '../../content/general/contact.yaml';

const Layout = ({ children }) => {
  // console.log('contactData', contactData);

  useEffect(() => {
    setTimeout(() => jqueryLoad(), 200);
  }, []);

  return (
    <div>
      <ScrollToTop />
      <Header />
      {children}
      <Footer contactData={contactData} />
    </div>
  );
};

export default Layout;
