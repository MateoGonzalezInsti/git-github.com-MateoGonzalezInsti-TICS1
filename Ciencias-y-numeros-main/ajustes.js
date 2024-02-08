/*variables (!importante)*/
var idioma;//0:español,1:ingles,2:gallego
var dificultad;//dificultad seleccionada
var muted;//true:con sonido,false:sin sonido
var continuidad;//true:no mostrar correccion,false:mostrar correccion
var tipo_redondeo;//que tipo de redondeo 1-6
var decimales_redondeo;//decimales de redondeo si está la opcion en 5
var correccion_automatico_resultados_cronometro;//true:corrige automaticamente el numero introducido por el usuario al jugar en el cronometro; false:no corregir el numero introducido del usuario en el cronometro;--> si esta bien el resultado pasa lo mismo que si aciertas al darle enter; si esta mal el numero introducido no pasa nada
var aumento_tiempo_racha_cronometro;//true:aumentar el tiempo del cronometro al acertar,false:no aumentar el tiempo del cronometro al acertar
var disminuir_tiempo_fallar_cronometro;//true:disminuir el tiempo del cronometro al fallar,false:no disminuir el tiempo del cronometro al fallar
var tiempo_cronometro;//tiempo del cronometro: 60,90,120,150,180 segundos de tiempo
var marcar_datos_importantes_problema;//true:marcar datos,false:no marcar datos
var herramientas_solo_numeros_inputs = false;//true: permitir texto y operaciones en los inputs de las herramientas; false: permitir solo numeros en los inputs de las herramientas


