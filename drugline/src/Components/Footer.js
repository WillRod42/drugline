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
				<div className="bg-light footer link">
					<ul>
						<li id="disclaimerBtn" onClick={this.openPopup}>Disclaimer</li>
						<a target="_blank" href="https://www.fda.gov/drugs/development-approval-process-drugs/national-drug-code-database-background-information">
							<li>What is an NDC?</li>
						</a>
						<a id="attribution" target="_blank" href="https://open.fda.gov">
							<li>Some data provided by the U.S. Food and Drug Administration</li>
						</a>
					</ul>
					
					
				</div>
			</React.Fragment>
		);
	}
}

{/* <div id="attribution"></div> */}

export default Footer;
