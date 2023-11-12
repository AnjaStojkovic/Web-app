import { Link } from 'react-router-dom';
import './../../sass/main.scss';
import sunOne from '../../assets/sunOne.avif';
import sunTwo from '../../assets/sunTwo.avif';
import maskOne from '../../assets/maskOne.avif';
import maskTwo from '../../assets/maskTwo.avif';
import lipOne from '../../assets/lipOne.avif';
import lipThree from '../../assets/lipThree.avif'


    const productData = {
      1: {
        name: 'Lip Balm',
        price: '$12',
        imageOne: lipOne,
        imageTwo: lipThree,
        description: 'Moisturize your lips.',
        benefits: 'Hydration',
        itemsLeft: '50 products left',
        size: '4.5 ml',
      },
      2: {
        name: 'Face Mask',
        price: '$6',
        imageOne: maskOne,
        imageTwo: maskTwo,
        description: 'Revitalize your skin.',
        benefits: 'Rejuvenation',
        itemsLeft: '30 products left',
        size: '75 ml',
      },
      3: {
        name: 'Cream',
        price: '$22',
        imageOne: sunOne,
        imageTwo: sunTwo,
        description: 'Stay protected.',
        benefits: 'UV Protection',
        itemsLeft: '100 products left',
        size: '100 ml',
      },
    };
      
      const Sale = () => {
        return (
          <section className="section-sales">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">PRODUCTS ON SALE</h2>
            </div>
      
            <div className="row">
              {Object.keys(productData).map((productId) => {
                const product = productData[productId];
                return (
                  <div className="col-1-of-3" key={productId}>
                    <div className="card">
                      <div className={`card__side card__side--front`}>
                        <div className={`card__picture card__picture--${productId}`}>
                          &nbsp;
                        </div>
                        <h4 className="card__heading">
                          <span className={`card__heading-span--${productId}`}>{product.name}</span>
                        </h4>
                        <div className="card__details">
                          <ul>
                            <li>{product.name}</li>
                            <li>{product.description}</li>
                            <li>{product.itemsLeft}</li>
                            <li>{product.benefits}</li>
                            <li>{product.size}</li>
                          </ul>
                        </div>
                      </div>
                      <div className={`card__side card__side--back card__side--back-${productId}`}>
                        <div className="card__cta">
                          <div className="card__price-box">
                            <p className="card__price-only">Only</p>
                            <p className="card__price-value">{product.price}</p>
                          </div>
                          <Link
                            to={`/popup/${productId}`}
                            className="btn btn--white"
                          >
                            See more details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
      
            <div className="u-center-text u-margin-top-huge">
              <Link className="btn btn--blue" to="/all">
                See all products
              </Link>
            </div>
          </section>
        );
      };
      
      export default Sale;