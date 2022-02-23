const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  // qiyin usuli
  // if (sidebar.classList.contains("show-links")) {
  //   sidebar.classList.remove("show-links");
  // } else {
  //   sidebar.classList.add("show-links");
  // }

  sidebar.classList.toggle("show-links");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-links");
});

// let n = 2;
// let m = 9;
// if (n < m) {
//   for (let a = 0; a < m; a += n) {
//     a += n;
//     let b = a * n;
//     alert(b);
//   }
// } else {
//   console.log("INVALID");
// }

// function sumMul(n, m) {
//   if (n < m) {
//     for (let a = 0; a < m; a += n) {
//       a += n;
//       let b = a * n;
//       c
//     }
//   } else {
//     return "INVALID";
//   }
// }
// sumMul(2, 9);

// function isPrime(num) {
//   if (num < 2) {
//     console.log(false);
//   }
//   for (let a = 0; a < num / 2; a++) {
//     if (num % a == 0) {
//       console.log(false);
//     } else {
//       console.log(true);
//     }

//   }
// }
// isPrime(7);

// function dontGiveMeFive(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (i !== 5) {
//       a++;
//       return a;
//     } else {
//       return 0;
//     }
//   }
// }
// dontGiveMeFive(1, 9);

// function friend(...friends) {
//   let a = 0;
//   for (let i = 0; i < friends.length; i++) {
//     if ((friends[i].length = 4)) {
//       a += friends[i];
//       console.log(a);
//     } else {
//       return null;
//     }
//   }
// }
// friend("Jimmy", "123", "4", "Cool Man", "Ryan", "kjdk", "Asda");

// a = prompt("senda iqtidor bormi?");
// console.log(a);
// if (a === "bor" || a === "ha" || a === "hm" || a === "ha bor") {
//   alert("Sen harakat qilishing kerek:)");
// } else {
//   alert("Judayam kuchli harakat qilishing kerak:)");
// }

// let voxel = { x: 3.6, y: 1.3, z: 4.2 };
// const { x: a, y: c } = voxel;

// console.log(a, c);

//OBJECT DISTROCTION
// const LOCAL_FORECAST = {
//   today: { min: 72, max: 83 },
//   tomorrow: { min: 73.3, max: 84.6 },
// };
// function getmax(obj) {
//   const { tomorrow: tempOf } = obj;
//   console.log(tempOf);
// }
// getmax(LOCAL_FORECAST);

//ARRAY DISTROUCTION
// const fruit = ["apple", "watermelon", "peach", "cherry"];
// const [hd, asda, asa, as] = fruit;
// console.log(as  );

// const person = {
//   name: "hojibola",
//   age: 18,
// };
// const autobiog = `i am ${person.name}i am ${person.age} years old`;

// console.log(autobiog);
