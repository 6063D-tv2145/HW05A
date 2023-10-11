let data;
let treedata;

let GoodTrees;
let nrGoodTrees;

let FairTrees;
let nrFairTrees;

let PoorTrees;
let nrPoorTrees;

let offsetX = 50
let offsetY=50


function preload() {
  data = loadJSON("./Tree-Census-2015.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  data = Object.values(data);

  //filter by good health & borough, Brooklyn
  GoodTrees = data.filter(column => column.health === 'Good'&& column.borough === 'Brooklyn');

  //calculate the number of Good health trees in Brooklyn
  nrGoodTrees= GoodTrees.length;

  //filter by fair health & borough, Brooklyn
  FairTrees = data.filter(column => column.health === 'Fair'&& column.borough === 'Brooklyn');

  //calculate the number of fair health trees in Brooklyn
  nrFairTrees= FairTrees.length;

  //filter by poor health & borough, Brooklyn
  PoorTrees = data.filter(column => column.health === 'Poor'&& column.borough === 'Brooklyn');

  //calculate the number of poor health trees in Brooklyn
  nrPoorTrees= PoorTrees.length;
}

function draw() {
  background(245,241,231);
  strokeWeight(0)

  //tree trunk
  fill(112, 84, 63);
  rect(width/2-100, height-300, 200, 300);

  // draw the ellipse for good health trees in BK
  fill(119,237,124)
  ellipse(width/2, 350, nrGoodTrees/20);

  // draw the ellipse for fair health trees in BK
  fill(50,199,92)
  ellipse(width/2, 620, nrFairTrees/20);

  // draw the ellipse for poor health trees in BK
  fill(30,122,61)
  ellipse(width/2, 650, nrPoorTrees/20);


  // Descriptor
  //Title
  textSize(18);
  fill("black");
  textFont('Montserrat');
  text('Tree Health in Brooklyn (2015)', offsetX-10, offsetY);

  //Good Health in BK Decriptor
  fill(119,237,124)
  ellipse(offsetX, offsetY+30, 15, 15);
  fill(0);
  text('Good Health: ' + nrGoodTrees + ' trees', offsetX+20, offsetY+38);


  fill(50,199,92);
  ellipse(offsetX, offsetY+60, 15, 15);
  fill(0);
  text('Fair Health: ' + nrFairTrees + ' trees', offsetX+20, offsetY+68);

  fill(30,122,61);
  ellipse(offsetX, offsetY+90, 15, 15);
  fill(0);
  text('Poor Health: ' + nrPoorTrees + ' trees',offsetX+20, offsetY+98);

}
