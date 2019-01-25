# xerocross.functional-util

This is a collection of JavaScript utility functions written in a functional programming style.  I just started this.  It's still under construction.

## functions

This is a list of the available functions and their signatures and return types.  To use them, import the module. ``const FU = require("xerocross.functional-util");``.  Then to access a function, say "array.joinRight", you call ``FU.array.joinRight``.

None of these functions mutate the input data.

### function list

```number.isWholeNumber : function(num:number) => boolean```

```number.isInteger : function(num:number) => boolean```

```array.clone : function(arr:any[]) => any[] ```

```array.isArraysEqual : function(arr1:any[], arr2:any[], isEqual:IsEqualFunction) => boolean```

```array.joinRight : function(arr:any[], newValue:any) => any[]```

```array.joinLeft : function(arr:any[], newValue:any) => any[] ```

```array.subarrayMax : function(arr:any[], max:number) => any[] ```

```array.subarrayMin : function(arr:any[], min:number) => any[] ```

```array.joinTwoArrays : function(arr1:any[], arr2:any[]) => any[]```

```array.subarray : function (arr:any[], min:number, max:number) => any[] ```

```array.replace : function(arr:any[], index:number, value:any) => any[]```

```array.swap : function (arr:any[], i:number, j:number) ```

```bubbleUp : function(arr:any[], bubbleIndex:number, compareFunction:ComparisonFunction) => any[] ```