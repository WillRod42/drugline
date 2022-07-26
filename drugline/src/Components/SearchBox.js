import React from "react";
import PropTypes from "prop-types";

class SearchBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			removeButtonHandler: props.removeButtonHandler,
			disableRemove: props.disableRemove,
			listId: props.listId
		};
	}

	render() {
		let removeButton = <button className="btn btn-danger float-end" onClick={() => this.state.removeButtonHandler(this.state.listId)}>Remove</button>;

		if (this.state.disableRemove) {
			removeButton = <div></div>;
		}

		return (
			<React.Fragment>
				<div className="row">
					<div className="col-10">
						<input className="form-control" type='text' name={`ndc${this.state.listId}`} placeholder='Type NDC Here' required />
					</div>
					<div className="col-2">
						{removeButton}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

SearchBox.propTypes = {
	removeButtonHandler: PropTypes.func.isRequired,
	disableRemove: PropTypes.bool,
	listId: PropTypes.number.isRequired
};

export default SearchBox;