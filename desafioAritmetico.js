superiorA =  Math.pow(6*(3+2),2);
inferiorA = 3*2;
superiorB = Math.pow((1-5)*(2-7),2);
inferiorB = Math.pow(2,2);

resultado = Math.pow((superiorA / inferiorA) - (superiorB/inferiorB),3) / Math.pow(10,3);

console.log(resultado);

