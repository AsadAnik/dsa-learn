/**
 * Longest Substring without Repeating Characters (Brute Force Approach)
 * This is not efficient appoach of doing..
 * 
 * Time Complexity: O(n^3)
 * Space Complexity: O(1)
 * 
 * Explaination:
 *  1. Genrate all substrings using two loops.
 *  2. Check if the substring has all unique characters.
 *  3. Keep track of the longest unique substring.
 * 
 * @params text {String}
 * @params myStr {String}
 */
// region Brute Force
function longestUniqueSubstringBruteForce(myStr: string): Record<string, (number | string)> {
    let maxLenth: number = 0;
    let longesetSub: string = "";

    for (let i = 0; i < myStr.length; i++) {
        let uniqueChars = new Set();

        for (let j = i; j < myStr.length; j++) {
            if (uniqueChars.has(myStr[j])) {
                break;
            }
            uniqueChars.add(myStr[j]);

            let currentSub = myStr.substring(i, j + 1);
            if (currentSub.length > maxLenth) {
                maxLenth = currentSub.length;
                longesetSub = currentSub;
            }
        }
    }

    return { maxLenth, longesetSub };
}


/**
 * Longest Substring without Repeating Characters (Sliding Window Approach)
 * This is efficient way of solving this problem.
 * Instead of checking all substrings, we use a dynamic window.
 * 
 * Explaination:
 *  1. Expanding window by sliding characters
 *  2. If a duplicate is found, shrink the window from the left
 *  3. Track the longest substring without duplicates
 * 
 * Time Complexity: O(n)(Each character is processed at most twice)
 * Space Complexity: O(min(n, 26))(Set stores at most 26 unique letters)
 * 
 * @param myStr 
 * @returns 
 */
// region Sliding Window
function longesetUniqueSubstringSlidingWindow(myStr: string): Record<string, (number | string)> {
    let set = new Set();
    let maxLength: number = 0, left: number = 0, startIndex: number = 0;
    let longestSub: string = "";

    for (let right = 0; right < myStr.length; right++) {
        while (set.has(myStr[right])) {
            set.delete(myStr[left]);
            left++;
        }

        set.add(myStr[right]);

        let currentLength = right - left + 1;
        if (currentLength > maxLength) {
            maxLength = currentLength;
            startIndex = left;
        }
    }

    longestSub = myStr.substring(startIndex, startIndex + maxLength);
    return { maxLength, longestSub };
}

// **Test Cases**
console.log(longestUniqueSubstringBruteForce("abcabcbb"));  // Output: 3, "abc"
console.log(longestUniqueSubstringBruteForce("bbbbb"));     // Output: 1, "b"
console.log(longestUniqueSubstringBruteForce("pwwkew"));    // Output: 3, "wke"
console.log(longestUniqueSubstringBruteForce("dvdf"));      // Output: 3, "vdf"

console.log('\n');

console.log(longesetUniqueSubstringSlidingWindow("abcabcbb"));  // Output: 3, "abc"
console.log(longesetUniqueSubstringSlidingWindow("bbbbb"));     // Output: 1, "b"
console.log(longesetUniqueSubstringSlidingWindow("pwwkew"));    // Output: 3, "wke"
console.log(longesetUniqueSubstringSlidingWindow("dvdf"));      // Output: 3, "vdf"