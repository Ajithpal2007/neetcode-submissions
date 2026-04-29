class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = 0;
        const store = new Set(nums);

        for(let num of nums){
            let streak = 0;
              let  curr = num;
            while(store.has(curr)){
                streak++;
                curr++
            }    

            res = Math.max(res,streak)
        }
        return res
    }
}
