let arrey=["mon","tues","wed","thurs","fri","sat","sun"];
let dairy=document.getElementById("day")
for(i=0; i< arrey.length; i++ ) {
    dairy.innerHTML +=`<option value="${arrey[i]}"> ${arrey[i]} </option>`
}