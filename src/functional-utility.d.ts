declare type ComparisonFunction = (i: number, j: number) => number;
declare type IsEqualFunction = (left: any, right: any) => boolean;
declare const _default: {
    array: {
        clone: (arr: any[]) => any[];
        isArraysEqual: (arr1: any[], arr2: any[], isEqual: IsEqualFunction) => boolean;
        isSorted: (arr: any[], upTo: number, compareFunction: ComparisonFunction) => boolean;
        joinRight: (arr: any[], newValue: any) => any[];
        joinLeft: (arr: any[], newValue: any) => any[];
        subarrayMax: (arr: any[], max: number) => any[];
        subarrayMin: (arr: any[], min: number) => any[];
        joinTwoArrays: (arr1: any[], arr2: any[]) => any[];
        subarray: (arr: any[], min: number, max: number) => any[];
        replace: (arr: any[], index: number, value: any) => any[];
        swap: (arr: any[], i: number, j: number) => any[];
        bubbleUp: (arr: any[], bubbleIndex: number, compareFunction: ComparisonFunction) => any[];
        bubbleSort: (arr: any[], compareFunction: ComparisonFunction) => any[];
    };
    number: {
        isWholeNumber: (num: number) => boolean;
        isInteger: (num: number) => boolean;
    };
};
export default _default;
