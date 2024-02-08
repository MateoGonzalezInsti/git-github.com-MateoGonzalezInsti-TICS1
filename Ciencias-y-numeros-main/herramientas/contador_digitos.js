function mostrar_contador_digitos() {
    document.getElementById("body").innerHTML = "<div id='indice-herramientas' class='indice-herramientas'><svg class='flecha-volver-herramientas' xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;'onclick='control_pagina(1)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'/></g></svg></div><input type='text'value=''placeholder='124981.3525' id='numero-usuario-recibir'class='contar-digitos1'onfocus='this.select()'title='(operaciones)'><div class='div-herramientas-bt-calcular '><input type='button'value='Calcular'onclick='calcular_contar_digitos()'class='herramientas-bt-calcular '></div><h3 id='resultado-herramienta-mostrar'class='resultado-herramienta-mostrar'></h3></div><div id='herramientas-pitagoras-mensaje-error'><h3 id='herramientas-pitagoras-mensaje-error-text'>" + traduccion_textErrorContarDigitos[idioma] + "</h3></div>";
    //solo numeros?
    if (herramientas_solo_numeros_inputs) {
        document.getElementById("numero-usuario-recibir").type = "number";
        document.getElementById("numero-usuario-recibir").title = "(números)";
    }
    document.getElementById("numero-usuario-recibir").addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {//aceptar
            calcular_contar_digitos();
        }
    });
}
function calcular_contar_digitos() {
    if (!isNaN(eval(document.getElementById("numero-usuario-recibir").value))) {
        let operacion_cancelada = false;//no se puede realizar la operacion--> digitos>15
        let numeros = [];//numeros del usuario por separado
        let cantidad_numeros_repetidos = [];//cantidad de lso numeros que se repiten
        let numeros_agrupados = [];//numero que se repiten
        let numeros_repetidos_mostrar = "";//texto que mostrara los numeros repetidos
        let numero_usuario = eval(document.getElementById("numero-usuario-recibir").value.replaceAll(",", "."));
        numero_usuario = numero_usuario.toString();
        if (numero_usuario.length <= 15) {
            numero_usuario = eval(document.getElementById("numero-usuario-recibir").value.replaceAll(",", "."));
        }
        else {
            numero_usuario = document.getElementById("numero-usuario-recibir").value.replaceAll(",", ".");
            operacion_cancelada = true;
        }
        numero_usuario = numero_usuario.toString();
        //separar numeros
        for (let i = 0; i < numero_usuario.length; i++) {
            if (numero_usuario[i] != "-" && numero_usuario[i] != ".") {
                numeros.push(numero_usuario[i]);
            }
        }
        numeros = numeros.sort(function (a, b) { return a - b });//ordenar de menor a mayor
        //contar digitos repetidos
        let cantidad_repetido = 0;
        let numero_buscando = -99;//cualquier numero de dos cifras o un caracter para no fallar al comparar despues
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] != ".") {
                if (numero_buscando != numeros[i]) {
                    if (numero_buscando != -99) {//el numero debe ser el mismo que al declarar la variable
                        cantidad_numeros_repetidos.push(cantidad_repetido);//guardar cantidad se repite
                        numeros_agrupados.push(numero_buscando);//guardar numero que se repite
                    }
                    numero_buscando = numeros[i];
                    cantidad_repetido = 1;
                    if (numeros[i + 1] == undefined && numero_buscando != -99) {//se terminaron los numeros && el numero debe ser el mismo que al declarar la variable
                        cantidad_numeros_repetidos.push(cantidad_repetido);//guardar cantidad se repite
                        numeros_agrupados.push(numero_buscando);//guardar numero que se repite
                    }
                }
                else {
                    cantidad_repetido++;
                    if (numeros[i + 1] == undefined && numero_buscando != -99) {//se terminaron los numeros && el numero debe ser el mismo que al declarar la variable
                        cantidad_numeros_repetidos.push(cantidad_repetido);//guardar cantidad se repite
                        numeros_agrupados.push(numero_buscando);//guardar numero que se repite
                    }
                }
            }
        }
        //borrar variables basura
        numeros = null;
        numero_buscando = null;
        cantidad_repetido = null;
        //como mostrar los numeros repetidos
        for (let i = 0; i < numeros_agrupados.length; i++) {
            if (i == 0) {//primera vez?
                numeros_repetidos_mostrar = numeros_agrupados[0] + "<sup>" + cantidad_numeros_repetidos[0] + "</sup>";
            }
            else {
                numeros_repetidos_mostrar += ", " + numeros_agrupados[i] + "<sup>" + cantidad_numeros_repetidos[i] + "</sup>";
            }
        }
        //borar variables basura
        numeros_agrupados = null;
        cantidad_numeros_repetidos = null;
        //contar decimales
        let decimales_division = numero_usuario.split(".");
        let decimales = 0;
        if (decimales_division.length > 1) {
            decimales = decimales_division[1];
            decimales = decimales.toString();
            decimales = decimales.length;
        }
        numero_usuario = numero_usuario.toString();
        numero_usuario = numero_usuario.replaceAll(".", "");
        if (operacion_cancelada == false) {
            document.getElementById("resultado-herramienta-mostrar").innerHTML = "Dígitos totales: " + numero_usuario.length + "</br>Dígitos no decimales: " + (numero_usuario.length - decimales) + "</br>Decimales: " + decimales + "</br>Numeros repetidos: " + numeros_repetidos_mostrar;
        }
        else {
            document.getElementById("resultado-herramienta-mostrar").innerHTML = "<u style='color:#f36024;font-size:16px;'>! Op. canceladas (díg. máx. op. : 15)</u></br>Dígitos totales: " + numero_usuario.length + "</br>Dígitos no decimales: " + (numero_usuario.length - decimales) + "</br>Decimales: " + decimales + "</br>Numeros repetidos: " + numeros_repetidos_mostrar;
        }
    }
    else {//mensaje error

    }
}