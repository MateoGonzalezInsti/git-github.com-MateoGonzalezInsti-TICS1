//version 0.2.1
function crear_operacion_porcentaje() {
    s = null;
    //variables operacion
    let numero_porciento = 0;//_%
    let numero_total = 0;// 100% de _
    let numero_resultado = 0;//100% de 100= _
    let porcentaje = 0;// 100 || 1000
    let operacion_tocada = 0;//operacion para mostrar
    //generar numeros por dificultad
    if (dificultad <= 3) {
        numero_porciento = Math.floor(Math.random() * 100 + 1);
        numero_total = Math.floor(Math.random() * 100 + 1);
        porcentaje = 100;
        numero_resultado = redondear_numero((numero_porciento * numero_total) / porcentaje);
        while ((numero_porciento + "" + porcentaje + "" + numero_total + "" + numero_resultado) == numero_repetido_operacion) {
            numero_porciento = Math.floor(Math.random() * 100 + 1);
            numero_total = Math.floor(Math.random() * 100 + 1);
            numero_resultado = redondear_numero((numero_porciento * numero_total) / porcentaje);
        }
        numero_repetido_operacion = numero_porciento + "" + porcentaje + "" + numero_total + "" + numero_resultado;
    }
    if (dificultad > 3 && dificultad < 7) {
        numero_porciento = Math.floor(Math.random() * 200 + 1);
        numero_total = Math.floor(Math.random() * 500 + 1);
        let numero_aleatorio_porcentaje = Math.floor(Math.random() * 3 + 1);
        if (numero_aleatorio_porcentaje != 1) {
            porcentaje = 100;//%
        }
        else {
            porcentaje = 1000;//‰
        }
        numero_resultado = redondear_numero((numero_porciento * numero_total) / porcentaje);
        while ((numero_porciento + "" + porcentaje + "" + numero_total + "" + numero_resultado) == numero_repetido_operacion) {
            numero_porciento = Math.floor(Math.random() * 200 + 1);
            numero_total = Math.floor(Math.random() * 500 + 1);
            numero_aleatorio_porcentaje = Math.floor(Math.random() * 3 + 1);
            if (numero_aleatorio_porcentaje != 1) {
                porcentaje = 100;//%
            }
            else {
                porcentaje = 1000;//‰
            }
            numero_resultado = redondear_numero((numero_porciento * numero_total) / porcentaje);
        }
        numero_repetido_operacion = numero_porciento + "" + porcentaje + "" + numero_total + "" + numero_resultado;
    }
    if (dificultad >= 7 && dificultad < 9) {
        numero_porciento = Math.floor(Math.random() * 1000 + 1);
        numero_total = Math.floor(Math.random() * 1000 + 1);
        let numero_aleatorio_porcentaje = Math.floor(Math.random() * 3 + 1);
        if (numero_aleatorio_porcentaje != 1) {
            porcentaje = 100;//%
        }
        else {
            porcentaje = 1000;//‰
        }
        numero_resultado = redondear_numero((numero_porciento * numero_total) / porcentaje);
        while ((numero_porciento + "" + porcentaje + "" + numero_total + "" + numero_resultado) == numero_repetido_operacion) {
            numero_porciento = Math.floor(Math.random() * 1000 + 1);
            numero_total = Math.floor(Math.random() * 1000 + 1);
            numero_aleatorio_porcentaje = Math.floor(Math.random() * 3 + 1);
            if (numero_aleatorio_porcentaje != 1) {
                porcentaje = 100;//%
            }
            else {
                porcentaje = 1000;//‰
            }
            numero_resultado = redondear_numero((numero_porciento * numero_total) / porcentaje);
        }
        numero_repetido_operacion = numero_porciento + "" + porcentaje + "" + numero_total + "" + numero_resultado;
    }
    if (dificultad >= 9) {
        numero_porciento = Math.floor(Math.random() * 1000 + 1);
        numero_total = Math.floor(Math.random() * 10000 + 1);
        let numero_aleatorio_porcentaje = Math.floor(Math.random() * 3 + 1);
        if (numero_aleatorio_porcentaje != 1) {
            porcentaje = 100;//%
        }
        else {
            porcentaje = 1000;//‰
        }
        numero_resultado = redondear_numero((numero_porciento * numero_total) / porcentaje);
        while ((numero_porciento + "" + porcentaje + "" + numero_total + "" + numero_resultado) == numero_repetido_operacion) {
            numero_porciento = Math.floor(Math.random() * 1000 + 1);
            numero_total = Math.floor(Math.random() * 10000 + 1);
            numero_aleatorio_porcentaje = Math.floor(Math.random() * 3 + 1);
            if (numero_aleatorio_porcentaje != 1) {
                porcentaje = 100;//%
            }
            else {
                porcentaje = 1000;//‰
            }
        numero_resultado = redondear_numero((numero_porciento * numero_total) / porcentaje);
        }
        numero_repetido_operacion = numero_porciento + "" + porcentaje + "" + numero_total + "" + numero_resultado;
    }
    //elegir que tipo de operacion y motrar en pantalla
    const n_aleatorio = Math.floor(Math.random() * 3 + 1);
    if (n_aleatorio == 1) {//50% de 100=x
        if (porcentaje == 100) {
            document.getElementById("body").innerHTML = "<svg class='flecha-volver' xmlns='http://www.w3.org/2000/svg' version='1.0' width='90.000000pt' height='90.000000pt' viewBox='0 0 90.000000 90.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,90.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path style='cursor: pointer;'onclick='abrir_menu_operaciones_extras()' d='M113 548 c-46 -46 -83 -90 -83 -98 0 -25 165 -183 186 -178 37 7 27 39 -27 94 l-53 54 364 2 365 3 0 25 0 25 -365 3 -364 2 53 54 c55 56 64 88 26 94 -14 2 -46 -23 -102 -80z'/></g></svg><h1 id='correct-text'>" + contador_correcto + "</h1><h3 id='ejercicio'class='ejercicio'>" + numero_porciento + "% de " + numero_total + " = x</h3> <div class='div-resultado'><input id='resultado'class='resultado'type='number' placeholder='" + Math.floor(Math.random() * 9 + 1) + "' autofocus></div> ";
            operacion_tocada = numero_porciento + "% de " + numero_total;
        }
        else {
            document.getElementById("body").innerHTML = "<svg class='flecha-volver' xmlns='http://www.w3.org/2000/svg' version='1.0' width='90.000000pt' height='90.000000pt' viewBox='0 0 90.000000 90.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,90.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path style='cursor: pointer;'onclick='abrir_menu_operaciones_extras()' d='M113 548 c-46 -46 -83 -90 -83 -98 0 -25 165 -183 186 -178 37 7 27 39 -27 94 l-53 54 364 2 365 3 0 25 0 25 -365 3 -364 2 53 54 c55 56 64 88 26 94 -14 2 -46 -23 -102 -80z'/></g></svg><h1 id='correct-text'>" + contador_correcto + "</h1><h3 id='ejercicio'class='ejercicio'>" + numero_porciento + "‰ de " + numero_total + " = x</h3> <div class='div-resultado'><input id='resultado'class='resultado'type='number' placeholder='" + Math.floor(Math.random() * 9 + 1) + "' autofocus></div> ";
            operacion_tocada = numero_porciento + "‰ de " + numero_total;
        }
    }
    else if (n_aleatorio == 2) {//x% de 100=50 
        if (porcentaje == 100) {
            document.getElementById("body").innerHTML = "<svg class='flecha-volver' xmlns='http://www.w3.org/2000/svg' version='1.0' width='90.000000pt' height='90.000000pt' viewBox='0 0 90.000000 90.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,90.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path style='cursor: pointer;'onclick='abrir_menu_operaciones_extras()' d='M113 548 c-46 -46 -83 -90 -83 -98 0 -25 165 -183 186 -178 37 7 27 39 -27 94 l-53 54 364 2 365 3 0 25 0 25 -365 3 -364 2 53 54 c55 56 64 88 26 94 -14 2 -46 -23 -102 -80z'/></g></svg><h1 id='correct-text'>" + contador_correcto + "</h1><h3 id='ejercicio'class='ejercicio'>x% de " + numero_total + " = " + numero_resultado + "</h3> <div class='div-resultado'><input id='resultado'class='resultado'type='number' placeholder='" + Math.floor(Math.random() * 9 + 1) + "' autofocus></div> ";
            operacion_tocada = "x% de " + numero_total + " = " + numero_resultado;
        }
        else {
            document.getElementById("body").innerHTML = "<svg class='flecha-volver' xmlns='http://www.w3.org/2000/svg' version='1.0' width='90.000000pt' height='90.000000pt' viewBox='0 0 90.000000 90.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,90.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path style='cursor: pointer;'onclick='abrir_menu_operaciones_extras()' d='M113 548 c-46 -46 -83 -90 -83 -98 0 -25 165 -183 186 -178 37 7 27 39 -27 94 l-53 54 364 2 365 3 0 25 0 25 -365 3 -364 2 53 54 c55 56 64 88 26 94 -14 2 -46 -23 -102 -80z'/></g></svg><h1 id='correct-text'>" + contador_correcto + "</h1><h3 id='ejercicio'class='ejercicio'>x‰ de " + numero_total + " = " + numero_resultado + "</h3> <div class='div-resultado'><input id='resultado'class='resultado'type='number' placeholder='" + Math.floor(Math.random() * 9 + 1) + "' autofocus></div> ";
            operacion_tocada = "x‰ de " + numero_total + " = " + numero_resultado;
        }
    }
    else {//50% de x=50
        if (porcentaje == 100) {
            document.getElementById("body").innerHTML = "<svg class='flecha-volver' xmlns='http://www.w3.org/2000/svg' version='1.0' width='90.000000pt' height='90.000000pt' viewBox='0 0 90.000000 90.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,90.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path style='cursor: pointer;'onclick='abrir_menu_operaciones_extras()' d='M113 548 c-46 -46 -83 -90 -83 -98 0 -25 165 -183 186 -178 37 7 27 39 -27 94 l-53 54 364 2 365 3 0 25 0 25 -365 3 -364 2 53 54 c55 56 64 88 26 94 -14 2 -46 -23 -102 -80z'/></g></svg><h1 id='correct-text'>" + contador_correcto + "</h1><h3 id='ejercicio'class='ejercicio'>" + numero_porciento + "% de x = " + numero_resultado + "</h3> <div class='div-resultado'><input id='resultado'class='resultado'type='number' placeholder='" + Math.floor(Math.random() * 9 + 1) + "' autofocus></div> ";
            operacion_tocada = numero_porciento + "% de x = " + numero_resultado;
        }
        else {
            document.getElementById("body").innerHTML = "<svg class='flecha-volver' xmlns='http://www.w3.org/2000/svg' version='1.0' width='90.000000pt' height='90.000000pt' viewBox='0 0 90.000000 90.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,90.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path style='cursor: pointer;'onclick='abrir_menu_operaciones_extras()' d='M113 548 c-46 -46 -83 -90 -83 -98 0 -25 165 -183 186 -178 37 7 27 39 -27 94 l-53 54 364 2 365 3 0 25 0 25 -365 3 -364 2 53 54 c55 56 64 88 26 94 -14 2 -46 -23 -102 -80z'/></g></svg><h1 id='correct-text'>" + contador_correcto + "</h1><h3 id='ejercicio'class='ejercicio'>" + numero_porciento + "‰ de x = " + numero_resultado + "</h3> <div class='div-resultado'><input id='resultado'class='resultado'type='number' placeholder='" + Math.floor(Math.random() * 9 + 1) + "' autofocus></div> ";
            operacion_tocada = numero_porciento + "‰ de x = " + numero_resultado;
        }
    }
    //boton de informacion sobre lo que hay que resolver
    if (idioma == 0) {//español
        document.getElementById("body").innerHTML += "<svg id='bt-informacion' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'width='384' height='384'viewBox='0 0 24 24'><circle style='cursor:pointer;'onclick='mostrar_informacion_porcentaje()'cx='12' cy='12' r='10' opacity='.35'></circle><path style='cursor:pointer;'onclick='mostrar_informacion_porcentaje()'d='M11,17v-5c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v5c0,0.552-0.448,1-1,1h0C11.448,18,11,17.552,11,17z'></path><circle style='cursor:pointer;'onclick='mostrar_informacion_porcentaje()'cx='12' cy='7.5' r='1.5'></circle></svg><div id='div-div-informacion'><div class='div-informacion'><h3 class='text-informacion'>Encuentre el valor de <b>X</b></h3></div></div>";
    }
    if (idioma == 1) {//ingles
        document.getElementById("body").innerHTML += "<svg id='bt-informacion' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'width='384' height='384'viewBox='0 0 24 24'><circle style='cursor:pointer;'onclick='mostrar_informacion_porcentaje()'cx='12' cy='12' r='10' opacity='.35'></circle><path style='cursor:pointer;'onclick='mostrar_informacion_porcentaje()'d='M11,17v-5c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v5c0,0.552-0.448,1-1,1h0C11.448,18,11,17.552,11,17z'></path><circle style='cursor:pointer;'onclick='mostrar_informacion_porcentaje()'cx='12' cy='7.5' r='1.5'></circle></svg><div id='div-div-informacion'><div class='div-informacion'><h3 class='text-informacion'></h3></div></div>";
    }
    if (idioma == 2) {//gallego
        document.getElementById("body").innerHTML += "<svg id='bt-informacion' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'width='384' height='384'viewBox='0 0 24 24'><circle style='cursor:pointer;'onclick='mostrar_informacion_porcentaje()'cx='12' cy='12' r='10' opacity='.35'></circle><path style='cursor:pointer;'onclick='mostrar_informacion_porcentaje()'d='M11,17v-5c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v5c0,0.552-0.448,1-1,1h0C11.448,18,11,17.552,11,17z'></path><circle style='cursor:pointer;'onclick='mostrar_informacion_porcentaje()'cx='12' cy='7.5' r='1.5'></circle></svg><div id='div-div-informacion'><div class='div-informacion'><h3 class='text-informacion'>Resolva o valor de <b>X</b></h3></div></div>";
    }
    //control continuar
    document.getElementById("resultado").focus();
    document.getElementById("resultado").addEventListener("keyup", function (event) {
        event.preventDefault();
        let resultado_usuario_revisada = document.getElementById("resultado").value.replaceAll(" ", "");//revisar resultado
        //corregir errores usuario
        resultado_usuario_revisada = resultado_usuario_revisada.replaceAll("/", "");
        resultado_usuario_revisada = resultado_usuario_revisada.replaceAll(",", ".");
        resultado_usuario_revisada = resultado_usuario_revisada.replaceAll("..", ".");
        resultado_usuario_revisada = resultado_usuario_revisada.replaceAll("*", "");
        resultado_usuario_revisada = resultado_usuario_revisada.replaceAll("^", "");
        resultado_usuario_revisada = resultado_usuario_revisada.replaceAll("=", "");
        resultado_usuario_revisada = resultado_usuario_revisada.replaceAll("!", "");
        resultado_usuario_revisada = resultado_usuario_revisada.replaceAll(">", "");
        resultado_usuario_revisada = resultado_usuario_revisada.replaceAll("<", "");
        resultado_usuario_revisada = resultado_usuario_revisada.replaceAll(":", "");
        if (event.keyCode === 13 && resultado_usuario_revisada != "" && resultado_usuario_revisada.length <= 15 && (!isNaN(resultado_usuario_revisada * 1))) {//aceptar
            let resuelto_jugador = resultado_usuario_revisada;
            resultado_usuario_revisada = null;
            let bien_hecha = true;
            let resultado_corregido = 0;
            //corregir
            if (n_aleatorio == 1) {
                if (numero_resultado != document.getElementById("resultado").value) {
                    bien_hecha = false;
                }
                resultado_corregido = numero_resultado;
            }
            if (n_aleatorio == 2) {
                if (numero_porciento != document.getElementById("resultado").value) {
                    bien_hecha = false;
                }
                resultado_corregido = numero_porciento;
            }
            if (n_aleatorio == 3) {
                if (numero_total != document.getElementById("resultado").value) {
                    bien_hecha = false;
                }
                resultado_corregido = numero_total;
            }
            //mostrar correccion en pantalla
            if (bien_hecha == true) {//bien hecho
                contador_correcto++;
                actualizar_contador_porcentajes();
                document.getElementById("ejercicio").style.display = "none";
                document.getElementById("resultado").style.display = "none";
                if (muted == false) {//con sonido
                    document.getElementById("body").innerHTML += "<audio src='recursos/correcto.mp3'class='audio-nota'autoplay preload='auto'></audio><div class='nota'><h3 class='texto-nota-bien'>¡Correcto!</h3><img class='emoji'src='recursos/correcto.img.png'/><h3 class='ejercicio-text'>" + operacion_tocada + "</h3><h3 class='sin-corregir-bien'>" + resuelto_jugador + "</h3><h3 class='resuelto'>" + resultado_corregido + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><input type='button'onclick='crear_operacion_porcentaje()'id='siguinte-nota'class='siguinte-nota'></div>";
                }
                else {//sin sonido
                    document.getElementById("body").innerHTML += "<div class='nota'><h3 class='texto-nota-bien'>¡Correcto!</h3><img class='emoji'src='recursos/correcto.img.png'/><h3 class='ejercicio-text'>" + operacion_tocada + "</h3><h3 class='sin-corregir-bien'>" + resuelto_jugador + "</h3><h3 class='resuelto'>" + resultado_corregido + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><input type='button'onclick='crear_operacion_porcentaje()'id='siguinte-nota'class='siguinte-nota'></div>";
                }
            }
            else {//mal hecho
                contador_correcto = 0;
                actualizar_contador_porcentajes();
                if (muted == false) {//con sonido
                    document.getElementById("body").innerHTML += "<audio src='recursos/incorrecto.mp3'class='audio-nota'autoplay preload='auto'></audio><div class='nota'><h3 class='texto-nota-mal'>¡Incorrecto!</h3><img class='emoji'src='recursos/incorrecto.img.png'/><h3 class='ejercicio-text'>" + operacion_tocada + "</h3><h3 class='sin-corregir'>" + resuelto_jugador + "</h3><h3 class='resuelto'>" + resultado_corregido + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><input type='button'onclick='crear_operacion_porcentaje()'id='siguinte-nota'class='siguinte-nota'></div>";
                }
                else {//sin sonido
                    document.getElementById("body").innerHTML += "<div class='nota'><h3 class='texto-nota-mal'>¡Incorrecto!</h3><img class='emoji'src='recursos/incorrecto.img.png'/><h3 class='ejercicio-text'>" + operacion_tocada + "</h3><h3 class='sin-corregir'>" + resuelto_jugador + "</h3><h3 class='resuelto'>" + resultado_corregido + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><input type='button'onclick='crear_operacion_porcentaje()'id='siguinte-nota'class='siguinte-nota'></div>";
                }
            }
            //continuar
            document.getElementById("siguinte-nota").focus();
            document.getElementById("siguinte-nota").addEventListener("keyup", function (event) {
                event.preventDefault();
                if (event.keyCode === 13) {
                    crear_operacion_porcentaje();
                }
            });
        }
    });
}
function mostrar_informacion_porcentaje() {
    if (informacion == false) {
        document.getElementById("div-div-informacion").style.display = "flex";
        document.getElementById("div-div-informacion").style.opacity = 1;
        informacion = true;
        let opacidad = 1;
        s = setTimeout(function () {
            const f = setInterval(function () {
                opacidad = opacidad - 0.1;
                document.getElementById("div-div-informacion").style.opacity = opacidad;
                if (opacidad <= 0) {
                    clearInterval(f);
                }
            }, 50);
            setTimeout(function () {
                document.getElementById("div-div-informacion").style.display = "none";
                informacion = false;
                s = null;
            }, 500);
        }, 3500);
    }
    else if (informacion == true) {
        document.getElementById("div-div-informacion").style.display = "none";
        informacion = false;
        clearTimeout(s);
    }
}
function actualizar_contador_porcentajes() {
    document.getElementById("correct-text").innerHTML = contador_correcto;
    //actualizar registros
}