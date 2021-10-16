import { Link } from "react-router-dom";
import "../styles/Footer.scss";

const Footer = () => {
	return (
		<footer>
			<h2>Cold Center</h2>
			<div className="products__link">
				<h2>Products Links</h2>
				<ul>
					<li>
						<Link to="/">Cold Drinks</Link>
					</li>
					<li>
						<Link to="/">Beer</Link>
					</li>
					<li>
						<Link to="/">Wine</Link>
					</li>
				</ul>
			</div>
			<div className="site__links">
				<h2>Site Links</h2>
				<ul>
					<li>
						<Link to="/about">About Us</Link>
					</li>
					<li>
						<Link to="/contact">Contact Us</Link>
					</li>
					<li>
						<Link to="/">Terms & Condition</Link>
					</li>
				</ul>
			</div>
			<div className="social__links">
				<h2>Social Links</h2>
				<ul>
					<li>
						<Link to="/">Facebook</Link>
					</li>
					<li>
						<Link to="/">Instagram</Link>
					</li>
					<li>
						<Link to="/">Twitter</Link>
					</li>
				</ul>
			</div>
			<br />
			<span className="copyright_text">
				&#169; 2021 Cold Center, All rights reserved.
			</span>
		</footer>
	);
};

export default Footer;
