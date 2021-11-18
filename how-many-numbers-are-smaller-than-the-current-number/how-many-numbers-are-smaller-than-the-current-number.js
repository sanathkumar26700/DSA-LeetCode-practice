/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    
    let unSorted = [...nums]
    let sorted = nums.sort((a, b) => a-b)
    let count = unSorted.map(num => sorted.indexOf(num))
    
    return count
};