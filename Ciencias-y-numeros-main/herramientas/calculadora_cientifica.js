//version 0.8.1
//operaciones no permitidas (solo se permiten las que devuelvan 'undefined' al buscar, las que no se permiten si se buscan devuelve 'true')
let operaciones_no_permitidas_calculadora_cientifica = {};
//operacion usuario calculadora
let operacion_calculadora_cientifica_mostrar = "";
//datos guardado calculadora
let ultimo_resultado_guardado = "";//ultimo resultado guardado; se invoca con-->ANS
let penultimo_resultado_guardado = "";//penultimo resultado guardado; se invoca con-->PRANS
let antepenultimo_resultado_guardado = "";//antepenultimo resutlado guardado; se invoca con-->APRANS
let numero_usuario_guardado = "";//numero usuario guardado; se invoca con -->GANS ;se guarda con--> GANS =>
//datos tipo unidades guardadas
let grados_radiales = "";//pasar unidades a grados o radiales


function mostrar_calculadora_cientifica() {
    //mostrar
    document.getElementById("body").innerHTML = "<div class='div-fondo-calculadora-cientifica'><div class='div-fondo-pantalla-calculadora-cientifica'><div class='div-ordenar-pantalla-calculadora-cientifica'><input type='button'value=''placeholder=''id='pantalla-operacion-operacion-anterior-calculadora-cientifica'><input type='text'value=''placeholder='0' id='pantalla-operacion-resultado-calculadora-cientifica'onchange='guardar_caracteres_calculadora_cientifica()'></div></div><div class='div-cuerpo-botones-calculadora-cientifica'><div class='div-slider-zona-botones-calculadora-cientifica'><div class='div-slider-zona-superior-botones-calculadora-cientifica'id='div-slider-zona-superior-botones-calculadora-cientifica'></div><div class='div-slider-zona-inferior-botones-calculadora-cientifica'id='div-slider-zona-inferior-botones-calculadora-cientifica'></div></div></div></div>";

    //botones zona superior
    document.getElementById("div-slider-zona-superior-botones-calculadora-cientifica").innerHTML = "";
    //botones zona inferior
    //operaciones basicas
    document.getElementById("div-slider-zona-inferior-botones-calculadora-cientifica").innerHTML = "<input type='button'value='('class='bt-calculadora-cientifica-zona-inferior'id='bt-abrir-parentesis'onclick='escribir_abrir_parentesis_calculadora_cientifica()'style='width:10.5%;'><input type='button'value=')'class='bt-calculadora-cientifica-zona-inferior'id='bt-cerrar-parentesis'onclick='escribir_cerrar_parentesis_calculadora_cientifica()'style='width:10.5%;margin-left:5px;'><input type='button'value='.'class='bt-calculadora-cientifica-zona-inferior'id='bt-punto-decimal'onclick='escribir_punto_decimal_calculadora_cientifica()'><input type='button'value='C'class='bt-calculadora-cientifica-zona-inferior'id='bt-limpiar-operacion'onclick='limpiar_operacion_calculadora_cientifica()'><input type='button'value='CE'class='bt-calculadora-cientifica-zona-inferior'id='bt-limpiar-todas-operaciones'onclick='limpiar_todas_operaciones_calculadora_cientifica()'><input type='button'value='/'class='bt-calculadora-cientifica-zona-inferior'id='bt-dividir'onclick='escribir_division_calculadora_cientifica()'><input type='button'value='*'class='bt-calculadora-cientifica-zona-inferior'id='bt-multiplicar'onclick='escribir_multiplicacion_calculadora_cientifica()'><input type='button'value='-'class='bt-calculadora-cientifica-zona-inferior'id='bt-restar'onclick='escribir_resta_calculadora_cientifica()'><input type='button'value='+'class='bt-calculadora-cientifica-zona-inferior'id='bt-sumar'onclick='escribir_suma_calculadora_cientifica()'>";
    document.getElementById("div-slider-zona-inferior-botones-calculadora-cientifica").innerHTML += "<input type='button'value='6'class='bt-calculadora-cientifica-zona-inferior'id='bt-seis'onclick='escribir_numero_seis_calculadora_cientifica()'><input type='button'value='7'class='bt-calculadora-cientifica-zona-inferior'id='bt-siete'onclick='escribir_numero_siete_calculadora_cientifica()'><input type='button'value='8'class='bt-calculadora-cientifica-zona-inferior'id='bt-ocho'onclick='escribir_numero_ocho_calculadora_cientifica()'><input type='button'value='9'class='bt-calculadora-cientifica-zona-inferior'id='bt-nueve'onclick='escribir_numero_nueve_calculadora_cientifica()'><input type='button'value='2'class='bt-calculadora-cientifica-zona-inferior'id='bt-dos'onclick='escribir_numero_dos_calculadora_cientifica()'><input type='button'value='3'class='bt-calculadora-cientifica-zona-inferior'id='bt-tres'onclick='escribir_numero_tres_calculadora_cientifica()'><input type='button'value='4'class='bt-calculadora-cientifica-zona-inferior'id='bt-cuatro'onclick='escribir_numero_cuatro_calculadora_cientifica()'><input type='button'value='5'class='bt-calculadora-cientifica-zona-inferior'id='bt-cinco'onclick='escribir_numero_cinco_calculadora_cientifica()'><input type='button'value='0'class='bt-calculadora-cientifica-zona-inferior'id='bt-cero'style='width:47%;'onclick='escribir_numero_zero_calculadora_cientifica()'><input type='button'value='1'class='bt-calculadora-cientifica-zona-inferior'id='bt-uno'onclick='escribir_numero_uno_calculadora_cientifica()'><input type='button'value='='class='bt-calculadora-cientifica-zona-inferior'id='bt-calculadora-cientifica-calcular'onclick='calcular_operacion_calculadora_cientifica()'>";
    //bloquear caracteres iniciales
    operaciones_no_permitidas_calculadora_cientifica = {
        coma_vectorial: true,
        punto_decimal: true,
        multiplicacion: true,
        division: true,
        parentesis_cerrado: true,
        corchete_cerrado: true,
        porcentaje: true,
        potencias: true,
        raices: true
    }
    //bloquear cualquier tecla menos la de borrar
    document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode !== 8 && event.keyCode !== 46 && event.keyCode !== 13) {
            event.preventDefault();
        }
        else if (event.keyCode === 8 || event.keyCode === 46) {//aceptar
            borrar_caracteres_calculadora_cientifica();
        }
        else if (event.keyCode === 13) {
            calcular_operacion_calculadora_cientifica();
        }
    });
}

