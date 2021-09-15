import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = ({ cart }) => {
	return (
		<header>
			<nav>
				<Link to="/">
					<h2 className="logo__title">Cold Center</h2>
				</Link>
				<ul className="nav__links">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/cart">
							<i className="fas fa-shopping-cart"></i>
							<span>
								&nbsp;Cart{" "}
								<sup style={{ color: "red", fontWeight: 600 }}>
									{cart.length}
								</sup>
							</span>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
