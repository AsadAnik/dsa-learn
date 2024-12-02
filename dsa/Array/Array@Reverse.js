// region REVERSE
/**
 * RESERVE AN ARRAY (For Loop)
 * @param {*} arr 
 */
function reverseForLoopArr(arr) {
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
function reverseWhileLoopArr(arr) {
    // With While Loop..
    // start index will be 0 and end index will be arr.length - 1
    let startIndex = 0;
    let endIndex = arr.length - 1;

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
function reverseInModernnWay(arr) {
    // Declarative Way..
    // With Modern Way.. the reverse() method reverses an array in place.
    // The first array element becomes the last, and the last array element becomes the first.
    // The reverse() method overwrites the original array.
    // This is the fastest way to reverse an array.
    arr.reverse();
}

// region TEST
// Testing the function
const arr = [1, 2, 3, 4, 5, 6];
console.log('BEFORE - ', arr);
reverseForLoopArr(arr);
console.log('AFTER - ', arr);