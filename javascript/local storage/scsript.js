

// local storage: it s stores the data periminently even after the reload of page

// 1)stores data:
// 2)get data:
// 3)remove one item:
// 4)clear all data:

// 1)stores data:

localStorage.setItem("name","sai");

// 2)get data:

let username= localStorage.getItem("name")
console.log(username);

//  3)remove one item:

localStorage.removeItem("name");

// 4)clear all data:

localStorage.clear();

// JSON.stringify: are used to convert data into string type

let user = {name:"sai" , age:23};
localStorage.setItem("user", JSON.stringify(user.name));
localStorage.setItem("age", JSON.stringify(user.age));

console.log(JSON.parse(localStorage.getItem("user")));

