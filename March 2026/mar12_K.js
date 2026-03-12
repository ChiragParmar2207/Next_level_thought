let a = [1, 2, 3];
let b = a;
a = a + [4];
console.log("a====================", a);

/**output:- 1,2,34

Here JavaScript does NOT concatenate arrays.
Instead it performs string concatenation.
Because the + operator with arrays converts them to strings first.


====================================================================================*/

let x = (1, 2, 3);
console.log(x);

/**output:- 3

The comma operator evaluates all expressions but returns the last one.

====================================================================================*/