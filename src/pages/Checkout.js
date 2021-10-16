import ConfirmationModal from "../components/ConfirmationModal";
import Countries from "../data/countries";
import "../styles/Checkout.scss";

const Checkout = ({ modal, setModal }) => {
	return (
		<>
			<div className="shipping-form">
				<form>
					<label htmlFor="name">Name</label>
					<input type="text" name="name" id="name" />
					<label htmlFor="email">Email</label>
					<input type="email" name="name" id="name" />
					<label htmlFor="phone">Phone</label>
					<input type="number" name="phone" id="phone" />
					<label htmlFor="street">Street</label>
					<input type="text" name="street" id="street" />
					<label htmlFor="city">City</label>
					<input type="text" name="city" id="city" />
					<label htmlFor="country">Country</label>
					<select type="text" name="country" id="country">
						{Countries.map((country) => (
							<option value={country}>{country}</option>
						))}
					</select>
					<div className="payment-method--selection">
						<input type="radio" name="payment" id="card" disabled />
						<label htmlFor="card">Card</label>
						<input type="radio" name="payment" id="cod" />
						<label htmlFor="cod">Cash on Delivery</label>
					</div>
					<button type="submit">Proceed</button>
				</form>
				<button className="closeBtn" onClick={() => setModal(!modal)}>
					Close
				</button>
			</div>
		</>
	);
};

export default Checkout;
