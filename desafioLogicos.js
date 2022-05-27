/*
    utilizar operadores lógicos &&(and), ||(or), ^(xor), !(denial).
    Se um trabalhador conseguir serviço para terça e quinta ele irá ao shooping 
    com a familia comprar uma TV de 50 e tomar sorvete. Caso consiga trabalho somente para 
    terça ou somente para quinta, ele irá ao shopping com a familia e comprara uma TV de 32 e
    ira tomar sorvete com a familia. Caso não trabalhe nenhum dos dias ficara em casa.

    Observação: o Javascript não possui o operador XOR. Para isso será criado uma função.
*/ 

    terça = false;
    quinta = false;   


    TV50 = terça && quinta;
    TV32 = myXOR(terça,quinta);
    Sorvete = terça || quinta;
    ficarCasa = !Sorvete;

    console.log(TV50);
    console.log(TV32);
    console.log(Sorvete);
    console.log(ficarCasa);


    function myXOR(op1,op2){
        return (op1 || op2) && !(op1 && op2);
    }

   
