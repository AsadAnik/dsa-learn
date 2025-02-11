/**
 * Reverse Words in a String
 * 
 * Given a string, reverse the order of words without using extra space.
 * (Assume words are separated by single spaces.)
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @params myWords {String}
 */
function reverseWords(myWords: string): string {
    const myWordsArr = myWords.trim().split(' ');
    let end: number = myWordsArr.length - 1;

    for (let start = 0; start < end; start++) {
        let temp = myWordsArr[start];
        myWordsArr[start] = myWordsArr[end];
        myWordsArr[end] = temp;
        end--;
    }

    return myWordsArr.join(' ');
}

/**
 * Another way of solving the problem here
 * The short but powerfull approach to solve.
 * Same Performace as like Previous One.
 * 
 * @params myWords {String}
 */
function reverseWords2(myWords: string): string {
    return myWords.trim().split(' ').reverse().join(' ');
}

/**
 * Another way with using different Swap and loop and split with regExp.
 * Same Performance as like Previous One.
 * 
 * @param myWords 
 * @returns 
 */
function reverseWords3(myWords: string): string {
    const words = myWords.trim().split(/\s+/);
    let start = 0, end = words.length - 1;

    while(start < end) {
        [words[start], words[end]] = [words[end], words[start]];
        start++;
        end--;
    }

    return words.join(' ');
}


// Calling function
console.log(reverseWords("hello world")); // "world hello"
console.log(reverseWords("  Turing   coding interview  ")); // "interview coding Turing"
console.log(reverseWords("  a    b   c  ")); // "c b a"
console.log(reverseWords("singleWord")); // "singleWord"
console.log(reverseWords("   ")); // ""


console.log(reverseWords2("hello world")); // "world hello"
console.log(reverseWords2("  Turing   coding interview  ")); // "interview coding Turing"
console.log(reverseWords2("  a    b   c  ")); // "c b a"
console.log(reverseWords2("singleWord")); // "singleWord"
console.log(reverseWords2("   ")); // ""


console.log(reverseWords3("hello world")); // "world hello"
console.log(reverseWords3("  Turing   coding interview  ")); // "interview coding Turing"
console.log(reverseWords3("  a    b   c  ")); // "c b a"
console.log(reverseWords3("singleWord")); // "singleWord"
console.log(reverseWords3("   ")); // ""