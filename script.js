"use strict";

// 1- Rechtschreibung aus Zeichenfolge entfernen oder ändern
function disemvowel(str) {
  const vowels = /[aeiouAEIOU]/g;
  return str.replace(vowels, "");
}

// 2- Wert negativ machen
function makeNegative(num) {
  return num < 0 ? num : num - num * 2;
}

// 3- Bedingungen prüfen
function setAlarm(employed, vacation) {
  // return employed && !vacation;
  return employed && !vacation ? true : false;
}

// 4- Geben Sie bei einem nicht leeren Array aus Ganzzahlen das Ergebnis der Multiplikation der Werte in der richtigen Reihenfolge zurück.
function grow(x) {
  return x.reduce((sum, currentValue) => sum * currentValue, 1);
}

// 5-Erstellen Sie eine Funktion, die ein Array von Ganzzahlen von n bis 1 zurückgibt, wobei n > 0.
const reverseSeq = (n) => {
  return Array.from({ length: n }, (_, i) => n - i);
};

// 6- In dieser kleinen Aufgabe erhalten Sie eine Folge von durch Leerzeichen getrennten Zahlen und müssen die höchste und die niedrigste Zahl zurückgeben.
function highAndLow(numbers) {
  // Split String into Array and Change into Numbers
  const arrayNumber = numbers.split(" ").map(Number);

  // Get max and min Number
  let highNum = Math.max(...arrayNumber);
  let minNum = Math.min(...arrayNumber);

  return highNum + " " + minNum;
}

// 7- Ganz einfach: Geben Sie bei einer gegebenen Wortfolge die Länge des/der kürzesten Wort zurück.
function findShort(s) {
  //   let size = [];
  //   s.split(" ").map((a) => size.push(a.split("").length));
  //   return Math.min(...size);

  // Alternative
  return Math.min(...s.split(" ").map((word) => word.length));
}

// 8- Bei einer gegebenen Ziffernfolge sollten Sie jede Ziffer unter 5 durch „0“ und jede Ziffer ab 5 durch „1“ ersetzen. Gibt die resultierende Zeichenfolge zurück.
function fakeBin(x) {
  const binaryString = x
    .split("")
    .map((item) => (Number(item) >= 5 ? 1 : 0))
    .join("");

  return binaryString;
}

// 9- String umkehren
function solution(str) {
  return str.split("").reverse().join("");
}

// 10- Number to String
function numberToString(num) {
  return num.toString();
}

// 11- We need a function that can transform a string into a number
const stringToNumber = function (str) {
  // return parseInt(str);
  return Number(str);
};

// 12- Create a function with two arguments that will return an array of the first n multiples of x
function countBy(x, n) {
  // let z = [];
  // for (let i = 1; i <= n; i++) {
  //   z.push(x * i);
  // }
  // return z;

  // Alternative
  return Array.from({ length: n }, (_, i) => x * (i + 1));
}

// 13- Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

// 14- Make a function that will return a greeting statement that uses an input; your program should return
function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

// 15- You are going to be given a word. Your job is to return the middle character of the word.
//     If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
function getMiddle(s) {
  // const totalLength = s.length;
  // const middleIndex = Math.floor(totalLength / 2);

  // return totalLength % 2 === 0
  //   ? s[middleIndex - 1] + s[middleIndex]
  //   : s[middleIndex];

  // Alternative
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// 16- Fuel to Left
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft;
};

// 17- Write a function that takes an array of words and smashes them together into a sentence and returns the sentence
function smash(words) {
  return words.map((w) => w.trim()).join(" ");
}

// 18- Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
  return String(n).split("").reverse().map(Number);
}

// 19- In a small town the population is p0 = 1000 at the beginning of a year.
// The population regularly increases by 2 percent per year and moreover 50 new
// inhabitants per year come to live in the town. How many years does the town
// need to see its population greater than or equal to p = 1200 inhabitants?
function nbYear(p0, percent, aug, p) {
  let year = 0;
  while (p0 < p) {
    p0 += p0 * (percent / 100) + aug;
    year++;
  }
  return year;
}

