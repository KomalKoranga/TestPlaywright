//map,filter,reduce
const array = [1, 2, 3, 4];
const newArray = array.map(x => x *10);
console.log(newArray);
const newArray1 = array.filter(x => x>2);
console.log(newArray1);
const newArray2 = array.reduce((x ,n)=> x+n ,0)
console.log(newArray2);
const spreadOperator = [...array , ...newArray , ...newArray1 , newArray2];
console.log(spreadOperator);

//Duplicate and Unique(set)
const arr = [1, 2, 3, 2, 4, 3, 5];

const duplicates = arr.filter(
    (value, index) => arr.indexOf(value) !== index
);

console.log([...new Set(duplicates)]);

//Reverse and Palindrome
const name = "komal";
const reversed = name.split("").reverse().join("");
console.log(reversed);
if (name === reversed)
{console.log("Palindrome");}
else {console.log("No Palindrome");}

//max and min
const maxmin = [3,6,8,12,90,30,100];
const max = Math.max(...maxmin);
console.log(max);
const min = Math.min(...maxmin);
console.log(min);

//sort
console.log(maxmin.sort());

const value = "666";
const valueInt = parseInt(value);
console.log(valueInt);

//count characters
const str = "Hello, World!";
const charCount = {};
for (let i = 0; i < str.length; i++) {
  const char = str[i];
  if (charCount[char]) {
    charCount[char]++;
  } else {
    charCount[char] = 1;
  }
}
console.log(charCount);

//type

const num = 42;
console.log(typeof num);
