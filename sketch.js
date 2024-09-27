let suaidade;
let titulo;
let corpo;
let genero;
let açãoeaventura;
let rpg;
let estratégia;
let jogos = {
  menor10:{
    açãoeaventura: "Super Mario Odyssey",
    rpg: "Pokémon Scarlet & Violet",
    estratégia: "Plants vs Zombies"
  },
 entre10e14:{
    açãoeaventura: "Minecraft",
    rpg: "Kingdom Hearts III",
    estratégia: "Csketch.js"
 },
  entre14e16:{
    açãoeaventura: "Horizon Forbidem West",
    rpg: "The Outer Worlds",
    estratégia: "Age of Empires IV"
  },
  entre16e18:{
    açãoeaventura: "Red Dead Redemption 2",
    rpg: "The Witcher 3: Wild Hunt",
    estratégia: "Total War: Three Kingdons"
  },
  maior18:{
    açãoeaventura: "The Last Us Part II",
    rpg: "Cyberpunk 2077",
    estratégia: "Total War: Warhammer II" 
  }
};
  
let botao;

function setup() {
  createCanvas(850, 400).position(100,100);
  titulo = "Playwrite CU";
  corpo = "Handjet";
  genero = "Merriweather";
  createSpan("qual a sua idade??").position(580,530).addClass("esconde");
  suaidade = createInput("").position(590,585).addClass("esconde");
  açãoeaventura = createCheckbox("você gosta de jogos de ação e aventura?").position(100,600).addClass("esconde");
  rpg = createCheckbox("você gosta de jogos de rpg?").position(100,650).addClass("esconde");
  estratégia = createCheckbox("você gosta de jogos de estratégia?").position(100,700).addClass("esconde");

  botao = createButton("APERTE O BOTÃO").position(width/2, 520);
  botao.mousePressed(bota);
  botao.addClass("botao");
}

function bota(){
  selectll('.esconde').forEach((el) => el.removeClass('esconde'));
  botao.hide();
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
  stroke ("purple");
  textAlign(CENTER, CENTER);
  textSize(27);
  text("MELHOR INDICADOR DE JOGOS 2024", width/2, 30);
  textFont(corpo);
  
  fill("yellow");
  textAlign(CENTER,CENTER);
  textSize(40);
  text(jogo, width/2, height/2);
  textFont(titulo);

}

function  mostrajogo(idade, checkaçãoeaventura, checkrpg, checkestratégia){
  if (isNaN(idade)){
    return "Idade Inválida"
  }
  if (idade < 5){
    return "Vaza Daqui mlk, vai montar um quebra-cabeça"
  } else
    if (idade > 120){
      return "Sai daqui defunto ;-;"
    }
  if (idade >=5 && idade < 10){
    if (checkaçãoeaventura){
      return jogos["menor10"]["açãoeaventura"];
    }
      if (checkrpg){
      return jogos["menor10"]["rpg"];
    }
      if (checkestratégia){
      return jogos["menor10"]["estratégia"];
    }

    }
 else if (idade >=10 && idade < 14){
    if (checkaçãoeaventura){
      return jogos["entre10e14"]["açãoeaventura"];
    }
      if (checkrpg){
      return jogos["entre10e14"]["rpg"];
    }
      if (checkestratégia){
      return jogos["entre10e14"]["estratégia"];
    }
  }
 else if (idade >=14 && idade < 16){
    if (checkaçãoeaventura){
      return jogos["entre14e16"]["açãoeaventura"];
    }
      if (checkrpg){
      return jogos["entre14e16"]["rpg"];
    }
      if (checkestratégia){
      return jogos["entre14e16"]["estratégia"];
    }
  }
   else if (idade >=16 && idade < 18){
    if (checkaçãoeaventura){
      return jogos["entre16e18"]["açãoeaventura"];
    }
      if (checkrpg){
      return jogos["entre16e18"]["rpg"];
    }
      if (checkestratégia){
      return jogos["entre16e18"]["estratégia"];
    }
  }
  else if (idade >=18){
    if (checkaçãoeaventura){
      return jogos["maior18"]["açãoeaventura"];
    }
      if (checkrpg){
      return jogos["maior18"]["rpg"];
    }
      if (checkestratégia){
      return jogos["maior18"]["estratégia"];
    }
  } return "Coloca alguma idade maluco";
}

