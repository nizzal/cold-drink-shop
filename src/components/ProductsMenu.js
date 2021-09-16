import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ProductsCard from "./ProductsCard";
import "../styles/ProductsMenu.scss";

const ProductsMenu = () => {
	const { drinkValue } = useContext(CartContext);
	const [drinkType, setDrinkType] = drinkValue;

	// const [drinkType, setDrinkType] = useState("cold-drinks");

	const [more, setMore] = useState(6);

	const loadMoreItems = () => {
		setMore((prevValue) => prevValue + 3);
	};

	return (
		<div className="products__menu">
			<ul className="products__link">
				<li className={drinkType === "cold-drinks" ? drinkType : null}>
					<button onClick={() => setDrinkType("cold-drinks")}>
						Cold Drinks
					</button>
				</li>
				<li className={drinkType === "beer" ? drinkType : ""}>
					<button onClick={() => setDrinkType("beer")}>Beer</button>
				</li>
				<li className={drinkType === "wine" ? drinkType : ""}>
					<button onClick={() => setDrinkType("wine")}>Wine</button>
				</li>
			</ul>

			{drinkType === "cold-drinks" && (
				<ProductsCard type="cold-drinks" more={more} />
			)}
			{drinkType === "beer" && <ProductsCard type="beer" more={more} />}
			{drinkType === "wine" && <ProductsCard type="wine" more={more} />}
			<button className="load-more__btn" onClick={loadMoreItems}>
				Load More
			</button>
		</div>
	);
};

export default ProductsMenu;
