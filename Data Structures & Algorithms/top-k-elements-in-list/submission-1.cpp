class Solution {
    public:
        vector<int> topKFrequent(vector<int>& nums, int k) {
    
            set<int> uns(nums.begin(), nums.end()); //create set to identify number of unique elements
            int n = uns.size();
            vector<vector<int>> bucket(n); //vector of vectors, inner vectors are buckets that contain the same elements in nums
            //map<int, vector<int>> myMap; (does not allow duplicate keys)
            multimap<int, vector<int>> myMap; //multimaps allow duplicate keys
            vector<int> solutionVector;

            for(int i = 0; i < n; i++){
                for(int j = nums.size() - 1; j >= 0; j--){
                    if(bucket[i].empty()){
                        bucket[i].push_back(nums[j]);
                        nums.erase(nums.begin() + j);
                    }
                    else if(nums[j] == bucket[i][0]){
                        bucket[i].push_back(nums[j]);
                        nums.erase(nums.begin() + j);
                    }
                    else{
                        continue;
                    }
                }
            }

            //insert buckets (vectors) as values and their sizes as keys
            for(int i = 0; i < n; i++){
                //myMap[bucket[i].size()] = bucket[i]; this is for maps, multimaps do not support this way of insertion
                //instead, use:
                myMap.insert({bucket[i].size(), bucket[i]});
            }
            
            //cannot use arithmetic operations on reverse iterators, instead use addiitonal condition
            int count = 0;
            for (auto it = myMap.rbegin(); it != myMap.rend() && count < k; ++it, ++count){
                solutionVector.push_back(it->second[0]);
            }
            
            return solutionVector;
            
        }
    };