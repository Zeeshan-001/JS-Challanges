"use strict";

/** Pattern 1 **/
function starPattern1(num) {
  let res = "";

  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      res += "*";
    }
    res += "\n";
  }

  return res;
}

/** Pattern Two **/
const starPattern2 = (num) => {
  let result = "";

  for (let i = num; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      result += "*";
    }
    result += "\n";
  }

  return result;
};

/** Pattern Three **/
const starPattern3 = (num) => {
  let result = "";

  for (let i = 1; i <= num; i++) {
    for (let j = 0; j < num - i; j++) {
      result += " ";
    }

    for (let k = 0; k < i; k++) {
      result += "*";
    }
    result += "\n";
  }

  return result;
};

/** Pattern Four */
function starPattern4(rows) {
  let result = "";

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < i; j++) {
      result += " ";
    }

    for (let k = 0; k < rows - i; k++) {
      result += "*";
    }

    result += "\n";
  }

  return result;
}

/** Pattern Five */
function createPattern4(n) {
  let pattern = "";

  for (let i = 0; i < n; i++) {
    // Add spaces
    for (let j = 0; j < n - i; j++) {
      pattern += " ";
    }

    // Add stars
    for (let k = 0; k < 2 * i + 1; k++) {
      pattern += "*";
    }

    pattern += "\n";
  }

  return pattern;
}

console.log(createPattern4(5));
