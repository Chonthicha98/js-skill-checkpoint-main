// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const getUserList = () => {
  return fetch('https://jsonplaceholder.typicode.com/users');
};
const handleResponse = (response) => {
  return response.json();
};
const disPlayList = (data) => {
  return data.map((user) => user.name);
};

getUserList()
  .then(handleResponse)
  .then(disPlayList)
  .then((newUser) => console.log(newUser));
