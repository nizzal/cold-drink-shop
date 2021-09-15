import image from "../img/cocacoal-promo.png";
import "../styles/ProductPromotion.scss";

const ProductPromotion = () => {
	return (
		<div className="product__promotion">
			<img src={image} alt="Product promotion" />
			<div className="promo__details">
				<p>
					Celebrate this dashain with new Coca Cola at unbeatable
					price just at Rs. 25
				</p>
				<br />
				<button>SHOP MORE</button>
				<br />
				<span>Also available in Sprite and Fanta</span>
			</div>
		</div>
	);
};

export default ProductPromotion;
