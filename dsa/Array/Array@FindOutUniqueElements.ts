/**
 * FIND OUT THE UNIQUE ELEMENTS (Imperative Way)
 * Time Complexity: O(n2) [since we traverse the array once.]
 * Space Complexity: O(n) [as we do not use extra space and modify the array in place.]
 * @param arr 
 */
function findOutUniqueElements(arr: number[]): number[] {
    const arrSize: number = arr.length;
    const uniqueElements: number[] = [];

    for (let i: number = 0; i < arrSize; i++) {
        let isDuplicate: boolean = false;

        // Code here..
        for (let j: number = 0; j < arrSize; j++) {
            if (i !== j && arr[i] === arr[j]) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            uniqueElements.push(arr[i]);
        }
    }

    return uniqueElements;
}

/**
 * Declarative Way of doing the Find Elements
 * @param arr 
 */
function findOutUniqueElements2(arr: number[]): number[] {
    return arr.filter((item, _index, selfArr) => arr.indexOf(item) === selfArr.lastIndexOf(item)) ?? [];
}


// Test Cases: 
const arrayWithUniqueAndCommons = [1, 2, 2, 3, 4, 4, 5];
console.log('Array With Commons - ', arrayWithUniqueAndCommons); // Output: [1, 2, 3, 4, 5]

const uniqueElements = findOutUniqueElements(arrayWithUniqueAndCommons);
console.log('Array Only Uniques - ', uniqueElements); // Output: [1, 2, 3, 4, 5]

const uniqueElements2 = findOutUniqueElements2(arrayWithUniqueAndCommons);
console.log('Array Uniques 2 - ', uniqueElements2);