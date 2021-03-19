
alert("Developed by: JudaiDev. Enjoy the Game!")



// Tamanho da Bolinha:
let xBolinha = 300
let yBolinha = 200
let dBolinha = 25
let raio = dBolinha/2

// Velocidades da Bolinha:
let velocidadeXBolinha = 8
let velocidadeYBolinha = 8

// Tamanho da Raquete:
let xRaquete = 5
let yRaquete = 150
let cRaquete = 10
let aRaquete = 90

// Raquete do Oponente:
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let cRaqueteOponente = 10
let aRaqueteOponente = 90
let velocidadeyOponente;



let colidiu = false;


//placar do jogo:
let MeusPontos = 0;
let PontosOponente = 0;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(000);
  mostra_bolinha();
  movimenta_bolinha();
  verifica_Colisão();
  Raquete(xRaquete, yRaquete);
  movimento_raquete();
  //colisão();
  VerificaColisão2(xRaquete, yRaquete);
  RaqueteOponente(xRaqueteOponente, yRaqueteOponente);
  movimento_raqueteOponente();
  VerificaColisão2(xRaqueteOponente, yRaqueteOponente);
  IncluiPlacar();
  MarcaPonto(MeusPontos, PontosOponente);
}

function mostra_bolinha(){
  circle(xBolinha,yBolinha,dBolinha);
}

function movimenta_bolinha(){
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
  }

function verifica_Colisão(){
  if(xBolinha + raio > width || 
    xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  
  if(yBolinha + raio > height || 
    yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
  
}

function Raquete(x, y){
  rect(x, y, cRaquete , aRaquete);
}

function RaqueteOponente(){
  rect(xRaqueteOponente, yRaqueteOponente , cRaqueteOponente , aRaqueteOponente);
}



function movimento_raquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  
  }
}

function colisão(){
  if (xBolinha - raio < xRaquete + cRaquete && yBolinha - raio < yRaquete + aRaquete && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

function VerificaColisão2(x, y){
  colidiu = collideRectCircle(x,y,cRaquete,aRaquete,xBolinha,yBolinha,raio);
  if (colidiu){velocidadeXBolinha *= -1;
    }
}



function movimento_raqueteOponente(){
  velocidadeyOponente = yBolinha - yRaqueteOponente - cRaquete/2 - 30;
  yRaqueteOponente += velocidadeyOponente
  
}

function IncluiPlacar(){
 stroke(255)
 textSize(16);
 textAlign(CENTER);
 fill(color(0, 0, 255));
 rect(150, 10, 40, 20);
 fill(255)
 text(MeusPontos, 170, 26);
 fill(color(255, 0, 0));
 rect(390, 10, 40, 20);
 fill(255)
 text(PontosOponente, 410, 26);
}

function MarcaPonto(){
  if (xBolinha > 585){
     MeusPontos += 1;
  }
  if (xBolinha < 20){
    PontosOponente += 1;
  }
}