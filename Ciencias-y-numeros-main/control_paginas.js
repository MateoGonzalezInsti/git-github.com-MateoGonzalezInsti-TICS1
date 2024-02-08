//variables globales (!importante)
var contador_correcto = null;
var numero_repetido_operacion = null;
var cola_tipo_mensajes = [];
var cola_text_mensajes = [];
var mostrando_mensajes = false;
var informacion = false;
var mensaje_error = false;
var operaciones_personalizada_empezada = false;
var numero_operacion_actual = 0;
var operaciones_personalizadas_correctas = 0;
var operaciones_personalizadas_incorrectas = 0;
var s = 0;
//control de las paginas
function control_pagina(pagina_trasladar) {
    //cambiar de paginas en la aplicacion
    switch (pagina_trasladar) {
        case 1://menu inicio
            document.getElementById("body").innerHTML = "<div class='div-titulo'><h2 class='text-titulo'>" + traduccion_titulo_inicial[idioma] + "</h2></div><div class='div-bt-operaciones'><input type='button' value='" + traduccion_operaciones[idioma] + "' onclick='control_pagina(2)'  class='bt-operaciones'></div><div class='div-bt-problemas'><input type='button' value='" + traduccion_problemas[idioma] + "' onclick='contador_correcto=0;crear_problema()'class='bt-problemas'></div><div class='div-bt-aleatorio'><input type='button' value='" + traduccion_aleatorio[idioma] + "' onclick='contador_correcto=0;direccionar_aleatorio()'class='bt-aleatorio'></div><div class='div-bt-extras'><input type='button' value='" + traduccion_extras[idioma] + "' onclick=' abrir_menu_operaciones_extras()'class='bt-extras'></div><img src='recursos/hoja-registro.png' type='button'class='bt-registros'onclick='abrir_registros()'><img class='bt-contrareloj'onclick='control_pagina(4)'src='recursos/cronometro.img.png'><img src='recursos/img_ajustes.png'  class='bt-ajustes' onclick='abrir_menu_ajustes()'><img src='recursos/herramientas.img.png' class='bt-herramientas' onclick='abrir_menu_herramientas()'><img src='recursos/juegos.png' class='bt-juegos' onclick='abrir_menu_juegos()'>";
            contador_correcto = null;
            direcionar_aleatorio = false;
            repetidas_operaciones = 0;
            repetidas_problemas = 0;
            numero_repetido_operacion = null;
            operaciones_personalizada_empezada = false;
            numero_operacion_actual = 0;
            break;
        case 2://menu ejercicios
            document.getElementById("body").innerHTML = "<div class='div-titulo'><h2 class='text-titulo-operaciones'>" + traduccion_operaciones[idioma] + "</h2></div><div id='text-aceptar-operaciones'>" + traduccion_titulo_advertencia_operaciones[idioma] + "</div><div class='div-bt-ejercicios'><input type='button' value='" + traduccion_ejercicios[idioma] + "' onclick='contador_correcto=0;crear_operacion(0)'class='bt-ejercicios'></div><div class='div-bt-especificas'><input type='button' value='" + traduccion_especificas[idioma] + "' onclick='control_pagina(5)' class='bt-especificas'></div><div class='div-bt-personalizadas'><input type='button' value='" + traduccion_personalizadas[idioma] + "' onclick='control_pagina(6)'class='bt-personalizadas'></div><svg class='home' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='1200px' height='1200px'><path  style='cursor: pointer;'onclick='control_pagina(1)'d='M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9 C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52 C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z'/></svg><img src='recursos/hoja-registro.png' type='button'class='bt-registros'onclick='abrir_menu_registros()'><img class='bt-contrareloj'onclick='control_pagina(4)' src='recursos/cronometro.img.png'><img src='recursos/img_ajustes.png'class='bt-ajustes' onclick='abrir_menu_ajustes()'><img src='recursos/herramientas.img.png' class='bt-herramientas' onclick='abrir_menu_herramientas()'><img src='recursos/juegos.png' class='bt-juegos' onclick='abrir_menu_juegos()'>";
            contador_correcto = null;
            direcionar_aleatorio = false;
            repetidas_operaciones = 0;
            repetidas_problemas = 0;
            numero_repetido_operacion = null;
            operaciones_personalizada_empezada = false;
            numero_operacion_actual = 0;
            operaciones_personalizadas_correctas = 0;
            operaciones_personalizadas_incorrectas = 0;
            break;
        case 3://menu ajustes
            menu_ajustes();
            break;
        case 4://menu cronometro
            document.getElementById("body").innerHTML = "<svg class='home' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='1200px' height='1200px'><path  style='cursor: pointer;'onclick='control_pagina(1)'d='M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9 C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52 C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z'/></svg><input type='button'class='bt-cronometro-facil'value='Fácil'onclick='primera_operacion_cronometro(1)'><input type='button'class='bt-cronometro-dificil'value='Difícil'onclick='primera_operacion_cronometro(2)'><input type='button'class='bt-cronometro-extremo'value='Extremo'onclick='primera_operacion_cronometro(3)'><img class='registros-cronometro'onclick='abrir_registros_cronometro()'src='recursos/registros-crono.png'>";
            break;
        case 5://menu ejercicios operaciones específica
            document.getElementById("body").innerHTML = "<svg class='flecha-volver' xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;'onclick='control_pagina(2)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'/></g></svg><div class='colocar-centro-div-especificas'><div class='div-todos-operaciones-especificas'><div class='div-operacion-especifica'><img src='recursos/img_sumas_elegir.png' alt=''class='img-operacion-especifica' onclick='contador_correcto=0;crear_operacion(1)'title='" + traduccion_sumas[idioma] + "'></div><div class='div-operacion-especifica'><img src='recursos/img_restas_elegir.png' alt=''class='img-operacion-especifica'onclick='contador_correcto=0;crear_operacion(2)'title='" + traduccion_restas[idioma] + "'></div><div class='div-operacion-especifica'><img src='recursos/img_multiplicaciones_elegir.png' alt=''class='img-operacion-especifica-md'onclick='contador_correcto=0;crear_operacion(3)'title='" + traduccion_multiplicaciones[idioma] + "'></div><div class='div-operacion-especifica'><img src='recursos/img_divisiones_elegir.png' alt=''class='img-operacion-especifica-md'onclick='contador_correcto=0;crear_operacion(4)'title='" + traduccion_divisiones[idioma] + "'></div><div class='div-operacion-especifica'><img src='recursos/img_potencias_elegir.png' alt=''class='img-operacion-especifica-pr'onclick='contador_correcto=0;crear_operacion(5)'title='" + traduccion_potencias[idioma] + "'></div><div class='div-operacion-especifica'><img src='recursos/img_raices_elegir.png' alt=''class='img-operacion-especifica-pr'onclick='contador_correcto=0;crear_operacion(6)'title='" + traduccion_raices[idioma] + "'></div><div class='div-operacion-especifica'><img src='recursos/img_jerarquia_elegir.png' alt=''class='img-operacion-especifica-j'onclick='contador_correcto=0;crear_operacion(7)'title='" + traduccion_jerarquia[idioma] + "'></div></div></div>";
            operaciones_personalizada_empezada = false;
            numero_operacion_actual = 0;
            break;
        case 6://menu operaciones personalizadas
            document.getElementById("body").innerHTML = "<svg class='flecha-volver' xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;'onclick='control_pagina(2)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'/></g></svg>";
            document.getElementById("body").innerHTML += "<div class='div-todas-operaciones-personalizadas'><div class='div-div-todas-operaciones-personalizadas'><div id='div-cantidad-llenas-operaciones-personalizadas'><sup>1</sup>/<sub>100</sub></div><div id='div-todas-casillas-operaciones-personalizadas'></div></div></div><div class='div-todas-opciones-operaciones-personalizadas'><div class='div-casillas-seleccionadas-operaciones-personalizadas'title='Casillas seleccionadas'><div class='div-text-titulo-casillas-seleccionadas-operaciones-personalizadas'>Casillas</div><div class='div-bt-casillas-seleccionadas-operaciones-personalizadas'><input type='text' id='bt-casillas-seleccionadas-operaciones-personalizadas'value='1' placeholder='" + Math.floor(Math.random() * 100 + 1) + "," + Math.floor(Math.random() * 100 + 1) + "'onfocus='this.select()'></div></div><div class='div-dificultad-seleccionada-oepraciones-personalizadas'><div class='div-text-titulo-dificultad-seleccionada-operaciones-personalizadas'>Dificultad</div><div class='div-bt-dificultad-seleccionada-operaciones-personalizadas'><input type='text'id='bt-dificultad-seleccionada-operaciones-personalizadas'value='1'placeholder='" + Math.floor(Math.random() * 10 + 1) + "," + Math.floor(Math.random() * 10 + 1) + "'onfocus='this.select()'></div></div><div class='div-bt-añadir-operaciones-personalizadas'><input type='button'value='Añadir'onclick='añadir_casillas_operaciones_personalizadas()'class='bt-añadir-casilla-operaciones-personalizadas'><input type='button'value='Borrar'onclick='borrar_casillas_operaciones_personalizadas()'class='bt-borrar-casilla-operaciones-personalizadas'></div><div class='div-select-opciones-tipo-operacion-seleccionada-operaciones-personalizadas'><select id='select-opciones-tipo-operacion-seleccionada-operaciones-personalizadas'></select></div></div><div class='div-centrar-bt-jugar-operaciones-personalizadas'><input type='button'class='bt-empezar-crear-operaciones-personalizadas'value='Jugar'placeholder=''onclick='crear_operacion_personalizada()'></div>";
            document.getElementById("select-opciones-tipo-operacion-seleccionada-operaciones-personalizadas").innerHTML = "<option value='+'id='select-option-operaciones-personalizadas-+'>" + traduccion_sumas[idioma] + "</option>";
            document.getElementById("select-opciones-tipo-operacion-seleccionada-operaciones-personalizadas").innerHTML += "<option value='-'id='select-option-operaciones-personalizadas--'>" + traduccion_restas[idioma] + "</option>";
            document.getElementById("select-opciones-tipo-operacion-seleccionada-operaciones-personalizadas").innerHTML += "<option value='*'id='select-option-operaciones-personalizadas-*'>" + traduccion_multiplicaciones[idioma] + "</option>";
            document.getElementById("select-opciones-tipo-operacion-seleccionada-operaciones-personalizadas").innerHTML += "<option value='/'id='select-option-operaciones-personalizadas-/'>" + traduccion_divisiones[idioma] + "</option>";
            document.getElementById("select-opciones-tipo-operacion-seleccionada-operaciones-personalizadas").innerHTML += "<option value='1^2'id='select-option-operaciones-personalizadas-1^2'>" + traduccion_potencias[idioma] + "</option>";
            document.getElementById("select-opciones-tipo-operacion-seleccionada-operaciones-personalizadas").innerHTML += "<option value='√'id='select-option-operaciones-personalizadas-√'>" + traduccion_raices[idioma] + "</option>";
            document.getElementById("select-opciones-tipo-operacion-seleccionada-operaciones-personalizadas").innerHTML += "<option value='()'id='select-option-operaciones-personalizadas-()'>" + traduccion_jerarquia[idioma] + "</option>";
            actualizar_casillas_operaciones_personalizadas();
            break
    }
}
//elige entre una operacion o problema (!importante)
var direcionar_aleatorio = false;//aleatorio problema o operacion
var repetidas_problemas = 0;//veces seguidas que te tocan problemas
var repetidas_operaciones = 0;//veces seguidas que te tocan operaciones
function direccionar_aleatorio() {
    if (repetidas_problemas <= 3 && repetidas_operaciones <= 5) {
        const n_aleatorio = Math.floor(Math.random() * 3 + 0);//problema o operacion; que toque mas operaciones que problemas
        direcionar_aleatorio = true;//marcar si está en aleatorio o no
        if (n_aleatorio === 1) {//problema
            repetidas_problemas++;
            repetidas_operaciones = 0;
            crear_problema(false);
        }
        else {//operacion
            repetidas_operaciones++;
            repetidas_problemas = 0;
            crear_operacion(0, false);
        }
    }
    else if (repetidas_operaciones > 5) {
        repetidas_operaciones = 0;
        repetidas_problemas = 0;
        crear_problema(false);
    }
    else if (repetidas_problemas > 3) {
        repetidas_operaciones = 0;
        repetidas_problemas = 0;
        crear_operacion(0, false);
    }
}
/*actualizar ajustes e iniciar programa (!importante)*/
function actualizar_ajustes_inicio() {
    fetch("./base_datos/registros_ajustes.json")
        .then(response => response.json())
        .then(data => {
            idioma = (data.idioma === 0 || data.idioma === 1 || data.idioma === 2) ? idioma = data.idioma : idioma = 0;
            dificultad = (data.dificultad >= 1 && data.dificultad <= 10) ? dificultad = Math.trunc(data.dificultad) : dificultad = 1;
            muted = (data.muted == false || data.muted == true) ? muted = data.muted : muted = false;
            continuidad = (data.continuidad == false || data.continuidad == true) ? continuidad = data.continuidad : continuidad = false;
            tipo_redondeo = (data.tipo_redondeo >= 1 && data.tipo_redondeo <= 6) ? tipo_redondeo = Math.trunc(data.tipo_redondeo) : tipo_redondeo = 5;
            decimales_redondeo = (data.decimales_redondeo >= 1 && data.decimales_redondeo <= 10) ? decimales_redondeo = Math.trunc(data.decimales_redondeo) : decimales_redondeo = 2;
            correccion_automatico_resultados_cronometro = (data.cronometro.corregir_automaticamente == false || data.cronometro.corregir_automaticamente == true) ? correccion_automatico_resultados_cronometro = data.cronometro.corregir_automaticamente : correccion_automatico_resultados_cronometro = false;
            aumento_tiempo_racha_cronometro = (data.cronometro.añadir_tiempo_acierto == false || data.cronometro.añadir_tiempo_acierto == true) ? aumento_tiempo_racha_cronometro = data.cronometro.añadir_tiempo_acierto : aumento_tiempo_racha_cronometro = false;
            disminuir_tiempo_fallar_cronometro = (data.cronometro.disminuir_tiempo_fallo == false || data.cronometro.disminuir_tiempo_fallo == true) ? disminuir_tiempo_fallar_cronometro = data.cronometro.disminuir_tiempo_fallo : disminuir_tiempo_fallar_cronometro = false;
            tiempo_cronometro = (data.cronometro.tiempo >= 30 && data.cronometro.tiempo <= 180) ? tiempo_cronometro = data.cronometro.tiempo : tiempo_cronometro = 120;
            marcar_datos_importantes_problema = (data.problemas.marcar_datos == false || data.problemas.marcar_datos == true) ? marcar_datos_importantes_problema = data.problemas.marcar_datos : marcar_datos_importantes_problema = true;
            herramientas_solo_numeros_inputs = (data.herramientas.solo_numeros == false || data.herramientas.solo_numeros == true) ? herramientas_solo_numeros_inputs = data.herramientas.solo_numeros : herramientas_solo_numeros_inputs = true;
        });


    setTimeout(function () {
        control_pagina(1);
    }, 150);
}


