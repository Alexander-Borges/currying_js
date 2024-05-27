// the process of transforming a function to treat its parameters as a sequence of individual function calls that each take one parameter. For example, func(a,b,c) would become func(a)(b)(c).
// Currying is achieved by creating functions that return other functions, taking advantage of closures.

function sum(a,b,c) {
    return a + b + c;
}

function curriedSum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

function curry(func){
    return function(a){
        return function(b){
            return function(c){
                return a + b + c;
            }
        }
    }
}
const newSum = curry(sum);



console.log(sum(1,4,10));
console.log(curriedSum(1)(4)(10));