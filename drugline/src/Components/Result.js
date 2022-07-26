import React from "react";
import PropTypes from "prop-types";
import Interaction from "./Interaction.js";

export default function Result(props) {
	let drug1 = props.resultDetails.baseDrugs[0];
	let drug2 = props.resultDetails.baseDrugs[1];

	let rows = threePerRow(props.resultDetails.basePairs);

	return (
		<React.Fragment>
			<div className="result">
				<h5 className="base-pair text-center">{`${drug1.name} (${drug1.rxcui}), ${drug2.name} (${drug2.rxcui})`}</h5>
				{rows.map((row, i) =>
					<div className="d-flex flex-row justify-content-center flex-wrap" key={i}>
					{row.map((col, l) => 
						<Interaction interactionDetails={col} key={(i * 3) + l} />
					)}
					</div>
				)}
			</div>
		</React.Fragment>
	);
}

function threePerRow(basePairs) {
	let elementArray = [];
	for (let i = 0; i < basePairs.length; i += 3) {
		elementArray.push([]);
		for (let l = 0; i + l < basePairs.length && l < 3; l++) {
			elementArray[i / 3][l] = basePairs[i + l];
		}
	}

	return elementArray;
}

Result.propTypes = {
	resultDetails: PropTypes.object.isRequired
};