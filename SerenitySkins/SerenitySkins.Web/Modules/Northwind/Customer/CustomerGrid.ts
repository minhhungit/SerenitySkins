﻿namespace SerenitySkins.Northwind {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        protected getColumnsKey() { return "Northwind.Customer"; }
        protected getDialogType() { return <any>CustomerDialog; }
        protected getIdProperty() { return CustomerRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerRow.localTextPrefix; }
        protected getService() { return CustomerService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        getButtons() {
            var buttons = super.getButtons();

            buttons.push(SerenitySkins.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Northwind/Customer/ListExcel',
                separator: true
            }));

            buttons.push(SerenitySkins.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }


        protected getSlickOptions() {
            let opt = super.getSlickOptions();
            opt.rowHeight = 30;
            return opt;
        }
    }
}