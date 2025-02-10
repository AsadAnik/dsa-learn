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
function checkAnagramsOptimized(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) return false;

    return str1.toLocaleLowerCase().trim().split('').sort().join('') ===
        str2.toLocaleLowerCase().trim().split('').sort().join('');
}

// Calling function for Test Cases
console.log('CHECKD THE ANAGRAMS - ', checkAnagrams("listen", "silent"));
console.log('CHECKD THE ANAGRAMS - ', checkAnagrams("hello", "world"));
console.log('CHECKD THE ANAGRAMS - ', checkAnagrams("Asad", "Saad"));

console.log('CHECKED THE OPTIMIZED ANAGRAMS - ', checkAnagramsOptimized("listen", "silent"));
console.log('CHECKED THE OPTIMIZED ANAGRAMS - ', checkAnagramsOptimized("hello", "world"));
console.log('CHECKED THE OPTIMIZED ANAGRAMS - ', checkAnagramsOptimized("Asad", "Saad"));