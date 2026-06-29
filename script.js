let pessoas=[];

function cadastrar(){

let nome=document.getElementById("nome").value;
let idade=parseInt(document.getElementById("idade").value);
let media=parseFloat(document.getElementById("media").value);

if(nome=="" || isNaN(idade) || isNaN(media)){

alert("Preencha todos os campos.");

return;

}

pessoas.push({nome,idade,media});

mostrarTabela();

}

function mostrarTabela(){

let html="";

for(let p of pessoas){

html+=`
<tr>

<td>${p.nome}</td>

<td>${p.idade}</td>

<td>${p.media}</td>

<td>${p.idade>=18?"Sim":"Não"}</td>

</tr>
`;

}

document.getElementById("tabela").innerHTML=html;

}

function ordenar(){

pessoas.sort((a,b)=>a.nome.localeCompare(b.nome));

mostrarTabela();

}

function processarSplit(){

let texto=document.getElementById("listaNomes").value;

let vetor=texto.split(",");

document.getElementById("splitResultado").innerHTML=vetor.join("<br>");

}

function verificarTipo(){

let valor=document.getElementById("tipo").value;

if(isNaN(valor)){

document.getElementById("tipoResultado").innerHTML="String";

}else{

document.getElementById("tipoResultado").innerHTML="Número";

}

}

function switchDia(){

let dia=document.getElementById("dia").value;

let texto="";

switch(dia){

case "1":
texto="Segunda-feira";
break;

case "2":
texto="Terça-feira";
break;

case "3":
texto="Quarta-feira";
break;

case "4":
texto="Quinta-feira";
break;

case "5":
texto="Sexta-feira";
break;

default:
texto="Outro dia";

}

document.getElementById("diaResultado").innerHTML=texto;

}

function bocaUrna(){

let votos=0;

let idade=prompt("Informe sua idade:");

idade=parseInt(idade);

switch(true){

case idade<16:

alert("Não pode votar.");

break;

case idade<18:

alert("Voto facultativo.");

break;

default:

while(votos!=80){

votos=parseInt(prompt("Digite 80 para votar."));

}

alert("Voto confirmado.");

}

document.getElementById("urna").innerHTML="Processo encerrado.";

}

function calcular(op){

let a=Number(document.getElementById("n1").value);

let b=Number(document.getElementById("n2").value);

let r=0;

switch(op){

case "+":
r=a+b;
break;

case "-":
r=a-b;
break;

case "*":
r=a*b;
break;

case "/":
r=b==0?"Divisão impossível":a/b;
break;

}

document.getElementById("resultadoCalc").innerHTML=r;

}

function verNota(){

let nota=parseFloat(document.getElementById("nota").value);

let resultado="";

if(nota>=6){

resultado="Aprovado";

}else if(nota>=1){

resultado="Recuperação";

}else{

resultado="Reprovado";

}

document.getElementById("resultadoNota").innerHTML=resultado;

}

function trocarCor(){

const cores=["#F08080","#90EE90","#ADD8E6","#FFFACD","#DDA0DD"];

document.body.style.background=cores[Math.floor(Math.random()*cores.length)];

}

function trocarImagem(){

document.getElementById("imagem").src="https://picsum.photos/250?random="+Math.random();

}

function mostrarData(){

document.getElementById("data").innerHTML=new Date().toLocaleString();

}

function esconderTexto(){

let texto=document.getElementById("texto");

texto.style.display=texto.style.display==="none"?"block":"none";

}
