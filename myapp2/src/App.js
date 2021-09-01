// import logo from './logo.svg';
import './App.css';
import Header from '../src/components/header/index';
import Navbar from '../src/components/navbar/index';
import Hero from '../src/components/hero-div/index';
import Banner1 from './components/banner1';
import DonateInfo from './components/donate-info';
import Banner2 from './components/banner2/index';
import Card1 from './components/cards/card1';
import Listingreact from './components/misc_component/listing_react';
import Card2 from './components/cards/components/card2';
import Hero2 from './components/hero2/index';
import Form from './components/form/index';
import Teamslider from './components/misc_component/teamslider';
import Banner3 from './components/banner3';
import Banner5 from './components/banner5'
import FNavbar from './components/navbar/fnav';
import Footer from './components/footer'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Banner1 />
      <DonateInfo />
      <Banner2 />
      <Card1 />
      <Listingreact />
      <Banner3 />
      <Card2 />
      <Hero2 />
      <Form />
      <Teamslider />
      <Banner5 />
      <FNavbar />
      <Footer />
      </>
  );
}

export default App;
