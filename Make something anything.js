//"it would require the capture of just 0.3% of the light falling on the Sahara and Middle Eastern deserts to provide all of Europe's energy needs"
//My Source: https://www.theguardian.com/environment/2008/jul/22/solarpower.windpower
function setup() { 
  createCanvas(400, 400);
	//This is setting up my canvas dimensions
} 

function draw() { 
  background(220);
}

var img;
var img2;
var img3
//Here, I am setting up my variables for my images below!

function setup() {
  createCanvas(400, 400);
  img = createImg('https://img.purch.com/rc/696x392/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAzMC85NzIvb3JpZ2luYWwvc2h1dHRlcnN0b2NrXzkzNDA0Mjg3LmpwZw==');
  img.hide();
	//This is the image of the desert, to represents the Sahara
	img2 = createImg('http://www.pngmart.com/files/3/Sun-PNG-Photos.png');
	img2.hide();
	//Here, I have an image of the sun to represent the solar energy in the Sahara
	img3 = createImg('http://bestjobineurope.com/wp-content/uploads/2016/08/nevezetessegek_szines-2.png');
	img3.hide();
	//My last image is of Europe, which shows what the .3% of the Sahara Deserts solar energy could possibly power. 
  background(100);
}

function draw() {
	createCanvas(500,500);
image(img, 0, 0, width/1, height/1); 
image(img2, 0, 0, width/2, height/2); 
image(img3, 30, 250, width/1, height/2); 
	//This is where I set the dementions and locations of the images on my canvas
	
textSize(32)
text(".3%", 100, 195)
fill (200, 170, 130)
	//This is where I put the ".3%" of my statistic 
	
}

