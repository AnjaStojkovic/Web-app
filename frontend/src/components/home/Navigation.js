import { Link } from 'react-router-dom';
import './../../sass/main.scss';

const Navigation = () => {
    
    return (
        <>
        <div className="navigation">
            <input type="checkbox" id='navi-toggle' className="navigation__checkbox" />

            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                <li className="navigation__item"><Link to="/overviews" className="navigation__link">About us</Link></li>
                <li className="navigation__item"><Link to="/all" className="navigation__link">Products</Link></li>
                <li className="navigation__item"><Link to="/comments" className="navigation__link">Comments</Link></li>
                <li className="navigation__item"><Link to="/login" className="navigation__link">Login</Link></li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default Navigation;