function calcular_operacion_calculadora_cientifica() {
    operacion_calculadora_cientifica_mostrar = document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value;
    let operacion_codigo_calculadora_cientifica = operacion_calculadora_cientifica_mostrar.toString();
    let actualizar_datos = true;
    operacion_calculadora_cientifica_mostrar = "";
    //arreglar errores escritura
    operacion_codigo_calculadora_cientifica = operacion_codigo_calculadora_cientifica.replaceAll(" ", "");
    operacion_codigo_calculadora_cientifica = operacion_codigo_calculadora_cientifica.replaceAll("++", "+");
    operacion_codigo_calculadora_cientifica = operacion_codigo_calculadora_cientifica.replaceAll("--", "-");
    operacion_codigo_calculadora_cientifica = operacion_codigo_calculadora_cientifica.replaceAll("**", "*");
    operacion_codigo_calculadora_cientifica = operacion_codigo_calculadora_cientifica.replaceAll("//", "/");
    operacion_codigo_calculadora_cientifica = operacion_codigo_calculadora_cientifica.replaceAll("..", ".");
    operacion_codigo_calculadora_cientifica = operacion_codigo_calculadora_cientifica.replaceAll(",,", ",");
    operacion_codigo_calculadora_cientifica = operacion_codigo_calculadora_cientifica.replaceAll("^^", "^");
    operacion_codigo_calculadora_cientifica = operacion_codigo_calculadora_cientifica.replaceAll("ππ", "π");
    operacion_codigo_calculadora_cientifica = operacion_codigo_calculadora_cientifica.replaceAll("π", Math.PI);
    operacion_codigo_calculadora_cientifica = operacion_codigo_calculadora_cientifica.replaceAll("fact", "FACT");
    operacion_codigo_calculadora_cientifica = operacion_codigo_calculadora_cientifica.replaceAll("gans", "GANS");
    operacion_codigo_calculadora_cientifica = operacion_codigo_calculadora_cientifica.replaceAll("aprans", "APRANS");
    operacion_codigo_calculadora_cientifica = operacion_codigo_calculadora_cientifica.replaceAll("prans", "PRANS");
    operacion_codigo_calculadora_cientifica = operacion_codigo_calculadora_cientifica.replaceAll("ans", "ANS");
    //comprobar si se pueden actualizar lso datos de guardado
    if (operacion_codigo_calculadora_cientifica.length == 4 && operacion_codigo_calculadora_cientifica[0] == "G" && operacion_codigo_calculadora_cientifica[1] == "A" && operacion_codigo_calculadora_cientifica[2] == "N" && operacion_codigo_calculadora_cientifica[3] == "S") {
        actualizar_datos = false;
    }
    if (operacion_codigo_calculadora_cientifica.length == 6 && operacion_codigo_calculadora_cientifica[0] == "a" && operacion_codigo_calculadora_cientifica[1] == "p" && operacion_codigo_calculadora_cientifica[2] == "r" && operacion_codigo_calculadora_cientifica[3] == "a" && operacion_codigo_calculadora_cientifica[4] == "n" && operacion_codigo_calculadora_cientifica[5] == "s") {
        actualizar_datos = false;
    }
    if (operacion_codigo_calculadora_cientifica.length == 5 && operacion_codigo_calculadora_cientifica[0] == "p" && operacion_codigo_calculadora_cientifica[1] == "r" && operacion_codigo_calculadora_cientifica[2] == "a" && operacion_codigo_calculadora_cientifica[3] == "n" && operacion_codigo_calculadora_cientifica[4] == "s") {
        actualizar_datos = false;
    }
    if (operacion_codigo_calculadora_cientifica.length == 3 && operacion_codigo_calculadora_cientifica[0] == "a" && operacion_codigo_calculadora_cientifica[1] == "n" && operacion_codigo_calculadora_cientifica[2] == "s") {
        actualizar_datos = false;
    }
    //pasar los ANS , PRANS , APRANS --> a sus valores correspondientes
    if (operacion_codigo_calculadora_cientifica[0] == "G" && operacion_codigo_calculadora_cientifica[1] == "A" && operacion_codigo_calculadora_cientifica[2] == "N" && operacion_codigo_calculadora_cientifica[3] == "S" && operacion_codigo_calculadora_cientifica[4] == "=" && operacion_codigo_calculadora_cientifica[5] == ">") {
        let operacion_codigo_calculadora_cientifica_temporal = operacion_codigo_calculadora_cientifica;
        operacion_codigo_calculadora_cientifica = "";
        for (let i = 6; i < operacion_codigo_calculadora_cientifica_temporal.length; i++) {
            operacion_codigo_calculadora_cientifica += operacion_codigo_calculadora_cientifica_temporal[i];
        }
        operacion_codigo_calculadora_cientifica = operacion_codigo_calculadora_cientifica.replaceAll("GANS", numero_usuario_guardado);
        operacion_codigo_calculadora_cientifica = operacion_codigo_calculadora_cientifica.replaceAll("APRANS", antepenultimo_resultado_guardado);
        operacion_codigo_calculadora_cientifica = operacion_codigo_calculadora_cientifica.replaceAll("PRANS", penultimo_resultado_guardado);
        operacion_codigo_calculadora_cientifica = operacion_codigo_calculadora_cientifica.replaceAll("ANS", ultimo_resultado_guardado);
        operacion_codigo_calculadora_cientifica = "GANS=>" + operacion_codigo_calculadora_cientifica;
    }
    else {
        operacion_codigo_calculadora_cientifica = operacion_codigo_calculadora_cientifica.replaceAll("GANS", numero_usuario_guardado);
        operacion_codigo_calculadora_cientifica = operacion_codigo_calculadora_cientifica.replaceAll("APRANS", antepenultimo_resultado_guardado);
        operacion_codigo_calculadora_cientifica = operacion_codigo_calculadora_cientifica.replaceAll("PRANS", penultimo_resultado_guardado);
        operacion_codigo_calculadora_cientifica = operacion_codigo_calculadora_cientifica.replaceAll("ANS", ultimo_resultado_guardado);
    }
    //buscar que tipo de operaciones tiene
    let operaciones_contiene = {
        potencias: false,
        raices: false,
        porcentaje: false
    };
    //buscar
    for (let i = 0; i < operacion_codigo_calculadora_cientifica.length; i++) {
        //potencias
        if ((!isNaN(Number(operacion_codigo_calculadora_cientifica[i])) || operacion_codigo_calculadora_cientifica[i] == ")") && operacion_codigo_calculadora_cientifica[i + 1] == "^" && (!isNaN(Number(operacion_codigo_calculadora_cientifica[i + 2])) || operacion_codigo_calculadora_cientifica[i + 2] === "(" || operacion_codigo_calculadora_cientifica[i + 2] === "-")) {
            operaciones_contiene.potencias = true;
        }
        //raices
        if ((!isNaN(Number(operacion_codigo_calculadora_cientifica[i])) || operacion_codigo_calculadora_cientifica[i] == ")") && operacion_codigo_calculadora_cientifica[i + 1] == "^" && operacion_codigo_calculadora_cientifica[i + 2] == "√" && operacion_codigo_calculadora_cientifica[i + 3] == "[") {
            operaciones_contiene.raices = true;
        }
        if ((!isNaN(operacion_codigo_calculadora_cientifica[i]) || operacion_codigo_calculadora_cientifica[i] == ")") && operacion_codigo_calculadora_cientifica[i + 1] == "%" && operacion_codigo_calculadora_cientifica[i + 2] == "[") {
            operaciones_contiene.porcentaje = true;
        }
        //porcentajes
    }
    /*convertir signos a codigo*/
    let error_traducir = false;
    //operaciones compuestas simples
    //potencias (terminado)
    if (operaciones_contiene.potencias && !error_traducir) {
        for (let i = 0; i < operacion_codigo_calculadora_cientifica.length; i++) {
            //encontrar
            if ((!isNaN(Number(operacion_codigo_calculadora_cientifica[i])) || operacion_codigo_calculadora_cientifica[i] == ")") && operacion_codigo_calculadora_cientifica[i + 1] == "^" && (!isNaN(Number(operacion_codigo_calculadora_cientifica[i + 2])) || operacion_codigo_calculadora_cientifica[i + 2] === "(" || operacion_codigo_calculadora_cientifica[i + 2] === "-")) {
                let base = "";
                let exponente = "";
                //coger base
                let cantidad_operaciones_abiertas = 0;
                let cantidad_operaciones_cerradas = 0;
                for (let j = i; j >= 0; j--) {
                    if (operacion_codigo_calculadora_cientifica[j] === ")") {
                        cantidad_operaciones_abiertas++;
                        base += operacion_codigo_calculadora_cientifica[j];
                    }
                    else if (operacion_codigo_calculadora_cientifica[j] === "(") {
                        cantidad_operaciones_cerradas++;
                        if (cantidad_operaciones_abiertas < cantidad_operaciones_cerradas) {
                            break;
                        }
                        else {
                            base += operacion_codigo_calculadora_cientifica[j];
                        }
                    }
                    else if (cantidad_operaciones_abiertas == 0 && (!isNaN(Number(operacion_codigo_calculadora_cientifica[j])) || operacion_codigo_calculadora_cientifica[j] === "." || (operacion_codigo_calculadora_cientifica[j] === "-" && operacion_codigo_calculadora_cientifica[j - 1] === "(" && isNaN(Number(operacion_codigo_calculadora_cientifica[j + 1]))))) {
                        base += operacion_codigo_calculadora_cientifica[j];
                    }
                    else if (cantidad_operaciones_abiertas == 0 && (operacion_codigo_calculadora_cientifica[j] === "-" && !isNaN(Number(operacion_codigo_calculadora_cientifica[j + 1])) && operacion_codigo_calculadora_cientifica[j - 1] == undefined)) {
                        base += operacion_codigo_calculadora_cientifica[j];
                    }
                    else if (cantidad_operaciones_abiertas == 0 && (operacion_codigo_calculadora_cientifica[j] === "+" || operacion_codigo_calculadora_cientifica[j] === "/" || operacion_codigo_calculadora_cientifica[j] === "*" || operacion_codigo_calculadora_cientifica[j] === "-" || operacion_codigo_calculadora_cientifica[j] === "[" || operacion_codigo_calculadora_cientifica[j] === "(")) {
                        break;
                    }
                    else if (cantidad_operaciones_abiertas != 0) {//texto, caracteres
                        base += operacion_codigo_calculadora_cientifica[j];
                    }
                    else {
                        error_traducir = true;
                        break;
                    }
                }
                cantidad_operaciones_abiertas = null;
                cantidad_operaciones_cerradas = null;
                if (!error_traducir) {
                    //ordenar base
                    let base_temporal = base;
                    base = "";
                    for (let j = base_temporal.length - 1; j >= 0; j--) {
                        base += base_temporal[j];
                    }
                    base_temporal = null;
                    base = base.toString();
                    //coger exponente
                    cantidad_operaciones_abiertas = 0;
                    cantidad_operaciones_cerradas = 0;
                    let negativos_permitidos = 1;
                    for (let j = i + 2; j < operacion_codigo_calculadora_cientifica.length; j++) {
                        if (operacion_codigo_calculadora_cientifica[j] === "(") {
                            cantidad_operaciones_abiertas++;
                            exponente += operacion_codigo_calculadora_cientifica[j];
                        }
                        else if (operacion_codigo_calculadora_cientifica[j] === ")") {
                            cantidad_operaciones_cerradas++;
                            if (cantidad_operaciones_abiertas < cantidad_operaciones_cerradas) {
                                break;
                            }
                            else {
                                exponente += operacion_codigo_calculadora_cientifica[j];
                            }
                        }
                        else if (cantidad_operaciones_abiertas == 0 && (!isNaN(Number(operacion_codigo_calculadora_cientifica[j])) || operacion_codigo_calculadora_cientifica[j] === "." || (operacion_codigo_calculadora_cientifica[j] === "-" && operacion_codigo_calculadora_cientifica[j - 1] === "^" && !isNaN(Number(operacion_codigo_calculadora_cientifica[j + 1]))))) {
                            if (operacion_codigo_calculadora_cientifica[j] === "-") {
                                negativos_permitidos--;
                                if (negativos_permitidos < 0) {
                                    break;
                                }
                            }
                            exponente += operacion_codigo_calculadora_cientifica[j];
                        }
                        else if (cantidad_operaciones_abiertas == 0 && (operacion_codigo_calculadora_cientifica[j] === "+" || operacion_codigo_calculadora_cientifica[j] === "/" || operacion_codigo_calculadora_cientifica[j] === "*" || operacion_codigo_calculadora_cientifica[j] === "-" || operacion_codigo_calculadora_cientifica[j] === "]" || operacion_codigo_calculadora_cientifica[j] === ")")) {
                            break;
                        }
                        else if (cantidad_operaciones_abiertas != 0) {//texto, caracteres
                            exponente += operacion_codigo_calculadora_cientifica[j];
                        }
                        else {
                            error_traducir = true;
                            break;
                        }
                    }
                    if (!error_traducir) {
                        exponente = exponente.toString();
                        //remplazar base ^ exponente --> Math.pow((base), (exponente))
                        let operacion_temporal_calculadora_cientifica = operacion_codigo_calculadora_cientifica;
                        operacion_codigo_calculadora_cientifica = "";
                        for (j = 0; j < operacion_temporal_calculadora_cientifica.length; j++) {
                            if (j == i - (base.length) + 1) {
                                operacion_codigo_calculadora_cientifica += "(Math.pow(" + eval(base) + "," + eval(exponente) + "))";
                                j += base.length + exponente.length + 1;
                            }
                            else {
                                operacion_codigo_calculadora_cientifica += operacion_temporal_calculadora_cientifica[j];
                            }
                        }
                        i = 0;
                    }
                    else {
                        break;
                    }
                }
                else {
                    break;
                }
            }
        }
    }
    //raices
    if (operaciones_contiene.raices && !error_traducir) {
        for (let i = 0; i < operacion_codigo_calculadora_cientifica.length; i++) {
            if ((!isNaN(Number(operacion_codigo_calculadora_cientifica[i])) || operacion_codigo_calculadora_cientifica[i] === ")") && operacion_codigo_calculadora_cientifica[i + 1] === "^" && operacion_codigo_calculadora_cientifica[i + 2] === "√" && operacion_codigo_calculadora_cientifica[i + 3] === "[") {
                let exponente_raiz = "";
                let numero_interno_raiz = "";
                //coger exponente raiz
                let cantidad_operaciones_abiertas = 0;
                let cantidad_operaciones_cerradas = 0;
                for (let j = i; j >= 0; j--) {
                    if (operacion_codigo_calculadora_cientifica[j] === ")") {
                        cantidad_operaciones_abiertas++;
                        exponente_raiz += operacion_codigo_calculadora_cientifica[j];
                    }
                    else if (operacion_codigo_calculadora_cientifica[j] === "(") {
                        cantidad_operaciones_cerradas++;
                        if (cantidad_operaciones_cerradas <= cantidad_operaciones_abiertas) {
                            exponente_raiz += operacion_codigo_calculadora_cientifica[j];
                        }
                        else {
                            break;
                        }
                    }
                    else if (cantidad_operaciones_abiertas == 0 && (!isNaN(Number(operacion_codigo_calculadora_cientifica[j])) || operacion_codigo_calculadora_cientifica[j] === "." || (operacion_codigo_calculadora_cientifica[j] === "-" && operacion_codigo_calculadora_cientifica[j - 1] === "(" && isNaN(Number(operacion_codigo_calculadora_cientifica[j + 1]))))) {
                        exponente_raiz += operacion_codigo_calculadora_cientifica[j];
                    }
                    else if (cantidad_operaciones_abiertas == 0 && (operacion_codigo_calculadora_cientifica[j] === "-" && !isNaN(Number(operacion_codigo_calculadora_cientifica[j + 1])) && operacion_codigo_calculadora_cientifica[j - 1] == undefined)) {
                        exponente_raiz += operacion_codigo_calculadora_cientifica[j];
                    }
                    else if (cantidad_operaciones_abiertas == 0 && (operacion_codigo_calculadora_cientifica[j] === "+" || operacion_codigo_calculadora_cientifica[j] === "/" || operacion_codigo_calculadora_cientifica[j] === "*" || operacion_codigo_calculadora_cientifica[j] === "-" || operacion_codigo_calculadora_cientifica[j] === "[" || operacion_codigo_calculadora_cientifica[j] === "(")) {
                        break;
                    }
                    else if (cantidad_operaciones_abiertas != 0) {//texto, caracteres
                        exponente_raiz += operacion_codigo_calculadora_cientifica[j];
                    }
                    else {
                        error_traducir = true;
                        break;
                    }
                }
                cantidad_operaciones_abiertas = null;
                cantidad_operaciones_cerradas = null;
                if (!error_traducir) {
                    //ordenar exponente
                    let exponente_temporal = exponente_raiz;
                    exponente_raiz = "";
                    for (let j = exponente_temporal.length - 1; j >= 0; j--) {
                        exponente_raiz += exponente_temporal[j];
                    }
                    exponente_temporal = null;
                    exponente_raiz = exponente_raiz.toString();
                    console.log("ex1: "+exponente_raiz);
                    //coger numero interno ded la raiz
                    cantidad_operaciones_abiertas = 0;
                    cantidad_operaciones_cerradas = 0;
                    for (let j = i + 3; j < operacion_codigo_calculadora_cientifica.length; j++) {
                        if (operacion_codigo_calculadora_cientifica[j] == "[") {
                            cantidad_operaciones_abiertas++;
                            if (cantidad_operaciones_abiertas == 1) {//nada
                                if (cantidad_operaciones_abiertas == cantidad_operaciones_cerradas) {
                                    break;
                                }
                            }
                            else if (cantidad_operaciones_abiertas == cantidad_operaciones_cerradas) {//terminar
                                break;
                            }
                            else {//añadir
                                numero_interno_raiz += operacion_codigo_calculadora_cientifica[j];
                            }
                        }
                        else if (operacion_codigo_calculadora_cientifica[j] == "]") {
                            cantidad_operaciones_cerradas++;
                            if (cantidad_operaciones_cerradas == 1) {//nada
                                if (cantidad_operaciones_abiertas == cantidad_operaciones_cerradas) {
                                    break;
                                }
                            }
                            else if (cantidad_operaciones_abiertas == cantidad_operaciones_cerradas) {//terminar
                                break;
                            }
                            else if (cantidad_operaciones_abiertas < cantidad_operaciones_cerradas) {
                                break;
                            }
                            else {//añadir
                                numero_interno_raiz += operacion_codigo_calculadora_cientifica[j];
                            }
                        }
                        else if (cantidad_operaciones_abiertas == 0) {//roto
                            error_traducir = true;
                            break;
                        }
                        else if (cantidad_operaciones_abiertas != 0) {
                            numero_interno_raiz += operacion_codigo_calculadora_cientifica[j];
                        }
                        else {
                            error_traducir = true;
                            break;
                        }
                    }
                    cantidad_operaciones_abiertas = null;
                    cantidad_operaciones_cerradas = null;
                    //remplazar exponente^√[numero] --> Math.pow(numero,1/(exponente))
                    if (!error_traducir) {
                        numero_interno_raiz = numero_interno_raiz.toString();
                        let operacion_temporal_calculadora_cientifica = operacion_codigo_calculadora_cientifica;
                        operacion_codigo_calculadora_cientifica = "";
                        for (let j = 0; j < operacion_temporal_calculadora_cientifica.length; j++) {
                            if (j == i - (exponente_raiz.length) + 1) {
                                operacion_codigo_calculadora_cientifica += ("(Math.pow(" + numero_interno_raiz + ",1/(" + exponente_raiz + ")))").toString();
                                j += exponente_raiz.length + 3 + numero_interno_raiz.length;
                            }
                            else {
                                operacion_codigo_calculadora_cientifica += operacion_temporal_calculadora_cientifica[j];
                            }
                        }
                        operacion_temporal_calculadora_cientifica = null;
                        i = 0;
                    }
                }
                else {
                    break;
                }
            }
        }
    }
    //porcentaje
    if (operaciones_contiene.porcentaje && !error_traducir) {
        for (let i = 0; i < operacion_codigo_calculadora_cientifica.length; i++) {
            if ((!isNaN(operacion_codigo_calculadora_cientifica[i]) || operacion_codigo_calculadora_cientifica[i] == ")") && operacion_codigo_calculadora_cientifica[i + 1] == "%" && operacion_codigo_calculadora_cientifica[i + 2] == "[") {
                let cantidad_operaciones_corchete_dentro = 0;
                //contar corchetes
                let cantidad_corchetes_cerrados = 0;
                for (let j = i + 2; j < operacion_codigo_calculadora_cientifica.length; j++) {
                    if (operacion_codigo_calculadora_cientifica[j] == "[") {
                        cantidad_operaciones_corchete_dentro++;
                    }
                    else if (cantidad_operaciones_corchete_dentro[j] == "]") {
                        cantidad_corchetes_cerrados++;
                        if (cantidad_corchetes_cerrados == cantidad_operaciones_corchete_dentro) {
                            break;
                        }
                    }
                }
                cantidad_operaciones_corchete_dentro--;
                cantidad_corchetes_cerrados = null;
                let numero_sin_porcentaje = "";
                let numero_porcentaje = "";
                //coger numero antes del porcentaje
                let cantidad_operaciones_parentesis_numero_anterior = 0;
                if (operacion_codigo_calculadora_cientifica[i] == ")") {
                    let cantidad_operaciones_parentesis_abierto = 0;
                    for (let j = i; j >= 0; j--) {
                        if (operacion_codigo_calculadora_cientifica[j] == ")") {
                            cantidad_operaciones_parentesis_numero_anterior++;
                        }
                        else if (operacion_codigo_calculadora_cientifica[j] == "(") {
                            cantidad_operaciones_parentesis_abierto++;
                            if (cantidad_operaciones_parentesis_abierto == cantidad_operaciones_parentesis_numero_anterior) {
                                break;
                            }
                        }
                    }
                }
                for (let j = i; j >= 0; j--) {
                    if ((!isNaN(operacion_codigo_calculadora_cientifica[j]) || operacion_codigo_calculadora_cientifica[j] == ".") || (cantidad_operaciones_parentesis_numero_anterior > 0 && operacion_codigo_calculadora_cientifica[j] == "(") || operacion_codigo_calculadora_cientifica[j] == ")") {
                        cantidad_operaciones_parentesis_numero_anterior--;
                        if (cantidad_operaciones_parentesis_numero_anterior == 0) {
                            break;
                        }
                        else {
                            numero_sin_porcentaje += operacion_codigo_calculadora_cientifica[j];
                        }
                    }
                    else {
                        break;
                    }
                }
                //ordenar numero antes del porcentaje
                let numero_sin_porcentaje_temporal = numero_sin_porcentaje;
                numero_sin_porcentaje = "";
                for (let j = numero_sin_porcentaje_temporal.length - 1; j >= 0; j--) {
                    numero_sin_porcentaje += numero_sin_porcentaje_temporal[j];
                }
                numero_sin_porcentaje_temporal = null;
                //coger numero despues del porcentaje
                for (let j = i + 3; j < operacion_codigo_calculadora_cientifica.length; j++) {
                    if (operacion_codigo_calculadora_cientifica[j] != "]") {
                        numero_porcentaje += operacion_codigo_calculadora_cientifica[j];
                    }
                    else {
                        //comprobar si el corchete pertenece a esta operacion
                        cantidad_operaciones_corchete_dentro--;
                        if (cantidad_operaciones_corchete_dentro == 0) {
                            break;
                        }
                    }
                }
                //remplar n%[m] --> (n/100*m)
                let operacion_temporal_calculadora_cientifica = operacion_codigo_calculadora_cientifica;
                operacion_codigo_calculadora_cientifica = "";
                for (let j = 0; j < operacion_temporal_calculadora_cientifica.length; j++) {
                    if (j == (i - numero_sin_porcentaje.length) + 1) {
                        operacion_codigo_calculadora_cientifica += ("((" + numero_sin_porcentaje + "/100)*(" + numero_porcentaje + "))").toString();
                        j += numero_sin_porcentaje.length + 2 + numero_porcentaje.length;
                    }
                    else {
                        operacion_codigo_calculadora_cientifica += operacion_temporal_calculadora_cientifica[j];
                    }
                }
                operacion_temporal_calculadora_cientifica = null;
            }
        }
    }
    console.log(operacion_codigo_calculadora_cientifica);
    //calcular resultado
    if (!error_traducir) {
        let resultado_mostrar = "";
        //calcular normal
        if (!isNaN(eval(operacion_codigo_calculadora_cientifica)) && isFinite(eval(operacion_codigo_calculadora_cientifica))) {//calcular operaciones con decimales
            if ((eval(operacion_codigo_calculadora_cientifica)) % 1 == 0) {
                resultado_mostrar = BigInt(eval(operacion_codigo_calculadora_cientifica));
                resultado_mostrar = resultado_mostrar.toString();
            }
            else {
                let resultado_decimales = eval(operacion_codigo_calculadora_cientifica);
                resultado_decimales = (resultado_decimales.toString()).split(".");
                if (resultado_decimales[1].length < 10) {
                    resultado_mostrar = (eval(operacion_codigo_calculadora_cientifica)).toFixed(resultado_decimales[1].length);
                }
                else {
                    resultado_mostrar = (eval(operacion_codigo_calculadora_cientifica)).toFixed(10);
                }
            }
            resultado_mostrar = eval(operacion_codigo_calculadora_cientifica);
        }
        else if (!isFinite(eval(operacion_codigo_calculadora_cientifica)) && !isNaN(eval(operacion_codigo_calculadora_cientifica))) {
            resultado_mostrar = "Infinite";
        }
        else {//error de sintaxis
            resultado_mostrar = "Syntax ERROR";
        }
        //si da error comprobar si es un vector
        if (resultado_mostrar == "Syntax ERROR") {
            let vector1 = "";
            let vector2 = "";
            let vector3 = "";
            let vector4 = "";
            let operacion_vectores = "";
            let error_estructura = false;
            let requisitos_parentesis_abiertos = 2;
            let requisitos_parentesis_cerrados = 2;
            let requisitos_comas = 2;
            let requisitos_operaciones_entre_vectores = 1;
            //comprobar estructura y recoger datos
            for (let i = 0; i < operacion_codigo_calculadora_cientifica.length; i++) {
                //comprobar estructura--> (n,m)+(a,b)
                if (operacion_codigo_calculadora_cientifica[i] == "(") {
                    requisitos_parentesis_abiertos--;
                    if (requisitos_parentesis_abiertos < 0) {
                        error_estructura = true;
                        break;
                    }
                }
                else if (operacion_codigo_calculadora_cientifica[i] == ")") {
                    requisitos_parentesis_cerrados--;
                    if (requisitos_parentesis_cerrados == 0) {
                        break;
                    }
                    else if (requisitos_parentesis_cerrados < 0) {
                        error_estructura = true;
                        break;
                    }
                }
                else if (operacion_codigo_calculadora_cientifica[i] == ",") {
                    requisitos_comas--;
                    if (requisitos_comas < 0) {
                        error_estructura = true;
                        break;
                    }
                }
                else if ((requisitos_parentesis_abiertos == 1 && requisitos_parentesis_cerrados == 1 && requisitos_comas == 1) && (operacion_codigo_calculadora_cientifica[i] == "+" || operacion_codigo_calculadora_cientifica[i] == "-" || operacion_codigo_calculadora_cientifica[i] == "*" || operacion_codigo_calculadora_cientifica[i] == "/")) {
                    requisitos_operaciones_entre_vectores--;
                    operacion_vectores = operacion_codigo_calculadora_cientifica[i];
                    if (requisitos_operaciones_entre_vectores < 0) {
                        error_estructura = true;
                        break;
                    }
                }
                else if (requisitos_parentesis_abiertos == 1 && requisitos_parentesis_cerrados == 2 && requisitos_comas == 2) {//sumar vector1
                    vector1 += operacion_codigo_calculadora_cientifica[i];
                }
                else if (requisitos_parentesis_abiertos == 1 && requisitos_parentesis_cerrados == 2 && requisitos_comas == 1) {//sumar vector2
                    vector2 += operacion_codigo_calculadora_cientifica[i];
                }
                else if (requisitos_parentesis_abiertos == 0 && requisitos_parentesis_cerrados == 1 && requisitos_comas == 1) {//sumar vector3
                    vector3 += operacion_codigo_calculadora_cientifica[i];
                }
                else if (requisitos_parentesis_abiertos == 0 && requisitos_parentesis_cerrados == 1 && requisitos_comas == 0) {//sumar vector4
                    vector4 += operacion_codigo_calculadora_cientifica[i];
                }
            }
            //comprobar si cumple los requisitos
            if (requisitos_parentesis_abiertos != 0 && requisitos_parentesis_cerrados != 0 && requisitos_comas != 0 && requisitos_operaciones_entre_vectores != 0) {
                error_estructura = true;
            }
            //calcular operacion vectores
            if (!error_estructura && !isNaN(eval(vector1)) && !isNaN(eval(vector2)) && !isNaN(eval(vector3)) && !isNaN(eval(vector4))) {//calcular
                error_estructura = null;
                vector1 = eval(vector1);
                vector2 = eval(vector2);
                vector3 = eval(vector3);
                vector4 = eval(vector4);
                if (operacion_vectores == "+") {//sumar vectores

                }
                if (operacion_vectores == "-") {//restar vectores

                }
                if (operacion_vectores == "*") {//multiplicar vectores

                }
                if (operacion_vectores == "/") {//dividir vectores

                }
            }
        }
        //si da error comprobar si es la funcion FACT=>([numerador]/[denominador])
        if (resultado_mostrar == "Syntax ERROR") {
            //comprobar estructura y recoger datos --> FACT[4]/[16]-->[1]/[4]
            if (operacion_codigo_calculadora_cientifica[0] == "F" && operacion_codigo_calculadora_cientifica[1] == "A" && operacion_codigo_calculadora_cientifica[2] == "C" && operacion_codigo_calculadora_cientifica[3] == "T" && operacion_codigo_calculadora_cientifica[4] == "=" && operacion_codigo_calculadora_cientifica[5] == ">") {
                let numerador = "";
                let denominador = "";
                let error_estructura = false;
                let requisitos_corchetes_abiertos = 2;
                let requisitos_corchetes_cerrados = 2;
                let requisitos_division = 1;
                let cantidad_corchetes_cerrados_operaciones = 0;
                for (let i = 6; i < operacion_codigo_calculadora_cientifica.length; i++) {
                    if (operacion_codigo_calculadora_cientifica[i] == "[") {
                        if (cantidad_corchetes_cerrados_operaciones == 0) {
                            requisitos_corchetes_abiertos--;
                            if (requisitos_corchetes_abiertos < 0) {
                                error_estructura = true;
                                break;
                            }
                        }
                        else {
                            if (requisitos_corchetes_abiertos == 1 && requisitos_corchetes_cerrados == 2) {
                                numerador += operacion_codigo_calculadora_cientifica[i];
                            }
                            else if (requisitos_corchetes_abiertos == 0 && requisitos_corchetes_cerrados == 1) {
                                denominador += operacion_codigo_calculadora_cientifica[i];
                            }
                        }
                    }
                    else if (operacion_codigo_calculadora_cientifica[i] == "]") {
                        if (cantidad_corchetes_cerrados_operaciones == 0) {
                            requisitos_corchetes_cerrados--;
                            if (requisitos_corchetes_cerrados < 0) {
                                error_estructura = true;
                                break;
                            }
                        }
                        else {
                            cantidad_corchetes_cerrados_operaciones--;
                            if (cantidad_corchetes_cerrados_operaciones > 0) {
                                if (requisitos_corchetes_cerrados == 1 && requisitos_corchetes_cerrados == 2) {
                                    numerador += operacion_codigo_calculadora_cientifica[i];
                                }
                                else if (requisitos_corchetes_cerrados == 0 && requisitos_corchetes_cerrados == 1) {
                                    denominador += operacion_codigo_calculadora_cientifica[i];
                                }
                            }
                        }
                    }
                    else if (operacion_codigo_calculadora_cientifica[i] == "/") {
                        if (requisitos_corchetes_abiertos == 1 && requisitos_corchetes_cerrados == 1 && cantidad_corchetes_cerrados_operaciones == 0) {
                            requisitos_division--;
                            if (requisitos_division < 0) {
                                error_estructura = true;
                                break;
                            }
                        }
                        else {
                            if (requisitos_corchetes_abiertos == 1 && requisitos_corchetes_cerrados == 2) {
                                numerador += operacion_codigo_calculadora_cientifica[i];
                            }
                            else if (requisitos_corchetes_abiertos == 0 && requisitos_corchetes_cerrados == 1) {
                                denominador += operacion_codigo_calculadora_cientifica[i];
                            }
                        }
                    }
                    else if (requisitos_corchetes_abiertos == 1 && requisitos_corchetes_cerrados == 2) {
                        if (cantidad_corchetes_cerrados_operaciones == 0) {
                            //contar corchetes
                            let cantidad_corchetes_abiertos = 0;
                            for (let j = 6; j < operacion_codigo_calculadora_cientifica.length; j++) {
                                if (operacion_codigo_calculadora_cientifica[j] == "[") {
                                    cantidad_corchetes_abiertos++;
                                }
                                else if (operacion_codigo_calculadora_cientifica[j] == "]") {
                                    cantidad_corchetes_cerrados_operaciones++;
                                    if (cantidad_corchetes_cerrados_operaciones == cantidad_corchetes_abiertos) {
                                        break;
                                    }
                                }
                            }
                            cantidad_corchetes_cerrados_operaciones--;
                        }
                        numerador += operacion_codigo_calculadora_cientifica[i];
                    }
                    else if (requisitos_corchetes_abiertos == 0 && requisitos_corchetes_cerrados == 1) {
                        if (cantidad_corchetes_cerrados_operaciones == 0) {
                            //contar corchetes
                            let cantidad_corchetes_abiertos = 0;
                            for (let j = 6 + 2 + numerador.length; j < operacion_codigo_calculadora_cientifica.length; j++) {
                                if (operacion_codigo_calculadora_cientifica[j] == "[") {
                                    cantidad_corchetes_abiertos++;
                                }
                                else if (operacion_codigo_calculadora_cientifica[j] == "]") {
                                    cantidad_corchetes_cerrados_operaciones++;
                                    if (cantidad_corchetes_cerrados_operaciones == cantidad_corchetes_abiertos) {
                                        break;
                                    }
                                }
                            }
                            cantidad_corchetes_cerrados_operaciones--;
                        }
                        denominador += operacion_codigo_calculadora_cientifica[i];
                    }
                }
                //comprobar si cumple los requisitos
                if (!(requisitos_corchetes_abiertos == 0 && requisitos_corchetes_cerrados == 0 && requisitos_division == 0)) {
                    error_estructura = true;
                }
                //calcular simplificar fraccion
                if (!error_estructura && !isNaN(eval(numerador)) && !isNaN(eval(denominador))) {
                    numerador = eval(numerador);
                    denominador = eval(denominador);
                    let primos_numerador = descomponer_primos_numero(numerador);
                    let primos_denominador = descomponer_primos_numero(denominador);
                    primos_numerador = primos_numerador.split(",");
                    primos_denominador = primos_denominador.split(",");
                    if (!primos_denominador.length > 1) {
                        primos_denominador.push("1");
                    }
                    if (!primos_numerador.length > 1) {
                        primos_numerador.push("1");
                    }
                    //ordenar de menor a mayor
                    primos_numerador = primos_numerador.sort(function (a, b) { return a - b });
                    primos_denominador = primos_denominador.sort(function (a, b) { return a - b });
                    //buscar numeros primos compartidos
                    let numeros_compartidos = "";
                    let veces_repetir_bucle_i = 0;
                    let veces_repetir_bucle_j = 0;
                    if (primos_numerador.length > primos_denominador.length) {
                        veces_repetir_bucle_i = primos_denominador.length;
                        veces_repetir_bucle_j = primos_numerador.length;
                        //buscar
                        for (let i = 0; i < veces_repetir_bucle_i; i++) {
                            //denominador
                            for (let j = 0; j < veces_repetir_bucle_j; j++) {
                                //numerador
                                if (primos_denominador[i] == primos_numerador[j]) {
                                    if (numeros_compartidos == "") {
                                        numeros_compartidos += primos_denominador[i];
                                    }
                                    else {
                                        numeros_compartidos += "," + primos_denominador[i];
                                    }
                                    primos_denominador[i] = "0";
                                    primos_numerador[j] = "0";
                                    break;
                                }
                            }
                        }
                    }
                    else {
                        veces_repetir_bucle_i = primos_numerador.length;
                        veces_repetir_bucle_j = primos_denominador.length;
                        for (let i = 0; i < veces_repetir_bucle_i; i++) {
                            //numerador
                            for (let j = 0; j < veces_repetir_bucle_j; j++) {
                                //denominador
                                if (primos_numerador[i] == primos_denominador[j]) {
                                    if (numeros_compartidos == "") {
                                        numeros_compartidos += primos_numerador[i];
                                    }
                                    else {
                                        numeros_compartidos += "," + primos_numerador[i];
                                    }
                                    primos_numerador[i] = "0";
                                    primos_denominador[j] = "0";
                                    break;
                                }
                            }
                        }
                    }
                    veces_repetir_bucle_j = null;
                    veces_repetir_bucle_i = null;
                    numeros_compartidos = numeros_compartidos.split(",");
                    //reducir fraccion
                    let denominador_temporal = denominador;
                    let numerador_temporal = numerador;
                    if (numeros_compartidos.length > 0) {
                        for (let i = 0; i < numeros_compartidos.length; i++) {
                            numerador /= numeros_compartidos[i];
                            denominador /= numeros_compartidos[i];
                        }
                    }
                    //resultado mostrar
                    if ((numerador >= 0 || numerador < 0) && (denominador >= 0 || denominador < 0)) {
                        if (!isFinite(numerador)) {
                            numerador = numerador_temporal;
                        }
                        if (!isFinite(denominador)) {
                            denominador = denominador_temporal;
                        }
                        resultado_mostrar = ("[" + numerador + "]/[" + denominador + "]").toString();
                    }
                    else {
                        resultado_mostrar = "Syntax ERROR";
                    }
                    denominador_temporal = null;
                    numerador_temporal = null;
                }
            }
        }
        //si da error comprobar si es la funcion GANS=>(guardar numero | operaciones)
        if (resultado_mostrar == "Syntax ERROR") {
            if (operacion_codigo_calculadora_cientifica[0] == "G" && operacion_codigo_calculadora_cientifica[1] == "A" && operacion_codigo_calculadora_cientifica[2] == "N" && operacion_codigo_calculadora_cientifica[3] == "S" && operacion_codigo_calculadora_cientifica[4] == "=" && operacion_codigo_calculadora_cientifica[5] == ">") {
                numero_usuario_guardado = "";
                if (operacion_codigo_calculadora_cientifica[6] != "[") {//guardar resultado de la operacion guardada
                    for (let i = 6; i < operacion_codigo_calculadora_cientifica.length; i++) {
                        numero_usuario_guardado += operacion_codigo_calculadora_cientifica[i];
                    }
                    numero_usuario_guardado = eval(numero_usuario_guardado);
                    resultado_mostrar = "";
                }
                else if (operacion_codigo_calculadora_cientifica[6] == "[") {//guardar operacion guardada y no el resultado
                    let cantidad_operaciones_corchete_dentro = 0;
                    //contar corchetes
                    let cantidad_corchetes_cerrados = 0;
                    for (let i = 6; i < operacion_codigo_calculadora_cientifica.length; i++) {
                        if (operacion_codigo_calculadora_cientifica[i] == "[") {
                            cantidad_operaciones_corchete_dentro++;
                        }
                        else if (operacion_codigo_calculadora_cientifica[i] == "]") {
                            cantidad_corchetes_cerrados++;
                            if (cantidad_corchetes_cerrados == cantidad_operaciones_corchete_dentro) {
                                break;
                            }
                        }
                    }
                    //guardar operaciones
                    for (let i = 7; i < operacion_codigo_calculadora_cientifica.length; i++) {
                        if (operacion_codigo_calculadora_cientifica[i] == "]") {
                            cantidad_operaciones_corchete_dentro--;
                            if (cantidad_operaciones_corchete_dentro == 0) {
                                break;
                            }
                            else {
                                numero_usuario_guardado += operacion_codigo_calculadora_cientifica[i];
                            }
                        }
                        else {
                            numero_usuario_guardado += operacion_codigo_calculadora_cientifica[i];
                        }
                    }
                    resultado_mostrar = "";
                }
            }
        }

        //acomodar datos + guardar datos + mostrar resultado en pantalla
        if (resultado_mostrar != "Syntax ERROR") {
            //acomodar
            let resultado_mostrar_temporal = resultado_mostrar;//se guardara en el ANS

            //guardar datos
            if (actualizar_datos == true) {
                /*APRANS*/antepenultimo_resultado_guardado = penultimo_resultado_guardado;
                /*PRANS*/penultimo_resultado_guardado = ultimo_resultado_guardado;
                /*ANS*/ultimo_resultado_guardado = ("(" + resultado_mostrar_temporal + ")").toString();
            }
            //mostrar pantalla
            document.getElementById("pantalla-operacion-operacion-anterior-calculadora-cientifica").value = document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value;
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = resultado_mostrar;
            operacion_calculadora_cientifica_mostrar = resultado_mostrar;
        }
        else {
            mensaje_sintax_error_calculadora_cientifica();
        }
    }
}

