type OrderId = string;

type CustomerId = string;

type CustomerInfo = undefined;

type ShippingAddress = undefined;

type BillingAddress = undefined;

type OrderLineId = string;

type WidgetCode = string & { readonly brand: unique symbol };

type GizmoCode = string & { readonly brand: unique symbol };

type ProductCode =
  | WidgetCode
  | GizmoCode;

type UnitQuantity = number & { readonly brand: unique symbol };

type KilogramQuantity = number & { readonly brand: unique symbol };

type OrderQuantity =
  | UnitQuantity
  | KilogramQuantity;

type Price = undefined;

type OrderLine = {
  id: OrderLineId;
  orderId: OrderId;
  productCode: ProductCode;
  orderQuantity: OrderQuantity;
  price: Price;
};

type BillingAmount = undefined;

type Order = {
  id: OrderId;
  customerId: CustomerId;
  customerInfo: CustomerInfo;
  shippingAddress: ShippingAddress;
  billingAddress: BillingAddress;
  orderLines: OrderLine[];
  amountToBill: BillingAmount;
};
