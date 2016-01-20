//Sadaf Ahmad 

 

$(function(){


	  

	$("a").on("click",function(e){

		e.preventDefault();
		//alert(this.text);
		var city=this.text.toLowerCase();
		$.ajax({
			type:'GET',
			url:'http://api.openweathermap.org/data/2.5/weather?q='+ city +' &appid=2de143494c0b295cca9337e1e96b00e0' ,
			success: function(data){
		 
				function convertCelsius(temp) {
					temp = Math.round(temp - 273.15);
					return (temp  + " &deg;C");
				};
				function convertFarenheit(temp) {
					temp = Math.round((temp * 9 / 5) - 459.67);
					return (temp  + " &deg;F");
				};
				//console.log(data.name);
				$("#container").html(data.name +":" + convertCelsius(data.main.temp));


				$("#celsius").click(function(){
					$("#container").html(data.name +":" + convertCelsius(data.main.temp));
				});
				$("#fahrenheit").click(function(){
					$("#container").html(data.name +":" + convertFarenheit(data.main.temp));
				});
			}

		});
	});
});

