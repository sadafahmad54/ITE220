var myWindow = {
	screenX: window.screenX,
	screenY: window.screenY,
	screenW: window.screen.width,  //put the names of the premade variable names from the properties given in slides
	screenH: window.screen.height,
	location: window.location.pathname,

	render: function() {
		var ele = document.getElementById("location");//get value of location and put it in the input box of html of location
		ele.value = this.location;

		ele = document.getElementById("sx");
		ele.value = this.screenX;


		ele = document.getElementById("sy");
		ele.value = this.screenY;

		ele=document.getElementById("sw");
		ele.value=this.screenW;

		ele = document.getElementById("sh");
		ele.value = this.screenH;



	}
};


myWindow.render();