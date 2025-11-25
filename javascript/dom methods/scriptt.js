// 

// DOM: Document Object Model → used to access and manipulate HTML elements using JavaScript.

// Dom methods: dom methods are used to create,manipulate,remove the elements and attribuets dynamically.

// dom methods:

// 1) getelementbyid(): to get html code to javascript by Id 

// 2) getelementsbyclassname():to get html code to javascript by classname by giving array value

// 3) getelementsbytagname():to get html code to javascript by tagname by giving array value

// 4) queryselector():to get html code to javascript by giving the symbols of selectors like #(id), *(universel selector), .(class),tagselector

// 5) queryselectorall():to get html code to javascript by queryselectorall by giving array value


// 1) getelementbyid():

let heading = document.getElementById("head");
console.log("heading");
heading.style.color = "red";

// 2) getelementsbyclassname():


function tony(){
    let paragraph = document.getElementsByClassName("para");

console.log(paragraph);

for( let i=0;i<paragraph.length; i++){
    paragraph[i].style.color="blue";
}

}
tony();


// 3) getelementsbytagname()

let sentence = document.getElementsByTagName("p");
 console.log(sentence[2].style.color ="pink");

// sentence[1].style.color ="pink"

// 4) queryselector():

let firstmessage=document.querySelector(".msg");
console.log(firstmessage.style.color = "brown")


// dom: manipulations 

// 1) to change text:

let li  = document.getElementById("hello");

li.replaceWith("p")


// 2) adding new elements:appendingchild
  let p = document.createElement("p");
  p.innerText = "this is a new para";
  document.getElementById("container").appendChild(p);

//  3) remove the element:

let param = document.createElement("p");
 param.innerText = "this is a new para";
 document.getElementById("container") ;

param.remove("p");


// DOM Attributes in JavaScript

// 1) get attribute():

let img = document.getElementById("pic");
console.log(img.getAttribute("src"));

// 2) set getAttribute():

let image = document.getElementById("pic");
img.setAttribute("src", "new-image.jpg");
img.setAttribute("alt","upadted photo");


// 3) hasAttribute: tells the true or false 

let images = document.getElementById("pic");
console.log(images.hasAttribute("src"));