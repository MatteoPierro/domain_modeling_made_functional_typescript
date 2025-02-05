type OrderId = string;

type CustomerId = string;

type CustomerInfo = undefined;

type ShippingAddress = undefined;

type BillingAddress = undefined;

type OrderLineId = string;

type OrderLine = {
  id: OrderLineId;
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
