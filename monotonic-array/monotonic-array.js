/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let count = 0
    let len = 0
    let length = nums.length
    for(i = 0; i <= length; i++){
        if(nums[i] < nums[i+1]){
            count++
        }
        if(nums[i] > nums[i+1]){
            len++
        }  
        if(nums[i] === nums[i+1]){
            len++
            count++
        } 
    }
    
    return (len === length || count === length)? true : false 
};