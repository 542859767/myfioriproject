sap.ui.define(
	["sap/ui/core/mvc/Controller",
		"xiaoliu/util/lifeSaver"
	],
	function(Controller, lifeSaver) {
		return Controller.extend("xiaoliu.controller.BaseController", {
			formatter: lifeSaver
		});
	});