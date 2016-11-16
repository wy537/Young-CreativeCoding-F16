/* William Young
DAQS Firebase
Vizualizing JSON Firebase data
*/

var offset
var scaled
var base
var heightfactor

function setup(){
	createCanvas(1600,600);
	background(0, 0, 50);
	offset = 50;
	scaled = 2;
	base = 500;
	heightfactor = 10;

	var config = {
    apiKey: "AIzaSyCmtRKFuwc3t5ewQKMP1LddI4AcnmmkOXg",
    authDomain: "air-quality-readings.firebaseapp.com",
    databaseURL: "https://air-quality-readings.firebaseio.com",
    storageBucket: "air-quality-readings.appspot.com",
    messagingSenderId: "620752272829"
  	};

  	firebase.initializeApp(config);

  	var database = firebase.database();

  	var ref = database.ref("readings");
	ref.on("value", gotData); //, errData);

	function gotData(data) {
  	var readings = data.val();
  	// Grab the keys to iterate over the object
  	var keys = Object.keys(readings);

	for (var i = 0; i < 500; i++){ //keys.length; i++) {
    	var key = keys[i];
    	// Look at each reading object!
    	var reading = readings[key];
    	println(reading.Temp);
    	println(i)

    	var mappedColor = map(reading.Temp, 0, 100, 0, 255);
		fill(0, 110+0.1*i, 150);
		textSize(10);
		rect(offset + scaled*i, base-heightfactor*reading.Temp, scaled - 5, heightfactor*reading.Temp);
		fill(255);
		if (i % 100 == 0){
			text(reading.Time, offset + scaled*i, base + 20, 190);
		}
		if (i % 10 == 0 && i<100){
			text(int(i), offset - 20, base-heightfactor*i, 30);
		}

  	}
  	textSize(40);
	text("DAQS: Air Quality Readings (Temp)", 100, 100);
	}

}


/*function draw(){
	
	for(var i=0; i<myData.animals.length; i++){
		tempTemp = myData.current_observation[i].temp_f;
		tempTime = myData.animals[i].height;
		var mappedColor = map(tempTemp, 0, 100, 0, 255);

		fill(0, 110+20*i, 150);
		textSize(36);
		rect(offset + scaled*i, base-tempHeight, scaled - 5, tempHeight)
		text(tempName, offset + scaled*i, base + 40, scaled);
		}
	background(0, 0, mappedColor);
}

*/