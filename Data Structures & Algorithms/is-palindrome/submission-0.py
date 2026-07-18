class Solution:
    def isPalindrome(self, s: str) -> bool:
        cleaned2 = re.sub(r'[^a-zA-Z0-9]', '', s).strip().lower()

        r = len(cleaned2)-1

        for l in range(len(cleaned2)):
            if cleaned2[l] == cleaned2[r]:
                r-=1
                continue
            else: return False

        return True
