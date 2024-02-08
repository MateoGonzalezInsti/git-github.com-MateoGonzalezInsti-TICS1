function crear_operacion_notacion_cientifica(){
    let operacion_mostrar="";
    let operacion_resultado="";
    let numero_maximo_suma_resta=10;
    let numero_maximo_multi_divi=10;
    let cantidad_numeros=2;
    let exponente_maximo=2;
    if(dificultad<=3){
        numero_maximo_suma_resta=20;
        numero_maximo_multi_divi=10;
        cantidad_numeros=2;
        exponente_maximo=3;
    }
    if(dificultad>3 && dificultad<=6){
        numero_maximo_suma_resta=50;
        numero_maximo_multi_divi=20;
        cantidad_numeros=2;
        exponente_maximo=5;
    }
    if(dificultad>6 && dificultad<=8){
        numero_maximo_suma_resta=100;
        numero_maximo_multi_divi=50;
        cantidad_numeros=3;
        exponente_maximo=4;
    }
    if(dificultad>8){
        numero_maximo_suma_resta=1000;
        numero_maximo_multi_divi=100;
        cantidad_numeros=5;
        exponente_maximo=10;
    }
    //crear operacion
    if(cantidad_numeros!=2){
        cantidad_numeros=Math.floor(Math.random()*cantidad_numeros+2);
    }
    for(let i=0;i<cantidad_numeros;i++){
        //crear numero
        let numero_operacion=0;
        let c_operacion=0;
            if(i==0){//primera operacion
                numero_operacion=Math.floor(Math.random()*numero_maximo_suma_resta+1);
                if(Math.floor(Math.random()*3+1)!=1){//suma
                    c_operacion="";
                }
                else{//resta
                    c_operacion="-";
                }
            }
            else{
                c_operacion=Math.floor(Math.random()*6+1);
                if(c_operacion==1 || c_operacion==2){//suma
                    numero_operacion=Math.floor(Math.random()*numero_maximo_suma_resta+1);
                    c_operacion="+";
                }
                if(c_operacion==3 || c_operacion==4){//resta
                    numero_operacion=Math.floor(Math.random()*numero_maximo_suma_resta+1);
                    c_operacion="-";
                }
                if(c_operacion==5){
                    numero_operacion=Math.floor(Math.random()*numero_maximo_multi_divi+1);
                    c_operacion="*";
                }
                if(c_operacion==6){
                    numero_operacion=Math.floor(Math.random()*numero_maximo_multi_divi+1);
                    c_operacion="/";
                }
            }
        //convertir numero y mostrarlo
        let numero_convertido=numero_operacion;
            if(Math.floor(Math.random()*4+1)==4){//dejarlo igual
                operacion_resultado=operacion_resultado+c_operacion+numero_convertido;
                //guardarlo para mostrar
                operacion_mostrar=operacion_mostrar+c_operacion+numero_convertido;
            }
            else{//cambiarlo
                    const exponente_diez=Math.floor(Math.random()*exponente_maximo+1);
                    if(Math.floor(Math.random()*5+1)>=3){//expresarlo de otra forma pero es el mismo numero (100 : 1*10^2)
                        if(Math.floor(Math.random()*3+1)!=1){//multiplicar (10^-x)
                            for(let i=0;i<exponente_diez;i++){
                                numero_convertido*=10;
                            }
                            operacion_resultado=operacion_resultado+c_operacion+numero_operacion;
                            //guardarlo para mostrar
                            operacion_mostrar=operacion_mostrar+c_operacion+numero_convertido+"*10<sup>-"+exponente_diez+"</sup>";
                        }
                        else{//dividir (10^x)
                            for(let i=0;i<exponente_diez;i++){
                                numero_convertido=numero_convertido/10;
                            }
                            //guardarlo para mostrar
                            operacion_resultado=operacion_resultado+c_operacion+numero_operacion;
                            operacion_mostrar=operacion_mostrar+c_operacion+numero_convertido+"*10<sup>"+exponente_diez+"</sup>";
                        }
                    }
                    else{//mismo numero, pero pasarlo a notacion cientifica
                        let exponente_temporal=1;
                        let numero_convertido_temporal=numero_convertido;
                        while(numero_convertido_temporal>=10){
                            numero_convertido_temporal/=10;
                            exponente_temporal++;
                        }
                        if(exponente_temporal>0){
                        numero_convertido=numero_convertido_temporal+"*10<sup>"+exponente_temporal+"</sup>";
                        operacion_resultado=operacion_resultado+c_operacion+numero_operacion;
                        //guardarlo para mostrar
                        operacion_mostrar=operacion_mostrar+c_operacion+numero_convertido;
                        }
                        else{
                            numero_convertido=numero_convertido_temporal;
                            operacion_resultado=operacion_resultado+c_operacion+numero_operacion;
                            //guardarlo para mostrar
                            operacion_mostrar=operacion_mostrar+c_operacion+numero_convertido;
                        }
                    }
            }
    }
    document.getElementById("body").innerHTML="<svg class='flecha-volver' xmlns='http://www.w3.org/2000/svg' version='1.0' width='90.000000pt' height='90.000000pt' viewBox='0 0 90.000000 90.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,90.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path style='cursor: pointer;'onclick='abrir_menu_operaciones_extras()' d='M113 548 c-46 -46 -83 -90 -83 -98 0 -25 165 -183 186 -178 37 7 27 39 -27 94 l-53 54 364 2 365 3 0 25 0 25 -365 3 -364 2 53 54 c55 56 64 88 26 94 -14 2 -46 -23 -102 -80z'/></g></svg><h1 id='correct-text'>"+contador_correcto+"</h1><h3 id='ejercicio' style='font-size:1.8rem;'class='ejercicio'>"+operacion_mostrar+"</h3><div class='div-resultado'><input id='resultado'class='resultado'type='text' value=''placeholder='5*10^-2' autofocus></div>";
    //control contoniuar y comparar solucione
    document.getElementById("resultado").focus();
    document.getElementById("resultado").addEventListener("keyup", function(event) {
        event.preventDefault();
        const resultado_usuario_revisada=document.getElementById("resultado").value.replaceAll(" ","");//revisar resultado
        if (event.keyCode === 13  && resultado_usuario_revisada!="") {//aceptar
            let usuario_respuesta=document.getElementById("resultado").value;
            usuario_respuesta=usuario_respuesta.replaceAll(" ","");
            usuario_respuesta=usuario_respuesta.replaceAll(",",".");
            usuario_respuesta=usuario_respuesta.replaceAll("..",".");
            usuario_respuesta=usuario_respuesta.replaceAll("^^","^");
            usuario_respuesta=usuario_respuesta.replaceAll("**","*");
            operacion_resultado=eval(operacion_resultado);
            //pasar a numero normal el resultado del jugador; si ya esta en normal esta mal hecha, pero si esta en notacion c. corregirla
            usuario_respuesta_corregir=usuario_respuesta;
            usuario_respuesta_corregir=usuario_respuesta_corregir.split("^");
            let bien_hecho=true;
            let numero_resuelto=usuario_respuesta;
            if(usuario_respuesta_corregir.length==2){//corregir, esta en notacion cientifica
                let numero_usuario=0;
                let exponente_notacion=usuario_respuesta_corregir[1];
                let numero_usuario_temporal=usuario_respuesta_corregir[0].split("*");
                numero_usuario=numero_usuario_temporal[0];
                    numero_usuario_temporal=null;
                    if(exponente_notacion>0){
                        numero_resuelto=numero_usuario;
                        for(let i=0;i<exponente_notacion;i++){
                            numero_resuelto=numero_resuelto*10;
                        }
                    }
                    else if(exponente_notacion<0){
                        numero_resuelto=numero_usuario;
                        for(let i=exponente_notacion;i<0;i++){
                            numero_resuelto=numero_resuelto/10;
                        }
                    }
                    else{
                        numero_resuelto=numero_usuario;
                    }
                //comprobar 
                if(numero_resuelto==operacion_resultado){
                    bien_hecho=true;
                }
                else{
                    bien_hecho=false;
                }
            }
            else{//no esta en notacion cientifica o hay mas de un numero en notacion cientifica
                bien_hecho=false;
            }
            console.log(usuario_respuesta_corregir);
            console.log(numero_resuelto);
            //mostrar correccion
            if(bien_hecho=true){//bien hecho
                contador_correcto++;
                actualizar_contador_notacion_cientifica();
                        document.getElementById("ejercicio").style.display="none";
                        document.getElementById("resultado").style.display="none";
                        if(muted==false){//con sonido
                            document.getElementById("body").innerHTML+="<audio src='recursos/correcto.mp3'class='audio-nota'autoplay preload='auto'></audio><div class='nota'><h3 class='texto-nota-bien'>¡Correcto!</h3><img class='emoji'src='recursos/correcto.img.png'/><h3 class='ejercicio-text'>"+operacion_mostrar+"</h3><h3 class='sin-corregir-bien'>"+numero_resuelto+"</h3><h3 class='resuelto'>"+operacion_resultado+"</h3><input onclick='contador_correcto=null;control_pagina(1)'type='button'class='volver-nota'><input type='button'onclick='crear_operacion_notacion_cientifica()'id='siguinte-nota'class='siguinte-nota'></div>";
                        }
                        else{//sin sonido
                            document.getElementById("body").innerHTML+="<div class='nota'><h3 class='texto-nota-bien'>¡Correcto!</h3><img class='emoji'src='recursos/correcto.img.png'/><h3 class='ejercicio-text'>"+operacion+"</h3><h3 class='sin-corregir-bien'>"+numero_resuelto+"</h3><h3 class='resuelto'>"+operacion_resultado+"</h3><input onclick='contador_correcto=null;control_pagina(1)'type='button'class='volver-nota'><input type='button'onclick='crear_operacion_notacion_cientifica()'id='siguinte-nota'class='siguinte-nota'></div>";
                        }
                        document.getElementById("siguinte-nota").focus();
            }
            else{//mal hecho
                contador_correcto=0;
                actualizar_contador_notacion_cientifica();
                if(muted==false){//con sonido
                    document.getElementById("body").innerHTML+="<audio src='recursos/incorrecto.mp3'class='audio-nota'autoplay preload='auto'></audio><div class='nota'><h3 class='texto-nota-mal'>¡Incorrecto!</h3><img class='emoji'src='recursos/incorrecto.img.png'/><h3 class='ejercicio-text'>"+operacion+"</h3><h3 class='sin-corregir'>"+numero_resuelto+"</h3><h3 class='resuelto'>"+operacion_resultado+"</h3><input onclick='contador_correcto=null;control_pagina(1)'type='button'class='volver-nota'><input type='button'onclick='crear_operacion_notacion_cientifica()'id='siguinte-nota'class='siguinte-nota'></div>";
                }
                else{//sin sonido
                    document.getElementById("body").innerHTML+="<div class='nota'><h3 class='texto-nota-mal'>¡Incorrecto!</h3><img class='emoji'src='recursos/incorrecto.img.png'/><h3 class='ejercicio-text'>"+operacion+"</h3><h3 class='sin-corregir'>"+numero_resuelto+"</h3><h3 class='resuelto'>"+operacion_resultado+"</h3><input onclick='contador_correcto=null;control_pagina(1)'type='button'class='volver-nota'><input type='button'onclick='crear_operacion_notacion_cientifica()'id='siguinte-nota'class='siguinte-nota'></div>";
                }
            }
            document.getElementById("siguinte-nota").addEventListener("keyup", function(event) {
                event.preventDefault();
                if(event.keyCode === 13) {
                    crear_operacion_notacion_cientifica();
                }
            });
        }
    });
}
function actualizar_contador_notacion_cientifica(){
    document.getElementById("correct-text").innerHTML=contador_correcto;
    //actualizar registros
}