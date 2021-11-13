/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let rome = { I : 1, V : 5, X : 10, L : 50, C : 100, D : 500, M : 1000 }
    let val = 0
    s.split('').forEach((char,i) =>{
        if(rome[char]<rome[s[i+1]]) val -= rome[char]
        else val += rome[char]
    })
    return val
};