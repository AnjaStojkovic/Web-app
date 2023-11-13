import './../../sass/main.scss';
import Cards from '../home/Cards';
import Sale from '../home/Sale';
import Footer from '../home/Footer';
import AboutUs from '../home/AboutUs';
import Gallery from '../home/Gallery';
import Navigation from '../home/Navigation';
import Header from '../home/Header';

export default function HomePage() {

  return (
    <>
      <Navigation/>
      <Header/>
      <AboutUs/>
      <Cards/>
      <Sale/> 
      <Gallery/>
      <Footer/>
    </>
  );
}

