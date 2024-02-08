//version 0.4.1

//mostrar herramienta
function mostrar_calcular_gases_ideales() {
    document.getElementById("body").innerHTML = "<div id='indice-herramientas' class='indice-herramientas-fisica-quimica'><svg class='flecha-volver-herramientas' xmlns='http://www.w3.org/2000/svg' version='1.0' width='90.000000pt' height='90.000000pt' viewBox='0 0 90.000000 90.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,90.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path style='cursor: pointer;'onclick='abrir_menu_herramientas()' d='M113 548 c-46 -46 -83 -90 -83 -98 0 -25 165 -183 186 -178 37 7 27 39 -27 94 l-53 54 364 2 365 3 0 25 0 25 -365 3 -364 2 53 54 c55 56 64 88 26 94 -14 2 -46 -23 -102 -80z'/></g></svg></div><input type='text' value=''placeholder='P'title='Presión (conversor)'id='herramientas-gasesIdeales-presion'onfocus='this.select()'><input type='text' value=''placeholder='V (l)'title='Volumen (operaciones)'id='herramientas-gasesIdeales-volumen'onfocus='this.select()'><input type='text' value=''placeholder='N'title='Moles (operaciones)'id='herramientas-gasesIdeales-moles'onfocus='this.select()'><input type='text' value=''placeholder='T'title='Temperatura (conversor)'id='herramientas-gasesIdeales-temperatura'onfocus='this.select()'><div class='div-herramientas-pitagoras-bt-calcular' id='div-herramientas-pitagoras-bt-calcular'><input type='button'value='Calcular'onclick='calcular_gases_ideales()'class='herramientas-gasesIdeales-bt-calcular'></div><h3 id='resultado-formula'></h3></div><div id='herramientas-pitagoras-mensaje-error'><h3 id='herramientas-gasesIdeales-mensaje-error-text'>" + traduccion_textErrorGasesIdeales[idioma] + "</h3></div>";
    //solo numeros?
    if (herramientas_solo_numeros_inputs) {
        document.getElementById("herramientas-gasesIdeales-presion").type = "number";
        document.getElementById("herramientas-gasesIdeales-presion").title = "Presión ("+traduccion_numero[idioma].toLowerCase()+")";
        document.getElementById("herramientas-gasesIdeales-volumen").type = "number";
        document.getElementById("herramientas-gasesIdeales-volumen").title = "Volumen ("+traduccion_numero[idioma].toLowerCase()+")";
        document.getElementById("herramientas-gasesIdeales-temperatura").type = "number";
        document.getElementById("herramientas-gasesIdeales-temperatura").title = "Temperatura ("+traduccion_numero[idioma].toLowerCase()+")";
        document.getElementById("herramientas-gasesIdeales-moles").type = "number";
        document.getElementById("herramientas-gasesIdeales-moles").title = "Moles ("+traduccion_numero[idioma].toLowerCase()+")";
    }
    //ajustar %-->px
    let tamaño_height = 5;
    const tamaño_y_pantalla = screen.height;
    tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
    if (tamaño_height < 25) {
        tamaño_height = 25;
    }
    else if (tamaño_height > 70) {
        tamaño_height = 70;
    }
    document.getElementById("herramientas-gasesIdeales-presion").style.height = tamaño_height + "px";
    document.getElementById("herramientas-gasesIdeales-volumen").style.height = tamaño_height + "px";
    document.getElementById("herramientas-gasesIdeales-temperatura").style.height = tamaño_height + "px";
    document.getElementById("herramientas-gasesIdeales-moles").style.height = tamaño_height + "px";
    tamaño_height = 4;
    tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
    if (tamaño_height < 20) {
        tamaño_height = 20;
    }
    else if (tamaño_height > 75) {
        tamaño_height = 75;
    }
    document.getElementById("div-herramientas-pitagoras-bt-calcular").style.height = tamaño_height + "px";
    document.getElementById("herramientas-gasesIdeales-presion").addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {//aceptar
            calcular_gases_ideales();
        }
    });
    document.getElementById("herramientas-gasesIdeales-volumen").addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {//aceptar
            calcular_gases_ideales();
        }
    });
    document.getElementById("herramientas-gasesIdeales-temperatura").addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {//aceptar
            calcular_gases_ideales();
        }
    });
    document.getElementById("herramientas-gasesIdeales-moles").addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {//aceptar
            calcular_gases_ideales();
        }
    });
}

