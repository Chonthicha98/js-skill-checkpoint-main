// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const getUserList = () => {
  return fetch('https://jsonplaceholder.typicode.com/users');
};
const handleResponse = (response) => {
  if (!response.ok) {
    console.log('Error at handle response');
    return;
  }
  return response.json();
};
//fix variable name
//fix display and use NewUsers variable to store new user names from .map
const displayUserNames = (data) => {
  const newUsers = data.map((user) => user.name);
  console.log(newUsers);
};

// add catch error
getUserList()
  .then(handleResponse)
  .then(displayUserNames)
  .catch((err) => console.log('Error', err));
