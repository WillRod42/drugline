import React from "react";
import PropTypes from "prop-types";
import Result from "./Result";

export default function ResultList(props) {
	return (
		<React.Fragment>
			{props.results.map((result, index) => 
				<Result resultDetails={result} key={index} />
			)}
		</React.Fragment>
	);
}

ResultList.propTypes = {
	results: PropTypes.array.isRequired
};