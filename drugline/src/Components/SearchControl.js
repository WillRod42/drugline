import React from "react";
import Search from "./Search";
import ResultList from "./ResultList";
import InteractionsApi from "../apiHelper";

class SearchControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: true,
			results: []
		};
	}

	searchHandler = async (ndcList) => {
		this.setState({ isLoaded: false });
		try {
			let searchResults = await InteractionsApi.getInteractionsFromNDCList(ndcList);
			this.setState({
				isLoaded: true,
				results: searchResults,
				error: null
			});
		} catch (error) {
			this.setState({
				isLoaded: true,
				error: error
			});
		}
	}

	render() {
		let resultPanel = <ResultList results={this.state.results} />;
		if (!this.state.isLoaded) {
			resultPanel = <h2 className="text-center">Loading...</h2>;
		} else if (this.state.error) {
			resultPanel = <h2 className="text-center">{this.state.error.message}</h2>;
		}

		return (
			<React.Fragment>
				<div id="search" className="row">
					<Search searchHandler={this.searchHandler} />
				</div>
				<div className="row">
					{resultPanel}
				</div>
			</React.Fragment>
		);
	}
} 

export default SearchControl;