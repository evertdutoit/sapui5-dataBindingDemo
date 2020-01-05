sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("edt.dataBindingDemo.controller.View1", {
		onInit: function () {

		},
		
		animalListFactory: function(sId, oContext) {
			var sValue = oContext.getProperty("Name");
			var sDec1 = "Are still roaming around";
			var sDec2 = "Are extinct";
			
			if (sValue === "Dinosaur") {
				return new sap.m.StandardListItem(sId, {
					title: sValue,
					description: sDec2 
				});
			} else {
				return new sap.m.StandardListItem(sId, {
					title: sValue,
					description: sDec1
				});
			}
		},
		
		listOnPress: function(oEvt) {
			var sValue = oEvt.getSource().getProperty("title");
			var oComp = this.getOwnerComponent();
			oComp.setModel(new sap.ui.model.json.JSONModel({"data": sValue}), "label"); 
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("ListPage2");

			// sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel({"data": sValue}), "label");
			
			// var oView = this.getView();
			// oView.setModel(new sap.ui.model.json.JSONModel({"data": sValue}), "label"); 
		},
		
		uiTableCellClick: function(oEvt) {
			var sValue = oEvt.getParameters().rowBindingContext.getProperty("Name");
			if (sValue !== undefined) {
				var oComp = this.getOwnerComponent();
				oComp.setModel(new sap.ui.model.json.JSONModel({"data": sValue}), "label"); 
			}

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("ListPage2");
				
		}
	});
});