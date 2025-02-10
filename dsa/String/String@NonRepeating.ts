/**
 * Firt Non Repeating Character
 * 
 * This is not efficient way of solving the problem.
 * We ran twise loop as nested that is consuming much time.
 * Time Complexity: O(n^2)(Nested Loops)
 * We are counting the occurances of every character multiple times unnecessarily.
 * 
 * @params text {String}
 * @params myStr {String}
 */
function firstUniqueChar(myStr: string): string {
    for (let i = 0; i < myStr.length; i++) {
        let foundElement: boolean = false;

        for (let j = 0; j < myStr.length; j++) {
            if (i !== j && myStr[i] === myStr[j]) {
                foundElement = true;
                break;
            }
        }

        if (foundElement === false) {
            return myStr[i];
        }
    }

    return "None";
}

/**
 * Optimized Version Using a Single Loop
 * 
 * Time and Space Complexity Analysis
 * Time Complexity:
 *  1. The first loop iterates through the string to count occurances: O(n)
 *  2. The second loop finds the first character with count 1: O(n)
 * 
 * Space Complexity:
 *  O(1)(becuase we store at most 26 characteers in the object, assuming lowercase English letters)
 * 
 * @param myStr 
 * @returns 
 */
function firstUniqueCharOptimized(myStr: string): string {
    let result: Record<string, number> = {};

    for (let char of myStr) {
        if (result[char]) {
            result[char] = result[char] + 1;
        } else {
            result[char] = 1;
        }
    }

    for (let item in result) {
        if (result[item] === 1) {
            return item;
        }
    }

    return "None";
}

/**
 * Optimised Solution but used Map for Faster Lookup instead of object.
 * Performance as like same as optimized one.
 * @param myStr 
 * @returns 
 */
function firstUniqueCharOptimized2(myStr: string): string {
    let charCount = new Map<string, number>();

    for (let i = 0; i < myStr.length; i++) {
        charCount.set(myStr[i], (charCount.get(myStr[i]) || 0) + 1);
    }

    for (let i = 0; i < myStr.length; i++) {
        if (charCount.get(myStr[i]) === 1) {
            return myStr[i];
        }
    }

    return "None";
}

// Calling function, TEST Cases to Run
console.log("swiss - ", firstUniqueChar("swiss"));
console.log("aabbcc - ", firstUniqueChar("aabbcc"));

console.log("OPTIMIZED swiss - ", firstUniqueCharOptimized("swiss"));
console.log("OPTIMIZED aabbcc - ", firstUniqueCharOptimized("aabbcc"));

console.log("OPTIMIZED 2 swiss - ", firstUniqueCharOptimized2("swiss"));
console.log("OPTIMIZED 2 aabbcc - ", firstUniqueCharOptimized2("aabbcc"));
