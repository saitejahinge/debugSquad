// 1. E-commerce Discount Evaluator
// Create a program that checks a user’s purchase amount and applies discounts
// based on the following criteria:
// * If the total is less than one thousand, display “No discount.”
// * If the total is between one thousand and two thousand, display “Ten percent
// discount.”
// * If the total is between two thousand and five thousand, display “Twenty
// percent discount.”
// * If the total is above five thousand, display “Thirty percent discount and
// free delivery.”
// The program should prompt the user for the purchase amount and print a final
// bill summary, including the discount applied (if any).


// let dicount=prompt("based on purchase power")



// let amount=parseInt(prompt("enter the amount"))
// if(amount<1000){
// console.log("no discount  total amount " + amount )
// }
// if(amount>=1000 && amount<=2000){
//     console.log("discount applied: ten percent discount total amount ")
//     let discountAmount=amount*(1-(10/100));
//     console.log("ater discount you need to pay "+ discountAmount)
// }
// if(amount>2000 && amount<5000){
//     console.log(" discount applied: twenty percent discount")
//     let discountAmount=amount*(1-(20/100));
//     console.log("ater discount you need to pay "+ discountAmount)
// }
// if(amount>5000){
//     console.log("discount applied:thirty percent , free delivery")
//     let discountAmount=amount*(1-(30/100));
//     console.log("ater discount you need to pay "+ discountAmount)
// }
// else{
//     console.log( "invalid data")
// }




// Build a program to calculate cinema ticket prices based on age:
// * Children below twelve years get half price.
// * Adults between twelve and sixty years get full price.
// * Senior citizens above sixty get twenty percent off.
// The program should ask for the user's age and display the actual ticket price
// after applying the appropriate discount.




//  let age=parseInt(prompt("enter the age"))
//   let ticketprice=250

// if(age<12){
//      let discount=250/2
//      console.log( "the actual ticket price is = 250 , after discount your ticket price is" + discount)
// }

// if(age>12 && age<=60){
// console.log("there is no discount" + "the actual price is:" + ticketprice )
// }

// if(age>60){
//     let discountAmount= ticketprice*(1-(20/100))
//     console.log("dicount has been applied after discount ticketprice"  +  discountAmount + "\n the actual price is:" + ticketprice)
// }

// else{
//     console.log("invalid ticket")
// }





// * If the marks are above ninety, print “Excellent – Grade A.”
// * If the marks are between seventy-five and ninety, print “Good – Grade B.”
// * If the marks are between fifty and seventy-five, print “Average – Grade C.”
// * If the marks are below fifty, print “Failed – Needs Improvement.”
// The program should also print a motivational message along with the grade.




// let marks=parseInt(prompt("enter the marks"))


// if(marks>90 && marks<=100){
//     console.log("Grade A Excellent")
// }
// if(marks>75 && marks<90){
//     console.log( "Grade B Good")
// }
// if(marks>50 && marks<75){
//     console.log("Grade C Average")
// }
// if(marks<50 && marks>0){
//     console.log("Failed Needs Improvement")
// }



// * If the temperature is below ten, display “It’s freezing cold, wear a
// jacket.”
// * If the temperature is between ten and twenty-five, display “Cool weather,
// perfect for outdoor activities.”
// * If the temperature is between twenty-five and thirty-five, display “Warm
// day, stay hydrated.”
// * If the temperature is above thirty-five, display “It’s too hot, avoid going
// out in the afternoon.”


// let temperature=parseInt(prompt("enter the temperature"))

// if(temperature>0 && temperature<10){
//     console.log("Its freezing cold, wear a jacket.")
// }
// if(temperature>10 && temperature<25){
//     console.log("Cool weather, perfect for outdoor activities.")
// }
// if(temperature>25 && temperature<35){
//     console.log("Warm day, stay hydrated.") 
// }
// if(temperature>35){
//     console.log("It’s too hot, avoid going  out in the afternoon.")
// }

// else{
//     console.log("invalid temperature")
// }




// * If the income is below twenty thousand, the user is not eligible.
// * If the income is between twenty thousand and fifty thousand, the user is
// eligible for a personal loan.
// * If the income is above fifty thousand, the user is eligible for both
// personal and home loans.

// let income=parseInt(prompt("enter the income"))

// if(income<20000){
//     console.log("not eligible.")
// }
// if(income>20000 && income<50000){
//     console.log("eligible for a personal loan.")
// }
// if(income>50000){
//     console.log("eligible for both  personal and home loans.")
// }
// else{
//     console.log("invalid for loans")
// }


