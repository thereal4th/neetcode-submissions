class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        
        for(int i = 0; i<= nums.size(); i++){
            int difference = target - nums[i];
            
            auto newTarget = find(nums.begin()+i+1, nums.end(), difference);

            if(newTarget != nums.end()){
                vector<int> output = {i, distance(nums.begin(), newTarget)};
                return output;
            }
        }
    }
};