//calcular
function calcular_gases_ideales() {
    let presion = document.getElementById("herramientas-gasesIdeales-presion").value.replaceAll(" ", "");//number+text
    let volumen = document.getElementById("herramientas-gasesIdeales-volumen").value.replaceAll(" ", "");//number+operaciones
    let temperatura = document.getElementById("herramientas-gasesIdeales-temperatura").value.replaceAll(" ", "");//number+text
    let moles = document.getElementById("herramientas-gasesIdeales-moles").value.replaceAll(" ", "");//number+operaciones
    //formula gases ideales : P*V=N*R*T
    if (((presion == "" || presion == null || presion == 0)) && (!isNaN(eval(volumen)) && volumen != "" && volumen != 0) && (temperatura != "" && temperatura != 0) && (!isNaN(eval(moles)) && moles != "" && moles != 0)) {//calcular presion : P= (N*R*T)/V
        //calcular moles
        moles = eval(moles);
        //calcular temperatura
        temperatura = calcular_gases_ideales_conversor_temperatura(temperatura);
        //calcular volumen
        volumen = eval(volumen);
        //mostrar resultado
        document.getElementById("resultado-formula").innerHTML = "P = (" + moles + " * 0.082 * " + temperatura + ")/" + volumen + " : <u style='color:rgb(230, 58, 178);'>" + redondear_numero((moles * 0.082 * temperatura) / volumen) + "</u> <sub style='font-size:13px;'>(atm)</sub>";
    }
    else if (((volumen == "" || volumen == null || volumen == 0)) && (!isNaN(Numevalber(presion)) && presion != "" && presion != 0) && (temperatura != "" && temperatura != 0) && (!isNaN(eval(moles)) && moles != "" && moles != 0)) {//calcular volumen: V= (N*R*T)/P
        //calcular moles
        moles = eval(moles);
        //calcular temperatura
        temperatura = calcular_gases_ideales_conversor_temperatura(temperatura);
        //calcular presion
        presion = calcular_gases_ideales_conversor_presion(presion);
        //mostrar resultado
        let decimales_redondeo = 4;
        presion = presion.toString();
        if (presion.length < decimales_redondeo) {
            decimales_redondeo = presion.length;
        }
        presion = Number(presion);
        document.getElementById("resultado-formula").innerHTML = "V = (" + moles + " * 0.082 * " + temperatura + ")/" + presion.toFixed(decimales_redondeo) + " : <u style='color:rgb(230, 58, 178);'>" + redondear_numero((moles * 0.082 * temperatura) / presion) + "</u> <sub style='font-size:13px;'>(l)</sub>";
    }
    else if (((temperatura == "" || temperatura == null || temperatura == 0)) && (!isNaN(eval(volumen)) && volumen != "" && volumen != 0) && (presion != "" && presion != 0) && (!isNaN(eval(moles)) && moles != "" && moles != 0)) {//calcular temperatura en Kelvin : T= (P*V) / (N*R)
        //calcular moles
        moles = eval(moles);
        //calcular volumen
        volumen = eval(volumen);
        //calcular presion
        presion = calcular_gases_ideales_conversor_presion(presion);
        //mostrar resultado
        let decimales_redondeo = 4;
        presion = presion.toString();
        if (presion.length < decimales_redondeo) {
            decimales_redondeo = presion.length;
        }
        presion = Number(presion);
        document.getElementById("resultado-formula").innerHTML = "T = (" + presion.toFixed(decimales_redondeo) + " * " + volumen + ") / (" + moles + " * 0.082) : <u style='color:rgb(230, 58, 178);'>" + redondear_numero((presion * volumen) / (moles * 0.082)) + "</u> <sub style='font-size:13px;'>(K)</sub>";
    }
    else if (((moles == "" || moles == null || moles == 0)) && (!isNaN(eval(volumen)) && volumen != "" && volumen != 0) && (temperatura != "" && temperatura != 0) && (presion != "" && presion != 0)) {//calcular moles : N= (P*V) / (R*T)
        //calcular volumen
        volumen = eval(volumen);
        //calcular presion
        presion = calcular_gases_ideales_conversor_presion(presion);
        //calcular temperatura
        temperatura = calcular_gases_ideales_conversor_temperatura(temperatura);
        //mostrar resultado
        let decimales_redondeo = 4;
        presion = presion.toString();
        if (presion.length < decimales_redondeo) {
            decimales_redondeo = presion.length;
        }
        presion = Number(presion);
        document.getElementById("resultado-formula").innerHTML = "N = (" + presion.toFixed(decimales_redondeo) + " * " + volumen + ") / (" + temperatura + " * 0.082) : <u style='color:rgb(230, 58, 178);'>" + redondear_numero((presion * volumen) / (temperatura * 0.082)) + "</u> <sub style='font-size:13px;'>(mol)</sub>";
    }
    else {//mensaje error()
    }
}

