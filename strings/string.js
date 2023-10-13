/**
 * Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. In each operation, select a pair of adjacent letters that match, and delete them.

* Delete as many characters as possible using this method and return the resulting string. If the final string is empty, return Empty String
 */

function superReducedString(s) {

    let stack = []
    for (let i = 0; i < s.length; i++) {

        stack.length === 0 || stack[stack.length - 1] !== s[i]
        ? stack.push( s[i] )
        : stack.pop( stack.length - 1 )
    }

    if (stack.length > 0) return stack.join("")

    return "Empty String"
}

// console.log( superReducedString("dbaabc") );


///CamelCase

function camelcase(s) {
    // Write your code here

    let count = 1
    for (let i = 0; i< s.length; i++) {

        if ( s[i] === s[i].toUpperCase() ) count += 1
    }

    return count
}

console.log(camelcase('saveChangesInTheEditor'));

//solve 3 more questions