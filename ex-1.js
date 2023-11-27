// Exercise #1: Food Order

// Start coding here
const foodOrder =  {
    orderNumber: "A0234",
    address: "Bangkok",
    paymentType: "Cash",
    totalPrice: 4500,
    restaurantName: "MK",
};
Object.freeze(foodOrder);
    
foodOrder.totalPrice = 5000,
foodOrder.paymentType = "Credit Card",

console.log(foodOrder);

