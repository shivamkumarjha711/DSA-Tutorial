
function reverseOfArray(arr) {
    let reverseArray = []
    for (let i = arr.length -1; i >= 0; i--) {
        reverseArray.push(arr[i])
    }
    return reverseArray
}

let arr1 = [6, 40, -2, -5, 8]
console.log(reverseOfArray(arr1));