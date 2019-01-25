import WeAssert from "we-assert";

let we = WeAssert.build();
var array = {
    clone : function(arr, i) {
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
    },
    joinRight : function(arr, newValue) {
        return [...arr, newValue];
    },
    joinLeft : function(arr, newValue) {
        return [newValue, ...arr];
    },
    extendOne : function(arr, newVal) {
        if (arr.length == 0) {
            return [newVal];
        } else {
            this.extendOne()
        }
    },
    subarrayMax : function(arr, max) {
        if (max == 1) {
            return [arr[0]];
        } else if (max == 0) {
            return [];
        }
        return array.joinRight(this.subarrayMax(arr, max - 1), arr[max - 1] );
    },
    subarrayMin : function(arr, min) {
        if (min == arr.length - 1) {
            return [arr[min]];
        } else if (min == arr.length) {
            return [];
        }
        return this.joinLeft(this.subarrayMin(arr, min + 1), arr[min] );
    },
    joinTwoArrays : function(arr1, arr2) {
        return [...arr1, ...arr2];
    },
    subarray : function (arr, min, max) {
        return this.subarrayMin(this.subarrayMax(arr,max), min);
    },
    swap : function (arr, i, j) {
        return this.joinTwoArrays(this.joinTwoArrays(this.joinTwoArrays(this.subarray(arr,0,i),[arr[j]]), this.joinTwoArrays(this.subarray(arr,i + 1, j), [arr[i]])),this.subarray(arr, j + 1, arr.length));
    },
    bubblePass : function(arr, i) {
        if (!i) {
            i = 0;
        }
        if (i >= arr.length - 1) {
            return arr;
        } else {
            
            return this.bubblePass(arr[i] <= arr[i + 1] ? arr : this.swap(arr, i, i + 1), i + 1);
        }
    }
};

module.exports = {
    array
}