// 20- Find Index
function findNeedle(haystack) {
  const index = haystack.indexOf("needle");
  return index > 0 && `found the needle at position ${index}`;
}

// 21- String to Uppercase
const toUpperCase = (str) => {
  return str
    .split(" ")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(" ");
};

// 22- Get Integer
function filter_list(l) {
  return l.filter(Number.isInteger);
}

// 23
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

// 24
const binaryArrayToNumber = (arr) => {
  let output = 0;

  arr.reverse().map((a, i) => {
    output += a > 0 ? 2 ** i : 0;
  });

  return output;
};

// 25
const quarterOf = (month) => {
  return Math.ceil(month / 3);
};

// 26
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

// 27
function XO(str) {
  let x = 0;
  let o = 0;

  for (const item of str.toLowerCase()) {
    if (item === "X") x++;
    if (item === "o") o++;
  }
  return x === o;
}

// 28
var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

// 29
function sumMix(x) {
  return x.reduce((sum, currentValue) => (sum += Number(currentValue)), 0);
}

// 30
function boolToWord(bool) {
  return bool === true ? "Yes" : "No";
}

// 31
function areYouPlayingBanjo(name) {
  const str = "play banjo";

  return name[0].toLowerCase() !== "r"
    ? `${name} does not play banjo`
    : `${name} plays banjo`;
}

// 32
function abbrevName(name) {
  return name
    .split(" ")
    .map((n) => n[0].toUpperCase())
    .join(".");
}

// 33
function order(words) {
  return words
    .split(" ")
    .sort((a, b) => a.match(/\d/) - b.match(/\d/)) // Sorts the array by comparing the numbers in the words
    .join(" ");
}

// 34
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}

// 35
function sortArray(array) {
  const oddNumbers = array.filter((a) => a % 2 !== 0).sort((a, b) => a - b);
  return array.map((arr) => (arr % 2 !== 0 ? oddNumbers.shift(arr) : arr));
}

// 36
function getCount(str) {
  const vowels = /[aeiouAEIOU]/g;

  return str
    .split("")
    .reduce((count, char) => (vowels.test(char) ? count + 1 : count), 0);
}

// 37
function betterThanAverage(classPoints, yourPoints) {
  return (
    yourPoints > classPoints.reduce((c, n) => c + n, 0) / classPoints.length
  );
}

// 38
function arrayDiff(a, b) {
  return a.filter((item) => !b.includes(item));
}

// 39
function longest(s1, s2) {
  const uniqueChars = new Set([...s1, ...s2]);
  return [...uniqueChars].sort().join("");
}

// 40
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

// 41
function century(year) {
  return Math.ceil(year / 100);
}

// 42
var uniqueInOrder = function (iterable) {
  return [...iterable].reduce((arr, currentChar, index, iterables) => {
    if (currentChar !== iterables[index - 1]) {
      arr.push(currentChar);
    }
    return arr;
  }, []);
};

// 43
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return "Invalid operation";
  }
}

// 44
function alphabetPosition(text) {
  const arr = [];

  const alphabets = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );

  const textArr = text.toLowerCase().split("");

  for (let t = 0; t < textArr.length; t++) {
    const pos = alphabets.findIndex((letter) => letter === textArr[t]);

    if (pos >= 0) {
      arr.push(pos + 1);
    }
  }

  return arr.join(" ");
}

// 45
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

// 46
function hoopCount(n) {
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}

// 47
function towerBuilder(nFloors) {
  for (let i = 1; i <= nFloors; i++) {
    const spaces = " ".repeat(nFloors - i);
    const stars = "*".repeat(i * 2 - 1);
    console.log(spaces + stars + spaces + "\n");
  }
}

console.log(towerBuilder(100));
