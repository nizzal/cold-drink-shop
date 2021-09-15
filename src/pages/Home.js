import ComapnyCard from "../components/ComapnyCard";
import ProductPromotion from "../components/ProductPromotion";
import ProductsMenu from "../components/ProductsMenu";
import "../styles/Home.scss";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Home = () => {
	const [cart] = useContext(CartContext);
	console.log(cart);
	return (
		<div className="home__container">
			<div className="hero__container">
				<h1>EXPLORE POSSIBILITIES WITH EVERY SIP OF COCA-COLA</h1>
				<button>ORDER NOW</button>
			</div>
			<ProductsMenu />
			<ComapnyCard />
			<ProductPromotion />
		</div>
	);
};

export default Home;
