/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((el, index) => {
    if (el.profession === "developer") {
      console.log(el);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((el) => {
    if (el.profession === "developer") {
      console.log(el);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newObj = {id: 4, name: "susan", age: "20", profession: "intern"};
  arr.push(newObj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((el) => el.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 5, name: "alice", age: "25", profession: "designer" },
    { id: 6, name: "bob", age: "30", profession: "admin" },
    { id: 7, name: "charlie", age: "28", profession: "developer" },
  ];
  let concatArr = arr.concat(newArr);
  console.log(concatArr);
}