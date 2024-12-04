/**
 * FIND THE MIN AND MAX ELEMENT IN AN ARRAY
 * searching the minimum and maximum element in an array
 * @param {*} arr 
 * @returns 
 */
function findMinMaxElement(arr) {
    // define supposed min and max element
    const N = arr.length;
    let minElement = arr[0]; // 1
    let maxElement = arr[N - 1]; // 10

    // loop through the array and compare with min and max element
    // placed min and max element to the variables by comparing
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