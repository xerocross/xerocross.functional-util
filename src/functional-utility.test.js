"use strict";
const FU = require("./functional-utility.js");
describe('test array suite', function () {
    test("join right", function () {
        let arr = [0, 1, 2, 3, 4, 5, 6, 7];
        let newArr = FU.array.joinRight(arr, 8);
        expect(newArr[8]).toBe(8);
    });
    test("join left", function () {
        let arr = [0, 1, 2, 3, 4, 5, 6, 7];
        let newArr = FU.array.joinLeft(arr, -1);
        expect(newArr.length == 9 && newArr[0] == -1).toBe(true);
    });
    describe('test array.replace suite', function () {
        test("replace positive", function () {
            let arr = [0, 1, 2, 3, 4, 5, 6, 7];
            let newArr = FU.array.replace(arr, 7, 0);
            expect(newArr[7] == 0).toBe(true);
        });
        test("replace negative, index too large", function () {
            let arr = [0, 1, 2, 3, 4, 5, 6, 7];
            let newArr = FU.array.replace(arr, 27, 0);
            expect(FU.array.isArraysEqual(arr, newArr, (x, y) => x == y)).toBe(true);
        });
        test("replace negative, index negative", function () {
            let arr = [0, 1, 2, 3, 4, 5, 6, 7];
            let newArr = FU.array.replace(arr, -1, 0);
            expect(FU.array.isArraysEqual(arr, newArr, (x, y) => x == y)).toBe(true);
        });
        test("replace throws, index not an integer", function () {
            let arr = [0, 1, 2, 3, 4, 5, 6, 7];
            expect(function () {
                FU.array.replace(arr, 2.5, 0);
            }).toThrow();
        });
    });
    describe("array swap suite", function () {
        test("swap array positive", function () {
            let arr = [0, 1, 2, 3, 4, 5, 6, 7];
            let newArr = FU.array.swap(arr, 2, 4);
            expect(newArr[2]).toBe(4);
            expect(newArr[4]).toBe(2);
        });
        test("swap array invalid i throws", function () {
            let arr = [0, 1, 2, 3, 4, 5, 6, 7];
            expect(function () {
                FU.array.swap(arr, -1, 4);
            }).toThrow();
        });
        test("swap array invalid j throws", function () {
            let arr = [0, 1, 2, 3, 4, 5, 6, 7];
            expect(function () {
                FU.array.swap(arr, 2, 87);
            }).toThrow();
        });
    });
    test("bubbleup", function () {
        let arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
        let res = FU.array.bubbleUp(arr, arr.length - 1, (x, y) => x - y);
        expect(res[arr.length - 1]).toBe(72);
    });
    test("clone", function () {
        let arr = [0, 1, 2, 72, 3, 4, 5, 6, 7];
        let res = FU.array.clone(arr);
        let test = function () {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] != res[i]) {
                    return false;
                }
                return true;
            }
        };
        expect(test()).toBe(true);
    });
});
describe('test number.isWholeNumber', function () {
    test("number.isWholeNumber positive", function () {
        let num = 42;
        expect(FU.number.isWholeNumber(num)).toBe(true);
    });
    test("number.isWholeNumber negative (pos non-integer)", function () {
        let num = 42.2;
        expect(FU.number.isWholeNumber(num)).toBe(false);
    });
    test("number.isWholeNumber negative (negative integer)", function () {
        let num = -1;
        expect(FU.number.isWholeNumber(num)).toBe(false);
    });
    test("number.isWholeNumber negative (negative non-integer)", function () {
        let num = -0.1;
        expect(FU.number.isWholeNumber(num)).toBe(false);
    });
});
