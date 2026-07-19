class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {

        //two pointer pattern
        let left = 0;
        let right = prices.length - 1;

        const limit = prices.length - 1;

        let buy = {
            price: prices[left],
            index: left,
        }
        let sell = {
            price: prices[right],
            index: right,
        }

        while(left < limit){

            if(prices[left] < buy.price && left < sell.index){
                buy.price = prices[left];
                buy.index = left;
            }
            if(prices[right] > sell.price && buy.index < right){
                sell.price = prices[right];
                sell.index = right;
            }

            left++;
            right--;
        }

        const profit = sell.price - buy.price;
        
        if(profit <= 0){
            return 0
        }
        else{
            return profit;
        }

    }
}
