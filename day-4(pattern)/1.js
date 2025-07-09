// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

for (let i = 5; i >= 1; i--) {
  let p = "";
  for (let j = 1; j <= i; j++) {
    p += j + " ";
  }
  console.log(p);
}

// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1

for (let i = 5; i >= 1; i--) {
  let p = "";
  for (let j = i; j >= 1; j--) {
    p += j + " ";
  }
  console.log(p);
}

// 5
// 4 5
// 3 4 5
// 2 3 4 5
// 1 2 3 4 5

for (let i = 1; i <= 5; i++) {
  let p = "";
  for (let j = i; j <= 5; j++) {
    p += j + " ";
  }
  console.log(p);
}

//         1
//       1 2
//     1 2 3
//   1 2 3 4
// 1 2 3 4 5

for (let i = 1; i <= 5; i++) {
  let p = "";
  for (let j = 1; j <= 5 - i; j++) {
    p += "  ";
  }
  for (let j = 1; j <= i; j++) {
    p += j + " ";
  }
  console.log(p);
}

//         5
//       4 5
//     3 4 5
//   2 3 4 5
// 1 2 3 4 5

for (let i = 5; i >= 1; i--) {
  let p = "";
  for (let j = 1; j <= 5 - i; j++) {
    p += "  ";
  }
  for (let j = i; j <= 5; j++) {
    p += j + " ";
  }
  console.log(p);
}

// 5 5 5 5 5
// 4 4 4 4
// 3 3 3
// 2 2
// 1

for (let i = 5; i >= 1; i--) {
  let p = "";
  for (let j = 1; j <= i; j++) {
    p += i + " ";
  }
  console.log(p);
}


 