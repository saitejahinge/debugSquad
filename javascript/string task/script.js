//  1. Username Formatter
// • Goal: Convert a full name into a clean, standardized username. This involves removing
// leading/trailing spaces, converting the name to lowercase, and replacing spaces with
// underscores.
// • Example: " John Doe " → "john_doe"
// • Concepts Used: trim(), toLowerCase(), replace(), split(), join()
// • Difficulty: Easy


// let user= " John Doe "
// console.log(user.trim());
//  let loweruser="John Doe"
// console.log(loweruser.toLowerCase());
// let splituser="john doe"
// console.log(splituser.split(" "));
// let joinuser= [ 'john', 'doe' ]
// console.log(joinuser.join("_"));



// 2. Email Validator & Extractor
// • Goal: Validate the basic structure of an email address and extract the username and
// domain parts.
// • Example: "vamsi@gmail.com" → Valid ✅ | Username: "vamsi", Domain: "gmail.com"
// • Concepts Used: includes(), endsWith(), split(), slice()
// • Difficulty: Medium
// Explanation:
// 1. includes('@'): Checks if the email contains the "@" symbol.
// 2. endsWith('.com'): Checks if the email ends with ".com" (can be extended for other
// domains).
// 3. split('@'): Splits the email into two parts at the "@" symbol.
// 4. slice(): Can be used to extract specific parts of the username or domain if needed.




// let mail="vamsi@gmail.com"
// console.log(mail.includes("@"));

// console.log(mail.endsWith(".com"));

// if(mail.includes("@") == true && mail.endsWith(".com") == true){
//     console.log("valid");
// }
// else{
//     console.log("invalid");
// }

// console.log(mail.split("@"));
// console.log(mail.slice(""))


// 3. Title Case Converter
// • Goal: Convert any sentence into title case, where the first letter of each word is
// capitalized.
// • Example: "learn javascript in 30 days" → "Learn Javascript In 30 Days"
// • Concepts Used: split(), map(), charAt(), toUpperCase(), slice()
// • Difficulty: Medium
// Explanation:

// 1. split(' '): Splits the sentence into an array of words.
// 2. map(): Iterates over each word in the array.
// 3. charAt(0).toUpperCase(): Converts the first character of the word to uppercase.
// 4. slice(1): Extracts the rest of the word (from the second character onwards).
// 5. Concatenate the uppercase first letter with the rest of the word.
// 6. join(' '): Joins the words back into a sentence.


// let text="learn javascript in 30 days"

// console.log(text.split(" "));
// // console.log(text.map());
// console.log(text.charAt(0));
// console.log(text.slice(""));
// let result=text.charAt(0).toUpperCase() + text.slice(1), text.charAt;


//  let text="learn javascript in 30 days"

// let result = text

// .split(" ")
// .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// .join(" ");

// console.log(result);


// 5. URL Slug Generator
// • Goal: Create SEO-friendly URLs (slugs) from titles by converting them to lowercase,
// replacing spaces with hyphens, and removing any leading/trailing spaces.
// • Example: "Learn JavaScript in 30 Days" → "learn-javascript-in-30-days"
// • Concepts Used: trim(), toLowerCase(), replaceAll()
// • Difficulty: Easy
// Explanation:
// 1. trim(): Removes whitespace from both ends of the title.
// 2. toLowerCase(): Converts the title to lowercase.
// 3. replaceAll(' ', '-'): Replaces all spaces with hyphens.

let text="Learn JavaScript in 30 Days"
console.log(text.trim());
console.log(text.toLowerCase());
console.log(text.replaceAll(" ","-"))

