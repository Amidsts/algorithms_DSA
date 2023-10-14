function countDown(num) {
    if (num === 0) return 0

    console.log(num)
    return countDown(num - 1)
}

// console.log(countDown(5));

function fact(num) {
    if (num === 1) return 1

    return num * fact( num - 1 )
}

// console.log(fact(5));

/**
 * write an algorithm that takes an array of numbers and doubles
each of the numbers within the array. Note that we’re not going to produce
a new array; instead, we’re going to modify the array in place.
 */

function double_array(arr, i) {

    if (i === arr.length ) return arr

    arr[i] *= 2

    return double_array(arr, i+1)
}

// console.log( double_array( [2, 5, 3, 7], 0 ) );

/**
 * write a function called sum that sums up all the numbers in
a given array
 */

function Sum(arr, i) {

    if ( i === arr.length ) return 0

    return arr[i] + Sum(arr, i + 1)
}

// console.log( Sum([ 2, 5, 3, 7, 1 ], 0) );

/**
 *  write a reverse algorithm that reverses
a string
 */

function reverse(str) {

    if (str.length === 1) return str[0]

    return reverse(str.slice(1)) + str[ 0 ]
}

// console.log(reverse("jdnsre"));

/**
 * write a function called count_x
that returns the number of “x’s” in a given string.
 */

function count_x (str) {

    if (  str.length === 0 ) return 0

    if( str[0] === "x" ) {
        return 1 + count_x(str.slice(1))
    } else {
        return count_x(str.slice(1))
    }

}

// console.log(count_x("xbxcxdxx"));

