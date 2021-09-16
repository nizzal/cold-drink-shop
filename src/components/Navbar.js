import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.scss";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Navbar = () => {
	const { cartValue } = useContext(CartContext);
	const [cart] = cartValue;

	return (
		<header>
			<nav>
				<Link to="/">
					<h2 className="logo__title">Cold Center</h2>
				</Link>
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
					<li>
						<NavLink activeClassName="active" to="/cart">
							<i className="fas fa-shopping-cart"></i>
							<span>
								&nbsp;Cart{" "}
								<sup style={{ color: "red", fontWeight: 600 }}>
									{cart.length}
								</sup>
							</span>
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
