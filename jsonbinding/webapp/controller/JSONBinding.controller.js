sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sapips/training/jsonbinding/model/formatter"
], (Controller, JSONModel, formatter) => {
    "use strict";

    return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {
        onInit: function() {
            var myData = {
                "Eid": "mariel.tatel",
                "Enabled": true,
                "Address": {
                    "Street": "Aglipay Street",
                    "City": "Mandaluyong City",
                    "Zip": "1550",
                    "Country": "PH"
                },
                "SalesAmount": 999999,
                "CurrencyCode": "Php"
            };

            var oModelLocal = new JSONModel();
            oModelLocal.setData(myData);
            this.getView().setModel(oModelLocal);
        },

        onSelectProduct: function (oEvent) {
            var oList = oEvent.getSource();
            var oSelectedItem = oList.getSelectedItem();
            var oBindingContext = oSelectedItem.getBindingContext("ProductsModel");
            var sPath = oBindingContext.getPath();
            var oPanel = this.byId("idProdDetForm");
            oPanel.bindElement({
                path: sPath,
                model: "ProductsModel"
            });
        },

        formatter: formatter
    });
});