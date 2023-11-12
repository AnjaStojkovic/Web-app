import './../../sass/main.scss';
import soaps from '../../assets/soaps.png';

const Footer = () => {

    return (
        <>
            <footer className="footer">
                <div className="footer__logo-box">
                    <img src={soaps} alt="logo" className='footer__logo'/>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="footer__navigation">
                            <ul className="footer__list">
                                <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                    <p className="footer__copyright">
                      © 2023 EcoGlow Skincare. All rights reserved. The content of this website is protected by copyright law and may not be reproduced, distributed, or used without the express written permission of EcoGlow Skincare.
                    </p>
                    </div>
                </div>
            </footer>
        </>
    )

}

export default Footer;