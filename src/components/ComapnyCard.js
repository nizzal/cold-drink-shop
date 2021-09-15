import card1 from "../img/tuborg-card.png";
import card2 from "../img/cocacola-card.png";
import card3 from "../img/jack-card.png";
import card4 from "../img/somersby-card.png";
import { Link } from "react-router-dom";

const ComapnyCard = () => {
	return (
		<div className="company-card__list">
			<div className="company-card">
				<img src={card1} alt="Company product card" />
				<div className="company__card-links">
					<h3>Tuborg Nepal</h3>
					<Link to="/">View More</Link>
				</div>
			</div>
			<div className="company-card">
				<img src={card2} alt="Company product card" />
				<div className="company__card-links">
					<h3>Tuborg Nepal</h3>
					<Link to="/">View More</Link>
				</div>
			</div>
			<div className="company-card">
				<img src={card3} alt="Company product card" />
				<div className="company__card-links">
					<h3>Tuborg Nepal</h3>
					<Link to="/">View More</Link>
				</div>
			</div>
			<div className="company-card">
				<img src={card4} alt="Company product card" />
				<div className="company__card-links">
					<h3>Tuborg Nepal</h3>
					<Link to="/">View More</Link>
				</div>
			</div>
		</div>
	);
};

export default ComapnyCard;
