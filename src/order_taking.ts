type OrderId = String

type CustomerId = String

type CustomerInfo = undefined

type ShippingAddress = undefined

type BillingAddress = undefined

type OrderLine = undefined

type BillingAmount = undefined

type Order = {
    id: OrderId
    customerId: CustomerId
    customerInfo: CustomerInfo
    shippingAddress: ShippingAddress
    billingAddress: BillingAddress
    orderLines: OrderLine[]
    amountToBill: BillingAmount
}