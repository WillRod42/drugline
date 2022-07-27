import React from "react";
import PropTypes from "prop-types";
import SearchBox from "./SearchBox";


class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchHandler: props.searchHandler,
			searchItems: [
				<SearchBox
					removeButtonHandler={this.removeSearchBox}
					disableRemove={true}
					listId={0}
					key={0}
				/>,
				<SearchBox
					removeButtonHandler={this.removeSearchBox}
					disableRemove={true}
					listId={1}
					key={1}
				/>
			]
		};
	}

	removeSearchBox = (listId) => {
		let newSearchBoxList = [];
		this.state.searchItems.forEach(function(searchBox) {
			if (searchBox.props.listId !== listId) {
				newSearchBoxList.push(searchBox);
			}
		});
		
		this.setState({
			searchItems: newSearchBoxList
		});
	}

	addSearchBox = () => {
		const newKey = this.state.searchItems[this.state.searchItems.length - 1].props.listId + 1;
		const newSearchBoxList = this.state.searchItems.concat([
			<SearchBox
				removeButtonHandler={(this.removeSearchBox)}
				listId={newKey}
				key={newKey}
			/>
		]);

		this.setState({
			searchItems: newSearchBoxList
		});
	}

	search = (event) => {
		event.preventDefault();
		const ndcList = [];
		for (let i = 0; i < this.state.searchItems.length; i++) {
			ndcList.push(event.target.elements[i].value);
		}

		this.state.searchHandler(ndcList);
	}

	render() {
		return(
			<React.Fragment>
				<form onSubmit={this.search}>
					{ this.state.searchItems.map((searchBox) => searchBox) }
					<div className="row">
						<div className="col-10">
							<button className="btn btn-primary submit">Search</button>
						</div>
						<div className="col-2">
						<button className="btn btn-success float-end" onClick={this.addSearchBox}>Add</button>
						</div>
					</div>
				</form>
			</React.Fragment>
		);
	}
}

Search.propTypes = {
	searchHandler: PropTypes.func.isRequired
};

export default Search;