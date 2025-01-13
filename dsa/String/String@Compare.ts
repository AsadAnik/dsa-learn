/**
 * Compare String
 * @params myStr1 (string)
 * @params myStr1 (string)
 * @return true/false (boolean)
 */
function compareString(myStr1: string, myStr2: string): boolean {
    return myStr1 === myStr2;
}

// Calling the compare string
// 1st..
const myComparedString = compareString("abc", "abc");
console.log(`Compared 1: ${myComparedString}`);

// 2nd..
const myComparedString2 = compareString("abcd", "abc");
console.log(`Compared 2: ${myComparedString2}`);