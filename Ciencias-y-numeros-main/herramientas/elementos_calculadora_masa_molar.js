function mostrar_calcular_masa_molar_compuesto() {
    document.getElementById("body").innerHTML = "<div id='indice-herramientas' class='indice-herramientas'><svg class='flecha-volver-herramientas' xmlns='http://www.w3.org/2000/svg' version='1.0' width='512.000000pt' height='512.000000pt' viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path style='cursor: pointer;'onclick='control_pagina(1)' d='M1365 3953 c-82 -18 -88 -23 -704 -637 -656 -654 -661 -659 -661 -756 0 -97 5 -102 661 -756 664 -661 637 -639 745 -637 151 3 257 157 209 304 -16 50 -46 82 -418 457 l-401 402 2064 0 c1309 0 2078 4 2100 10 84 23 160 128 160 220 0 92 -76 197 -160 220 -22 6 -791 10 -2100 10 l-2064 0 401 403 c372 374 402 406 418 456 45 139 -46 285 -190 303 -22 3 -49 3 -60 1z'/></g></svg></div><input type='text' value=''placeholder='H2O...'title='Compuesto (texto)'id='numero-usuario-recibir'onfocus='this.select()'><div class='div-herramientas-bt-calcular'><input type='button'value='Calcular'onclick='calcular_masa_molar_compuesto()'class='herramientas-bt-calcular'></div><h3 id='resultado-masa-molar-compuesto-quimico-masas-separadas' ></h3><h3 id='resultado-masa-molar-compuesto-quimico-masa-total' ></h3><div id='herramientas-calcular-masa-molar-compuesto-quimico-mensaje-error'><h3 id='herramientas-calcular-masa-molar-compuesto-quimico-mensaje-error-text'>" + traduccion_textErrorCalcularMasaMolar[idioma] + "</h3></div>";
    document.getElementById("numero-usuario-recibir").addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {//aceptar
            calcular_masa_molar_compuesto();
        }
    });
}