//no funciona (rehacer)

//comprobar cola mensajes
function enviar_cola_mensajes() {
    let enviado = false;
    const t_mensajes = setInterval(function () {
        if (mostrando_mensajes == false) {
            cola_mensajes();
            enviado = true;
            cola_text_mensajes = [cola_text_mensajes.shift()];
            cola_text_mensajes = [cola_tipo_mensajes.shift()];
        }
        else { }
        if (cola_tipo_mensajes.length <= 1 && enviado == true) {
            clearInterval(t_mensajes);
        }
    }, 500);
}
/*cola mensajes */
function cola_mensajes() {
    mostrando_mensajes = true;
    //mostrar mensaje
    switch (cola_tipo_mensajes[0]) {
        case 1:
            document.getElementById("div-mensaje-sistema").style.border = "red 2px ridge";
            document.getElementById("div-mensaje-sistema").style.color = "red";
            break;
        case 2:

            break;
    }
    document.getElementById("text-mensaje-sistema").innerHTML = cola_text_mensajes[0];
    document.getElementById("div-mensaje-sistema").style.display = "flex";
    let right = -42;
    const s = setInterval(function () {
        if (right < -1) {
            right++;
            document.getElementById("div-mensaje-sistema").style.right = right + "%";
        }
        else {
            clearInterval(s);
        }
    }, 15);
    setTimeout(function () {
        const s = setInterval(function () {
            if (right > -42) {
                right--;
                document.getElementById("div-mensaje-sistema").style.right = right + "%";
            }
            else {
                clearInterval(s);
            }
        }, 15);
        setTimeout(function () {
            document.getElementById("div-mensaje-sistema").style.display = "block";
        }, 750);
    }, 4750);
    if (cola_tipo_mensajes.length > 0) {
        enviar_cola_mensajes();
    }
    mostrando_mensajes = false;
}