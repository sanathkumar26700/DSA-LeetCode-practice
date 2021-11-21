/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    if(n===0) {
        return [];
    }
    if(n===1) {
        return [0];
    }
    
    
    return [-n, ...sumZero(n-2), n];
    
};