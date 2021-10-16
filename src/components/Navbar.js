import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.scss";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import NavbarSearch from "./NavbarSearch";

const Navbar = () => {
	const { cartValue } = useContext(CartContext);
	const [cart] = cartValue;

	return (
		<header>
			<nav>
				<div>
					<Link to="/">
						<h2 className="logo__title">Cold Center</h2>
					</Link>
				</div>
				<ul className="nav__links">
					<li>
						<NavLink exact activeClassName="active" to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" to="/contact">
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" to="/about">
							About
						</NavLink>
					</li>
				</ul>
				<ul className="nav__search">
					<li>
						<NavbarSearch />
					</li>
					<li>
						<Link to="/cart">
							<i className="fas fa-shopping-cart"></i>
							&nbsp;Cart
							<sup>
								<span>{cart.length}</span>
							</sup>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
