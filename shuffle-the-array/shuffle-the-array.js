/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let numsShuffled = []
    for(let i = 0; i<n; i++){
        numsShuffled.push(nums[i])
        numsShuffled.push(nums[n+i])
    }
    return numsShuffled
};