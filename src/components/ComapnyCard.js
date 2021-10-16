import { Link } from "react-router-dom";
import "../styles/CompanyCard.scss";
import { data } from "../data/comapnydetails";

const ComapnyCard = () => {
	return (
		<div className="company-card__list">
			{data.map((company) => (
				<div className="company-card">
					<img src={company.img} alt="Company product card" />
					<div className="company__card-links">
						<h3>{company.name}</h3>
						<Link to="/">View More</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default ComapnyCard;
