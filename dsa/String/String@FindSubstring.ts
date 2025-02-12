/**
 * Find All Substrings of a String (Brute Force)
 *
 * We use two loops:
 *  1. Outer loop picks a starting index.
 *  2. Inner loop picks an ending index and extracts substrings.
 *
 * How It Works
 *  1. Start at index i = 0: Generate "a", "ab", "abc"
 *  2. Start at index i = 1: Generate "b", "bc"
 *  3. Start at index i = 2: Generate "c"
 *  4. Store all substings in an array
 *
 * Time Complexity: O(n^2)(since we generate n(n+1)/2 substrings)
 * Spcae Complexity: O(n^2)(Due to storing substrings in an array)
 *
 * @param s
 */
// region Brute Force
function findAllSubstringsBruteForce(s: string): string[] {
    let subStringsArr: string[] = [];

    for (let i = 0; i < s.length; i++) {
        let subStrings: string = "";

        for (let j = i; j < s.length; j++) {
            subStrings += s[j];
            subStringsArr.push(subStrings);
        }
    }

    return subStringsArr;
}


/**
 * The Optimized Approach of Finding Substrings
 *  - Instead of generating substrings manually, we use substring slicing techniques effeciently.
 * (Substring slicing techniques)
 *
 * Instead of building substrings manually, we use s.substring(i, j+1)
 * Performace are same as like first one. But few more optimized solution.
 * 
 * This is correct approach for small to medium sized inputs. 
 * For very large inputs, we may need advanced techniques like Suffix Trees.
 *
 * @param s
 * @returns
 */
function findAllSubstringsOptimized(s: string): string[] {
    let subStringsArr: string[] = [];

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            subStringsArr.push(s.substring(i, j + 1));
        }
    }

    return subStringsArr;
}


/**
 * Space Optimized (Printing Directly)
 * If we just print/log from nested loop then it will be good for Space Complexity.
 * Becuase instead of storing into new array we are directly printing at this point.
 * 
 * Time Complexity Remains Same.
 * Space Complexity: O(1)(Only storing loop variables)
 * 
 * @param s 
 */
function findAllSubstringsOptimized2(s: string): void {
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            console.log(s.substring(i, j + 1));
        }
    }
}

// TEST CASESE: Finding the substrings
console.log(findAllSubstringsBruteForce("abc"));
// Expected Output: ["a", "ab", "abc", "b", "bc", "c"]

console.log('OPTMIZED - ', findAllSubstringsOptimized("abc"));

// 2nd Opmitized Approach..
findAllSubstringsOptimized2("abc");