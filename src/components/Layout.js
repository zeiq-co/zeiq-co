import Header from './global/Header';
import Footer from './global/Footer';
import ScrollToTop from './global/ScrollToTop';

const Layout = ({ children }) => (
  <div>
    <ScrollToTop />
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
