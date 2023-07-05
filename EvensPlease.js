
/***********************************************************************
 *                                                                     *
 *                           EVENS PLEASE                              *
 *                                                                     *
 * Create a function that takes an array of integers and returns an    *
 * array with only the even integers from the original array.          *
 * e.g. [1, 4, 6, 9, 2] → [4, 6, 2]                                    *
 *                                                                     *
 ***********************************************************************/

function returnEvensOnlyLoop(arr) {
    let evens = []
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] % 2 === 0) {
        evens.push(arr[i])
      }
    }
    return evens
  }
  
  function returnEvensOnlyMethod(arr) {
    return arr.filter(el => el % 2 === 0)
  }