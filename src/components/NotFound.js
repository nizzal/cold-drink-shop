import { Link } from "react-router-dom";
import errorImage from "../img/404.png";
import "../styles/NotFound.scss";

const NotFound = () => {
	return (
		<div className="notfound__container">
			<img src={errorImage} alt="404 page not found" />
			<p>
				Oops! The requested page was not found on the site
				<br />
				Go back to homepage, <Link to="/">click here</Link>
			</p>
		</div>
	);
};

export default NotFound;
