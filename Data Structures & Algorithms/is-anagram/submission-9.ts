class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        if(s.length !== t.length) return false;

        //map of all characters and their population in the string
        const counterMap = new Map<string, number>();

        //populate map with string s
        for(const c of s){
            const val:number = counterMap.get(c) ?? 0;
            counterMap.set(c, val+1);
        }

        //decrement map with string t
        for(const c of t){
            const val:number = counterMap.get(c) ?? 0;
            counterMap.set(c, val-1);
        }

        //if anagram - all values must be 0
        for(const [_key, value] of counterMap){
            if(value !== 0) return false;
        }

        return true;
    } 
}
