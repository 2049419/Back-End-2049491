//2.
var obj = {
    name: "John",
    age: "30",
    gender: "Male"
}

var jsonString = JSON.stringify(obj);
var jsonParse = JSON.parse(jsonString);

console.log(jsonString);
console.log(jsonParse);
