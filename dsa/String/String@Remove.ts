/**
 * REMOVE STRING BUILT IN WAY
 * Declarative Way of Solving Problem
 */
function removeStringBultInWay(myStr: string, position: number): string {
    return myStr.slice(0, position) + myStr.slice(position + 1);
}

/**
 * REMOVE STRING IN THE OWN WAY
 * Imperative way of solving problem
 */
function removeString(myStr: string, position: number): string {
    if (position < 0 || position >= myStr.length) {
        return myStr;
    }

    // Split into Array for Mutable operation..
    let myStrArray = myStr.split('');

    for (let i = position; i < myStrArray.length - 1; i++) {
        myStrArray[i] = myStrArray[i + 1];
    }

    // Remove the last character..
    myStrArray.pop();

    return myStrArray.join(''); // convert back to string
}

// Remove from any position.
const myStr = "AsadAnik";
const result = removeStringBultInWay(myStr, 4);
console.log(`Result (Built-in): ${result}`);

const result2 = removeString(myStr, 4);
console.log(`Result (Own-Way): ${result2}`);