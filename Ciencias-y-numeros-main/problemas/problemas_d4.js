function encontrar_problemas_d4() {
    let n_aleatorio_problema;
    const numero_total_problemas = 1;
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
            problema_d4_p1();
        break;
    }
}

//problemas
{
//mates
{
function problema_d4_p1() {
    //variables
    const cantidad_objetos = Math.trunc(Math.random() * 100 + 15);
    const dinero_objeto = Math.trunc(Math.random() * 20 + 3);
    //decidir indioma
    let texto_problema = "";
    if (idioma == 0) {
        const tienda = ["Un kiosco", "Una frutería", "Una librería", "Una panadería"];
        const objeto_plural = ["revistas", "manzanas", "libros", "barras de pan"];
        const objeto_singular = ["revista", "manzana", "libro", "barra de pan"];
        const numero_objeto_tienda = Math.floor(Math.random() * (tienda.length - 1) + 0);
        texto_problema = "<b style='color:#295dfb'>" + tienda[numero_objeto_tienda] + "</b> vendió <u style='color:#f31919'>" + cantidad_objetos + "</u> <b style='color:#0b9211'>" + objeto_plural[numero_objeto_tienda] + "</b>. Si cada <b style='color:#0b9211'>" + objeto_singular[numero_objeto_tienda] + "</b> costaba <u style='color:#f31919'>" + dinero_objeto + "</u> euros.</br>¿<b style='color:#bb3bf2'>Cuánto</b> costaron las <u style='color:#f31919'>" + cantidad_objetos + "</u> <b style='color:#0b9211'>" + objeto_plural[numero_objeto_tienda] + "</b>?";
    }
    if (idioma == 1) {

    }
    if (idioma == 2) {

    }
    //no marcar datos
    if (marcar_datos_importantes_problema == false) {
        texto_problema = desmarcar_marcar_datos(texto_problema);
    }
    else { }
        //mostrar
        mostrar_pantalla_estructura_problema(texto_problema, Math.floor(Math.random(9 + 0)));
        document.getElementById("resultado").focus();
        texto_problema=null;
    //corregir
    document.getElementById("resultado").focus();
    document.getElementById("resultado").addEventListener("keyup", function (event) {
        event.preventDefault();
        let resultado_usuario_revisada = document.getElementById("resultado").value.replaceAll(" ", "");//revisar
        resultado_usuario_revisada = document.getElementById("resultado").value.replaceAll(".", "");//revisar
        resultado_usuario_revisada = document.getElementById("resultado").value.replaceAll(",", "");//revisar
        resultado_usuario_revisada = document.getElementById("resultado").value.replaceAll("*", "");//revisar
        resultado_usuario_revisada = document.getElementById("resultado").value.replaceAll("/", "");//revisar
        resultado_usuario_revisada = document.getElementById("resultado").value.replaceAll("+", "");//revisar
        resultado_usuario_revisada = document.getElementById("resultado").value.replaceAll("-", "");//revisar
        resultado_usuario_revisada = document.getElementById("resultado").value.replaceAll("^", "");//revisar
        resultado_usuario_revisada = document.getElementById("resultado").value.replaceAll("(", "");//revisar
        resultado_usuario_revisada = document.getElementById("resultado").value.replaceAll(")", "");//revisar
        if (event.keyCode === 13 && resultado_usuario_revisada != "" && resultado_usuario_revisada.length <= 5) {//aceptar
            if ((cantidad_objetos * dinero_objeto) == resultado_usuario_revisada) {//bien
                contador_correcto++;
                actualizar_contador_problemas();
                if (continuidad == false) {
                    document.getElementById("enunciado").style.display = "none";
                    document.getElementById("resultado").style.display = "none";
                    if (muted == false) {//con sonido
                        const operacion_tocada = cantidad_objetos + "*" + dinero_objeto;
                        const resuelto_mal_jugador = resultado_usuario_revisada;
                        resultado_usuario_revisada = null;
                        const resultado_corregido = cantidad_objetos * dinero_objeto;
                        document.getElementById("body").innerHTML += "<audio src='recursos/correct.mp3'class='audio-nota'autoplay preload='auto'></audio><div class='nota'><h3 class='texto-nota-bien'>¡Correcto!</h3><img class='emoji'src='recursos/correcto.img.png'/><h3 class='ejercicio-text'>" + operacion_tocada + "</h3><h3 class='sin-corregir-bien'>" + resuelto_mal_jugador + "</h3><h3 class='resuelto'>" + resultado_corregido + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><svg class='siguinte-nota'xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;' onclick='crear_problema(true)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'></path></g></svg></div>";
                        document.getElementById("siguinte-nota").focus();
                    }
                    else {//sin sonido
                        const operacion_tocada = cantidad_objetos + "*" + dinero_objeto;
                        const resuelto_mal_jugador = resultado_usuario_revisada;
                        resultado_usuario_revisada = null;
                        const resultado_corregido = cantidad_objetos * dinero_objeto;
                        document.getElementById("body").innerHTML += "<div class='nota'><h3 class='texto-nota-bien'>¡Correcto!</h3><img class='emoji'src='recursos/correcto.img.png'/><h3 class='ejercicio-text'>" + operacion_tocada + "</h3><h3 class='sin-corregir-bien'>" + resuelto_mal_jugador + "</h3><h3 class='resuelto'>" + resultado_corregido + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><svg class='siguinte-nota'xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;' onclick='crear_problema(true)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'></path></g></svg></div>";
                        document.getElementById("siguinte-nota").focus();
                    }
                }
                else {
                    if (direcionar_aleatorio == true) {
                        direccionar_aleatorio();
                    }
                    else {
                        encontrar_problemas_d4();
                    }
                }
            }
            else {//mal
                contador_correcto = 0;
                actualizar_contador_problemas();
                if (continuidad == false) {
                    if (muted == false) {//con sonido
                        const operacion_tocada = cantidad_objetos + "*" + dinero_objeto;
                        const resuelto_mal_jugador = resultado_usuario_revisada;
                        resultado_usuario_revisada = null;
                        const resultado_corregido = cantidad_objetos * dinero_objeto;
                        document.getElementById("body").innerHTML += "<audio src='recursos/incorrecto.mp3'class='audio-nota'autoplay preload='auto'></audio><div class='nota'><h3 class='texto-nota-mal'>¡Incorrecto!</h3><img class='emoji'src='recursos/incorrecto.img.png'/><h3 class='ejercicio-text'>" + operacion_tocada + "</h3><h3 class='sin-corregir'>" + resuelto_mal_jugador + "</h3><h3 class='resuelto'>" + resultado_corregido + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><svg class='siguinte-nota'xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;' onclick='crear_problema(true)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'></path></g></svg></div>";
                        document.getElementById("siguinte-nota").focus();
                    }
                    else {//sin sonido
                        const operacion_tocada = cantidad_objetos + "*" + dinero_objeto;
                        const resuelto_mal_jugador = resultado_usuario_revisada;
                        resultado_usuario_revisada = null;
                        const resultado_corregido = cantidad_objetos * dinero_objeto;
                        document.getElementById("body").innerHTML += "<div class='nota'><h3 class='texto-nota-mal'>¡Incorrecto!</h3><img class='emoji'src='recursos/incorrecto.img.png'/><h3 class='ejercicio-text'>" + operacion_tocada + "</h3><h3 class='sin-corregir'>" + resuelto_mal_jugador + "</h3><h3 class='resuelto'>" + resultado_corregido + "</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><svg class='siguinte-nota'xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;' onclick='crear_problema(true)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'></path></g></svg></div>";
                        document.getElementById("siguinte-nota").focus();
                    }
                }
                else {
                    if (direcionar_aleatorio == true) {
                        direccionar_aleatorio();
                    }
                    else {
                        encontrar_problemas_d4();
                    }
                }
            }
        }
    });
}
}
}