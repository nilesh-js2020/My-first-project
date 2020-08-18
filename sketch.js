var spot = {
  x: 0,
  y: 0,
  d: 0,
}
var col = {
  r: 0,
  g: 0,
  b: 0,
}
var fr = .5
var x = 0
var y = 0
var Extracanvace

function setup() {
  createCanvas(400, 400);
  Extracanvace = createGraphics(400, 400)
  Extracanvace.clear()
  background(220)
}

function draw() {


 ellipse(spot.x, spot.y, spot.d)
 Extracanvace. textSize(50)
  fill(col.r, col.g, col.b)
  frameRate(fr);
  Extracanvace.text("Happy Birthday", x, y);
 image(Extracanvace, 0, 0);
  x = random(100,200)
  y = random(50,250)
 
  spot.x = random(0, height)


  spot.y = random(0, width)

  col.r = random(100, 255)
  col.g = random(0, 00)
  col.b = random(0, 200)
  fill(col.r, col.g, col.b, 150)
 noStroke()


  spot.d = random(50, 100)
}

function mouseClicked() {
  background(220)
}