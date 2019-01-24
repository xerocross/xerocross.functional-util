import WeAssert from "we-assert";

let we = WeAssert.build();
var array = {};

array.clone = function(arr, i) {
    if (i == undefined) {
        i = arr.length - 1;
    }
    if (i == 0) {
        return [arr[0]]
    } else {
        let newArr = array.clone(arr, i - 1);
        newArr[i] = arr[i];
        return newArr;
    }
}

var arrayExtendOne = function(arr, newVal) {

    if (arr.length == 0) {
        return [newVal];
    } else {
        arrayExtendOne()
    }
}



we.assume("A", "joinArrayRight");
var joinArrayRight = function(arr, newValue, i) {
    return [...arr, newValue];
}

we.assume("B", "joinArrayLeft");
var joinArrayLeft = function(arr, newValue) {
    return [newValue, ...arr];
}

var subarrayMax = function(arr, max) {
    if (max == 1) {
        return [arr[0]];
    } else if (max == 0) {
        return [];
    }
    return joinArrayRight(subarrayMax(arr, max - 1), arr[max - 1] );
}
var subarrayMin = function(arr, min) {
    if (min == arr.length - 1) {
        return [arr[min]];
    } else if (min == arr.length) {
        return [];
    }
    return joinArrayLeft(subarrayMin(arr, min + 1), arr[min] );
}

var subarray = function (arr, min, max) {
    return subarrayMin(subarrayMax(arr,max), min);
}

var joinTwoArrays = function(arr1, arr2) {
    return [...arr1, ...arr2];
}

var swap = function (arr, i, j) {
    return joinTwoArrays(joinTwoArrays(joinTwoArrays(subarray(arr,0,i),[arr[j]]), joinTwoArrays(subarray(arr,i + 1, j), [arr[i]])),subarray(arr, j + 1, arr.length));
}
var bubblePass = function(arr, i) {
    if (!i) {
        i = 0;
    }
    if (i >= arr.length - 1) {
        return arr;
    } else {
        
        return bubblePass(arr[i] <= arr[i + 1] ? arr : swap(arr, i, i + 1), i + 1);
    }
}

module.exports = {
    subarrayMax,
    subarrayMin,
    subarray,
    joinTwoArrays,
    joinArrayRight,
    joinArrayLeft,
    swap,
    bubblePass,
    array
}