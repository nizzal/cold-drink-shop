import "../styles/Cart.scss";

const Cart = () => {
	let cartData =
		localStorage.getItem("cart") == null
			? []
			: JSON.parse(localStorage.getItem("cart"));

	return (
		<>
			<h1 style={{ textAlign: "center" }}>Cart Details</h1>
			<h2 style={{ textAlign: "center" }}>
				Toal Items: {cartData.length}
			</h2>
			<div className="cart__list">
				{cartData.length >= 1 ? (
					cartData.map((item) => {
						return (
							<div
								className="product__card-cart"
								key={cartData.indexOf(item)}
							>
								<div className="product__image">
									<img src={item.images} alt={item.name} />
								</div>
								<div className="product__details">
									<h1>{item.name}</h1>
									<p>{item.description}</p>
									<p>Rs. {item.price}</p>
									<p>Quantity: {item.quantity}</p>
								</div>
							</div>
						);
					})
				) : (
					<h2>No Cart</h2>
				)}
			</div>
		</>
	);
};

export default Cart;
