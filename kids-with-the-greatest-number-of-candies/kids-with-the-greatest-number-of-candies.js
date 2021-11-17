/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let candiesExtra = candies.map((candy) => candy + extraCandies)
    let candiesBool = []
    for(let i = 0; i<candiesExtra.length; i++){
        let count = 0
        for(let j = 0; j<candies.length; j++){
            if(candiesExtra[i]>=candies[j]){
                 count++
            }
        }
        if(candiesExtra.length === count){
            candiesBool.push(true)
        }else{
            candiesBool.push(false)
        }
    }
    return candiesBool
};