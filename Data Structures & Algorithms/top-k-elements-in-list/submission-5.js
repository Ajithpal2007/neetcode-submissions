class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()

        for ( let i =0; i<nums.length;i++){
            map.set(nums[i],(map.get(nums[i])?? 0 )+1);
        }

        const res= Array.from(map).sort((a,b)=>b[1]-a[1]).filter((item,index)=>index<k).map((item)=>item[0])

        return res
    }
}
