var url; 
var globalData; 
var baseurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; 
var apikey = '00139f0960fa42e2a4f51d47a8ceafb6'; 
var query; 
var index = 0;
var responseLen;
var heading;

function setup() {
	createCanvas(1000,800);
	query = "CitiBike";
	url = baseurl + "?api-key=" + apikey + "&q=" + query; 
	loadNewData();
	printSnippet();

	input = createInput("Specify headline here");
	input.position(200, 20);
	inputButton = createButton("Submit");
	inputButton.position(400, 20);
	inputButton.mousePressed(readInput);
	setInterval(printSnippet, 2000);
	

}

function gotData(myData){
	globalData = myData;
}

function loadNewData(){
	heading = query;
	
	url = baseurl + "?api-key=" + apikey + "&q=" + query;
	myData = loadJSON(url, gotData);
	gotData;

	

}

function printSnippet(){
	if(globalData){
		background(255); 
		if(globalData.response.docs.length < 10){
			responseLen = globalData.response.docs.length; 
		}
		else{
			responseLen = 10; 
		}
		textSize(30);
		fill(0, 100, 250);
		text(heading, 50, 37);
		
		for(i=0; i<globalData.response.docs.length; i++){
			var snippet = globalData.response.docs[i].snippet;
			textSize(15);
			fill(0, 100, 250, 100);
			noStroke();
			rect(40, 56+(50*i), 920, 40); 
			fill(10*i);
			text(snippet, 50, 70+(50*i), 900);

			}
		
}
}


function readInput(){
	query = input.value();
	loadNewData();
	
}