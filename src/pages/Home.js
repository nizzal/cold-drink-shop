import ComapnyCard from "../components/ComapnyCard";
import ProductPromotion from "../components/ProductPromotion";
import ProductsMenu from "../components/ProductsMenu";
import "../styles/Home.scss";

import { useEffect } from "react";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

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
			<Subscribe />
			<br />
			<Footer />
		</div>
	);
};

export default Home;
