import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productIMG from "../img/product1.png";
import "../styles/ProductsCard.scss";
import data from "./ProductsData";
import { CartContext } from "../context/CartContext";

const ProductsCard = ({ type, more }) => {
	const [isAvailable, setIsAvailable] = useState(false);

	const { cartValue } = useContext(CartContext);
	const [cart, setCart] = cartValue;

	useEffect(() => {
		let categoryCheck = data.filter((item) => {
			return item.category === type;
		});

		categoryCheck.length >= 1
			? setIsAvailable(true)
			: setIsAvailable(false);

		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart, type]);

	const addToCart = (el) => {
		let productExist = cart.find((item) => item.id === el.id);
		// console.log(productExist);
		productExist
			? setCart(
					cart.map((item) =>
						item.id === el.id
							? {
									...productExist,
									quantity: productExist.quantity + 1,
							  }
							: item
					)
			  )
			: setCart((prevCart) => [...prevCart, { ...el, quantity: 1 }]);
	};
	return (
		<div className="products__menu-list">
			{isAvailable ? (
				data
					.filter((item) => {
						return item.category === type ? item : null;
					})
					.slice(0, more)
					.map((el) => {
						return (
							el.category === type && (
								<div className="product__card" key={el.id}>
									<div className="product__image">
										<img src={productIMG} alt="" />
									</div>
									<Link
										to={`/products/${el.id}`}
										className="product__card-details"
									>
										<p>{el.name}</p>
										<p>Rs.{el.price}</p>
										{/* <Link to={`/products/${el.id}`}>View More</Link> */}
									</Link>
									<button onClick={() => addToCart(el)}>
										<i className="fas fa-cart-plus"></i>
									</button>
								</div>
							)
						);
					})
			) : (
				<h1>No Products</h1>
			)}
		</div>
	);
};

export default ProductsCard;
