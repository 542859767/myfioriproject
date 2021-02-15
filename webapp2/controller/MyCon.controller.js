sap.ui.define(
	["sap/ui/core/mvc/Controller"],
	function(oMVCCon) {
		return oMVCCon.extend("xiaoliu.controller.MyCon", {
			welcome: function() {
				//alert("vannakam to UI5");
				/*	var oCore = sap.ui.getCore();
					var oMario = oCore.byId("idBtn");
					oMario.setText("Welcome to UI5");*/
				//chaining
				sap.ui.getCore().byId("idBtn").setText("Welcome Text");
				alert(sap.ui.getCore().byId("idIpt").getValue());

			},
		
			magic: function() {
				var oCore = sap.ui.getCore();
				var oMario = oCore.byId("idBtn");
				oMario.attachPress(this.welcome);
			}
		});
	});