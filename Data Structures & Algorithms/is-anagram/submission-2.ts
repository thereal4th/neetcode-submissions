class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sortedStringS = s.split('').sort().join('');
        const sortedStringT = t.split('').sort().join('');

        if (sortedStringS === sortedStringT){
            return true;
        }
        else{
            return false;
        }
    }
}
