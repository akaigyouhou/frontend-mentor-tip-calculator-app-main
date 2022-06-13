import "./header.css";
import logo from '../images/logo.svg';

const Header = () => {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="logo"></img>
        </header>
    );
}

export default Header;
