var express = require('express');
var app = express();
var path = require("path");

function chance(percent){
	return Math.random() * 100 < percent;
}
setInterval(function(){
	for(var i = 0; i < data.statuses.length; i++){
		data.statuses[i].lat += (Math.random() - 0.5) / 10000;
		data.statuses[i].lon += (Math.random() - 0.5) / 10000;
	}
}, 1000);
var data = {
	statuses: [
		{
			lat: 46.2740396,
			lon: 20.1479255,
			status: 1,
			trackingDeviceId: 1,
			trackingDeviceName: "Samsung Galaxy S2",
			userName: "Márti"
		},
		{
			lat: 46.2740396,
			lon: 20.1479255,
			status: 1,
			trackingDeviceId: 2,
			trackingDeviceName: "Samsung Galaxy Mini",
			userName: "Csati"
		},
		{
			lat: 46.2740396,
			lon: 20.1479255,
			status: 1,
			trackingDeviceId: 3,
			trackingDeviceName: "Nexus",
			userName: "Boróka Mihály"
		}
	]
};

app.use(express.static(path.join(__dirname, 'public')));

app.get('/tracking_devices', function(req, res) {
	res.type('application/json');
	res.send(data);
});

app.listen(8000);