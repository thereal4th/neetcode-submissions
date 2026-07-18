class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        
        unordered_set<int> us1;

        for(int i = 0; i < nums.size(); i++){

            if(us1.find(nums[i]) != us1.end()){
                return true;
            }
            else{
                us1.insert(nums[i]);
            }
        }
        return false;
    }
};
