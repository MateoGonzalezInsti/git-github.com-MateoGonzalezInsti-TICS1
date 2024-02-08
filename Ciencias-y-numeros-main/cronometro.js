//variables temporales para el funcionamiento del programa
let time = null;
let racha = null;
let dificultad_cronometro = null;
let empezado = null;
let temporizador = null;
//variables para guardar los datos en los registros(se guardan al terminar la partida antes de mostrar los resultados)
let aciertos = null;
let fallos = null;
let mejor_racha_partida = null;
let puntos = null;
let tiempo_partida = null;//segundos

function primera_operacion_cronometro(dificiltad_elegida) {
    empezado = false;
    puntos = 0;
    racha = 0;
    time = tiempo_cronometro;
    temporizador = false;
    dificultad_cronometro = dificiltad_elegida;
    aciertos = 0;
    fallos = 0;
    mejor_racha_partida = 0;
    puntos = 0;
    tiempo_partida = 0;
    crear_operacion_cronometro();
    if (time >= 120) {
        document.getElementById("contador-tiempo").style.color = "rgb(0, 77, 232)";//azul
        document.getElementById("contador-tiempo").style.textShadow = "rgb(0, 69, 207) 0px 1px 0px, rgb(0, 69, 207) 0px 1.5px 0px, rgb(0, 69, 207) 0px 2px 0px, rgb(0, 69, 207) 0px 2.5px 0px, rgb(0, 51, 201) 0px 3px 0px, rgb(6, 56, 204) 0px 3.5px 0px, rgb(6, 56, 204) 0px 4px 0px";//azul
    }
    if (time < 120 && time >= 60) {
        document.getElementById("contador-tiempo").style.color = "rgb(16, 160, 13)";//verde
        document.getElementById("contador-tiempo").style.textShadow = " 0  1px  0px   rgb(0, 126, 36),0  1.5px  0px   rgb(0, 126, 36),0  2px  0px   rgb(0, 126, 36),0  2.5px  0px   rgb(0, 126, 36), 0  3px  0px   rgb(2, 103, 0), 0  3.5px  0px   rgb(2, 103, 0), 0  4px  0px   rgb(2, 103, 0)";
    }
    if (time < 60 && time >= 30) {
        document.getElementById("contador-tiempo").style.color = " #ffbf00";//amarillo
        document.getElementById("contador-tiempo").style.textShadow = "#b68900 0px 1px 0px,#b68900 0px 1.5px 0px,#b68900 0px 2px 0px,#b68900 0px 2.5px 0px, #927009 0px 3px 0px,#927009 0px 3.5px 0px,#927009 0px 4px 0px";
    }
    if (time < 30 && time >= 11) {
        document.getElementById("contador-tiempo").style.color = "rgb(255, 133, 43)";//naranja
        document.getElementById("contador-tiempo").style.textShadow = "  rgb(219, 99, 12) 0px 1px 0px,rgb(219, 99, 12) 0px 1.5px 0px,rgb(219, 99, 12) 0px 2px 0px,rgb(219, 99, 12) 0px 2.5px 0px, rgb(219, 99, 11) 0px 3px 0px,rgb(219, 99, 11) 0px 3.5px 0px,rgb(219, 99, 11) 0px 4px 0px";
    }
    if (time <= 10 && time > 0) {
        document.getElementById("contador-tiempo").style.color = "#ff4513";//rojo
        document.getElementById("contador-tiempo").style.textShadow = " #e5390b 0px 1px 0px,#e5390b 0px 1.5px 0px,#e5390b 0px 2px 0px,#e5390b 0px 2.5px 0px,#ca3108 0px 3px 0px,#ca3108 0px 3.5px 0px,#ca3108 0px 4px 0px";
        setTimeout(function () {
            document.getElementById("contador-tiempo").style.color = "rgb(255, 133, 43)";//naranja
            document.getElementById("contador-tiempo").style.textShadow = "  rgb(219, 99, 12) 0px 1px 0px,rgb(219, 99, 12) 0px 1.5px 0px,rgb(219, 99, 12) 0px 2px 0px,rgb(219, 99, 12) 0px 2.5px 0px, rgb(219, 99, 11) 0px 3px 0px,rgb(219, 99, 11) 0px 3.5px 0px,rgb(219, 99, 11) 0px 4px 0px";
        }, 225);
        setTimeout(function () {
            document.getElementById("contador-tiempo").style.color = "#ff4513";//rojo
            document.getElementById("contador-tiempo").style.textShadow = " #e5390b 0px 1px 0px,#e5390b 0px 1.5px 0px,#e5390b 0px 2px 0px,#e5390b 0px 2.5px 0px,#ca3108 0px 3px 0px,#ca3108 0px 3.5px 0px,#ca3108 0px 4px 0px";
        }, 650);
    }
}
function empezar_cronometro() {
    time = tiempo_cronometro;
    temporizador = setInterval(function () {
        if (time > 0) {
            time--;
            tiempo_partida++;
            document.getElementById("contador-tiempo").innerHTML = Number(time.toFixed(1));
            //diseños contador
            if (time >= 120) {
                document.getElementById("contador-tiempo").style.color = "rgb(0, 77, 232)";//azul
                document.getElementById("contador-tiempo").style.textShadow = "rgb(0, 69, 207) 0px 1px 0px, rgb(0, 69, 207) 0px 1.5px 0px, rgb(0, 69, 207) 0px 2px 0px, rgb(0, 69, 207) 0px 2.5px 0px, rgb(0, 51, 201) 0px 3px 0px, rgb(6, 56, 204) 0px 3.5px 0px, rgb(6, 56, 204) 0px 4px 0px";//azul
            }
            if (time < 120 && time >= 60) {
                document.getElementById("contador-tiempo").style.color = "rgb(16, 160, 13)";//verde
                document.getElementById("contador-tiempo").style.textShadow = " 0  1px  0px   rgb(0, 126, 36),0  1.5px  0px   rgb(0, 126, 36),0  2px  0px   rgb(0, 126, 36),0  2.5px  0px   rgb(0, 126, 36), 0  3px  0px   rgb(2, 103, 0), 0  3.5px  0px   rgb(2, 103, 0), 0  4px  0px   rgb(2, 103, 0)";
            }
            if (time < 60 && time >= 30) {
                document.getElementById("contador-tiempo").style.color = " #ffbf00";//amarillo
                document.getElementById("contador-tiempo").style.textShadow = "#b68900 0px 1px 0px,#b68900 0px 1.5px 0px,#b68900 0px 2px 0px,#b68900 0px 2.5px 0px, #927009 0px 3px 0px,#927009 0px 3.5px 0px,#927009 0px 4px 0px";
            }
            if (time < 30 && time >= 11) {
                document.getElementById("contador-tiempo").style.color = "rgb(255, 133, 43)";//naranja
                document.getElementById("contador-tiempo").style.textShadow = "  rgb(219, 99, 12) 0px 1px 0px,rgb(219, 99, 12) 0px 1.5px 0px,rgb(219, 99, 12) 0px 2px 0px,rgb(219, 99, 12) 0px 2.5px 0px, rgb(219, 99, 11) 0px 3px 0px,rgb(219, 99, 11) 0px 3.5px 0px,rgb(219, 99, 11) 0px 4px 0px";
            }
            if (time <= 10 && time > 0) {
                document.getElementById("contador-tiempo").style.color = "#ff4513";//rojo
                document.getElementById("contador-tiempo").style.textShadow = " #e5390b 0px 1px 0px,#e5390b 0px 1.5px 0px,#e5390b 0px 2px 0px,#e5390b 0px 2.5px 0px,#ca3108 0px 3px 0px,#ca3108 0px 3.5px 0px,#ca3108 0px 4px 0px";
                setTimeout(function () {
                    document.getElementById("contador-tiempo").style.color = "rgb(255, 133, 43)";//naranja
                    document.getElementById("contador-tiempo").style.textShadow = "  rgb(219, 99, 12) 0px 1px 0px,rgb(219, 99, 12) 0px 1.5px 0px,rgb(219, 99, 12) 0px 2px 0px,rgb(219, 99, 12) 0px 2.5px 0px, rgb(219, 99, 11) 0px 3px 0px,rgb(219, 99, 11) 0px 3.5px 0px,rgb(219, 99, 11) 0px 4px 0px";
                }, 225);
                setTimeout(function () {
                    document.getElementById("contador-tiempo").style.color = "#ff4513";//rojo
                    document.getElementById("contador-tiempo").style.textShadow = " #e5390b 0px 1px 0px,#e5390b 0px 1.5px 0px,#e5390b 0px 2px 0px,#e5390b 0px 2.5px 0px,#ca3108 0px 3px 0px,#ca3108 0px 3.5px 0px,#ca3108 0px 4px 0px";
                }, 650);
            }
        }
        if (time <= 0) {
            clearInterval(temporizador);
            temporizador = null;
            time = null;
            fin_cronometro();
        }
    }, 1000);
}
function crear_operacion_cronometro() {
    const numero_operacion = Math.floor(Math.random() * 6 + 1);
    if (dificultad_cronometro == 1) {
        if (numero_operacion == 1 || numero_operacion == 2) {//suma
            let numero1 = Math.floor(Math.random() * 10 + 1);
            let numero2 = Math.floor(Math.random() * 10 + 1);
            while (numero1.toString() + "+" + numero2.toString() == numero_repetido_operacion) {
                numero1 = Math.floor(Math.random() * 10 + 1);
                numero2 = Math.floor(Math.random() * 10 + 1);
            }
            numero_repetido_operacion = numero1.toString() + "+" + numero2.toString();
            document.getElementById("body").innerHTML = "<svg class='home' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='1200px' height='1200px'><path  style='cursor: pointer;'onclick='salir_cronometro()'d='M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9 C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52 C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z'/></svg><h1 id='contador-tiempo'>" + Number(time.toFixed(1)) + "</h1><h3 id='ejercicio'class='ejercicio'>" + numero1 + "+" + numero2 + "</h3><input type='button'class='racha-cronometro'id='racha-cronometro'value='" + racha + "' style='display:none;'> <div class='div-resultado'><input id='resultado'class='resultado'type='number'onfocus='this.select()' autofocus></div> ";
            if (racha > 0 && racha <= 7) {//fondo azul oscuro, borde azul  y letra amarilla
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "radial-gradient(circle at 36.04% 11.65%, #a2e8ff 0, #7dd6ff 25%, #4fc4ff 50%, #00b2f9 75%, #00a0f2 100%)";
                document.getElementById("racha-cronometro").style.border = "2px #ffbd00 outset";
                document.getElementById("racha-cronometro").style.color = "#f1cb32";
            }
            else if (racha > 7 && racha <= 19) {//fondo verde, borde azul turques medio oscuro  y letra naranja
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "radial-gradient(circle at 30.93% -2.38%, #f2fa62 0, #ddfb62 8.33%, #c6fb63 16.67%, #aefa66 25%, #91f86b 33.33%, #6ff571 41.67%, #3cf278 50%, #00ee81 58.33%, #00eb8c 66.67%, #00e799 75%, #00e4a7 83.33%, #00e0b7 91.67%, #00ddc7 100%)";
                document.getElementById("racha-cronometro").style.border = "2px outset #d6ce15";
                document.getElementById("racha-cronometro").style.color = "#d68d09";
            }
            else if (racha > 19 && racha <= 29) {//fondo naranja, borde naranja oscuro  y letra dorada
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = " linear-gradient(170deg, #dbb355 0, #e2ac52 6.25%, #e8a34f 12.5%, #ec994d 18.75%, #f08e4c 25%, #f2824c 31.25%, #f4744e 37.5%, #f46550 43.75%, #f25353 50%, #ef3f58 56.25%, #eb295e 62.5%, #e70467 68.75%, #e00071 75%, #d8007c 81.25%, #cf0088 87.5%, #c30095 93.75%, #b500a2 100%)";
                document.getElementById("racha-cronometro").style.border = "2px outset #f13254";
                document.getElementById("racha-cronometro").style.color = "#b7f132";
            }
            else if (racha >= 30) {//fondo rojo, borde rojo oscuro  y letra dorada
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "linear-gradient(320deg, #0073a2 0, #0073b5 3.57%, #0073c7 7.14%, #0073d6 10.71%, #0071e4 14.29%, #0070ee 17.86%, #006df6 21.43%, #0069fb 25%, #0064fc 28.57%, #005efb 32.14%, #0056f6 35.71%, #004bef 39.29%, #213ee4 42.86%, #642cd7 46.43%, #8607c8 50%, #9f00b7 53.57%, #b200a4 57.14%, #c00091 60.71%, #cb007d 64.29%, #d20069 67.86%, #d60054 71.43%, #d60041 75%, #d5002e 78.57%, #d0001a 82.14%, #ca0000 85.71%, #c20000 89.29%, #b80000 92.86%, #ad1800 96.43%, #a12f00 100%)";
                document.getElementById("racha-cronometro").style.border = "2px #00e09e outset";
                document.getElementById("racha-cronometro").style.color = "#00e09e";
            }
            else { }
            document.getElementById("resultado").focus();
            control_continuar_cronometro();//pulsar para continuar y corregir suma
        }
        if (numero_operacion == 3 || numero_operacion == 4) {//resta
            let numero1 = Math.floor(Math.random() * 20 + 1);
            let numero2 = Math.floor(Math.random() * numero1 + 1);
            while (numero1.toString() + "-" + numero2.toString() == numero_repetido_operacion) {
                numero1 = Math.floor(Math.random() * 20 + 1);
                numero2 = Math.floor(Math.random() * numero1 + 1);
            }
            numero_repetido_operacion = numero1.toString() + "-" + numero2.toString();
            document.getElementById("body").innerHTML = "<svg class='home' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='1200px' height='1200px'><path  style='cursor: pointer;'onclick='salir_cronometro()'d='M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9 C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52 C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z'/></svg><h1 id='contador-tiempo'>" + Number(time.toFixed(1)) + "</h1><h3 id='ejercicio'class='ejercicio'>" + numero1 + "-" + numero2 + "</h3> <input type='button'class='racha-cronometro'id='racha-cronometro'value='" + racha + "' style='display:none;'><div class='div-resultado'><input id='resultado'class='resultado'type='number'onfocus='this.select()' autofocus></div> ";
            if (racha > 0 && racha <= 7) {//fondo azul oscuro, borde azul  y letra amarilla
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "radial-gradient(circle at 36.04% 11.65%, #a2e8ff 0, #7dd6ff 25%, #4fc4ff 50%, #00b2f9 75%, #00a0f2 100%)";
                document.getElementById("racha-cronometro").style.border = "2px #ffbd00 outset";
                document.getElementById("racha-cronometro").style.color = "#f1cb32";
            }
            else if (racha > 7 && racha <= 19) {//fondo verde, borde azul turques medio oscuro  y letra naranja
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "radial-gradient(circle at 30.93% -2.38%, #f2fa62 0, #ddfb62 8.33%, #c6fb63 16.67%, #aefa66 25%, #91f86b 33.33%, #6ff571 41.67%, #3cf278 50%, #00ee81 58.33%, #00eb8c 66.67%, #00e799 75%, #00e4a7 83.33%, #00e0b7 91.67%, #00ddc7 100%)";
                document.getElementById("racha-cronometro").style.border = "2px outset #d6ce15";
                document.getElementById("racha-cronometro").style.color = "#d68d09";
            }
            else if (racha > 19 && racha <= 29) {//fondo naranja, borde naranja oscuro  y letra dorada
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = " linear-gradient(170deg, #dbb355 0, #e2ac52 6.25%, #e8a34f 12.5%, #ec994d 18.75%, #f08e4c 25%, #f2824c 31.25%, #f4744e 37.5%, #f46550 43.75%, #f25353 50%, #ef3f58 56.25%, #eb295e 62.5%, #e70467 68.75%, #e00071 75%, #d8007c 81.25%, #cf0088 87.5%, #c30095 93.75%, #b500a2 100%)";
                document.getElementById("racha-cronometro").style.border = "2px outset #f13254";
                document.getElementById("racha-cronometro").style.color = "#b7f132";
            }
            else if (racha >= 30) {//fondo rojo, borde rojo oscuro  y letra dorada
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "linear-gradient(320deg, #0073a2 0, #0073b5 3.57%, #0073c7 7.14%, #0073d6 10.71%, #0071e4 14.29%, #0070ee 17.86%, #006df6 21.43%, #0069fb 25%, #0064fc 28.57%, #005efb 32.14%, #0056f6 35.71%, #004bef 39.29%, #213ee4 42.86%, #642cd7 46.43%, #8607c8 50%, #9f00b7 53.57%, #b200a4 57.14%, #c00091 60.71%, #cb007d 64.29%, #d20069 67.86%, #d60054 71.43%, #d60041 75%, #d5002e 78.57%, #d0001a 82.14%, #ca0000 85.71%, #c20000 89.29%, #b80000 92.86%, #ad1800 96.43%, #a12f00 100%)";
                document.getElementById("racha-cronometro").style.border = "2px #00e09e outset";
                document.getElementById("racha-cronometro").style.color = "#00e09e";
            }
            else { }
            document.getElementById("resultado").focus();
            control_continuar_cronometro();//pulsar para continuar y corregir resta
        }
        if (numero_operacion == 5) {//multiplicacion
            let numero1 = Math.floor(Math.random() * 10 + 1);
            let numero2 = Math.floor(Math.random() * 5 + 1);
            while (numero1.toString() + "*" + numero2.toString() == numero_repetido_operacion) {
                numero1 = Math.floor(Math.random() * 10 + 1);
                numero2 = Math.floor(Math.random() * 5 + 1);
            }
            numero_repetido_operacion = numero1.toString() + "*" + numero2.toString();
            document.getElementById("body").innerHTML = "<svg class='home' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='1200px' height='1200px'><path  style='cursor: pointer;'onclick='salir_cronometro()'d='M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9 C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52 C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z'/></svg><h1 id='contador-tiempo'>" + Number(time.toFixed(1)) + "</h1><h3 id='ejercicio'class='ejercicio'>" + numero1 + "*" + numero2 + "</h3> <input type='button'class='racha-cronometro'id='racha-cronometro'value='" + racha + "' style='display:none;'><div class='div-resultado'><input id='resultado'class='resultado'type='number'onfocus='this.select()' autofocus></div> ";
            if (racha > 0 && racha <= 7) {//fondo azul oscuro, borde azul  y letra amarilla
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "radial-gradient(circle at 36.04% 11.65%, #a2e8ff 0, #7dd6ff 25%, #4fc4ff 50%, #00b2f9 75%, #00a0f2 100%)";
                document.getElementById("racha-cronometro").style.border = "2px #ffbd00 outset";
                document.getElementById("racha-cronometro").style.color = "#f1cb32";
            }
            else if (racha > 7 && racha <= 19) {//fondo verde, borde azul turques medio oscuro  y letra naranja
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "radial-gradient(circle at 30.93% -2.38%, #f2fa62 0, #ddfb62 8.33%, #c6fb63 16.67%, #aefa66 25%, #91f86b 33.33%, #6ff571 41.67%, #3cf278 50%, #00ee81 58.33%, #00eb8c 66.67%, #00e799 75%, #00e4a7 83.33%, #00e0b7 91.67%, #00ddc7 100%)";
                document.getElementById("racha-cronometro").style.border = "2px outset #d6ce15";
                document.getElementById("racha-cronometro").style.color = "#d68d09";
            }
            else if (racha > 19 && racha <= 29) {//fondo naranja, borde naranja oscuro  y letra dorada
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = " linear-gradient(170deg, #dbb355 0, #e2ac52 6.25%, #e8a34f 12.5%, #ec994d 18.75%, #f08e4c 25%, #f2824c 31.25%, #f4744e 37.5%, #f46550 43.75%, #f25353 50%, #ef3f58 56.25%, #eb295e 62.5%, #e70467 68.75%, #e00071 75%, #d8007c 81.25%, #cf0088 87.5%, #c30095 93.75%, #b500a2 100%)";
                document.getElementById("racha-cronometro").style.border = "2px outset #f13254";
                document.getElementById("racha-cronometro").style.color = "#b7f132";
            }
            else if (racha >= 30) {//fondo rojo, borde rojo oscuro  y letra dorada
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "linear-gradient(320deg, #0073a2 0, #0073b5 3.57%, #0073c7 7.14%, #0073d6 10.71%, #0071e4 14.29%, #0070ee 17.86%, #006df6 21.43%, #0069fb 25%, #0064fc 28.57%, #005efb 32.14%, #0056f6 35.71%, #004bef 39.29%, #213ee4 42.86%, #642cd7 46.43%, #8607c8 50%, #9f00b7 53.57%, #b200a4 57.14%, #c00091 60.71%, #cb007d 64.29%, #d20069 67.86%, #d60054 71.43%, #d60041 75%, #d5002e 78.57%, #d0001a 82.14%, #ca0000 85.71%, #c20000 89.29%, #b80000 92.86%, #ad1800 96.43%, #a12f00 100%)";
                document.getElementById("racha-cronometro").style.border = "2px #00e09e outset";
                document.getElementById("racha-cronometro").style.color = "#00e09e";
            }
            else { }
            document.getElementById("resultado").focus();
            control_continuar_cronometro();//pulsar para continuar y corregir multiplicacion
        }
        if (numero_operacion == 6) {//division
            let numero2 = Math.floor(Math.random() * 10 + 1);
            let numero1 = Math.floor(Math.random() * 5 + 2);
            while (numero1.toString() + "/" + numero2.toString() == numero_repetido_operacion) {
                numero2 = Math.floor(Math.random() * 10 + 1);
                numero1 = Math.floor(Math.random() * 5 + 2);
            }
            numero_repetido_operacion = numero1.toString() + "/" + numero2.toString();
            document.getElementById("body").innerHTML = "<svg class='home' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='1200px' height='1200px'><path  style='cursor: pointer;'onclick='salir_cronometro()'d='M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9 C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52 C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z'/></svg><h1 id='contador-tiempo'>" + Number(time.toFixed(1)) + "</h1><h3 id='ejercicio'class='ejercicio'>" + numero1 * numero2 + "/" + numero2 + "</h3><input type='button'class='racha-cronometro'id='racha-cronometro'value='" + racha + "' style='display:none;'><div class='div-resultado'><input id='resultado'class='resultado'type='number'onfocus='this.select()' autofocus></div> ";
            if (racha > 0 && racha <= 7) {//fondo azul oscuro, borde azul  y letra amarilla
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "radial-gradient(circle at 36.04% 11.65%, #a2e8ff 0, #7dd6ff 25%, #4fc4ff 50%, #00b2f9 75%, #00a0f2 100%)";
                document.getElementById("racha-cronometro").style.border = "2px #ffbd00 outset";
                document.getElementById("racha-cronometro").style.color = "#f1cb32";
            }
            else if (racha > 7 && racha <= 19) {//fondo verde, borde azul turques medio oscuro  y letra naranja
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "radial-gradient(circle at 30.93% -2.38%, #f2fa62 0, #ddfb62 8.33%, #c6fb63 16.67%, #aefa66 25%, #91f86b 33.33%, #6ff571 41.67%, #3cf278 50%, #00ee81 58.33%, #00eb8c 66.67%, #00e799 75%, #00e4a7 83.33%, #00e0b7 91.67%, #00ddc7 100%)";
                document.getElementById("racha-cronometro").style.border = "2px outset #d6ce15";
                document.getElementById("racha-cronometro").style.color = "#d68d09";
            }
            else if (racha > 19 && racha <= 29) {//fondo naranja, borde naranja oscuro  y letra dorada
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = " linear-gradient(170deg, #dbb355 0, #e2ac52 6.25%, #e8a34f 12.5%, #ec994d 18.75%, #f08e4c 25%, #f2824c 31.25%, #f4744e 37.5%, #f46550 43.75%, #f25353 50%, #ef3f58 56.25%, #eb295e 62.5%, #e70467 68.75%, #e00071 75%, #d8007c 81.25%, #cf0088 87.5%, #c30095 93.75%, #b500a2 100%)";
                document.getElementById("racha-cronometro").style.border = "2px outset #f13254";
                document.getElementById("racha-cronometro").style.color = "#b7f132";
            }
            else if (racha >= 30) {//fondo rojo, borde rojo oscuro  y letra dorada
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "linear-gradient(320deg, #0073a2 0, #0073b5 3.57%, #0073c7 7.14%, #0073d6 10.71%, #0071e4 14.29%, #0070ee 17.86%, #006df6 21.43%, #0069fb 25%, #0064fc 28.57%, #005efb 32.14%, #0056f6 35.71%, #004bef 39.29%, #213ee4 42.86%, #642cd7 46.43%, #8607c8 50%, #9f00b7 53.57%, #b200a4 57.14%, #c00091 60.71%, #cb007d 64.29%, #d20069 67.86%, #d60054 71.43%, #d60041 75%, #d5002e 78.57%, #d0001a 82.14%, #ca0000 85.71%, #c20000 89.29%, #b80000 92.86%, #ad1800 96.43%, #a12f00 100%)";
                document.getElementById("racha-cronometro").style.border = "2px #00e09e outset";
                document.getElementById("racha-cronometro").style.color = "#00e09e";
            }
            else { }
            document.getElementById("resultado").focus();
            control_continuar_cronometro();//pulsar para continuar y corregir division
        }
    }
    if (dificultad_cronometro == 2) {
        if (numero_operacion == 1 || numero_operacion == 2) {//suma
            let numero1 = Math.floor(Math.random() * 99 + 20);
            let numero2 = Math.floor(Math.random() * (100 - numero1) + 20);
            while (numero1.toString() + "+" + numero2.toString() == numero_repetido_operacion) {
                numero1 = Math.floor(Math.random() * 99 + 20);
                numero2 = Math.floor(Math.random() * (100 - numero1) + 20);
            }
            numero_repetido_operacion = numero1.toString() + "+" + numero2.toString();
            document.getElementById("body").innerHTML = "<svg class='home' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='1200px' height='1200px'><path  style='cursor: pointer;'onclick='salir_cronometro()'d='M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9 C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52 C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z'/></svg><h1 id='contador-tiempo'>" + Number(time.toFixed(1)) + "</h1><h3 id='ejercicio'class='ejercicio'>" + numero1 + "+" + numero2 + "</h3><input type='button'class='racha-cronometro'id='racha-cronometro'value='" + racha + "' style='display:none;'> <div class='div-resultado'><input id='resultado'class='resultado'type='number'onfocus='this.select()' autofocus></div> ";
            if (racha > 0 && racha <= 5) {//fondo azul oscuro, borde azul  y letra amarilla
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "radial-gradient(circle at 36.04% 11.65%, #a2e8ff 0, #7dd6ff 25%, #4fc4ff 50%, #00b2f9 75%, #00a0f2 100%)";
                document.getElementById("racha-cronometro").style.border = "2px #ffbd00 outset";
                document.getElementById("racha-cronometro").style.color = "#f1cb32";
            }
            else if (racha > 5 && racha <= 15) {//fondo verde, borde azul turques medio oscuro  y letra naranja
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "radial-gradient(circle at 30.93% -2.38%, #f2fa62 0, #ddfb62 8.33%, #c6fb63 16.67%, #aefa66 25%, #91f86b 33.33%, #6ff571 41.67%, #3cf278 50%, #00ee81 58.33%, #00eb8c 66.67%, #00e799 75%, #00e4a7 83.33%, #00e0b7 91.67%, #00ddc7 100%)";
                document.getElementById("racha-cronometro").style.border = "2px outset #d6ce15";
                document.getElementById("racha-cronometro").style.color = "#d68d09";
            }
            else if (racha > 15 && racha <= 25) {//fondo naranja, borde naranja oscuro  y letra dorada
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = " linear-gradient(170deg, #dbb355 0, #e2ac52 6.25%, #e8a34f 12.5%, #ec994d 18.75%, #f08e4c 25%, #f2824c 31.25%, #f4744e 37.5%, #f46550 43.75%, #f25353 50%, #ef3f58 56.25%, #eb295e 62.5%, #e70467 68.75%, #e00071 75%, #d8007c 81.25%, #cf0088 87.5%, #c30095 93.75%, #b500a2 100%)";
                document.getElementById("racha-cronometro").style.border = "2px outset #f13254";
                document.getElementById("racha-cronometro").style.color = "#b7f132";
            }
            else if (racha > 25) {//fondo rojo, borde rojo oscuro  y letra dorada
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "linear-gradient(320deg, #0073a2 0, #0073b5 3.57%, #0073c7 7.14%, #0073d6 10.71%, #0071e4 14.29%, #0070ee 17.86%, #006df6 21.43%, #0069fb 25%, #0064fc 28.57%, #005efb 32.14%, #0056f6 35.71%, #004bef 39.29%, #213ee4 42.86%, #642cd7 46.43%, #8607c8 50%, #9f00b7 53.57%, #b200a4 57.14%, #c00091 60.71%, #cb007d 64.29%, #d20069 67.86%, #d60054 71.43%, #d60041 75%, #d5002e 78.57%, #d0001a 82.14%, #ca0000 85.71%, #c20000 89.29%, #b80000 92.86%, #ad1800 96.43%, #a12f00 100%)";
                document.getElementById("racha-cronometro").style.border = "2px #00e09e outset";
                document.getElementById("racha-cronometro").style.color = "#00e09e";
            }
            else { }
            document.getElementById("resultado").focus();
            control_continuar_cronometro();//pulsar para continuar y corregir suma
        }
        if (numero_operacion == 3 || numero_operacion == 4) {//resta
            let numero1 = Math.floor(Math.random() * 100 + 30);
            let numero2 = Math.floor(Math.random() * numero1 + 15);
            while (numero1.toString() + "-" + numero2.toString() == numero_repetido_operacion) {
                numero1 = Math.floor(Math.random() * 100 + 30);
                numero2 = Math.floor(Math.random() * numero1 + 15);
            }
            numero_repetido_operacion = numero1.toString() + "-" + numero2.toString();
            document.getElementById("body").innerHTML = "<svg class='home' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='1200px' height='1200px'><path  style='cursor: pointer;'onclick='salir_cronometro()'d='M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9 C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52 C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z'/></svg><h1 id='contador-tiempo'>" + Number(time.toFixed(1)) + "</h1><h3 id='ejercicio'class='ejercicio'>" + numero1 + "-" + numero2 + "</h3> <input type='button'class='racha-cronometro'id='racha-cronometro'value='" + racha + "' style='display:none;'><div class='div-resultado'><input id='resultado'class='resultado'type='number'onfocus='this.select()' autofocus></div> ";
            if (racha > 0 && racha <= 5) {//fondo azul oscuro, borde azul  y letra amarilla
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "radial-gradient(circle at 36.04% 11.65%, #a2e8ff 0, #7dd6ff 25%, #4fc4ff 50%, #00b2f9 75%, #00a0f2 100%)";
                document.getElementById("racha-cronometro").style.border = "2px #ffbd00 outset";
                document.getElementById("racha-cronometro").style.color = "#f1cb32";
            }
            else if (racha > 5 && racha <= 15) {//fondo verde, borde azul turques medio oscuro  y letra naranja
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "radial-gradient(circle at 30.93% -2.38%, #f2fa62 0, #ddfb62 8.33%, #c6fb63 16.67%, #aefa66 25%, #91f86b 33.33%, #6ff571 41.67%, #3cf278 50%, #00ee81 58.33%, #00eb8c 66.67%, #00e799 75%, #00e4a7 83.33%, #00e0b7 91.67%, #00ddc7 100%)";
                document.getElementById("racha-cronometro").style.border = "2px outset #d6ce15";
                document.getElementById("racha-cronometro").style.color = "#d68d09";
            }
            else if (racha > 15 && racha <= 25) {//fondo naranja, borde naranja oscuro  y letra dorada
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = " linear-gradient(170deg, #dbb355 0, #e2ac52 6.25%, #e8a34f 12.5%, #ec994d 18.75%, #f08e4c 25%, #f2824c 31.25%, #f4744e 37.5%, #f46550 43.75%, #f25353 50%, #ef3f58 56.25%, #eb295e 62.5%, #e70467 68.75%, #e00071 75%, #d8007c 81.25%, #cf0088 87.5%, #c30095 93.75%, #b500a2 100%)";
                document.getElementById("racha-cronometro").style.border = "2px outset #f13254";
                document.getElementById("racha-cronometro").style.color = "#b7f132";
            }
            else if (racha > 25) {//fondo rojo, borde rojo oscuro  y letra dorada
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "linear-gradient(320deg, #0073a2 0, #0073b5 3.57%, #0073c7 7.14%, #0073d6 10.71%, #0071e4 14.29%, #0070ee 17.86%, #006df6 21.43%, #0069fb 25%, #0064fc 28.57%, #005efb 32.14%, #0056f6 35.71%, #004bef 39.29%, #213ee4 42.86%, #642cd7 46.43%, #8607c8 50%, #9f00b7 53.57%, #b200a4 57.14%, #c00091 60.71%, #cb007d 64.29%, #d20069 67.86%, #d60054 71.43%, #d60041 75%, #d5002e 78.57%, #d0001a 82.14%, #ca0000 85.71%, #c20000 89.29%, #b80000 92.86%, #ad1800 96.43%, #a12f00 100%)";
                document.getElementById("racha-cronometro").style.border = "2px #00e09e outset";
                document.getElementById("racha-cronometro").style.color = "#00e09e";
            }
            else { }
            document.getElementById("resultado").focus();
            control_continuar_cronometro();//pulsar para continuar y corregir resta
        }
        if (numero_operacion == 5) {
            let numero1 = Math.floor(Math.random() * 10 + 5);
            let numero2 = Math.floor(Math.random() * 10 + 5);
            while (numero1.toString() + "*" + numero2.toString() == numero_repetido_operacion) {
                numero1 = Math.floor(Math.random() * 10 + 5);
                numero2 = Math.floor(Math.random() * 10 + 5);
            }
            numero_repetido_operacion = numero1.toString() + "*" + numero2.toString();
            document.getElementById("body").innerHTML = "<svg class='home' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='1200px' height='1200px'><path  style='cursor: pointer;'onclick='salir_cronometro()'d='M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9 C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52 C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z'/></svg><h1 id='contador-tiempo'>" + Number(time.toFixed(1)) + "</h1><h3 id='ejercicio'class='ejercicio'>" + numero1 + "*" + numero2 + "</h3> <input type='button'class='racha-cronometro'id='racha-cronometro'value='" + racha + "' style='display:none;'><div class='div-resultado'><input id='resultado'class='resultado'type='number'onfocus='this.select()' autofocus></div> ";
            if (racha > 0 && racha <= 5) {//fondo azul oscuro, borde azul  y letra amarilla
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "radial-gradient(circle at 36.04% 11.65%, #a2e8ff 0, #7dd6ff 25%, #4fc4ff 50%, #00b2f9 75%, #00a0f2 100%)";
                document.getElementById("racha-cronometro").style.border = "2px #ffbd00 outset";
                document.getElementById("racha-cronometro").style.color = "#f1cb32";
            }
            else if (racha > 5 && racha <= 15) {//fondo verde, borde azul turques medio oscuro  y letra naranja
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "radial-gradient(circle at 30.93% -2.38%, #f2fa62 0, #ddfb62 8.33%, #c6fb63 16.67%, #aefa66 25%, #91f86b 33.33%, #6ff571 41.67%, #3cf278 50%, #00ee81 58.33%, #00eb8c 66.67%, #00e799 75%, #00e4a7 83.33%, #00e0b7 91.67%, #00ddc7 100%)";
                document.getElementById("racha-cronometro").style.border = "2px outset #d6ce15";
                document.getElementById("racha-cronometro").style.color = "#d68d09";
            }
            else if (racha > 15 && racha <= 25) {//fondo naranja, borde naranja oscuro  y letra dorada
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = " linear-gradient(170deg, #dbb355 0, #e2ac52 6.25%, #e8a34f 12.5%, #ec994d 18.75%, #f08e4c 25%, #f2824c 31.25%, #f4744e 37.5%, #f46550 43.75%, #f25353 50%, #ef3f58 56.25%, #eb295e 62.5%, #e70467 68.75%, #e00071 75%, #d8007c 81.25%, #cf0088 87.5%, #c30095 93.75%, #b500a2 100%)";
                document.getElementById("racha-cronometro").style.border = "2px outset #f13254";
                document.getElementById("racha-cronometro").style.color = "#b7f132";
            }
            else if (racha > 25) {//fondo rojo, borde rojo oscuro  y letra dorada
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "linear-gradient(320deg, #0073a2 0, #0073b5 3.57%, #0073c7 7.14%, #0073d6 10.71%, #0071e4 14.29%, #0070ee 17.86%, #006df6 21.43%, #0069fb 25%, #0064fc 28.57%, #005efb 32.14%, #0056f6 35.71%, #004bef 39.29%, #213ee4 42.86%, #642cd7 46.43%, #8607c8 50%, #9f00b7 53.57%, #b200a4 57.14%, #c00091 60.71%, #cb007d 64.29%, #d20069 67.86%, #d60054 71.43%, #d60041 75%, #d5002e 78.57%, #d0001a 82.14%, #ca0000 85.71%, #c20000 89.29%, #b80000 92.86%, #ad1800 96.43%, #a12f00 100%)";
                document.getElementById("racha-cronometro").style.border = "2px #00e09e outset";
                document.getElementById("racha-cronometro").style.color = "#00e09e";
            }
            else { }
            document.getElementById("resultado").focus();
            control_continuar_cronometro();//pulsar para continuar y corregir multiplicacion
        }
        if (numero_operacion == 6) {
            let numero2 = Math.floor(Math.random() * 10 + 5);
            let numero1 = Math.floor(Math.random() * 10 + 5);
            while (numero1.toString() + "/" + numero2.toString() == numero_repetido_operacion) {
                numero2 = Math.floor(Math.random() * 10 + 5);
                numero1 = Math.floor(Math.random() * 10 + 5);
            }
            numero_repetido_operacion = numero1.toString() + "/" + numero2.toString();
            document.getElementById("body").innerHTML = "<svg class='home' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='1200px' height='1200px'><path  style='cursor: pointer;'onclick='salir_cronometro()'d='M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9 C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52 C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z'/></svg><h1 id='contador-tiempo'>" + Number(time.toFixed(1)) + "</h1><h3 id='ejercicio'class='ejercicio'>" + numero1 * numero2 + "/" + numero2 + "</h3><input type='button'class='racha-cronometro'id='racha-cronometro'value='" + racha + "' style='display:none;'><div class='div-resultado'><input id='resultado'class='resultado'type='number'onfocus='this.select()' autofocus></div> ";
            if (racha > 0 && racha <= 5) {//fondo azul oscuro, borde azul  y letra amarilla
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "radial-gradient(circle at 36.04% 11.65%, #a2e8ff 0, #7dd6ff 25%, #4fc4ff 50%, #00b2f9 75%, #00a0f2 100%)";
                document.getElementById("racha-cronometro").style.border = "2px #ffbd00 outset";
                document.getElementById("racha-cronometro").style.color = "#f1cb32";
            }
            else if (racha > 5 && racha <= 15) {//fondo verde, borde azul turques medio oscuro  y letra naranja
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "radial-gradient(circle at 30.93% -2.38%, #f2fa62 0, #ddfb62 8.33%, #c6fb63 16.67%, #aefa66 25%, #91f86b 33.33%, #6ff571 41.67%, #3cf278 50%, #00ee81 58.33%, #00eb8c 66.67%, #00e799 75%, #00e4a7 83.33%, #00e0b7 91.67%, #00ddc7 100%)";
                document.getElementById("racha-cronometro").style.border = "2px outset #d6ce15";
                document.getElementById("racha-cronometro").style.color = "#d68d09";
            }
            else if (racha > 15 && racha <= 25) {//fondo naranja, borde naranja oscuro  y letra dorada
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = " linear-gradient(170deg, #dbb355 0, #e2ac52 6.25%, #e8a34f 12.5%, #ec994d 18.75%, #f08e4c 25%, #f2824c 31.25%, #f4744e 37.5%, #f46550 43.75%, #f25353 50%, #ef3f58 56.25%, #eb295e 62.5%, #e70467 68.75%, #e00071 75%, #d8007c 81.25%, #cf0088 87.5%, #c30095 93.75%, #b500a2 100%)";
                document.getElementById("racha-cronometro").style.border = "2px outset #f13254";
                document.getElementById("racha-cronometro").style.color = "#b7f132";
            }
            else if (racha > 25) {//fondo rojo, borde rojo oscuro  y letra dorada
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "linear-gradient(320deg, #0073a2 0, #0073b5 3.57%, #0073c7 7.14%, #0073d6 10.71%, #0071e4 14.29%, #0070ee 17.86%, #006df6 21.43%, #0069fb 25%, #0064fc 28.57%, #005efb 32.14%, #0056f6 35.71%, #004bef 39.29%, #213ee4 42.86%, #642cd7 46.43%, #8607c8 50%, #9f00b7 53.57%, #b200a4 57.14%, #c00091 60.71%, #cb007d 64.29%, #d20069 67.86%, #d60054 71.43%, #d60041 75%, #d5002e 78.57%, #d0001a 82.14%, #ca0000 85.71%, #c20000 89.29%, #b80000 92.86%, #ad1800 96.43%, #a12f00 100%)";
                document.getElementById("racha-cronometro").style.border = "2px #00e09e outset";
                document.getElementById("racha-cronometro").style.color = "#00e09e";
            }
            else { }
            document.getElementById("resultado").focus();
            control_continuar_cronometro();//pulsar para continuar y corregir division
        }
    }
    if (dificultad_cronometro == 3) {
        if (numero_operacion == 1 || numero_operacion == 2) {//suma
            let numero1 = Math.floor(Math.random() * 999 + 50);
            let numero2 = Math.floor(Math.random() * (1000 - numero1) + 50);
            while (numero1.toString() + "+" + numero2.toString() == numero_repetido_operacion) {
                numero1 = Math.floor(Math.random() * 999 + 50);
                numero2 = Math.floor(Math.random() * (1000 - numero1) + 50);
            }
            numero_repetido_operacion = numero1.toString() + "+" + numero2.toString();
            document.getElementById("body").innerHTML = "<svg class='home' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='1200px' height='1200px'><path  style='cursor: pointer;'onclick='salir_cronometro()'d='M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9 C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52 C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z'/></svg><h1 id='contador-tiempo'>" + Number(time.toFixed(1)) + "</h1><h3 id='ejercicio'class='ejercicio'>" + numero1 + "+" + numero2 + "</h3><input type='button'class='racha-cronometro'id='racha-cronometro'value='" + racha + "' style='display:none;'> <div class='div-resultado'><input id='resultado'class='resultado'type='number'onfocus='this.select()' autofocus></div> ";
            if (racha > 0 && racha <= 3) {//fondo azul oscuro, borde azul  y letra amarilla
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "radial-gradient(circle at 36.04% 11.65%, #a2e8ff 0, #7dd6ff 25%, #4fc4ff 50%, #00b2f9 75%, #00a0f2 100%)";
                document.getElementById("racha-cronometro").style.border = "2px #ffbd00 outset";
                document.getElementById("racha-cronometro").style.color = "#f1cb32";
            }
            else if (racha > 3 && racha <= 10) {//fondo verde, borde azul turques medio oscuro  y letra naranja
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "radial-gradient(circle at 30.93% -2.38%, #f2fa62 0, #ddfb62 8.33%, #c6fb63 16.67%, #aefa66 25%, #91f86b 33.33%, #6ff571 41.67%, #3cf278 50%, #00ee81 58.33%, #00eb8c 66.67%, #00e799 75%, #00e4a7 83.33%, #00e0b7 91.67%, #00ddc7 100%)";
                document.getElementById("racha-cronometro").style.border = "2px outset #d6ce15";
                document.getElementById("racha-cronometro").style.color = "#d68d09";
            }
            else if (racha > 10 && racha <= 19) {//fondo naranja, borde naranja oscuro  y letra dorada
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = " linear-gradient(170deg, #dbb355 0, #e2ac52 6.25%, #e8a34f 12.5%, #ec994d 18.75%, #f08e4c 25%, #f2824c 31.25%, #f4744e 37.5%, #f46550 43.75%, #f25353 50%, #ef3f58 56.25%, #eb295e 62.5%, #e70467 68.75%, #e00071 75%, #d8007c 81.25%, #cf0088 87.5%, #c30095 93.75%, #b500a2 100%)";
                document.getElementById("racha-cronometro").style.border = "2px outset #f13254";
                document.getElementById("racha-cronometro").style.color = "#b7f132";
            }
            else if (racha > 19) {//fondo rojo, borde rojo oscuro  y letra dorada
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "linear-gradient(320deg, #0073a2 0, #0073b5 3.57%, #0073c7 7.14%, #0073d6 10.71%, #0071e4 14.29%, #0070ee 17.86%, #006df6 21.43%, #0069fb 25%, #0064fc 28.57%, #005efb 32.14%, #0056f6 35.71%, #004bef 39.29%, #213ee4 42.86%, #642cd7 46.43%, #8607c8 50%, #9f00b7 53.57%, #b200a4 57.14%, #c00091 60.71%, #cb007d 64.29%, #d20069 67.86%, #d60054 71.43%, #d60041 75%, #d5002e 78.57%, #d0001a 82.14%, #ca0000 85.71%, #c20000 89.29%, #b80000 92.86%, #ad1800 96.43%, #a12f00 100%)";
                document.getElementById("racha-cronometro").style.border = "2px #00e09e outset";
                document.getElementById("racha-cronometro").style.color = "#00e09e";
            }
            else { }
            document.getElementById("resultado").focus();
            control_continuar_cronometro();//pulsar para continuar y corregir suma
        }
        if (numero_operacion == 3 || numero_operacion == 4) {//resta
            let numero1 = Math.floor(Math.random() * 1000 + 200);
            let numero2 = Math.floor(Math.random() * numero1 + 100);
            while (numero1.toString() + "-" + numero2.toString() == numero_repetido_operacion) {
                numero1 = Math.floor(Math.random() * 1000 + 200);
                numero2 = Math.floor(Math.random() * numero1 + 100);
            }
            numero_repetido_operacion = numero1.toString() + "-" + numero2.toString();
            document.getElementById("body").innerHTML = "<svg class='home' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='1200px' height='1200px'><path  style='cursor: pointer;'onclick='salir_cronometro()'d='M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9 C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52 C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z'/></svg><h1 id='contador-tiempo'>" + Number(time.toFixed(1)) + "</h1><h3 id='ejercicio'class='ejercicio'>" + numero1 + "-" + numero2 + "</h3> <input type='button'class='racha-cronometro'id='racha-cronometro'value='" + racha + "' style='display:none;'><div class='div-resultado'><input id='resultado'class='resultado'type='number'onfocus='this.select()' autofocus></div> ";
            if (racha > 0 && racha <= 3) {//fondo azul oscuro, borde azul  y letra amarilla
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "radial-gradient(circle at 36.04% 11.65%, #a2e8ff 0, #7dd6ff 25%, #4fc4ff 50%, #00b2f9 75%, #00a0f2 100%)";
                document.getElementById("racha-cronometro").style.border = "2px #ffbd00 outset";
                document.getElementById("racha-cronometro").style.color = "#f1cb32";
            }
            else if (racha > 3 && racha <= 10) {//fondo verde, borde azul turques medio oscuro  y letra naranja
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "radial-gradient(circle at 30.93% -2.38%, #f2fa62 0, #ddfb62 8.33%, #c6fb63 16.67%, #aefa66 25%, #91f86b 33.33%, #6ff571 41.67%, #3cf278 50%, #00ee81 58.33%, #00eb8c 66.67%, #00e799 75%, #00e4a7 83.33%, #00e0b7 91.67%, #00ddc7 100%)";
                document.getElementById("racha-cronometro").style.border = "2px outset #d6ce15";
                document.getElementById("racha-cronometro").style.color = "#d68d09";
            }
            else if (racha > 10 && racha <= 19) {//fondo naranja, borde naranja oscuro  y letra dorada
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = " linear-gradient(170deg, #dbb355 0, #e2ac52 6.25%, #e8a34f 12.5%, #ec994d 18.75%, #f08e4c 25%, #f2824c 31.25%, #f4744e 37.5%, #f46550 43.75%, #f25353 50%, #ef3f58 56.25%, #eb295e 62.5%, #e70467 68.75%, #e00071 75%, #d8007c 81.25%, #cf0088 87.5%, #c30095 93.75%, #b500a2 100%)";
                document.getElementById("racha-cronometro").style.border = "2px outset #f13254";
                document.getElementById("racha-cronometro").style.color = "#b7f132";
            }
            else if (racha > 19) {//fondo rojo, borde rojo oscuro  y letra dorada
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "linear-gradient(320deg, #0073a2 0, #0073b5 3.57%, #0073c7 7.14%, #0073d6 10.71%, #0071e4 14.29%, #0070ee 17.86%, #006df6 21.43%, #0069fb 25%, #0064fc 28.57%, #005efb 32.14%, #0056f6 35.71%, #004bef 39.29%, #213ee4 42.86%, #642cd7 46.43%, #8607c8 50%, #9f00b7 53.57%, #b200a4 57.14%, #c00091 60.71%, #cb007d 64.29%, #d20069 67.86%, #d60054 71.43%, #d60041 75%, #d5002e 78.57%, #d0001a 82.14%, #ca0000 85.71%, #c20000 89.29%, #b80000 92.86%, #ad1800 96.43%, #a12f00 100%)";
                document.getElementById("racha-cronometro").style.border = "2px #00e09e outset";
                document.getElementById("racha-cronometro").style.color = "#00e09e";
            }
            else { }
            document.getElementById("resultado").focus();
            control_continuar_cronometro();//pulsar para continuar y corregir resta
        }
        if (numero_operacion == 5) {
            let numero1 = Math.floor(Math.random() * 100 + 15);
            let numero2 = Math.floor(Math.random() * 100 + 15);
            while (numero1.toString() + "*" + numero2.toString() == numero_repetido_operacion) {
                numero1 = Math.floor(Math.random() * 100 + 15);
                numero2 = Math.floor(Math.random() * 100 + 15);
            }
            numero_repetido_operacion = numero1.toString() + "*" + numero2.toString();
            document.getElementById("body").innerHTML = "<svg class='home' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='1200px' height='1200px'><path  style='cursor: pointer;'onclick='salir_cronometro()'d='M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9 C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52 C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z'/></svg><h1 id='contador-tiempo'>" + Number(time.toFixed(1)) + "</h1><h3 id='ejercicio'class='ejercicio'>" + numero1 + "*" + numero2 + "</h3> <input type='button'class='racha-cronometro'id='racha-cronometro'value='" + racha + "' style='display:none;'><div class='div-resultado'><input id='resultado'class='resultado'type='number'onfocus='this.select()' autofocus></div> ";
            if (racha > 0 && racha <= 3) {//fondo azul oscuro, borde azul  y letra amarilla
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "radial-gradient(circle at 36.04% 11.65%, #a2e8ff 0, #7dd6ff 25%, #4fc4ff 50%, #00b2f9 75%, #00a0f2 100%)";
                document.getElementById("racha-cronometro").style.border = "2px #ffbd00 outset";
                document.getElementById("racha-cronometro").style.color = "#f1cb32";
            }
            else if (racha > 3 && racha <= 10) {//fondo verde, borde azul turques medio oscuro  y letra naranja
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "radial-gradient(circle at 30.93% -2.38%, #f2fa62 0, #ddfb62 8.33%, #c6fb63 16.67%, #aefa66 25%, #91f86b 33.33%, #6ff571 41.67%, #3cf278 50%, #00ee81 58.33%, #00eb8c 66.67%, #00e799 75%, #00e4a7 83.33%, #00e0b7 91.67%, #00ddc7 100%)";
                document.getElementById("racha-cronometro").style.border = "2px outset #d6ce15";
                document.getElementById("racha-cronometro").style.color = "#d68d09";
            }
            else if (racha > 10 && racha <= 19) {//fondo naranja, borde naranja oscuro  y letra dorada
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = " linear-gradient(170deg, #dbb355 0, #e2ac52 6.25%, #e8a34f 12.5%, #ec994d 18.75%, #f08e4c 25%, #f2824c 31.25%, #f4744e 37.5%, #f46550 43.75%, #f25353 50%, #ef3f58 56.25%, #eb295e 62.5%, #e70467 68.75%, #e00071 75%, #d8007c 81.25%, #cf0088 87.5%, #c30095 93.75%, #b500a2 100%)";
                document.getElementById("racha-cronometro").style.border = "2px outset #f13254";
                document.getElementById("racha-cronometro").style.color = "#b7f132";
            }
            else if (racha > 19) {//fondo rojo, borde rojo oscuro  y letra dorada
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "linear-gradient(320deg, #0073a2 0, #0073b5 3.57%, #0073c7 7.14%, #0073d6 10.71%, #0071e4 14.29%, #0070ee 17.86%, #006df6 21.43%, #0069fb 25%, #0064fc 28.57%, #005efb 32.14%, #0056f6 35.71%, #004bef 39.29%, #213ee4 42.86%, #642cd7 46.43%, #8607c8 50%, #9f00b7 53.57%, #b200a4 57.14%, #c00091 60.71%, #cb007d 64.29%, #d20069 67.86%, #d60054 71.43%, #d60041 75%, #d5002e 78.57%, #d0001a 82.14%, #ca0000 85.71%, #c20000 89.29%, #b80000 92.86%, #ad1800 96.43%, #a12f00 100%)";
                document.getElementById("racha-cronometro").style.border = "2px #00e09e outset";
                document.getElementById("racha-cronometro").style.color = "#00e09e";
            }
            else { }
            document.getElementById("resultado").focus();
            control_continuar_cronometro();//pulsar para continuar y corregir multiplicacion
        }
        if (numero_operacion == 6) {
            let numero2 = Math.floor(Math.random() * 100 + 20);
            let numero1 = Math.floor(Math.random() * 100 + 15);
            while (numero1.toString() + "/" + numero2.toString() == numero_repetido_operacion) {
                numero2 = Math.floor(Math.random() * 100 + 20);
                numero1 = Math.floor(Math.random() * 100 + 15);
            }
            numero_repetido_operacion = numero1.toString() + "/" + numero2.toString();
            document.getElementById("body").innerHTML = "<svg class='home' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='1200px' height='1200px'><path  style='cursor: pointer;'onclick='salir_cronometro()'d='M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9 C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52 C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z'/></svg><h1 id='contador-tiempo'>" + Number(time.toFixed(1)) + "</h1><h3 id='ejercicio'class='ejercicio'>" + numero1 * numero2 + "/" + numero2 + "</h3><input type='button'class='racha-cronometro'id='racha-cronometro'value='" + racha + "' style='display:none;'><div class='div-resultado'><input id='resultado'class='resultado'type='number'onfocus='this.select()' autofocus></div> ";
            if (racha > 0 && racha <= 3) {//fondo azul oscuro, borde azul  y letra amarilla
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "radial-gradient(circle at 36.04% 11.65%, #a2e8ff 0, #7dd6ff 25%, #4fc4ff 50%, #00b2f9 75%, #00a0f2 100%)";
                document.getElementById("racha-cronometro").style.border = "2px #ffbd00 outset";
                document.getElementById("racha-cronometro").style.color = "#f1cb32";
            }
            else if (racha > 3 && racha <= 10) {//fondo verde, borde azul turques medio oscuro  y letra naranja
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "radial-gradient(circle at 30.93% -2.38%, #f2fa62 0, #ddfb62 8.33%, #c6fb63 16.67%, #aefa66 25%, #91f86b 33.33%, #6ff571 41.67%, #3cf278 50%, #00ee81 58.33%, #00eb8c 66.67%, #00e799 75%, #00e4a7 83.33%, #00e0b7 91.67%, #00ddc7 100%)";
                document.getElementById("racha-cronometro").style.border = "2px outset #d6ce15";
                document.getElementById("racha-cronometro").style.color = "#d68d09";
            }
            else if (racha > 10 && racha <= 19) {//fondo naranja, borde naranja oscuro  y letra dorada
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = " linear-gradient(170deg, #dbb355 0, #e2ac52 6.25%, #e8a34f 12.5%, #ec994d 18.75%, #f08e4c 25%, #f2824c 31.25%, #f4744e 37.5%, #f46550 43.75%, #f25353 50%, #ef3f58 56.25%, #eb295e 62.5%, #e70467 68.75%, #e00071 75%, #d8007c 81.25%, #cf0088 87.5%, #c30095 93.75%, #b500a2 100%)";
                document.getElementById("racha-cronometro").style.border = "2px outset #f13254";
                document.getElementById("racha-cronometro").style.color = "#b7f132";
            }
            else if (racha > 19) {//fondo rojo, borde rojo oscuro  y letra dorada
                document.getElementById("racha-cronometro").value = racha;
                document.getElementById("racha-cronometro").style.display = "block";
                document.getElementById("racha-cronometro").style.background = "linear-gradient(320deg, #0073a2 0, #0073b5 3.57%, #0073c7 7.14%, #0073d6 10.71%, #0071e4 14.29%, #0070ee 17.86%, #006df6 21.43%, #0069fb 25%, #0064fc 28.57%, #005efb 32.14%, #0056f6 35.71%, #004bef 39.29%, #213ee4 42.86%, #642cd7 46.43%, #8607c8 50%, #9f00b7 53.57%, #b200a4 57.14%, #c00091 60.71%, #cb007d 64.29%, #d20069 67.86%, #d60054 71.43%, #d60041 75%, #d5002e 78.57%, #d0001a 82.14%, #ca0000 85.71%, #c20000 89.29%, #b80000 92.86%, #ad1800 96.43%, #a12f00 100%)";
                document.getElementById("racha-cronometro").style.border = "2px #00e09e outset";
                document.getElementById("racha-cronometro").style.color = "#00e09e";
            }
            else { }
            document.getElementById("resultado").focus();
            control_continuar_cronometro();//pulsar para continuar y corregir division
        }
    }
    if (time >= 120) {
        document.getElementById("contador-tiempo").style.color = "rgb(0, 77, 232)";//azul
        document.getElementById("contador-tiempo").style.textShadow = "rgb(0, 69, 207) 0px 1px 0px, rgb(0, 69, 207) 0px 1.5px 0px, rgb(0, 69, 207) 0px 2px 0px, rgb(0, 69, 207) 0px 2.5px 0px, rgb(0, 51, 201) 0px 3px 0px, rgb(6, 56, 204) 0px 3.5px 0px, rgb(6, 56, 204) 0px 4px 0px";//azul
    }
    if (time < 120 && time >= 60) {
        document.getElementById("contador-tiempo").style.color = "rgb(16, 160, 13)";//verde
        document.getElementById("contador-tiempo").style.textShadow = " 0  1px  0px   rgb(0, 126, 36),0  1.5px  0px   rgb(0, 126, 36),0  2px  0px   rgb(0, 126, 36),0  2.5px  0px   rgb(0, 126, 36), 0  3px  0px   rgb(2, 103, 0), 0  3.5px  0px   rgb(2, 103, 0), 0  4px  0px   rgb(2, 103, 0)";
    }
    if (time < 60 && time >= 30) {
        document.getElementById("contador-tiempo").style.color = " #ffbf00";//amarillo
        document.getElementById("contador-tiempo").style.textShadow = "#b68900 0px 1px 0px,#b68900 0px 1.5px 0px,#b68900 0px 2px 0px,#b68900 0px 2.5px 0px, #927009 0px 3px 0px,#927009 0px 3.5px 0px,#927009 0px 4px 0px";
    }
    if (time < 30 && time >= 11) {
        document.getElementById("contador-tiempo").style.color = "rgb(255, 133, 43)";//naranja
        document.getElementById("contador-tiempo").style.textShadow = "  rgb(219, 99, 12) 0px 1px 0px,rgb(219, 99, 12) 0px 1.5px 0px,rgb(219, 99, 12) 0px 2px 0px,rgb(219, 99, 12) 0px 2.5px 0px, rgb(219, 99, 11) 0px 3px 0px,rgb(219, 99, 11) 0px 3.5px 0px,rgb(219, 99, 11) 0px 4px 0px";
    }
    if (time <= 10 && time > 0) {
        document.getElementById("contador-tiempo").style.color = "#ff4513";//rojo
        document.getElementById("contador-tiempo").style.textShadow = " #e5390b 0px 1px 0px,#e5390b 0px 1.5px 0px,#e5390b 0px 2px 0px,#e5390b 0px 2.5px 0px,#ca3108 0px 3px 0px,#ca3108 0px 3.5px 0px,#ca3108 0px 4px 0px";
        setTimeout(function () {
            document.getElementById("contador-tiempo").style.color = "rgb(255, 133, 43)";//naranja
            document.getElementById("contador-tiempo").style.textShadow = "  rgb(219, 99, 12) 0px 1px 0px,rgb(219, 99, 12) 0px 1.5px 0px,rgb(219, 99, 12) 0px 2px 0px,rgb(219, 99, 12) 0px 2.5px 0px, rgb(219, 99, 11) 0px 3px 0px,rgb(219, 99, 11) 0px 3.5px 0px,rgb(219, 99, 11) 0px 4px 0px";
        }, 225);
        setTimeout(function () {
            document.getElementById("contador-tiempo").style.color = "#ff4513";//rojo
            document.getElementById("contador-tiempo").style.textShadow = " #e5390b 0px 1px 0px,#e5390b 0px 1.5px 0px,#e5390b 0px 2px 0px,#e5390b 0px 2.5px 0px,#ca3108 0px 3px 0px,#ca3108 0px 3.5px 0px,#ca3108 0px 4px 0px";
        }, 650);
    }
    if (correccion_automatico_resultados_cronometro) {
        document.getElementById("resultado").addEventListener("keyup", () => {
            try {
                clearTimeout(corregir_automatico_delay);
            } catch (error) { }
            const corregir_automatico_delay =
                setTimeout(() => {
                    corregir_operacion_cronometro(true);
                }, 200);
        });
    }
}
function control_continuar_cronometro() {
    document.getElementById("resultado").addEventListener("keyup", function (event) {
        event.preventDefault();
        const resultado_usuario_revisada = document.getElementById("resultado").value.replaceAll(" ", "");//revisar
        if (event.keyCode === 13 && resultado_usuario_revisada != "" && resultado_usuario_revisada.length <= 8) {//aceptar
            corregir_operacion_cronometro();
        }
    });
}
function corregir_operacion_cronometro(corregido_automatico) {
    if (redondear_numero(eval(document.getElementById("ejercicio").innerHTML)) == document.getElementById("resultado").value) {
        aciertos++;
        racha++;
        if (racha > mejor_racha_partida) {
            mejor_racha_partida = racha;
        }
        document.getElementById("racha-cronometro").value = racha;
        document.getElementById("racha-cronometro").style.display = "block";
        if (aumento_tiempo_racha_cronometro == true) {
            time = time + 1.5;//añadir 2 segundos por acierto
        }
        else { }
        //sumar puntos
        if (dificultad_cronometro == 1) {//facil
            switch (racha) {
                case 1:
                    puntos++;
                    break;
                case 2 || 3 || 4:
                    puntos = puntos + 2;
                    break;
                case racha > 4 && racha <= 9:
                    puntos = puntos + 3;
                    break;
                case 10:
                    puntos = puntos + 5;
                    break;
                case racha > 10 && racha <= 15:
                    puntos = puntos + 6;
                    break;
                case racha > 15 && racha <= 19:
                    puntos = puntos + 7;
                    break;
                case 20:
                    puntos = puntos + 10;
                    break;
                case racha > 20 && racha <= 25:
                    puntos = puntos + 13;
                    break;
                case racha > 25 && racha <= 29:
                    puntos = puntos + 15;
                    break;
                case 30:
                    puntos = puntos + 20;
                    break;
                case racha > 30 && racha <= 39:
                    puntos = puntos + 23;
                    break;
                case racha > 30 && racha <= 39:
                    puntos = puntos + 23;
                    break;
                case 40:
                    puntos = puntos + 30;
                    break;
                case racha > 40 && racha != 50 && racha != 60:
                    puntos = puntos + 35;
                    break;
                case 50:
                    puntos = puntos + 45;
                    break;
                case 60://3s por operacion
                    puntos = puntos + 80;
                    break;
                case racha > 60:
                    puntos = puntos + 125;
                    break;
            }
        }
        else if (dificultad_cronometro == 2) {//dificil
            switch (racha) {
                case 1:
                    puntos++;
                    break;
                case 2 || 3 || 4:
                    puntos = puntos + 2;
                    break;
                case racha > 4 && racha <= 9:
                    puntos = puntos + 4;
                    break;
                case 10://18 segundos por operacion
                    puntos = puntos + 6;
                    break;
                case racha > 10 && racha <= 15:
                    puntos = puntos + 11;
                    break;
                case racha > 15 && racha <= 19:
                    puntos = puntos + 15;
                    break;
                case 20://9 segundos por operacion
                    puntos = puntos + 23;
                    break;
                case racha > 20 && racha <= 25:
                    puntos = puntos + 27;
                    break;
                case racha > 25 && racha <= 29:
                    puntos = puntos + 33;
                    break;
                case 30://6 segundos por operacion
                    puntos = puntos + 60;
                    break;
                case racha > 30 && racha <= 39:
                    puntos = puntos + 47;
                    break;
                case racha > 30 && racha <= 39:
                    puntos = puntos + 60;
                    break;
                case 40:
                    puntos = puntos + 80;
                    break;
                case racha > 40 && racha != 50 && racha != 60:
                    puntos = puntos + 85;
                    break;
                case 50:
                    puntos = puntos + 120;
                    break;
                case 60://3s por operacion
                    puntos = puntos + 150;
                    break;
                case racha > 60:
                    puntos = puntos + 170;
                    break;
            }
        }
        else if (dificultad_cronometro == 3) {
            switch (racha) {
                case 1:
                    puntos = puntos + 3;
                    break;
                case 2 || 3 || 4:
                    puntos = puntos + 5;
                    break;
                case racha > 4 && racha <= 9:
                    puntos = puntos + 9;
                    break;
                case 10://18 segundos por operacion
                    puntos = puntos + 18;
                    break;
                case racha > 10 && racha <= 15:
                    puntos = puntos + 25;
                    break;
                case racha > 15 && racha <= 19:
                    puntos = puntos + 33;
                    break;
                case 20://9 segundos por operacion
                    puntos = puntos + 45;
                    break;
                case racha > 20 && racha <= 25:
                    puntos = puntos + 48;
                    break;
                case racha > 25 && racha <= 29:
                    puntos = puntos + 55;
                    break;
                case 30://6 segundos por operacion
                    puntos = puntos + 80;
                    break;
                case racha > 30 && racha <= 39:
                    puntos = puntos + 75;
                    break;
                case racha > 30 && racha <= 39:
                    puntos = puntos + 90;
                    break;
                case 40:
                    puntos = puntos + 125;
                    break;
                case racha > 40 && racha < 60 && racha != 50 && racha != 60:
                    puntos = puntos + 150;
                    break;
                case 50:
                    puntos = puntos + 225;
                    break;
                case 60://3s por operacion
                    puntos = puntos + 280;
                    break;
                case racha > 60:
                    puntos = puntos + 225;
                    break;
            }
        }
        if (empezado == false) {
            empezado = true;
            empezar_cronometro();
        }
        crear_operacion_cronometro();
    }
    else if (corregido_automatico != true) {
        if (empezado == true) {
            fallos++;
            racha = 0;
            document.getElementById("racha-cronometro").value = racha;
            document.getElementById("racha-cronometro").style.display = "none";
            if (disminuir_tiempo_fallar_cronometro == true) {
                time = time - 2.5;//quitar 2 segundos por fallo
            }
            else { }
            crear_operacion_cronometro();
        }
        else {
            primera_operacion_cronometro(dificultad_cronometro);
        }
    }
    final_resultado = null;
}
function salir_cronometro() {
    clearInterval(temporizador);
    temporizador = null;
    time = null;
    racha = null;
    puntos = null;
    empezado = false;
    dificultad_cronometro = null;
    control_pagina(1);
}
function fin_cronometro() {
    //actualizar registros
    fetch('/base_datos/registros_cronometro_datos.json')
        .then(response => response.json())
        .then(datos => {
            let racha_partida = mejor_racha_partida;
            if (datos.mejor_racha > racha_partida) {
                racha_partida = datos.mejor_racha;
                if (racha_partida < 0) {
                    racha_partida = 0;
                }
            }
            let puntuacion_partida = puntos;
            if (datos.mejor_puntuacion > puntuacion_partida) {
                puntuacion_partida = datos.mejor_puntuacion;
                if (puntuacion_partida < 0) {
                    puntuacion_partida = 0;
                }
            }
            let aciertos_partida = aciertos;
            if (datos.mas_aciertos > aciertos_partida) {
                aciertos_partida = datos.mas_aciertos;
                if (aciertos_partida < 0) {
                    aciertos_partida = 0;
                }
            }
            //hoy
            let mejor_hoy_partida_puntos = puntos;
            let mejor_hoy_partida_racha = mejor_racha_partida;
            let mejor_hoy_partida_tiempo = tiempo_partida;
            let now = new Date();
            let hora = now.getHours();
            let minuto = now.getMinutes();
            if (hora < 10) { hora = "0" + hora; }
            if (minuto < 10) { minuto = "0" + minuto; }
            let mejor_hoy_partida_fecha = hora + ":" + minuto;
            if (datos.mejor_hoy_puntos > mejor_hoy_partida_puntos) {
                mejor_hoy_partida_puntos = datos.mejor_hoy_puntos;
                mejor_hoy_partida_racha = datos.mejor_hoy_mejor_racha;
                mejor_hoy_partida_tiempo = datos.mejor_hoy_tiempo_total;
                mejor_hoy_partida_fecha = datos.mejor_hoy_hora_partida;
            }
            //semana
            let mejor_semana_partida_puntos = mejor_hoy_partida_puntos;
            let mejor_semana_partida_racha = mejor_hoy_partida_racha;
            let mejor_semana_partida_tiempo = mejor_hoy_partida_tiempo;
            let mejor_semana_partida_fecha = mejor_hoy_partida_fecha;
            if (datos.mejor_semana_puntos > mejor_semana_partida_puntos) {
                mejor_semana_partida_puntos = datos.mejor_semana_puntos;
                mejor_semana_partida_racha = datos.mejor_semana_mejor_racha;
                mejor_semana_partida_tiempo = datos.mejor_semana_tiempo_total;
                mejor_semana_partida_fecha = datos.mejor_semana_hora_partida;
            }
            //mes
            let mejor_mes_partida_puntos = mejor_semana_partida_puntos;
            let mejor_mes_partida_racha = mejor_semana_partida_racha;
            let mejor_mes_partida_tiempo = mejor_semana_partida_tiempo;
            let mejor_mes_partida_fecha = mejor_semana_partida_fecha;
            if (datos.mejor_mes_puntos > mejor_mes_partida_puntos) {
                mejor_mes_partida_puntos = datos.mejor_mes_puntos;
                mejor_mes_partida_racha = datos.mejor_mes_mejor_racha;
                mejor_mes_partida_tiempo = datos.mejor_mes_tiempo_total;
                mejor_mes_partida_fecha = datos.mejor_mes_hora_partida;
            }
            //año
            let mejor_año_partida_puntos = mejor_mes_partida_puntos;
            let mejor_año_partida_racha = mejor_mes_partida_racha;
            let mejor_año_partida_tiempo = mejor_mes_partida_tiempo;
            let mejor_año_partida_fecha = mejor_mes_partida_fecha;
            if (datos.mejor_año_puntos > mejor_año_partida_puntos) {
                mejor_año_partida_puntos = datos.mejor_año_puntos;
                mejor_año_partida_racha = datos.mejor_año_mejor_racha;
                mejor_año_partida_tiempo = datos.mejor_año_tiempo_total;
                mejor_año_partida_fecha = datos.mejor_año_hora_partida;
            }
            //objeto js para guardar los nuevos datos 
            const objeto_js = {
                veces_jugado: datos.veces_jugado + 1,
                tiempo_jugando: datos.tiempo_jugando + tiempo_partida,

                promedio_total_mejor_racha_partida: promedio_total_mejor_racha_partida + mejor_racha_partida,
                promedio_total_puntuacion_partida: promedio_total_puntuacion_partida + puntos,

                aciertos_totales: aciertos_totales + aciertos,
                fallos_totales: fallos_totales + fallos,

                mejor_racha: racha_partida,
                mejor_puntuacion: puntuacion_partida,
                mas_aciertos: aciertos_partida,

                mejor_hoy_puntos: mejor_hoy_partida_puntos,
                mejor_hoy_mejor_racha: mejor_hoy_partida_racha,
                mejor_hoy_tiempo_total: mejor_hoy_partida_tiempo,
                mejor_hoy_hora_partida: mejor_hoy_partida_fecha,

                mejor_semana_puntos: mejor_semana_partida_puntos,
                mejor_semana_mejor_racha: mejor_semana_partida_racha,
                mejor_semana_tiempo_total: mejor_semana_partida_tiempo,
                mejor_semana_hora_partida: mejor_semana_partida_fecha,

                mejor_mes_puntos: mejor_mes_partida_puntos,
                mejor_mes_mejor_racha: mejor_mes_partida_racha,
                mejor_mes_tiempo_total: mejor_mes_partida_tiempo,
                mejor_mes_hora_partida: mejor_mes_partida_fecha,

                mejor_año_puntos: mejor_año_partida_puntos,
                mejor_año_mejor_racha: mejor_año_partida_racha,
                mejor_año_tiempo_total: mejor_año_partida_tiempo,
                mejor_año_hora_partida: mejor_año_partida_fecha,

            };
        });
    document.getElementById("body").innerHTML = "<div class='fondo-puntuaciones'><div class='puntuacion-actual'></div><div id='todas-puntuaciones'></div></div><img class='volver-inicio'onclick='primera_operacion_cronometro(" + dificultad_cronometro + ")'src='recursos/img_resetaer_ajustes.png'><img class='repetir-cronometro'onclick='control_pagina(1)'src='recursos/casa.img.png'>";
}