sap.ui.define(
	["sap/ui/model/json/JSONModel",
	"sap/ui/model/xml/XMLModel",
	"sap/ui/model/resource/ResourceModel"],
	function(JSONModel, XMLModel,ResourceModel) {
		return {
			createMyModel: function(filePath) {
				var oModel = new JSONModel();
				oModel.loadData(filePath);
				return oModel;
			},
			createXMLModel: function(filePath){
				var oModel = new XMLModel();
				oModel.loadData(filePath);
				return oModel;
			},
			createResModel:function(bundleUrl){
				var oModel = new ResourceModel({
					bundleUrl: bundleUrl
				});
				return oModel;
			}
		};
	});