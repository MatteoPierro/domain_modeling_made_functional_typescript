type OrderId = string;

type CustomerId = string;

type CustomerInfo = undefined;

type ShippingAddress = undefined;

type BillingAddress = undefined;

type OrderLineId = string;

type WidgetCode = string;

type Widget = {
  code: WidgetCode;
};

type GizmoCode = string;

type Gizmo = {
  code: GizmoCode;
};

type ProductCode = Widget | Gizmo;

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
