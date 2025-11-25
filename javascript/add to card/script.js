


// function register(){
// let username = document.getElementById("name").value
// let password = document.getElementById("password").value

// localStorage.setItem("username", username);
// localStorage.setItem("password",password);
// alert("registerd succesfully") }

// function login(){

// let username = document.getElementById("name").value
// let password = document.getElementById("password").value
// let result=localStorage.getItem("username")
// let result2=localStorage.getItem("password")

// if(username== result && password == result2){
//     alert("login sucessful");
//     window.location.href ="debugSquad\javascript\add to card\index.html"

// }
// else{
//     alert("")
// }
// }
document.getElementById("text").innerHTML = `<p>Welcome ${localStorage.getItem("username")}</p>`;






let product = [

  {
    name: "iphone", price: 100000, img: "https://www.designinfo.in/wp-content/uploads/2023/01/Apple-iPhone-14-Pro-Mobile-Phone-493177786-i-1-1200Wx1200H.jpeg"

    , stock: " instock", warranty: "warranty:2", id: 1
  },

  {
    name: "samsung", price: 60000, img: "https://suprememobiles.in/cdn/shop/collections/Samsung_Galaxy_mobile.webp?v=1707891982"

    , stock: "out of stock", warranty: "warranty:4", id: 2
  },

  {
    name: "moto", price: 20000, img: "https://sell.gameloot.in/wp-content/uploads/sites/4/2023/06/Motorola-Moto-G42-4GB-RAM-64GB-Storage.jpg"

    , stock: "out of stock", warranty: "warranty:3", id: 3
  },

  {
    name: "vivo", price: 30000, img: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1754646203592/2c6bb9de3ded4e183e2f88a61ec6d3ad.png"

    , stock: "out of stock", warranty: "warranty:2", id: 4
  },

  {
    name: "redmi", price: 50000, img: "https://www.jiomart.com/images/product/original/493838718/redmi-12-4g-128-gb-4-gb-ram-black-smartphone-digital-o493838718-p603613231-0-202308041406.jpeg?im=Resize=(420,420) "

    , stock: "instock", warranty: "warranty:1", id: 5
  },
  {
    name: "redmi", price: 50000, img: "https://www.jiomart.com/images/product/original/493838718/redmi-12-4g-128-gb-4-gb-ram-black-smartphone-digital-o493838718-p603613231-0-202308041406.jpeg?im=Resize=(420,420) ", stock: "instock"

    , warranty: 2, id: 6
  }];

let container = document.getElementById("cards");

for (let i = 0; i < product.length; i++) {



  cards.innerHTML += `
<div class=" flex justify-betweew items-center w-120 px-2 my-2 bg-white shadow-md rounded-xl flex">
<div class="w-[50%] h-[90%]">
  <img class="your-image w-[100%] h-[100%]" class="w-full h-full object-cover" src="${product[i].img}" alt=""> 
  </div>

  <div class="itemsdetails">
<h2 class="  font-bold mb-2">${product[i].name}</h2>
<p class="price">${product[i].price}</p>
<p>${product[i].stock}</P>
<p>${product[i].warranty}</P>


<div>
  <i class="fa-solid fa-star text-stone-300" id="s1-${i}" onclick="rate(${i},1)"></i> 
  <i class="fa-solid fa-star text-stone-300" id="s2-${i}" onclick="rate(${i},2)"></i> 
  <i class="fa-solid fa-star text-stone-300" id="s3-${i}" onclick="rate(${i},3)"></i> 
  <i class="fa-solid fa-star text-stone-300" id="s4-${i}" onclick="rate(${i},4)"></i> 
  <i class="fa-solid fa-star text-stone-300" id="s5-${i}" onclick="rate(${i},5)"></i> 
</div>  

<button class="bg-blue-600 text-beige-100 px-4 w-30 py-2 rounded-lg mt-3" onclick="addcard(${product[i].id})">Add to card </button>
</div>
</div>`
}

// ================= Star Rating function ================

function rate(cardIndex, value) {
  for (let i = 1; i <= 5; i++) {
    document.getElementById(`s${i}-${cardIndex}`).style.color = "rgba(185, 180, 180, 1)";
  }

  for (let i = 1; i <= value; i++) {
    document.getElementById(`s${i}-${cardIndex}`).style.color = "gold";
  }
}


total = 0;

let cardarr = []
function addcard(id) {
  for (i = 0; i < product.length; i++)
    if (id === product[i].id) {

      cardarr.push(product[i]);
      document.getElementById("table").innerHTML += `<tr>

<td>${cardarr[i].name}</td>
  <td>${cardarr[i].price}</td>

    </tr>`;

      total = cardarr[i].price + total;


    }

  console.log(total)

}

document.getElementById("total").innerText = `total: ${total}`

console.log(cardarr)


function timer() {
  const offerStartTime = new Date();
  offerStartTime.setDate(offerStartTime.getDate() + 3);
  function updateTimer() {
    const now = new Date();
    const diff = offerStartTime - now;
    if (diff <= 0) {
      clearInterval(timer);
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    document.getElementById("timer").innerText = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
  }
  const timer = setInterval(updateTimer, 1000);
}
timer();

function greet() {
 let date= new Date();
 let session=date.getHours();
  let morning = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let afternoon = [12, 13, 14, 15, 16];
  // let evening = [17, 18, 19, 20, 21, 22,23];
  
  let name = localStorage.getItem("name").toUpperCase();

  if (morning.includes(session)) {
    console.log("Morning");
    document.getElementById("helloGreet").innerText = `Good Morning ${name} !`;
  }

  else if (afternoon.includes(session)) {
    console.log("Afternoon");
    document.getElementById("helloGreet").innerText = `Good Afternoon ${name} !`;
  }

  else{
  // else if (evening.includes(session)) {
    console.log("evening");
    document.getElementById("helloGreet").innerText = `Good Evening ${name} !`;
  }
}
greet();  





















