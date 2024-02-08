function crear_operacion_absoluto() {
    let operacion = "";
    let cantidad_numeros = 2;
    let numero_max = 10;
    let operacion_resultado = "";
    if (dificultad <= 4) {
        cantidad_numeros = Math.floor(Math.random() * 4 + 2);
        numero_max = 15;
    }
    else if (dificultad > 4 && dificultad <= 6) {
        cantidad_numeros = Math.floor(Math.random() * 6 + 3);
        numero_max = 30;
    }
    else if (dificultad > 6 && dificultad <= 8) {
        cantidad_numeros = Math.floor(Math.random() * 7 + 3);
        numero_max = 40;
    }
    else {
        cantidad_numeros = Math.floor(Math.random() * 10 + 4);
        numero_max = 50;
    }
    operacion = "|";
    operacion_resultado = "";
    let valor_absoluto = false;
    for (let i = 0; i < cantidad_numeros; i++) {//crear operación
        if (valor_absoluto == true && Math.floor(Math.random() * 3 + 1) == 1) {//valor abosoluto activado
            valor_absoluto = true;
        }
        if (i == 0) {//primera operación
            operaciones_absoluto_agrupado++;
            if (Math.floor(Math.random() * 2 + 1) == 1) {//suma
                if (valor_absoluto == true) {
                    operacion = operacion + " |";
                    operacion_resultado = operacion_resultado + "Math.abs(";
                }
                const numero = Math.floor(Math.random() * numero_max + 1);
                if (Math.floor(Math.random() * 3 + 1) == 1) {//positivo
                    operacion = operacion + numero;
                    operacion_resultado = operacion_resultado + numero;
                }
                else {
                    if (valor_absoluto == true) {
                        operacion = operacion + " -" + numero;
                        operacion_resultado = operacion_resultado + "-" + numero;
                    }
                    else {
                        operacion = operacion + "(-" + numero + ")";
                        operacion_resultado = operacion_resultado + "(-" + numero + ")";
                    }
                }
            }
            else {//resta
                operacion = operacion + "-";
                operacion_resultado = operacion_resultado+"-";
                if (valor_absoluto == true) {
                    operacion = operacion + " |";
                    operacion_resultado = operacion_resultado + "Math.abs(";
                }
                const numero = Math.floor(Math.random() * numero_max + 1);
                if (Math.floor(Math.random() * 3 + 1) == 1) {//positivo
                    operacion = operacion + numero;
                    operacion_resultado = operacion_resultado + numero;
                }
                else {
                    if (valor_absoluto == true) {
                        operacion = operacion + "-" + numero;
                        operacion_resultado = operacion_resultado + "-" + numero;
                    }
                    else {
                        operacion = operacion + "(-" + numero + ")";
                        operacion_resultado = operacion_resultado + "(-" + numero + ")";
                    }
                }
            }
            if (valor_absoluto == true) {
                operacion = operacion + "| ";
                operacion_resultado = operacion_resultado + ")";
                valor_absoluto = false;
            }
        }
        else {

            const n_operacion = Math.floor(Math.random() * 6 + 1);
            if (n_operacion == 1 || n_operacion == 2) {//suma
                operacion = operacion + "+";
                operacion_resultado = operacion_resultado + "+";

                if (valor_absoluto == true) {
                    operacion = operacion + " |";
                    operacion_resultado = operacion_resultado + "Math.abs(";
                }
                const numero = Math.floor(Math.random() * numero_max + 1);
                if (Math.floor(Math.random() * 3 + 1) == 1) {//positivo
                    operacion = operacion + numero;
                    operacion_resultado = operacion_resultado + numero;
                }
                else {
                    if (valor_absoluto == true) {
                        operacion = operacion + "-" + numero;
                        operacion_resultado = operacion_resultado + "-" + numero;
                    }
                    else {
                        operacion = operacion + "(-" + numero + ")";
                        operacion_resultado = operacion_resultado + "(-" + numero + ")";
                    }
                }
                if (valor_absoluto == true) {
                    operacion = operacion + "| ";
                    operacion_resultado = operacion_resultado + ")";
                    valor_absoluto = false;
                }
            }
            if (n_operacion == 3 || n_operacion == 4) {//resta
                operacion = operacion + "-";
                operacion_resultado = "-";

                if (valor_absoluto == true) {
                    operacion = operacion + " |";
                    operacion_resultado = operacion_resultado + "Math.abs(";
                }
                const numero = Math.floor(Math.random() * numero_max + 1);
                if (Math.floor(Math.random() * 3 + 1) == 1) {//positivo
                    operacion = operacion + numero;
                    operacion_resultado = operacion_resultado + numero;
                }
                else {
                    if (valor_absoluto == true) {
                        operacion = operacion + "-" + numero;
                        operacion_resultado = operacion_resultado + "-" + numero;
                    }
                    else {
                        operacion = operacion + "(-" + numero + ")";
                        operacion_resultado = operacion_resultado + "(-" + numero + ")";
                    }
                }
                if (valor_absoluto == true) {
                    operacion = operacion + "| ";
                    operacion_resultado = operacion_resultado + ")";
                    valor_absoluto = false;
                }
            }
            if (n_operacion == 5) {//multiplicacion
                operacion = operacion + "*";
                operacion_resultado = operacion_resultado + "*";

                if (valor_absoluto == true) {
                    operacion = operacion + " |";
                    operacion_resultado = operacion_resultado + "Math.abs(";
                }
                const numero = Math.floor(Math.random() * numero_max + 1);
                if (Math.floor(Math.random() * 3 + 1) == 1) {//positivo
                    operacion = operacion + numero;
                    operacion_resultado = operacion_resultado + numero;
                }
                else {
                    if (valor_absoluto == true) {
                        operacion = operacion + "-" + numero;
                        operacion_resultado = operacion_resultado + "-" + numero;
                    }
                    else {
                        operacion = operacion + "(-" + numero + ")";
                        operacion_resultado = operacion_resultado + "(-" + numero + ")";
                    }
                }
                if (valor_absoluto == true) {
                    operacion = operacion + "| ";
                    operacion_resultado = operacion_resultado + ")";
                    valor_absoluto = false;
                }
            }
            if (n_operacion == 6) {//división
                if (n_operacion == 1) {//suma
                    operacion = operacion + "/";
                    operacion_resultado = operacion_resultado + "/";

                    if (valor_absoluto == true) {
                        operacion = operacion + " |";
                        operacion_resultado = operacion_resultado + "Math.abs(";
                    }
                    const numero = Math.floor(Math.random() * numero_max + 1);
                    if (Math.floor(Math.random() * 3 + 1) == 1) {//positivo
                        operacion = operacion + numero;
                        operacion_resultado = operacion_resultado + numero;
                    }
                    else {
                        if (valor_absoluto == true) {
                            operacion = operacion + "-" + numero;
                            operacion_resultado = operacion_resultado + "-" + numero;
                        }
                        else {
                            operacion = operacion + "(-" + numero + ")";
                            operacion_resultado = operacion_resultado + "(-" + numero + ")";
                        }
                    }
                    if (valor_absoluto == true) {
                        operacion = operacion + "| ";
                        operacion_resultado = operacion_resultado + ")";
                        valor_absoluto = false;
                    }
                }
            }

        }
    }
    operacion = operacion + "|";
    //mostrar en pantalla
    document.getElementById("body").innerHTML = "<svg class='flecha-volver' xmlns='http://www.w3.org/2000/svg' version='1.0' width='90.000000pt' height='90.000000pt' viewBox='0 0 90.000000 90.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,90.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path style='cursor: pointer;'onclick='abrir_menu_operaciones_extras()' d='M113 548 c-46 -46 -83 -90 -83 -98 0 -25 165 -183 186 -178 37 7 27 39 -27 94 l-53 54 364 2 365 3 0 25 0 25 -365 3 -364 2 53 54 c55 56 64 88 26 94 -14 2 -46 -23 -102 -80z'/></g></svg><h1 id='correct-text'>" + contador_correcto + "</h1><h3 id='ejercicio'class='ejercicio'style='font-size:2.25rem;'>" + operacion + "</h3><div class='div-resultado'><input id='resultado'class='resultado'type='text' value=''placeholder='" + Math.floor(Math.random() * 9 + 1) + "' autofocus></div>";
    //corregir
    document.getElementById("resultado").focus();
    document.getElementById("resultado").addEventListener("keyup", function (event) {
        event.preventDefault();
        let resultado_usuario_revisada = document.getElementById("resultado").value.replaceAll(" ", "");//revisar
        //corregir errores de escritura
        resultado_usuario_revisada = resultado_usuario_revisada.replaceAll(",,", ",");
        resultado_usuario_revisada = resultado_usuario_revisada.replaceAll("..", ".");
        resultado_usuario_revisada = resultado_usuario_revisada.replaceAll("((", "(");
        resultado_usuario_revisada = resultado_usuario_revisada.replaceAll("[[", "[");
        resultado_usuario_revisada = resultado_usuario_revisada.replaceAll(")", ")");
        resultado_usuario_revisada = resultado_usuario_revisada.replaceAll("]]", "]");
        resultado_usuario_revisada = resultado_usuario_revisada.replaceAll("--", "-");
        resultado_usuario_revisada = resultado_usuario_revisada.replaceAll("+", "");
        if (event.keyCode === 13 && resultado_usuario_revisada != "") {//aceptar
            //comprobar
            let bien_hecha = true;
            console.log(operacion_resultado);
            operacion_resultado = Math.abs(eval(operacion_resultado));
            if (resultado_usuario_revisada != operacion_resultado) {
                bien_hecha = false;
            }
            else {
                bien_hecha = true;
            }
            //mostrar corrección
            if (bien_hecha == true) {//bien hecho
                contador_correcto++;
                actualizar_contador_igualdades();
                document.getElementById("ejercicio").style.display = "none";
                document.getElementById("resultado").style.display = "none";
                if (muted == false) {//con sonido
                    document.getElementById("body").innerHTML += "<audio src='recursos/correcto.mp3'class='audio-nota'autoplay preload='auto'></audio><div class='nota'><h3 class='texto-nota-bien'>¡Correcto!</h3><img class='emoji'src='recursos/correcto.img.png'/><h3 class='ejercicio-text'>" + operacion + "</h3><h3 class='sin-corregir-bien'>" + resultado_usuario_revisada + "</h3><h3 class='resuelto'>" + operacion_resultado + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><input type='button'onclick='crear_operacion_absoluto()'id='siguinte-nota'class='siguinte-nota'></div>";
                }
                else {//sin sonido
                    document.getElementById("body").innerHTML += "<div class='nota'><h3 class='texto-nota-bien'>¡Correcto!</h3><img class='emoji'src='recursos/correcto.img.png'/><h3 class='ejercicio-text'>" + operacion + "</h3><h3 class='sin-corregir-bien'>" + resultado_usuario_revisada + "</h3><h3 class='resuelto'>" + operacion_resultado + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><input type='button'onclick='crear_operacion_absoluto()'id='siguinte-nota'class='siguinte-nota'></div>";
                }
            }
            else {//mal hecho
                contador_correcto = 0;
                actualizar_contador_igualdades();
                if (muted == false) {//con sonido
                    document.getElementById("body").innerHTML += "<audio src='recursos/incorrecto.mp3'class='audio-nota'autoplay preload='auto'></audio><div class='nota'><h3 class='texto-nota-mal'>¡Incorrecto!</h3><img class='emoji'src='recursos/incorrecto.img.png'/><h3 class='ejercicio-text'>" + operacion + "</h3><h3 class='sin-corregir'>" + resultado_usuario_revisada + "</h3><h3 class='resuelto'>" + operacion_resultado + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><input type='button'onclick='crear_operacion_absoluto()'id='siguinte-nota'class='siguinte-nota'></div>";
                }
                else {//sin sonido
                    document.getElementById("body").innerHTML += "<div class='nota'><h3 class='texto-nota-mal'>¡Incorrecto!</h3><img class='emoji'src='recursos/incorrecto.img.png'/><h3 class='ejercicio-text'>" + operacion + "</h3><h3 class='sin-corregir'>" + resultado_usuario_revisada + "</h3><h3 class='resuelto'>" + operacion_resultado + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><input type='button'onclick='crear_operacion_absoluto()'id='siguinte-nota'class='siguinte-nota'></div>";
                }
            }
            document.getElementById("siguinte-nota").focus();
            document.getElementById("siguinte-nota").addEventListener("keyup", function (event) {
                event.preventDefault();
                if (event.keyCode === 13) {
                    crear_operacion_absoluto();
                }
            });
        }
    });
}