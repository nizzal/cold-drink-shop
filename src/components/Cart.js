import { useContext, useEffect, useState } from "react";
import "../styles/Cart.scss";
import { CartContext } from "../context/CartContext";
import Modal from "./Modal";
// import Checkout from "../pages/Checkout";

const Cart = () => {
	const { cartValue } = useContext(CartContext);
	const [cart, setCart] = cartValue;
	const [openModal, setOpenModal] = useState(false);

	let totalPrice =
		cart.length === 0 ? 0 : cart.map((item) => item.price * item.quantity);
	totalPrice = totalPrice === 0 ? 0 : totalPrice.reduce((a, b) => a + b, 0);

	const revmoveProductHandler = (item) => {
		setCart((prevCart) => {
			const newCart = prevCart.filter((el) => el !== item);
			localStorage.setItem("cart", JSON.stringify(newCart));
			return newCart;
		});
	};

	useEffect(() => {
		document.title = `Cart (${cart.length})`;
	}, [cart]);

	const quantityHandler = (e, item) => {
		const updatedQuantity = cart.map((cartItem) =>
			cartItem.id === item.id
				? { ...cartItem, quantity: e.target.value }
				: cartItem
		);
		setCart(updatedQuantity);
		localStorage.setItem("cart", JSON.stringify(updatedQuantity));
	};

	const modalHandler = () => {
		setOpenModal(!openModal);
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
									key={item.id}
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
												min="1"
												max="99"
												value={item.quantity}
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
					<button onClick={modalHandler}>Checkout</button>
				</div>
				{/* {openModal && (
					<Checkout setModal={setOpenModal} modal={openModal} />
				)} */}
				{openModal && (
					<Modal
						isModalOpen={openModal}
						setModalOpen={setOpenModal}
					/>
				)}
			</main>
		</>
	);
};

export default Cart;
