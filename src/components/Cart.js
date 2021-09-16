import { useEffect } from "react";
import "../styles/Cart.scss";

const Cart = () => {
	let cartData =
		localStorage.getItem("cart") == null
			? []
			: JSON.parse(localStorage.getItem("cart"));
	console.log(cartData.length);
	let totalPrice =
		cartData.length === 0
			? 0
			: cartData.map((item) => item.price * item.quantity);
	totalPrice = totalPrice === 0 ? 0 : totalPrice.reduce((a, b) => a + b, 0);
	console.log(totalPrice);

	useEffect(() => {
		document.title = `Cart (${cartData.length})`;
	});

	return (
		<>
			<h1 style={{ textAlign: "center" }}>Cart Details</h1>
			<h2 style={{ textAlign: "center" }}>
				Toal Items: {cartData.length}
			</h2>
			<main>
				<div className="cart__list">
					{cartData.length >= 1 ? (
						cartData.map((item) => {
							return (
								<div
									className="product__card-cart"
									key={cartData.indexOf(item)}
								>
									<div className="product__image">
										<img
											src={item.images}
											alt={item.name}
										/>
									</div>
									<div className="product__details">
										<p>{item.name}</p>
										<p>Rs.&nbsp;{item.price}</p>
										<p>Quantity:&nbsp;{item.quantity}</p>
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
					<p>Total Items:&nbsp;{cartData.length}</p>
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
