import './../../sass/main.scss';
import iconBasicWorld from '../../icons/basic_world.svg';
import iconBasicHeart from '../../icons/basic_heart.svg';
import iconBasicMap from '../../icons/basic_map.svg';
import iconBasicCompass from '../../icons/basic_compass.svg';
import { ReactSVG } from 'react-svg';
import Axios from '../../apis/Axios';
import { useEffect, useState } from 'react';

const Cards = () => {
  const [cards, setCards] = useState([]);

      const getCards = () => {
        Axios.get('/cards')
          .then(res => {
            setCards(res.data);
          })
          .catch(error => {
            alert("An error occurred while loading the cards");
          });
      };

      useEffect(() => {
        getCards();
      }, []);

      const cardData = [
          {
            id: 1,
            icon: iconBasicWorld,
          },
          {
            id: 2,
            icon: iconBasicCompass,
          },
          {
            id: 3,
            icon: iconBasicMap,
          },
          {
            id: 4,
            icon: iconBasicHeart,
          },
      ];

      return (
        <section className="section-features">
          <div className="row">
            {cardData.map((card, index) => (
              <div className="col-1-of-4" key={card.id}>
                <div className="feature-box">
                  <ReactSVG className="feature-box__icon" src={card.icon} alt={`icon-${card.id}`} />
                  <h3 className="heading-tertiary u-margin-bottom-small">{cards[index]?.card}</h3>
                  <p className="feature-box__text">{cards[index]?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    };

  export default Cards;