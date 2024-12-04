/**
 * SEARCH THE ELEMENT IN AN ARRAY
 * This is linear searching algorithm for find element in an array
 * @param {*} arr 
 * @param {*} key 
 */
// region Linear Search
function findElement(arr: [], key: number): number {
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
// region Insert Item End
function insertElement(arr: number[], value: number): void {
    if (!value) return;
    // Increaments the length for adding element
    arr.length += 1;
    // last index after increment of the array size
    const lastIndex: number = arr.length - 1;
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
// region Insert Item Any Position
function insertElementToAnyPosition(arr: number[], value: number, positionIndex: number): number[] {
    if (!value) return arr;

    // last index after increment of the array size
    const lastIndex: number = arr.length - 1;

    // Shifting the element to the right
    for (let i = lastIndex; i > positionIndex; i--) {
        arr[i] = arr[i - 1];
    }
    
    // Adding the element into the specified position
    arr[positionIndex] = value;

    // Return the new array
    return arr;
}


/**
 * DELETE ELEMENT IN THE ARRAY
 * Delete element by any elment given to the function
 * @param {*} arr 
 * @param {*} value 
 */
function deleteAnyElement(arr: [], value: number): void | number {
    // Find the index of the element to be deleted
    const arraySize: number = arr.length;

    // Function for finding the index of the element to be deleted
    function findElementIndex(arr: [], arrSize: number, value: number): number {
        for (let i: number = 0; i < arrSize; i++) {
            if (arr[i] === value) {
                return i;
            }
        }

        return -1;
    }

    // Find the index of the element to be deleted
    // Tried to found the index becuase have to shifting from found index
    const foundIndex: number = findElementIndex(arr, arraySize, value);

    if (foundIndex === -1) {
        console.log("Element not found!");
        return value;
    }

    // Have to shifting the element to the left
    for (let i: number = foundIndex; i < arraySize - 1; i++) {
        arr[i] = arr[i + 1];
    }

    // Decrement the length of the array
    arr.length -= 1;
}


// Try with findElement...
let myArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const value: number = 1;

// deleteAnyElement(myArray as [], value);
insertElementToAnyPosition(myArray, 10, 2);
console.log('Elements after insert - ', myArray);

// console.log('Elements after delete - ', myArray);