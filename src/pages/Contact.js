import "../styles/Contact.scss";
import contactImage from "../img/contact_image.png";
import { useEffect } from "react";

const Contact = () => {
	useEffect(() => {
		document.title = "Contact Us";
	});
	return (
		<div className="contact__container">
			<h1>Contact Us</h1>
			<div className="form__container">
				<img src={contactImage} alt="" />
				<form action="">
					<label htmlFor="">Full Name:</label>
					<br />
					<input placeholder="John Doe" type="text" />
					<br />
					<label htmlFor="">Email:</label>
					<br />
					<input placeholder="john@gmail.com" type="email" />
					<br />
					<label htmlFor="">Message:</label>
					<br />
					<textarea placeholder="message"></textarea>
					<input type="submit" />
				</form>
			</div>
		</div>
	);
};

export default Contact;
