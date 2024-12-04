// region REVERSE
/**
 * RESERVE AN ARRAY (For Loop)
 * @param {*} arr 
 */
function reverseForLoopArr(arr: number[]): void {
    let N = arr.length - 1;

    // With For Loop..
    for (let i = 0; i < N; i++) {
        // swap the elements, i.e. swap(arr[start], arr[end])
        // Short way to swap two variables in JavaScript
        // [arr[startIndex], arr[endIndex]] = [arr[endIndex], arr[startIndex]];
        
        // Or, we can use this way also.. for swapping
        // The Traditional Way of swapping two variables in JavaScript
        const temp = arr[i];
        arr[i] = arr[N];
        arr[N] = temp;

        // decrease element it will be decrease the array length to next iteration
        N--;
    }
}


/**
 * REVERSE AN ARRAY (While Loop)
 * @param {*} arr 
 */
function reverseWhileLoopArr(arr: number[]): void {
    // With While Loop..
    // start index will be 0 and end index will be arr.length - 1
    let startIndex: number = 0;
    let endIndex: number = arr.length - 1;

    while (startIndex < endIndex) {
        // swap the elements, i.e. swap(arr[start], arr[end])
        // Short way to swap two variables in JavaScript
        [arr[startIndex], arr[endIndex]] = [arr[endIndex], arr[startIndex]];

        // Or, we can use this way also.. for swapping
        // const temp = arr[startIndex];
        // arr[startIndex] = arr[endIndex];
        // arr[endIndex] = temp;

        // start will be increase and end will be decrease
        startIndex++;
        endIndex--;
    }
}


/**
 * REVERSESE AN ARRAY (Modern Way)
 * @param {
 * } arr 
 */
function reverseInModernnWay(arr: number[]): void {
    // Declarative Way..
    // With Modern Way.. the reverse() method reverses an array in place.
    // The first array element becomes the last, and the last array element becomes the first.
    // The reverse() method overwrites the original array.
    // This is the fastest way to reverse an array.
    arr.reverse();
}

// region TEST
// Testing the function
const myArr: number[] = [1, 2, 3, 4, 5, 6];
console.log('BEFORE - ', myArr);
reverseForLoopArr(myArr);
console.log('AFTER - ', myArr);