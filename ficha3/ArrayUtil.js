var obj = {
    isEmpty: function (array) {
        return array.length == 0;
    },
    max: function (array) {
        var max = array[0];
        for (i = 0; i < array.length; i++) {
            if (max < array[i]) {
                max = array[i];
            }
        }
        console.log("Maior:", max);
    },
    min: function (array) {
        var min = array[0];
        for (i = 0; i < array.length; i++) {
            if (min > array[i]) {
                min = array[i];
            }
        }
        console.log("Menor:", min);
    },
    average: function (array) {
        var avg = 0;
        var size = array.lenght;
        for (i = 0; i < array.length; i++) {
            avg += i;
            var average = avg / size;
        }
        console.log("The average is: ", average);
    },
    indexOf: function (array, value) {
        var index = -1;
        for (i = 0; i < array.length; i++) {
            if (array[i] == value) {
                index = i;
            }
        }
        return index;
    },
    subArray: function (array, startIndex, endIndex) {
        var res = [];
        for (let i = startIndex; i < array.length; i++) {
              res.push(array[i]);
        }
        console.log(res);
    }, 
    isSameLength: function (array1, array2) {
        if (array1.lenght() == array2.lenght()) {
            return true;
        } else {
            return false;
        }
    }, 
    reverse: function (array) {

    }
}

module.exports = obj;