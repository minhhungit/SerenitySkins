namespace SerenitySkins.BasicSamples {
    export interface OrdersByShipperResponse extends Serenity.ServiceResponse {
        Values?: { [key: string]: any }[];
        ShipperKeys?: string[];
        ShipperLabels?: string[];
    }
}

