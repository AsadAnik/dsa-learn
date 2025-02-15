/**
 * Check If Two Strings are Anagrams
 * Input: Two strings
 * Task: Return true if one string is an anagram of the other.
 * Example:
 *  ✅ "listen", "silent" → true
 *  ❌ "hello", "world" → false
 * 
 * Solution:
 *  1. Convert both strins to lowercase (to handle case insensitivity)
 *  2. Remove any spaces (if needed)
 *  3. Sort th characters of both strings.
 *  4. Compare the sorted versions. 
 *      If they are equal, return true;
 *      Otherwise, return false;
 * 
 * @params text {String}
 * @params myStr {String}
 */
function checkAnagrams(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) return false;

    const str1Original = str1.toLowerCase().trim();
    const str2Original = str2.toLowerCase().trim();

    if (str1Original.split('').sort().join('') === str2Original.split('').sort().join('')) {
        return true;
    } else {
        return false;
    }
}

/**
 * Improvements & Optimized Code
 *  1. No need for an extra variable -> Directly apply .toLowercase().trim();
 *  2. No need for explicit if-else -> Directly return the boolean expression;
 *  
 * Time & Space Complexity:
 *  1. Sorting takes O(n log n), so the final Time Complexity = O(n log n)
 *  2. The Space Complexity = O(n)(for storing sorted arrays)
 * 
 * @param str1 
 * @param str2 
 * @returns 
 */
function checkAnagrams2(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) return false;

    return str1.toLocaleLowerCase().trim().split('').sort().join('') ===
        str2.toLocaleLowerCase().trim().split('').sort().join('');
}

/**
 * Optimized Solution
 * 1. Create a hash to store the characters of str1
 * 2. Iterate over str2
 * 3. If the character of str2 is present on str1 then make it decrement from hash
 * 4. Check if all the values in the hash are zero
 * 
 * Time Complexity: O(m + n), where m and n are the lengths of the two strings. str1, str2
 * Space Complexity: O(1) (Constant space)
 * 
 * @param str1 
 * @param str2 
 * @returns 
 */
// region By Hash-Map
function checkAnagramsOptimized(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) return false;

    const countCharacterHash: Record<string, number> = {};

    // Store all the characters of str1 in the hash
    for (let char1 of str1) {
        // countCharacterHash[char1] = (countCharacterHash[char1] || 0) + 1;
        if (countCharacterHash[char1]) {
            // countCharacterHash[char1] += 1;
            countCharacterHash[char1] = countCharacterHash[char1] + 1;
        } else {
            countCharacterHash[char1] = 1;
        }
    }

    // If the character of str2 is present on str1 then make it decrement from hash
    for (let char2 of str2) {
        // countCharacterHash[char2] = (countCharacterHash[char2] || 0) - 1;
        if (countCharacterHash[char2]) {
            // countCharacterHash[char2] -= 1;
            countCharacterHash[char2] = countCharacterHash[char2] - 1;
        } else {
            countCharacterHash[char2] = 1;
        }
    }

    // Check if all the values in the hash are zero
    for (let char in countCharacterHash) {
        if (countCharacterHash[char] !== 0) {
            return false;
        }
    }

    return true;
}

// Calling function for Test Cases
console.log('CHECKD THE ANAGRAMS - ', checkAnagrams("listen", "silent"));
console.log('CHECKD THE ANAGRAMS - ', checkAnagrams("hello", "world"));
console.log('CHECKD THE ANAGRAMS - ', checkAnagrams("Asad", "Saad"));

console.log('CHECKED THE OTHER WAY ANAGRAMS - ', checkAnagrams2("listen", "silent"));
console.log('CHECKED THE OTHER WAY ANAGRAMS - ', checkAnagrams2("hello", "world"));
console.log('CHECKED THE OTHER WAY ANAGRAMS - ', checkAnagrams2("Asad", "Saad"));

console.log('CHECKED THE OPTIMISZED ANAMGRS - ', checkAnagramsOptimized("listen", "silent"));
console.log('CHECKED THE OPTIMISZED ANAMGRS - ', checkAnagramsOptimized("hello", "world"));
console.log('CHECKED THE OTHER WAY ANAGRAMS - ', checkAnagrams2("Asad", "Saad"));