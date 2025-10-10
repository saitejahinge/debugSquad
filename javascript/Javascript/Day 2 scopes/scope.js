// scopes= In JavaScript, scope refers to the area or region of a program where a variable or function is accessible or visible.

// Types of Scope in JavaScript

// 1) Global Scope – Variables accessible anywhere in the program.

// 2) Function Scope – Variables accessible only inside the function where they are declared.

// 3) Block Scope – Variables declared with let or const are accessible only within the block {} where they are defined.



// 1) globalscope:

var tony = "man of the match";
let z = "hunger"

function greet() {

    var man = 1000;
    console.log(man);
    {

        const g = 200;
        console.log(g);
    }

}

greet();

console.log("human" + tony + z);

//  2) functionscope:

function men() {


   
        var fear = "alone warrior";
        console.log(fear);
 

}

men();

// 3) blockscope:

function devil(){

var fear = "alone warrior";
        
         
        {
console.log(fear); 

let tonu = 100000;

        }

console.log(tonu);


}

devil();


