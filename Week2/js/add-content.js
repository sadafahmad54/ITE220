var price=[110,150, 300];
var Name;
var today;
//var quantity;
var total=0;
var discount_value=0;
var product=["Stamford T-shirt","Stamford Book","Stamford Band"];
 //price= 100;
 //quantity= 2;
 //total= price*quantity;
var greetings=document.getElementById("greetings");
var productList=document.getElementById("productList");
productList.innerHTML += "<li>" + product[0]+": $" + price[2]+"</li>";
productList.innerHTML += "<li>" + product[1]+": $" + price[1]+"</li>";
productList.innerHTML += "<li>" + product[2]+": $" + price[0]+"</li>";

total=price[0]+price[1]+price[2];
var totalPriceEle = document.getElementById("totalPrice");
totalPriceEle.textContent ="$" + total;

discount_value= total-((20/100)*total);
var discountPriceEle= document.getElementById("discount");
discountPriceEle.textContent="$" + discount_value;

Name='Sadaf';
var nameEle=document.getElementById("name");
nameEle.textContent= ""+Name + "  Thank You for shopping here!";

today=new Date() 
if(today.getHours() >= 0 && today.getHours() < 12) 
{      
document.getElementById('greetings').innerHTML='Good Morning!'; 
} 
else 
{      
document.getElementById('greetings').innerHTML='Good Evening!'; 
} 