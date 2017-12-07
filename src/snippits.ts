'use strict';

////////////////* let */////////////////

var funcs = [];
for (let i = 0; i < 5; i += 1) {
  funcs.push(function () {
    console.log(i);
  })
}
funcs.forEach(function (func) {
  func()
});

////////////////* Template Strings */////////////////

let nameThis = "Asim";
let multi = `hello
world
my
name
is
${nameThis}`;
console.log(multi);


////////////////* Fat Arrows */////////////////

setTimeout(() => {
    console.log("setTimeout called!")
}, 1000);

setTimeout(() => console.log("setTimeout called!"), 1000);

let add = (a,b) => a + b;
console.log(add(1,2));

let obj1 = {
  name: "Asim",
  sayLater: function() {
    setTimeout(() => console.log(`${this.name}`), 1000)
  }
};
obj1.sayLater();

/////////////////* Destructuring */////////////////

// Object Destructuring
const obj = {first: 'Asim', last: 'Hussain', age: 39};

function getObj() {
  return obj;
}

const {first, last} = getObj();

console.log(first);
console.log(last);

// Array Destructuring
const arr = ['a', 'b'];
const [x, y] = arr;
console.log(x);
console.log(y);

// Function Parameter Destructuring
function func({x = 1}) {
  console.log(x);
}
func({});

////////////////* For of */////////////////

var obj2 = {a:1,b:2};
for (let prop in obj2) {
    console.log(prop);
}

let array = [10,20,30];
for (var value of array) {
  console.log(value);
}

////////////////* Map */////////////////

let map = new Map();
map.set("A", 1);
map.set("B", 2);
map.set("C", 3);

let map2 = new Map()
  .set("A", 1)
  .set("B", 2)
  .set("C", 3);

let map3 = new Map([
  ["A", 1],
  ["B", 2],
  ["C", 3]
]);

for (let [key, value] of map) {
  console.log(key, value);
}

console.log(map.get("A"));
console.log(map.has("A"));
console.log(map.size);

map.delete("A");
console.log(map.size);

map.clear();
console.log(map.size);


// Set
let set = new Set();
set.add('APPLE');
set.add('ORANGE');
set.add('MANGO');


let set2 = new Set()
  .add('APPLE')
  .add('ORANGE')
  .add('MANGO');

let set3 = new Set(['APPLE', 'ORANGE', 'MANGO']);

console.log(set.has('APPLE'));

set.delete('APPLE');

console.log(set.size);

set.clear();
console.log(set.size);


let set4 = new Set();
set3.add('Moo');
console.log(set3.size);
// 1
set4.add('Moo');
console.log(set4.size);
// 1

for (let entry of set2) {
  console.log(entry);
}

////////////////* Via Promise */////////////////

let error = false;
function doAsyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject('error');
      } else {
        resolve('done');
      }
    }, 1000);
  });
}

doAsyncTask().then(
    (val) => console.log(val),
    (err) => console.error(err)
);

// Immediately Resolved Promise
let promise = Promise.resolve('done');
promise.then((val) => console.log(val)); // 'done'

// Handling Errors
Promise.resolve('done')
    .then((val) => {throw new Error("fail")})
    .then((val) => console.log(val))
    .catch((err) => console.error(err));


////////////////* Classes */////////////////

interface Human {
  firstName: string;
  lastName: string;
  name?: Function;
  isLate?(time: Date): Function;
}

class Person implements Human {
  constructor(public firstName, public lastName) {
  }

  public name() {
    return `${this.firstName} ${this.lastName}`;
  }

  protected whoAreYou() {
    return `Hi i'm ${this.name()}`;
  }
}

class Student extends Person {
  constructor(public firstName, public lastName, public course) {
    super(firstName, lastName);
  }

  whoAreYou() {
    return `${super.whoAreYou()} and i'm studying ${this.course}`;
  }
}

let asim = new Student("Asim", "Hussain", "typescript");
console.log(asim.whoAreYou());


function Student(config) {
    return function (target) {
        Object.defineProperty(target.prototype, 'course', {value: () => config.course})
    }
}


////////////////* Decorators */////////////////

@Student2({
    course: "angular3"
})
class Person2 {
    constructor(private firstName, private lastName) {
    }

    public name() {
        return `${this.firstName} ${this.lastName}`;
    }

    protected whoAreYou() {
        return `Hi i'm ${this.name()}`;
    }
}

let asim2 = new Person("Asim", "Hussain");
//noinspection TypeScriptUnresolvedFunction
console.log(asim.course());