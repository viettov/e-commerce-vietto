import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navBar">
            <header className="header">
                <div class="logo">
                    <Link to="/">TIENDA DE ROPA</Link>
                </div>
                <nav class="nav">
                    <Link to="/category/1">---</Link>
                    <a href="#">Mis viajes</a>
                    <a href="#">Acceso</a>
                </nav>
                <CartWidget/>
            </header>
        </div>
    )
}

export default NavBar;
