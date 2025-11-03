// 1. Product List as Bullet Points
// Create a ul using innerHTML. Loop through an array of 5 product names and display them as
// bullet points.
// let products = ["Laptop", "Mobile", "Camera", "Shoes", "Earphones"];



let product=["Laptop", "Mobile", "Camera", "Shoes", "Earphones"];

let list=document.getElementById("product")
for(i=0;i<=product.length; i++ ){
    list.innerHTML+=`<li> ${product[i]} </li>`
}