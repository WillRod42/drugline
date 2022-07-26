import React from "react";
import PropTypes from "prop-types";

export default function Interaction(props) {
	let drug1 = props.interactionDetails.interactionDrugs[0];
	let drug2 = props.interactionDetails.interactionDrugs[1];

	return (
		<React.Fragment>
			<div className="card">
				<div className="card-body">
					<h6 className="card-title text-center">{`${drug1.name} (${drug1.rxcui}), ${drug2.name} (${drug2.rxcui})`}</h6>
					<div className="card">
						<div className="card-body">
							<p className="card-text">{props.interactionDetails.description}</p>
							<hr />
							<p className="card-text">Severity: {props.interactionDetails.severity}</p>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

Interaction.propTypes = {
	interactionDetails: PropTypes.object.isRequired
};