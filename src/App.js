import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./components/NotFound";
import ProductsDetail from "./components/ProductsDetail";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
	return (
		<CartProvider>
			<Router>
				<div className="App">
					<Navbar />
					<div className="main__container">
						<Switch>
							<Route path="/" exact component={Home}></Route>
							<Route path="/about" component={About}></Route>
							<Route path="/contact" component={Contact}></Route>
							<Route path="/cart" component={Cart}></Route>
							<Route
								path="/products/:id"
								component={ProductsDetail}
							/>
							{/* <Route path="/products/:name" component={} /> */}
							<Route path="*" component={NotFound} />
						</Switch>
					</div>
				</div>
			</Router>
		</CartProvider>
	);
}

export default App;
