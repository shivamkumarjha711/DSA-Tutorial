const set = new Set([1, 2, "shivam"])

set.add(5)  // To add the element
set.add(5)  // It does not consider it because it ignore duplicate value
set.delete(1)  // To delete element
console.log(set.has(1));  // To check existance of element
console.log(set.size);  // To check size of set
// set.clear()

for (const item of set) {
 console.log(item);   
}