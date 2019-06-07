/*
 * Function to define actions for a specific card instance
 * @param oData - JSON data for the card instance
 * @return aInstanceActions - array of objects representing 
 *                            the actions to be defined
 */
function defineInstanceActions(oData) {

	// process OData and look for DecisionOptions
	try {
		var aInstanceActions = [];
		var aDecisionOptions = oData.dataSets[1].data.d.results;
		for (var i = 0; i < aDecisionOptions.length; i++) {
			var oDecisionOption = aDecisionOptions[i];
			aInstanceActions.push({
				"name": "ACTION" + oDecisionOption.DecisionKey,
				"label": oDecisionOption.DecisionText,
				"serverName": "ACTION",
				"parameters": [{
					"label": "Comments",
					"name": "comments",
					"type": "Edm.String",
					"maxLength": 255,
					"nullable": true,
					"isKey": false
				}, {
					"name": "decisionKey",
					"type": "Edm.String",
					"value": oDecisionOption.DecisionKey
				}]
			});
		}
		return aInstanceActions;
	} catch (e) {
		return undefined;
	}
}