class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length){
            return false;
        }

        const sMap = new Map<string, number>();
        const tMap = new Map<string, number>();

        for (const c of s){
            const currentCount = sMap.get(c) || 0;
            sMap.set(c, currentCount+1);
        }

        for (const c of t){
            const currentCount = tMap.get(c) || 0;
            tMap.set(c, currentCount+1);
        }

        for (const c of s){
            if(tMap.get(c) !== sMap.get(c)){
                return false;
            }
        }

        return true;
    }
}
