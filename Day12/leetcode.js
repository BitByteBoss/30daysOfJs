// 2629. Function Composition
// Problem 1
/**
 * @param {Function[]} functions
 * @return {Function}
 */

var compose = function(functions) {
    
  return function(x) {
      let result = x;
      for(let i=functions.length-1; i>=0;i--){
          let f = functions[i];
          result = f(result);            
      }
      return result;
  }
};

/**
* const fn = compose([x => x + 1, x => 2 * x])
* fn(4) // 9
*/


// 2666. Allow One Function Call
// Problem 2

/**
* @param {Function} fn
* @return {Function}
*/

var once = function(fn) {
  let called = 0;
  return function(...args){
      if(called == 0){
          called = 1;
          return fn(...args);
      }else{
          return undefined;
      }
  }
};

/**
* let fn = (a,b,c) => (a + b + c)
* let onceFn = once(fn)
*
* onceFn(1,2,3); // 6
* onceFn(2,3,6); // returns undefined without calling fn
*/