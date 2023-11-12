import { Link } from 'react-router-dom';
import './../../sass/main.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo-box">
            </div>
            <div className="header__text-box">
            <h1 className="heading-primary">
                        <span className="heading-primary--main">Pure glam</span>
                        <span className="heading-primary--sub">Discover the World of Beauty</span>
                    </h1>
                    <Link className="btn btn--color btn--animated" to="/login">
                Start your own experience
                </Link>
            </div>
        </div>
    )
}

export default Header;