// 3.    Deep comparison

// The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

// Write a function deepEqual that takes two values and returns true only if they are the same value or 
//are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

// To find out whether values should be compared directly (use the === operator for that) or have their properties compared, 
//you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison.
// But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

// The Object.keys function will be useful when you need to go over the properties of objects to compare them.

// Your code here.

const deepEqual = (num1, num2) =>{
    if(typeof(num1) === typeof(num2)){
    //    console.log(Object.keys(num1));
    //    if(num1.here !== num2.here || num2.object !== num2.object){
    //         return false;
    //    }
        const num1Keys = Object.keys(num1);
        const num2Keys = Object.keys(num2);
        for(const key of Object.keys(num1)){
            if(!num2Keys.includes(key) || !deepEqual(num1Keys[key], num2Keys[key])){
                return false;
            }
        }
       return true;
    }
   return false;


}

const obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));

// // → true

console.log(deepEqual(obj, {here: 1, object: 2}));

// → false

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

// → true