// * If the user’s order value is less than two hundred, display “Delivery not
// available.”
// * If the order value is between two hundred and five hundred, charge fifty as
// delivery fee.
// * If the order value is between five hundred and one thousand, charge twentyfive.
// * If the order value is above one thousand, offer free delivery.
// Additionally, if the user is a premium member, delivery should always be free.
// This task requires nested `if-else` statements within the main conditions.



// let ordervalue = parseInt(prompt("enter the value of food"))
// let premiummember = prompt("Are you member of premiumaccount( yes/no)")
// if (ordervalue < 200 && ordervalue > 0) {
//     if (premiummember == "yes") {
//         console.log("free delivery")
//     }
//     else {
//         console.log("Delivery not  available.")

//     }
// }


// else if (ordervalue > 200 && ordervalue < 500) {
//     //   let deliverycharge=50
//     //    let totalcharge=deliverycharge+ordervalue
//     //     console.log(" delivery charges fifty as delivery fee." + totalcharge)
//     if (premiummember == "yes") {
//         console.log("free delivery you need to pay:" + ordervalue)
//     }
//     else {
//         console.log("Delivery charges 50rs, you need to pay " , ordervalue+50)

//     }

// }
// else if( ordervalue>500 && ordervalue<1000){
//     if(premiummember == "yes"){
//         console.log("free delivery you need to pay:" + ordervalue)
//     }
//     else{
//         console.log("delivery charge 25rs, you need to pay" , ordervalue+25)
//     }
// }
// else if(ordervalue>1000){
//     if(premiummember == "yes"){
//         console.log("free delivery you need to pay:" + ordervalue)
//     }
//     else{
//         console.log("free delivery pay" + ordervalue )
//     }
// }
// else{
//     console.log(" order invalid ")
// }


// * If the issue is “Emergency,” always print “Send to Emergency Room
// immediately.”
// * Else if the age is below ten, route to “Pediatric Section.”
// * Else if the age is between ten and sixty, route to “General Section.”
// * Else route to “Senior Citizen Section.”

// let patientage=parseInt(prompt("enter the age of patient"))
// let issue=prompt("enter the issue  if emergency then type 'emergency'")
// if(issue=="emergency"){
//     console.log("Send to Emergency Room immediately.")
// }
// else if(patientage<10 && patientage>0){
//     console.log("send him to Pediatric Section.")
// }
// else if(patientage<60 && patientage>10){
//     console.log("send him to General Section.")
// }
// else{
//     console.log("send to Senior Citizen Section.")
// }

// * If the units consumed are below one hundred, display “Minimum charge only.”
// * If the units consumed are between one hundred and three hundred, apply a
// rate for normal consumption.
// * If the units consumed are between three hundred and five hundred, apply a
// higher rate and display energy-saving tips.
// * If the units consumed are above five hundred, display “High consumption
// alert” and add a penalty.


// let unitsconsumed=parseInt(prompt("enter the units consumed"))
// let minimumcharge="50"
// let normalcharge="100"
// let highercharge="200"

// if(unitsconsumed<100 && unitsconsumed>0) {
//     console.log("minimum charge only totalcharge "  + minimumcharge)
// }

// if(unitsconsumed>100 && unitsconsumed<300){
//     console.log("normal consumption only totalcharge" + normalcharge )
// }

// if(unitsconsumed>300 && unitsconsumed<500){
//     console.log("higher rate consumption charge only totalcharge" + highercharge + "use less charge units to get less payment")
// }
// if(unitsconsumed>500){
//     let penalty=1000
//     console.log("High consumption penalty" + penalty )
// }
// else{
//     console.log("invalid units")
// }


// * If the usage is less than five, suggest “Basic Plan.”
// * If the usage is between five and twenty, suggest “Standard Plan.”
// * If the usage is between twenty and fifty, suggest “Premium Plan.”
// * If the usage is above fifty, suggest “Unlimited Plan.”
// If the user's plan choice does not match their usage, show an alert message
// suggesting a better plan

// let mobiledataplan=parseInt(prompt("enter the usage montly data in gb"))

// if(mobiledataplan>0 && mobiledataplan<5){
//     console.log("Basic Plan.")
// }
//  else if(mobiledataplan>5 && mobiledataplan<20){
//     console.log("Standard Plan.")
// }
//    else if(mobiledataplan>20 && mobiledataplan<50){
//     console.log("Premium Plan.")
// }
//    else if(mobiledataplan>50){
//     console.log("Unlimited Plan")
// }



