function quickSort(arr) {
    // Write your code here

    let leftArr = []
    let rightArr = []
    let pivot = arr[0]
    let i = 1
    while (i < arr.length) {

        arr[i] > pivot
        ? rightArr.push( arr[i] )
        :leftArr.push( arr[i] )
        
        i++
    }
   return leftArr.concat(pivot, ...rightArr)
}

// console.log(quickSort( [4, 5, 3, 7, 2] ));

function countingSort(arr) {
    // Write your code here
    
    let i = 0
    let result = Array(100).fill(0)
    
    while ( i < arr.length) {
        result[ arr[i] ] += 1
        i++
    }
    return result
}
// console.log( countingSort([1, 3, 1, 2, 5, 2, 1, 7, 2, 2]) );


function countingSort(arr) {
    // Write your code here

    let i = 0
    let frequencyArr = Array(100).fill(0)
    
    while ( i < arr.length) {
        frequencyArr[ arr[i] ] += 1
        i++
    }

    let resultArr = []
    for (let i = 0; i < frequencyArr.length; i++) {
        let e = frequencyArr[i]

        if (e !== 0) {
            let count = 0
    
            while (count < e) {
               resultArr.push( i )
                count++
            }
        }
    }

    
    return resultArr
}

console.log( countingSort([1, 3, 1, 2, 5, 2, 1, 7, 2, 2]) )