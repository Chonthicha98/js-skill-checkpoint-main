// Question 4: Shipping Cost Calculator

function calculateShippingCost(orderTotal) {
  // เริ่มเขียนโค้ดที่นี่ - add function's parameter
  if (orderTotal >= 4000) {
    return 'Shipping is free.';
  } else if (orderTotal >= 2000) {
    return 'Shipping cost is 250 Baht.';
  } else {
    return 'Shipping cost is 500 Baht.';
  }
}

// ตัวอย่างการใช้งาน
const orderTotal1 = 6000;
const orderTotal2 = 3000;
const orderTotal3 = 150;

console.log(calculateShippingCost(orderTotal1)); // "Shipping is free."
console.log(calculateShippingCost(orderTotal2)); // "Shipping cost is 250 Baht."
console.log(calculateShippingCost(orderTotal3)); // "Shipping cost is 500 Baht."

//arguments[0] is a buit-in function - use when exam said must wrtie code after text: // เริ่มเขียนโค้ดที่นี่
//otherwise add parameter in function as it should be
//useful when dont have parameter in a function yet, or infinity parameter
