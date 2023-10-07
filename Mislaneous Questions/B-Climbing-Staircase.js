function climbingStaircase(n) {
    const noOfways = [1, 2]
    for(let i = 2; i <= n; i++) {
        noOfways[i] = noOfways[i-1] + noOfways[i-2]
    }
    return noOfways[n-1]
}


console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));

// Big-O = O(n)