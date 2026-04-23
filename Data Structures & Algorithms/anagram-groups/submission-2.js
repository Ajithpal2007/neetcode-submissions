class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()

        for(let word of strs){
            let key = word.split('').sort().join('')

            if(!map.has(key)){
                map.set(key,[])
            }

            map.get(key).push(word)
        }

        return Array.from(map.values())
    }
}
