let canvasWidth = 400;
let canvasHeight = 400;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  noLoop();
}

function draw() {
  background("#959DCB");
  
  desenharPlano();
  
  desenharGraminha(200);
}

function desenharPlano() {
  fill("#292D3E");
  quad(120, 200,
       280, 200,
       350, 300,
       50, 300);
}

function desenharGraminha(numeroGraminha) {
  for(let i = 0; i < numeroGraminha; i++) {
    noFill();
    let r = 217;
    let g = 217;
    let b = random(150, 255);
    stroke(r, g, b, random(50, 150));
    
    bezier(random(120, 290), random(200, 300),
           random(180, 250), random(180, 250),
           random(120, 250), random(120, 250),
           random(50, 350), random(50)
    );
  }
}