// else{
//     console.log("alert message you should go with a better plan")
// }


// * If all subjects have marks above thirty-five, print “Passed.”
// * If one subject is below thirty-five, print “Supplementary.”
// * If more than one subject is below thirty-five, print “Failed.”
// Show the average marks and an overall performance remark based on the result.



// let  telugu=parseInt(prompt("enter the marks in telugu"))
// let maths=parseInt(prompt("enter the marks in maths"))
// let science=parseInt(prompt("enter the marks in science"))
 
// if((telugu>35 && maths>35) && science>35){
//     let averagemarks=telugu+maths+science
//     console.log( "Passed." + averagemarks)
// }
// else if(telugu<35 && maths<35 && science<35){
//     let averagemarks=telugu+maths+science
//     console.log("Failed." + averagemarks)
// }
// else if(telugu<35 && maths<35 && science>35){
//     let averagemarks=telugu+maths+science
//     console.log("Failed." + averagemarks)
// }
// else if(telugu>35 && maths<35 && science<35){
//     let averagemarks=telugu+maths+science
//     console.log("Failed." + averagemarks)
// }
// else if(telugu<35 && maths>35 && science<35){
//      let averagemarks=telugu+maths+science
//     console.log("Failed." + averagemarks)
// }
// else if(telugu>35 && maths>35 && science<35){
//     let averagemarks=telugu+maths+science
//     console.log("Supplementary." + averagemarks)
// }
// else if(telugu>35 && maths<35 && science>35){
//      let averagemarks=telugu+maths+science
//     console.log("Supplementary." + averagemarks)
// }
 
// else if(telugu<35 && maths>35 && science>35){
//      let averagemarks=telugu+maths+science
//     console.log("Supplementary." + averagemarks)
// }
// else{
//     console.log("invalid marks" )
// }



// 11. Cab Fare Estimator
// Students must calculate cab fare based on multiple conditions:
// * If the distance is less than five kilometers, charge a minimum fare.
// * If the distance is between five and fifteen kilometers, apply a mid-tier
// fare.
// * If the distance is above fifteen, apply a long-distance fare.
// Additionally, if the ride time is during night hours (e.g., after ten PM or
// before five AM), add a twenty percent night charge. If the user has a promo
// code, apply an extra discount.

// let cabbill=parseInt(prompt("enter the km you want travel"))
// let traveltime=parseInt(prompt("enter the time  between 0 to 23"))
// let promocode=prompt("if you have promo code enter (yes/no)")
// let minimumfare="50"
// let midtierfare="100"
// let longdistancefare="200"
// let extracharge="50"

//  if((cabbill>0 && cabbill<5) && (traveltime>=22 && traveltime<5)){
 
//     console.log("minimumfare , extracharge ,totalcharge:"  + minimumfare+extracharge)
// }
// // else{
// //     console.log("invalid")
// // }
 

// 12. Smart Shopping Cart Price Adjuster
// Ask for the total cart amount, membership type (silver, gold, platinum), and
// coupon availability:


// * Silver members get five percent off.
// * Gold members get ten percent off.
// * Platinum members get fifteen percent off.
// If a coupon is also applied, stack an extra five percent off. Students must
// print the final payable amount after combining all conditions logically.


// let amount=parseInt(prompt("enter the shopping amount"))
// let membership=prompt("enter the membership type(silver/gold/platinum)")
// let coupon=prompt("enter the coupon(yes/no)")
// // let silver="200"
// // let gold="500"
// // let platinum="1000"
 
// if(membership=="silver" && coupon=="yes"){
//     let discount=amount*(1-(10/100));
//     console.log("the total shoppingbill:" + discount);
// }
// else if(membership=="silver" && coupon=="no"){
//     let discount=amount*(1-(5/100));
//      console.log("the total shoppingbill:" + discount);
// }
// else if(membership=="gold" && coupon=="yes"){
//     let discount=amount*(1-(15/100));
//      console.log("the total shoppingbill:" + discount);
// }
// else if(membership=="gold" && coupon=="no"){
//     let discount=amount*(1-(10/100));
//     console.log("the total shoppingbill:" + discount);
// }
// else if(membership=="platinum" && coupon=="yes"){
//     let discount=amount*(1-(20/100));
//     console.log("the total shoppingbill:" + discount);
// }
// else if(membership=="platinum" && coupon=="no"){
//     let discount=amount*(1-(15/100));
//     console.log("the total shoppingbill:" + discount);
// }
// else{
//     console.log("invalid shoppingbill" )
// }
 
     


