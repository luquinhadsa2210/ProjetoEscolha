let suaidade;
let açãoeaventura;
let rpg;
let estratégia;

function setup() {
  createCanvas(400, 400);
  titulo = "Handjet";
  corpo = "Playwrite CU";
  genero = "Merriweather";
  createSpan("qual a sua idade??😁😁").position(580,530);
  suaidade = createInput("").position(590,585);
  açãoeaventura = createCheckbox("você gosta de jogos de ação e aventura?").position(100,600);
  rpg = createCheckbox("você gosta de jogos de rpg?").position(100,650)
  estratégia = createCheckbox("você gosta de jogos de estratégia?").position(100,700);
}

function draw() {
  background("black");
  let idade = parseInt(suaidade.value());
  let checkaçãoeaventura = açãoeaventura.checked();
  let checkrpg = rpg.checked();
  let checkestratégia = estratégia.checked();
  let jogo = "Insira suas preferências";
  if (suaidade.value() !==""){
    jogo = mostrajogo(idade, checkaçãoeaventura, checkrpg, checkestratégia)
}
  fill("white");
  stroke ("green");
  textFont(corpo);
  textAlign(CENTER,CENTER);
  textSize(40);
  text(jogo, width/2, height/2);
}
