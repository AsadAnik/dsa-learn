/**
 * MOVE ZEROS TO END OF AN ARRAY
 * Time Complexity: O(n) [since we traverse the array once.]
 * Space Complexity: O(1) [as we do not use extra space and modify the array in place.]
 * @param arr 
 */
function moveZeroToEnd(arr: number[]): number {
    const arrSize: number = arr.length;
    // Write your code here..


    return arrSize;
}


// Test Cases:
const arrayWithZero = [1, 2, 2, 3, 4, 4, 5];
moveZeroToEnd(arrayWithZero);
console.log(arrayWithZero); // Output: [1, 2, 3, 4, 5]