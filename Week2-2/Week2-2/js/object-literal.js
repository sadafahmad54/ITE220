var hotel = {
	name: "Stamford Hotel",
	rooms: 40,
	booked: 25,


checkAvailability: function(){
	return this.room - this.booked;
}
};

var hotelName=hotel.name;
var roomsFree=hotel.checkAvailability;


var elName=document.getElementById('hotelName');
elName.textContent=hotel.name;

var elRooms=document.getElementById('rooms');
elName.textContent=hotel.checkAvailability();
