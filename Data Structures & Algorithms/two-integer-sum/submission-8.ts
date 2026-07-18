class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
    
        const numsMap = new Map<string, number>();

        for(let i = 0; i < nums.length; i++){
            const addend = String(target - nums[i]);
            if(numsMap.has(addend)){
                return [numsMap.get(addend), i];
            }
            numsMap.set(String(nums[i]), i);
        }

        return [];
    }
}
