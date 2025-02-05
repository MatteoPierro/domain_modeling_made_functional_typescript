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

type UnitQuantity = number;

type Unit = UnitQuantity;

type KilogramQuantity = number;

type Kilos = KilogramQuantity;

// types are alias in TypeScript. So it's not possible to differenciate Unit or Kilos
// eslint-disable-next-line @typescript-eslint/no-duplicate-type-constituents
type OrderQuantity = Unit | Kilos;

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
