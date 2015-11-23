var price;
var quantity;
var total;
 price= 100;
 quantity= 2;
 total= price*quantity;

//document.write("Total is " + total);

var totalPriceEle = document.getElementById("totalPrice");
totalPriceEle.textContent ="$" + total;
