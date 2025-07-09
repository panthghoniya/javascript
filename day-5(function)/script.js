// 1. simple function

function a() {
  console.log("hi");
}
a();

// or

(function b() {
  console.log("hi");
})();

// 2. variable as a function

const c = function () {
  console.log("hi");
};
c();

// 3. arrow function

const d = () => {
  console.log("hi");
};
d();

// 4. immediately invoked function expression (IIFE)

(function () {
  console.log("hi");
})();

// 5. nested function

function e() {
  console.log("hi");

  function f() {
    console.log("hi");
  }

  f();
}
e();

// 6. closure

function g() {
  let h = 0;

  return function () {
    h++;
    console.log("Count:", h);
  };
}
const i = g();
i();
i();
