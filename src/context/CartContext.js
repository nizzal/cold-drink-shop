import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
	let localCart =
		localStorage.getItem("cart") == null
			? []
			: JSON.parse(localStorage.getItem("cart"));
	const [cart, setCart] = useState(localCart);

	return (
		<CartContext.Provider value={[cart, setCart]}>
			{props.children}
		</CartContext.Provider>
	);
};
