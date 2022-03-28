//3.
function sleep(ms) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < ms);
}

function performDownload(started, update, completed){
    started();
    var progress = 0;
    while (progress <= 100) {
        update(progress);
        progress++;
        sleep(10);
    }
    completed();
}

function started() {
    console.log("Started Donwload");
}

function update(percent) {
    console.log(percent + "% of Download");
}

function completed() {
    console.log("Donwload completed")
}

//performDownload(started, update, completed);

//2
var arrayUtil = require("./ArrayUtil");
var peepee = [0,1,2,3,4,5,6];
console.log(arrayUtil.isEmpty(peepee));

module.exports = obj;