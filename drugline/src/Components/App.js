import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Footer from "./Footer";
import SearchControl from "./SearchControl";

function App() {
  return (
		<React.Fragment>
			<Header />
			<div className="main-content">
				<SearchControl />
			</div>
			<Footer />
		</React.Fragment>
	);
}

export default App;
