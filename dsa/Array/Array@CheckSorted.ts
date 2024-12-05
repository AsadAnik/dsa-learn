/**
 * CHECK THE ARRAY IS SORTED OR NOT
 * This will only checks the array is sorted on ascending order.
 * Time Complexity: O(n) | Space Complexity: O(1)
 * @param arr 
 */
function isArraySortedAsc(arr: number[]): boolean {
    const arrSize: number = arr.length;

    for (let i:number = 0; i < arrSize; i++) {
        // Check Ascending Order In Array Elements..
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }

    return true;
}


/**
 * CHECK THE ARRAY IS SORTED OR NOT ENTIRELY
 * This will checks all aspacts of sorted array.
 * Time Complexity: O(n) | Space Complexity: O(1)
 * @param arr 
 * @returns 
 */
function isArraySorted(arr: number[], mode: 'asc' | 'desc' = 'asc'): boolean {
    const arrSize: number = arr.length;

    for (let i:number = 0; i < arrSize - 1; i++) {
        // Check Ascending Order In Array Elements..
        if (arr[i] > arr[i + 1] && mode === 'asc') {
            return false;

            // Check Descending Order In Array Elements..
        } else if (arr[i] < arr[i + 1] && mode === 'desc') {
            return false;
        }
    }

    return true;
}


// Testing the function
const myArr1: number[] = [1, 2, 3, 4, 5];
// const myArr2: number[] = [5, 4, 3, 2, 1];
// const myArr3: number[] = [1, 2, 3, 4, 5, 6];
// const myArr4: number[] = [6, 5, 4, 3, 2, 1];

const isSorted: boolean = isArraySorted(myArr1, 'asc');
console.log('IS SORTED - ', isSorted);