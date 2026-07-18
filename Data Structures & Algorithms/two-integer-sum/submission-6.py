class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        # Dictionary to store value: index pairs
        prev_map = {}

        for i, n in enumerate(nums):
            # Calculate the value needed to reach the target
            diff = target - n
            
            # Check if this complement has already been seen
            if diff in prev_map:
                # Return the stored index and the current index
                return [prev_map[diff], i]
            
            # Store the current number and its index in the map
            prev_map[n] = i