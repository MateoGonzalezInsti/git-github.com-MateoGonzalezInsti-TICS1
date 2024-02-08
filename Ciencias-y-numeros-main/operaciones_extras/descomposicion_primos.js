function crear_operacion_descomponer_primos(){
    let numero_tocado;
//elegir numero aleatorio
    if(dificultad==1){//50
        numero_tocado=Math.floor(Math.random()*10+2);
        numero_tocado*=Math.floor(Math.random()*5+2);
        while(numero_tocado==numero_repetido_operacion){
            numero_tocado=Math.floor(Math.random()*10+2);
            numero_tocado*=Math.floor(Math.random()*5+2);
        }
        numero_repetido_operacion=numero_tocado;
    }
    else if(dificultad<=3 && dificultad>1){//100
        numero_tocado=Math.floor(Math.random()*10+2);
        numero_tocado*=Math.floor(Math.random()*10+2);
        while(numero_tocado==numero_repetido_operacion){
            numero_tocado=Math.floor(Math.random()*10+2);
            numero_tocado*=Math.floor(Math.random()*10+2);
        }
        numero_repetido_operacion=numero_tocado;
    }
    else if(dificultad>4 && dificultad<7){//1000
        numero_tocado=Math.floor(Math.random()*100+2);
        numero_tocado*=Math.floor(Math.random()*100+2);
        while(numero_tocado==numero_repetido_operacion){
            numero_tocado=Math.floor(Math.random()*100+2);
            numero_tocado*=Math.floor(Math.random()*100+2);
        }
        numero_repetido_operacion=numero_tocado;
    }
    else{//10000
        numero_tocado=Math.floor(Math.random()*200+2);
        numero_tocado*=Math.floor(Math.random()*200+2);
        while(numero_tocado==numero_repetido_operacion){
            numero_tocado=Math.floor(Math.random()*200+2);
            numero_tocado*=Math.floor(Math.random()*200+2);
        }
        numero_repetido_operacion=numero_tocado;
    }
//variables importantes
    let numero_descomponer=numero_tocado;
    let numeros_primos=[];
    let terminado=false;
//descomponer
    numeros_primos=descomponer_primos_numero(numero_descomponer);
    numeros_primos=numeros_primos.split(",");
    numero_descomponer=null;
    terminado=null;
//mostrar pantalla
        document.getElementById("body").innerHTML="<svg class='flecha-volver' xmlns='http://www.w3.org/2000/svg' version='1.0' width='90.000000pt' height='90.000000pt' viewBox='0 0 90.000000 90.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,90.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path style='cursor: pointer;'onclick='abrir_menu_operaciones_extras()' d='M113 548 c-46 -46 -83 -90 -83 -98 0 -25 165 -183 186 -178 37 7 27 39 -27 94 l-53 54 364 2 365 3 0 25 0 25 -365 3 -364 2 53 54 c55 56 64 88 26 94 -14 2 -46 -23 -102 -80z'/></g></svg><h1 id='correct-text'>"+contador_correcto+"</h1><h3 id='ejercicio'class='ejercicio'>"+numero_tocado+"</h3><div class='div-resultado'><input id='resultado'class='resultado'type='text' value=''placeholder='2,2,5,7,3...' autofocus></div>";
        document.getElementById("resultado").focus();
        document.getElementById("resultado").addEventListener("keyup", function(event) {
            event.preventDefault();
            const resultado_usuario_revisada=document.getElementById("resultado").value.replaceAll(" ","");//revisar resultado
        if (event.keyCode === 13  && resultado_usuario_revisada!="") {//aceptar
            let usuario_respuesta=document.getElementById("resultado").value;
        //separar numeros
        usuario_respuesta=usuario_respuesta.replaceAll('..',',');
        usuario_respuesta=usuario_respuesta.replaceAll('.',',');
        usuario_respuesta=usuario_respuesta.replaceAll('*',',');
        usuario_respuesta=usuario_respuesta.replaceAll(' ','');
        usuario_respuesta=usuario_respuesta.replaceAll(',,',',');
        document.getElementById("resultado").value=usuario_respuesta;
        usuario_respuesta=usuario_respuesta.value.split(',');
        //ordenar respuesta usuario
        usuario_respuesta=usuario_respuesta.sort(function(a, b){return a - b});
            //comprobar si esta bien hecho
            let bien_hecho=true;
            if(numeros_primos.length==usuario_respuesta.length){
                for(let i=0;i<usuario_respuesta.length;i++){
                    if(numeros_primos[i]!=usuario_respuesta[i]){
                        bien_hecho=false;
                    break;
                    }
                }
            }
            else{
                bien_hecho=false;
            }
            //mostrar correccion...
            let numero_usuario_final="";
            for(let i=0;i<usuario_respuesta.length;i++){
                if(i==0){
                    numero_usuario_final=numero_usuario_final+usuario_respuesta[i];
                }
                else{
                    numero_usuario_final=numero_usuario_final+"* "+usuario_respuesta[i];
                }
            }
            let numero_descompuesto_final="";
            for(let i=0;i<numeros_primos.length;i++){
                if(i==0){
                    numero_descompuesto_final=numero_descompuesto_final+numeros_primos[i];
                }
                else{
                    numero_descompuesto_final=numero_descompuesto_final+"* "+numeros_primos[i];
                }
            }
            document.getElementById("ejercicio").style.display="none";
            document.getElementById("resultado").style.display="none";
            if(bien_hecho==true){
                contador_correcto++;
                actualizar_contador_descomponer_primos();
                if(muted==false){//con sonido
                    document.getElementById("body").innerHTML+="<audio src='recursos/correcto.mp3'class='audio-nota'autoplay preload='auto'></audio><div class='nota'><h3 class='texto-nota-bien'>¡Correcto!</h3><img class='emoji'src='recursos/correcto.img.png'/><h3 class='ejercicio-text'>"+numero_tocado+"</h3><h3 class='sin-corregir-bien'>"+numero_usuario_final+"</h3><h3 class='resuelto'>"+numero_descompuesto_final+"</h3><input onclick='contador_correcto=null;control_pagina(1)'type='button'class='volver-nota'><input type='button'onclick='crear_operacion_descomponer_primos()'id='siguinte-nota'class='siguinte-nota'></div>";
                }
                else{//sin sonido
                    document.getElementById("body").innerHTML+="<div class='nota'><h3 class='texto-nota-bien'>¡Correcto!</h3><img class='emoji'src='recursos/correcto.img.png'/><h3 class='ejercicio-text'>"+numero_tocado+"</h3><h3 class='sin-corregir-bien'>"+numero_usuario_final+"</h3><h3 class='resuelto'>"+numero_descompuesto_final+"</h3><input onclick='contador_correcto=null;control_pagina(1)'type='button'class='volver-nota'><input type='button'onclick='crear_operacion_descomponer_primos()'id='siguinte-nota'class='siguinte-nota'></div>";
                }
            }
            else{
                contador_correcto=0;
                //mal hecho
                if(muted==false){//con sonido
                    actualizar_contador_descomponer_primos();
                    document.getElementById("body").innerHTML+="<audio src='recursos/incorrecto.mp3'class='audio-nota'autoplay preload='auto'></audio><div class='nota'><h3 class='texto-nota-mal'>¡Incorrecto!</h3><img class='emoji'src='recursos/incorrecto.img.png'/><h3 class='ejercicio-text'>"+numero_tocado+"</h3><h3 class='sin-corregir'>"+numero_usuario_final+"</h3><h3 class='resuelto'>"+numero_descompuesto_final+"</h3><input onclick='contador_correcto=null;control_pagina(1)'type='button'class='volver-nota'><input type='button'onclick='crear_operacion_descomponer_primos()'id='siguinte-nota'class='siguinte-nota'></div>";
                }
                else{//sin sonido
                    document.getElementById("body").innerHTML+="<div class='nota'><h3 class='texto-nota-mal'>¡Incorrecto!</h3><img class='emoji'src='recursos/incorrecto.img.png'/><h3 class='ejercicio-text'>"+numero_tocado+"</h3><h3 class='sin-corregir'>"+numero_usuario_final+"</h3><h3 class='resuelto'>"+numero_descompuesto_final+"</h3><input onclick='contador_correcto=null;control_pagina(1)'type='button'class='volver-nota'><input type='button'onclick='crear_operacion_descomponer_primos()'id='siguinte-nota'class='siguinte-nota'></div>";
                }
            }
            document.getElementById("siguinte-nota").focus();
            document.getElementById("siguinte-nota").addEventListener("keyup", function(event) {
                event.preventDefault();
                if(event.keyCode === 13) {
                    crear_operacion_descomposicion_primos();
                }
            });
        }
    });
}
function actualizar_contador_descomponer_primos(){
    document.getElementById("correct-text").innerHTML=contador_correcto;
}