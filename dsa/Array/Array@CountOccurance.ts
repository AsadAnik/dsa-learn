/**
 * COUNT THE OCCURRENCES OF AN ELEMENT
 * Input: An array and a value x.
 * Task: Count how many times x appears.
 * Example: [1, 2, 2, 3, 4, 2], x=2 → 3
 * Time Complexity: O(n) | Space Complexity: O(1)
 * @param arr 
 */
// region Count Occurances
function countArrayOccurance<T>(arr: T[], value: T): number {
    // Have to figure out the value that presents in the array how much..
    // loop throw the array and check the value is equal to the input value.
    // and possible equal input values to store in counts arr..
    let occuranceCounts: number = 0;
    const arrSize: number = arr.length;

    for (let i: number = 0; i < arrSize; i++) {
        if (arr[i] === value) {
            occuranceCounts++;
        }
    }

    return occuranceCounts;
}


/**
 * HASHES (OBJECT) FOR OCCURENCES OF AN ELEMENT
 * Input: An array.
 * Task: store into hash how many times x appears.
 * Time Complexity: O(n) | Space Complexity: O(k)
 * @param arr 
 * @returns 
 */
// region Hash Occurances
function countArrayOccurance2<T extends keyof string>(arr: T[]): Record<T, number> {
    // Have to figure out the value that presents in the array how much..
    const arrSize: number = arr.length;
    const occurances: Record<T, number> = {} as Record<T, number>;

    for (let i: number = 0; i < arrSize; i++) {
        if (occurances[arr[i]]) {
            occurances[arr[i]]++;
        } else {
            occurances[arr[i]] = 1;
        }
    }

    return occurances;
}


/**
 * MAPPED HASHES FOR OCCURENCES OF AN ELEMENT
 * Input: An array.
 * Task: store into hash how many times x appears.
 * Time Complexity: O(n) | Space Complexity: O(k)
 * @param arr 
 * @returns 
 */
// region Map Occurances
function countArrayOccurance3<T>(arr: T[]): Map<T, number> {
    // initiallize a map
    const arraySize: number = arr.length;
    const map = new Map<T, number>();

    for (let i: number = 0; i < arraySize; i++) {
        const key = arr[i];
        const value: number = (map.get(key) ?? 0) + 1;
        map.set(key, value);
    }
    return map;
}


// Testing the function
const myOccuranceArr: number[] = [1, 2, 2, 3, 4, 2];
const inputOccurance: number = 2;

const numbersOfOccurance: number = countArrayOccurance<number>(myOccuranceArr, inputOccurance);
const numbersOfOccurance2: Record<string, number> = countArrayOccurance2<number>(myOccuranceArr);
const numbersOfOccurance3: Map<number, number> = countArrayOccurance3<number>(myOccuranceArr);

console.log('OCCURANCES NUMBERS COUNT - ', numbersOfOccurance);
console.log('OCCURANCE NUMBERS HASH (OBJ) - ', numbersOfOccurance2);
console.log('OCCURANCE NUMBERS HASH (MAP) - ', numbersOfOccurance3);