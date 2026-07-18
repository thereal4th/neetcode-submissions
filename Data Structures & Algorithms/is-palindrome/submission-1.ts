class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        const sanitizedString = s.toLowerCase().replace(/[^a-z0-9]/gi, "").trim();
        console.log(sanitizedString)
        //two pointer pattern
        let left = 0;
        let right = sanitizedString.length - 1;

        while(left < right){

            if(sanitizedString[left] !== sanitizedString[right]) return false;

            else{
                left++;
                right--;
            }

        }

        return true;
    }
}
