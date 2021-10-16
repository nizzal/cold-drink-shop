import subscribeImage from "../img/subscribe.png";
import "../styles/Subscribe.scss";

const Subscribe = () => {
	return (
		<div className="subscribe__container">
			<div className="subscribe__image">
				<img src={subscribeImage} alt="Subscribe to news letter" />
			</div>
			<div className="subscribe__details">
				<h1>Never miss any discounts and coupen.</h1>
				<p>
					Subscribe to get weekly discounts and coupen code right on
					your email
				</p>
				<form>
					<input
						type="email"
						name="email"
						placeholder="Enter your email address"
					/>
					<button type="button">Subscribe</button>
				</form>
			</div>
		</div>
	);
};

export default Subscribe;
