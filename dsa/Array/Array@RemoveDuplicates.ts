/**
 * REMOVE DUPLICATES FROM AN ARRAY
 * Time Complexity: O(n) [since we traverse the array once.]
 * Space Complexity: O(1) [as we do not use extra space and modify the array in place.]
 * @param arr 
 */
function removeDuplicates(arr: number[]): number {
    const arrSize: number = arr.length;
    let i: number = 0;

    // Iterate through the array
    for (let j: number = 0; j < arrSize; j++) {
        // If the current element is not equal to the next element, move it to the next position
        if (arr[i] !== arr[j]) {
            i = i + 1; // Move the pointer for unique elements
            arr[i] = arr[j]; // Copy the unique value to the next position
        }
    }

    // Update the lengthh of the array to remove duplicates
    arr.length = i + 1;
    return i + 1;
}

/**
 * REMOVE DUPLICATES FROM AN ARRAY WITH USING SET
 * @param arr 
 */
function removeDuplicates2(arr: number[]): number[] {
    const mySet = new Set(arr);
    return Array.from(mySet);
}
 

// Test Cases:
const duplicateArray = [1, 2, 2, 3, 4, 4, 5];
const newLength: number = removeDuplicates(duplicateArray);
console.log(duplicateArray, newLength); // Output: [1, 2, 3, 4, 5], 5

// with Set..
// const result = removeDuplicates2(duplicateArray);
// console.log(result); // Output: [1, 2, 3, 4, 5]