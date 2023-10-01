// search an target element (t) from array and find return index and if not found return -1

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i
        }
    }
    return -1
}

console.log(linearSearch([4, -2, 6, -1, -2], -2));
console.log(linearSearch([4, -2, 6, -1, 8], 6));
console.log(linearSearch([4, -2, 6, -1, 11], 11));

// Big-O = O(n)