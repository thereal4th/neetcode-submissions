class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
         unordered_map<string, vector<string>> anagramGroups;

        for (const string& word : strs) {
            string sortedWord = word;
            sort(sortedWord.begin(), sortedWord.end());
            anagramGroups[sortedWord].push_back(word); 
        }

        vector<vector<string>> finalOutput;
        for (auto& pair : anagramGroups) {
            finalOutput.push_back(pair.second);
        }

        return finalOutput;
    }
};