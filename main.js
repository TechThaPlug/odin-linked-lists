import { LinkedList } from "./linked-list.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

list.prepend("fish");
console.log(list.toString());
console.log("size:", list.size());
console.log("head:", list.head());
console.log("tail:", list.tail());
console.log("at(2):", list.at(2));
console.log("at(99):", list.at(99));
console.log("contains snake:", list.contains("snake"));
console.log("contains lion:", list.contains("lion"));
console.log("findIndex parrot:", list.findIndex("parrot"));
console.log("findIndex lion:", list.findIndex("lion"));
console.log("pop:", list.pop());
console.log(list.toString());

list.insertAt(1, "rabbit", "horse");
console.log(list.toString());

list.removeAt(1);
console.log(list.toString());

list.insertAt(list.size(), "owl");
console.log("tail after insertAt end:", list.tail());

list.removeAt(list.size() - 1);
console.log("tail after removeAt end:", list.tail());

try {
  list.insertAt(99, "x");
} catch (error) {
  console.log(error.name + ": " + error.message);
}

try {
  list.removeAt(-1);
} catch (error) {
  console.log(error.name + ": " + error.message);
}

const empty = new LinkedList();
console.log("empty toString is empty:", empty.toString() === "");
console.log("empty head:", empty.head());
console.log("empty tail:", empty.tail());
console.log("empty pop:", empty.pop());