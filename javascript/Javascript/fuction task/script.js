let amount=parseInt(prompt("enter the bill amount" ))
let items=promt("enter the items(dosa/idly/bonda)")
let quantity=parseInt(prompt("enter the quantity"))
function billcalculation(foodamount,taxpercentage,gsts){
let tax=(amount * 10)/100;
let gst=(amount * 5)/100;
let total=amount + tax + gst
document.write("amount", "items", "quantity", "total bill:" + total);
}
 billcalculation(foodamount,taxpercentage,gsts);
 