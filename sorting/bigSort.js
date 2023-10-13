/*
 * *QUESTION*: Consider an array of numeric strings where each string is a positive number with anywhere from 1 to 10^6 digits. Sort the array's elements in non-decreasing, or ascending order of their integer values and return the sorted array.

    *Constraints*

* 1 <= n <= 2x10^5
* Each string is guaranteed to represent a positive integer.
* There will be no leading zeros.
* The total number of digits across all strings in unsorted is between 1 and 10^6 (inclusive).

*/

function bigSorting(unsorted) {
    // Write your code here
    let arr = []

    for (let i of unsorted) {
        arr.push(i.trim() )
    }

    return arr.sort( (a,b) => {

        // if (a.length === b.length) {
        //     return a.length - b.length
        // }
        return a.length - b.length
    } )
}

// console.log(bigSorting([
//     "31415926535897932384626433832795",
//     "1",
//     "3",
//     "10",
//     "3",
//     "5"
// ]));


//Insertion sort
/** Steps that occur, removal, comparison, shift and insertion    i = 5  i =    
 * In worst case scenerio, where the array is in reverse order (e.g [5, 4, 0, 3, 2, 1]), we have
 * 
 *  N-1 comparisons
 * N-1 shifts
 * one insertion
 * one deletion
 */
function insertionSort1(n, arr) { // Time complexity = O( (N^2)/2 )
    // Write your code here [9 0 3 1 4]

    let temp, currentIndex
    temp = arr[ n - 1 ]

    if ( n !== arr.length) return
    for (let i=n - 1; i > 0; i--) {
        currentIndex = i - 1

        if ( arr[currentIndex] > temp ) {
            arr[i] = arr[currentIndex]
            console.log(arr.join(" "));

            if (currentIndex === 0) {
                arr[currentIndex] = temp
                console.log(arr.join(" "));
            }
        } 
        else {
            arr[i] = temp
            console.log(arr.join(" "));
            break
        }
    }

    return
}

// console.log(insertionSort1(10, [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]));



// [0, 7, 2, 3, 9, 1, 5, 8] => [2, 3, ] => [2, ]
function insertionSort2(n, arr) {
    // Write your code here

    let temp, currentIndexValue
    for (let i = 1; i < n; i++) {

        temp = arr[i]
        let j = i - 1

        while ( j >= 0 && arr[j] > temp) {
            arr[ j+1 ] = arr[j]

            j--
        }

        arr[j + 1] = temp
        console.log(arr);
    }

    return
}

console.log(insertionSort2(7, [7, 2, 3, 9, 1, 5, 8]));
