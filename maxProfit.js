const maxProfit = function (prices) {
    let result = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        result = Math.max(result, prices[i] - min);
    }
    return result;
};

const getResult = maxProfit([7, 1, 5, 3, 6, 4]);

console.log('getResult', getResult);

// ** time complexity is O(n) and Space Complexity is O(1)
