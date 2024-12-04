// Type for the end result for the  min and max element
type MinMax = {
    minElement: number,
    maxElement: number
}

/**
 * FIND THE MIN AND MAX ELEMENT IN AN ARRAY
 * searching the minimum and maximum element in an array
 * @param {*} arr 
 * @returns 
 */
function findMinMaxElement(arr: number[]): MinMax {
    // define supposed min and max element
    const N: number = arr.length;
    let minElement: number = arr[0]; // 1
    let maxElement: number = arr[N - 1]; // 10

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

    // returned min max element.. 
    return { minElement, maxElement } as MinMax;
}


// give me a shuffle array
const myArr: number[] = [2, 3, 4, 1, 5, 6, 7, 8, 9, 10];
const minMaxResult: MinMax = findMinMaxElement(myArr);
console.log('Min Max Result - ', minMaxResult);