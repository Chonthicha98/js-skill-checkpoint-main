// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
//1.reassign Apple จาก 100 เป็น 200
inventory.apple.quantity = 200;
console.log(inventory.apple);

//2.add "orange", price 20, Qty 300
inventory.orange = { price: 20, quantity: 300 };
console.log(inventory);

//3. คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อกด้วย Loop
let totalPrice = 0;

for (let objKey in inventory) {
  let item = inventory[objKey];
  totalPrice = totalPrice + item.price * item.quantity;
}
console.log(totalPrice);

//4. console.log
console.log(`Total inventory value: ${totalPrice} baht`);
