/**
 * String Length Checker
 * Time Complexity: O(n)
 * Auxiliary space: O(1)
 * @params arr (Array)
 */
function StringLength(arr) {
    let lengthCounter = 0;
    while (arr[lengthCounter] !== undefined) {
        lengthCounter++;
    }
    return lengthCounter;
}

// Calling..
const myArr = [12, 11, 13, 15, 22, 6, 10, 4];
console.log(`My Array: ${myArr}`);
const lengthOfMyArr = StringLength(myArr);
console.log(`Length of my Array: ${lengthOfMyArr}`);