/* William Young
DAQS Firebase
Vizualizing JSON Firebase data
*/

var offset
var scaled
var displayRange
var base
var heightfactor
var globalData
var quantityDisplayed
var chosen
var currentDisplay
var config

function setup(){
	createCanvas(1600,600);
	
	offset = 50;
	scaled = 2;
	displayRange = 400;
	base = 500;
	
	chosen = 5;
	quantityDisplayed = ["Temp", "CO", "NO2", "O3", "CO2", "Select Parameter"]

	config = {
    apiKey: "AIzaSyCmtRKFuwc3t5ewQKMP1LddI4AcnmmkOXg",
    authDomain: "air-quality-readings.firebaseapp.com",
    databaseURL: "https://air-quality-readings.firebaseio.com",
    storageBucket: "air-quality-readings.appspot.com",
    messagingSenderId: "620752272829"
  	};

  	firebase.initializeApp(config);
  	mouseClicked();

  	//setInterval(gotData, 20000);
}

function mouseClicked(){
	//globalData;


	background(0, 0, 50);
	println("pulled new data")
	var database = firebase.database();
  	var ref = database.ref("readings");
	ref.on("value", gotData); //, errData);

	textSize(30);
  	for(i=0;i<quantityDisplayed.length-1;i++){
  		fill(100);
  		rect(995, 35+30*i, 100, 28);
  		fill(255);
  		text(quantityDisplayed[i], 1000, 60+30*i);
  	}
	

	function gotData(data) {
		globalData = data
	  	var readings = data.val();
	  	var keys = Object.keys(readings);

	  	//for (var i = 0; i < reading.length; i++){
	  	
		for (var i = 0; i < displayRange; i++){ //keys.length; i++) {
	    	var reading = readings[keys[keys.length-displayRange+i]];
	    	println("Temp", reading.Temp);
	    	println(i)

	    	if(995<mouseX && mouseX<1095 && 35<mouseY && mouseY<63){
				println("Button 1");
				chosen = 0;
				currentDisplay = reading.Temp;
				heightfactor = 8;
				if (i % 10 == 0 && i<60){
				textSize(10);
				text(int(i), offset - 20, base-heightfactor*i, 30);
				}
			}
			if(995<mouseX && mouseX<1095 && 65<mouseY && mouseY<93){
				println("Button 2");
				chosen = 1;
				currentDisplay = reading.CO;
				heightfactor = 100;
				if (i/heightfactor % 0.01 == 0 && i<100){
				textSize(10);
				text(float(i/heightfactor), offset - 20, base-heightfactor*i, 30);
				}
			}
			if(995<mouseX && mouseX<1095 && 95<mouseY && mouseY<123){
				println("Button 3");
				chosen = 2;
				currentDisplay = reading.NO2;
				heightfactor = 250;
				if (i/heightfactor % 0.001 == 0 && i<100){
				textSize(10);
				text(float(i/heightfactor), offset - 20, base-heightfactor*i, 30);
				}
			}
			if(995<mouseX && mouseX<1095 && 125<mouseY && mouseY<153){
				println("Button 4");
				chosen = 3;
				currentDisplay = reading.O3;
				heightfactor = 200;
				if (i/heightfactor % 0.001 == 0 && i<100){
				textSize(10);
				text(float(i/heightfactor), offset - 25, base-heightfactor*i, 30);
				}
			}
			if(995<mouseX && mouseX<1095 && 155<mouseY && mouseY<183){
				println("Button 5");
				chosen = 4;
				currentDisplay = reading.CO2;
				heightfactor = 100;
				if (i/heightfactor % 0.001 == 0 && i<100){
				textSize(10);
				text(float(i/heightfactor), offset - 20, base-heightfactor*i, 30);
				}
			}

	    	var mappedColor = map(reading.currentDisplay, 0, 100, 0, 255);
			fill(0, 110+0.1*i, 150);
			textSize(10);
			rect(offset + scaled*i, base-heightfactor*currentDisplay, scaled - 5, heightfactor*currentDisplay);
			fill(255);
			if (i % 100 == 0){
				text(reading.Time, offset + scaled*i, base + 20, 190);
			}
			

	  	}
	  	textSize(40);
		text("DAQS Air Quality Readings | " + quantityDisplayed[chosen], 100, 100);
		println(reading);

	}
}

function draw(){  	

}