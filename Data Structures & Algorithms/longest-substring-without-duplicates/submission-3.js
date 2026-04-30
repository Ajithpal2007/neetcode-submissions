class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let mp = new  Map()
        let l = 0;
        let res = 0;


        for ( let r= 0; r< s.length; r++){
           if(mp.has(s[r])){
            l =Math.max(mp.get(s[r]) + 1, l);

           }

           mp.set(s[r],r)
           res = Math.max(res, r-l+1)

    
        }

        return res
    }
}
