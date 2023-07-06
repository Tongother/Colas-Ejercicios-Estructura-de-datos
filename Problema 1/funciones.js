const Cola_original = [ "amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"];
const Cola_1 = [], Cola_2 = [];;
let contador=0, index=0;;

for(i=0; i<=7; i++){

    if(i%2 === 0 ){
        Cola_1[index]=Cola_original[i];
        index++;
    }else{
        Cola_2[contador]= Cola_original[i];
        contador++;
    }
}

for(i=0; i<=3; i++){
    console.log(Cola_1[i]);
}

for(i=0; i<=3; i++){
    console.log(Cola_2[i]);
}