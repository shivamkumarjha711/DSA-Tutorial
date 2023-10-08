const map = new Map([['a', 1], ['b', 2]])

map.set('c', 3);  // To add new key-value pair
map.delete('c')  // To delete key-value pair
console.log(map.has('a'));  // To check Existance of key-value pair
console.log(map.size);  // To check size of map
// map.clear()

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}