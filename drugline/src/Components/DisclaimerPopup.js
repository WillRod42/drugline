import React from "react";
import PropTypes from "prop-types";

export default function DisclaimerPopup(props) {
	return (
		<React.Fragment>
			<div className="popup bg-light border border-dark">
				<button className="btn btn-white text-black" onClick={props.closeHandler}>X</button>
				<div className="text">
					<h4 className="text-center">Disclaimer</h4>
					<p>Do not rely on openFDA to make decisions regarding medical care. While we make every effort to ensure that data is accurate, you should assume all results are unvalidated.</p>
					<p>This product uses publicly available data from the U.S. National Library of Medicine (NLM), National Institutes of Health, Department of Health and Human Services; NLM is not responsible for the product and does not endorse or recommend this or any other product.</p>
					<p>It is not the intention of NLM to provide specific medical advice, but rather to provide users with information to better understand their health and their medications. NLM urges you to consult with a qualified physician for advice about medications.</p>
				</div>
			</div>
		</React.Fragment>
	);
}

DisclaimerPopup.propTypes = {
	closeHandler: PropTypes.func.isRequired
}