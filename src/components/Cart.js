import { useContext, useEffect } from "react";
import "../styles/Cart.scss";
import { CartContext } from "../context/CartContext";

const Cart = () => {
	const { cartValue } = useContext(CartContext);

	const [cart, setCart] = cartValue;
	// console.log(cart);

	let totalPrice =
		cart.length === 0 ? 0 : cart.map((item) => item.price * item.quantity);
	totalPrice = totalPrice === 0 ? 0 : totalPrice.reduce((a, b) => a + b, 0);

	const revmoveProductHandler = (item) => {
		console.log(item);
		cart.indexOf(item);
		const newData = cart.filter((el) => el.id !== item);
		// console.log(newData);
		setCart(cart.filter((el) => el.id !== item));
		localStorage.setItem("cart", JSON.stringify(newData));
	};

	useEffect(() => {
		document.title = `Cart (${cart.length})`;
	}, [cart]);

	const quantityHandler = (e, item) => {
		const updatedQuantity = cart.map((cartItem) =>
			cartItem.id === item.id
				? { ...item, quantity: e.target.value }
				: item
		);
		localStorage.setItem("cart", JSON.stringify(updatedQuantity));

		console.log(updatedQuantity);
	};

	return (
		<>
			<h1 style={{ textAlign: "center" }}>Cart Details</h1>
			<h2 style={{ textAlign: "center" }}>Toal Items: {cart.length}</h2>
			<main>
				<div className="cart__list">
					{cart.length >= 1 ? (
						cart.map((item) => {
							return (
								<div
									className="product__card-cart"
									key={cart.indexOf(item)}
								>
									<div className="product__image">
										<img
											src={item.images}
											alt={item.name}
										/>
									</div>
									<div className="product__details">
										<p className="product__details-title">
											{item.name}
										</p>
										<p className="product__details-price">
											Rs.&nbsp;{item.price}
										</p>
										<p className="product__details-quantity">
											Quantity:&nbsp;
											<input
												type="number"
												min="0"
												max="99"
												defaultValue={item.quantity}
												onChange={(e) =>
													quantityHandler(e, item)
												}
											/>
										</p>
										<button
											className="removeItemBtn"
											onClick={() =>
												revmoveProductHandler(item)
											}
										>
											Remove
										</button>
									</div>
								</div>
							);
						})
					) : (
						<h2>No Cart</h2>
					)}
				</div>
				<div className="cart__details-card">
					<h3>Order Details</h3>
					<hr />
					<p>Total Items:&nbsp;{cart.length}</p>
					<label htmlFor="Coupen">Coupen Code</label>
					<input
						type="text"
						name="coupen"
						placeholder="Enter coupen code"
					/>
					<button>Apply Coupen</button>
					<hr />
					<p>
						<b>Total:&nbsp;Rs.{totalPrice}</b>
					</p>
					<button>Checkout</button>
				</div>
			</main>
		</>
	);
};

export default Cart;