function abrir_menu_ajustes() {
    switch (idioma) {
        case 0://español
            document.getElementById("body").innerHTML = "<svg class='home-ajustes'  xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='1200px' height='1200px'><path style='cursor: pointer;'onclick='control_pagina(1)'  d='M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z'/></svg><h3 class='titulo-ajuste'>" + traduccion_titulo_ajustes_idioma[idioma] + " :</h3><select id='select-lista-idiomas'><option value='Español'onclick='idioma=0;abrir_menu_ajustes()'>Español (España)</option><option value='Inglés'onclick='idioma=1;abrir_menu_ajustes()'>English</option><option value='Gallego'onclick='idioma=2;abrir_menu_ajustes()'>Galego</option><option value='Frances'onclick='idioma=3;abrir_menu_ajustes()'>Français</option></select>";
            break;
        case 1://ingles
            document.getElementById("body").innerHTML = "<svg class='home-ajustes' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><h3 class='titulo-ajuste'>" + traduccion_titulo_ajustes_idioma[idioma] + " :</h3><select id='select-lista-idiomas'><option value='Inglés'onclick='idioma=1;abrir_menu_ajustes()'>English</option><option value='Español'onclick='idioma=0;abrir_menu_ajustes()'>Español (España)</option><option value='Gallego'onclick='idioma=2;abrir_menu_ajustes()'>Galego</option><option value='Frances'onclick='idioma=3;abrir_menu_ajustes()'>Français</option></select>";
            break;
        case 2://gallego
            document.getElementById("body").innerHTML = "<svg class='home-ajustes' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><h3 class='titulo-ajuste'>" + traduccion_titulo_ajustes_idioma[idioma] + " :</h3><select id='select-lista-idiomas'><option value='Gallego'onclick='idioma=2;abrir_menu_ajustes()'>Galego</option><option value='Español'onclick='idioma=0;abrir_menu_ajustes()'>Español (España)</option><option value='Inglés'onclick='idioma=1;abrir_menu_ajustes()'>English</option><option value='Frances'onclick='idioma=3;abrir_menu_ajustes()'>Français</option></select></select>";
            break;
        case 3://frances
            document.getElementById("body").innerHTML = "<svg class='home-ajustes' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><h3 class='titulo-ajuste'>" + traduccion_titulo_ajustes_idioma[idioma] + " :</h3><select id='select-lista-idiomas'><option value='Frances'onclick='idioma=3;abrir_menu_ajustes()'>Français</option></select><option value='Gallego'onclick='idioma=2;abrir_menu_ajustes()'>Galego</option><option value='Español'onclick='idioma=0;abrir_menu_ajustes()'>Español (España)</option><option value='Inglés'onclick='idioma=1;abrir_menu_ajustes()'>English</option></select>";
            break;
    }
    //volumen
    if (muted) {
        document.getElementById("body").innerHTML += "<h3 class='titulo-ajuste'>" + traduccion_titulo_ajustes_volumen[idioma] + " :</h3><div class='switch-button-volumen'><input type='checkbox'checked='true'name='switch-button-volumen'id='switch-label-volumen'class='switch-button__checkbox-volumen'><label onclick='cambiar_volumen()' for='switch-label-volumen'class='switch-button__label-volumen'></label></div>";
    }
    else {
        document.getElementById("body").innerHTML += "<h3 class='titulo-ajuste'>" + traduccion_titulo_ajustes_volumen[idioma] + " :</h3><div class='switch-button-volumen'><input type='checkbox'name='switch-button-volumen'id='switch-label-volumen'class='switch-button__checkbox-volumen'><label onclick='cambiar_volumen()' for='switch-label-volumen'class='switch-button__label-volumen'></label></div>";
    }
    //continuidad
    if (continuidad) {
        document.getElementById("body").innerHTML += "<h3 class='titulo-ajuste'>" + traduccion_titulo_ajustes_continuidad[idioma] + " :</h3><div class='switch-button-continuidad'><input type='checkbox'checked='true'name='switch-button-continuidad'id='switch-label-continuidad'class='switch-button__checkbox-continuidad'><label onclick='cambiar_continuidad()' for='switch-label-continuidad'class='switch-button__label-continuidad'></label></div>";
    }
    else {
        document.getElementById("body").innerHTML += "<h3 class='titulo-ajuste'>" + traduccion_titulo_ajustes_continuidad[idioma] + " :</h3><div class='switch-button-continuidad'><input type='checkbox'name='switch-button-continuidad'id='switch-label-continuidad'class='switch-button__checkbox-continuidad'><label onclick='cambiar_continuidad()' for='switch-label-continuidad'class='switch-button__label-continuidad'></label></div>";
    }
    //tipo de redondeo
    actualizar_redondeo();
    //cronometro
    document.getElementById("body").innerHTML += "<h3 class='titulo-ajuste'>" + traduccion_titulo_ajustes_cronometro[idioma] + " :</h3>";
    if (correccion_automatico_resultados_cronometro) {
        document.getElementById("body").innerHTML += "<div class='separador-label-cronometro'><label class='label-cronometro'>" + traduccion_cronometro_corregir_automaticamente[idioma] + " <input type='checkbox'class='checkbox-redondeo'value='Corregir automaticamente' onclick='cambiar_corregir_automaticamente_cronometro()' checked></label></div>";
    }
    else {
        document.getElementById("body").innerHTML += "<div class='separador-label-cronometro'><label class='label-cronometro'>" + traduccion_cronometro_corregir_automaticamente[idioma] + " <input type='checkbox'class='checkbox-redondeo'value='Corregir automaticamente' onclick='cambiar_corregir_automaticamente_cronometro()' ></label></div>";
    }
    if (aumento_tiempo_racha_cronometro) {
        document.getElementById("body").innerHTML += "<div class='separador-label-cronometro'><label class='label-cronometro'>" + traduccion_cronometro_añadir_time[idioma] + " <input type='checkbox'class='checkbox-redondeo'value='Aumentar time' onclick='cambiar_añadir_time_cronometro()' checked></label></div>";
    }
    else {
        document.getElementById("body").innerHTML += "<div class='separador-label-cronometro'><label class='label-cronometro'>" + traduccion_cronometro_añadir_time[idioma] + " <input type='checkbox'class='checkbox-redondeo'value='Aumentar time' onclick='cambiar_añadir_time_cronometro()' ></label></div>";
    }
    if (disminuir_tiempo_fallar_cronometro) {
        document.getElementById("body").innerHTML += "<div class='separador-label-cronometro'><label class='label-cronometro'>" + traduccion_cronometro_disminuir_time[idioma] + " <input type='checkbox'class='checkbox-redondeo'value='Aumentar time' onclick='cambiar_disminuir_time_cronometro()' checked></label></div>";
    }
    else {
        document.getElementById("body").innerHTML += "<div class='separador-label-cronometro'><label class='label-cronometro'>" + traduccion_cronometro_disminuir_time[idioma] + " <input type='checkbox'class='checkbox-redondeo'value='Aumentar time' onclick='cambiar_disminuir_time_cronometro()' ></label></div>";
    }
    actualizar_time_cronometro();
    //marcar datos importantes en los problemas
    document.getElementById("body").innerHTML += "<h3 class='titulo-ajuste'>" + traduccion_titulo_ajustes_problema[idioma] + " :</h3>";
    if (marcar_datos_importantes_problema) {
        document.getElementById("body").innerHTML += "<label class='label-problema'>" + traduccion_titulo_ajustes_datos_importantes_problema[idioma] + " <input type='checkbox'class='checkbox-redondeo'value='Aumentar tiempo' onclick='cambiar_marcar_datos_importantes_problema()' checked></label>";
    }
    else {
        document.getElementById("body").innerHTML += "<label class='label-problema'>" + traduccion_titulo_ajustes_datos_importantes_problema[idioma] + " <input type='checkbox'class='checkbox-redondeo'value='Aumentar tiempo' onclick='cambiar_marcar_datos_importantes_problema()' ></label>";
    }
    //herrramientas permitir solo numeros en los inputs
    document.getElementById("body").innerHTML += "<h3 class='titulo-ajuste'>" + traduccion_titulo_ajustes_herramientas[idioma] + " :</h3>";
    if (!herramientas_solo_numeros_inputs) {
        document.getElementById("body").innerHTML += "<label class='label-problema'>" + traduccion_titulo_ajustes_solo_numeros_herramientas[idioma] + " <input type='checkbox'class='checkbox-redondeo'value='Solo nuemeros' onclick='cambiar_solo_numeros_herrameintas()' ></label>";
    }
    else {
        document.getElementById("body").innerHTML += "<label class='label-problema'>" + traduccion_titulo_ajustes_solo_numeros_herramientas[idioma] + " <input type='checkbox'class='checkbox-redondeo'value='Solo numeros' onclick='cambiar_solo_numeros_herrameintas()' checked></label>";
    }
    //botones dificultades
    document.getElementById("body").innerHTML += "<h3 class='titulo-ajuste'>" + traduccion_titulo_ajustes_dificultad[idioma] + " :</h3><div class='botones-nivel'><input type='button'class='b-nivel'id='n1'value='1'onclick='dificultad=1;abrir_menu_ajustes()'><input type='button'class='b-nivel'id='n2'value='2'onclick='dificultad=2;abrir_menu_ajustes()'><input type='button'class='b-nivel'id='n3'value='3'onclick='dificultad=3;abrir_menu_ajustes()'><input type='button'class='b-nivel'id='n4'value='4'onclick='dificultad=4;abrir_menu_ajustes()'><input type='button'class='b-nivel'id='n5'value='5'onclick='dificultad=5;abrir_menu_ajustes()'><input type='button'class='b-nivel'id='n6'value='6'onclick='dificultad=6;abrir_menu_ajustes()'><input type='button'class='b-nivel'id='n7'value='7'onclick='dificultad=7;abrir_menu_ajustes()'><input type='button'class='b-nivel'id='n8'value='8'onclick='dificultad=8;abrir_menu_ajustes()'><input type='button'class='b-nivel'id='n9'value='9'onclick='dificultad=9;abrir_menu_ajustes()'><input type='button'class='b-nivel'id='n10'value='10'onclick='dificultad=10;abrir_menu_ajustes()'><img src=''class='inf-nivel'onclick='informacion_nivel()'><div class='div-inf-nivel'></div></div>";
    actualizar_stylos_dificultades();
    //ajustes avanzados
    document.getElementById("body").innerHTML += "<h3 class='text-ja'>" + traduccion_titulo_ajustes_ajustesavanzadosniveles[idioma] + " :</h3><div class='div-ja'id='div-nivel-JA-1'><h3 class='text-nivel-AJ'>" + traduccion_titulo_ajustes_dificultad[idioma] + " 1:</h3></div><div class='div-ja'id='div-nivel-JA-2'><h3 class='text-nivel-AJ'>" + traduccion_titulo_ajustes_dificultad[idioma] + " 2:</h3></div><div class='div-ja'id='div-nivel-JA-3'><h3 class='text-nivel-AJ'>" + traduccion_titulo_ajustes_dificultad[idioma] + " 3:</h3></div><div class='div-ja'id='div-nivel-JA-4'><h3 class='text-nivel-AJ'>" + traduccion_titulo_ajustes_dificultad[idioma] + " 4:</h3></div><div class='div-ja'id='div-nivel-JA-5'><h3 class='text-nivel-AJ'>" + traduccion_titulo_ajustes_dificultad[idioma] + " 5:</h3></div><div class='div-ja'id='div-nivel-JA-6'><h3 class='text-nivel-AJ'>" + traduccion_titulo_ajustes_dificultad[idioma] + " 6:</h3></div><div class='div-ja'id='div-nivel-JA-7'><h3 class='text-nivel-AJ'>" + traduccion_titulo_ajustes_dificultad[idioma] + " 7:</h3></div><div class='div-ja'id='div-nivel-JA-8'><h3 class='text-nivel-AJ'>" + traduccion_titulo_ajustes_dificultad[idioma] + " 8:</h3></div><div class='div-ja'id='div-nivel-JA-9'><h3 class='text-nivel-AJ'>" + traduccion_titulo_ajustes_dificultad[idioma] + " 9:</h3></div><div class='div-ja'id='div-nivel-JA-10'><h3 class='text-nivel-AJ'>" + traduccion_titulo_ajustes_dificultad[idioma] + " 10:</h3><div class='div-restaurar-todos'><input type='button'class='bt-restaurar-JA-todos'value='" + traduccion_restaurar[idioma] + "'onclick='resetear_JA_todos()'></div></div>";
    actualizar_ajustes_avanzados();
}
//actualizar stylos bt dificultades
function actualizar_stylos_dificultades() {
    if (dificultad == 1) {
        document.getElementById("n1").style.color = "rgb(68, 188, 17)";
        document.getElementById("n1").style.background = "#f5fffc";
        document.getElementById("n1").style.border = "2px #6ee3be ridge";
        document.getElementById("n1").style.boxShadow = "1px 1px 2px #69a18f";
        document.getElementById("n1").style.fontSize = "18px";
        document.getElementById("n1").style.borderRadius = "3px";
    }
    else {
        document.getElementById("n1").style.color = "rgb(142, 214, 0)";
        document.getElementById("n1").style.background = "#f5fffc";
        document.getElementById("n1").style.border = "2px #bbffea solid";
        document.getElementById("n1").style.boxShadow = "1px 1px 2px #92b9ad";
        document.getElementById("n1").style.fontSize = "20px";
        document.getElementById("n1").style.borderRadius = "2px";
    }
    if (dificultad == 2) {
        document.getElementById("n2").style.color = "rgb(68, 188, 17)";
        document.getElementById("n2").style.background = "#f5fffc";
        document.getElementById("n2").style.border = "2px #6ee3be ridge";
        document.getElementById("n2").style.boxShadow = "1px 1px 2px #69a18f";
        document.getElementById("n2").style.fontSize = "18px";
        document.getElementById("n2").style.borderRadius = "3px";
    }
    else {
        document.getElementById("n2").style.color = "rgb(142, 214, 0)";
        document.getElementById("n2").style.background = "#f5fffc";
        document.getElementById("n2").style.border = "2px #bbffea solid";
        document.getElementById("n2").style.boxShadow = "1px 1px 2px #92b9ad";
        document.getElementById("n2").style.fontSize = "20px";
        document.getElementById("n2").style.borderRadius = "2px";
    }
    if (dificultad == 3) {
        document.getElementById("n3").style.color = "rgb(68, 188, 17)";
        document.getElementById("n3").style.background = "#f5fffc";
        document.getElementById("n3").style.border = "2px #6ee3be ridge";
        document.getElementById("n3").style.boxShadow = "1px 1px 2px #69a18f";
        document.getElementById("n3").style.fontSize = "18px";
        document.getElementById("n3").style.borderRadius = "3px";
    }
    else {
        document.getElementById("n3").style.color = "rgb(142, 214, 0)";
        document.getElementById("n3").style.background = "#f5fffc";
        document.getElementById("n3").style.border = "2px #bbffea solid";
        document.getElementById("n3").style.boxShadow = "1px 1px 2px #92b9ad";
        document.getElementById("n3").style.fontSize = "20px";
        document.getElementById("n3").style.borderRadius = "2px";
    }
    if (dificultad == 4) {
        document.getElementById("n4").style.color = "rgb(68, 188, 17)";
        document.getElementById("n4").style.background = "#f5fffc";
        document.getElementById("n4").style.border = "2px #6ee3be ridge";
        document.getElementById("n4").style.boxShadow = "1px 1px 2px #69a18f";
        document.getElementById("n4").style.fontSize = "18px";
        document.getElementById("n4").style.borderRadius = "3px";
    }
    else {
        document.getElementById("n4").style.color = "rgb(142, 214, 0)";
        document.getElementById("n4").style.background = "#f5fffc";
        document.getElementById("n4").style.border = "2px #bbffea solid";
        document.getElementById("n4").style.boxShadow = "1px 1px 2px #92b9ad";
        document.getElementById("n4").style.fontSize = "20px";
        document.getElementById("n4").style.borderRadius = "2px";
    }
    if (dificultad == 5) {
        document.getElementById("n5").style.color = "rgb(68, 188, 17)";
        document.getElementById("n5").style.background = "#f5fffc";
        document.getElementById("n5").style.border = "2px #6ee3be ridge";
        document.getElementById("n5").style.boxShadow = "1px 1px 2px #69a18f";
        document.getElementById("n5").style.fontSize = "18px";
        document.getElementById("n5").style.borderRadius = "3px";
    }
    else {
        document.getElementById("n5").style.color = "rgb(142, 214, 0)";
        document.getElementById("n5").style.background = "#f5fffc";
        document.getElementById("n5").style.border = "2px #bbffea solid";
        document.getElementById("n5").style.boxShadow = "1px 1px 2px #92b9ad";
        document.getElementById("n5").style.fontSize = "20px";
        document.getElementById("n5").style.borderRadius = "2px";
    }
    if (dificultad == 6) {
        document.getElementById("n6").style.color = "rgb(68, 188, 17)";
        document.getElementById("n6").style.background = "#f5fffc";
        document.getElementById("n6").style.border = "2px #6ee3be ridge";
        document.getElementById("n6").style.boxShadow = "1px 1px 2px #69a18f";
        document.getElementById("n6").style.fontSize = "18px";
        document.getElementById("n6").style.borderRadius = "3px";
    }
    else {
        document.getElementById("n6").style.color = "rgb(142, 214, 0)";
        document.getElementById("n6").style.background = "#f5fffc";
        document.getElementById("n6").style.border = "2px #bbffea solid";
        document.getElementById("n6").style.boxShadow = "1px 1px 2px #92b9ad";
        document.getElementById("n6").style.fontSize = "20px";
        document.getElementById("n6").style.borderRadius = "2px";
    }
    if (dificultad == 7) {
        document.getElementById("n7").style.color = "rgb(68, 188, 17)";
        document.getElementById("n7").style.background = "#f5fffc";
        document.getElementById("n7").style.border = "2px #6ee3be ridge";
        document.getElementById("n7").style.boxShadow = "1px 1px 2px #69a18f";
        document.getElementById("n7").style.fontSize = "18px";
        document.getElementById("n7").style.borderRadius = "3px";
    }
    else {
        document.getElementById("n7").style.color = "rgb(142, 214, 0)";
        document.getElementById("n7").style.background = "#f5fffc";
        document.getElementById("n7").style.border = "2px #bbffea solid";
        document.getElementById("n7").style.boxShadow = "1px 1px 2px #92b9ad";
        document.getElementById("n7").style.fontSize = "20px";
        document.getElementById("n7").style.borderRadius = "2px";
    }
    if (dificultad == 8) {
        document.getElementById("n8").style.color = "rgb(68, 188, 17)";
        document.getElementById("n8").style.background = "#f5fffc";
        document.getElementById("n8").style.border = "2px #6ee3be ridge";
        document.getElementById("n8").style.boxShadow = "1px 1px 2px #69a18f";
        document.getElementById("n8").style.fontSize = "18px";
        document.getElementById("n8").style.borderRadius = "3px";
    }
    else {
        document.getElementById("n8").style.color = "rgb(142, 214, 0)";
        document.getElementById("n8").style.background = "#f5fffc";
        document.getElementById("n8").style.border = "2px #bbffea solid";
        document.getElementById("n8").style.boxShadow = "1px 1px 2px #92b9ad";
        document.getElementById("n8").style.fontSize = "20px";
        document.getElementById("n8").style.borderRadius = "2px";
    }
    if (dificultad == 9) {
        document.getElementById("n9").style.color = "rgb(68, 188, 17)";
        document.getElementById("n9").style.background = "#f5fffc";
        document.getElementById("n9").style.border = "2px #6ee3be ridge";
        document.getElementById("n9").style.boxShadow = "1px 1px 2px #69a18f";
        document.getElementById("n9").style.fontSize = "18px";
        document.getElementById("n9").style.borderRadius = "3px";
    }
    else {
        document.getElementById("n9").style.color = "rgb(142, 214, 0)";
        document.getElementById("n9").style.background = "#f5fffc";
        document.getElementById("n9").style.border = "2px #bbffea solid";
        document.getElementById("n9").style.boxShadow = "1px 1px 2px #92b9ad";
        document.getElementById("n9").style.fontSize = "20px";
        document.getElementById("n9").style.borderRadius = "2px";
    }
    if (dificultad == 10) {
        document.getElementById("n10").style.color = "rgb(68, 188, 17)";
        document.getElementById("n10").style.background = "#f5fffc";
        document.getElementById("n10").style.border = "2px #6ee3be ridge";
        document.getElementById("n10").style.boxShadow = "1px 1px 2px #69a18f";
        document.getElementById("n10").style.fontSize = "18px";
        document.getElementById("n10").style.borderRadius = "3px";
    }
    else {
        document.getElementById("n10").style.color = "rgb(142, 214, 0)";
        document.getElementById("n10").style.background = "#f5fffc";
        document.getElementById("n10").style.border = "2px #bbffea solid";
        document.getElementById("n10").style.boxShadow = "1px 1px 2px #92b9ad";
        document.getElementById("n10").style.fontSize = "20px";
        document.getElementById("n10").style.borderRadius = "2px";
    }
}
//continuidad
function cambiar_continuidad() {
    if (!continuidad) {
        continuidad = true;
        /*acceder a la base de datos y modificar datos*/
        const fs = require('fs');
        const objeto_js = {
            idioma: idioma,
            dificultad: dificultad,
            muted: muted,
            continuidad: continuidad,
            redondeo: tipo_redondeo,
            decimales_redondeo: decimales_redondeo,
            cronometro: {
                añadir_tiempo_acierto: aumento_tiempo_racha_cronometro,
                disminuir_tiempo_fallo: disminuir_tiempo_fallar_cronometro,
                tiempo: tiempo_cronometro
            },
            problemas: {
                marcar_datos: marcar_datos_importantes_problema
            }
        };
        fs.writeFile('./base_datos/registros_ajustes.json', JSON.stringify(objeto_js), function (error) {
            if (error) {//mandar mensaje error por pantalla

            }
        });
    }
    else if (continuidad) {
        continuidad = false;
    }
}
//volumen
function cambiar_volumen() {
    if (!muted) {
        muted = true;
    }
    else if (muted) {
        muted = false;
    }
}
//mostrar_opciones_redondeo
function actualizar_redondeo() {
    document.getElementById("body").innerHTML += "<h3 id='text-redondeo'class='titulo-ajuste'>" + traduccion_titulo_ajustes_redondeo[idioma] + " : " + redondear_numero(1.1234567891) + "</h3>";
    if (tipo_redondeo == 1) {
        document.getElementById("body").innerHTML += "<div class='separador-label-redondeo'><label class='label-redondeo'>" + traduccion_redondeo_cercano[idioma] + "<input type='checkbox'class='checkbox-redondeo'value='Cercano' onclick='cambiar_redondeo(1)' checked></label></div>";
    }
    else {
        document.getElementById("body").innerHTML += "<div class='separador-label-redondeo'><label class='label-redondeo'>" + traduccion_redondeo_cercano[idioma] + "<input type='checkbox'class='checkbox-redondeo'value='Cercano' onclick='cambiar_redondeo(1)'></label></div>";
    }
    if (tipo_redondeo == 3) {
        document.getElementById("body").innerHTML += "<div class='separador-label-redondeo'><label class='label-redondeo'>" + traduccion_redondeo_arriba[idioma] + "<input type='checkbox'class='checkbox-redondeo'value='Arriba' onclick='cambiar_redondeo(3)' checked></label></div>";
    }
    else {
        document.getElementById("body").innerHTML += "<div class='separador-label-redondeo'><label class='label-redondeo'>" + traduccion_redondeo_arriba[idioma] + "<input type='checkbox'class='checkbox-redondeo'value='Arriba' onclick='cambiar_redondeo(3)' ></label></div>";
    }
    if (tipo_redondeo == 2) {
        document.getElementById("body").innerHTML += "<div class='separador-label-redondeo'><label class='label-redondeo'>" + traduccion_redondeo_abajo[idioma] + "<input type='checkbox'class='checkbox-redondeo'value='Abajo' onclick='cambiar_redondeo(2)' checked></label></div>";
    }
    else {
        document.getElementById("body").innerHTML += "<div class='separador-label-redondeo'><label class='label-redondeo'>" + traduccion_redondeo_abajo[idioma] + "<input type='checkbox'class='checkbox-redondeo'value='Abajo' onclick='cambiar_redondeo(2)' ></label></div>";
    }
    if (tipo_redondeo == 4) {
        document.getElementById("body").innerHTML += "<div class='separador-label-redondeo'><label class='label-redondeo'>" + traduccion_redondeo_truncar[idioma] + "<input type='checkbox'class='checkbox-redondeo'value='Truncar' onclick='cambiar_redondeo(4)' checked></label></div>";
    }
    else {
        document.getElementById("body").innerHTML += "<div class='separador-label-redondeo'><label class='label-redondeo'>" + traduccion_redondeo_truncar[idioma] + "<input type='checkbox'class='checkbox-redondeo'value='Truncar' onclick='cambiar_redondeo(4)' ></label></div>";
    }
    if (tipo_redondeo == 5) {
        document.getElementById("body").innerHTML += "<div class='separador-label-redondeo'><label class='label-redondeo'>" + traduccion_redondeo_decimal[idioma] + "<input type='checkbox'class='checkbox-redondeo'value='Decimal' onclick='cambiar_redondeo(5)' checked><input type='number'value='" + decimales_redondeo + "'placeholder='1-10' class='bt-cantidad-decimales'onchange='cambiar_redondeo(5,this.value)'></label></div>";
    }
    else {
        document.getElementById("body").innerHTML += "<div class='separador-label-redondeo'><label class='label-redondeo'>" + traduccion_redondeo_decimal[idioma] + "<input type='checkbox'class='checkbox-redondeo'value='Decimal' onclick='cambiar_redondeo(5,1)' ><input type='number'value='" + decimales_redondeo + "'placeholder='1-10'class='bt-cantidad-decimales'onchange='cambiar_redondeo(5,this.value)'></label></div>";
    }
    if (tipo_redondeo == 6) {
        document.getElementById("body").innerHTML += "<div class='separador-label-redondeo'><label class='label-redondeo'>" + traduccion_redondeo_sin[idioma] + "<input type='checkbox'class='checkbox-redondeo'value='Sin' onclick='cambiar_redondeo(6)' checked></label></div>";
    }
    else {
        document.getElementById("body").innerHTML += "<div class='separador-label-redondeo'><label class='label-redondeo'>" + traduccion_redondeo_sin[idioma] + "<input type='checkbox'class='checkbox-redondeo'value='Sin' onclick='cambiar_redondeo(6)' ></label></div>";
    }
}
//cambia redondeo
function cambiar_redondeo(tipo, decimales) {
    tipo_redondeo = tipo;
    if (tipo == 5) {
        if (decimales > 10) {
            decimales = 10;
        }
        else if (decimales < 1) {
            decimales = 1;
        }
        else if (decimales < 1 || decimales > 10) {
            decimales = 1;
        }
        decimales_redondeo = decimales;
    }
    else {
        decimales_redondeo = null;
    }
    abrir_menu_ajustes();
}
//cambiar corregir automaticamente
function cambiar_corregir_automaticamente_cronometro() {
    if (correccion_automatico_resultados_cronometro) {
        correccion_automatico_resultados_cronometro = false;
    }
    else if (!correccion_automatico_resultados_cronometro) {
        correccion_automatico_resultados_cronometro = true;
    }
}
//cambiar añadir tiempo acertar cronometro
function cambiar_añadir_time_cronometro() {
    if (!aumento_tiempo_racha_cronometro) {
        aumento_tiempo_racha_cronometro = true;
    }
    else if (aumento_tiempo_racha_cronometro) {
        aumento_tiempo_racha_cronometro = false;
    }
}
//cambiar disminuir tiempo fallar cronometro
function cambiar_disminuir_time_cronometro() {
    if (!disminuir_tiempo_fallar_cronometro) {
        disminuir_tiempo_fallar_cronometro = true;
    }
    else if (disminuir_tiempo_fallar_cronometro) {
        disminuir_tiempo_fallar_cronometro = false;
    }
}
//actualizar el tiempo del cronometro
function actualizar_time_cronometro() {
    document.getElementById("body").innerHTML += "<div class='separador-label-cronometro'><label id='tiempo-cronometro'class='label-cronometro'>" + traduccion_cronometro_tiempo[idioma] + " :</br></label></div>";
    if (tiempo_cronometro == 30) {
        document.getElementById("tiempo-cronometro").innerHTML += "<label class='label-cronometro-time'style='color:rgb(255, 133, 43);'>30s<input type='checkbox'class='checkbox-time-cronometro'value='Tiempo cronometro' onclick='tiempo_cronometro=30;abrir_menu_ajustes()' checked></label>";
    }
    else {
        document.getElementById("tiempo-cronometro").innerHTML += "<label class='label-cronometro-time'style='color:rgb(255, 133, 43);'>30s<input type='checkbox'class='checkbox-time-cronometro'value='Tiempo cronometro' onclick='tiempo_cronometro=30;abrir_menu_ajustes()' ></label>";
    }
    if (tiempo_cronometro == 60) {
        document.getElementById("tiempo-cronometro").innerHTML += "<label class='label-cronometro-time'style='color:rgb(227, 170, 0);'>60s<input type='checkbox'class='checkbox-time-cronometro'value='Tiempo cronometro' onclick='tiempo_cronometro=60;abrir_menu_ajustes()' checked></label>";
    }
    else {
        document.getElementById("tiempo-cronometro").innerHTML += "<label class='label-cronometro-time'style='color:rgb(227, 170, 0);'>60s<input type='checkbox'class='checkbox-time-cronometro'value='Tiempo cronometro' onclick='tiempo_cronometro=60;abrir_menu_ajustes()' ></label>";
    }
    if (tiempo_cronometro == 90) {
        document.getElementById("tiempo-cronometro").innerHTML += "<label class='label-cronometro-time'style='color:rgb(22, 174, 18);'>90s<input type='checkbox'class='checkbox-time-cronometro'value='Tiempo cronometro' onclick='tiempo_cronometro=90;abrir_menu_ajustes()' checked></label>";
    }
    else {
        document.getElementById("tiempo-cronometro").innerHTML += "<label class='label-cronometro-time'style='color:rgb(22, 174, 18);'>90s<input type='checkbox'class='checkbox-time-cronometro'value='Tiempo cronometro' onclick='tiempo_cronometro=90;abrir_menu_ajustes()'></label>";
    }
    if (tiempo_cronometro == 120) {
        document.getElementById("tiempo-cronometro").innerHTML += "<label class='label-cronometro-time'style='color:rgb(5, 142, 3);'>120s<input type='checkbox'class='checkbox-time-cronometro'value='Tiempo cronometro' onclick='tiempo_cronometro=120;abrir_menu_ajustes()' checked></label>";
    }
    else {
        document.getElementById("tiempo-cronometro").innerHTML += "<label class='label-cronometro-time'style='color:rgb(5, 142, 3);'>120s<input type='checkbox'class='checkbox-time-cronometro'value='Tiempo cronometro' onclick='tiempo_cronometro=120;abrir_menu_ajustes()'></label>";
    }
    if (tiempo_cronometro == 150) {
        document.getElementById("tiempo-cronometro").innerHTML += "<label class='label-cronometro-time'style='color:rgb(18, 96, 255);'>150s<input type='checkbox'class='checkbox-time-cronometro'value='Tiempo cronometro' onclick='tiempo_cronometro=150;abrir_menu_ajustes()' checked></label>";
    }
    else {
        document.getElementById("tiempo-cronometro").innerHTML += "<label class='label-cronometro-time'style='color:rgb(18, 96, 255);'>150s<input type='checkbox'class='checkbox-time-cronometro'value='Tiempo cronometro' onclick='tiempo_cronometro=150;abrir_menu_ajustes()'></label>";
    }
    if (tiempo_cronometro == 180) {
        document.getElementById("tiempo-cronometro").innerHTML += "<label class='label-cronometro-time'style='color:rgb(0, 68, 204);'>180s<input type='checkbox'class='checkbox-time-cronometro'value='Tiempo cronometro' onclick='tiempo_cronometro=180;abrir_menu_ajustes()' checked></label>";
    }
    else {
        document.getElementById("tiempo-cronometro").innerHTML += "<label class='label-cronometro-time'style='color:rgb(0, 68, 204);'>180s<input type='checkbox'class='checkbox-time-cronometro'value='Tiempo cronometro' onclick='tiempo_cronometro=180;abrir_menu_ajustes()'></label>";
    }
}
//cambiar marcar datos importantes problema
function cambiar_marcar_datos_importantes_problema() {
    if (!marcar_datos_importantes_problema) {
        marcar_datos_importantes_problema = true;
    }
    else if (marcar_datos_importantes_problema) {
        marcar_datos_importantes_problema = false;
    }
}
//cambiar solo nuemros herramientas
function cambiar_solo_numeros_herrameintas() {
    if (herramientas_solo_numeros_inputs) {
        herramientas_solo_numeros_inputs = false;
    }
    else if (!herramientas_solo_numeros_inputs) {
        herramientas_solo_numeros_inputs = true;
    }
}
//ajustes avanzados
{
    {//objetos dificultades
        var dificultad1_JA = {//dificultad 1
            sumas: true,
            restas: true,
            multiplicaciones: false,
            divisiones: false,
            potencias: false,
            raices: false,
            jerarquia: false,
        };
        var dificultad2_JA = {//dificultad 2
            sumas: true,
            restas: true,
            multiplicaciones: false,
            divisiones: false,
            potencias: false,
            raices: false,
            jerarquia: false,
        };
        var dificultad3_JA = {//dificultad 3
            sumas: true,
            restas: true,
            multiplicaciones: true,
            divisiones: true,
            potencias: false,
            raices: false,
            jerarquia: false,
        };
        var dificultad4_JA = {//dificultad 4
            sumas: true,
            restas: true,
            multiplicaciones: true,
            divisiones: true,
            potencias: false,
            raices: false,
            jerarquia: true,
        };
        var dificultad5_JA = {//dificultad 5
            sumas: true,
            restas: true,
            multiplicaciones: true,
            divisiones: true,
            potencias: true,
            raices: true,
            jerarquia: true,
        };
        var dificultad6_JA = {//dificultad 6
            sumas: true,
            restas: true,
            multiplicaciones: true,
            divisiones: true,
            potencias: true,
            raices: true,
            jerarquia: true,
        };
        var dificultad7_JA = {//dificultad 7
            sumas: true,
            restas: true,
            multiplicaciones: true,
            divisiones: true,
            potencias: true,
            raices: true,
            jerarquia: true,
        };
        var dificultad8_JA = {//dificultad 8
            sumas: true,
            restas: true,
            multiplicaciones: true,
            divisiones: true,
            potencias: true,
            raices: true,
            jerarquia: true,
        };
        var dificultad9_JA = {//dificultad 9
            sumas: true,
            restas: true,
            multiplicaciones: true,
            divisiones: true,
            potencias: true,
            raices: true,
            jerarquia: true,
        };
        var dificultad10_JA = {//dificultad 10
            sumas: true,
            restas: true,
            multiplicaciones: true,
            divisiones: true,
            potencias: true,
            raices: true,
            jerarquia: true,
        };
    }
    //actualizar ajustes avanzados
    function actualizar_ajustes_avanzados() {
        {
            //dificultad 1
            if (dificultad1_JA["sumas"]) {
                document.getElementById("div-nivel-JA-1").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='Sumas 1' onclick='cambiar_sumas1_JA()' checked>" + traduccion_sumas[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-1").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='Sumas 1' onclick='cambiar_sumas1_JA()'>" + traduccion_sumas[idioma] + "</label>";
            }
            if (dificultad1_JA["restas"]) {
                document.getElementById("div-nivel-JA-1").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='restas 1'onclick='cambiar_restas1_JA()' checked>" + traduccion_restas[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-1").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='restas 1' onclick='cambiar_restas1_JA()'>" + traduccion_restas[idioma] + "</label>";
            }
            if (dificultad1_JA["multiplicaciones"]) {
                document.getElementById("div-nivel-JA-1").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='multiplicaciones 1'onclick='cambiar_multiplicaciones1_JA()' checked>" + traduccion_multiplicaciones[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-1").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='multplicaciones 1' onclick='cambiar_multiplicaciones1_JA()'>" + traduccion_multiplicaciones[idioma] + "</label>";
            }
            if (dificultad1_JA["divisiones"]) {
                document.getElementById("div-nivel-JA-1").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='divisiones 1'onclick='cambiar_divisiones1_JA()' checked>" + traduccion_divisiones[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-1").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='divisiones 1' onclick='cambiar_divisiones1_JA()'>" + traduccion_divisiones[idioma] + "</label>";
            }
            if (dificultad1_JA["potencias"]) {
                document.getElementById("div-nivel-JA-1").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='potencias 1'onclick='cambiar_potencias1_JA()' checked>" + traduccion_potencias[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-1").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='potencias 1'onclick='cambiar_potencias1_JA()' >" + traduccion_potencias[idioma] + "</label>";
            }
            if (dificultad1_JA["raices"]) {
                document.getElementById("div-nivel-JA-1").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='raices 1'onclick='cambiar_raices1_JA()' checked>" + traduccion_raices[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-1").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='raices 1' onclick='cambiar_raices1_JA()'>" + traduccion_raices[idioma] + "</label>";
            }
            if (dificultad1_JA["jerarquia"]) {
                document.getElementById("div-nivel-JA-1").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='jerarquia 1'onclick='cambiar_jerarquia1_JA()' checked>" + traduccion_jerarquia[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-1").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='jerarquia 1' onclick='cambiar_jerarquia1_JA()'>" + traduccion_jerarquia[idioma] + "</label>";
            }
            document.getElementById("div-nivel-JA-1").innerHTML += "<input type='button'class='bt-restaurar-JA'onclick='resetear_JA_1()'>";
        }
        {
            //dificultad 2
            if (dificultad2_JA["sumas"]) {
                document.getElementById("div-nivel-JA-2").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='Sumas 2' onclick='cambiar_sumas2_JA()' checked>" + traduccion_sumas[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-2").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='Sumas 2' onclick='cambiar_sumas2_JA()'>" + traduccion_sumas[idioma] + "</label>";
            }
            if (dificultad2_JA["restas"]) {
                document.getElementById("div-nivel-JA-2").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='restas 2'onclick='cambiar_restas2_JA()' checked>" + traduccion_restas[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-2").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='restas 2' onclick='cambiar_restas2_JA()'>" + traduccion_restas[idioma] + "</label>";
            }
            if (dificultad2_JA["multiplicaciones"]) {
                document.getElementById("div-nivel-JA-2").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='multiplicaciones 2'onclick='cambiar_multiplicaciones2_JA()' checked>" + traduccion_multiplicaciones[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-2").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='multplicaciones 2' onclick='cambiar_multiplicaciones2_JA()'>" + traduccion_multiplicaciones[idioma] + "</label>";
            }
            if (dificultad2_JA["divisiones"]) {
                document.getElementById("div-nivel-JA-2").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='divisiones 2'onclick='cambiar_divisiones2_JA()' checked>" + traduccion_divisiones[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-2").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='divisiones 2' onclick='cambiar_divisiones2_JA()'>" + traduccion_divisiones[idioma] + "</label>";
            }
            if (dificultad2_JA["potencias"]) {
                document.getElementById("div-nivel-JA-2").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='potencias 2'onclick='cambiar_potencias2_JA()' checked>" + traduccion_potencias[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-2").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='potencias 2'onclick='cambiar_potencias2_JA()' >" + traduccion_potencias[idioma] + "</label>";
            }
            if (dificultad2_JA["raices"]) {
                document.getElementById("div-nivel-JA-2").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='raices 2'onclick='cambiar_raices2_JA()' checked>" + traduccion_raices[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-2").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='raices 2' onclick='cambiar_raices2_JA()'>" + traduccion_raices[idioma] + "</label>";
            }
            if (dificultad2_JA["jerarquia"]) {
                document.getElementById("div-nivel-JA-2").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='jerarquia 2'onclick='cambiar_jerarquia2_JA()' checked>" + traduccion_jerarquia[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-2").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='jerarquia 2' onclick='cambiar_jerarquia2_JA()'>" + traduccion_jerarquia[idioma] + "</label>";
            }
            document.getElementById("div-nivel-JA-2").innerHTML += "<input type='button'class='bt-restaurar-JA'onclick='resetear_JA_2()'>";
        }
        {
            //dificultad 3
            if (dificultad3_JA["sumas"]) {
                document.getElementById("div-nivel-JA-3").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='Sumas 3' onclick='cambiar_sumas3_JA()' checked>" + traduccion_sumas[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-3").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='Sumas 3' onclick='cambiar_sumas3_JA()'>" + traduccion_sumas[idioma] + "</label>";
            }
            if (dificultad3_JA["restas"]) {
                document.getElementById("div-nivel-JA-3").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='restas 3'onclick='cambiar_restas3_JA()' checked>" + traduccion_restas[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-3").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='restas 3' onclick='cambiar_restas3_JA()'>" + traduccion_restas[idioma] + "</label>";
            }
            if (dificultad3_JA["multiplicaciones"]) {
                document.getElementById("div-nivel-JA-3").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='multiplicaciones 3'onclick='cambiar_multiplicaciones3_JA()' checked>" + traduccion_multiplicaciones[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-3").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='multplicaciones 3' onclick='cambiar_multiplicaciones3_JA()'>" + traduccion_multiplicaciones[idioma] + "</label>";
            }
            if (dificultad3_JA["divisiones"]) {
                document.getElementById("div-nivel-JA-3").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='divisiones 3'onclick='cambiar_divisiones3_JA()' checked>" + traduccion_divisiones[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-3").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='divisiones 3' onclick='cambiar_divisiones3_JA()'>" + traduccion_divisiones[idioma] + "</label>";
            }
            if (dificultad3_JA["potencias"]) {
                document.getElementById("div-nivel-JA-3").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='potencias 3'onclick='cambiar_potencias3_JA()' checked>" + traduccion_potencias[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-3").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='potencias 3'onclick='cambiar_potencias3_JA()' >" + traduccion_potencias[idioma] + "</label>";
            }
            if (dificultad3_JA["raices"]) {
                document.getElementById("div-nivel-JA-3").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='raices 3'onclick='cambiar_raices3_JA()' checked>" + traduccion_raices[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-3").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='raices 3' onclick='cambiar_raices3_JA()'>" + traduccion_raices[idioma] + "</label>";
            }
            if (dificultad3_JA["jerarquia"]) {
                document.getElementById("div-nivel-JA-3").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='jerarquia 3'onclick='cambiar_jerarquia3_JA()' checked>" + traduccion_jerarquia[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-3").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='jerarquia 3' onclick='cambiar_jerarquia3_JA()'>" + traduccion_jerarquia[idioma] + "</label>";
            }
            document.getElementById("div-nivel-JA-3").innerHTML += "<input type='button'class='bt-restaurar-JA'onclick='resetear_JA_3()'>";
        }
        {
            //dificultad 4
            if (dificultad4_JA["sumas"]) {
                document.getElementById("div-nivel-JA-4").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='Sumas 4' onclick='cambiar_sumas4_JA()' checked>" + traduccion_sumas[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-4").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='Sumas 4' onclick='cambiar_sumas4_JA()'>" + traduccion_sumas[idioma] + "</label>";
            }
            if (dificultad4_JA["restas"]) {
                document.getElementById("div-nivel-JA-4").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='restas 4'onclick='cambiar_restas4_JA()' checked>" + traduccion_restas[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-4").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='restas 4' onclick='cambiar_restas4_JA()'>" + traduccion_restas[idioma] + "</label>";
            }
            if (dificultad4_JA["multiplicaciones"]) {
                document.getElementById("div-nivel-JA-4").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='multiplicaciones 4'onclick='cambiar_multiplicaciones4_JA()' checked>" + traduccion_multiplicaciones[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-4").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='multplicaciones 4' onclick='cambiar_multiplicaciones4_JA()'>" + traduccion_multiplicaciones[idioma] + "</label>";
            }
            if (dificultad4_JA["divisiones"]) {
                document.getElementById("div-nivel-JA-4").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='divisiones 4'onclick='cambiar_divisiones4_JA()' checked>" + traduccion_divisiones[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-4").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='divisiones 4' onclick='cambiar_divisiones4_JA()'>" + traduccion_divisiones[idioma] + "</label>";
            }
            if (dificultad4_JA["potencias"]) {
                document.getElementById("div-nivel-JA-4").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='potencias 4'onclick='cambiar_potencias4_JA()' checked>" + traduccion_potencias[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-4").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='potencias 4'onclick='cambiar_potencias4_JA()' >" + traduccion_potencias[idioma] + "</label>";
            }
            if (dificultad4_JA["raices"]) {
                document.getElementById("div-nivel-JA-4").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='raices 4'onclick='cambiar_raices4_JA()' checked>" + traduccion_raices[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-4").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='raices 4' onclick='cambiar_raices4_JA()'>" + traduccion_raices[idioma] + "</label>";
            }
            if (dificultad4_JA["jerarquia"]) {
                document.getElementById("div-nivel-JA-4").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='jerarquia 4'onclick='cambiar_jerarquia4_JA()' checked>" + traduccion_jerarquia[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-4").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='jerarquia 4' onclick='cambiar_jerarquia4_JA()'>" + traduccion_jerarquia[idioma] + "</label>";
            }
            document.getElementById("div-nivel-JA-4").innerHTML += "<input type='button'class='bt-restaurar-JA'onclick='resetear_JA_4()'>";

        }
        {
            //dificultad 5
            if (dificultad5_JA["sumas"]) {
                document.getElementById("div-nivel-JA-5").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='Sumas 5' onclick='cambiar_sumas5_JA()' checked>" + traduccion_sumas[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-5").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='Sumas 5' onclick='cambiar_sumas5_JA()'>" + traduccion_sumas[idioma] + "</label>";
            }
            if (dificultad5_JA["restas"]) {
                document.getElementById("div-nivel-JA-5").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='restas 5'onclick='cambiar_restas5_JA()' checked>" + traduccion_restas[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-5").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='restas 5' onclick='cambiar_restas5_JA()'>" + traduccion_restas[idioma] + "</label>";
            }
            if (dificultad5_JA["multiplicaciones"]) {
                document.getElementById("div-nivel-JA-5").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='multiplicaciones 5'onclick='cambiar_multiplicaciones5_JA()' checked>" + traduccion_multiplicaciones[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-5").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='multplicaciones 5' onclick='cambiar_multiplicaciones5_JA()'>" + traduccion_multiplicaciones[idioma] + "</label>";
            }
            if (dificultad5_JA["divisiones"]) {
                document.getElementById("div-nivel-JA-5").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='divisiones 5'onclick='cambiar_divisiones5_JA()' checked>" + traduccion_divisiones[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-5").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='divisiones 5' onclick='cambiar_divisiones5_JA()'>" + traduccion_divisiones[idioma] + "</label>";
            }
            if (dificultad5_JA["potencias"]) {
                document.getElementById("div-nivel-JA-5").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='potencias 5'onclick='cambiar_potencias5_JA()' checked>" + traduccion_potencias[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-5").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='potencias 5'onclick='cambiar_potencias5_JA()' >" + traduccion_potencias[idioma] + "</label>";
            }
            if (dificultad5_JA["raices"]) {
                document.getElementById("div-nivel-JA-5").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='raices 5'onclick='cambiar_raices5_JA()' checked>" + traduccion_raices[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-5").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='raices 5' onclick='cambiar_raices5_JA()'>" + traduccion_raices[idioma] + "</label>";
            }
            if (dificultad5_JA["jerarquia"]) {
                document.getElementById("div-nivel-JA-5").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='jerarquia 5'onclick='cambiar_jerarquia5_JA()' checked>" + traduccion_jerarquia[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-5").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='jerarquia 5' onclick='cambiar_jerarquia5_JA()'>" + traduccion_jerarquia[idioma] + "</label>";
            }
            document.getElementById("div-nivel-JA-5").innerHTML += "<input type='button'class='bt-restaurar-JA'onclick='resetear_JA_5()'>";
        }
        {
            //dificultad 6
            if (dificultad6_JA["sumas"]) {
                document.getElementById("div-nivel-JA-6").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='Sumas 6' onclick='cambiar_sumas6_JA()' checked>" + traduccion_sumas[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-6").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='Sumas 6' onclick='cambiar_sumas6_JA()'>" + traduccion_sumas[idioma] + "</label>";
            }
            if (dificultad6_JA["restas"]) {
                document.getElementById("div-nivel-JA-6").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='restas 6'onclick='cambiar_restas6_JA()' checked>" + traduccion_restas[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-6").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='restas 6' onclick='cambiar_restas6_JA()'>" + traduccion_restas[idioma] + "</label>";
            }
            if (dificultad6_JA["multiplicaciones"]) {
                document.getElementById("div-nivel-JA-6").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='multiplicaciones 6'onclick='cambiar_multiplicaciones6_JA()' checked>" + traduccion_multiplicaciones[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-6").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='multplicaciones 6' onclick='cambiar_multiplicaciones6_JA()'>" + traduccion_multiplicaciones[idioma] + "</label>";
            }
            if (dificultad6_JA["divisiones"]) {
                document.getElementById("div-nivel-JA-6").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='divisiones 6'onclick='cambiar_divisiones6_JA()' checked>" + traduccion_divisiones[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-6").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='divisiones 6' onclick='cambiar_divisiones6_JA()'>" + traduccion_divisiones[idioma] + "</label>";
            }
            if (dificultad6_JA["potencias"]) {
                document.getElementById("div-nivel-JA-6").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='potencias 6'onclick='cambiar_potencias6_JA()' checked>" + traduccion_potencias[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-6").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='potencias 6'onclick='cambiar_potencias6_JA()' >" + traduccion_potencias[idioma] + "</label>";
            }
            if (dificultad6_JA["raices"]) {
                document.getElementById("div-nivel-JA-6").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='raices 6'onclick='cambiar_raices6_JA()' checked>" + traduccion_raices[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-6").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='raices 6' onclick='cambiar_raices6_JA()'>" + traduccion_raices[idioma] + "</label>";
            }
            if (dificultad6_JA["jerarquia"]) {
                document.getElementById("div-nivel-JA-6").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='jerarquia 6'onclick='cambiar_jerarquia6_JA()' checked>" + traduccion_jerarquia[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-6").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='jerarquia 6' onclick='cambiar_jerarquia6_JA()'>" + traduccion_jerarquia[idioma] + "</label>";
            }
            document.getElementById("div-nivel-JA-6").innerHTML += "<input type='button'class='bt-restaurar-JA'onclick='resetear_JA_6()'>";
        }
        {
            //dificultad 7
            if (dificultad7_JA["sumas"]) {
                document.getElementById("div-nivel-JA-7").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='Sumas 7' onclick='cambiar_sumas7_JA()' checked>" + traduccion_sumas[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-7").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='Sumas 7' onclick='cambiar_sumas7_JA()'>" + traduccion_sumas[idioma] + "</label>";
            }
            if (dificultad7_JA["restas"]) {
                document.getElementById("div-nivel-JA-7").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='restas 7'onclick='cambiar_restas7_JA()' checked>" + traduccion_restas[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-7").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='restas 7' onclick='cambiar_restas7_JA()'>" + traduccion_restas[idioma] + "</label>";
            }
            if (dificultad7_JA["multiplicaciones"]) {
                document.getElementById("div-nivel-JA-7").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='multiplicaciones 7'onclick='cambiar_multiplicaciones7_JA()' checked>" + traduccion_multiplicaciones[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-7").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='multplicaciones 7' onclick='cambiar_multiplicaciones7_JA()'>" + traduccion_multiplicaciones[idioma] + "</label>";
            }
            if (dificultad7_JA["divisiones"]) {
                document.getElementById("div-nivel-JA-7").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='divisiones 7'onclick='cambiar_divisiones7_JA()' checked>" + traduccion_divisiones[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-7").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='divisiones 7' onclick='cambiar_divisiones7_JA()'>" + traduccion_divisiones[idioma] + "</label>";
            }
            if (dificultad7_JA["potencias"]) {
                document.getElementById("div-nivel-JA-7").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='potencias 7'onclick='cambiar_potencias7_JA()' checked>" + traduccion_potencias[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-7").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='potencias 7'onclick='cambiar_potencias7_JA()' >" + traduccion_potencias[idioma] + "</label>";
            }
            if (dificultad7_JA["raices"]) {
                document.getElementById("div-nivel-JA-7").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='raices 7'onclick='cambiar_raices7_JA()' checked>" + traduccion_raices[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-7").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='raices 7' onclick='cambiar_raices7_JA()'>" + traduccion_raices[idioma] + "</label>";
            }
            if (dificultad7_JA["jerarquia"]) {
                document.getElementById("div-nivel-JA-7").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='jerarquia 7'onclick='cambiar_jerarquia7_JA()' checked>" + traduccion_jerarquia[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-7").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='jerarquia 7' onclick='cambiar_jerarquia7_JA()'>" + traduccion_jerarquia[idioma] + "</label>";
            }
            document.getElementById("div-nivel-JA-7").innerHTML += "<input type='button'class='bt-restaurar-JA'onclick='resetear_JA_7()'>";
        }
        {
            //dificultad 8
            if (dificultad8_JA["sumas"]) {
                document.getElementById("div-nivel-JA-8").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='Sumas 8' onclick='cambiar_sumas8_JA()' checked>" + traduccion_sumas[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-8").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='Sumas 8' onclick='cambiar_sumas8_JA()'>" + traduccion_sumas[idioma] + "</label>";
            }
            if (dificultad8_JA["restas"]) {
                document.getElementById("div-nivel-JA-8").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='restas 8'onclick='cambiar_restas8_JA()' checked>" + traduccion_restas[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-8").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='restas 8' onclick='cambiar_restas8_JA()'>" + traduccion_restas[idioma] + "</label>";
            }
            if (dificultad8_JA["multiplicaciones"]) {
                document.getElementById("div-nivel-JA-8").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='multiplicaciones 8'onclick='cambiar_multiplicaciones8_JA()' checked>" + traduccion_multiplicaciones[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-8").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='multplicaciones 8' onclick='cambiar_multiplicaciones8_JA()'>" + traduccion_multiplicaciones[idioma] + "</label>";
            }
            if (dificultad8_JA["divisiones"]) {
                document.getElementById("div-nivel-JA-8").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='divisiones 8'onclick='cambiar_divisiones8_JA()' checked>" + traduccion_divisiones[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-8").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='divisiones 8' onclick='cambiar_divisiones8_JA()'>" + traduccion_divisiones[idioma] + "</label>";
            }
            if (dificultad8_JA["potencias"]) {
                document.getElementById("div-nivel-JA-8").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='potencias 8'onclick='cambiar_potencias8_JA()' checked>" + traduccion_potencias[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-8").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='potencias 8'onclick='cambiar_potencias8_JA()' >" + traduccion_potencias[idioma] + "</label>";
            }
            if (dificultad8_JA["raices"]) {
                document.getElementById("div-nivel-JA-8").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='raices 8'onclick='cambiar_raices8_JA()' checked>" + traduccion_raices[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-8").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='raices 8' onclick='cambiar_raices8_JA()'>" + traduccion_raices[idioma] + "</label>";
            }
            if (dificultad8_JA["jerarquia"]) {
                document.getElementById("div-nivel-JA-8").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='jerarquia 8'onclick='cambiar_jerarquia8_JA()' checked>" + traduccion_jerarquia[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-8").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='jerarquia 8' onclick='cambiar_jerarquia8_JA()'>" + traduccion_jerarquia[idioma] + "</label>";
            }
            document.getElementById("div-nivel-JA-8").innerHTML += "<input type='button'class='bt-restaurar-JA'onclick='resetear_JA_8()'>";
        }
        {
            //dificultad 9
            if (dificultad9_JA["sumas"]) {
                document.getElementById("div-nivel-JA-9").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='Sumas 9' onclick='cambiar_sumas9_JA()' checked>" + traduccion_sumas[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-9").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='Sumas 9' onclick='cambiar_sumas9_JA()'>" + traduccion_sumas[idioma] + "</label>";
            }
            if (dificultad9_JA["restas"]) {
                document.getElementById("div-nivel-JA-9").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='restas 9'onclick='cambiar_restas9_JA()' checked>" + traduccion_restas[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-9").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='restas 9' onclick='cambiar_restas9_JA()'>" + traduccion_restas[idioma] + "</label>";
            }
            if (dificultad9_JA["multiplicaciones"]) {
                document.getElementById("div-nivel-JA-9").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='multiplicaciones 9'onclick='cambiar_multiplicaciones9_JA()' checked>" + traduccion_multiplicaciones[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-9").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='multplicaciones 9' onclick='cambiar_multiplicaciones9_JA()'>" + traduccion_multiplicaciones[idioma] + "</label>";
            }
            if (dificultad9_JA["divisiones"]) {
                document.getElementById("div-nivel-JA-9").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='divisiones 9'onclick='cambiar_divisiones9_JA()' checked>" + traduccion_divisiones[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-9").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='divisiones 9' onclick='cambiar_divisiones9_JA()'>" + traduccion_divisiones[idioma] + "</label>";
            }
            if (dificultad9_JA["potencias"]) {
                document.getElementById("div-nivel-JA-9").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='potencias 9'onclick='cambiar_potencias9_JA()' checked>" + traduccion_potencias[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-9").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='potencias 9'onclick='cambiar_potencias9_JA()' >" + traduccion_potencias[idioma] + "</label>";
            }
            if (dificultad9_JA["raices"]) {
                document.getElementById("div-nivel-JA-9").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='raices 9'onclick='cambiar_raices9_JA()' checked>" + traduccion_raices[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-9").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='raices 9' onclick='cambiar_raices9_JA()'>" + traduccion_raices[idioma] + "</label>";
            }
            if (dificultad9_JA["jerarquia"]) {
                document.getElementById("div-nivel-JA-9").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='jerarquia 9'onclick='cambiar_jerarquia9_JA()' checked>" + traduccion_jerarquia[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-9").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='jerarquia 9' onclick='cambiar_jerarquia9_JA()'>" + traduccion_jerarquia[idioma] + "</label>";
            }
            document.getElementById("div-nivel-JA-9").innerHTML += "<input type='button'class='bt-restaurar-JA'onclick='resetear_JA_9()'>";
        }
        {
            //dificultad 10
            if (dificultad10_JA["sumas"]) {
                document.getElementById("div-nivel-JA-10").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='Sumas 10' onclick='cambiar_sumas10_JA()' checked>" + traduccion_sumas[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-10").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='Sumas 10' onclick='cambiar_sumas10_JA()'>" + traduccion_sumas[idioma] + "</label>";
            }
            if (dificultad10_JA["restas"]) {
                document.getElementById("div-nivel-JA-10").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='restas 10'onclick='cambiar_restas10_JA()' checked>" + traduccion_restas[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-10").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='restas 10' onclick='cambiar_restas10_JA()'>" + traduccion_restas[idioma] + "</label>";
            }
            if (dificultad10_JA["multiplicaciones"]) {
                document.getElementById("div-nivel-JA-10").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='multiplicaciones 10'onclick='cambiar_multiplicaciones10_JA()' checked>" + traduccion_multiplicaciones[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-10").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='multplicaciones 10' onclick='cambiar_multiplicaciones10_JA()'>" + traduccion_multiplicaciones[idioma] + "</label>";
            }
            if (dificultad10_JA["divisiones"]) {
                document.getElementById("div-nivel-JA-10").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='divisiones 10'onclick='cambiar_divisiones10_JA()' checked>" + traduccion_divisiones[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-10").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='divisiones 10' onclick='cambiar_divisiones10_JA()'>" + traduccion_divisiones[idioma] + "</label>";
            }
            if (dificultad10_JA["potencias"]) {
                document.getElementById("div-nivel-JA-10").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='potencias 10'onclick='cambiar_potencias10_JA()' checked>" + traduccion_potencias[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-10").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='potencias 10'onclick='cambiar_potencias10_JA()' >" + traduccion_potencias[idioma] + "</label>";
            }
            if (dificultad10_JA["raices"]) {
                document.getElementById("div-nivel-JA-10").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='raices 10'onclick='cambiar_raices10_JA()' checked>" + traduccion_raices[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-10").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='raices 10' onclick='cambiar_raices10_JA()'>" + traduccion_raices[idioma] + "</label>";
            }
            if (dificultad10_JA["jerarquia"]) {
                document.getElementById("div-nivel-JA-10").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='jerarquia 10'onclick='cambiar_jerarquia10_JA()' checked>" + traduccion_jerarquia[idioma] + "</label>";
            }
            else {
                document.getElementById("div-nivel-JA-10").innerHTML += "<label class='label-JA'><input type='checkbox'class='checkbox-JA'value='jerarquia 10' onclick='cambiar_jerarquia10_JA()'>" + traduccion_jerarquia[idioma] + "</label>";
            }
            document.getElementById("div-nivel-JA-10").innerHTML += "<input type='button'class='bt-restaurar-JA'onclick='resetear_JA_10()'>";
        }
    }
    {//resetear JA
        function resetear_JA_1() {
            dificultad1_JA = {//dificultad 1
                sumas: true,
                restas: true,
                multiplicaciones: false,
                divisiones: false,
                potencias: false,
                raices: false,
                jerarquia: false,
            };
            abrir_menu_ajustes();
        }
        function resetear_JA_2() {
            dificultad2_JA = {//dificultad 2
                sumas: true,
                restas: true,
                multiplicaciones: false,
                divisiones: false,
                potencias: false,
                raices: false,
                jerarquia: false,
            };
            abrir_menu_ajustes();
        }
        function resetear_JA_3() {
            dificultad3_JA = {//dificultad 3
                sumas: true,
                restas: true,
                multiplicaciones: true,
                divisiones: true,
                potencias: false,
                raices: false,
                jerarquia: false,
            };
            abrir_menu_ajustes();
        }
        function resetear_JA_4() {
            dificultad4_JA = {//dificultad 4
                sumas: true,
                restas: true,
                multiplicaciones: true,
                divisiones: true,
                potencias: false,
                raices: false,
                jerarquia: true,
            };
            abrir_menu_ajustes();
        }
        function resetear_JA_5() {
            dificultad5_JA = {//dificultad 5
                sumas: true,
                restas: true,
                multiplicaciones: true,
                divisiones: true,
                potencias: true,
                raices: true,
                jerarquia: true,
            };
            abrir_menu_ajustes();
        }
        function resetear_JA_6() {
            dificultad6_JA = {//dificultad 6
                sumas: true,
                restas: true,
                multiplicaciones: true,
                divisiones: true,
                potencias: true,
                raices: true,
                jerarquia: true,
            };
            abrir_menu_ajustes();
        }
        function resetear_JA_7() {
            dificultad7_JA = {//dificultad 7
                sumas: true,
                restas: true,
                multiplicaciones: true,
                divisiones: true,
                potencias: true,
                raices: true,
                jerarquia: true,
            };
            abrir_menu_ajustes();
        }
        function resetear_JA_8() {
            dificultad8_JA = {//dificultad 8
                sumas: true,
                restas: true,
                multiplicaciones: true,
                divisiones: true,
                potencias: true,
                raices: true,
                jerarquia: true,
            };
            abrir_menu_ajustes();

        }
        function resetear_JA_9() {
            dificultad9_JA = {//dificultad 9
                sumas: true,
                restas: true,
                multiplicaciones: true,
                divisiones: true,
                potencias: true,
                raices: true,
                jerarquia: true,
            };
            abrir_menu_ajustes();
        }
        function resetear_JA_10() {
            dificultad10_JA = {//dificultad 10
                sumas: true,
                restas: true,
                multiplicaciones: true,
                divisiones: true,
                potencias: true,
                raices: true,
                jerarquia: true,
            };
            abrir_menu_ajustes();

        }
        function resetear_JA_todos() {
            dificultad1_JA = {//dificultad 1
                sumas: true,
                restas: true,
                multiplicaciones: false,
                divisiones: false,
                potencias: false,
                raices: false,
                jerarquia: false,
            };
            dificultad2_JA = {//dificultad 2
                sumas: true,
                restas: true,
                multiplicaciones: false,
                divisiones: false,
                potencias: false,
                raices: false,
                jerarquia: false,
            };
            dificultad3_JA = {//dificultad 3
                sumas: true,
                restas: true,
                multiplicaciones: true,
                divisiones: true,
                potencias: false,
                raices: false,
                jerarquia: false,
            };
            dificultad4_JA = {//dificultad 4
                sumas: true,
                restas: true,
                multiplicaciones: true,
                divisiones: true,
                potencias: false,
                raices: false,
                jerarquia: true,
            };
            dificultad5_JA = {//dificultad 5
                sumas: true,
                restas: true,
                multiplicaciones: true,
                divisiones: true,
                potencias: true,
                raices: true,
                jerarquia: true,
            };
            dificultad6_JA = {//dificultad 6
                sumas: true,
                restas: true,
                multiplicaciones: true,
                divisiones: true,
                potencias: true,
                raices: true,
                jerarquia: true,
            };
            dificultad7_JA = {//dificultad 7
                sumas: true,
                restas: true,
                multiplicaciones: true,
                divisiones: true,
                potencias: true,
                raices: true,
                jerarquia: true,
            };
            dificultad8_JA = {//dificultad 8
                sumas: true,
                restas: true,
                multiplicaciones: true,
                divisiones: true,
                potencias: true,
                raices: true,
                jerarquia: true,
            };
            dificultad9_JA = {//dificultad 9
                sumas: true,
                restas: true,
                multiplicaciones: true,
                divisiones: true,
                potencias: true,
                raices: true,
                jerarquia: true,
            };
            dificultad10_JA = {//dificultad 10
                sumas: true,
                restas: true,
                multiplicaciones: true,
                divisiones: true,
                potencias: true,
                raices: true,
                jerarquia: true,
            };
            abrir_menu_ajustes();
        }
    }
    {//actualizar objetos
        {//sumas
            function cambiar_sumas1_JA() {
                if (dificultad1_JA["sumas"]) {
                    dificultad1_JA["sumas"] = false;
                }
                else {
                    dificultad1_JA["sumas"] = true;
                }
            }
            function cambiar_sumas2_JA() {
                if (dificultad2_JA["sumas"]) {
                    dificultad2_JA["sumas"] = false;
                }
                else {
                    dificultad2_JA["sumas"] = true;
                }
            }
            function cambiar_sumas3_JA() {
                if (dificultad3_JA["sumas"]) {
                    dificultad3_JA["sumas"] = false;
                }
                else {
                    dificultad3_JA["sumas"] = true;
                }
            }
            function cambiar_sumas4_JA() {
                if (dificultad4_JA["sumas"]) {
                    dificultad4_JA["sumas"] = false;
                }
                else {
                    dificultad4_JA["sumas"] = true;
                }
            }
            function cambiar_sumas5_JA() {
                if (dificultad5_JA["sumas"]) {
                    dificultad5_JA["sumas"] = false;
                }
                else {
                    dificultad5_JA["sumas"] = true;
                }
            }
            function cambiar_sumas6_JA() {
                if (dificultad6_JA["sumas"]) {
                    dificultad6_JA["sumas"] = false;
                }
                else {
                    dificultad6_JA["sumas"] = true;
                }
            }
            function cambiar_sumas7_JA() {
                if (dificultad7_JA["sumas"]) {
                    dificultad7_JA["sumas"] = false;
                }
                else {
                    dificultad7_JA["sumas"] = true;
                }
            }
            function cambiar_sumas8_JA() {
                if (dificultad8_JA["sumas"]) {
                    dificultad8_JA["sumas"] = false;
                }
                else {
                    dificultad8_JA["sumas"] = true;
                }
            }
            function cambiar_sumas9_JA() {
                if (dificultad9_JA["sumas"]) {
                    dificultad9_JA["sumas"] = false;
                }
                else {
                    dificultad9_JA["sumas"] = true;
                }
            }
            function cambiar_sumas10_JA() {
                if (dificultad10_JA["sumas"]) {
                    dificultad10_JA["sumas"] = false;
                }
                else {
                    dificultad10_JA["sumas"] = true;
                }
            }
        }
        {//restas
            function cambiar_restas1_JA() {
                if (dificultad1_JA["restas"]) {
                    dificultad1_JA["restas"] = false;
                }
                else {
                    dificultad1_JA["restas"] = true;
                }
            }
            function cambiar_restas2_JA() {
                if (dificultad2_JA["restas"]) {
                    dificultad2_JA["restas"] = false;
                }
                else {
                    dificultad2_JA["restas"] = true;
                }
            }
            function cambiar_restas3_JA() {
                if (dificultad3_JA["restas"]) {
                    dificultad3_JA["restas"] = false;
                }
                else {
                    dificultad3_JA["restas"] = true;
                }
            }
            function cambiar_restas4_JA() {
                if (dificultad4_JA["restas"]) {
                    dificultad4_JA["restas"] = false;
                }
                else {
                    dificultad4_JA["restas"] = true;
                }
            }
            function cambiar_restas5_JA() {
                if (dificultad5_JA["restas"]) {
                    dificultad5_JA["restas"] = false;
                }
                else {
                    dificultad5_JA["restas"] = true;
                }
            }
            function cambiar_restas6_JA() {
                if (dificultad6_JA["restas"]) {
                    dificultad6_JA["restas"] = false;
                }
                else {
                    dificultad6_JA["restas"] = true;
                }
            }
            function cambiar_restas7_JA() {
                if (dificultad7_JA["restas"]) {
                    dificultad7_JA["restas"] = false;
                }
                else {
                    dificultad7_JA["restas"] = true;
                }
            }
            function cambiar_restas8_JA() {
                if (dificultad8_JA["restas"]) {
                    dificultad8_JA["restas"] = false;
                }
                else {
                    dificultad8_JA["restas"] = true;
                }
            }
            function cambiar_restas9_JA() {
                if (dificultad9_JA["restas"]) {
                    dificultad9_JA["restas"] = false;
                }
                else {
                    dificultad9_JA["restas"] = true;
                }
            }
            function cambiar_restas10_JA() {
                if (dificultad10_JA["restas"]) {
                    dificultad10_JA["restas"] = false;
                }
                else {
                    dificultad10_JA["restas"] = true;
                }
            }
        }
        {//multiplicaciones
            function cambiar_multiplicaciones1_JA() {
                if (dificultad1_JA["multiplicaciones"]) {
                    dificultad1_JA["multiplicaciones"] = false;
                }
                else {
                    dificultad1_JA["multiplicaciones"] = true;
                }
            }
            function cambiar_multiplicaciones2_JA() {
                if (dificultad2_JA["multiplicaciones"]) {
                    dificultad2_JA["multiplicaciones"] = false;
                }
                else {
                    dificultad2_JA["multiplicaciones"] = true;
                }
            }
            function cambiar_multiplicaciones3_JA() {
                if (dificultad3_JA["multiplicaciones"]) {
                    dificultad3_JA["multiplicaciones"] = false;
                }
                else {
                    dificultad3_JA["multiplicaciones"] = true;
                }
            }
            function cambiar_multiplicaciones4_JA() {
                if (dificultad4_JA["multiplicaciones"]) {
                    dificultad4_JA["multiplicaciones"] = false;
                }
                else {
                    dificultad4_JA["multiplicaciones"] = true;
                }
            }
            function cambiar_multiplicaciones5_JA() {
                if (dificultad5_JA["multiplicaciones"]) {
                    dificultad5_JA["multiplicaciones"] = false;
                }
                else {
                    dificultad5_JA["multiplicaciones"] = true;
                }
            }
            function cambiar_multiplicaciones6_JA() {
                if (dificultad6_JA["multiplicaciones"]) {
                    dificultad6_JA["multiplicaciones"] = false;
                }
                else {
                    dificultad6_JA["multiplicaciones"] = true;
                }
            }
            function cambiar_multiplicaciones7_JA() {
                if (dificultad7_JA["multiplicaciones"]) {
                    dificultad7_JA["multiplicaciones"] = false;
                }
                else {
                    dificultad7_JA["multiplicaciones"] = true;
                }
            }
            function cambiar_multiplicaciones8_JA() {
                if (dificultad8_JA["multiplicaciones"]) {
                    dificultad8_JA["multiplicaciones"] = false;
                }
                else {
                    dificultad8_JA["multiplicaciones"] = true;
                }
            }
            function cambiar_multiplicaciones9_JA() {
                if (dificultad9_JA["multiplicaciones"]) {
                    dificultad9_JA["multiplicaciones"] = false;
                }
                else {
                    dificultad9_JA["multiplicaciones"] = true;
                }
            }
            function cambiar_multiplicaciones10_JA() {
                if (dificultad10_JA["multiplicaciones"]) {
                    dificultad10_JA["multiplicaciones"] = false;
                }
                else {
                    dificultad10_JA["multiplicaciones"] = true;
                }
            }
        }
        {//divisiones
            function cambiar_divisiones1_JA() {
                if (dificultad1_JA["divisiones"]) {
                    dificultad1_JA["divisiones"] = false;
                }
                else {
                    dificultad1_JA["divisiones"] = true;
                }
            }
            function cambiar_divisiones2_JA() {
                if (dificultad2_JA["divisiones"]) {
                    dificultad2_JA["divisiones"] = false;
                }
                else {
                    dificultad2_JA["divisiones"] = true;
                }
            }
            function cambiar_divisiones3_JA() {
                if (dificultad3_JA["divisiones"]) {
                    dificultad3_JA["divisiones"] = false;
                }
                else {
                    dificultad3_JA["divisiones"] = true;
                }
            }
            function cambiar_divisiones4_JA() {
                if (dificultad4_JA["divisiones"]) {
                    dificultad4_JA["divisiones"] = false;
                }
                else {
                    dificultad4_JA["divisiones"] = true;
                }
            }
            function cambiar_divisiones5_JA() {
                if (dificultad5_JA["divisiones"]) {
                    dificultad5_JA["divisiones"] = false;
                }
                else {
                    dificultad5_JA["divisiones"] = true;
                }
            }
            function cambiar_divisiones6_JA() {
                if (dificultad6_JA["divisiones"]) {
                    dificultad6_JA["divisiones"] = false;
                }
                else {
                    dificultad6_JA["divisiones"] = true;
                }
            }
            function cambiar_divisiones7_JA() {
                if (dificultad7_JA["divisiones"]) {
                    dificultad7_JA["divisiones"] = false;
                }
                else {
                    dificultad7_JA["divisiones"] = true;
                }
            }
            function cambiar_divisiones8_JA() {
                if (dificultad8_JA["divisiones"]) {
                    dificultad8_JA["divisiones"] = false;
                }
                else {
                    dificultad8_JA["divisiones"] = true;
                }
            }
            function cambiar_divisiones9_JA() {
                if (dificultad9_JA["divisiones"]) {
                    dificultad9_JA["divisiones"] = false;
                }
                else {
                    dificultad9_JA["divisiones"] = true;
                }
            }
            function cambiar_divisiones10_JA() {
                if (dificultad10_JA["divisiones"]) {
                    dificultad10_JA["divisiones"] = false;
                }
                else {
                    dificultad10_JA["divisiones"] = true;
                }
            }
        }
        {//potencias
            function cambiar_potencias1_JA() {
                if (dificultad1_JA["potencias"]) {
                    dificultad1_JA["potencias"] = false;
                }
                else {
                    dificultad1_JA["potencias"] = true;
                }
            }
            function cambiar_potencias2_JA() {
                if (dificultad2_JA["potencias"]) {
                    dificultad2_JA["potencias"] = false;
                }
                else {
                    dificultad2_JA["potencias"] = true;
                }
            }
            function cambiar_potencias3_JA() {
                if (dificultad3_JA["potencias"]) {
                    dificultad3_JA["potencias"] = false;
                }
                else {
                    dificultad3_JA["potencias"] = true;
                }
            }
            function cambiar_potencias4_JA() {
                if (dificultad4_JA["potencias"]) {
                    dificultad4_JA["potencias"] = false;
                }
                else {
                    dificultad4_JA["potencias"] = true;
                }
            }
            function cambiar_potencias5_JA() {
                if (dificultad5_JA["potencias"]) {
                    dificultad5_JA["potencias"] = false;
                }
                else {
                    dificultad5_JA["potencias"] = true;
                }
            }
            function cambiar_potencias6_JA() {
                if (dificultad6_JA["potencias"]) {
                    dificultad6_JA["potencias"] = false;
                }
                else {
                    dificultad6_JA["potencias"] = true;
                }
            }
            function cambiar_potencias7_JA() {
                if (dificultad7_JA["potencias"]) {
                    dificultad7_JA["potencias"] = false;
                }
                else {
                    dificultad7_JA["potencias"] = true;
                }
            }
            function cambiar_potencias8_JA() {
                if (dificultad8_JA["potencias"]) {
                    dificultad8_JA["potencias"] = false;
                }
                else {
                    dificultad8_JA["potencias"] = true;
                }
            }
            function cambiar_potencias9_JA() {
                if (dificultad9_JA["potencias"]) {
                    dificultad9_JA["potencias"] = false;
                }
                else {
                    dificultad9_JA["potencias"] = true;
                }
            }
            function cambiar_potencias10_JA() {
                if (dificultad10_JA["potencias"]) {
                    dificultad10_JA["potencias"] = false;
                }
                else {
                    dificultad10_JA["potencias"] = true;
                }
            }
        }
        {//raices
            function cambiar_raices1_JA() {
                if (dificultad1_JA["raices"]) {
                    dificultad1_JA["raices"] = false;
                }
                else {
                    dificultad1_JA["raices"] = true;
                }
            }
            function cambiar_raices2_JA() {
                if (dificultad2_JA["raices"]) {
                    dificultad2_JA["raices"] = false;
                }
                else {
                    dificultad2_JA["raices"] = true;
                }
            }
            function cambiar_raices3_JA() {
                if (dificultad3_JA["raices"]) {
                    dificultad3_JA["raices"] = false;
                }
                else {
                    dificultad3_JA["raices"] = true;
                }
            }
            function cambiar_raices4_JA() {
                if (dificultad4_JA["raices"]) {
                    dificultad4_JA["raices"] = false;
                }
                else {
                    dificultad4_JA["raices"] = true;
                }
            }
            function cambiar_raices5_JA() {
                if (dificultad5_JA["raices"]) {
                    dificultad5_JA["raices"] = false;
                }
                else {
                    dificultad5_JA["raices"] = true;
                }
            }
            function cambiar_raices6_JA() {
                if (dificultad6_JA["raices"]) {
                    dificultad6_JA["raices"] = false;
                }
                else {
                    dificultad6_JA["raices"] = true;
                }
            }
            function cambiar_raices7_JA() {
                if (dificultad7_JA["raices"]) {
                    dificultad7_JA["raices"] = false;
                }
                else {
                    dificultad7_JA["raices"] = true;
                }
            }
            function cambiar_raices8_JA() {
                if (dificultad8_JA["raices"]) {
                    dificultad8_JA["raices"] = false;
                }
                else {
                    dificultad8_JA["raices"] = true;
                }
            }
            function cambiar_raices9_JA() {
                if (dificultad9_JA["raices"]) {
                    dificultad9_JA["raices"] = false;
                }
                else {
                    dificultad9_JA["raices"] = true;
                }
            }
            function cambiar_raices10_JA() {
                if (dificultad10_JA["raices"]) {
                    dificultad10_JA["raices"] = false;
                }
                else {
                    dificultad10_JA["raices"] = true;
                }
            }
        }
        {//jerarquia
            function cambiar_jerarquia1_JA() {
                if (dificultad1_JA["jerarquia"] ) {
                    dificultad1_JA["jerarquia"] =false;
                }
                else {
                    dificultad1_JA["jerarquia"] = true;
                }
            }
            function cambiar_jerarquia2_JA() {
                if (dificultad2_JA["jerarquia"]  ) {
                    dificultad2_JA["jerarquia"] = false;
                }
                else {
                    dificultad2_JA["jerarquia"] =true;
                }
            }
            function cambiar_jerarquia3_JA() {
                if (dificultad3_JA["jerarquia"]  ) {
                    dificultad3_JA["jerarquia"] = false;
                }
                else {
                    dificultad3_JA["jerarquia"] = true;
                }
            }
            function cambiar_jerarquia4_JA() {
                if (dificultad4_JA["jerarquia"]  ) {
                    dificultad4_JA["jerarquia"] = false;
                }
                else {
                    dificultad4_JA["jerarquia"] = true;
                }
            }
            function cambiar_jerarquia5_JA() {
                if (dificultad5_JA["jerarquia"]  ) {
                    dificultad5_JA["jerarquia"] = false;
                }
                else {
                    dificultad5_JA["jerarquia"] = true;
                }
            }
            function cambiar_jerarquia6_JA() {
                if (dificultad6_JA["jerarquia"]  ) {
                    dificultad6_JA["jerarquia"] = false;
                }
                else {
                    dificultad6_JA["jerarquia"] = true;
                }
            }
            function cambiar_jerarquia7_JA() {
                if (dificultad7_JA["jerarquia"]  ) {
                    dificultad7_JA["jerarquia"] = false;
                }
                else {
                    dificultad7_JA["jerarquia"] =true;
                }
            }
            function cambiar_jerarquia8_JA() {
                if (dificultad8_JA["jerarquia"]  ) {
                    dificultad8_JA["jerarquia"] = false;
                }
                else {
                    dificultad8_JA["jerarquia"] = true;
                }
            }
            function cambiar_jerarquia9_JA() {
                if (dificultad9_JA["jerarquia"]  ) {
                    dificultad9_JA["jerarquia"] = false;
                }
                else {
                    dificultad9_JA["jerarquia"] = true;
                }
            }
            function cambiar_jerarquia10_JA() {
                if (dificultad10_JA["jerarquia"]  ) {
                    dificultad10_JA["jerarquia"] = false;
                }
                else {
                    dificultad10_JA["jerarquia"] = true;
                }
            }
        }
    }
}