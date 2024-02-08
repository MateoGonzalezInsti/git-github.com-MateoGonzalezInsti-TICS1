//variables codigo 
let numero_multiplicar_y_funciones_graficas = 1;
let funciones_en_grafica = 0;
let colores_funcion = ["#ff2a15", "#22bb00", "#e4d416", "#ff841d", "#00e4b4", "#a500f2", "#ff21d7", "#ff036a", "#33f100"];//rojo,verde,amarillo,naranja,azul turquesa,morado,rosa,lila,verde claro
let funciones_guardadas = [];
//elementos pantalla
function mostrar_calcular_funciones_graficamente() {
    funciones_en_grafica=0;
    funciones_guardadas=[];
    //recibir width, height de la pantalla para el tamaño del canvas
    const tamaño_y_pantalla = screen.height;
    const tamaño_x_pantalla = screen.width;
    //mostrar elementos pantalla
    document.getElementById("body").innerHTML = "<div class='indice-herramientas-tabla-grafica'><svg class='flecha-volver-herramientas' xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;'onclick='control_pagina(1)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'/></g></svg></div><div class='div-div-alinear-estructura-calculadora-grafica'><div class='div-ecuacion-operacion-resultados'><div class='div-operacion-usuario'><input type='text' class='bt-ecuacion-usuario-calculadora-grafica'id='bt-ecuacion-usuario' placeholder='Ecuación: x^2 ...'><button id='bt-calcular-resultado'class='bt-calcular-resultado-ecuacion-calculadora-grafica'>Graficar</button></div><div class='resultados-ecuacion-mostrar-calculadora-grafica'><ul id='lista-resultados-msotrar-calculadora-grafica'></ul></div></div><div id='div-grafico-canvas-calculadora-grafica'><canvas id='grafico-canvas-calculadora-grafica' style='    border: 1px solid #000;border-top: none;'width='" + tamaño_x_pantalla + "' height='" + (tamaño_y_pantalla * 91 / 100) * 79 / 100 + "'></canvas></div></div>";

    document.getElementById('bt-calcular-resultado').addEventListener('click', () => {
        comprobar_funcion_usuario();
    });
    document.getElementById('bt-ecuacion-usuario').addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {//enter
            comprobar_funcion_usuario();
        }
    });
    dibujar_grafica();
}

//funciones codigo
function dibujar_grafica(fn) {
    const canvas = document.getElementById('grafico-canvas-calculadora-grafica');
    const ctx = canvas.getContext('2d');
    const listaResultadosEcuaciones = document.getElementById('lista-resultados-msotrar-calculadora-grafica');
    const width = canvas.width;
    const height = canvas.height;
    const scaleX = width / 20;
    const scaleY = height / 20;
    limpiar_canvas(ctx, width, height);
    dibujar_ejes(ctx, width, height, scaleX, scaleY);
    dibujar_numeros_ejes(fn, ctx, width, height, scaleX, scaleY);
    dibujar_funcion_resultados(fn, ctx, height, scaleX, scaleY);
    mostrar_algunos_resultados_funcion(fn, listaResultadosEcuaciones);
}
function dibujar_ejes(ctx, width, height, scaleX, scaleY) {
    //ejes
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    //lineas decimales y enteros
    //enteros
    for (let x = -9; x <= 9; x++) {
        if (x === 0) continue;
        ctx.moveTo((x + 10) * scaleX - 3, height / 2 + 7);
        ctx.lineTo((x + 10) * scaleX - 3, height / 2 - 7);
    }
    for (let y = -9; y <= 9; y++) {
        if (y === 0) continue;
        ctx.moveTo(width / 2 - 7, (y + 10) * scaleY);
        ctx.lineTo(width / 2 + 7, (y + 10) * scaleY);
    }
    ctx.strokeStyle = "#000";
    ctx.stroke();
    ctx.stroke();
    //decimales
    ctx.beginPath();
    for (let y = -90; y <= 90; y++) {
        if (y % 5 == 0) continue;
        ctx.moveTo(width / 2 - 4, (y + 25) * scaleY / 5);
        ctx.lineTo(width / 2 + 4, (y + 25) * scaleY / 5);
    }
    for (let x = -90; x <= 90; x++) {
        if (x % 5 == 0) continue;
        ctx.moveTo((x + 34.9) * scaleX / 5 - 1, height / 2 - 4);
        ctx.lineTo((x + 34.9) * scaleX / 5 - 1, height / 2 + 4);
    }
    ctx.strokeStyle = "blue";
    ctx.stroke();
    ctx.stroke();
}

