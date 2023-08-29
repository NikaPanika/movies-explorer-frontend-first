import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';

const Header = ({ isLogged}) => {

    const { pathname } = useLocation();

    return (
        <header className={`header ${ pathname === '/' ? ' header__main' : ''}`}>
            <img className="header__logo" src={logo} alt="Логотип"/>
            <Navigation isLogged={isLogged} />
        </header>
    );
};

export default Header;