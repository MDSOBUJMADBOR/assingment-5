
<!-- Question-1 -->

1.What is the difference between var, let, and const?

Answer :
1.var

*পুরোনো javaScript(ES6 এর আগে) এ বেশি ব্যবহার হতো।
*একই variable আবার redeclare করা যায়।
*value change করা যায়।
Example :
var name = "Sobuj";
var name = "Rahim"; // আবার declare করা যায়
name = "Karim"; // value change করা যায়

2.let

*ES6 (2015) থেকে এসেছে।
*একই variable redeclare করা যায় না।
*কিন্তু value change করা যায়।
Example :
let age = 20;
age = 25; // change করা যায়
let age = 30; //  error (redeclare করা যাবে না)

3.const

*redeclare করা যায় না।
*value change করা যায় না
Example: 
const country = "Bangladesh";
country = "India"; //  error দিবে।



<!-- Question-2 -->

2.What is the spread operator (...)?

Answer :
JavaScript-এ Spread Operator (...) ব্যবহার করা হয় array বা object এর ভেতরের elements/values আলাদা করে ছড়িয়ে (spread) দেওয়ার জন্য।

Example:
const a = [1, 2];
const b = [3, 4];
const result = [...a, ...b];
console.log(result);

const user = {
  name: "Sobuj",
  age: 22
};
const newUser = { ...user };
console.log(newUser);


<!-- Question-3 -->

3.What is the difference between map(), filter(), and forEach()?

Answer :
JavaScript-এ map(), filter(), এবং forEach() তিনটিই array method। এগুলো array এর প্রতিটি element এর উপর কাজ করে। কিন্তু এদের কাজ আলাদা।

1.map()

Array এর প্রতিটি element এর উপর কাজ করে নতুন array return করে।
Example:
const numbers = [1, 2, 3, 4];
const result = numbers.map(num => num * 2);
console.log(result);
Result:
[2, 4, 6, 8]
map() সব element নিয়ে নতুন array তৈরি করে ।

2.filter()

Condition অনুযায়ী কিছু element বেছে নিয়ে নতুন array return করে।
Example :
const numbers = [1, 2, 3, 4, 5];
const result = numbers.filter(num => num > 3);
console.log(result);
Result:
[4, 5]
filter() condition true হলে সেই element রাখে।

3.forEach()

Array এর প্রতিটি element এর উপর loop চালায়, কিন্তু কিছু return করে না।
Example:
const numbers = [1, 2, 3];
numbers.forEach(num => {
  console.log(num);
});
Result:
1
2
3


<!-- Question-4 -->

4.What is an arrow function?
Answer :
Arrow Function হলো JavaScript-এর একটি short/modern way function লেখার জন্য।
এটি ES6 (2015) এ এসেছে এবং সাধারণ function এর চেয়ে ছোট ও সহজ syntax ব্যবহার করে।

Example:
const add = (a, b) => {
  return a + b;
};
এখানে => এই চিহ্নটাকে arrow বলা হয়, তাই নাম Arrow Function।


<!-- Question-5 -->

5.What are template literals?
Answer:
Template Literals হলো JavaScript-এ string লেখার একটি modern way।
এটা backtick (``) ব্যবহার করে লেখা হয় এবং এর ভিতরে variable বা expression সহজে ব্যবহার করা যায়।

const name = "Sobuj";
const message = `Hello ${name} welcome!`;
console.log(message);
` ` = backtick
${} = variable বা expression বসানোর জন্য 
