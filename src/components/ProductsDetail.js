import { Redirect, useParams } from "react-router";
import data from "./ProductsData";
import "../styles/ProductsDetail.scss";

const ProductsDetail = () => {
	const { id } = useParams();
	// console.log(typeof(data[0].id))
	// console.log(typeof(id))
	let currentProduct = [];
	currentProduct = data.filter((item) => item.id === parseInt(id));
	// data.filter(item => currentProduct.push(item));
	console.log(currentProduct);
	return (
		<div className="products-detail__container">
			{currentProduct[0] !== undefined ? (
				currentProduct.map((el) => {
					return (
						<div className="product-detail__main" key={el.id}>
							<div className="product__image">
								<img src={el.images} alt={el.name} />
							</div>
							<div className="products-detail__section">
								<h1>{el.name}</h1>
								<p className="product-category">
									<b>Category:</b>&nbsp;{el.category}
								</p>
								<p className="product-description">
									<b>Description: </b>
									<br />
									{el.description}
								</p>
								<p className="product-price">
									<b>Price: </b>Rs.{el.price}
								</p>
								<button className="add-cart">
									Add to cart
								</button>
							</div>
						</div>
					);
				})
			) : (
				<Redirect to="/error" />
			)}
		</div>
	);
};

export default ProductsDetail;
