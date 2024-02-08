function mostrar_convertir_notacioncientifica() {
    document.getElementById("body").innerHTML = "<div id='indice-herramientas' class='indice-herramientas'><svg class='flecha-volver-herramientas' xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;'onclick='control_pagina(1)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'/></g></svg></div><input type='text' value=''placeholder='172586.25'id='numero-usuario-recibir'onfocus='this.select()'title='(operaciones)'><div class='div-herramientas-bt-calcular'><input type='button'value='Calcular'onclick='calcular_convertir_notacioncientifica()'class='herramientas-bt-calcular '></div><h3 id='resultado-herramienta-mostrar'class='resultado-herramienta-mostrar'></h3></div><div id='herramientas-pitagoras-mensaje-error'><h3 id='herramientas-pitagoras-mensaje-error-text'>" + traduccion_textErrorNotacionCientifica[idioma] + "</h3></div>";
    //solo numeros?
    if (herramientas_solo_numeros_inputs) {
        document.getElementById("numero-usuario-recibir").type = "number";
        document.getElementById("numero-usuario-recibir").title = "(números)";
    }
    document.getElementById("numero-usuario-recibir").addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {//aceptar
            calcular_convertir_notacioncientifica();
        }
    });
}

function calcular_convertir_notacioncientifica() {
    if (!isNaN(eval(document.getElementById("numero-usuario-recibir").value))) {
        let numero_usuario = eval(document.getElementById("numero-usuario-recibir").value);
        let numero_usuario_guardado = eval(document.getElementById("numero-usuario-recibir").value);
        let operacion_cancelada = false;
        let decimales = 0;
        numero_usuario = eval(document.getElementById("numero-usuario-recibir").value.replaceAll("+", ""));
        numero_usuario = eval(document.getElementById("numero-usuario-recibir").value.replaceAll("-", ""));
        numero_usuario = eval(document.getElementById("numero-usuario-recibir").value.replaceAll("*", ""));
        numero_usuario = eval(document.getElementById("numero-usuario-recibir").value.replaceAll("/", ""));
        numero_usuario = numero_usuario.toString();
        if (numero_usuario.length <= 15) {
            numero_usuario = eval(document.getElementById("numero-usuario-recibir").value.replaceAll(",", "."));
        }
        else {
            numero_usuario = document.getElementById("numero-usuario-recibir").value.replaceAll(",", ".");
            operacion_cancelada = true;
        }

        let exponente = 0;
        let negativo = false;
        if (numero_usuario * (-1) > 0) {
            negativo = true;
            numero_usuario *= -1;
        }
        if (numero_usuario >= 1) {
            decimales = numero_usuario;
            decimales = decimales.toString();
            decimales = decimales.replaceAll(".", "");
            decimales = decimales.replaceAll("-", "");
            decimales = decimales.length;
        }
        else {
            decimales = numero_usuario;
            decimales = decimales.toString();
            decimales = decimales.replaceAll(".", "");
            decimales = decimales.replaceAll("-", "");
            decimales = decimales.length;
            decimales -= 1;
        }
        if (numero_usuario >= 10) {//dividir
            while (numero_usuario >= 10) {
                exponente++;
                numero_usuario /= 10;
            }
            if (negativo == true) {
                numero_usuario *= -1;
            }
            if (operacion_cancelada == false) {
                document.getElementById("resultado-herramienta-mostrar").innerHTML = numero_usuario.toFixed(decimales - 1) + "*10<sup>" + exponente + "</sup>";
            }
            else {
                document.getElementById("resultado-herramienta-mostrar").innerHTML = "<u style='color:#f36024;font-size:16px;'>! Op. canceladas (dígitos > 15)</u></br>" + numero_usuario.toFixed(decimales - 1) + "*10<sup>" + exponente + "</sup>";
            }
        }
        else if (numero_usuario < 1) {//multiplicar
            while (!(numero_usuario < 10 && numero_usuario >= 1)) {
                exponente--;
                numero_usuario *= 10;
            }
            if (negativo == true) {
                numero_usuario *= -1;
            }
            if (operacion_cancelada == false) {
                document.getElementById("resultado-herramienta-mostrar").innerHTML = numero_usuario.toFixed(decimales - 1) + "*10<sup>" + exponente + "</sup>";
            }
            else {
                document.getElementById("resultado-herramienta-mostrar").innerHTML = "<u style='color:#f36024;font-size:16px;'>! Op. canceladas (dígitos > 15)</u></br>" + numero_usuario.toFixed(decimales - 1) + "*10<sup>" + exponente + "</sup>";
            }
        }
        else {//dejarlo como está
            if (operacion_cancelada == false) {
                document.getElementById("resultado-herramienta-mostrar").innerHTML = numero_usuario;
            }
            else {
                document.getElementById("resultado-herramienta-mostrar").innerHTML = "<u style='color:#f36024;font-size:16px;'>! Op. canceladas (dígitos > 15)</u></br>" + numero_usuario;
            }
        }
    }
    else {//mostrar mensaje error()

    }
}