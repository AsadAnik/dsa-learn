/**
 * SEARCH THE ELEMENT IN AN ARRAY
 * This is linear searching algorithm for find element in an array
 * @param {*} arr 
 * @param {*} key 
 */
function findElement(arr, key) {
    const N = arr.length;

    for (let i = 0; i < N; i++) {
        if (arr[i] == key) {
            return i;
        }
    }

    return -1;
}


/**
 * INSERT ELEMENT IN THE ARRAY
 * Firstly this will create a new space in the end of the array
 * Finally this will insert the elemment at very last of the array
 * @param {*} arr 
 * @param {*} value 
 * @param {*} position 
 */
function insertElement(arr, value) {
    if (!value) return;
    // Increaments the length for adding element
    arr.length += 1;
    // last index after increment of the array size
    const lastIndex = arr.length - 1;
    // Adding the element into the last position
    arr[lastIndex] = value;
}


/**
 * INSERT ELEMENT IN THE ARRAY AT ANY POSITION
 * It will be crating extra space in the end of the array
 * Then it will shift the element to the right
 * After shifting, it will add the element into the position
 * @param {*} arr 
 * @param {*} value 
 * @param {*} positionIndex 
 * @returns 
 */
function insertElementToAnyPosition(arr, value, positionIndex) {
    if (!value) return;

    // Increaments the length for adding element
    arr.length += 1;

    // last index after increment of the array size
    const lastIndex = arr.length - 1;

    // Shifting the element to the right
    for (let i = lastIndex; i > positionIndex; i--) {
        arr[i] = arr[i - 1];
    }
    
    // Adding the element into the last position
    arr[positionIndex] = value;
}

// Try with findElement...
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const key = 5;

insertElementToAnyPosition(myArr, 55, 2);
console.log('New Element Added to the array here - ', myArr);

// const index = findElement(myArr, key);

// if (index === -1) {
//     console.log(`Element ${key} is not found`);
// } else {
//     console.log(`Element ${key} is found at index ${index}`);
// }