// 13. Hotel Room Booking System

// Input room type, number of nights, and customer rating:

// * If the room is “Standard,” the base cost is one thousand per night.
// * If the room is “Deluxe,” the cost is two thousand.
// * If the room is “Suite,” the cost is three thousand.

// Add a ten percent service charge if the rating is below four. Add a discount of
// five percent for stays longer than five nights. Students must calculate and
// print the total payable amount with messages.


// let roomtype=prompt("enter the room type(Standard/Deluxe/Suite)")
// let nights=parseInt(prompt("enter the number of nights stayed"))
// let customer=parseInt(prompt("enter the rating of our rooms"))

// let standard="1000"
// let deluxe="2000"
// let suite="3000"

// if((roomtype=="standard" && nights>5) && (customer>4) ){
//     let discount=standard*(1+(5/100));
//     console.log("the total amount:" + discount)
// }
// else if((roomtype=="standard" && nights>5) && (customer<=4)){
//     let discount=standard*(1-(5/100));
//     console.log("the total amount:" + discount)
// }
// else if((roomtype=="standard" && nights<=5) && (customer<=4)){
//     let discount=standard*(1-(10/100));
//      console.log("the total amount:" + discount)
// }
// else if((roomtype=="standard" && nights<=5) && (customer>4)){
//     let discount=standard*(1+(0/100));
//      console.log("the total amount:" + discount)
// }
// else if((roomtype=="deluxe" && nights>5) && (customer>4) ){
//     let discount=deluxe*(1+(5/100));
//     console.log("the total amount:" + discount)
// }
// else if((roomtype=="deluxe" && nights>5) && (customer<=4)){
//     let discount=deluxe*(1-(5/100));
//     console.log("the total amount:" + discount)
// }
// else if((roomtype=="deluxe" && nights<=5) && (customer<=4)){
//     let discount=deluxe*(1-(10/100));
//      console.log("the total amount:" + discount)
// }
// else if((roomtype=="deluxe" && nights<=5) && (customer>4)){
//     let discount=deluxe*(1+(0/100));
//      console.log("the total amount:" + discount)
// }
// else if((roomtype=="suite" && nights>5) && (customer>4) ){
//     let discount=suite*(1+(5/100));
//     console.log("the total amount:" + discount)
// }
// else if((roomtype=="suite" && nights>5) && (customer<=4)){
//     let discount=suite*(1-(5/100));
//     console.log("the total amount:" + discount)
// }
// else if((roomtype=="suite" && nights<=5) && (customer<=4)){
//     let discount=suite*(1-(10/100));
//      console.log("the total amount:" + discount)
// }
// else if((roomtype=="suite" && nights<=5) && (customer>4)){
//     let discount=suite*(1+(0/100));
//      console.log("the total amount:" + discount)
// }


// 14. Employee Performance Bonus Calculator

// Inputs are employee rating, experience in years, and department:

// * If the rating is excellent and experience is above five years, give a
// twenty percent bonus.
// * If the rating is good and experience is above three years, give a ten
// percent bonus.
// * If the rating is average, give a five percent bonus.

// Additionally, if the department is “Sales,” add a two percent incentive. Print
// the bonus percentage and remarks like “Outstanding,” “Good,” or “Needs
// Improvement.”

let rating=prompt("enter the rating of employee(excellent/good/average)")
let experiance=parseInt(prompt("enter the experiance of employee"))
let department=prompt("enter the department you are in(sales/it)")
let salary="30000"
if((rating=="excellent" && experiance>5) && (department=="sales")){
    let bonus= salary*(1+(22/100));
    console.log("you are Outstanding and your bonus:" + bonus)
}
else if((rating=="good" && department=="sales") && ( experiance>3)){
    let bonus= salary*(1+(12/100));
    console.log("you are Outstanding and your bonus:" + bonus)
}
else if((rating=="average" && department=="sales") ){
    let bonus= salary*(1+(7/100));
    console.log("you are Outstanding and your bonus:" + bonus)
}
else if((rating=="excellent" && experiance>5) && (department=="it")){
    let bonus= salary*(1+(20/100));
    console.log("you are Outstanding and your bonus:" + bonus)
}
else if((rating=="good" && department=="it") && ( experiance>3)){
    let bonus= salary*(1+(10/100));
    console.log("you are Outstanding and your bonus:" + bonus)
}
else if((rating=="average" && department=="it") ){
    let bonus= salary*(1+(5/100));
    console.log("you are Outstanding and your bonus:" + bonus)
}
