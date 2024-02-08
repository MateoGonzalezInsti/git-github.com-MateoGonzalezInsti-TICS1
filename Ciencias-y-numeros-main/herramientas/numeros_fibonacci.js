let mostrar_solo_ultimo_numero_fibonacci = false;
let cache_numeros_mostrados_fibonacci=[];//10 numeros calculados mostrados (objeto-->numero_usuario:_,numero_mostrar:_)
function mostrar_calcular_fibonacci() {
    mostrar_solo_ultimo_numero_fibonacci = false;
    document.getElementById("body").innerHTML = "<div id='indice-herramientas' class='indice-herramientas'><svg class='flecha-volver-herramientas' xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;'onclick='control_pagina(1)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'/></g></svg></div><label class='herramientas-label-fibonacci'>Mostrar solo último: <input type='checkbox'class='herramientas-solo-numero-ultimo-fibonacci-checkbox'value='solo numero ultimo  fibonacci' onclick='flip_flop_check_fibonacci()'></label><input type='number' onfocus='this.select()'title='Cantidad números (n <=1.500.000)'class='herramientas-calcular-fibonacci'id='numero-usuario-recibir'class='herramientas-input-calculos-fibonacci'value=''placeholder='Cantidad números'><div class='div-herramientas-bt-calcular '><input type='button'onclick='mostrar_numeros_fibonacci()'value='Mostrar'class='herramientas-bt-calcular'></div><h3 id='numeros-fibonacci'class='resultado-calcular-fibonacci-ultimo'></h3><h3 class='resultado-calcular-fibonacci-todos'id='numeros-fibonacci-todos'></h3>";
    document.getElementById("numero-usuario-recibir").addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {//aceptar
            mostrar_numeros_fibonacci();
        }
    });
}
function flip_flop_check_fibonacci() {
    if (mostrar_solo_ultimo_numero_fibonacci) {
        mostrar_solo_ultimo_numero_fibonacci = false;
    }
    else if (!mostrar_solo_ultimo_numero_fibonacci) {
        mostrar_solo_ultimo_numero_fibonacci = true;
    }
}

//calcular
function mostrar_numeros_fibonacci() {
    let numeros_totales = document.getElementById("numero-usuario-recibir").value.replaceAll(" ", "");
    if (numeros_totales > 1500000) {
        numeros_totales = 1500000;
        document.getElementById("numero-usuario-recibir").value = 1500000;
    }
    let numero_guardados_fibonacci = [1n, 2n];
    if (mostrar_solo_ultimo_numero_fibonacci || numeros_totales > 10000) {//mostrar solo el ultimo numero
        let numero_fibonacci_mostrar;
        if (numeros_totales <= 2) {//buscar en cache
            numero_fibonacci_mostrar = numero_guardados_fibonacci[numeros_totales - 1];
        }
        else {//calcular, pero usamos el numero 10.000 & 9.999 de la cache para ahorrar tiempo
            let numero_anterior_fibonacci = numero_guardados_fibonacci[0];//ultimo numero cache
            let numero_actual_fibonacci = numero_guardados_fibonacci[1];//ultimo numero cache
            let variable_transporte_numeros = 0;
            numero_guardados_fibonacci = null;
            for (let i = 0; i < (numeros_totales - 2); i++) {
                variable_transporte_numeros = numero_actual_fibonacci;
                numero_actual_fibonacci = numero_actual_fibonacci + numero_anterior_fibonacci;
                numero_anterior_fibonacci = variable_transporte_numeros;
            }
            numero_fibonacci_mostrar = (numero_actual_fibonacci.toString()).replace("n", "");
        }
        //mostrar pantalla
        document.getElementById("numeros-fibonacci-todos").innerHTML = "";
        document.getElementById("numeros-fibonacci").innerHTML = "<font style='font-weight:700'>Fibonacci (" + numeros_totales + ") : </font>" + numero_fibonacci_mostrar;
    }
    else {//mostrar el ultimo numero y abajo mostrar todos del menor al mayor
        let ultimo_numero_fibonacci_mostrar;
        let todos_numeros_fibonacci_mostrar = "";
        if (numeros_totales <= 2) {//usar los numeros de la cache
            ultimo_numero_fibonacci_mostrar = numero_guardados_fibonacci[numeros_totales - 1];
            for (let i = 0; i < numeros_totales; i++) {
                if (i == 0) {//primera?
                    todos_numeros_fibonacci_mostrar = numero_guardados_fibonacci[i];
                }
                else {
                    todos_numeros_fibonacci_mostrar += ", " + numero_guardados_fibonacci[i];
                }
            }
            numero_guardados_fibonacci = null;
        }
        else {//usar los numeros ded la cache y luego calcular los restantes
            if (numeros_totales <= 2) {
                for (let i = 0; i < numeros_totales; i++) {
                    if (i == 0) {//primera?
                        todos_numeros_fibonacci_mostrar = (numero_guardados_fibonacci[i].toString()).replace("n", "");
                    }
                    else {
                        todos_numeros_fibonacci_mostrar += ", " + (numero_guardados_fibonacci[i].toString()).replace("n", "");
                    }
                }
            }
            else {
                for (let i = 0; i < 2; i++) {
                    if (i == 0) {//primera?
                        todos_numeros_fibonacci_mostrar = (numero_guardados_fibonacci[i].toString()).replace("n", "");
                    }
                    else {
                        todos_numeros_fibonacci_mostrar += ", " + (numero_guardados_fibonacci[i].toString()).replace("n", "");
                    }
                }
            }
            let numero_anterior_fibonacci = numero_guardados_fibonacci[0];//ultimo numero cache
            let numero_actual_fibonacci = numero_guardados_fibonacci[1];//ultimo numero cache
            let variable_transporte_numeros = 0;
            numero_guardados_fibonacci = null;
            for (let i = 0; i < (numeros_totales - 2); i++) {
                variable_transporte_numeros = numero_actual_fibonacci;
                numero_actual_fibonacci = numero_actual_fibonacci + numero_anterior_fibonacci;
                numero_anterior_fibonacci = variable_transporte_numeros;
                todos_numeros_fibonacci_mostrar += ", " + numero_actual_fibonacci;
            }
            ultimo_numero_fibonacci_mostrar = (numero_actual_fibonacci.toString()).replace("n", "");
        }
        //mostrar pantalla
        document.getElementById("numeros-fibonacci").innerHTML = "<font style='font-weight:700'>Fibonacci (" + numeros_totales + ") : </font>" + ultimo_numero_fibonacci_mostrar;
        document.getElementById("numeros-fibonacci-todos").innerHTML = "<font style='font-weight:700'>Fibonacci (1 - " + numeros_totales + ") : </font>" + todos_numeros_fibonacci_mostrar;
    }
}