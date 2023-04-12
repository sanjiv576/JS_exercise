// 2.    Bean counting

// You can get the Nth character, or letter, from a string by writing "string"[N]. 
// The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.



const countBs = (word) => {
    let count = 0;
    for (let i = 0; i < word.length; i++) {

        // ASCII code for uppercase ---> A-65 ... Z-90
        if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) count++;
    }
    return count;
}

const birds = 'EaGle flIeS hiGh';
const animal = 'ElePhanT';
console.log(`Total number of uppercase in '${birds}' is ${countBs(birds)}`);
console.log(`Total number of uppercase in '${animal}' is ${countBs(animal)}`);


const countChar = (word, searchValue) => {
    let count = 0;
    for(let alphabet of word){
        if(alphabet == searchValue) count++;
    }
    return count;
}
const searchAlpha = 'e';
console.log(`Total number of '${searchAlpha}' in '${birds}' is ${countChar(birds, searchAlpha)}`);
