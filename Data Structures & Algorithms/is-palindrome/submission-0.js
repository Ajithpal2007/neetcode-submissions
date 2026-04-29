class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while(l<r){
            while(l<r && !this.alphaNum(s[l])){
                l++
            }

            while (r>l  && !this.alphaNum(s[r])){
                r--
            }

            if( s[l].toLowerCase() !== s[r].toLowerCase() ){
                return false;
            }

            l++;
            r--;
        }

        return true
    }


    alphaNum(c) {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
}
