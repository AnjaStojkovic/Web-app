import { Link } from 'react-router-dom';
import roses from '../../assets/first.jpg';
import mists from '../../assets/second.webp';
import soapCream from '../../assets/third.avif';
import './../../sass/main.scss';

const AboutUs = () => {

    const aboutUs = [
        {
          title: "Explore Our Beauty Collection",
          text: "Dive into a world of beauty with our carefully curated selection of cosmetic products. We provide a wide range of essential beauty items, from moisturizers and cleansers to face masks, eye care solutions, treatments, lip balms, and sunscreens. Your journey to flawless beauty starts here."
        },
        {
          title: "Beauty Begins with Cleanliness",
          text: "Your journey to beauty excellence starts with a clean slate. Discover the pivotal role of hygiene in your beauty routine and learn why maintaining impeccable cleanliness is the foundation of radiant skin and flawless makeup."
        }
      ]

      return (
        <>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
             <h2 className="heading-secondary">Unlock Your Beauty Potential</h2>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              {aboutUs.map((paragraph, index) => (
                <div key={index}>
                  <h3 className="heading-tertiary u-margin-bottom-small">{paragraph.title}</h3>
                  <p className="paragraph">{paragraph.text}</p>
                </div>
              ))}
              <Link className="btn-text" to="/overviews">
                Learn more &rarr;
               </Link>
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img src={roses} alt="image one" className="composition__photo composition__photo--p1" />
                <img src={mists} alt="image two" className="composition__photo composition__photo--p2" />
                <img src={soapCream} alt="image three" className="composition__photo composition__photo--p3" />
              </div>
            </div>
          </div>  
        </section>
        </>
      )

}

export default AboutUs;