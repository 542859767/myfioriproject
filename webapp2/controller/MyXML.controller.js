sap.ui.define(
	[
		"xiaoliu/controller/BaseController",
		"xiaoliu/model/model"
	],
	function(oController, oModelJS) {
		return oController.extend("xiaoliu.controller.MyXML", {
			onInit: function() {
				//alert("123");
				//step 1:create model object
				//var oModel = new sap.ui.model.json.JSONModel();
				// step 2: load data
				//oModel.loadData("model/mockData/mydata.json");
				// step 3: maek you model aware to the whole app
				//sap.ui.getCore().setModel(oModel);
				var oModel = oModelJS.createMyModel("model/mockData/mydata.json");
				sap.ui.getCore().setModel(oModel);

				// The first one will be replaced by second one
				// var oModel2 = oModelJS.createMyModel("model/mockData/mydata2.json");
				// sap.ui.getCore().setModel(oModel2, "jerry");

				// var oModel3 = oModelJS.createXMLModel("model/mockData/myXData.xml");
				// sap.ui.getCore().setModel(oModel3);

				/*	var oSal = this.getView().byId("idSal");
					oSal.bindValue("/empStr/salary");
				var oCurr = this.getView().byId("idCurr");
				oCurr.bindProperty("value", "/empStr/curr");*/

				var oModelR = oModelJS.createResModel("i18n/i18n.properties");
				sap.ui.getCore().setModel(oModelR, "i18n");
				/*	debugger;
		     	console.log( lifeSaver.currentView() );*/
			},

			onRowSel: function(oEvent) {
				//which row was selected
				//	console.log(oEvent.getParameters());
				// debugger;
				var oRowContext = oEvent.getParameter("rowContext");
				var sPath = oRowContext.getPath();
				// Element binding
				var oForm = this.getView().byId("myForm");
				oForm.bindElement(sPath);
			},

			onExit: function() {

			},
			onBeforeRendering: function() {
				//	alert("444");
			},
			onAfterRendering: function() {
				/*				var oInp1 = this.getView().byId("idEmpid");
								oInp1.setValue(1300);*/
			},
			onFlip: function() {
				var oModel = sap.ui.getCore().getModel();
				var oModelJerry = sap.ui.getCore().getModel("jerry");
				sap.ui.getCore().setModel(oModelJerry);
				sap.ui.getCore().setModel(oModel, "jerry");
			},
			newLogic: function() {
				//	alert("alert Welcome XML");
				//var oBtn = sap.ui.getCore().byId("idMyXML--idZumba");
				//var oBtn = this.getView().byId("idZumba");
				//	oBtn.setText("Welcome new xml");
				var oUserName = this.getView().byId("userName").getValue();
				var oPassword = this.getView().byId("password").getValue();
				alert(oUserName + " " + oPassword);
			}
		});
	});