function towerOfHonai(n, fromRod, toRod, usingRod) {
    if (n === 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return
    }
    towerOfHonai(n-1, fromRod, usingRod, toRod)
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHonai(n-1, usingRod, toRod, fromRod)
    
}

towerOfHonai(2, 'A', 'C', 'B')


// Big-O = O(2^n)