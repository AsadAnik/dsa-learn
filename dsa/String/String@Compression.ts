/**
 * String Compression (Run-Length Encoding)(Brute Force Approach)
 * This is not efficient way to solve this problem.
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

// Calling function
console.log('stringCompression', compressStringBruteForce('aaabbc'));
console.log('stringCompression', compressStringBruteForce('abc'));
console.log('stringCompression', compressStringBruteForce('zbbbcdd'));