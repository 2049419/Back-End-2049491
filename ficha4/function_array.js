//a)
var array = [];

//b)
array.push(function (){console.log("Hello World 3, 2, 1.")});
array.push(function () {console.log("Hello World 3, 2, 1.")});
array.push(function (){console.log("Hello World 3, 2, 1.")});
for (let i = 0; i < array.length; i++) {
    array[i]();
}

console.log("");

//c)
array.forEach(element => {
    console.log("Hello World 3, 2, 1.");
})