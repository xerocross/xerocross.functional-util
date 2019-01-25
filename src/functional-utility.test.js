const FU = require("./functional-utility.js");

test("join right",function() {
    let arr = [0,1,2,3,4,5,6,7];
    let newArr = FU.array.joinRight(arr, 8);
    expect(newArr[8]).toBe(8);
});

test("join left",function() {
    let arr = [0,1,2,3,4,5,6,7];
    let newArr = FU.array.joinLeft(arr, -1);
    expect(newArr.length == 9 && newArr[0] == -1).toBe(true);
});

test("swap array",function() {
    let arr = [0,1,2,3,4,5,6,7];
    let newArr = FU.array.swap(arr, 2, 4);
    expect(newArr[2]).toBe(4);
    expect(newArr[4]).toBe(2);
});

test("bubble pass", function() {
    let arr = [0,1,2,72,3,4,5,6,7];
    let res = FU.array.bubblePass(arr);
    expect(res[arr.length - 1]).toBe(72);
});

test("clone", function() {
    let arr = [0,1,2,72,3,4,5,6,7];
    let res = FU.array.clone(arr);
    let test = function() {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != res[i]) {
                return false;
            }
            return true;
        }
    }
    expect(test()).toBe(true);
});