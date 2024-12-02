// region ROTATION
/**
 * RIGHT ROTATION WITH NESTED FOR LOOP
 * Rotation of the array using nested for loop 
 * @param {*} arr 
 * @param {*} d 
 */
// region Nested Loop
function rotateArr(arr, d) {
    let n = arr.length;

    // Repeat the rotation d times
    for (let i = 0; i < d; i++) {
        // Right rotate the array by one position
        // Store the last element in a temporary variable
        // last = 6 -> 1st; 
        // last = 5 -> 2nd;
        let last = arr[n - 1];

        // [6, 5, 4, 3, 2, 1]; 
        // Shifting elements by one position to the right
        // - [5, 4, 3, 2, 1, 1] -> 1st; 
        // - [4, 3, 2, 1, 1, 1] -> 2nd;  
        for (let j = n - 1; j > 0; j--) {
            arr[j] = arr[j - 1];
        }

        // assign the last element to the first position
        // 1st -> [5, 4, 3, 2, 1, 6];
        // 2nd -> [4, 3, 2, 1, 6, 5];
        arr[0] = last;
    }
}


/**
 * LEFT ROTATION WITH NESTED FOR LOOP
 * Rotation of the array using nested for loop
 * @param {*} arr 
 * @param {*} d 
 */
function rotateLeftArrWithNestedLoop(arr, d) {
    let N = arr?.length;
    const firstElementIndex = 0;
    const lastElementIndex = N - 1;

    // Peeking the first element of the array
    for (let i = 0; i < d; i++) {
        const firstElement = arr[firstElementIndex];
        // console.log('HERE IS I -- ', firstElement);

        // Shifting elements by one position to the left
        for (let j = 0; j < lastElementIndex; j++) {
            // console.log(arr[j], arr[j + 1]);
            arr[j] = arr[j + 1];
        }

        // assign the first element to the last position
        arr[lastElementIndex] = firstElement;
    }
}


/**
 * RIGHT ROTATE ARRAY WITH TEMP ARRAY
 * The temp array rotation
 * @param {*} arr 
 * @param {*} d 
 */
// region Temp Array
function rotaterrRightWithTempArr(arr, d) {
    let n = arr.length; // n = 6; d =2

    // Storing rotated version of array
    let temp = new Array(n); // temp = [] -> [5, 6] ->  [5, 6, 1, 2, 3, 4]

    // Copy last d elements to the front of temp
    for (let i = 0; i < d; i++) { // temp[0] = 5; temp[1] = 6;
        // [1, 2, 3, 4, 5, 6] = loop in [5, 6] = (lastLength - 2) + 0(i) = 5
        // [1, 2, 3, 4, 5, 6] = loop in [5, 6] = (lastLength - 2) + 1(i) = 6
        temp[i] = arr[n - d + i];
    }

    // Copy the first n - d elements to the back of temp
    for (let i = 0; i < n - d; i++) {// loop limit = (i < listLength - 2) = i < 4;
        // skip first 3 items (i + 2) [5, 6, (PEEK)] = (PEEK) = arr[i]
        // [5, 6, 1, 2, 3, 4]
        temp[i + d] = arr[i];
    }

    // Copying the elements of temp in arr
    // to get the final rotated array
    // [1, 2, 3, 4, 5, 6] = [5, 6, 1, 2, 3, 4]
    for (let i = 0; i < n; i++) {
        arr[i] = temp[i];
    }
}

/**
 * LEFT ROTATE ARRAY WITH TEMP ARRAY
 * The temp array rotation
 * @param {*} arr 
 * @param {*} d 
 */
function rotateLeftWithTempArr(arr, d) {
    let N = arr.length;

    // Storing rotated version of array
    const tempArr = new Array(N);

    // copy first elements parts to temp array
    for (let i = 0; i < N; i++) {
        tempArr[i] = arr[d + i];
    }

    // copy last elements parts to temp array
    for (let j = 0; j < d; j++) {
        tempArr[N - d + j] = arr[j];
    }

    // copy temp array to original array
    for (let k = 0; k < N; k++) {
        arr[k] = tempArr[k];
    }
}


/**
 * ROTATE RIGHT WITH DECLARATIVE WAY
 * @param {*} arr 
 * @param {*} d 
 */
// region Right Declarative
function rotateRightElementDeclarative(arr, d) {
    for (let i = 0; i < d; i++) {
        const lastElement = arr.pop();
        arr.unshift(lastElement);
    }
}

/**
 * ROTATE LEFT WITH DECLARATIVE WAY
 * @param {*} arr 
 * @param {*} d 
 */
//  region Left Declarative
function rotateLeftElementDeclarative(arr, d) {
    for (let i = 0; i < d; i++) {
        const firstElement = arr.shift();
        arr.push(firstElement);
    }
}


// region TEST
// Testing the function
let arr = [1, 2, 3, 4, 5, 6];
let d = 2;
console.log('DEFAULT - ', arr);
rotateLeftWithTempArr(arr, d);
console.log('ROTATE - ', arr);