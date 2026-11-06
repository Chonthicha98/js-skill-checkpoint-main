// Question #2: User Task List

const userTaskList = [
  { id: 1, task: 'Buy groceries' },
  { id: 2, task: 'Finish homework' },
  { id: 3, task: 'Call mom' },
  { id: 4, task: 'Wash dishes' },
];

// เริ่มเขียนโค้ดตรงนี้
//Q1. add new task at the end // .unshift add to the first index
userTaskList.push({ id: 5, task: 'Walk the dog' });
console.log(userTaskList);

//Q2. reassign Task ที่มี id เป็น 4 จาก "Wash dishes" เป็น "Go to the gym"
userTaskList[3].task = 'Go to the gym';
console.log(userTaskList[3]);

//Q3. ลบ Task สุดท้ายที่อยู่ใน Array ออก // .unshift() is remove the first index
userTaskList.pop([4]);
console.log(userTaskList);

//Q4. Log ข้อความของ Task ตัวสุดท้าย // this case no need to track exectly total index
console.log(userTaskList[userTaskList.length - 1]);
