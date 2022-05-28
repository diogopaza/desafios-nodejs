var readlineSync = require('readline-sync');

var dia = readlineSync.question("Digite o dia da semana");

if(dia.toLowerCase() === "domingo"){
    console.log("1");
}
else if(dia.toLowerCase() === "segunda"){
    console.log("2");
}
else if(dia.toLowerCase() === "terça"){
    console.log("3");
}
else if(dia.toLowerCase() === "quarta"){
    console.log("4");
}
else if(dia.toLowerCase() === "quinta"){
    console.log("5");
}
else if(dia.toLowerCase() === "sexta"){
    console.log("6");
}
else if(dia.toLowerCase() === "sabado"){
    console.log("7");
}
else{
    console.log("Dia inválido");
}

