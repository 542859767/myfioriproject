sap.ui.define(
	["sap/ui/core/format/NumberFormat",
		"sap/ui/core/format/DateFormat"
	],
	function(NumberFormat, DateFormat) {
		return {
			magicUC: function(fieldName) {
				if (fieldName) {
					return fieldName.toUpperCase();
				}
			},
			covertCurr: function(amount, currCode) {
				// debugger;
				var oCurrencyFormat = NumberFormat.getCurrencyInstance();
				return oCurrencyFormat.format(amount, currCode);
			},
			convertDate: function(date) {
				debugger;
					var oFormat = DateFormat.getInstance({
						format: "yMMMd"
					});
					return oFormat.format(date); //string in locale de "29. Jan. 2017"; string in locale en "Jan 29, 2017" 
				}
				/*,
				currentView: function(){
					return this.getView();
				} */
		};
	});