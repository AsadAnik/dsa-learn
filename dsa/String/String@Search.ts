/**
 * Searching with the linear way of doing this one
 * By traversing the string - O(n) Time and O(1) Space
 * @params text {String}
 * @params myStr {String}
 */
function searchString(text: string, myStr: string): number {
    const textLength = text.length;

    for (let i = 0; i < textLength; i++) {
        if (text[i] === myStr) {
            return i;
        }
    }

    return -1;
}

// Calling function
const myText = "Laura";
const search = searchString(myText ,"L");
console.log(`Search here: ${search}`);