function calcular_masa_molar_compuesto() {
    let formula_usuario = document.getElementById("numero-usuario-recibir").value;//datos del usuario(formula)
    //eliminar algunos caracteres innecesarios para el programa
    formula_usuario = formula_usuario.replaceAll(" ", "");
    formula_usuario = formula_usuario.replaceAll(".", "");
    formula_usuario = formula_usuario.replaceAll(",", "");
    formula_usuario = formula_usuario.replaceAll(";", "");
    formula_usuario = formula_usuario.replaceAll(":", "");
    formula_usuario = formula_usuario.replaceAll("/", "");
    formula_usuario = formula_usuario.replaceAll("*", "");
    formula_usuario = formula_usuario.replaceAll("+", "");
    formula_usuario = formula_usuario.replaceAll("#", "");
    formula_usuario = formula_usuario.replaceAll("@", "");
    formula_usuario = formula_usuario.replaceAll("!", "");
    formula_usuario = formula_usuario.replaceAll(">", "");
    formula_usuario = formula_usuario.replaceAll("<", "");
    formula_usuario = formula_usuario.replaceAll("¿", "");
    formula_usuario = formula_usuario.replaceAll("?", "");
    formula_usuario = formula_usuario.replaceAll('"', "");
    formula_usuario = formula_usuario.replaceAll("'", "");
    formula_usuario = formula_usuario.replaceAll("^", "");
    formula_usuario = formula_usuario.replaceAll("`", "");
    formula_usuario = formula_usuario.replaceAll("}", "");
    formula_usuario = formula_usuario.replaceAll("{", "");
    formula_usuario = formula_usuario.replaceAll("º", "");
    formula_usuario = formula_usuario.replaceAll("ª", "");
    formula_usuario = formula_usuario.replaceAll("&", "");
    formula_usuario = formula_usuario.replaceAll("%", "");
    formula_usuario = formula_usuario.replaceAll("Ç", "");
    formula_usuario = formula_usuario.replaceAll("))", ")");
    formula_usuario = formula_usuario.replaceAll("((", "(");
    document.getElementById("numero-usuario-recibir").value = formula_usuario;
    //convertir atomos en letra minuscula a mayusculo (al = Al)
    let atomosremplazar_tablaperiodica = ["He", "Li", "Ne", "Na", "Mg", "Al", "Si", "Cl", "Ar", "Ca", "Sc", "Ti", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og", "Uue", "Ubn", "Ubu", "Ubb", "Ubt", "Ubq", "Ubp", "Ubh", "Ubs", "H", "B", "C", "N", "O", "F", "P", "S", "K", "V", "Y", "I", "W", "U"];
    formula_usuario = formula_usuario.toLowerCase();
    for (let i = 0; i < atomosremplazar_tablaperiodica.length; i++) {
        formula_usuario = formula_usuario.replaceAll(atomosremplazar_tablaperiodica[i].toLowerCase(), atomosremplazar_tablaperiodica[i].toUpperCase());
    }
    //eliminar minusculas para eliminar elementos no identificados
    for (let i = 0; i < formula_usuario.length; i++) {
        if ((formula_usuario[i] == formula_usuario[i].toLowerCase()) && isNaN(formula_usuario[i] * 1)) {//eliminar caracter(texto no numeros)
            formula_usuario = formula_usuario.replace(formula_usuario[i], " ");
        }
    }
    formula_usuario = formula_usuario.replaceAll(" ", "");
    //pasarlo a normal
    for (let i = 0; i < atomosremplazar_tablaperiodica.length; i++) {
        formula_usuario = formula_usuario.replaceAll(atomosremplazar_tablaperiodica[i].toUpperCase(), atomosremplazar_tablaperiodica[i]);
    }
    atomosremplazar_tablaperiodica = null;
    //encontrar multiplciador inicial de cantidad elementos 4al2 = al8
    let veces_repetir = formula_usuario.length;
    let exponente_formula = 0;
    if (!isNaN(formula_usuario[0] * 1) || formula_usuario[0] == "-") {//no puede empezar por numero
        exponente_formula = formula_usuario[0];
        for (let i = 1; i < veces_repetir; i++) {
            if (!isNaN(formula_usuario[i] * 1) || formula_usuario[i] == "-") {//numero
                exponente_formula += formula_usuario[i];
            }
            else {//texto --> cerrar bucle
                break;
            }
        }
        formula_usuario = formula_usuario.replace(exponente_formula.toString(), "");
    }
    veces_repetir = null;
    if (exponente_formula[0] == "-") {
        exponente_formula = exponente_formula.replace("-", "");
        exponente_formula = Number(exponente_formula);
        exponente_formula *= (-1);
    }
    if (!(Number(exponente_formula) >= 0)) {
        exponente_formula = 0;
    }
    //cominacion especial --> _ _ _(ac)
    let combinacion_especial = "";//subindice tras la formula
    if (formula_usuario[formula_usuario.length - 1] == ")") {
        let terminado = false;
        let veces = 2;
        while (terminado == false) {
            if (formula_usuario[formula_usuario.length - veces] != "(") {
                combinacion_especial = combinacion_especial + formula_usuario[formula_usuario.length - veces];
                veces++;
            }
            else {
                terminado = true;
            }
        }
    }
    else { }
    if (combinacion_especial == "") {
        combinacion_especial = null;
    }
    //separar datos de la formula
    let atomos_formula = [];//todos los atomos de la formula
    let n_atomo = 0;//numero de atomo actual
    let cantidad_atomos_formula = [];//cantidad de atomos de cada uno que haya
    let error_formula = false;//si hay cualquier error, fallo en la formulacion del usuario dejar de ejecutar el codigo y mandar mensaje error
    let esperar_numero = false;//esperar un numero de cantidad de atomo; si no hay poner 1, sino poner el del usuario
    for (let i = 0; i < formula_usuario.length; i++) {//separar atomos formula
        if (esperar_numero == true) {//esperar encontrar un numero
            if (!isNaN(formula_usuario[i] * 1)) {//comprobar si es un numero(Nan==no es un numero; !Nan== es un numero)
                if (i == 0) {//primer caracter de la formula(mal formulada)
                    error_formula = true;
                    esperar_numero = false;
                }
                else {
                    cantidad_atomos_formula.push(formula_usuario[i]);
                    if (!(formula_usuario[i + 1] === undefined)) {//sigue un nuevo elemento
                        if (formula_usuario[i + 1] == formula_usuario[i + 1].toUpperCase()) {
                            esperar_numero = false;
                        }
                    }
                    else if (!isNaN(formula_usuario[i + 1] * 2)) {
                        esperar_numero = true;
                    }
                    else {
                        esperar_numero = false;
                    }
                }
            }
            else {
                cantidad_atomos_formula.push(1);
                n_atomo++;
                atomos_formula.push(formula_usuario[i]);
                if (!(formula_usuario[i + 1] === undefined)) {//sigue un nuevo elemento
                    if (formula_usuario[i + 1] == formula_usuario[i + 1].toUpperCase()) {
                        esperar_numero = false;
                    }
                }
                else if (!isNaN(formula_usuario[i + 1] * 2)) {
                    esperar_numero = true;
                }
                else {
                    esperar_numero = false;
                }
            }
        }
        else {//continuar buscando atomos
            if (!isNaN(formula_usuario[i] * 1)) {//comprobar si es un numero(Nan==no es un numero; !Nan== es un numero)
                if (i == 0) {
                    error_formula = true;
                    esperar_numero = false;
                }
                else {
                    cantidad_atomos_formula[n_atomo - 1] = cantidad_atomos_formula[n_atomo - 1] + formula_usuario[i];
                }
            }
            else {//letra
                if (formula_usuario[i] == formula_usuario[i].toUpperCase()) {//es mayuscula(nuevo atomo)
                    if (formula_usuario[i] != "#" && formula_usuario[i] != "!" && formula_usuario[i] != "@" && formula_usuario[i] != "/" && formula_usuario[i] != "+" && formula_usuario[i] != "=" && formula_usuario[i] != "(" && formula_usuario[i] != ")" && formula_usuario[i] != "º" && formula_usuario[i] != "ª" && formula_usuario[i] != "$" && formula_usuario[i] != "%" && formula_usuario[i] != "*" && formula_usuario[i] != "." && formula_usuario[i] != "," && formula_usuario[i] != "?" && formula_usuario[i] != "¿" && formula_usuario[i] != "¡" && formula_usuario[i] != '"' && formula_usuario[i] != "'" && formula_usuario[i] != "`" && formula_usuario[i] != "<" && formula_usuario[i] != "") {//prevenir caracteres no atorizados
                        esperar_numero = false;
                        n_atomo++;
                        atomos_formula.push(formula_usuario[i]);
                        if (!isNaN(formula_usuario[i + 1] * 1)) {//comprobar si es un numero(Nan==no es un numero; !Nan== es un numero)
                            esperar_numero = true;
                        }
                        else if (i + 1 == formula_usuario.length) {//se termino la formula
                            cantidad_atomos_formula.push(1);
                        }
                        else if (formula_usuario[i + 1] == formula_usuario[i + 1].toUpperCase()) {//nuevo atomo(esperar un numero antes)
                            cantidad_atomos_formula.push(1);
                        }
                    }
                }
                else if (formula_usuario[i] == formula_usuario[i].toLowerCase()) {//es minuscula(continuar/terminar atomo)
                    atomos_formula[n_atomo - 1] = atomos_formula[n_atomo - 1] + formula_usuario[i];
                    //comprobar si hay un nuevo atomo, continua el atomo, hay un numero, se termino la formula
                    if (formula_usuario[i + 1] != undefined) {//si no se termino la formula
                        if (!isNaN(formula_usuario[i + 1] * 2)) {//numero
                            esperar_numero = true;
                        }
                        else if (formula_usuario[i + 1] == formula_usuario[i + 1].toUpperCase()) {//nuevo atomo(esperar un numero antes)
                            cantidad_atomos_formula.push(1);
                        }
                        else if (formula_usuario[i + 1] == formula_usuario[i + 1].toLowerCase()) {//continuar con el mismo atomo
                            esperar_numero = false;
                        }
                        else if (i + 1 == formula_usuario.length) {//se termino la formula
                            cantidad_atomos_formula.push(1);
                        }
                        else {
                            error_formula = true;
                            esperar_numero = false;
                        }
                    }
                    else {//si se termina meter un numero
                        cantidad_atomos_formula.push(1);
                    }
                }
                else {
                    error_formula = true;
                }
            }
        }
    }
    //multiplicar cantidades
    if (exponente_formula > 0) {
        for (let i = 0; i < cantidad_atomos_formula.length; i++) {
            cantidad_atomos_formula[i] *= exponente_formula;
        }
    }
    if (cantidad_atomos_formula.length == 0 || atomos_formula.length == 0) {
        exponente_formula = true;
    }
    exponente_formula = null;//borrar variable basura
    //continuar
    if (!exponente_formula) {
        if (s != null || s != "") {
            clearTimeout(s);
            s = null;
            document.getElementById("herramientas-calcular-masa-molar-compuesto-quimico-mensaje-error").style.display = "none";
            document.getElementById("herramientas-calcular-masa-molar-compuesto-quimico-mensaje-error").style.opacity = 1;
            mensaje_error = false;
        }
        //calcular masa
        let tablaperiodica = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og", "Uue", "Ubn", "Ubu", "Ubb", "Ubt", "Ubq", "Ubp", "Ubh", "Ubs"];
        let masa_tablaperiodica = [1.00784, 4.0026, 6.941, 9.0121, 10.811, 12.0107, 14.0067, 15.9994, 18.9984, 20.1797, 22.9897, 24.3050, 26.9815, 28.0855, 30.9737, 32.065, 35.453, 39.948, 39.0983, 40.078, 44.9559, 47.867, 50.9415, 51.9961, 54.9380, 55.845, 58.9331, 58.6934, 63.546, 65.38, 69.723, 72.64, 74.9216, 78.96, 79.904, 83.798, 85.467, 87.62, 88.9059, 91.224, 92.9064, 95.94, 98.906, 101.07, 102.9055, 106.42, 107.8682, 112.411, 114.818, 118.710, 121.760, 127.60, 126.9045, 131.293, 132.9055, 137.327, 138.9055, 140.116, 140.9077, 144.24, 145, 150.36, 151.964, 157.25, 158.9253, 162.5, 164.9303, 167.259, 168.9342, 173.04, 174.967, 178.49, 180.9479, 183.84, 186.207, 190.23, 192.217, 195.078, 196.9665, 200.59, 204.3833, 207.2, 208.9804, 209, 210, 222, 223, 226, 227, 231.0359, 232.0381, 237, 238.0289, 243, 244, 247, 247, 251, 252, 257, 258, 259, 262, 267, 261.1087, 263.1182, 262.1229, 269, 278, 281.1620, 281.1684, 285.1744, 286.1810, 287.1904, 288.1943, 291.2045, 294.2104, 294.2139, 316, 320, 320, 321, 325, 330, 332, 334, 335];
        let masa_calculada = 0;
        let masas_separadas = "";
        //calcular masa total
        for (let i = 0; i < atomos_formula.length; i++) {
            let numero_elemento = 0;
            //buscar cual es el nuemro de elemento
            for (let j = 0; j < masa_tablaperiodica.length; j++) {
                numero_elemento++;
                if (atomos_formula[i].toLowerCase() == tablaperiodica[j].toLowerCase()) {
                    break;
                }
            }
            numero_elemento--;
            masa_calculada += masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[i];
        }
        if ((((masa_calculada % 1).toString()).length) > 4) {
            masa_calculada = masa_calculada.toFixed(4);
        }
        //calcular masas separadas
        for (let i = 0; i < atomos_formula.length; i++) {
            let numero_elemento = 0;
            //buscar cual es el nuemro de elemento
            for (let j = 0; j < masa_tablaperiodica.length; j++) {
                numero_elemento++;
                if (atomos_formula[i].toLowerCase() == tablaperiodica[j].toLowerCase()) {
                    break;
                }
            }
            numero_elemento--;
            if (i == 0) {//primera?
                if ((((masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[i]) % 1).toString()).length > 3) {
                    masas_separadas += "" + (masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[i]).toFixed(3) + "<sub style='font-size:9px;'>(g)</sub>";
                }
                else {
                    masas_separadas += "" + masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[i] + "<sub style='font-size:9px;'>(g)</sub>";
                }
            }
            else {
                if ((((masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[i]) % 1).toString()).length > 3) {
                    masas_separadas += " + " + (masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[i]).toFixed(3) + "<sub style='font-size:9px;'>(g)</sub>";
                }
                else {
                    masas_separadas += " + " + masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[i] + "<sub style='font-size:9px;'>(g)</sub>";
                }
            }
        }
        masa_tablaperiodica = null;//reiniciar variables basura
        tablaperiodica = null;//reiniciar variables basura
        //mostrar resultado pantalla
        document.getElementById("resultado-masa-molar-compuesto-quimico-masas-separadas").innerHTML = "Masas separadas: " + masas_separadas;
        document.getElementById("resultado-masa-molar-compuesto-quimico-masa-total").innerHTML = "Masa total: " + masa_calculada + " <sub style='font-size:13px;'>(g/mol)</sub>";
    }
    else {//mandar mensaje de error()
        document.getElementById("herramientas-calcular-masa-molar-compuesto-quimico-mensaje-error").style.opacity = 1;
        document.getElementById("herramientas-calcular-masa-molar-compuesto-quimico-mensaje-error").style.display = "block";
        if (mensaje_error == true) {//borrar contador mensaje anterior
            clearTimeout(s);
            mensaje_error = true;
            let opacidad = 1;
            s = setTimeout(function () {
                const f = setInterval(function () {
                    opacidad = opacidad - 0.05;
                    document.getElementById("herramientas-calcular-masa-molar-compuesto-quimico-mensaje-error").style.opacity = opacidad;
                    if (opacidad <= 0) {
                        clearInterval(f);
                    }
                }, 50);
            }, 4500);
            setTimeout(function () {
                document.getElementById("herramientas-calcular-masa-molar-compuesto-quimico-mensaje-error").style.display = "none";
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
                    document.getElementById("herramientas-calcular-masa-molar-compuesto-quimico-mensaje-error").style.opacity = opacidad;
                    if (opacidad <= 0) {
                        clearInterval(f);
                    }
                }, 50);
            }, 4500);
            setTimeout(function () {
                document.getElementById("herramientas-calcular-masa-molar-compuesto-quimico-mensaje-error").style.display = "none";
                mensaje_error = false;
                s = null;
            }, 5650);
        }
    }
}
