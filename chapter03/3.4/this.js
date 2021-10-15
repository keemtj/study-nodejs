console.log(this);
console.log(this === module.exports);
console.log(this === exports);

function whatIsThis() {
  console.log("function", this === exports, this === global);
}

whatIsThis();

const whatIsThis2 = () =>
  console.log("function2", this === exports, this === global);

whatIsThis2();
