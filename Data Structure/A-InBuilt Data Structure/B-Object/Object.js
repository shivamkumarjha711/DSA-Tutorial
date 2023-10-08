const obj = {
    name: "shivam",
    age: 21,
    "key-three": true,
    sayNameMy: function() {
        console.log(this.name);  // "this" Indicates the current(obj) object
    },
}

obj.hobby = "football"  // To add key-value pairs in Object
delete obj.hobby;  // To delete key-value pairs in Object

obj.sayNameMy();  // To call function present in Object

console.log(obj.name);
console.log(obj["age"]);
console.log(obj["key-three"]);  // Generally we use this method when key writen using "hypens" or, "spaces" 


console.log(Object.keys(obj));  // To return all keys of object in "Array"
console.log(Object.values(obj));  // To return all values of object in "Array"
console.log(Object.entries(obj));  // To return object and keys-values pairs in "Array"