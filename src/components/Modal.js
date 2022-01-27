import { createPortal } from "react-dom";
import "../styles/Modal.scss";
import CheckoutForm from "./CheckoutForm";

const Modal = ({ isModalOpen, setModalOpen }) => {
	return createPortal(
		<div className="modal-wrapper">
			<button
				className="modal-btn"
				onClick={() => setModalOpen(!isModalOpen)}
			>
				<i class="fas fa-times fa-3x"></i>
			</button>

			<h1>This is modal</h1>
			<CheckoutForm />
		</div>,
		document.querySelector(".modal-root")
	);
};

export default Modal;
