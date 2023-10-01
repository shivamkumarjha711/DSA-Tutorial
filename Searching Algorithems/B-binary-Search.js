// search an target element (t) from array and find return index and if not found return -1

function linearSearch(array, target) {
    let leftIndex = 0
    let rightIndex = array.length - 1

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (target === array[middleIndex]) {
            return middleIndex
        }
        if (target < array[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

console.log(linearSearch([-4, 2, 4, 6, 10], -2)); // -1
console.log(linearSearch([-4, 2, 4, 6, 10], 4)); // 2
console.log(linearSearch([-4, 2, 4, 6, 10], 10)); // 4

// Big-O = O(logn)