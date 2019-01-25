"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const we_assert_1 = __importDefault(require("we-assert"));
let we = we_assert_1.default.build();
we.setHandler(function (message) {
    throw new Error("the following assertion failed: \"" + message + "\"");
});
var number = {
    isWholeNumber: function (num) {
        if (num == 0) {
            return true;
        }
        else if (num > 0) {
            return this.isWholeNumber(num - 1);
        }
        else {
            return false;
        }
    },
    isInteger: function (num) {
        return this.isWholeNumber(num) || this.isWholeNumber(-num);
    }
};
var array = {
    clone: function (arr) {
        return this.subarrayMax(arr, arr.length);
    },
    isArraysEqual: function (arr1, arr2) {
        if (arr1.length != arr2.length) {
            return false;
        }
        else {
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] != arr2[i]) {
                    return false;
                }
            }
            return true;
        }
    },
    joinRight: function (arr, newValue) {
        return [...arr, newValue];
    },
    joinLeft: function (arr, newValue) {
        return [newValue, ...arr];
    },
    subarrayMax: function (arr, max) {
        if (max <= 0) {
            // if max is 0, then the subarray includes nothing,
            // so we return the empty array
            // this is the base case for mathematical induction
            return [];
        }
        else {
            // else max > 0.  Assume we have computed 
            // the subarray for max - 1.  
            let lesserSubarray = this.subarrayMax(arr, max - 1);
            // That is the
            // array containing all the indexes up to
            // and including max - 2.  To compute the 
            // desired subarray, we must join that 
            // array with the next element, if it exists,  
            // which is arr[max - 1]
            // if  the index max - 1 is not a valid index for this array, we do nothing
            // thus we have
            let subarray = max - 1 < arr.length ? array.joinRight(lesserSubarray, arr[max - 1]) : lesserSubarray;
            // and by mathematical induction this is the correct 
            // return array for all 
            return subarray;
        }
    },
    subarrayMin: function (arr, min) {
        we.assert.that(number.isInteger(min), "min is an integer");
        if (min >= arr.length) {
            return [];
            // if min >= arr.length, then there 
            // are no indexes greater than or equal to min,
            // so we return an empty array
        }
        else {
            // else min is a number < arr.length, so the 
            // result array will contain at least one value
            // suppose we have computed the appropriate 
            // lesser subarray for min + 1.
            let lesserSubarray = this.subarrayMin(arr, min + 1);
            // if there is a value at arr[min] then we need
            // to join it to the lesserSubarray on the left
            // if min is not a valid index then we do nothing
            return min >= 0 ? this.joinLeft(lesserSubarray, arr[min]) : lesserSubarray;
        }
    },
    joinTwoArrays: function (arr1, arr2) {
        return [...arr1, ...arr2];
    },
    subarray: function (arr, min, max) {
        return this.subarrayMin(this.subarrayMax(arr, max), min);
    },
    replace: function (arr, index, value) {
        we.assert.that(number.isInteger(index), "index is an integer");
        if (index < 0 || index >= arr.length) {
            return this.clone(arr);
        }
        else {
            return this.joinTwoArrays(this.joinRight(this.subarrayMax(arr, index), value), this.subarray(arr, index + 1, arr.length));
        }
    },
    swap: function (arr, i, j) {
        we.assert.that(number.isInteger(i), "i is an integer");
        we.assert.that(0 <= i && i < arr.length, "0 <= i && i < arr.length");
        we.assert.that(number.isInteger(j), "j is an integer");
        we.assert.that(0 <= j && j < arr.length, "0 <= j && j < arr.length");
        return this.replace(this.replace(arr, i, arr[j]), j, arr[i]);
    },
    bubblePass: function (arr, i) {
        i = i | 0;
        if (i >= arr.length - 1) {
            return arr;
        }
        else {
            return this.bubblePass(arr[i] <= arr[i + 1] ? arr : this.swap(arr, i, i + 1), i + 1);
        }
    }
};
module.exports = {
    array,
    number
};
