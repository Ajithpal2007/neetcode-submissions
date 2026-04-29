class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       const  numSet = new Set(nums);
       let res = 0

       for ( let num of numSet){

        if(!numSet.has(num-1)){
       let currentNum = num;
       let currentStreak = 1;

       while(numSet.has(currentNum+1)){
        currentNum+= 1
        currentStreak+=1
       }

       res = Math.max(res,currentStreak)
        }

       



       }
       return res
    }
}
