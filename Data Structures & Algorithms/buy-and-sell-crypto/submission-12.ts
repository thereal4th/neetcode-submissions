class Solution {

    //previous two-pointer solution was wrong (even though it passed all tests)
    //two pointer approach is fundamentally incompatible with this problem
    //it will fail at arrays such as [10, 20, 2, 5] which weren't in the tests

    //this approach is optimal
    maxProfit(prices: number[]): number {
        let minPrice = Infinity;
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {
            const currentPrice = prices[i];

            if (currentPrice < minPrice) {
                minPrice = currentPrice;
            } else {
                const currentProfit = currentPrice - minPrice;
                if (currentProfit > maxProfit) {
                    maxProfit = currentProfit;
                }
            }
        }

        return maxProfit;
    }
}