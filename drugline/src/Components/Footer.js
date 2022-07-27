import React from "react";
import DisclaimerPopup from "./DisclaimerPopup";

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showPopup: false
		};
	}

	openPopup = () => {
		this.setState({ showPopup: true });
	}

	closePopup = () => {
		this.setState({ showPopup: false });
	}

	render() {
		let popup = null;
		if (this.state.showPopup) {
			popup = <DisclaimerPopup closeHandler={this.closePopup} />
		}

		return (
			<React.Fragment>
				{popup}
				<p className="bg-light footer link">
					<div id="disclaimerBtn" onClick={this.openPopup}>Disclaimer</div>
					<div id="attribution"><a target="_blank" href="https://open.fda.gov">Some data provided by the U.S. Food and Drug Administration</a></div>
				</p>
			</React.Fragment>
		);
	}
}

export default Footer;
