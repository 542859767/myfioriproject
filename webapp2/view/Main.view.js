sap.ui.jsview("xiaoliu.view.Main",{
	getControllerName:function(){
		return "xiaoliu.controller.MyCon";
	},
	createContent:function(oController){
		var oIpt = new sap.m.Input("idIpt");
		var oBtn = new sap.m.Button("idBtn",{
			text:"Vic is Here",
			icon:"sap-icon://add-employee"
			//press: oController.welcome
		});
		var oX = new sap.m.Button({
			text:"show me magic",
			press:[oController.magic, oController]
		});
		return [oIpt, oBtn,oX];
	}
});