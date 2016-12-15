

var defaultPlotSketch = function(p) {
	// Initial setup

	var plotC2;
	var plotN;
	var plotC;
	var plotS;

	aqiLegend = p.createImg("http://public.media.smithsonianmag.com/legacy_blog/AQI.jpg"); //http://airnorthtexas.org/images/aqi.png");
	aqiLegend.position(510, 33);
	aqiLegend.size(600/1.1, 375/1.1);

	title = p.createImg("https://s27.postimg.org/jl88rvear/title.png");
	title.position(30, 33);
	title.size(600/1.3, 375/1.3);

	//http://www.environment.gov.au/protection/publications/factsheet-sulfur-dioxide-so2
	var sImg = p.createImg("https://s28.postimg.org/4g9vyujx9/s_Img.png");
	sImg.position(-10,100);
	sImg.size(300, 300);
	sImg.hide();
	
	//https://www.epa.gov/co-pollution/basic-information-about-carbon-monoxide-co-outdoor-air-pollution#What is CO
	var cImg = p.createImg("https://s23.postimg.org/ia1313izv/c_Img.png");
	cImg.position(43,100);
	cImg.size(300, 300);
	cImg.hide();

	//https://www.epa.gov/no2-pollution/basic-information-about-no2#What is NO2
	var nImg = p.createImg("https://s28.postimg.org/ozqf26jml/n_Img.png");
	nImg.position(143,100);
	nImg.size(300, 300);
	nImg.hide();

	//http://environment.nationalgeographic.com/environment/global-warming/pollution-overview/
	var c2Img = p.createImg("https://s24.postimg.org/ue9jqk5yd/c2_Img.png");
	c2Img.position(243,100);
	c2Img.size(300, 300);
	c2Img.hide();

//https://www3.epa.gov/airnow/tvweather/airnow_factsheet.pdf
/*	var good = p.color(0, 228, 0);
	var moderate = p.color(255,255,0);
	var unhealthy = p.color(255,0,0);*/

	var C2points = [];
	var Npoints = [];
	var Cpoints = [];
	var Spoints = [];
	var seed;

	p.setup = function() {
		var canvas = p.createCanvas(1070, 390);
		
		p.background(150);

		for (var i = 0; i < 100; i++) {
			C2points[i] = new GPoint(-100+i, 110 + (0.2*i*+0.6*i^2-0.1*i^3)-3*i^2*p.random(12,17));
			Npoints[i] = new GPoint(-100+i, 250 + (0.5*i*+0.2*i^2)-i^2*p.random(4,17));
			Spoints[i] = new GPoint(-100+i, 67 +  0.4*i- 0.3*i^3 + p.random(1,4));
			Cpoints[i] = new GPoint(-100+i, 160 + 0.2*i- 0.3*i^3 + p.random(2,5));
		}

		buttonS = p.createButton("SO2");
		buttonS.position(80, 355);
		buttonS.mousePressed(drawSResult);
		buttonS.mouseOver(showSimg);
		buttonS.mouseOut(hideSimg);

		buttonC = p.createButton("CO");
		buttonC.position(180, 355);
		buttonC.mousePressed(drawCResult);
		buttonC.mouseOver(showCimg);
		buttonC.mouseOut(hideCimg);

		buttonN = p.createButton("NO2");
		buttonN.position(280, 355);
		buttonN.mousePressed(drawNResult);
		buttonN.mouseOver(showNimg);
		buttonN.mouseOut(hideNimg);

		buttonC2 = p.createButton("CO2");
		buttonC2.position(380, 355);
		buttonC2.mousePressed(drawC2Result);
		buttonC2.mouseOver(showC2img);
		buttonC2.mouseOut(hideC2img);

		p.noLoop();
		
	}

	var drawSResult = function(){
		title.hide();
		console.log("SO2 button click registered");
		/*badImg.position(0, 0);
		badImg.size(600, 350);*/
		p.background(0, 228, 0);//badImg);
		plotS = new GPlot(p);
		plotS.setPos(25, 25);
		plotS.setPoints(Spoints);
		plotS.getXAxis().setAxisLabelText("Time (hours till now)");
		plotS.getYAxis().setAxisLabelText("Particulate concentration (PPB)");
		plotS.setTitleText("Sulfur Dioxide");
		plotS.defaultDraw();

	}

	var drawCResult = function(){
		title.hide();
		console.log("CO button click registered");
		p.background(255,255,0);
		plotC = new GPlot(p);
		plotC.setPos(25, 25);
		plotC.setPoints(Cpoints);
		plotC.getXAxis().setAxisLabelText("Time (hours till now)");
		plotC.getYAxis().setAxisLabelText("Particulate concentration (PPB)");
		plotC.setTitleText("Carbon Monoxide");
		plotC.defaultDraw();
	}

	var drawNResult = function(){
		title.hide();
		console.log("NO2 button click registered");
		p.background(255,0,0);
		plotN = new GPlot(p);
		plotN.setPos(25, 25);
		plotN.setPoints(Npoints);
		plotN.getXAxis().setAxisLabelText("Time (hours till now)");
		plotN.getYAxis().setAxisLabelText("Particulate concentration (PPB)");
		plotN.setTitleText("Nitrogen Dioxide");
		plotN.defaultDraw();
	}

	var drawC2Result = function(){
		title.hide();
		console.log("CO2 button click registered");
		p.background(255,255,0);
		plotC2 = new GPlot(p);
		plotC2.setPos(25, 25);
		plotC2.setPoints(C2points);
		plotC2.getXAxis().setAxisLabelText("Time (hours till now)");
		plotC2.getYAxis().setAxisLabelText("Particulate concentration (PPB)");
		plotC2.setTitleText("Carbon Dioxide");
		plotC2.defaultDraw();
	}

	var showSimg = function(){
	sImg.show();
	}
	var hideSimg = function(){
	sImg.hide();
	}
	var showCimg = function(){
	cImg.show();
	}
	var hideCimg = function(){
	cImg.hide();
	}
	var showNimg = function(){
	nImg.show();
	}
	var hideNimg = function(){
	nImg.hide();
	}
	var showC2img = function(){
	c2Img.show();
	}
	var hideC2img = function(){
	c2Img.hide();
	}
};