var sax1, sax2, sax3 , noiseI
function easeInBack(x){
const c1 = 1.70158;
const c3 = c1 + 1;
return c3 * x * x * x - c1 * x * x;
}
function preload() {

 sax1 = loadSound("sax1.mp3")
sax2 = loadSound("sax2.mp3")
	sax3 = loadSound("sax3.mp3")
	noiseI = loadImage("noise.jpg")
}



function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}
var touch = 0
var touch2 = 0
var touch3 = 0

function draw() {
	background(0,20)
	// ellipse(mouseX, mouseY, 20, 20);
	fill("#294F97")
	rect(0,0,width/3,height)
	fill("black")
	rect(width/3,0,width/3,height)
	fill("white")
	rect(width/3*2,0,width/3,height)
	
	let delta = frameCount - touch
	let ratio = map(delta,0,50,50,0,true)
		push()
	translate(width/6,height/2)
	for(var i=5;i>0;i--){
		noStroke()
		fill(ratio+100,ratio*2-i+100,i+200)
		
		ellipse(sin(ratio-i*10)*ratio*2,0,150+i*ratio)
	
	}
	
		pop()
		push()
	let delta2 = frameCount - touch2
	let ratio2 = map(delta2,0,50,1,0,true)
	translate(width/2,height/2)
	for(var o=0;o<10;o++){
	rectMode(CENTER)
	strokeWeight(5)
		fill(o*2+ratio2*2+10,ratio2*2-o*5+80,ratio2+o*2+200)
	
		rect(cos(ratio2-o*2)*ratio2*2,cos(ratio2-o*5),150+o*ratio2)
		scale(0.9)
			rotate(0.8+(ratio2>0.5?1:0))
	
	}
	
		pop()
			push()
	let delta3 = frameCount - touch3
	let ratio3 = map(delta3,0,50,0,1,true)
	translate(width-(width/3)+(width/3)/2,height/2)
	scale(2)
		noStroke()
		fill("#34BED7")
	rotate(easeInBack(ratio3)*PI)
	triangle(40,40,
					 -40,40,
					 0,-40)

	for(var w=0;w<5;w++){
	fill(229-w*30, 224, 89+w*40)
		scale(1.2-ratio3*0.2)
		rotate(1-ratio3)
		triangle(40,40,
					 -40,40,
					 0,-40)
	// strokeWeight(5)
		// rotate(1-ratio)
		// triangle(30, 75, 58, 20, 86, 75);
		// fill(o*2+ratio2*2+10,ratio2*2-o*5+80,ratio2+o*2+200)
		
	
	
	}
	
		pop()
		
	push()
		blendMode(MULTIPLY)
		image(noiseI,0,0,width,height)
	pop()
}

function windowResized(){

	resizeCanvas(windowWidth,windowHeight)
}
function mousePressed(){
	let select = int(mouseX/(width/3))
	if (select==0){
	sax1.play()
	touch = frameCount
	}
	if (select==1){
	sax2.play()
	touch2 = frameCount
	}
	if (select==2){
	sax3.play()
	touch3 = frameCount
	}
	
	
	

}