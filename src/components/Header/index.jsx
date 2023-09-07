import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/LOGO.png';
import './index.scss';

function Header() {
	const location = useLocation();
	const isOnHome = location.pathname === '/';
	const isOnAbout = location.pathname === '/about';

	return (
		<header>
			<img src={Logo} alt="Logo" />
			<nav>
				<Link className={isOnHome ? 'link-active' : ''} to="/">
					Accueil
				</Link>
				<Link className={isOnAbout ? 'link-active' : ''} to="/about">
					A Propos
				</Link>
			</nav>
		</header>
	);
}

export default Header;
