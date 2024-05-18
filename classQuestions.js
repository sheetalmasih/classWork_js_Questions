// Class Questions - 
// 1 . Given a sentence, capitalize the first character of each word.
// 	input - this is javascript
// 	output - This Is JavaScript

function FirstLetter(sentence) {
    return sentence.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(FirstLetter("this is javascript"));



// 2. Given an array of string. Return a new boolean array. If the item at each index contains the word javascript in it. It should be true else it should be false.
// 	input - ["javascript", "react", "node"]
// 	output - [true, false, false]
	
// 	input - ["java","python","c"]
// 	output - [false, false, false]

function includesjs(arr) {
    return arr.map(item => item.includes("javascript"));
}
console.log(includesjs(["javascript", "react", "node"]));
console.log(includesjs(["java", "python", "c"])); 


// 3. Given a string which contains an email address, return true if the given email is valid, else return false.
// 	input - puran@navgurukul.org
// 	output - true
	
// 	input - puran@navgurukul
// 	output - false
	
// 	input - puran@gmail.com
// 	output - true

// 4. Given two strings, check if they are anagrams or not. If they are anagrams return true else return false.
// 	input - below, elbow
// 	output - true

// 	input - night, thing
// 	output - true

function Anagrams(string, string) {
    const Str1 = string.split('').sort().join('');
    const Str2 = string.split('').sort().join('');
    return Str1 === Str2;
}
console.log(Anagrams("below", "elbow"));
console.log(Anagrams("night", "thing"));


// 5. Reverse the given sentence.
// 	input- i am learning javascript.
// 	output - tpircsavaj gninrael ma i

function reverseSentence(str1) {
    return str1.split('').reverse().join('');
}
console.log(reverseSentence("i am learning javascript."));


// 6. Reveres the given string word by word then return the reversed string.
// 	input - Success comes to those who work hard
// 	output - hard work who those to comes Success


function reverseWords(word) {
    return word.split(' ').reverse().join(' ');
}
console.log(reverseWords("Success comes to those who work hard"));


