// Question #2: User Task List

const userTaskList = [
  { id: 1, task: 'Buy groceries' },
  { id: 2, task: 'Finish homework' },
  { id: 3, task: 'Call mom' },
  { id: 4, task: 'Wash dishes' },
];

// เริ่มเขียนโค้ดตรงนี้
//Q1. add new task at the end // .push na ka --> add to the first index
userTaskList.push({ id: 5, task: 'Walk the dog' });
console.log(userTaskList);

//Q2. reassign Task ที่มี id เป็น 4 เป็น "Go to the gym" - improve to dynamic index use .find() & if
const updateTask = userTaskList.find((userId) => userId.id === 4);
if (updateTask) {
  updateTask.task = 'Go to the gym';
} else {
  console.log(-1);
}
console.log(userTaskList);

//Q3. ลบ Task สุดท้ายที่อยู่ใน Array ออก .pop() is remove the last index - leave parameter empty == last index
userTaskList.pop();
console.log(userTaskList);

//Q4. Log ข้อความของ Task ตัวสุดท้าย // dynamic tracking last task index and display it
const lastTask = userTaskList.length - 1;
const displayLastTask = userTaskList[lastTask];
console.log(`Task id: ${displayLastTask.id}, ${displayLastTask.task}`);
