let numero_cantidad = 2;
let numero_cantidad_mcm = 2;
function mostrar_calcular_primos_opciones(opcion) {
    document.getElementById("body").innerHTML = "<div class='indice-herramientas'><svg class='flecha-volver-herramientas' xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;'onclick='control_pagina(1)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'/></g></svg><select class='herramaientas-select-calcular-datos'><option value='Descomponer'onclick='mostrar_calcular_primos(1)'>Descomponer</option><option value='mcd'onclick='mostrar_calcular_primos(2)'>m.c.d</option><option value='mcm'onclick='mostrar_calcular_primos(3)'>m.c.m</option></select></div><div id='div-body'></div>";
    mostrar_calcular_primos(opcion, 2);
}
function mostrar_calcular_primos(opcion, cantidad_numeros) {
    if (opcion === 1) {//descomponer primos
        document.getElementById("div-body").innerHTML = "<input type='text' onfocus='this.select()'class='herramientas-calcular-descomponer-primos'id='numero-usuario-recibir'value=''placeholder='Número descomponer'title='Número descomponer (operaciones)'><div class='div-herramientas-bt-calcular'><input type='button'onclick='calcular_descomponer_primos()'value='Descomponer'class='herramientas-bt-calcular'></div><h3 class='resultado-herramienta-mostrar'id='text-numeros-primos-descomponer'></h3>";
        //solo numeros?
        if (herramientas_solo_numeros_inputs) {
            document.getElementById("numero-usuario-recibir").type = "number";
            document.getElementById("numero-usuario-recibir").title = "Número descomponer (números)";
        }

        document.getElementById("numero-usuario-recibir").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                calcular_descomponer_primos();
            }
        });
    }
    if (opcion === 2) {//maximo común divisor(todos los numeros mas pequeños que se repitan)
        document.getElementById("div-body").innerHTML = "<input id='input-cantidad-numeros'class='herramientas-input-input-cantidad-numeros'type='number'value='" + numero_cantidad + "'placeholder='N: 2-10' onfocus='this.select()'autofocus><div id='div-numeros'class='div-herramientas-numeros-descomponer'></div><div id='div-herramientas-calculos-poligonos-bt-calcular'class='div-herramientas-calculos-mcd-bt-calcular'><input type='button'onclick='calcular_mcd(2)'value='Buscar'class='herramientas-bt-calcular-mcd'></div><h3 id='text-numeros-primos-descomponer'></h3>";
        for (let i = 0; i < cantidad_numeros; i++) {
            document.getElementById("div-numeros").innerHTML += "<input type='text'id='numero-descomponer-" + (i + 1) + "'class='input-numero-mcd'value=''placeholder='" + Math.floor(Math.random() * 1000 + 4) + "'onfocus='this.select()'>";
            //solo numeros?
            if (herramientas_solo_numeros_inputs) {
                document.getElementById("numero-descomponer-" + (i + 1)).type = "number";
                document.getElementById("numero-descomponer-" + (i + 1)).title = "(números)";
            }
        }
        document.getElementById("input-cantidad-numeros").select();
        document.getElementById("input-cantidad-numeros").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                numero_cantidad = document.getElementById("input-cantidad-numeros").value.replaceAll(" ", "");
                if (numero_cantidad < 2) {
                    numero_cantidad = 2;
                    document.getElementById("input-cantidad-numeros").value = "2";
                }
                else if (numero_cantidad > 10) {
                    numero_cantidad = 10;
                    document.getElementById("input-cantidad-numeros").value = "10";
                }
                mostrar_calcular_primos(opcion, numero_cantidad);
            }
        });
    }
    if (opcion === 3) {//minimo comun multiplo
        document.getElementById("div-body").innerHTML = "<input id='input-cantidad-numeros'class='herramientas-input-input-cantidad-numeros'type='number'value='" + numero_cantidad_mcm + "'placeholder='N: 2-10' onfocus='this.select()'autofocus><div id='div-numeros'class='div-herramientas-numeros-descomponer'></div><div id='div-herramientas-calculos-poligonos-bt-calcular'class='div-herramientas-calculos-mcd-bt-calcular'><input type='button'onclick='calcular_mcm(2)'value='Buscar'class='herramientas-bt-calcular-mcd'></div><h3 id='text-numeros-primos-descomponer'></h3>";
        //ajustar %-->px
        let tamaño_height = 4;
        const tamaño_y_pantalla = screen.height;
        tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
        if (tamaño_height < 20) {
            tamaño_height = 20;
        }
        else if (tamaño_height > 75) {
            tamaño_height = 75;
        }
        document.getElementById("div-herramientas-calculos-poligonos-bt-calcular").style.height = tamaño_height + "px";
        for (let i = 0; i < cantidad_numeros; i++) {
            document.getElementById("div-numeros").innerHTML += "<input type='text'id='numero-descomponer-" + (i + 1) + "'class='input-numero-mcd'value=''placeholder='" + Math.floor(Math.random() * 1000 + 4) + "'onfocus='this.select()'>";
            //solo numeros?
            if (herramientas_solo_numeros_inputs) {
                document.getElementById("numero-descomponer-" + (i + 1)).type = "number";
                document.getElementById("numero-descomponer-" + (i + 1)).title = "(números)";
            }
        }
        document.getElementById("input-cantidad-numeros").select();
        document.getElementById("input-cantidad-numeros").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                numero_cantidad_mcm = document.getElementById("input-cantidad-numeros").value.replaceAll(" ", "");
                if (numero_cantidad_mcm < 2) {
                    numero_cantidad_mcm = 2;
                    document.getElementById("input-cantidad-numeros").value = "2";
                }
                else if (numero_cantidad_mcm > 10) {
                    numero_cantidad_mcm = 10;
                    document.getElementById("input-cantidad-numeros").value = "10";
                }
                mostrar_calcular_primos(opcion, numero_cantidad_mcm);
            }
        });
    }

}
//calcular
function calcular_descomponer_primos() {
    let numero_descomponer = document.getElementById("numero-usuario-recibir").value;
    let numeros_primos;
    numero_descomponer = numero_descomponer.replaceAll(".", "");
    numero_descomponer = numero_descomponer.replaceAll(",", "");
    if (eval(numero_descomponer) >= 2) {
        numeros_primos = descomponer_primos_numero(numero_descomponer);
        if (numeros_primos.length > 1) {
            numeros_primos = numeros_primos.split(",");
        }
        numero_descomponer = null;
        //buscar repetidos
        let numeros_veces_repetidos = [];//cantidad de veces que se repite cada numero
        let numeros_repetidos = [];//cantidad de numeros primos sin repetir(la cantidad de veces repetidos se guarda en la anterior variable)
        for (let i = 0; i < numeros_primos.length; i++) {
            const numero_tocado = numeros_primos[i];
            let numero_repetido = false;
            for (let j = 0; j < numeros_repetidos.length; j++) {//se busca si está repetido
                if (numero_tocado == numeros_repetidos[j]) {//si está repetido se le suma uno al elemento repetido
                    numeros_veces_repetidos[j]++;
                    numero_repetido = true;//para no crear un elemento nuevo
                }
            }
            if (!numero_repetido) {//si no está repetido se crea un elemento para luego saber si está repetido
                numeros_repetidos.push(numero_tocado);
                numeros_veces_repetidos.push(1);//si acaba siendo uno no se escribirá ningún exponenete en el numero primo
            }
        }
        document.getElementById("text-numeros-primos-descomponer").innerHTML = "Primos: ";
        for (let i = 0; i < numeros_repetidos.length; i++) {//mostrar en pantalla los numeros primos y sus exponentes
            if (i == 0) {//primera vez
                if (numeros_veces_repetidos[i] == 1) {
                    document.getElementById("text-numeros-primos-descomponer").innerHTML += numeros_repetidos[i];
                }
                else {
                    document.getElementById("text-numeros-primos-descomponer").innerHTML += numeros_repetidos[i] + "<sup>" + numeros_veces_repetidos[i] + "</sup>";
                }
            }
            else {//sino seguir normal
                if (numeros_veces_repetidos[i] == 1) {
                    document.getElementById("text-numeros-primos-descomponer").innerHTML += " * " + numeros_repetidos[i];
                }
                else {
                    document.getElementById("text-numeros-primos-descomponer").innerHTML += " * " + numeros_repetidos[i] + "<sup>" + numeros_veces_repetidos[i] + "</sup>";
                }
            }
        }
    }
}
function calcular_mcd(numeros_totales) {
    numeros_totales = numero_cantidad;
    let primos = [0];
    let exponentes_primos = [0];
    let numeros_primos_temporal;
    let numeros_usuario = [];
    let numero_mcd = [];
    let exponente_mcd = [];
    let numeros_totales_usuario = 0;
    if (numeros_totales >= 1) {
        if ((document.getElementById("numero-descomponer-1").value.replaceAll(" ", "")) != "" && 
        (document.getElementById("numero-descomponer-1").value.replaceAll(" ","")) >= 2) {
            numeros_totales_usuario++;
            numeros_usuario.push(document.getElementById("numero-descomponer-1").value.replaceAll(" ", ""));
            numeros_primos_temporal = descomponer_primos_numero(numeros_usuario[numeros_usuario.length - 1]);
            numeros_primos_temporal = numeros_primos_temporal.split(",");
            let numero_temporal = 0;
            let exponente_temporal = 1;
            numeros_primos_temporal = numeros_primos_temporal.sort(function (a, b) { return a - b });
            for (let i = 0; i < numeros_primos_temporal.length; i++) {
                if (numeros_primos_temporal[i] == numero_temporal) {//sumar exponente
                    exponente_temporal++;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
                else {
                    if (numero_temporal != 0) {
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                    numero_temporal = numeros_primos_temporal[i];
                    exponente_temporal = 1;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
            }
        }
    }
    if (numeros_totales >= 2) {
        if ((document.getElementById("numero-descomponer-2").value.replaceAll(" ", "")) != "" && (document.getElementById("numero-descomponer-2").value.replaceAll(" ", "")) >= 2) {
            numeros_totales_usuario++;
            numeros_usuario.push(document.getElementById("numero-descomponer-2").value.replaceAll(" ", ""));
            numeros_primos_temporal = descomponer_primos_numero(numeros_usuario[numeros_usuario.length - 1]);
            numeros_primos_temporal = numeros_primos_temporal.split(",");
            let numero_temporal = 0;
            let exponente_temporal = 1;
            numeros_primos_temporal = numeros_primos_temporal.sort(function (a, b) { return a - b });
            for (let i = 0; i < numeros_primos_temporal.length; i++) {
                if (numeros_primos_temporal[i] == numero_temporal) {//sumar exponente
                    exponente_temporal++;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
                else {
                    if (numero_temporal != 0) {
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                    numero_temporal = numeros_primos_temporal[i];
                    exponente_temporal = 1;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
            }
        }
    }
    if (numeros_totales >= 3) {
        if ((document.getElementById("numero-descomponer-3").value.replaceAll(" ", "")) != "" && (document.getElementById("numero-descomponer-3").value.replaceAll(" ", "")) >= 2) {
            numeros_totales_usuario++;
            numeros_usuario.push(document.getElementById("numero-descomponer-3").value.replaceAll(" ", ""));
            numeros_primos_temporal = descomponer_primos_numero(numeros_usuario[numeros_usuario.length - 1]);
            numeros_primos_temporal = numeros_primos_temporal.split(",");
            let numero_temporal = 0;
            let exponente_temporal = 1;
            numeros_primos_temporal = numeros_primos_temporal.sort(function (a, b) { return a - b });
            for (let i = 0; i < numeros_primos_temporal.length; i++) {
                if (numeros_primos_temporal[i] == numero_temporal) {//sumar exponente
                    exponente_temporal++;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
                else {
                    if (numero_temporal != 0) {
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                    numero_temporal = numeros_primos_temporal[i];
                    exponente_temporal = 1;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
            }
        }
    }
    if (numeros_totales >= 4) {
        if ((document.getElementById("numero-descomponer-4").value.replaceAll(" ", "")) != "" && (document.getElementById("numero-descomponer-4").value.replaceAll(" ", "")) >= 2) {
            numeros_totales_usuario++;
            numeros_usuario.push(document.getElementById("numero-descomponer-4").value.replaceAll(" ", ""));
            numeros_primos_temporal = descomponer_primos_numero(numeros_usuario[numeros_usuario.length - 1]);
            numeros_primos_temporal = numeros_primos_temporal.split(",");
            let numero_temporal = 0;
            let exponente_temporal = 1;
            numeros_primos_temporal = numeros_primos_temporal.sort(function (a, b) { return a - b });
            for (let i = 0; i < numeros_primos_temporal.length; i++) {
                if (numeros_primos_temporal[i] == numero_temporal) {//sumar exponente
                    exponente_temporal++;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
                else {
                    if (numero_temporal != 0) {
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                    numero_temporal = numeros_primos_temporal[i];
                    exponente_temporal = 1;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
            }
        }
    }
    if (numeros_totales >= 5) {
        if ((document.getElementById("numero-descomponer-5").value.replaceAll(" ", "")) != "" && (document.getElementById("numero-descomponer-5").value.replaceAll(" ", "")) >= 2) {
            numeros_totales_usuario++;
            numeros_usuario.push(document.getElementById("numero-descomponer-5").value.replaceAll(" ", ""));
            numeros_primos_temporal = descomponer_primos_numero(numeros_usuario[numeros_usuario.length - 1]);
            numeros_primos_temporal = numeros_primos_temporal.split(",");
            let numero_temporal = 0;
            let exponente_temporal = 1;
            numeros_primos_temporal = numeros_primos_temporal.sort(function (a, b) { return a - b });
            for (let i = 0; i < numeros_primos_temporal.length; i++) {
                if (numeros_primos_temporal[i] == numero_temporal) {//sumar exponente
                    exponente_temporal++;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
                else {
                    if (numero_temporal != 0) {
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                    numero_temporal = numeros_primos_temporal[i];
                    exponente_temporal = 1;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
            }
        }
    }
    if (numeros_totales >= 6) {
        if ((document.getElementById("numero-descomponer-6").value.replaceAll(" ", "")) != "" && (document.getElementById("numero-descomponer-6").value.replaceAll(" ", "")) >= 2) {
            numeros_totales_usuario++;
            numeros_usuario.push(document.getElementById("numero-descomponer-6").value.replaceAll(" ", ""));
            numeros_primos_temporal = descomponer_primos_numero(numeros_usuario[numeros_usuario.length - 1]);
            numeros_primos_temporal = numeros_primos_temporal.split(",");
            let numero_temporal = 0;
            let exponente_temporal = 1;
            numeros_primos_temporal = numeros_primos_temporal.sort(function (a, b) { return a - b });
            for (let i = 0; i < numeros_primos_temporal.length; i++) {
                if (numeros_primos_temporal[i] == numero_temporal) {//sumar exponente
                    exponente_temporal++;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
                else {
                    if (numero_temporal != 0) {
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                    numero_temporal = numeros_primos_temporal[i];
                    exponente_temporal = 1;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
            }
        }
    }
    if (numeros_totales >= 7) {
        if ((document.getElementById("numero-descomponer-7").value.replaceAll(" ", "")) != "" && (document.getElementById("numero-descomponer-7").value.replaceAll(" ", "")) >= 2) {
            numeros_totales_usuario++;
            numeros_usuario.push(document.getElementById("numero-descomponer-7").value.replaceAll(" ", ""));
            numeros_primos_temporal = descomponer_primos_numero(numeros_usuario[numeros_usuario.length - 1]);
            numeros_primos_temporal = numeros_primos_temporal.split(",");
            let numero_temporal = 0;
            let exponente_temporal = 1;
            numeros_primos_temporal = numeros_primos_temporal.sort(function (a, b) { return a - b });
            for (let i = 0; i < numeros_primos_temporal.length; i++) {
                if (numeros_primos_temporal[i] == numero_temporal) {//sumar exponente
                    exponente_temporal++;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
                else {
                    if (numero_temporal != 0) {
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                    numero_temporal = numeros_primos_temporal[i];
                    exponente_temporal = 1;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
            }
        }
    }
    if (numeros_totales >= 8) {
        if ((document.getElementById("numero-descomponer-8").value.replaceAll(" ", "")) != "" && (document.getElementById("numero-descomponer-8").value.replaceAll(" ", "")) >= 2) {
            numeros_totales_usuario++;
            numeros_usuario.push(document.getElementById("numero-descomponer-8").value.replaceAll(" ", ""));
            numeros_primos_temporal = descomponer_primos_numero(numeros_usuario[numeros_usuario.length - 1]);
            numeros_primos_temporal = numeros_primos_temporal.split(",");
            let numero_temporal = 0;
            let exponente_temporal = 1;
            numeros_primos_temporal = numeros_primos_temporal.sort(function (a, b) { return a - b });
            for (let i = 0; i < numeros_primos_temporal.length; i++) {
                if (numeros_primos_temporal[i] == numero_temporal) {//sumar exponente
                    exponente_temporal++;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
                else {
                    if (numero_temporal != 0) {
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                    numero_temporal = numeros_primos_temporal[i];
                    exponente_temporal = 1;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
            }
        }
    }
    if (numeros_totales >= 9) {
        if ((document.getElementById("numero-descomponer-9").value.replaceAll(" ", "")) != "" && (document.getElementById("numero-descomponer-9").value.replaceAll(" ", "")) >= 2) {
            numeros_totales_usuario++;
            numeros_usuario.push(document.getElementById("numero-descomponer-9").value.replaceAll(" ", ""));
            numeros_primos_temporal = descomponer_primos_numero(numeros_usuario[numeros_usuario.length - 1]);
            numeros_primos_temporal = numeros_primos_temporal.split(",");
            let numero_temporal = 0;
            let exponente_temporal = 1;
            numeros_primos_temporal = numeros_primos_temporal.sort(function (a, b) { return a - b });
            for (let i = 0; i < numeros_primos_temporal.length; i++) {
                if (numeros_primos_temporal[i] == numero_temporal) {//sumar exponente
                    exponente_temporal++;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
                else {
                    if (numero_temporal != 0) {
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                    numero_temporal = numeros_primos_temporal[i];
                    exponente_temporal = 1;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
            }
        }
    }
    if (numeros_totales >= 10) {
        if ((document.getElementById("numero-descomponer-10").value.replaceAll(" ", "")) != "" && (document.getElementById("numero-descomponer-10").value.replaceAll(" ", "")) >= 2) {
            numeros_totales_usuario++;
            numeros_usuario.push(document.getElementById("numero-descomponer-10").value.replaceAll(" ", ""));
            numeros_primos_temporal = descomponer_primos_numero(numeros_usuario[numeros_usuario.length - 1]);
            numeros_primos_temporal = numeros_primos_temporal.split(",");
            let numero_temporal = 0;
            let exponente_temporal = 1;
            numeros_primos_temporal = numeros_primos_temporal.sort(function (a, b) { return a - b });
            for (let i = 0; i < numeros_primos_temporal.length; i++) {
                if (numeros_primos_temporal[i] == numero_temporal) {//sumar exponente
                    exponente_temporal++;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
                else {
                    if (numero_temporal != 0) {
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                    numero_temporal = numeros_primos_temporal[i];
                    exponente_temporal = 1;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
            }
        }
    }
    numeros_primos_temporal = null;
    if (numeros_totales_usuario >= 2) {//continuar (2, requisito minimo de numeros para calcular mcm)
        //escoger numeros mcd
        console.log(primos);
        let numero_repetido_escoger_temporal = 0;
        let exponente_repetido_escoger_temporal = 1;
        let veces_encontrado = 0;
        for (let i = 0; i < primos.length; i++) {
            veces_encontrado = 0;
            numero_repetido_escoger_temporal = primos[i];
            exponente_repetido_escoger_temporal = exponentes_primos[i];
            for (let j = 0; j < primos.length; j++) {
                if (primos[j] == numero_repetido_escoger_temporal) {
                    veces_encontrado++;
                    if (exponente_repetido_escoger_temporal > exponentes_primos[j]) {
                        exponente_repetido_escoger_temporal = exponentes_primos[j];
                    }
                    primos[j] = 0;
                    exponentes_primos[j] = 0;
                }
            }
            if (veces_encontrado >= numeros_totales_usuario) {
                numero_mcd.push(numero_repetido_escoger_temporal);
                exponente_mcd.push(exponente_repetido_escoger_temporal);
            }
        }
        console.log(numero_mcd);
        //mostrar resultado
        let numero_mcd_total = 1;
        for (let i = 0; i < numero_mcd.length; i++) {
            for (let j = 0; j < exponente_mcd[i]; j++) {
                numero_mcd_total *= numero_mcd[i];
            }
        }
        if (numero_mcd_total <= 0) {
            numero_mcd_total = 1;
        }
        document.getElementById("text-numeros-primos-descomponer").innerHTML = "m.c.d : ";
        for (let i = 0; i < numero_mcd.length; i++) {//i=0--> 0^1
            if (numero_mcd[i] != 0) {
                if (i == 0) {
                    document.getElementById("text-numeros-primos-descomponer").innerHTML += numero_mcd[i] + "<sup>" + exponente_mcd[i] + "</sup>";
                }
                else {
                    document.getElementById("text-numeros-primos-descomponer").innerHTML += ", " + numero_mcd[i] + "<sup>" + exponente_mcd[i] + "</sup>";
                }
            }
        }
        if (numero_mcd_total == 1) {
            document.getElementById("text-numeros-primos-descomponer").innerHTML += "<u style='color:rgb(14, 183, 172);'>" + numero_mcd_total + "</u>";
        }
        else {
            document.getElementById("text-numeros-primos-descomponer").innerHTML += " = <u style='color:rgb(14, 183, 172);'>" + numero_mcd_total + "</u>";
        }
    }
    else {//mensaje error()

    }
}
function calcular_mcm(numeros_totales) {
    numeros_totales = numero_cantidad_mcm;
    let primos = [0];
    let exponentes_primos = [0];
    let numeros_primos_temporal;
    let numeros_usuario = [];
    let numero_mcd = [];
    let exponente_mcd = [];
    let numeros_totales_usuario = 0;
    if (numeros_totales >= 1) {
        if ((document.getElementById("numero-descomponer-1").value.replaceAll(" ", "")) != "" && (document.getElementById("numero-descomponer-1").value.replaceAll(" ", "")) >= 2) {
            numeros_totales_usuario++;
            numeros_usuario.push(document.getElementById("numero-descomponer-1").value.replaceAll(" ", ""));
            numeros_primos_temporal = descomponer_primos_numero(numeros_usuario[numeros_usuario.length - 1]);
            numeros_primos_temporal = numeros_primos_temporal.split(",");
            let numero_temporal = 0;
            let exponente_temporal = 1;
            numeros_primos_temporal = numeros_primos_temporal.sort(function (a, b) { return a - b });
            for (let i = 0; i < numeros_primos_temporal.length; i++) {
                if (numeros_primos_temporal[i] == numero_temporal) {//sumar exponente
                    exponente_temporal++;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
                else {
                    if (numero_temporal != 0) {
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                    numero_temporal = numeros_primos_temporal[i];
                    exponente_temporal = 1;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
            }
        }
    }
    if (numeros_totales >= 2) {
        if ((document.getElementById("numero-descomponer-2").value.replaceAll(" ", "")) != "" && (document.getElementById("numero-descomponer-2").value.replaceAll(" ", "")) >= 2) {
            numeros_totales_usuario++;
            numeros_usuario.push(document.getElementById("numero-descomponer-2").value.replaceAll(" ", ""));
            numeros_primos_temporal = descomponer_primos_numero(numeros_usuario[numeros_usuario.length - 1]);
            numeros_primos_temporal = numeros_primos_temporal.split(",");
            let numero_temporal = 0;
            let exponente_temporal = 1;
            numeros_primos_temporal = numeros_primos_temporal.sort(function (a, b) { return a - b });
            for (let i = 0; i < numeros_primos_temporal.length; i++) {
                if (numeros_primos_temporal[i] == numero_temporal) {//sumar exponente
                    exponente_temporal++;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
                else {
                    if (numero_temporal != 0) {
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                    numero_temporal = numeros_primos_temporal[i];
                    exponente_temporal = 1;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
            }
        }
    }
    if (numeros_totales >= 3) {
        if ((document.getElementById("numero-descomponer-3").value.replaceAll(" ", "")) != "" && (document.getElementById("numero-descomponer-3").value.replaceAll(" ", "")) >= 2) {
            numeros_totales_usuario++;
            numeros_usuario.push(document.getElementById("numero-descomponer-3").value.replaceAll(" ", ""));
            numeros_primos_temporal = descomponer_primos_numero(numeros_usuario[numeros_usuario.length - 1]);
            numeros_primos_temporal = numeros_primos_temporal.split(",");
            let numero_temporal = 0;
            let exponente_temporal = 1;
            numeros_primos_temporal = numeros_primos_temporal.sort(function (a, b) { return a - b });
            for (let i = 0; i < numeros_primos_temporal.length; i++) {
                if (numeros_primos_temporal[i] == numero_temporal) {//sumar exponente
                    exponente_temporal++;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
                else {
                    if (numero_temporal != 0) {
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                    numero_temporal = numeros_primos_temporal[i];
                    exponente_temporal = 1;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
            }
        }
    }
    if (numeros_totales >= 4) {
        if ((document.getElementById("numero-descomponer-4").value.replaceAll(" ", "")) != "" && (document.getElementById("numero-descomponer-4").value.replaceAll(" ", "")) >= 2) {
            numeros_totales_usuario++;
            numeros_usuario.push(document.getElementById("numero-descomponer-4").value.replaceAll(" ", ""));
            numeros_primos_temporal = descomponer_primos_numero(numeros_usuario[numeros_usuario.length - 1]);
            numeros_primos_temporal = numeros_primos_temporal.split(",");
            let numero_temporal = 0;
            let exponente_temporal = 1;
            numeros_primos_temporal = numeros_primos_temporal.sort(function (a, b) { return a - b });
            for (let i = 0; i < numeros_primos_temporal.length; i++) {
                if (numeros_primos_temporal[i] == numero_temporal) {//sumar exponente
                    exponente_temporal++;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
                else {
                    if (numero_temporal != 0) {
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                    numero_temporal = numeros_primos_temporal[i];
                    exponente_temporal = 1;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
            }
        }
    }
    if (numeros_totales >= 5) {
        if ((document.getElementById("numero-descomponer-5").value.replaceAll(" ", "")) != "" && (document.getElementById("numero-descomponer-5").value.replaceAll(" ", "")) >= 2) {
            numeros_totales_usuario++;
            numeros_usuario.push(document.getElementById("numero-descomponer-5").value.replaceAll(" ", ""));
            numeros_primos_temporal = descomponer_primos_numero(numeros_usuario[numeros_usuario.length - 1]);
            numeros_primos_temporal = numeros_primos_temporal.split(",");
            let numero_temporal = 0;
            let exponente_temporal = 1;
            numeros_primos_temporal = numeros_primos_temporal.sort(function (a, b) { return a - b });
            for (let i = 0; i < numeros_primos_temporal.length; i++) {
                if (numeros_primos_temporal[i] == numero_temporal) {//sumar exponente
                    exponente_temporal++;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
                else {
                    if (numero_temporal != 0) {
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                    numero_temporal = numeros_primos_temporal[i];
                    exponente_temporal = 1;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
            }
        }
    }
    if (numeros_totales >= 6) {
        if ((document.getElementById("numero-descomponer-6").value.replaceAll(" ", "")) != "" && (document.getElementById("numero-descomponer-6").value.replaceAll(" ", "")) >= 2) {
            numeros_totales_usuario++;
            numeros_usuario.push(document.getElementById("numero-descomponer-6").value.replaceAll(" ", ""));
            numeros_primos_temporal = descomponer_primos_numero(numeros_usuario[numeros_usuario.length - 1]);
            numeros_primos_temporal = numeros_primos_temporal.split(",");
            let numero_temporal = 0;
            let exponente_temporal = 1;
            numeros_primos_temporal = numeros_primos_temporal.sort(function (a, b) { return a - b });
            for (let i = 0; i < numeros_primos_temporal.length; i++) {
                if (numeros_primos_temporal[i] == numero_temporal) {//sumar exponente
                    exponente_temporal++;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
                else {
                    if (numero_temporal != 0) {
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                    numero_temporal = numeros_primos_temporal[i];
                    exponente_temporal = 1;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
            }
        }
    }
    if (numeros_totales >= 7) {
        if ((document.getElementById("numero-descomponer-7").value.replaceAll(" ", "")) != "" && (document.getElementById("numero-descomponer-7").value.replaceAll(" ", "")) >= 2) {
            numeros_totales_usuario++;
            numeros_usuario.push(document.getElementById("numero-descomponer-7").value.replaceAll(" ", ""));
            numeros_primos_temporal = descomponer_primos_numero(numeros_usuario[numeros_usuario.length - 1]);
            numeros_primos_temporal = numeros_primos_temporal.split(",");
            let numero_temporal = 0;
            let exponente_temporal = 1;
            numeros_primos_temporal = numeros_primos_temporal.sort(function (a, b) { return a - b });
            for (let i = 0; i < numeros_primos_temporal.length; i++) {
                if (numeros_primos_temporal[i] == numero_temporal) {//sumar exponente
                    exponente_temporal++;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
                else {
                    if (numero_temporal != 0) {
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                    numero_temporal = numeros_primos_temporal[i];
                    exponente_temporal = 1;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
            }
        }
    }
    if (numeros_totales >= 8) {
        if ((document.getElementById("numero-descomponer-8").value.replaceAll(" ", "")) != "" && (document.getElementById("numero-descomponer-8").value.replaceAll(" ", "")) >= 2) {
            numeros_totales_usuario++;
            numeros_usuario.push(document.getElementById("numero-descomponer-8").value.replaceAll(" ", ""));
            numeros_primos_temporal = descomponer_primos_numero(numeros_usuario[numeros_usuario.length - 1]);
            numeros_primos_temporal = numeros_primos_temporal.split(",");
            let numero_temporal = 0;
            let exponente_temporal = 1;
            numeros_primos_temporal = numeros_primos_temporal.sort(function (a, b) { return a - b });
            for (let i = 0; i < numeros_primos_temporal.length; i++) {
                if (numeros_primos_temporal[i] == numero_temporal) {//sumar exponente
                    exponente_temporal++;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
                else {
                    if (numero_temporal != 0) {
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                    numero_temporal = numeros_primos_temporal[i];
                    exponente_temporal = 1;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
            }
        }
    }
    if (numeros_totales >= 9) {
        if ((document.getElementById("numero-descomponer-9").value.replaceAll(" ", "")) != "" && (document.getElementById("numero-descomponer-9").value.replaceAll(" ", "")) >= 2) {
            numeros_totales_usuario++;
            numeros_usuario.push(document.getElementById("numero-descomponer-9").value.replaceAll(" ", ""));
            numeros_primos_temporal = descomponer_primos_numero(numeros_usuario[numeros_usuario.length - 1]);
            numeros_primos_temporal = numeros_primos_temporal.split(",");
            let numero_temporal = 0;
            let exponente_temporal = 1;
            numeros_primos_temporal = numeros_primos_temporal.sort(function (a, b) { return a - b });
            for (let i = 0; i < numeros_primos_temporal.length; i++) {
                if (numeros_primos_temporal[i] == numero_temporal) {//sumar exponente
                    exponente_temporal++;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
                else {
                    if (numero_temporal != 0) {
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                    numero_temporal = numeros_primos_temporal[i];
                    exponente_temporal = 1;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
            }
        }
    }
    if (numeros_totales >= 10) {
        if ((document.getElementById("numero-descomponer-10").value.replaceAll(" ", "")) != "" && (document.getElementById("numero-descomponer-10").value.replaceAll(" ", "")) >= 2) {
            numeros_totales_usuario++;
            numeros_usuario.push(document.getElementById("numero-descomponer-10").value.replaceAll(" ", ""));
            numeros_primos_temporal = descomponer_primos_numero(numeros_usuario[numeros_usuario.length - 1]);
            numeros_primos_temporal = numeros_primos_temporal.split(",");
            let numero_temporal = 0;
            let exponente_temporal = 1;
            numeros_primos_temporal = numeros_primos_temporal.sort(function (a, b) { return a - b });
            for (let i = 0; i < numeros_primos_temporal.length; i++) {
                if (numeros_primos_temporal[i] == numero_temporal) {//sumar exponente
                    exponente_temporal++;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
                else {
                    if (numero_temporal != 0) {
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                    numero_temporal = numeros_primos_temporal[i];
                    exponente_temporal = 1;
                    if (i + 1 == numeros_primos_temporal.length) {//fin bucle
                        primos.push(numero_temporal);
                        exponentes_primos.push(exponente_temporal);
                    }
                }
            }
        }
    }
    numeros_primos_temporal = null;
    if (numeros_totales_usuario >= 2) {//continuar (2, requisito minimo de numeros para calcular mcm)
        //escoger numeros mcm
        let numero_repetido_escoger_temporal = 0;
        let exponente_repetido_escoger_temporal = 1;
        let veces_encontrado = 0;
        for (let i = 0; i < primos.length; i++) {
            veces_encontrado = 0;
            numero_repetido_escoger_temporal = primos[i];
            exponente_repetido_escoger_temporal = exponentes_primos[i];
            for (let j = 0; j < primos.length; j++) {
                if (primos[j] == numero_repetido_escoger_temporal) {
                    veces_encontrado++;
                    if (exponente_repetido_escoger_temporal < exponentes_primos[j]) {
                        exponente_repetido_escoger_temporal = exponentes_primos[j];
                    }
                }
            }
            if (veces_encontrado > 1) {
                for (let j = 0; j < primos.length; j++) {
                    if (primos[j] == numero_repetido_escoger_temporal) {
                        primos[j] = 0;
                        exponentes_primos[j] = 0;
                    }
                }
            }
            if (veces_encontrado >= numeros_totales_usuario) {
                numero_mcd.push(numero_repetido_escoger_temporal);
                exponente_mcd.push(exponente_repetido_escoger_temporal);
            }
        }
        //recoger los numeros que no se repiten
        for (let i = 0; i < primos.length; i++) {
            if (primos[i] != 0) {
                numero_mcd.push(primos[i]);
                exponente_mcd.push(exponentes_primos[i]);
            }
        }
        //mostrar resultado
        let numero_mcd_total = 1;
        for (let i = 0; i < numero_mcd.length; i++) {
            for (let j = 0; j < exponente_mcd[i]; j++) {
                numero_mcd_total *= numero_mcd[i];
            }
        }
        if (numero_mcd_total <= 0) {
            numero_mcd_total = 1;
        }
        document.getElementById("text-numeros-primos-descomponer").innerHTML = "m.c.m : ";
        let empezado = false;
        for (let i = 0; i < numero_mcd.length; i++) {//i=0--> 0^1
            if (numero_mcd[i] != 0) {
                if (empezado == false) {
                    empezado = true;
                    document.getElementById("text-numeros-primos-descomponer").innerHTML += numero_mcd[i] + "<sup>" + exponente_mcd[i] + "</sup>";
                }
                else {
                    document.getElementById("text-numeros-primos-descomponer").innerHTML += ", " + numero_mcd[i] + "<sup>" + exponente_mcd[i] + "</sup>";
                }
            }
        }
        if (numero_mcd_total == 1) {
            document.getElementById("text-numeros-primos-descomponer").innerHTML += "<u style='color:rgb(14, 183, 172);'>" + numero_mcd_total + "</u>";
        }
        else {
            document.getElementById("text-numeros-primos-descomponer").innerHTML += " = <u style='color:rgb(14, 183, 172);'>" + numero_mcd_total + "</u>";
        }
    }
    else {//mensaje error()

    }
}
