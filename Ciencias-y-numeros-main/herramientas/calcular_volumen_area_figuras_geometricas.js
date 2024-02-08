function mostrar_calcular_volumen_area_figurasGeometricas_opciones(option){
    
    mostrar_calcular_volumen_area_figurasGeometricas(option);
}
function mostrar_calcular_volumen_area_figurasGeometricas(option){
    if(option==1){
        //area cubo
    }
    if(option==2){
        //volumen cubo
    }
    if(option==3){
        //area prisma cuadrado
    }
    if(option==4){
        //volumen prisma cuadrado
    }
    if(option==5){
        //area prisma triangular
    }
    if(option==6){
        //volumen prisma triangular
    }
    if(option==7){
        //area prisma poligono regular
    }
    if(option==8){
        //volumen prisma poligono regular
    }
    if(option==9){
        //area piramide triangular
    }
    if(option==10){
        //volumen piramide triangular
    }
    if(option==11){
        //area piramide cuadrada
    }
    if(option==12){
        //volumen piramide cuadrada
    }
    if(option==13){
        //area piramide poligono regular +5 lados
    }
    if(option==14){
        //volumen piramide poligono regular +5 lados
    }
    if(option==15){
        //area cono
    }
    if(option==16){
        //volumen cono
    }
    if(option==17){
        //area cilindro
    }
    if(option==18){
        //volumen cilindro
    }
    if(option==19){
        //area esfera
    }
    if(option==20){
        //volumen esfera
    }
}
//calcular
{
    //cubo
    function calcular_area_cubo(){
        if(!isNaN(eval(document.getElementById("lado").value))){
            const lado=eval(document.getElementById("lado").value);
            document.getElementById("resultado-calculos").innerHTML=lado+"<sup>3</sup>* 6 : "+lado*lado*6;
        }
        else{//mensaje error()

        }
    }
    function calcular_volumen_cubo(){
        if(!isNaN(eval(document.getElementById("lado").value))){
            const lado=eval(document.getElementById("lado").value);
            document.getElementById("resultado-calculos").innerHTML=lado+"<sup>3</sup> : "+lado*lado*lado;
        }
        else{//mensaje error()

        }
    }
    //prisma cuadrada
    function calcular_area_prisma_cuadrada(){
        if(!isNaN(eval(document.getElementById("lado").value)) && !isNaN(eval(document.getElementById("altura").value))){
            const lado=eval(document.getElementById("lado").value);
            const altura=eval(document.getElementById("altura").value);
            document.getElementById("resultado-calculos").innerHTML="("+lado+" * "+lado+")*2 + "+"("+lado+" * "+altura+")*4 : "+(lado*lado)*2 + (lado*altura)*4;
        }
        else{//mostrar mensaje error()

        }
    }
    function calcular_volumen_prisma_cuadrada(){
        if(!isNaN(eval(document.getElementById("lado").value)) && !isNaN(eval(document.getElementById("altura").value))){
            const lado=eval(document.getElementById("lado").value);
            const altura=eval(document.getElementById("altura").value);
            document.getElementById("resultado-calculos").innerHTML=lado+" * "+lado+" * "+altura+" : "+lado*lado*altura;
        }
        else{//mostrar mensaje error()

        }
    }
    //prisma triangular
    function calcular_area_pisma_triangular(){
        if(isNaN(eval(document.getElementById("base-triangulo").value)) && !isNaN(eval(document.getElementById("altura-triangulo").value)) && !isNaN(eval(document.getElementById("altura-prisma").value))){
            const base_triangulo=eval(document.getElementById("base-triangulo").value.replaceAll(" ",""));
            const altura_triangulo=eval(document.getElementById("altura-triangulo").value.replaceAll(" ",""));
            const altura_prisma=eval(document.getElementById("altura-prisma").value.replaceAll(" ",""));
            document.getElementById("resultado-calculos").innerHTML=base_triangulo+" * "+altura_triangulo +" +("+ base_triangulo+" * "+altura_prisma+")*3 : "+(base_triangulo*altura_triangulo)+(base_triangulo*altura_prisma)*3;
        }
        else{//mostrar pantalla error()

        }
    }
    function calcular_volumen_pisma_triangular(){
        if(isNaN(eval(document.getElementById("base-triangulo").value)) && !isNaN(eval(document.getElementById("altura-triangulo").value)) && !isNaN(eval(document.getElementById("altura-prisma").value))){
            const base_triangulo=eval(document.getElementById("base-triangulo").value.replaceAll(" ",""));
            const altura_triangulo=eval(document.getElementById("altura-triangulo").value.replaceAll(" ",""));
            const altura_prisma=eval(document.getElementById("altura-prisma").value.replaceAll(" ",""));
            document.getElementById("resultado-calculos").innerHTML="(("+base_triangulo+" * "+altura_triangulo+")/2) * "+altura_prisma+" : "+((base_triangulo*altura_triangulo)/2)*altura_prisma;
        }
        else{//mostrar pantalla error()

        }
    }
    //prisma poligono regular +5 lados
    function calcular_area_prisma_poligono_regular(){
        if(!isNaN(eval(document.getElementById("lado").value)) && !isNaN(eval(document.getElementById("numero-lados").value)) && !isNaN(eval(document.getElementById("apotema").value)) && !isNaN(eval(document.getElementById("altura-prisma").value))){
            const lado=eval(document.getElementById("lado").value);
            const n_lados=eval(document.getElementById("numero-lados").value);
            const apotema=eval(document.getElementById("apotema").value);
            const altura_prisma=eval(document.getElementById("altura-prisma").value);
            document.getElementById("resultado-calculos").innerHTML=lado+" * "+n_lados+" * "+apotema+" + ("+lado+" * "+altura_prisma+")*"+n_lados+" : "+(n_lados*n_lados*apotema)+((altura_prisma*lado)*n_lados);
        }
        else{//mensaje error()

        }
    }
    function calcular_volumen_prisma_poligono_regular(){
        if(!isNaN(eval(document.getElementById("lado").value)) && !isNaN(eval(document.getElementById("numero-lados").value)) && !isNaN(eval(document.getElementById("apotema").value)) && !isNaN(eval(document.getElementById("altura-prisma").value))){
            const lado=eval(document.getElementById("lado").value);
            const n_lados=eval(document.getElementById("numero-lados").value);
            const apotema=eval(document.getElementById("apotema").value);
            const altura_prisma=eval(document.getElementById("altura-prisma").value);
            document.getElementById("resultado-calculos").innerHTML=altura_prisma+"*("+lado+" * "+n_lados+" * "+apotema+")/2 : "+altura_prisma*((lado*n_lados*apotema)/2);
        }
        else{//mensaje error()

        }
    }
    //piramide
    function calcular_area_piramide_triangular(){

    }
    function calcular_volumen_piramide_triangular(){

    }
    function calcular_area_piramide_cuadrada(){
        let apotema_triangulo=document.getElementById("").value.replaceAll(" ","");
        let lateral=document.getElementById("").value.replaceAll(" ","");
        if((apotema_triangulo!="" && !isNaN(eval(apotema_triangulo)) && eval(apotema_triangulo)>0) && (lateral!="" && !isNaN(eval(lateral)) && eval(lateral)>0)){
            document.getElementById("resultado-calculos").innerHTML="(("+lateral+" * "+apotema_triangulo+")/2)*4 + "+lateral+"<sup>2</sup> : <u style='color:rgb(14, 183, 172);'>"+redondear_numero((((apotema_triangulo*lateral)/2)*4)+(lateral**2))+"</u>";
        }
        else{//mensaje error()

        }
    }
    function calcular_volumen_piramide_cuadrada(){

    }
    function calcular_area_piramide_poligono_regular(){

    }
    function calcular_volumen_piramide_poligono_regular(){

    }
    //cono
    function calcular_area_cono(){
        let radio=document.getElementById("").value.replaceAll(" ","");
        let generatriz=document.getElementById("").value.replaceAll(" ","");

        if((radio!="" && !isNaN(eval(radio)) && eval(radio)>0) && (generatriz!="" && !isNaN(eval(generatriz)) && eval(generatriz)>0)){
            document.getElementById("resultado-calculos").innerHTML="π * "+radio**2+" + π * "+radio+" * "+generatriz+" : <u style='color:rgb(14, 183, 172);'>"+redondear_numero((Math.PI*(radio**2))+(Math.PI*radio*generatriz))+"</u>";
        }
        else{//mensaje error()

        }
    }
    function calcular_volumen_cono(){
        let radio=document.getElementById("").value.replaceAll(" ","");
        let altura=document.getElementById("").value.replaceAll(" ","");

        if((radio!="" && !isNaN(eval(radio)) && eval(radio)>0) && (altura!="" && !isNaN(eval(altura)) && eval(altura)>0)){
            document.getElementById("resultado-calculos").innerHTML="(π * "+radio**2+" * "+altura+")/3 : <u style='color:rgb(14, 183, 172);'>"+redondear_numero((Math.PI*(radio**2)*altura)/3)+"</u>";
        }
        else{//mensaje error()

        }
    }
    //cilindro
    function calcular_area_cilindro(){
        let radio=document.getElementById("").value.replaceAll(" ","");
        let altura=document.getElementById("").value.replaceAll(" ","");

        if((radio!="" && !isNaN(eval(radio)) && eval(radio)>0) && (altura!="" && !isNaN(eval(altura)) && eval(altura)>0)){
            document.getElementById("resultado-calculos").innerHTML="2 * π *"+radio+" * ("+radio+" + "+altura+") : <u style='color:rgb(14, 183, 172);'>"+redondear_numero(2*Math.PI*radio*(radio+altura))+"</u>";
        }
        else{//mensaje error()

        }
    }
    function calcular_volumen_cilindro(){
        let radio=document.getElementById("").value.replaceAll(" ","");
        let altura=document.getElementById("").value.replaceAll(" ","");

        if((radio!="" && !isNaN(eval(radio)) && eval(radio)>0) && (altura!="" && !isNaN(eval(altura)) && eval(altura)>0)){
            document.getElementById("resultado-calculos").innerHTML=radio**2+" * π * "+altura+" : <u style='color:rgb(14, 183, 172);'>"+redondear_numero((radio**2)*Math.PI*altura)+"</u>";
        }
        else{//mensaje error()

        }
    }
    //esfera
    function calcular_area_esfera(){
        let radio=document.getElementById("").value.replaceAll(" ","");

        if(radio!="" && !isNaN(eval(radio)) && eval(radio)>0){
            document.getElementById("resultado-calculos").innerHTML="4 * π *"+radio**2+" : <u style='color:rgb(14, 183, 172);'>"+redondear_numero(4*Math.PI*(radio**2))+"</u>";
        }
        else{//mensaje error()

        }
    }
    function calcular_volumen_esfera(){
        let radio=document.getElementById("").value.replaceAll(" ","");

        if(radio!="" && !isNaN(eval(radio)) && eval(radio)>0){
            document.getElementById("resultado-calculos").innerHTML="(4 * π * "+radio**3+")/3"+" : <u style='color:rgb(14, 183, 172);'>"+redondear_numero((4*Math.PI*(radio**3))/3)+"</u>";
        }
        else{//mensaje error()

        }
    }
}
