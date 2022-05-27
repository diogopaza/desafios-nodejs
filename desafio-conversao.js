/*
    o objetivo é obter a média aritmética de três salários; o usuário deve digitar
    os 3 salários, podendo usar como entrada para separar as casas decimais tanto vírgula
    como ponto.

*/

var readlineSync = require('readline-sync');

var media,salario1, salario2, salario3;

salario1 = readlineSync.question('Digite o primeiro salário');
salario2 = readlineSync.question('Digite o segundo salário');
salario3 = readlineSync.question('Digite o terceiro salário');
media = (parseInt(salario1) + parseInt(salario2) + parseFloat(salario3.replace(",","."))) /3;
console.log("A média salaria é:" + media);






    
    


