import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import 'aos/dist/aos.css';
import AOS from 'aos';
import TopProducts from './components/TopProducts/TopProducts';
import Winter_Sell from './components/WinterSell/Winter_Sell';
import GetNotified from './components/GetNotified/GetNotified';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products handleOrderPopup={handleOrderPopup} />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Winter_Sell />
      <GetNotified />
      <Products handleOrderPopup={handleOrderPopup} />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
