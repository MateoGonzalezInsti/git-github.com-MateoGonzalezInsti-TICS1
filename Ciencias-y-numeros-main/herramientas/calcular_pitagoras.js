function mostrar_pitagoras() {
    //tres inputs para calcular cateo a, b o hipotenusa; y un boton para calcular jusnto una imagen en el centro de los inputs estylo configuracion electronica
    document.getElementById("body").innerHTML = "<div id='indice-herramientas' class='indice-herramientas'><svg class='flecha-volver-herramientas' xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;'onclick='control_pagina(1)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'/></g></svg></div><div class='herramienta-div-hipotenusa'><input type='text' value=''placeholder='Cat a'title='cateto a (operaciones)'id='herramientas-pitagoras-cateto-a'onfocus='this.select()'><input type='text' value=''placeholder='Cat b'title='cateto b (operaciones)'id='herramientas-pitagoras-cateto-b'onfocus='this.select()'><input type='text' value=''placeholder='hip'title='hipotenusa (operaciones)'id='herramientas-pitagoras-hipotenusa'onfocus='this.select()'><div class='div-herramientas-pitagoras-bt-calcular' id='div-herramientas-pitagoras-bt-calcular'><input type='button'value='Calcular'onclick='resolver_pitagoras()'class='herramientas-pitagoras-bt-calcular'></div><h3 id='formula-resultado-pitagoras' ></h3></div><div id='herramientas-pitagoras-mensaje-error'><h3 id='herramientas-pitagoras-mensaje-error-text'>" + traduccion_textErrorPitagoras[idioma] + "</h3></div>";
    //solo numeros?
    if (herramientas_solo_numeros_inputs) {
        document.getElementById("herramientas-pitagoras-cateto-a").type = "number";
        document.getElementById("herramientas-pitagoras-cateto-a").title = "Cateto a (números)";
        document.getElementById("herramientas-pitagoras-cateto-b").type = "number";
        document.getElementById("herramientas-pitagoras-cateto-b").title = "Cateto b (números)";
        document.getElementById("herramientas-pitagoras-hipotenusa").type = "number";
        document.getElementById("herramientas-pitagoras-hipotenusa").title = "Hipotenusa (números)";
    }
    //convertir % --> px de los estylos para hacerla estatica
    let tamaño_height = 5;
    const tamaño_y_pantalla = screen.height;
    tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
    if (tamaño_height < 25) {
        tamaño_height = 25;
    }
    else if (tamaño_height > 70) {
        tamaño_height = 70;
    }
    document.getElementById("herramientas-pitagoras-cateto-a").style.height = tamaño_height + "px";
    document.getElementById("herramientas-pitagoras-cateto-b").style.height = tamaño_height + "px";
    document.getElementById("herramientas-pitagoras-hipotenusa").style.height = tamaño_height + "px";
    tamaño_height = 7;
    tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
    if (tamaño_height < 50) {
        tamaño_height = 50;
    }
    else if (tamaño_height > 80) {
        tamaño_height = 80;
    }
    document.getElementById("indice-herramientas").style.height = tamaño_height + "px";
    tamaño_height = 4;
    tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
    if (tamaño_height < 20) {
        tamaño_height = 20;
    }
    else if (tamaño_height > 75) {
        tamaño_height = 75;
    }
    document.getElementById("div-herramientas-pitagoras-bt-calcular").style.height = tamaño_height + "px";

    document.getElementById("herramientas-pitagoras-cateto-a").addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {//aceptar
            resolver_pitagoras();
        }
    });
    document.getElementById("herramientas-pitagoras-cateto-b").addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {//aceptar
            resolver_pitagoras();
        }
    });
    document.getElementById("herramientas-pitagoras-hipotenusa").addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {//aceptar
            resolver_pitagoras();
        }
    });
}
function resolver_pitagoras() {
    let error_usuario_datos = false;
    let a = document.getElementById("herramientas-pitagoras-cateto-a").value;
    a = a.replaceAll(",", ".");
    a = a.replaceAll("..", ".");
    a = a.replaceAll("[", "(");
    a = a.replaceAll("]", ")");
    a = a.replaceAll("//", "/");
    a = a.replaceAll("**", "*");
    a = a.replaceAll("++", "+");
    a = a.replaceAll("--", "-");
    if (!isNaN(eval(a)) || a == "") {
        if (a != "" && a != 0) {
            a = eval(a);
        }
    }
    else {
        error_usuario_datos = true;
    }
    let b = document.getElementById("herramientas-pitagoras-cateto-b").value;
    b = b.replaceAll(",", ".");
    b = b.replaceAll("..", ".");
    b = b.replaceAll("[", "(");
    b = b.replaceAll("]", ")");
    b = b.replaceAll("//", "/");
    b = b.replaceAll("**", "*");
    b = b.replaceAll("++", "+");
    b = b.replaceAll("--", "-");
    if (!isNaN(eval(b)) || b == "") {
        if (b != "" && b != 0) {
            b = eval(b);
        }
    }
    else {
        error_usuario_datos = true;
    }
    let hipotenusa = document.getElementById("herramientas-pitagoras-hipotenusa").value;
    hipotenusa = hipotenusa.replaceAll(",", ".");
    hipotenusa = hipotenusa.replaceAll("..", ".");
    hipotenusa = hipotenusa.replaceAll("[", "(");
    hipotenusa = hipotenusa.replaceAll("]", ")");
    hipotenusa = hipotenusa.replaceAll("//", "/");
    hipotenusa = hipotenusa.replaceAll("**", "*");
    hipotenusa = hipotenusa.replaceAll("++", "+");
    hipotenusa = hipotenusa.replaceAll("--", "-");
    if (!isNaN(eval(hipotenusa)) || hipotenusa == "") {
        if (hipotenusa != "") {
            hipotenusa = eval(hipotenusa);
        }
    }
    else {
        error_usuario_datos = true;
    }
    if (error_usuario_datos == false) {
        if (s != null || s != "") {
            clearTimeout(s);
            s = null;
            document.getElementById("herramientas-pitagoras-mensaje-error").style.display = "none";
            document.getElementById("herramientas-pitagoras-mensaje-error").style.opacity = 1;
            mensaje_error = false;
        }
        if (((hipotenusa == "" || hipotenusa == 0 || hipotenusa == null) || isNaN(eval(hipotenusa))) && a > 0 && b > 0) {
            a = eval(a);
            b = eval(b);
            document.getElementById("formula-resultado-pitagoras").innerHTML = "h<sup>2</sup>= " + a + "<sup>2</sup> + " + b + "<sup>2</sup> : <u style='color:rgb(14, 183, 172)'>" + redondear_numero(Math.hypot(a, b)) + "</u>";
        }
        else if (hipotenusa > 0 && ((a == "" || a == 0 || a == null || isNaN(eval(a)))) && b > 0) {
            if (!isNaN(redondear_numero(Math.sqrt((Math.pow(hipotenusa, 2)) - (Math.pow(b, 2)))))) {
                document.getElementById("formula-resultado-pitagoras").innerHTML = "a<sup>2</sup>= " + hipotenusa + "<sup>2</sup> - " + b + "<sup>2</sup> : <u style='color:rgb(14, 183, 172);'>" + redondear_numero(Math.sqrt((Math.pow(hipotenusa, 2)) - (Math.pow(b, 2)))) + "</u>";
            }
            else {
                document.getElementById("formula-resultado-pitagoras").innerHTML = "a<sup>2</sup>= " + hipotenusa + "<sup>2</sup> - " + b + "<sup>2</sup> : <u style='color:#f36024;'>! cat b> hip</u>";
            }
        }
        else if (hipotenusa > 0 && a > 0 && ((b == "" || b == 0 || b == null) || isNaN(eval(b)))) {
            if (!isNaN(redondear_numero(Math.sqrt((Math.pow(hipotenusa, 2)) - (Math.pow(a, 2)))))) {
                document.getElementById("formula-resultado-pitagoras").innerHTML = "b<sup>2</sup>= " + hipotenusa + "<sup>2</sup> - " + a + "<sup>2</sup> : <u style='color:rgb(14, 183, 172);'>" + redondear_numero(Math.sqrt((Math.pow(hipotenusa, 2)) - (Math.pow(a, 2)))) + "</u>";
            }
            else {
                document.getElementById("formula-resultado-pitagoras").innerHTML = "b<sup>2</sup>= " + hipotenusa + "<sup>2</sup> - " + a + "<sup>2</sup> : <u style='color:#f36024;'>! cat a> hip</u>";
            }
        }
        else {//mensaje error
            document.getElementById("herramientas-pitagoras-mensaje-error").style.display = "block";
            document.getElementById("herramientas-pitagoras-mensaje-error").style.opacity = 1;
            if (mensaje_error == true) {//borrar contador mensaje anterior
                clearTimeout(s);
                mensaje_error = true;
                let opacidad = 1;
                s = setTimeout(function () {
                    const f = setInterval(function () {
                        opacidad = opacidad - 0.05;
                        document.getElementById("herramientas-pitagoras-mensaje-error").style.opacity = opacidad;
                        if (opacidad <= 0) {
                            clearInterval(f);
                        }
                    }, 50);
                }, 4500);
                setTimeout(function () {
                    document.getElementById("herramientas-pitagoras-mensaje-error").style.display = "none";
                    mensaje_error = false;
                    s = null;
                }, 5650);
            }
            else {//crear contador mensaje error
                mensaje_error = true;
                let opacidad = 1;
                s = setTimeout(function () {
                    const f = setInterval(function () {
                        opacidad = opacidad - 0.05;
                        document.getElementById("herramientas-pitagoras-mensaje-error").style.opacity = opacidad;
                        if (opacidad <= 0) {
                            clearInterval(f);
                        }
                    }, 50);
                }, 4500);
                setTimeout(function () {
                    document.getElementById("herramientas-pitagoras-mensaje-error").style.display = "none";
                    mensaje_error = false;
                    s = null;
                }, 5650);
            }
        }
    }
    else {//mensaje error
        document.getElementById("herramientas-pitagoras-mensaje-error").style.opacity = 1;
        document.getElementById("herramientas-pitagoras-mensaje-error").style.display = "block";
        if (mensaje_error == true) {//borrar contador mensaje anterior
            clearTimeout(s);
            mensaje_error = true;
            let opacidad = 1;
            s = setTimeout(function () {
                const f = setInterval(function () {
                    opacidad = opacidad - 0.05;
                    document.getElementById("herramientas-pitagoras-mensaje-error").style.opacity = opacidad;
                    if (opacidad <= 0) {
                        clearInterval(f);
                    }
                }, 50);
            }, 4500);
            setTimeout(function () {
                document.getElementById("herramientas-pitagoras-mensaje-error").style.display = "none";
                mensaje_error = false;
                s = null;
            }, 5650);
        }
        else {//crear contador mensaje error
            mensaje_error = true;
            let opacidad = 1;
            s = setTimeout(function () {
                const f = setInterval(function () {
                    opacidad = opacidad - 0.05;
                    document.getElementById("herramientas-pitagoras-mensaje-error").style.opacity = opacidad;
                    if (opacidad <= 0) {
                        clearInterval(f);
                    }
                }, 50);
            }, 4500);
            setTimeout(function () {
                document.getElementById("herramientas-pitagoras-mensaje-error").style.display = "none";
                mensaje_error = false;
                s = null;
            }, 5650);
        }
    }
}