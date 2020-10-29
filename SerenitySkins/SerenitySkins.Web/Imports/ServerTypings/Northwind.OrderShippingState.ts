namespace SerenitySkins.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'SerenitySkins.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}