function dibujar_numeros_ejes(fn, ctx, width, height, scaleX, scaleY) {
    let numero_multiplicar_y_funciones_graficas_temporal = 1;
    let negativo = false;
    if (fn != undefined) {
        const x = 1;
        const y = fn(x);
        if (y > 9.5) {
            numero_multiplicar_y_funciones_graficas_temporal = (y).toFixed(2) - 1;
        }
        if (y < -9.5) {
            numero_multiplicar_y_funciones_graficas_temporal = ((y).toFixed(2));
            numero_multiplicar_y_funciones_graficas_temporal *= -1;
            negativo = true;
        }
        if (numero_multiplicar_y_funciones_graficas_temporal > numero_multiplicar_y_funciones_graficas) {
            numero_multiplicar_y_funciones_graficas = numero_multiplicar_y_funciones_graficas_temporal;
        }
    }

    ctx.font = "14px Roboto";
    ctx.fillStyle = "#000";
    //numeros x
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    for (let x = -9; x <= 9; x++) {
        if (x === 0) continue;
        ctx.fillText(x, (x + 10) * scaleX - 3, height / 2 + 11);
    }
    //numeros y
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    for (let y = -9; y <= 9; y++) {
        if (y === 0) continue;
        if (!negativo) {
            let numero_mostrar = (-y * numero_multiplicar_y_funciones_graficas).toFixed(2);
            let decimales = numero_mostrar.split(".");
            let numero_mostrar_final = decimales[0];
            if (decimales[1][1] == 0) {
                if (decimales[1][0] != 0) {
                    numero_mostrar_final += "." + decimales[1][0];
                }
            }
            else {
                numero_mostrar_final += "." + decimales[1][0] + "" + decimales[1][1];
            }
            ctx.fillText(numero_mostrar_final, width / 2 - 11, (y + 10) * scaleY);
        }
        else {
            let numero_mostrar = (-y * (numero_multiplicar_y_funciones_graficas + 1)).toFixed(2);
            let decimales = numero_mostrar.split(".");
            let numero_mostrar_final = decimales[0];
            if (decimales[1][1] == 0) {
                if (decimales[1][0] != 0) {
                    numero_mostrar_final += "." + decimales[1][0];
                }
            }
            else {
                numero_mostrar_final += "." + decimales[1][0] + "" + decimales[1][1];
            }
            ctx.fillText(numero_mostrar_final, width / 2 - 11, (y + 10) * scaleY);
        }
    }
    if (numero_multiplicar_y_funciones_graficas > 1) {
        numero_multiplicar_y_funciones_graficas -= 0;
    }

    if (negativo) {
        numero_multiplicar_y_funciones_graficas *= -1;
    }
    else {
        numero_multiplicar_y_funciones_graficas -= 1;
    }
}

function dibujar_funcion_resultados(fn, ctx, height, scaleX, scaleY) {
    try {
        funciones_en_grafica=0;
        for (let i=0;i<funciones_guardadas.length;i++) {
            ctx.beginPath();
            fn=calcular_funcion(funciones_guardadas[i]);
            ctx.moveTo(0, height / 2 - fn(-10) * scaleY);
            if (numero_multiplicar_y_funciones_graficas == 1) {
                numero_multiplicar_y_funciones_graficas = 0;
            }
            for (let x = -10; x <= 10; x += 0.1) {
                const y = fn(x);
                ctx.lineTo((x + 10) * scaleX, (height / 2 - (y - (numero_multiplicar_y_funciones_graficas)) * scaleY));
            }
            ctx.strokeStyle = colores_funcion[funciones_en_grafica];
            ctx.stroke();
            funciones_en_grafica++;
            if (funciones_en_grafica >= colores_funcion.length) {
                funciones_en_grafica = 0;
            }
        }
    }
    catch (error) { }

}

function limpiar_canvas(ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
}

function calcular_funcion(equation) {
    return new Function('x', 'return ' + equation.replace(/\^/g, '**'));
}

function mostrar_algunos_resultados_funcion(fn, listaResultadosEcuaciones) {
    listaResultadosEcuaciones.innerHTML = "";
    try {
        for (let x = -5; x <= 5; x++) {
            if (x === 0) continue;
            listaResultadosEcuaciones.innerHTML += "<li class='resultado-ecuacion-msotrado-lista-calculadora-grafica'>(" + x + " , " + fn(x) + ")</li>";
        }
    }
    catch (error) { }

}

function comprobar_funcion_usuario() {
    const equation = document.getElementById('bt-ecuacion-usuario').value.replaceAll(" ", "");
    if (equation) {
        try {
            const parsedEquation = calcular_funcion(equation);
            funciones_guardadas.push(equation);
            dibujar_grafica(parsedEquation);
        } catch (error) {
            alert('La ecuación ingresada no es válida. Por favor, ingrese una ecuación válida.');
        }
    } else {
        alert('Por favor, ingrese una ecuación.');
    }
}


