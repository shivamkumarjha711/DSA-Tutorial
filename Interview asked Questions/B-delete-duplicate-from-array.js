
function deleteDuplicates(arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

let arr1 = [6, 40, -2, 40, 8, -5, 8]
console.log(deleteDuplicates(arr1));