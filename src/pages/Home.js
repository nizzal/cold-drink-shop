import ComapnyCard from "../components/ComapnyCard";
import ProductPromotion from "../components/ProductPromotion";
import ProductsMenu from "../components/ProductsMenu";
import "../styles/Home.scss";

const Home = ({ setCart, cart }) => {
	return (
		<div className="home__container">
			<div className="hero__container">
				<h1>EXPLORE POSSIBILITIES WITH EVERY SIP OF COCA-COLA</h1>
				<button>ORDER NOW</button>
			</div>
			<ProductsMenu setCart={setCart} cart={cart} />
			<ComapnyCard />
			<ProductPromotion />
		</div>
	);
};

export default Home;
