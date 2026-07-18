class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        if(s.length !== t.length) return false;

        const sMap = new Map<string, number>();
        const tMap = new Map<string, number>();

        for(const c of s){
            const val:number = sMap.get(c) ?? 0;
            sMap.set(c, val+1);
        }

        for(const c of t){
            const val:number = tMap.get(c) ?? 0;
            tMap.set(c, val+1);
        }

        for(const [key, sValue] of sMap){
            if(!tMap.has(key) || tMap.get(key) !== sValue) return false;
        }

        return true;
    } 
}
