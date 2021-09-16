import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
	let localCart =
		localStorage.getItem("cart") == null
			? []
			: JSON.parse(localStorage.getItem("cart"));
	const [cart, setCart] = useState(localCart);

	const [drinkType, setDrinkType] = useState("cold-drinks");

	return (
		<CartContext.Provider
			value={{
				cartValue: [cart, setCart],
				drinkValue: [drinkType, setDrinkType],
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};
