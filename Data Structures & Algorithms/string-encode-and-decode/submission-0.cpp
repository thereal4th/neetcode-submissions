class Solution {
public:

    string encode(vector<string>& strs) {
        string encoded;
        for (const string& str : strs) {
            encoded += to_string(str.length()) + "#" + str;
        }
        return encoded;
    }

    vector<string> decode(string s) {
        vector<string> decoded;
        int i = 0;
        while (i < s.length()) {
            int j = i;
            // Find delimiter to get length
            while (s[j] != '#') {
                j++;
            }
            int len = stoi(s.substr(i, j - i)); // Get the length
            string word = s.substr(j + 1, len); // Extract the word
            decoded.push_back(word);
            i = j + 1 + len; // Move to the next string
        }
        return decoded;
    }
};
