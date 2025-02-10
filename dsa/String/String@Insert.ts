/**
 * Going to insert element/item at any position
 * This is with built-in functions by separed elements with 2 ways;
 * And Putting elements on curtain position
 * Time Complexity: O(n) where n is the length of the string.
 * @params myStr String
 * @Return String
 */
function insertCharacterStringBuiltInWay(myStr: string, position: number, insertItem: string): string {
    return  myStr.slice(0, position) + insertItem + myStr.slice(position);
}

/**
 * This is imperative way of programming for this problem
 * This will help to solve problem with mainly not using built-in functions
 * Time Complexity: O(n) where n is the length of the string.
 */
function insertCharacterString(myStr: string, position: number, insertItem: string): string {
    const myStrLength = myStr.length;
    let resultString: string = "";

    for (let i = 0; i < myStrLength; i++) {
        if (i === position) {
            resultString += insertItem;
        }
        resultString += myStr[i];
    }

    return resultString;
}

// Function Calls
// Declarative Function Call
const myStr = "AsadAnik";
const result = insertCharacterStringBuiltInWay(myStr, 4, '@');
console.log(`RESULT - ${result}`);

// Imperative Function Call
const result2 = insertCharacterString(myStr, 4, '!');
console.log(`RESULT 2 - ${result2}`);