//conversores
function calcular_gases_ideales_conversor_presion(presion) {
    //identificar si son atmosferas o otros y pasarlo a atmosferas
    presion = (presion).toString();
    presion = presion.toLowerCase();
    if (presion[presion.length - 3] === "a" && presion[presion.length - 2] === "t" && presion[presion.length - 1] === "m" && !isNaN(Number(presion[presion.length - 4]))) {//atm (atmosfera)
        //coger numeros
        let presion_temporal = "";
        for (let i = 0; i < presion.length; i++) {
            if (!isNaN(Number(presion[i]))) {//es un numero
                presion_temporal += presion[i];
            }
            else {//es texto
                break;
            }
        }
        presion = presion_temporal;
        //calcular (dejarlo igual)
        presion = Number(presion);
    }
    else if (presion[presion.length - 2] === "p" && presion[presion.length - 1] === "a" && !isNaN(Number(presion[presion.length - 3]))) {//pascales
        //coger numeros
        let presion_temporal = "";
        for (let i = 0; i < presion.length; i++) {
            if (!isNaN(Number(presion[i]))) {//es un numero
                presion_temporal += presion[i];
            }
            else {//es texto
                break;
            }
        }
        presion = presion_temporal;
        //calcular
        presion = Number(presion);
        presion /= 101325;//pasar pascula a atmosfera
    }
    else if (presion[presion.length - 3] === "b" && presion[presion.length - 2] === "a" && presion[presion.length - 1] === "r" && !isNaN(Number(presion[presion.length - 4]))) {//bar
        //coger numeros
        let presion_temporal = "";
        for (let i = 0; i < presion.length; i++) {
            if (!isNaN(Number(presion[i]))) {//es un numero
                presion_temporal += presion[i];
            }
            else {//es texto
                break;
            }
        }
        presion = presion_temporal;
        //calcular
        presion = Number(presion);
        presion /= 1, 01325;//pasar bar a atmosfera
    }
    else if (presion[presion.length - 3] === "t" && presion[presion.length - 3] === "o" && presion[presion.length - 3] === "r" && !isNaN(Number(presion[presion.length - 4]))) {//tor
        //coger numeros
        let presion_temporal = "";
        for (let i = 0; i < presion.length; i++) {
            if (!isNaN(Number(presion[i]))) {//es un numero
                presion_temporal += presion[i];
            }
            else {//es texto
                break;
            }
        }
        presion = presion_temporal;
        //calcular
        presion = Number(presion);
        presion /= 760;//pasar tor a atmosfera
    }
    else if (presion[presion.length - 4] === "m" && presion[presion.length - 3] === "m" && presion[presion.length - 2] === "h" && presion[presion.length - 1] === "g" && !isNaN(Number(presion[presion.length - 5]))) {//mmHg (miligramo de mercurio)
        //coger numeros
        let presion_temporal = "";
        for (let i = 0; i < presion.length; i++) {
            if (!isNaN(Number(presion[i]))) {//es un numero
                presion_temporal += presion[i];
            }
            else {//es texto
                break;
            }
        }
        presion = presion_temporal;
        //calcular
        presion = Number(presion);
        presion /= 760;//pasar mmHg a atmosfera
    }
    else if (presion[presion.length - 3] === "p" && presion[presion.length - 2] === "s" && presion[presion.length - 1] === "i" && !isNaN(Number(presion[presion.length - 4]))) {//psi (libra por pulgada cuadrada)
        //coger numeros
        let presion_temporal = "";
        for (let i = 0; i < presion.length; i++) {
            if (!isNaN(Number(presion[i]))) {//es un numero
                presion_temporal += presion[i];
            }
            else {//es texto
                break;
            }
        }
        presion = presion_temporal;
        //calcular
        presion = Number(presion);
        presion /= 14.6959;//pasar psi a atmosfera
    }
    else if (isNaN(presion[presion.length - 1] * 1)) {//unidad desconocida
        presion = 1;
    }
    else {//no tiene undiades
        presion = Number(presion);
    }
    return presion;
}
function calcular_gases_ideales_conversor_temperatura(temperatura) {
    temperatura = temperatura.toString();
    temperatura = temperatura.toLowerCase();
    //saber si son kerlvin o no y pasarlo a kelvin
    if (temperatura[temperatura.length - 1] === "k" && !isNaN(Number(presion[presion.length - 2]))) {//k (kelvin)
        //coger numeros
        let temperatura_temporal = "";
        for (let i = 0; i < temperatura.length; i++) {
            if (!isNaN(Number(temperatura[i]))) {//es un numero
                temperatura_temporal += temperatura[i];
            }
            else {//es texto
                break;
            }
        }
        temperatura = temperatura_temporal;
        //calcular (dejarlo igual)
        temperatura = Number(temperatura);
    }
    else if (temperatura[temperatura.length - 1] === "c" && !isNaN(Number(presion[presion.length - 4]))) {//c (celsius)
        //coger numeros
        let temperatura_temporal = "";
        for (let i = 0; i < temperatura.length; i++) {
            if (!isNaN(Number(temperatura[i]))) {//es un numero
                temperatura_temporal += temperatura[i];
            }
            else {//es texto
                break;
            }
        }
        temperatura = temperatura_temporal;
        //calcular
        temperatura = Number(temperatura);
        temperatura = temperatura + 273;
    }
    else if (temperatura[temperatura.length - 1] === "f" && !isNaN(Number(presion[presion.length - 4]))) {//f (Fahrenheit)
        //coger numeros
        let temperatura_temporal = "";
        for (let i = 0; i < temperatura.length; i++) {
            if (!isNaN(Number(temperatura[i]))) {//es un numero
                temperatura_temporal += temperatura[i];
            }
            else {//es texto
                break;
            }
        }
        temperatura = temperatura_temporal;
        //calcular
        temperatura = Number(temperatura);
        temperatura = (temperatura * 1.8) + 32;
    }
    else if (isNaN(temperatura[temperatura.length - 1] * 1)) {//unidad desconocida
        temperatura = 1;
    }
    else {//no tiene unidades
        temperatura = Number(temperatura);
    }
    return temperatura;
}