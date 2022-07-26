export default class InteractionsApi {
	static async getRxCUIList(ndcList) {
		let rxcuiList = [];
		for (let i = 0; i < ndcList.length; i++) {
			try {
				let rxcui = await InteractionsApi.getRxCUI(ndcList[i]);
				rxcuiList = rxcuiList.concat(Object.values(rxcui));
			} catch (error) {
				throw error;
			}
		}

		return rxcuiList;
	}

	static getRxCUI(ndc) {
		return fetch(`https://api.fda.gov/drug/ndc.json?search=packaging.package_ndc:"${ndc}"`)
			.then(response => {
				if (!response.ok) {
					throw new Error(`(${response.status}): ${response.statusText}`);
				} else {
          return response.json();
        }
			}).then(json => {
        if (json.error) {
					throw new Error(json.error.message);
				} else {
					return json.results[0].openfda.rxcui;
				}
      })
      .catch(error => {
				if (error.message.includes("404")) {
					throw new Error(`"${ndc}" not found`);
				} else if (error.message.includes("400")) {
					throw new Error(`"${ndc}" invalid NDC`);
				} else {
					throw error;
				}
      });
	}

	static getInteractions(rxcuiList) {
		let url = "https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=";
		rxcuiList.forEach((rxcui) => {
			url += rxcui + " ";
		});
		url = url.substring(0, url.length - 1);

		return fetch(url)
			.then(response => {
				if (!response.ok) {
					throw new Error(`(${response.status}): ${response.statusText}`);
				} else {
          return response.json();
        }
			}).then(json => {
        if (!json.fullInteractionTypeGroup) {
					throw new Error("No matches");
				} else {
					let interactions = [];
					json.fullInteractionTypeGroup[0].fullInteractionType.forEach((interactionType) => {
						let interactionGroup = {baseDrugs: [], basePairs: []};
						interactionType.minConcept.forEach((concept) => {
							const drug = { rxcui: concept.rxcui, name: concept.name };
							interactionGroup.baseDrugs.push(drug);
						});

						interactionType.interactionPair.forEach((pair) => {
							let newPair = {interactionDrugs: []};

							pair.interactionConcept.forEach((concept) => {
								const drug = { rxcui: concept.minConceptItem.rxcui, name: concept.minConceptItem.name };
								newPair.interactionDrugs.push(drug);
							});

							newPair.severity = pair.severity;
							newPair.description = pair.description;

							interactionGroup.basePairs.push(newPair);
						});

						interactions.push(interactionGroup);
					});

					return interactions;
				}
      })
      .catch(error => {
        throw error;
      });
	}

	static async getInteractionsFromNDCList(ndcList) {
		try {
			let rxcuiList = await this.getRxCUIList(ndcList);
			return this.getInteractions(rxcuiList);
		} catch (error) {
			throw error;
		}
		
	}
}