import './../../sass/main.scss';
import Cards from './Cards';
import Sale from './Sale';
import Footer from './Footer';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import Navigation from './Navigation';
import Header from './Header';

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

