/*
 * Programming Quiz: The Price is Right (6-3)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `prices`
 * - The value of the 1st, 3rd, and 7th elements should be doubled
 * - Your code should print `prices` to the console as an array. Do not iterate over the elements. 
 */
 
const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

// your code goes here

for (let p = 0; p < prices.length; p++) {
    if (p === 0) {
        prices[p] = prices[p] * 2;
    }
    
    else if (p === 2) {
        prices[p] = prices[p] * 2;
    }

    else if (p === 6) {
        prices[p] = prices[p] * 2;
    }
}

console.log(prices);