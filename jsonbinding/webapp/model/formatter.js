sap.ui.define([
    "sap/m/library",
    "sap/ui/model/type/Currency"
], function (mobileLibrary, Currency) {
    "use strict";

    return {
        formatMail: function (sEid) {
            var i18nModel = new sap.ui.model.resource.ResourceModel({
                bundleName: "sapips.training.jsonbinding.i18n.i18n"
            });
            var oBundle = i18nModel.getResourceBundle();

            return mobileLibrary.URLHelper.normalizeEmail(
                sEid + oBundle.getText("domain"),
                oBundle.getText("mailSubject", [sEid]),
                oBundle.getText("mailBody"));
        },

        formatStockValue: function (fUnitPrice, iStockLevel, sCurrCode) {
            var oCurrency = new Currency( {
                showMeasure: false
            });
            return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], "string");
        }

    };

});