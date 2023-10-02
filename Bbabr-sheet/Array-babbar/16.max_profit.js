/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let max_profit = 0
    let min_price = prices[0]
    //Bruteforce = o(n2)
    // for(let i = 0;i<prices.length;i++){
    // for(let j = i+1;j<prices.length;j++){
    //         if(prices[j]-prices[i]>max_profit){
    //           max_profit =prices[j]-prices[i]
    //         }
    //      max_profit = Math.max(max_profit,prices[j]-prices[i])
    //     }
    // }

    // WO/ bruteforce
    for(let i = 0;i<prices.length;i++){
        min_price = Math.min(min_price,prices[i])
        max_profit = Math.max(prices[i]-min_price,max_profit) 
       }
       return max_profit

};