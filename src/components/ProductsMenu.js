import { useState } from "react";
import ProductsCard from "./ProductsCard";
import "../styles/ProductsMenu.scss";

const ProductsMenu = ({ setCart, cart }) => {
	const [active, setActive] = useState("cold-drinks");
	const [more, setMore] = useState(6);

	const loadMoreItems = () => {
		setMore((prevValue) => prevValue + 3);
	};

	return (
		<div className="products__menu">
			<ul className="products__link">
				<li className={active === "cold-drinks" ? active : null}>
					<button onClick={() => setActive("cold-drinks")}>
						Cold Drinks
					</button>
				</li>
				<li className={active === "beer" ? active : ""}>
					<button onClick={() => setActive("beer")}>Beer</button>
				</li>
				<li className={active === "wine" ? active : ""}>
					<button onClick={() => setActive("wine")}>Wine</button>
				</li>
			</ul>

			{active === "cold-drinks" && (
				<ProductsCard
					type="cold-drinks"
					more={more}
					setCart={setCart}
					cart={cart}
				/>
			)}
			{active === "beer" && (
				<ProductsCard type="beer" setCart={setCart} cart={cart} />
			)}
			{active === "wine" && (
				<ProductsCard type="wine" setCart={setCart} cart={cart} />
			)}
			<button className="load-more__btn" onClick={loadMoreItems}>
				Load More
			</button>
		</div>
	);
};

export default ProductsMenu;
