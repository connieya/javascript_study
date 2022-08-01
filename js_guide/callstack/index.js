function three() {
  console.log("i love js");
}

function two() {
  three();
}

function one() {
  two();
}

function zero() {
  one();
}

zero();
