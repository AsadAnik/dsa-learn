/**
 * FIND THE MIN AND MAX ELEMENT IN AN ARRAY
 * @param {*} arr 
 * @returns 
 */
function findMinMaxElement(arr) {
    const N = arr.length;
    let minElement = arr[0]; // 1
    let maxElement = arr[N - 1]; // 10

    for (let i = 0; i < N; i++) {
        if (minElement > arr[i]) {
            minElement = arr[i];
        }

        if (maxElement < arr[i]) {
            maxElement = arr[i];
        }
    }

    return { minElement, maxElement };
}


// give me a shuffle array
const myArr = [2, 3, 4, 1, 5, 6, 7, 8, 9, 10];
const minMaxResult = findMinMaxElement(myArr);
console.log('Min Max Result - ', minMaxResult);