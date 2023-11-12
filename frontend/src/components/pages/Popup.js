import './../../sass/main.scss';
import React from 'react-router-dom';
import sunOne from '../../assets/sunOne.avif';
import sunTwo from '../../assets/sunTwo.avif';
import maskOne from '../../assets/maskOne.avif';
import maskTwo from '../../assets/maskTwo.avif';
import lipOne from '../../assets/lipOne.avif';
import lipThree from '../../assets/lipThree.avif';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const productData = {
    1: {
      name: 'Lip Balm',
      price: '$12',
      imageOne: lipOne,
      imageTwo: lipThree,
      details: 'A lightweight, moisture-coating lip balm for hydrated, tinted, and kissable lips throughout the day. This nourishing lip balm provides a subtle tint while locking in moisture, leaving your lips feeling soft and supple. Whether it is a natural look for everyday wear or a touch of color for a special occasion, our Lip Balm is the perfect companion for your lips.',
    },
    2: {
      name: 'Face Mask',
      price: '$6',
      imageOne: maskOne,
      imageTwo: maskTwo,
      details: 'A collection of banana fiber masks formulated with enriched vitamins to address all types of skin concerns—designed to work in five minutes and act as a shot of care for your skin. These masks are a quick and effective solution for giving your skin the boost it needs. Whether you are looking to hydrate, brighten, or revitalize your complexion, our Face Masks provide a luxurious and rejuvenating experience for your skincare routine.',
    },
    3: {
      name: 'Creams',
      price: '$22',
      imageOne: sunOne,
      imageTwo: sunTwo,
      details: 'A lightweight, daily sunscreen that supports the skin against harmful UV rays while visibly brightening the complexion. Our Sunscreen not only provides essential protection from the sun rays but also contains brightening agents to enhance natural radiance of your skin. With its non-greasy formula, it is the perfect addition to your daily skincare routine for a sun-kissed glow with peace of mind.',
    },
  };
  
  
  const Popup = () => {
    const { productId } = useParams();
    const product = productData[productId];
  
    if (!product) {
      return <div>Product not found.</div>;
    }
  
    return (
      <div className='popup' id='popup'>
        <div className="popup__content">
          <div className="popup__left">
            <img src={product.imageOne} alt={product.name} className='popup__img' />
            <img src={product.imageTwo} alt={product.name} className='popup__img' />
          </div>
          <div className="popup__right">
            <Link className="popup__close" to="/">&times;</Link>
            <h2 className="heading-secondary u-margin-bottom-medium">{product.name}</h2>
            <h3 className="heading-tertiary u-margin-bottom-small">Perfect offer</h3>
            <p className="popup__text">{product.details}</p>
            <Link to="/all" className="btn btn--color">See other products</Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Popup;
  
  
  
  
  
  