//bloqueadores caracteres (operaciones no permitidas)
{
    //numeros
    function bloqueador_caracteres_numeros_calculadora_cientifica() {
        operaciones_no_permitidas_calculadora_cientifica = {
            corchete_abierto: true,
            parentesis_abierto: true
        };
    }
    //operaciones
    function bloqueador_caracteres_suma_calculadora_cientifica() {
        operaciones_no_permitidas_calculadora_cientifica = {
            suma: true,
            division: true,
            multiplicacion: true,
            potencias: true,
            porcentaje: true,
            raices: true,
            coma_vectorial: true
        };
    }
    function bloqueador_caracteres_resta_calculadora_cientifica() {
        operaciones_no_permitidas_calculadora_cientifica = {
            suma: true,
            division: true,
            multiplicacion: true,
            potencias: true,
            porcentaje: true,
            raices: true,
            coma_vectorial: true
        };
    }
    function bloqueador_caracteres_multiplicacion_calculadora_cientifica() {
        operaciones_no_permitidas_calculadora_cientifica = {
            multiplicacion: true,
            division: true,
            potencias: true,
            porcentaje: true,
            raices: true,
            coma_vectorial: true
        };
    }
    function bloqueador_caracteres_division_calculadora_cientifica() {
        operaciones_no_permitidas_calculadora_cientifica = {
            multiplicacion: true,
            division: true,
            potencias: true,
            porcentaje: true,
            raices: true,
            coma_vectorial: true
        };
    }
    //signos
    function bloqueador_caracteres_punto_decimal_calculadora_cientifica() {
        operaciones_no_permitidas_calculadora_cientifica = {
            corchete_abierto: true,
            corchete_cerrado: true,
            parentesis_abierto: true,
            parentesis_cerrado: true,
            suma: true,
            resta: true,
            multiplicacion: true,
            raices: true,
            division: true,
            potencias: true,
            porcentaje: true,
            coma_vectorial: true
        };
    }
    function bloqueador_caracteres_coma_vectorial_calculadora_cientifica() {
        operaciones_no_permitidas_calculadora_cientifica = {
            parentesis_cerrado: true,
            punto_decimal: true,
            coma_vectorial: true,
            multiplicacion: true,
            division: true,
            porcentaje: true,
            raices: true,
            potencias: true
        };
    }
    //funciones
    function bloqueador_funcion_guardar_numero_calculadora_cientifica() {
        operaciones_no_permitidas_calculadora_cientifica = {
            parentesis_cerrado: true,
            corchete_cerrado: true,
            punto_decimal: true,
            coma_vectorial: true,
            porcentaje: true,
            potencias: true,
            raices: true,
            division: true,
            multiplicacion: true,
            funcion_guardar_numero: true
        };
    }
    function bloqueador_funcion_simplificar_fraccion_calculadora_cientifica() {
        operaciones_no_permitidas_calculadora_cientifica = {

        };
    }
}
//escribir/borrar caracteres calculadora
{
    function limpiar_operacion_calculadora_cientifica() {
        operacion_calculadora_cientifica_mostrar = "";
        document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
    }
    function limpiar_todas_operaciones_calculadora_cientifica() {
        operacion_calculadora_cientifica_mostrar = "";
        document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
        ultimo_resultado_guardado = "";
        penultimo_resultado_guardado = "";
        antepenultimo_resultado_guardado = "";
        document.getElementById("pantalla-operacion-operacion-anterior-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
    }
    function guardar_caracteres_calculadora_cientifica() {
        operacion_calculadora_cientifica_mostrar = document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value;
    }
    function borrar_caracteres_calculadora_cientifica() {
        operacion_calculadora_cientifica_mostrar = document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value;
    }
    //escribir datos guardado
    function escribir_ANS_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.numeros == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += 'ANS';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
            bloqueador_caracteres_numeros_calculadora_cientifica();
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_PRANS_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.numeros == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += 'PRANS';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
            bloqueador_caracteres_numeros_calculadora_cientifica();
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_APRANS_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.numeros == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += 'APRANS';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
            bloqueador_caracteres_numeros_calculadora_cientifica();
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_GANS_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.numeros == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += 'GANS';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
            bloqueador_caracteres_numeros_calculadora_cientifica();
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    //numeros
    function escribir_numero_zero_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.numeros == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += '0';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
            bloqueador_caracteres_numeros_calculadora_cientifica();
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_numero_uno_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.numeros == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += '1';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
            bloqueador_caracteres_numeros_calculadora_cientifica();
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_numero_dos_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.numeros == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += '2';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
            bloqueador_caracteres_numeros_calculadora_cientifica();
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_numero_tres_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.numeros == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += '3';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
            bloqueador_caracteres_numeros_calculadora_cientifica();
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_numero_cuatro_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.numeros == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += '4';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
            bloqueador_caracteres_numeros_calculadora_cientifica();
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_numero_cinco_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.numeros == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += '5';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
            bloqueador_caracteres_numeros_calculadora_cientifica();
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_numero_seis_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.numeros == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += '6';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
            bloqueador_caracteres_numeros_calculadora_cientifica();
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_numero_siete_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.numeros == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += '7';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
            bloqueador_caracteres_numeros_calculadora_cientifica();
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_numero_ocho_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.numeros == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += '8';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
            bloqueador_caracteres_numeros_calculadora_cientifica();
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_numero_nueve_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.numeros == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += '9';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
            bloqueador_caracteres_numeros_calculadora_cientifica();
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_numero_PI_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.numeros == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += 'π';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
            bloqueador_caracteres_numeros_calculadora_cientifica();
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    //operaciones basicas
    function escribir_suma_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.suma == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += '+';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
            bloqueador_caracteres_suma_calculadora_cientifica();
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_resta_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.resta == undefined) {//escribir
            const ultimo_caracter_operacion_calculadora = operacion_calculadora_cientifica_mostrar[operacion_calculadora_cientifica_mostrar.length - 1];
            if (ultimo_caracter_operacion_calculadora == "+" || ultimo_caracter_operacion_calculadora == "-" || ultimo_caracter_operacion_calculadora == "*" || ultimo_caracter_operacion_calculadora == "/" || ultimo_caracter_operacion_calculadora == "^") {
                //atajo ( -
                operacion_calculadora_cientifica_mostrar += '(-';
                document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
            }
            else {
                operacion_calculadora_cientifica_mostrar += '-';
                document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
            }
            bloqueador_caracteres_resta_calculadora_cientifica();
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_multiplicacion_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.multiplicacion == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += '*';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
            bloqueador_caracteres_multiplicacion_calculadora_cientifica();
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_division_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.division == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += '/';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_exponenciacion_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.exponenciacion == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += '^';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_raiz_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.raiz == undefined) {//escribir
            if (operacion_calculadora_cientifica_mostrar[operacion_calculadora_cientifica_mostrar.length - 1] == "^") {
                operacion_calculadora_cientifica_mostrar += '√[';
            }
            else {//atajo
                operacion_calculadora_cientifica_mostrar += '^√[';
            }
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_porcentaje_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.porcentaje_100 == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += '%[';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    //signos
    function escribir_abrir_parentesis_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.parentesis_abierto == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += '(';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_cerrar_parentesis_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.parentesis_cerrado == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += ')';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_punto_decimal_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.punto_decimal == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += '.';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
            bloqueador_caracteres_punto_decimal_calculadora_cientifica();
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_coma_vectorial_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.coma_vectorial == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += ',';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_abrir_corchete_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.corchete_abierto == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += '[';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_cerrar_corchete_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.corchete_cerrado == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar += ']';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    //funciones
    function escribir_funcion_guardar_numero_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.funcion_guardar_numero == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar = 'GANS=> ';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
            bloqueador_funcion_guardar_numero_calculadora_cientifica();
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
    function escribir_funcion_simplificar_fraccion_calculadora_cientifica() {
        if (operaciones_no_permitidas_calculadora_cientifica.funcion_guardar_numero == undefined) {//escribir
            operacion_calculadora_cientifica_mostrar = 'FACT=> ';
            document.getElementById("pantalla-operacion-resultado-calculadora-cientifica").value = operacion_calculadora_cientifica_mostrar;
            bloqueador_funcion_simplificar_fraccion_calculadora_cientifica();
        }
        else {//mostrar mensaje (no puede escribir)
            mensaje_no_poder_escribir_calculadora_cientifica();
        }
    }
}
//mensajes calculadora
function mensaje_sintax_error_calculadora_cientifica() {

}
function mensaje_no_poder_escribir_calculadora_cientifica() {

}
function mensaje_guardado_calculadora_cientifica() {

}