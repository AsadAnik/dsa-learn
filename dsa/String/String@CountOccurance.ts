/**
 * Count occurances of each character in a string.
 * 
 * This solution works, but it's not the most efficient. Let's analyze it and improve it.
 * Issues with this approach
 *  1. Time Complexity: O(n^2)(Nested Loops)
 *      * We're iterating over the string twice using two for loops, which makes it inefficient for large inputs.
 * 
 *  2. Redundent Counting
 *      * We are counting the occurances of every character multiple times unnecessarily.
 * 
 * @params myStr {String}
 */
// region Brute Force
function countString(myStr: string): Record<string, number> {
    let result: Record<string, number> = {};

    for (let i = 0; i < myStr.length; i++) {
        let counter: number = 0;

        for (let j = 0; j < myStr.length; j++) {
            // console.log(`${i} = ${myStr[i]} - ${myStr[j]}`);
            if (myStr[i] === myStr[j]) {
                counter++;
                result[myStr[i]] = counter;
            }
        }
    }

    return result;
}

/**
 * Instead of using nested loops, we can use a single pass with a HashMap (object in JS)
 * 
 * Why is this better ?
 *  1. Time Complexity: O(n)(Iterates once over the string)
 *  2. Space Complexity: O(1)(Since we store only 26 lowercase letters in the worst case)
 *  3. Clear and More Readable Code
 * 
 * @param myStr 
 */
// region By Hash-Map
function countStringOptimized(myStr: string): Record<string, number> {
    let result: Record<string, number> = {};

    for (let char of myStr) {
        // result[char] = (result[char] || 0) + 1;

        if (result[char]) {
            result[char] = result[char] + 1;
        } else {
            result[char] = 1;
        }
    }

    return result;
}

/**
 * The Alternative Solution with For Loop
 * Same Performance as like the Optimized one.
 * @param myStr 
 * @returns 
 */
// region By Hash-Map
function countStringOptimized2(myStr: string): Record<string, number> {
    let result: Record<string, number> = {};

    for (let i = 0; i < myStr.length; i++) {
        if (result[myStr[i]]) {
            result[myStr[i]] = result[myStr[i]] + 1;
        } else {
            result[myStr[i]] = 1;
        }
    }

    return result;
}

// Calling function
const myCountInputText = "hello";
const countResult = countString(myCountInputText);
console.log(countResult);

const countOptimizedResult = countStringOptimized(myCountInputText);
console.log(countOptimizedResult);

const countOptimizedResult2 = countStringOptimized2(myCountInputText);
console.log(countOptimizedResult2);