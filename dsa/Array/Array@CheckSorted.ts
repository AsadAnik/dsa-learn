/**
 * CHECK THE ARRAY IS SORTED OR NOT
 * @param arr 
 */
function isArraySorted(arr: number[]): boolean {
    const arrSize: number = arr.length;

    // Write your Code here..
    console.log('ARRAY SIZE - ', arrSize);

    return false;
}

// Testing the function
const myArr1: number[] = [1, 2, 3, 4, 5];
const myArr2: number[] = [5, 4, 3, 2, 1];
const myArr3: number[] = [1, 2, 3, 4, 5, 6];
const myArr4: number[] = [6, 5, 4, 3, 2, 1];

const isSorted1: boolean = isArraySorted(myArr1);
const isSorted2: boolean = isArraySorted(myArr2);
const isSorted3: boolean = isArraySorted(myArr3);
const isSorted4: boolean = isArraySorted(myArr4);