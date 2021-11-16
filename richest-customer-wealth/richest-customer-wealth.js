/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let arr = []
    for(let i =0; i< accounts.length; i++){
        let sum = 0
        for(let j = 0; j<accounts[i].length; j++){
            sum = sum + accounts[i][j]
        }
   arr.push(sum)
    }
    console.log(arr)
    return Math.max(...arr)
};