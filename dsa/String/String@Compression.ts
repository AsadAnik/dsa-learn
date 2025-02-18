/**
 * String Compression (Run-Length Encoding)(Brute Force Approach)
 * This is not efficient way to solve this problem.
 * 
 * Concept:
 *  - We iterate through the string and count consecutive occurences of each character.
 *  - Append the character followed by its count.
 *  - If a character appers only once, we append the character itself.
 * 
 * Time Complexity: O(n^2)(if we use string concatenation directly, which create new strings each time)
 * Space Complexity: O(n)(for storing the compressed string)
 * 
 * @params text {String}
 * @params myStr {String}
 */
// region Brute Force
function compressStringBruteForce(myStr: string): string {
    let compressedStr: string = '';
    let i: number = 0;

    while (i < myStr.length) {
        let count: number = 1;

        // Count consecutive duplicates
        while ((i + 1) < myStr.length && (myStr[i] === myStr[i + 1])) {
            count++;
            i++;
        }

        // Append character and count
        // compressedStr = compressedStr + myStr[i] + (count <= 1 ? '' : count);
        compressedStr += myStr[i] + (count <= 1 ? '' : count);
        i++;
    }

    return compressedStr;
}

/**
 * Using For Loop for Compression to Optimized solution.
 * 
 * Concept:
 *  - Iterate through the string using a for loop
 *  - Use a count variable to track consecutive occurences of each character
 *  - Append the character and its count to the compressed string
 * 
 * Time Complexity: O(n)(we traverse the string once)
 * Space Complexity: O(n)(for storing the compressed string)
 * 
 * @param myStr 
 * @returns 
 */
// region Single For Loop
function compressStringBruteForce2(myStr: string): string {
    let compressedStr: string = '';
    let count: number = 1;

    for (let i = 0; i < myStr.length; i++) {
        // If next character is the same, increase count
        if (i + 1 < myStr.length && myStr[i] === myStr[i + 1]) {
            count++;
        } else {
            // Apend character and count to result string
            // count 1 made empty string if not needed to show one occurance
            compressedStr += myStr[i] + (count <= 1 ? '' : count);
            count = 1; // Reset count for next character
        }
    }

    // Return the compressed string only if it's shorter then the original string
    return compressedStr.length <= myStr.length ? compressedStr : myStr;
}

/**
 * Optimized Approach (Using an Array - Faster)
 * 
 * Concept:
 *  - Use an array (result[]) instead of += (string concatenation)
 *  - We already convered this method
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 * @param myStr 
 */
// region Faster Array
function compressStringFasterArray(myStr: string): string {
    let result: string[] = [];
    let count: number = 1;

    for (let i = 0; i < myStr.length; i++) {
        if (i + 1 < myStr.length && myStr[i] === myStr[i + 1]) {
            count++;
        } else {
            result.push(myStr[i] + (count <= 1 ? '' : count.toString()));
            count = 1;
        }
    }

    return result.join("").length <= myStr.length ? result.join("") : myStr;
}

/**
 * Using a Two-Pointer Approach (In-Place Modification)
 * The Most Effective Solution
 * 
 * Concept:
 *  - Uses a two-pointer technique to modify the original string in-place
 *  - This approach is usefull if the string is represented as an array of characters (like in C++ or Java)
 *  - Since JavaScript strings are immutable, we can't modify them in-place, so this is more theoretical
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)(Doesn't store additional arrays or strings)
 * 
 * @param myStr 
 */
// region Two Pointers
function compressStringInPlace(myStr: string) {
    if (myStr.length === 0) return myStr;

    let chars = myStr.split(''); // Convert string to array of characters to each characters
    let writeIdx: number = 0;
    let count: number = 1;

    for (let readIdx = 0; readIdx < chars.length; readIdx++) {
        if (readIdx + 1 < chars.length && chars[readIdx] === chars[readIdx + 1]) {
            count++;
        } else {
            chars[writeIdx++] = chars[readIdx];

            if (count > 1) {
                for (let digit of count.toString()) {
                    chars[writeIdx++] = digit;
                }
            }
            count = 1; // reset the counter for next character
        }
    }

    return chars.slice(0, writeIdx).join('');
}

// Calling function
// Brute Force Approach
console.log('stringCompression', compressStringBruteForce('aaabbc')); // a3b3c
console.log('stringCompression', compressStringBruteForce('abc')); // abc
console.log('stringCompression', compressStringBruteForce('zbbbcdd')); // zb3cd2

console.log('\n');

// Single For Loop Approach
console.log('stringCompression', compressStringBruteForce2('aaabbc')); // a3b3c
console.log('stringCompression', compressStringBruteForce2('abc')); // abc
console.log('stringCompression', compressStringBruteForce2('zbbbcdd')); // zb3cd2

console.log('\n');

// Faster Array Approach
console.log('stringCompression', compressStringFasterArray('aaabbc')); // a3b3c
console.log('stringCompression', compressStringFasterArray('abc')); // abc
console.log('stringCompression', compressStringFasterArray('zbbbcdd')); // zb3cd2

console.log('\n');

// Two Pointers Approach
console.log('stringCompression', compressStringInPlace('aaabbc')); // a3b3c
console.log('stringCompression', compressStringInPlace('abc')); // abc
console.log('stringCompression', compressStringInPlace('zbbbcdd')); // zb3cd2

/**
 * CONCLUSION: --------------
 * 1️⃣ If using a string, go with the array-based approach.
 * 2️⃣ If modifying a character array (mutable), go with in-place compression.
 * 3️⃣ Avoid += concatenation (Brute force) for large inputs.
 */