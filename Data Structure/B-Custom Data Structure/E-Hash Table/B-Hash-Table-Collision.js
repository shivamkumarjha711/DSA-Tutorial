class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size      // this is do bcz total value is always between this.size(1 to 49)
    }

    set(key, value) {
        const index = this.hash(key)
        // this.table[index] = value
        const bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }
    
    get(key) {
        const index = this.hash(key)
        // return this.table[index]
        const bucket = this.table[index]
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    remove(key) {
        const index = this.hash(key)
        // this.table[index] = undefined
        const bucket = this.table[index]
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

const table = new HashTable(50)

table.set('name', 'Bruce')
table.set("age", 25)
table.display()

console.log(table.get('name'));

// table.remove("name")
table.set('mane', 'Clark')     //  Above use simple hash function that why there is a problem that is because of collision of same index value of name, mane, that overwrite the value.
table.set('name', 'Dyana')
table.remove('name')
table.display()


    // T.C. = O(n) = linear

    // with hash table collision is very minimul and reduce it by better hash function

    // so that we generally in hash table we take average TC instead of worst TC which is constant O(1)

    // that is reason hash table is prime choice when solving the problem


