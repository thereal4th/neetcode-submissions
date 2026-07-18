import heapq

class Solution:
    def minInterval(self, intervals: List[List[int]], queries: List[int]) -> List[int]:
        # 1. Sort intervals by their start time
        intervals.sort(key=lambda x: x[0])
        
        # 2. Prepare queries: store (value, original_index) and sort by value
        # We need the original index to place the answers in the correct order later.
        sorted_queries = sorted((q, i) for i, q in enumerate(queries))
        
        # Min-Heap will store tuples: (interval_length, right_end)
        # Python's heap sorts by the first element, so the smallest length will be at the top.
        min_heap = []
        
        # Initialize result array with -1
        res = [-1] * len(queries)
        
        i = 0 # Pointer to iterate through the sorted intervals
        
        # 3. Iterate through each query in increasing order (Sweep Line)
        for q, idx in sorted_queries:
            
            # Add all intervals that start at or before the current query point 'q'
            while i < len(intervals) and intervals[i][0] <= q:
                l, r = intervals[i]
                length = r - l + 1
                heapq.heappush(min_heap, (length, r))
                i += 1
            
            # Remove intervals from the heap that are invalid because they end before 'q'
            while min_heap and min_heap[0][1] < q:
                heapq.heappop(min_heap)
            
            # The top of the heap is now the shortest interval that covers 'q'
            if min_heap:
                res[idx] = min_heap[0][0]
                
        return res