// region REVERSE
/**
 * RESERVE AN ARRAY (For Loop)
 * @param {*} arr 
 */
function reverseForLoopArr(arr) {
    let N = arr.length - 1;

    // With For Loop..
    for (let i = 0; i < N; i++) {
        // [arr[startIndex], arr[endIndex]] = [arr[endIndex], arr[startIndex]];
        const temp = arr[i];
        arr[i] = arr[N];
        arr[N] = temp;
        N--;
    }
}


/**
 * REVERSE AN ARRAY (While Loop)
 * @param {*} arr 
 */
function reverseWhileLoopArr(arr) {
    // With While Loop..
    let startIndex = 0;
    let endIndex = arr.length - 1;

    while (startIndex < endIndex) {
        [arr[startIndex], arr[endIndex]] = [arr[endIndex], arr[startIndex]];

        // const temp = arr[startIndex];
        // arr[startIndex] = arr[endIndex];
        // arr[endIndex] = temp;

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
    arr.reverse();
}


const arr = [1, 2, 3, 4, 5, 6];
console.log('BEFORE - ', arr);
reverseForLoopArr(arr);
console.log('AFTER - ', arr);