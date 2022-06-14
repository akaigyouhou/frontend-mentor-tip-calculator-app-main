import "./header.css";
import logo from '../images/logo.svg';

const Header = () => {
    return (
        <header className="header">
            <h1><img className="header__logo" src={logo} alt="splitter" /></h1>
        </header>
    );
}

export default Header;
