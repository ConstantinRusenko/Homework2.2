var array = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];


function maxValue(arr) {
    var max = 0;
    for (i = 0; i < arr.length; i++)
        if (max < arr[i])
            max = arr[i];
    console.log("Max value: ",max);
}

maxValue(array);

function minValue(arr) {
    var min = 0;
    for (i = 0; i < arr.length; i++)
        if (min > arr[i])
            min = arr[i];
    console.log("Max value: ",min);
}


minValue(array);

function sumValue(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++)
        sum += arr[i];
    console.log("Sum value: ",sum);
}

sumValue(array);

function Replace(arr) {
    var obj = {};
    var min = 0;
    var max = 0;

    var sum = 0;
    for (i = 0; i < arr.length; i++)
        sum += arr[i];
    arr.forEach((elem, i) => {
        if (min > arr[i]) {
        min = arr[i];
    } else if (max < arr[i]) {
        max = arr[i];
    }
});
    for (var i = 0; i < arr.length; ++i)
        obj[i] = arr[i];
    console.log("Min&&Max&&Sum", {min, max, sum}, obj);
}

Replace(array);

function arrayInObject(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; ++i)
        obj[i] = arr[i];
    console.log("Array in obj",obj);
}

arrayInObject(array);

function callbackTest(number, callback) {
    console.log(number*number);
    callback();
};

callbackTest(5, function () {
    console.log("Hello");
})