class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let hasDuplicate = false;
        nums = nums.sort((a, b) => {
            console.log(`comparing ${a}-${b}`);
            if(a-b === 0){
                hasDuplicate = true;
            }
            return (a-b)
        })

        return hasDuplicate;
    }
}
