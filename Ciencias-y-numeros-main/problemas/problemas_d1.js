function encontrar_problemas_d1() {
    let n_aleatorio_problema;
    const numero_total_problemas = 4;
    if (datos_problema_impedir_repetido[0] === 1) {
        const numero_problema_temporal = datos_problema_impedir_repetido[1];
        while (numero_problema_temporal === n_aleatorio_problema) {
            n_aleatorio_problema = Math.floor(Math.random() * numero_total_problemas + 1);//numero aleatorio entre cantidad problemas-1
        }
    }
    else {
        n_aleatorio_problema = Math.floor(Math.random() * numero_total_problemas + 1);
    }
    datos_problema_impedir_repetido = [1, n_aleatorio_problema];
    switch (n_aleatorio_problema) {
        case 1://p1
            problema_d1_p1();
            break;
        case 2://p2
            problema_d1_p2();
            break;
        case 3://p4
            problema_d1_p3();
            break;
        case 4://p4
            problema_d1_p4();
            break;
        default:
            problema_d1_p1();
            break;
    }

}


//problemas
{
    //mates
    {
        //sumar
        function problema_d1_p2() {
            const n_libros1 = Math.floor(Math.random() * 9 + 1);
            const n_libros2 = Math.floor(Math.random() * (10 - n_libros1) + 1);
            let texto_problema = "";
            if (idioma == 0) {
                const tipo_libro = ["aventura", "historia", "matemáticas", "inglés", "francés", "ciencia", "teatro", "humor"];
                let tipo1 = Math.floor(Math.random() * (tipo_libro.length - 1) + 0);
                let tipo2 = Math.floor(Math.random() * (tipo_libro.length - 1) + 0);
                if (tipo2 == tipo1) {
                    if (tipo1 == 0) {
                        tipo2 = 2;
                    }
                    else {
                        tipo2 = 0;
                    }
                }
                tipo1 = tipo_libro[tipo1];
                tipo2 = tipo_libro[tipo2];
                texto_problema = "<b style='color:#295dfb'>" + buscar_nombre() + "</b> ha leído <u style='color:#f31919'>" + n_libros1 + "</u> <b style='color:#0b9211'>m1</b> de " + tipo1 + " y <u style='color:#f31919'>" + n_libros2 + "</u> <b style='color:#0b9211'>m2</b> de " + tipo2 + ".</br>¿<b style='color:#bb3bf2'>Cuántos</b> <b style='color:#0b9211'>libros</b> <b style='color:#8bb011'>ha leído en total</b> ?";
                if (marcar_datos_importantes_problema == false) {//no marcar datos
                    texto_problema = desmarcar_marcar_datos(texto_problema);
                }
                //arreglar errores de numero y persona
                if (n_libros1 == 1) {
                    texto_problema = texto_problema.replaceAll("m1", "libro");
                }
                else {
                    texto_problema = texto_problema.replaceAll("m1", "libros");
                }
                if (n_libros2 == 1) {
                    texto_problema = texto_problema.replaceAll("m2", "libros");
                }
                else {
                    texto_problema = texto_problema.replaceAll("m2", "libros");
                }
                //mostrar
                mostrar_pantalla_estructura_problema(texto_problema, Math.floor(Math.random(9 + 0)));
                document.getElementById("resultado").focus();
                texto_problema = null;
            }
            else if (idioma == 1) {

            }
            else {

            }
            //corregir
            document.getElementById("resultado").focus();
            document.getElementById("resultado").addEventListener("keyup", function (event) {
                event.preventDefault();
                let resultado_usuario_revisada = document.getElementById("resultado").value.replaceAll(" ", "");//revisar
                if (event.keyCode === 13 && resultado_usuario_revisada != "" && resultado_usuario_revisada.length <= 3) {//aceptar
                    if ((n_libros1 + n_libros2) == resultado_usuario_revisada) {//bien
                        contador_correcto++;
                        actualizar_contador_problemas();
                        if (!continuidad) {
                            document.getElementById("enunciado").style.display = "none";
                            document.getElementById("resultado").style.display = "none";
                            if (!muted) {//con sonido
                                const operacion_tocada = n_libros1 + "+" + n_libros2;
                                const resuelto_mal_jugador = resultado_usuario_revisada;
                                resultado_usuario_revisada = null;
                                const resultado_corregido = n_libros1 + n_libros2;
                                document.getElementById("body").innerHTML += "<audio src='recursos/correcto.mp3'class='audio-nota'autoplay preload='auto'></audio><div class='nota'><h3 class='texto-nota-bien'>¡" + traduccion_correcto[idioma] + "!</h3><img class='emoji'src='recursos/correcto.img.png'/><h3 class='ejercicio-text'>" + operacion_tocada + "</h3><h3 class='sin-corregir-bien'>" + resuelto_mal_jugador + "</h3><h3 class='resuelto'>" + resultado_corregido + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><svg class='siguinte-nota'xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;' onclick='crear_problema(true)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'></path></g></svg></div>";
                                document.getElementById("siguinte-nota").focus();
                            }
                            else {//sin sonido
                                const operacion_tocada = n_libros1 + "+" + n_libros2;
                                const resuelto_mal_jugador = resultado_usuario_revisada;
                                resultado_usuario_revisada = null;
                                const resultado_corregido = n_libros1 + n_libros2;
                                document.getElementById("body").innerHTML += "<div class='nota'><h3 class='texto-nota-bien'>¡" + traduccion_correcto[idioma] + "!</h3><img class='emoji'src='recursos/correcto.img.png'/><h3 class='ejercicio-text'>" + operacion_tocada + "</h3><h3 class='sin-corregir-bien'>" + resuelto_mal_jugador + "</h3><h3 class='resuelto'>" + resultado_corregido + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><svg class='siguinte-nota'xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;' onclick='crear_problema(true)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'></path></g></svg></div>";
                                document.getElementById("siguinte-nota").focus();
                            }
                        }
                        else {
                            if (direcionar_aleatorio == true) {
                                direccionar_aleatorio();
                            }
                            else {
                                encontrar_problemas_d1();
                            }
                        }
                    }
                    else {//mal
                        contador_correcto = 0;
                        actualizar_contador_problemas();
                        if (continuidad == false) {
                            if (muted == false) {//con sonido
                                const operacion_tocada = n_libros1 + "+" + n_libros2;
                                const resuelto_mal_jugador = resultado_usuario_revisada;
                                resultado_usuario_revisada = null;
                                const resultado_corregido = n_libros1 + n_libros2;
                                document.getElementById("body").innerHTML += "<audio src='recursos/incorrecto.mp3'class='audio-nota'autoplay preload='auto'></audio><div class='nota'><h3 class='texto-nota-mal'>¡" + traduccion_incorrecto[idioma] + "!</h3><img class='emoji'src='recursos/incorrecto.img.png'/><h3 class='ejercicio-text'>" + operacion_tocada + "</h3><h3 class='sin-corregir'>" + resuelto_mal_jugador + "</h3><h3 class='resuelto'>" + resultado_corregido + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><svg class='siguinte-nota'xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;' onclick='crear_problema(true)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'></path></g></svg></div>";
                                document.getElementById("siguinte-nota").focus();
                            }
                            else {//sin sonido
                                const operacion_tocada = n_libros1 + "+" + n_libros2;
                                const resuelto_mal_jugador = resultado_usuario_revisada;
                                resultado_usuario_revisada = null;
                                const resultado_corregido = n_libros1 + n_libros2;
                                document.getElementById("body").innerHTML += "<div class='nota'><h3 class='texto-nota-mal'>¡" + traduccion_incorrecto[idioma] + "!</h3><img class='emoji'src='recursos/incorrecto.img.png'/><h3 class='ejercicio-text'>" + operacion_tocada + "</h3><h3 class='sin-corregir'>" + resuelto_mal_jugador + "</h3><h3 class='resuelto'>" + resultado_corregido + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><svg class='siguinte-nota'xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;' onclick='crear_problema(true)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'></path></g></svg></div>";
                                document.getElementById("siguinte-nota").focus();
                            }
                        }
                        else {
                            if (direcionar_aleatorio == true) {
                                direccionar_aleatorio();
                            }
                            else {
                                encontrar_problemas_d1();
                            }
                        }
                    }
                }
            });
        }
        //sumar
        function problema_d1_p3() {
            const niños_principio = Math.floor(Math.random() * 7 + 1);
            const niños_llegan = Math.floor(Math.random() * (10 - niños_principio) + 1);
            let texto_problema = "";
            if (idioma == 0) {
                const tipo_lugar = ["el parque", "la biblioteca", "la clase", "la sala"];
                const tipo_acciones = ["jugando", "lellendo", "estudiando", "hablando"];
                let tipo = Math.floor(Math.random() * (tipo_lugar.length - 1) + 0);
                texto_problema = "En <b style='color:#295dfb'>" + tipo_lugar[tipo] + "</b> <b style='color:#8bb011'>hay</b> <u style='color:#f31919'>" + niños_principio + "</u><b style='color:#0b9211'> m1 </b>" + tipo_acciones[tipo] + " y<b style='color:#8bb011'> m2 </b><u style='color:#f31919'>" + niños_llegan + "</u><b style='color:#0b9211'> m3 </b>más. </br>¿<b style='color:#bb3bf2'>Cuántos</b> <b style='color:#0b9211'>niños</b> <b style='color:#8bb011'>hay en total</b> en <b style='color:#295dfb'>" + tipo_lugar[tipo] + "</b>?";
                if (marcar_datos_importantes_problema == false) {//no marcar datos
                    texto_problema = desmarcar_marcar_datos(texto_problema);
                }
                if (niños_principio == 1) {
                    texto_problema = texto_problema.replace(" m1 ", " niño ");
                }
                else {
                    texto_problema = texto_problema.replace(" m1 ", " niños ");
                }
                if (niños_llegan == 1) {
                    texto_problema = texto_problema.replace(" m2 ", " llega ");
                    texto_problema = texto_problema.replace(" m3 ", " niño ");
                }
                else {
                    texto_problema = texto_problema.replace(" m2 ", " llegan ");
                    texto_problema = texto_problema.replace(" m3 ", " niños ");
                }
                //mostrar
                mostrar_pantalla_estructura_problema(texto_problema, Math.floor(Math.random(9 + 0)));
                document.getElementById("resultado").focus();
                texto_problema = null;
            }
            else if (idioma == 1) {

            }
            else {

            }
            //corregir
            document.getElementById("resultado").focus();
            document.getElementById("resultado").addEventListener("keyup", function (event) {
                event.preventDefault();
                let resultado_usuario_revisada = document.getElementById("resultado").value.replaceAll(" ", "");//revisar
                if (event.keyCode === 13 && resultado_usuario_revisada != "" && resultado_usuario_revisada.length <= 3) {//aceptar
                    if ((niños_principio + niños_llegan) == resultado_usuario_revisada) {//bien
                        contador_correcto++;
                        actualizar_contador_problemas();
                        if (continuidad == false) {
                            document.getElementById("enunciado").style.display = "none";
                            document.getElementById("resultado").style.display = "none";
                            if (muted == false) {//con sonido
                                const operacion_tocada = niños_principio + "+" + niños_llegan;
                                const resuelto_mal_jugador = resultado_usuario_revisada;
                                resultado_usuario_revisada = null;
                                const resultado_corregido = niños_principio + niños_llegan;
                                document.getElementById("body").innerHTML += "<audio src='recursos/correcto.mp3'class='audio-nota'autoplay preload='auto'></audio><div class='nota'><h3 class='texto-nota-bien'>¡" + traduccion_correcto[idioma] + "!</h3><img class='emoji'src='recursos/correcto.img.png'/><h3 class='ejercicio-text'>" + operacion_tocada + "</h3><h3 class='sin-corregir-bien'>" + resuelto_mal_jugador + "</h3><h3 class='resuelto'>" + resultado_corregido + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><svg class='siguinte-nota'xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;' onclick='crear_problema(true)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'></path></g></svg></div>";
                                document.getElementById("siguinte-nota").focus();
                            }
                            else {//sin sonido
                                const operacion_tocada = niños_principio + "+" + niños_llegan;
                                const resuelto_mal_jugador = resultado_usuario_revisada;
                                resultado_usuario_revisada = null;
                                const resultado_corregido = niños_principio + niños_llegan;
                                document.getElementById("body").innerHTML += "<div class='nota'><h3 class='texto-nota-bien'>¡" + traduccion_correcto[idioma] + "!</h3><img class='emoji'src='recursos/correcto.img.png'/><h3 class='ejercicio-text'>" + operacion_tocada + "</h3><h3 class='sin-corregir-bien'>" + resuelto_mal_jugador + "</h3><h3 class='resuelto'>" + resultado_corregido + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><svg class='siguinte-nota'xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;' onclick='crear_problema(true)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'></path></g></svg></div>";
                                document.getElementById("siguinte-nota").focus();
                            }
                        }
                        else {
                            if (direcionar_aleatorio == true) {
                                direccionar_aleatorio();
                            }
                            else {
                                encontrar_problemas_d1();
                            }
                        }
                    }
                    else {//mal
                        contador_correcto = 0;
                        actualizar_contador_problemas();
                        if (continuidad == false) {
                            if (muted == false) {//con sonido
                                const operacion_tocada = niños_principio + "+" + niños_llegan;
                                const resuelto_mal_jugador = resultado_usuario_revisada;
                                resultado_usuario_revisada = null;
                                const resultado_corregido = niños_principio + niños_llegan;
                                document.getElementById("body").innerHTML += "<audio src='recursos/incorrecto.mp3'class='audio-nota'autoplay preload='auto'></audio><div class='nota'><h3 class='texto-nota-mal'>¡" + traduccion_incorrecto[idioma] + "!</h3><img class='emoji'src='recursos/incorrecto.img.png'/><h3 class='ejercicio-text'>" + operacion_tocada + "</h3><h3 class='sin-corregir'>" + resuelto_mal_jugador + "</h3><h3 class='resuelto'>" + resultado_corregido + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><svg class='siguinte-nota'xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;' onclick='crear_problema(true)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'></path></g></svg></div>";
                                document.getElementById("siguinte-nota").focus();
                            }
                            else {//sin sonido
                                const operacion_tocada = niños_principio + "+" + niños_llegan;
                                const resuelto_mal_jugador = resultado_usuario_revisada;
                                resultado_usuario_revisada = null;
                                const resultado_corregido = niños_principio + niños_llegan;
                                document.getElementById("body").innerHTML += "<div class='nota'><h3 class='texto-nota-mal'>¡" + traduccion_incorrecto[idioma] + "!</h3><img class='emoji'src='recursos/incorrecto.img.png'/><h3 class='ejercicio-text'>" + operacion_tocada + "</h3><h3 class='sin-corregir'>" + resuelto_mal_jugador + "</h3><h3 class='resuelto'>" + resultado_corregido + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><svg class='siguinte-nota'xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;' onclick='crear_problema(true)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'></path></g></svg></div>";
                                document.getElementById("siguinte-nota").focus();
                            }
                        }
                        else {
                            if (direcionar_aleatorio == true) {
                                direccionar_aleatorio();
                            }
                            else {
                                encontrar_problemas_d1();
                            }
                        }
                    }
                }
            });
        }
        //sumar
        function problema_d1_p4() {
            const niños = Math.floor(Math.random() * 10 + 1);
            const niñas = Math.floor(Math.random() * (10 - niños) + 1);
            let texto_problema = "";
            if (idioma == 0) {
                const tiempo = ["Mañana", "Pasado mañana", "Dentro de " + Math.floor(Math.random() * 20 + 2) + " días"];
                texto_problema = tiempo[Math.floor(Math.random() * (tiempo.length) + 0)] + " <b style='color:#295dfb'>los niños</b> y <b style='color:#295dfb'>niñas</b> de primero se van de excursión. Si <b style='color:#8bb011'>en el autobús hay</b> <u style='color:#f31919'>" + niños + "</u> <b style='color:#0b9211'>m1</b> y <u style='color:#f31919'>" + niñas + "</u> <b style='color:#0b9211'>m2</b>.</br>¿ <b style='color:#bb3bf2'>Cuántos</b> <b style='color:#0b9211'>niños</b> y <b style='color:#0b9211'>niñas</b> <b style='color:#8bb011'>hay en total</b> ?";
                if (marcar_datos_importantes_problema == false) {//no marcar datos
                    texto_problema = desmarcar_marcar_datos(texto_problema);
                }
                if (niños == 1) {
                    texto_problema = texto_problema.replace("m1", "niño");
                }
                else {
                    texto_problema = texto_problema.replace("m1", "niños");
                }
                if (niñas == 1) {
                    texto_problema = texto_problema.replace("m2", "niña");
                }
                else {
                    texto_problema = texto_problema.replace("m2", " niñas");
                }
                //mostrar
                mostrar_pantalla_estructura_problema(texto_problema, Math.floor(Math.random(9 + 0)));
                document.getElementById("resultado").focus();
                texto_problema = null;
            }
            else if (idioma == 1) {

            }
            else {

            }
            //corregir
            document.getElementById("resultado").focus();
            document.getElementById("resultado").addEventListener("keyup", function (event) {
                event.preventDefault();
                let resultado_usuario_revisada = document.getElementById("resultado").value.replaceAll(" ", "");//revisar
                if (event.keyCode === 13 && resultado_usuario_revisada != "" && resultado_usuario_revisada.length <= 3) {//aceptar
                    if ((niñas + niños) == resultado_usuario_revisada) {//bien
                        contador_correcto++;
                        actualizar_contador_problemas();
                        const operacion_tocada = niños + "+" + niñas;
                        const resuelto_mal_jugador = resultado_usuario_revisada;
                        resultado_usuario_revisada = null;
                        const resultado_corregido = niñas + niños;
                        if (continuidad == false) {
                            document.getElementById("enunciado").style.display = "none";
                            document.getElementById("resultado").style.display = "none";
                            if (muted == false) {//con sonido
                                document.getElementById("body").innerHTML += "<audio src='recursos/correcto.mp3'class='audio-nota'autoplay preload='auto'></audio><div class='nota'><h3 class='texto-nota-bien'>¡" + traduccion_correcto[idioma] + "!</h3><img class='emoji'src='recursos/correcto.img.png'/><h3 class='ejercicio-text'>" + operacion_tocada + "</h3><h3 class='sin-corregir-bien'>" + resuelto_mal_jugador + "</h3><h3 class='resuelto'>" + resultado_corregido + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><svg class='siguinte-nota'xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;' onclick='crear_problema(true)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'></path></g></svg></div>";
                                document.getElementById("siguinte-nota").focus();
                            }
                            else {//sin sonido
                                document.getElementById("body").innerHTML += "<div class='nota'><h3 class='texto-nota-bien'>¡" + traduccion_correcto[idioma] + "!</h3><img class='emoji'src='recursos/correcto.img.png'/><h3 class='ejercicio-text'>" + operacion_tocada + "</h3><h3 class='sin-corregir-bien'>" + resuelto_mal_jugador + "</h3><h3 class='resuelto'>" + resultado_corregido + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><svg class='siguinte-nota'xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;' onclick='crear_problema(true)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'></path></g></svg></div>";
                                document.getElementById("siguinte-nota").focus();
                            }
                        }
                        else {
                            if (direcionar_aleatorio == true) {
                                direccionar_aleatorio();
                            }
                            else {
                                encontrar_problemas_d1();
                            }
                        }
                    }
                    else {//mal
                        contador_correcto = 0;
                        actualizar_contador_problemas();
                        if (continuidad == false) {
                            if (muted == false) {//con sonido
                                document.getElementById("body").innerHTML += "<audio src='recursos/incorrecto.mp3'class='audio-nota'autoplay preload='auto'></audio><div class='nota'><h3 class='texto-nota-mal'>¡" + traduccion_incorrecto[idioma] + "!</h3><img class='emoji'src='recursos/incorrecto.img.png'/><h3 class='ejercicio-text'>" + operacion_tocada + "</h3><h3 class='sin-corregir'>" + resuelto_mal_jugador + "</h3><h3 class='resuelto'>" + resultado_corregido + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><svg class='siguinte-nota'xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;' onclick='crear_problema(true)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'></path></g></svg></div>";
                                document.getElementById("siguinte-nota").focus();
                            }
                            else {//sin sonido
                                document.getElementById("body").innerHTML += "<div class='nota'><h3 class='texto-nota-mal'>¡" + traduccion_incorrecto[idioma] + "!</h3><img class='emoji'src='recursos/incorrecto.img.png'/><h3 class='ejercicio-text'>" + operacion_tocada + "</h3><h3 class='sin-corregir'>" + resuelto_mal_jugador + "</h3><h3 class='resuelto'>" + resultado_corregido + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><svg class='siguinte-nota'xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;' onclick='crear_problema(true)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'></path></g></svg></div>";
                                document.getElementById("siguinte-nota").focus();
                            }
                        }
                        else {
                            if (direcionar_aleatorio == true) {
                                direccionar_aleatorio();
                            }
                            else {
                                encontrar_problemas_d1();
                            }
                        }
                    }
                }
            });
        }
        //restar
        function problema_d1_p1() {
            //variables
            const manzanas = Math.floor(Math.random() * 10 + 2);
            const comidas = Math.floor(Math.random() * manzanas + 1);
            const malas = Math.floor(Math.random() * (manzanas - comidas) + 0);
            //decidir indioma
            let texto_problema = "";
            if (idioma == 0) {//español
                texto_problema = "<b style='color:#295dfb'>" + buscar_nombre() + "</b> tiene <b><u style='color:#f31919'>" + manzanas + "</b></u> m1, pero <b><u style='color:#f31919'>" + comidas + "</b></u> de ellas <b style='color:#8bb011'> m2 </b> y <b><u style='color:#f31919'>" + malas + "</b></u> m3 </br>¿<b style='color:#bb3bf2'>Cuántas</b> <b style='color:#0b9211'>manzanas</b> <b style='color:#8bb011'>puede</b> comer?";
                texto_problema = texto_problema.replaceAll("  ", " ");//arreglar errores de doble espacio
                if (marcar_datos_importantes_problema == false) {//no marcar datos
                    texto_problema = desmarcar_marcar_datos(texto_problema);
                }
                else { }
                //arreglar errores de numero y persona
                if (manzanas == 1) {
                    if (marcar_datos_importantes_problema == true) {
                        texto_problema = texto_problema.replace(" m1,", " <b style='color:#0b9211'>manzana</b>,");
                    }
                    else {
                        texto_problema = texto_problema.replace(" m1,", " manzana,");
                    }

                }
                else {
                    if (marcar_datos_importantes_problema == true) {
                        texto_problema = texto_problema.replace(" m1,", " <b style='color:#0b9211'>manzanas</b>,");
                    }
                    else {
                        texto_problema = texto_problema.replace(" m1,", " manzanas,");
                    }
                }
                if (comidas == 1 || comidas == 0) {
                    texto_problema = texto_problema.replace(" m2 ", " está comida ");
                }
                else {
                    texto_problema = texto_problema.replace(" m2 ", " están comidas ");
                }
                if (malas == 1) {
                    texto_problema = texto_problema.replace(" m3 ", " <b style='color:#8bb011'>está mala</b> y no se m4.");
                }
                else {
                    texto_problema = texto_problema.replace(" m3 ", " <b style='color:#8bb011'>están malas</b> y no se m4.");
                }
                if (comidas + malas == 1) {
                    texto_problema = texto_problema.replace(" m4.", " puede comer.");
                }
                else {
                    texto_problema = texto_problema.replace(" m4.", " pueden comer.");
                }
            }
            if (idioma == 1) {//inglés

            }
            if (idioma == 2) {//gallego

            }        //volver hacer por si a caso
            if (marcar_datos_importantes_problema == false) {//no marcar datos
                texto_problema = desmarcar_marcar_datos(texto_problema);
            }
            else { }
            //mostrar
            mostrar_pantalla_estructura_problema(texto_problema, Math.floor(Math.random(9 + 0)));
            document.getElementById("resultado").focus();
            texto_problema = null;
            //corregir
            document.getElementById("resultado").focus();
            document.getElementById("resultado").addEventListener("keyup", function (event) {
                event.preventDefault();
                let resultado_usuario_revisada = document.getElementById("resultado").value.replaceAll(" ", "");//revisar
                if (event.keyCode === 13 && resultado_usuario_revisada != "" && resultado_usuario_revisada.length <= 3) {//aceptar
                    if ((manzanas - malas - comidas) == resultado_usuario_revisada) {//bien
                        contador_correcto++;
                        actualizar_contador_problemas();
                        if (continuidad == false) {
                            document.getElementById("enunciado").style.display = "none";
                            document.getElementById("resultado").style.display = "none";
                            if (muted == false) {//con sonido
                                const operacion_tocada = manzanas + "-" + comidas + "-" + malas;
                                const resuelto_mal_jugador = resultado_usuario_revisada;
                                resultado_usuario_revisada = null;
                                const resultado_corregido = manzanas - comidas - malas;
                                document.getElementById("body").innerHTML += "<audio src='recursos/correcto.mp3'class='audio-nota'autoplay preload='auto'></audio><div class='nota'><h3 class='texto-nota-bien'>¡" + traduccion_correcto[idioma] + "!</h3><img class='emoji'src='recursos/correcto.img.png'/><h3 class='ejercicio-text'>" + operacion_tocada + "</h3><h3 class='sin-corregir-bien'>" + resuelto_mal_jugador + "</h3><h3 class='resuelto'>" + resultado_corregido + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><svg class='siguinte-nota'xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;' onclick='crear_problema(true)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'></path></g></svg></div>";
                                document.getElementById("siguinte-nota").focus();
                            }
                            else {//sin sonido
                                const operacion_tocada = manzanas + "-" + comidas + "-" + malas;
                                const resuelto_mal_jugador = resultado_usuario_revisada;
                                resultado_usuario_revisada = null;
                                const resultado_corregido = manzanas - comidas - malas;
                                document.getElementById("body").innerHTML += "<div class='nota'><h3 class='texto-nota-bien'>¡" + traduccion_correcto[idioma] + "!</h3><img class='emoji'src='recursos/correcto.img.png'/><h3 class='ejercicio-text'>" + operacion_tocada + "</h3><h3 class='sin-corregir-bien'>" + resuelto_mal_jugador + "</h3><h3 class='resuelto'>" + resultado_corregido + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><svg class='siguinte-nota'xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;' onclick='crear_problema(true)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'></path></g></svg></div>";
                                document.getElementById("siguinte-nota").focus();
                            }
                        }
                        else {
                            if (direcionar_aleatorio == true) {
                                direccionar_aleatorio();
                            }
                            else {
                                encontrar_problemas_d1();
                            }
                        }
                    }
                    else {//mal
                        contador_correcto = 0;
                        actualizar_contador_problemas();
                        if (continuidad == false) {
                            if (muted == false) {//con sonido
                                const operacion_tocada = manzanas + "-" + comidas + "-" + malas;
                                const resuelto_mal_jugador = resultado_usuario_revisada;
                                resultado_usuario_revisada = null;
                                const resultado_corregido = manzanas - comidas - malas;
                                document.getElementById("body").innerHTML += "<audio src='recursos/incorrecto.mp3'class='audio-nota'autoplay preload='auto'></audio><div class='nota'><h3 class='texto-nota-mal'>¡" + traduccion_incorrecto[idioma] + "!</h3><img class='emoji'src='recursos/incorrecto.img.png'/><h3 class='ejercicio-text'>" + operacion_tocada + "</h3><h3 class='sin-corregir'>" + resuelto_mal_jugador + "</h3><h3 class='resuelto'>" + resultado_corregido + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><svg class='siguinte-nota'xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;' onclick='crear_problema(true)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'></path></g></svg></div>";
                                document.getElementById("siguinte-nota").focus();
                            }
                            else {//sin sonido
                                const operacion_tocada = manzanas + "-" + comidas + "-" + malas;
                                const resuelto_mal_jugador = resultado_usuario_revisada;
                                resultado_usuario_revisada = null;
                                const resultado_corregido = manzanas - comidas - malas;
                                document.getElementById("body").innerHTML += "<div class='nota'><h3 class='texto-nota-mal'>¡" + traduccion_incorrecto[idioma] + "!</h3><img class='emoji'src='recursos/incorrecto.img.png'/><h3 class='ejercicio-text'>" + operacion_tocada + "</h3><h3 class='sin-corregir'>" + resuelto_mal_jugador + "</h3><h3 class='resuelto'>" + resultado_corregido + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><svg class='siguinte-nota'xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;' onclick='crear_problema(true)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'></path></g></svg></div>";
                                document.getElementById("siguinte-nota").focus();
                            }
                        }
                        else {
                            if (direcionar_aleatorio == true) {
                                direccionar_aleatorio();
                            }
                            else {
                                encontrar_problemas_d1();
                            }
                        }
                    }
                }
            });
        }

    }
}