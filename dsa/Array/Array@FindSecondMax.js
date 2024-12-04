/**
 * MINIMUL WAY OF SOLVE THE PROBLEM OF FINDING THE SECOND LARGEST VALUE IN AN ARRAY
 * This is not most efficient way to find the second largest value in an array
 * It Used the two for loop to find the second largest value in an array
 * @param {*} myArr 
 * @returns 
 */
function findSecondLargestValue2(myArr) {
    const arrSize = myArr.length;
    const lastIndex = arrSize - 1;

    // initilized supposed secondMax and maxValue
    let secondMax = myArr[0];
    let maxVal = myArr[lastIndex];

    // Loop to find the max value
    for (let i = 0; i < arrSize; i++) {
        if (maxVal < myArr[i]) {
            maxVal = myArr[i];
        }
    }

    // Loop to ignore the maxValue and find the second max value
    for (let j = 0; j < arrSize; j++) {
        if (maxVal === myArr[j]) continue;

        if (secondMax < myArr[j]) {
            secondMax = myArr[j];
        }
    }

    return secondMax;
}

/**
 * FINDING THE SECOND LARGEST VALUE IN AN ARRAY
 *  Made with Efficient Way of Solving this problem
 *  Solved with O(1) time complexity | O(n) space complexity
 *  Solve with Single Loop
 * @param {*} myArr 
 * @returns 
 */
function findSecondLargestValue(myArr) {
    const arrSize = myArr.length;
    const lastIndex = arrSize - 1;

    // initilized supposed secondMax and maxValue
    let secondMax = myArr[0];
    let maxVal = myArr[lastIndex];

    // loop through the array
    // compare the value with max value, if the value is greater than max value
    // then assign the value to the max value and assign the max value to the second max value
    for (let i = 0; i < arrSize; i++) {
        if (myArr[i] > maxVal) {
            secondMax = maxVal; // 5, 5 = 5
            maxVal = myArr[i]; // 5, 7 = 7

            // if the value is greater than second max value and less than max value
            // then assign the value to the second max value
        } else if (myArr[i] > secondMax && myArr[i] < maxVal) {
            secondMax = myArr[i]; // 5
        }
    }

    return secondMax;
}

// Test Cases to Run..
const myArr = [3, 5, 7, 1, 4];
const result = findSecondLargestValue(myArr);
console.log('Second Max - ', result);