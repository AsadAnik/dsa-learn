/**
 * Check if a String is a Palindrome
 * 
 * A palindrome is a word or sentence that reads the same forward and backward. 
 * Ignore spaces, capitalization, and special characters.
 * 
 * Two pointers:
 *  - One starts from the left (left = 0).
 *  - One starts from the right (right = str.length - 1).
 * 
 * Compare characters:
 *  - If they are different, return false.
 *  - If they match, move pointers towards the center.
 *  - Time Complexity: O(n), since we check half the string.
 *  - Space Complexity: O(1), as we use only a few extra variables.
 *
 * @params text {String}
 * @params myStr {String}
 */
function isPalindrome(myText: string): boolean {
    let left: number = 0, right: number = myText.length - 1;

    while (left < right) {
        if (myText[left] !== myText[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

/**
 * Alternative approach
 * 
 * @param myText 
 */
function isPalindrome2(myText: string): boolean {
    return false;
}


// Calling function, For Test Cases
// Testing
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("level"));   // true

// 