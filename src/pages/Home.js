import ComapnyCard from "../components/ComapnyCard";
import ProductPromotion from "../components/ProductPromotion";
import ProductsMenu from "../components/ProductsMenu";
import "../styles/Home.scss";

import subscribeImage from "../img/subscribe.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
	useEffect(() => {
		document.title = "Home";
	});

	return (
		<div className="home__container">
			<div className="hero__container">
				<h1>EXPLORE POSSIBILITIES WITH EVERY SIP OF COCA-COLA</h1>
				<button>ORDER NOW</button>
			</div>
			<ProductsMenu />
			<ComapnyCard />
			<ProductPromotion />
			<br />
			<div className="subscribe__container">
				<div className="subscribe__image">
					<img src={subscribeImage} alt="Subscribe to news letter" />
				</div>
				<div className="subscribe__details">
					<h1>Never miss any discounts and coupen.</h1>
					<p>
						Subscribe to get weekly discounts and coupen code right
						on your email
					</p>
					<form>
						<input
							type="email"
							name="email"
							placeholder="Enter your email address"
						/>
						<button type="button">Subscribe</button>
					</form>
				</div>
			</div>
			<br />
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
		</div>
	);
};

export default Home;
