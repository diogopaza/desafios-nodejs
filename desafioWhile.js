let readLineSync = require('readline-sync');

contNotas = 0;
somadorNotas = 0;
nota = 0;

while(nota != -1){
   nota = readLineSync.question("Digite uma nota de 0 a 10 ou tecle -1 para sair");
   if(nota >=0 && nota<=10){
     contNotas++;
     somadorNotas += parseFloat(nota); 
   }
   if(nota == -1){
       console.log("Saindo do sistema");
   }
   else
   {
       console.log("nota inválida");
   }
   
}
console.log(somadorNotas);
media = somadorNotas / contNotas;
console.log("O total de notas válidas digitadas foi: " + contNotas);
console.log("A média é " + media);