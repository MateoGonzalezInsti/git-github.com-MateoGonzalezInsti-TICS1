function mostrar_formulacion_nomenclatura() {
    document.getElementById("body").innerHTML = "<div class='indice-herramientas-formulacion'><svg class='flecha-volver-herramientas' xmlns='http://www.w3.org/2000/svg' version='1.0' width='90.000000pt' height='90.000000pt' viewBox='0 0 90.000000 90.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,90.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path style='cursor: pointer;'onclick='abrir_menu_herramientas()' d='M113 548 c-46 -46 -83 -90 -83 -98 0 -25 165 -183 186 -178 37 7 27 39 -27 94 l-53 54 364 2 365 3 0 25 0 25 -365 3 -364 2 53 54 c55 56 64 88 26 94 -14 2 -46 -23 -102 -80z'/></g></svg></div><div class='div-body'id='div-body'></div>";
    mostrar_formulacion_nomenclatura_herramienta();
}
function mostrar_formulacion_nomenclatura_herramienta() {
    document.getElementById("div-body").innerHTML = "<input type='text' id='formula'value=''placeholder='2Al2O3' onfocus='this.select()'><div id='div-herramientas-calculos-poligonos-bt-calcular'class='div-herramientas-calculos-formulacion-bt-calcular'><input type='button'value='Nombrar'onclick='calcular_nomenclatura()'class='formulacion-bt-calcular'></div><div id='div-div-div-datos-formulacion'></div>";
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
    document.getElementById("formula").style.height = tamaño_height + "px";
    tamaño_height = 4;
    tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
    if (tamaño_height < 20) {
        tamaño_height = 20;
    }
    else if (tamaño_height > 75) {
        tamaño_height = 75;
    }
    document.getElementById("div-herramientas-calculos-poligonos-bt-calcular").style.height = tamaño_height + "px";
    document.getElementById("formula").addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {//aceptar
            calcular_nomenclatura();
        }
    });
}

function calcular_nomenclatura() {
    let formula_usuario = document.getElementById("formula").value;//datos del usuario(formula)
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
    document.getElementById("formula").value = formula_usuario;
    //convertir atomos en letra minuscula a mayusculo (al = Al)
    let atomosremplazar_tablaperiodica = ["He", "Li", "Ne", "Na", "Mg", "Al", "Si", "Cl", "Ar", "Ca", "Sc", "Ti", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og", "Uue", "Ubn", "Ubu", "Ubb", "Ubt", "Ubq", "Ubp", "Ubh", "Ubs", "H", "B", "C", "N", "O", "F", "P", "S", "K", "V", "Y", "I", "W", "U"];
    formula_usuario = formula_usuario.toLowerCase();
    //cominacion especial --> _ _ _(ac)
    let combinacion_especial = "";//subindice tras la formula
    if (formula_usuario[formula_usuario.length - 1] == ")") {
        let terminado = false;
        let veces = 2;
        while (!terminado) {
            combinacion_especial = formula_usuario[formula_usuario.length - veces] + combinacion_especial;
            if (formula_usuario[formula_usuario.length - veces] != "(") {
                veces++;
            }
            else {
                terminado = true;
            }
        }
    }
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
    exponente_formula = null;//borrar variable basura
    //continuar con la nomenclatura
    if (!error_formula) {
        //borrar variables basura
        n_atomo = null;
        error_formula = null;
        esperar_numero = null;
        //sino hay parentesis para especificar si es una combinacion acuosa...
        if (combinacion_especial == "" || combinacion_especial == null) {
            //reiniciar varibles basura
            combinacion_especial = null;
            formula_usuario = null;
            //comprobar que tipo de formula es (elementos, binario, ternario)
            if (atomos_formula.length == 1) {//elementos
                //encontrar nombre del elemento
                let numero_elemento = 0;
                let atomos_tablaperodica = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og", "Uue", "Ubn", "Ubu", "Ubb", "Ubt", "Ubq", "Ubp", "Ubh", "Ubs"];
                for (let i = 0; i < atomos_tablaperodica.length; i++) {
                    numero_elemento++;
                    if (atomos_formula[0] == atomos_tablaperodica[i]) {//encontrado
                        break;
                    }
                }
                numero_elemento--;
                atomos_tablaperodica = null;
                //mostrar resultados
                document.getElementById("div-div-div-datos-formulacion").innerHTML = "<div id='div-div-datos-calculados-formulacion'><div class='div-datos-calculados-formulacion'><h3 class='titulo-datos-calculados-formulacion'>Nombre:</h3><h3 class='text-datos-calculados-formulacion'id='text-datos-nombre' style='font-size:16px;'>_ _ _</h3></div><div class='div-datos-calculados-formulacion'><h3 class='titulo-datos-calculados-formulacion'>Masa:</h3><h3 class='text-datos-calculados-formulacion'id='text-datos-masa' style='font-size:17px;'>_ _ _</h3></div></div>";
                //nombre
                let nombres_tablaperiodica = ["Hidrógeno", "Helio", "Litio", "Berilio", "Boro", "Carbono", "Nitrógeno", "Osígeno", "Flúor", "Neón", "Sodio", "Magnesio", "Aluminio", "Silicio", "Fósforo", "Azufre", "Cloro", "Argón", "Potasio", "Calcio", "Escandio", "Titanio", "Vanadio", "Cromo", "Manganeso", "Hierro", "Cobalto", "Níquel", "Cobre", "Zinc", "Galio", "Germanio", "Arsénico", "Selenio", "Bromo", "Kriptón", "Rubidio", "Estroncio", "Itrio", "Zirconio", "Niobio", "Molibdeno", "Tecnecio", "Rutenio", "Rodio", "Paladio", "Plata", "Cadmio", "Indio", "Estaño", "Antimonio", "Telurio", "Yodo", "Xenón", "Cesio", "Bario", "Lantano", "Cerio", "Praseodimio", "Neodimio", "Prometio", "Samario", "Europio", "Gadolinio", "Terbio", "Disprosio", "Holmio", "Erbio", "Tulio", "Iterbio", "Lutecio", "Hafnio", "Tantalio", "Wolframio", "Renio", "Osmio", "Iridio", "Platino", "Oro", "Mercurio", "Talio", "Plomo", "Bismutio", "Polonio", "Ástato", "Radón", "Francio", "Radio", "Actinio", "Torio", "Protactinio", "Uranio", "Neptanio", "Plutonio", "Americio", "Curio", "Berkelio", "Californio", "Einstenio", "Fermio", "Mendelevio", "Nobelio", "Laurencio", "Rutherfordio", "Dubnio", "Seaborgio", "Bohrio", "Hassio", "Meitnerio", "Darmstadio", "Roentgenio", "Copernicio", "Nihonio", "Flerovio", "Moscovio", "Livermorio", "Téneso", "Oganesón", "Ununenio", "Unbinilio", "Unbiunio", "Unbibio", "Unbitrio", "Unbiquadio", "Unbipentio", "Unbihexio", "Unbisetium"];
                let nombre = "(" + cantidad_atomos_formula[0] + ")" + nombres_tablaperiodica[numero_elemento].toLowerCase();
                //poner prefijo
                nombre = nombre.replaceAll("(1)", "Mono");
                nombre = nombre.replaceAll("(2)", "Di");
                nombre = nombre.replaceAll("(3)", "Tri");
                nombre = nombre.replaceAll("(4)", "Tetra");
                nombre = nombre.replaceAll("(5)", "Penta");
                nombre = nombre.replaceAll("(6)", "Hexa");
                nombre = nombre.replaceAll("(7)", "Hepta");
                nombre = nombre.replaceAll("(8)", "Octa");
                nombre = nombre.replaceAll("(9)", "Nona");
                nombre = nombre.replaceAll("(10)", "Deca");
                nombre = nombre.replaceAll("(11)", "Undeca");
                nombre = nombre.replaceAll("(12)", "Dodeca");
                document.getElementById("text-datos-nombre").innerHTML = nombre;
                nombre = null;
                nombres_tablaperiodica = null;
                //masa molar
                let masa_tablaperiodica = [1.00784, 4.0026, 6.941, 9.0121, 10.811, 12.0107, 14.0067, 15.9994, 18.9984, 20.1797, 22.9897, 24.3050, 26.9815, 28.0855, 30.9737, 32.065, 35.453, 39.948, 39.0983, 40.078, 44.9559, 47.867, 50.9415, 51.9961, 54.9380, 55.845, 58.9331, 58.6934, 63.546, 65.38, 69.723, 72.64, 74.9216, 78.96, 79.904, 83.798, 85.467, 87.62, 88.9059, 91.224, 92.9064, 95.94, 98.906, 101.07, 102.9055, 106.42, 107.8682, 112.411, 114.818, 118.710, 121.760, 127.60, 126.9045, 131.293, 132.9055, 137.327, 138.9055, 140.116, 140.9077, 144.24, 145, 150.36, 151.964, 157.25, 158.9253, 162.5, 164.9303, 167.259, 168.9342, 173.04, 174.967, 178.49, 180.9479, 183.84, 186.207, 190.23, 192.217, 195.078, 196.9665, 200.59, 204.3833, 207.2, 208.9804, 209, 210, 222, 223, 226, 227, 231.0359, 232.0381, 237, 238.0289, 243, 244, 247, 247, 251, 252, 257, 258, 259, 262, 267, 261.1087, 263.1182, 262.1229, 269, 278, 281.1620, 281.1684, 285.1744, 286.1810, 287.1904, 288.1943, 291.2045, 294.2104, 294.2139, 316, 320, 320, 321, 325, 330, 332, 334, 335];
                //mostrar pantalla
                let masa_elemento = masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[0];
                masa_elemento = (masa_elemento.toString()).split(".");
                if (masa_elemento.length > 1 && ((masa_elemento[1]).toString()).length > 6) {
                    document.getElementById("text-datos-masa").innerHTML = (masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[0]).toFixed(6) + "<sub style='font-size:15px;'>(g/mol)</sub>";
                }
                else {
                    document.getElementById("text-datos-masa").innerHTML = masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[0] + "<sub style='font-size:15px;'>(g/mol)</sub>";
                }
            }
            else if (atomos_formula.length == 2) {//binario(oxido,peroxido,hidruro metalico, hidruro no metalico,sales binarias, oxigeo + grupo17)
                //oxido, peroxido
                let es_oxido = null;
                let es_peroxido = null;
                let es_oxigeno_grupo17 = null;
                let es_hidruro_metalico = null;
                let es_hidruro_no_metalico = null;
                let es_salbinaria = null;
                //oxido, peroxido
                if (atomos_formula[1] == "O" && cantidad_atomos_formula[1] != 2) {//es oxido
                    encontrado = true;
                    es_oxido = true;
                    es_peroxido = false;
                    es_oxigeno_grupo17 = false;
                }
                else if (atomos_formula[1] == "O" && cantidad_atomos_formula[1] == 2) {//es peroxido?
                    switch (atomos_formula[0].toString()) {
                        //grupo1
                        case "Li":
                            es_peroxido = true;
                            break;
                        case "Na":
                            es_peroxido = true;
                            break;
                        case "K":
                            es_peroxido = true;
                            break;
                        case "Rb":
                            es_peroxido = true;
                            break;
                        case "Cs":
                            es_peroxido = true;
                            break;
                        case "Fr":
                            es_peroxido = true;
                            break;
                        //grupo2
                        case "Be":
                            es_peroxido = true;
                            break;
                        case "Mg":
                            es_peroxido = true;
                            break;
                        case "Ca":
                            es_peroxido = true;
                            break;
                        case "Sr":
                            es_peroxido = true;
                            break;
                        case "Ba":
                            es_peroxido = true;
                            break;
                        case "Ra":
                            es_peroxido = true;
                            break;
                        //grupo11
                        case "Cu":
                            es_peroxido = true;
                            break;
                        case "Ag":
                            es_peroxido = true;
                            break;
                        case "Au":
                            es_peroxido = true;
                            break;
                        case "Rg":
                            es_peroxido = true;
                            break;
                        //grupo12
                        case "Zn":
                            es_peroxido = true;
                            break;
                        case "Cd":
                            es_peroxido = true;
                            break;
                        case "Hg":
                            es_peroxido = true;
                            break;
                        case "Cn":
                            es_peroxido = true;
                            break;
                    }
                    if (es_peroxido == true) {//es peroxido
                        encontrado = true;
                        es_peroxido = true;
                        es_oxido = false;
                        es_oxigeno_grupo17 = false;
                    }
                    else {//es oxido
                        encontrado = true;
                        es_peroxido = false;
                        es_oxido = true;
                        es_oxigeno_grupo17 = false;
                    }
                }
                else if (atomos_formula[0] == "O" && atomos_formula[1] != "O") {//oxigeno + grupo17
                    switch (atomos_formula[1]) {
                        case "F":
                            es_oxigeno_grupo17 = true;
                            break;
                        case "Cl":
                            es_oxigeno_grupo17 = true;
                            break;
                        case "Br":
                            es_oxigeno_grupo17 = true;
                            break;
                        case "I":
                            es_oxigeno_grupo17 = true;
                            break;
                        case "At":
                            es_oxigeno_grupo17 = true;
                            break;
                        case "Ts":
                            es_oxigeno_grupo17 = true;
                            break;
                    }
                    if (es_oxigeno_grupo17 == true) {//es oxigeo + grupo17
                        encontrado = true;
                        es_oxido = false;
                        es_peroxido = false;
                    }
                    else { //no es ningun oxido
                        encontrado = false;
                        es_oxigeno_grupo17 = false;
                        es_oxido = false;
                        es_peroxido = false;
                    }
                }
                else {//no es ningun oxido
                    es_oxido = false;
                    es_peroxido = false;
                    encontrado = false;
                    es_oxigeno_grupo17 = false;
                }
                //hidruro metalico, no metalico
                if (!encontrado) {
                    if (atomos_formula[0] == "H") {
                        switch (atomos_formula[1]) {
                            //grupo16 + grupo17
                            case "C":
                                es_hidruro_no_metalico = true;
                                break;
                            case "N":
                                es_hidruro_no_metalico = true;
                                break;
                            case "P":
                                es_hidruro_no_metalico = true;
                                break;
                            case "S":
                                es_hidruro_no_metalico = true;
                                break;
                            case "Se":
                                es_hidruro_no_metalico = true;
                                break;
                            case "F":
                                es_hidruro_no_metalico = true;
                                break;
                            case "Cl":
                                es_hidruro_no_metalico = true;
                                break;
                            case "Br":
                                es_hidruro_no_metalico = true;
                                break;
                            case "I":
                                es_hidruro_no_metalico = true;
                                break;
                            case "At":
                                es_hidruro_no_metalico = true;
                                break;
                            case "Te":
                                es_hidruro_no_metalico = true;
                                break;
                            case "Ts":
                                es_hidruro_no_metalico = true;
                                break;
                            case "As":
                                es_hidruro_no_metalico = true;
                                break;
                            case "Sb":
                                es_hidruro_no_metalico = true;
                                break;
                            case "B":
                                es_hidruro_no_metalico = true;
                                break;
                            case "Si":
                                es_hidruro_no_metalico = true;
                                break;
                            case "Ge":
                                es_hidruro_no_metalico = true;
                                break;
                        }
                        if (es_hidruro_no_metalico == true) {
                            encontrado = true;
                            es_hidruro_metalico = false;
                        }
                        else {
                            encontrado = false;
                            es_hidruro_no_metalico = false;
                        }
                    }
                    else if (atomos_formula[1] == "H") {
                        switch (atomos_formula[0]) {
                            //grupo1
                            case "Li":
                                es_hidruro_metalico = true;
                                break;
                            case "Na":
                                es_hidruro_metalico = true;
                                break;
                            case "K":
                                es_hidruro_metalico = true;
                                break;
                            case "Rb":
                                es_hidruro_metalico = true;
                                break;
                            case "Cs":
                                es_hidruro_metalico = true;
                                break;
                            case "Fr":
                                es_hidruro_metalico = true;
                                break;
                            //grupo2
                            case "Be":
                                es_hidruro_metalico = true;
                                break;
                            case "Mg":
                                es_hidruro_metalico = true;
                                break;
                            case "Ca":
                                es_hidruro_metalico = true;
                                break;
                            case "Sr":
                                es_hidruro_metalico = true;
                                break;
                            case "Ba":
                                es_hidruro_metalico = true;
                                break;
                            case "Ra":
                                es_hidruro_metalico = true;
                                break;
                            //grupo3
                            case "Sc":
                                es_hidruro_metalico = true;
                                break;
                            case "Y":
                                es_hidruro_metalico = true;
                                break;
                            case "Lu":
                                es_hidruro_metalico = true;
                                break;
                            case "Lr":
                                es_hidruro_metalico = true;
                                break;
                            //grupo4
                            case "Ti":
                                es_hidruro_metalico = true;
                                break;
                            case "Zr":
                                es_hidruro_metalico = true;
                                break;
                            case "Hf":
                                es_hidruro_metalico = true;
                                break;
                            case "Rf":
                                es_hidruro_metalico = true;
                                break;
                            //grupo5
                            case "V":
                                es_hidruro_metalico = true;
                                break;
                            case "Nb":
                                es_hidruro_metalico = true;
                                break;
                            case "Ta":
                                es_hidruro_metalico = true;
                                break;
                            case "Db":
                                es_hidruro_metalico = true;
                                break;
                            //grupo6
                            case "Cr":
                                es_hidruro_metalico = true;
                                break;
                            case "Mo":
                                es_hidruro_metalico = true;
                                break;
                            case "W":
                                es_hidruro_metalico = true;
                                break;
                            case "Sg":
                                es_hidruro_metalico = true;
                                break;
                            case "Mn":
                                es_hidruro_metalico = true;
                                break;
                            //grupo7
                            case "Tc":
                                es_hidruro_metalico = true;
                                break;
                            case "Re":
                                es_hidruro_metalico = true;
                                break;
                            case "Bh":
                                es_hidruro_metalico = true;
                                break;
                            //grupo8
                            case "Fe":
                                es_hidruro_metalico = true;
                                break;
                            case "Ru":
                                es_hidruro_metalico = true;
                                break;
                            case "Os":
                                es_hidruro_metalico = true;
                                break;
                            case "Hs":
                                es_hidruro_metalico = true;
                                break;
                            //grupo9
                            case "Co":
                                es_hidruro_metalico = true;
                                break;
                            case "Rh":
                                es_hidruro_metalico = true;
                                break;
                            case "Ir":
                                es_hidruro_metalico = true;
                                break;
                            case "Mt":
                                es_hidruro_metalico = true;
                                break;
                            //grupo10
                            case "Ni":
                                es_hidruro_metalico = true;
                                break;
                            case "Pd":
                                es_hidruro_metalico = true;
                                break;
                            case "Pt":
                                es_hidruro_metalico = true;
                                break;
                            case "Ds":
                                es_hidruro_metalico = true;
                                break;
                            //grupo11
                            case "Cu":
                                es_hidruro_metalico = true;
                                break;
                            case "Ag":
                                es_hidruro_metalico = true;
                                break;
                            case "Au":
                                es_hidruro_metalico = true;
                                break;
                            case "Rg":
                                es_hidruro_metalico = true;
                                break;
                            //grupo12
                            case "Zn":
                                es_hidruro_metalico = true;
                                break;
                            case "Cd":
                                es_hidruro_metalico = true;
                                break;
                            case "Hg":
                                es_hidruro_metalico = true;
                                break;
                            case "Cn":
                                es_hidruro_metalico = true;
                                break;
                            //grupo13
                            case "B":
                                es_hidruro_metalico = true;
                                break;
                            case "Al":
                                es_hidruro_metalico = true;
                                break;
                            case "Ga":
                                es_hidruro_metalico = true;
                                break;
                            case "In":
                                es_hidruro_metalico = true;
                                break;
                            case "Tl":
                                es_hidruro_metalico = true;
                                break;
                            case "Nh":
                                es_hidruro_metalico = true;
                                break;
                            //grupo14
                            case "Si":
                                es_hidruro_metalico = true;
                                break;
                            case "Ge":
                                es_hidruro_metalico = true;
                                break;
                            case "Sn":
                                es_hidruro_metalico = true;
                                break;
                            case "Pb":
                                es_hidruro_metalico = true;
                                break;
                            case "Fl":
                                es_hidruro_metalico = true;
                                break;
                            //grupo15
                            case "As":
                                es_hidruro_metalico = true;
                                break;
                            case "Sb":
                                es_hidruro_metalico = true;
                                break;
                            case "Bi":
                                es_hidruro_metalico = true;
                                break;
                            case "Mc":
                                es_hidruro_metalico = true;
                                break;
                        }
                        if (es_hidruro_metalico == true) {
                            es_hidruro_no_metalico = false;
                            encontrado = true;
                        }
                        else {
                            encontrado = false;
                            es_hidruro_metalico = false;
                            es_hidruro_no_metalico = false;
                        }
                    }
                    else {
                        es_hidruro_metalico = false;
                        es_hidruro_no_metalico = false;
                        encontrado = false;
                    }
                }
                else { }
                //sales binarias
                if (!encontrado) {
                    let metal = true;
                    switch (atomos_formula[0]) {
                        case "F":
                            metal = false;
                            break;
                        case "Cl":
                            metal = false;
                            break;
                        case "Br":
                            metal = false;
                            break;
                        case "I":
                            metal = false;
                            break;
                        case "At":
                            metal = false;
                            break;
                        case "S":
                            metal = false;
                            break;
                        case "Te":
                            metal = false;
                            break;
                        case "Se":
                            metal = false;
                            break;
                        case "N":
                            metal = false;
                            break;
                        case "P":
                            metal = false;
                            break;
                        case "C":
                            metal = false;
                            break;
                    }
                    let metal2 = false;
                    switch (atomos_formula[1]) {
                        case "F":
                            metal2 = true;
                            break;
                        case "Cl":
                            metal2 = true;
                            break;
                        case "Br":
                            metal2 = true;
                            break;
                        case "I":
                            metal2 = true;
                            break;
                        case "At":
                            metal2 = true;
                            break;
                        case "S":
                            metal2 = true;
                            break;
                        case "Te":
                            memetal2tal = true;
                            break;
                        case "Se":
                            metal2 = true;
                            break;
                        case "N":
                            metal2 = true;
                            break;
                        case "P":
                            metal2 = true;
                            break;
                        case "C":
                            metal2 = true;
                            break;
                    }
                    if (metal == true && metal2 == true) {
                        es_salbinaria = true;
                        encontrado = true;
                    }
                    else {
                        es_salbinaria = false;
                        encontrado = false;
                    }

                }
                else { }
                //terminado de encontrar
                if ((es_oxido == true || es_peroxido == true || es_hidruro_no_metalico == true || es_hidruro_metalico == true || es_salbinaria == true || es_oxigeno_grupo17 == true) && encontrado == true) {//comenzar nomenclatura
                    let nomenclatura_sistematica = "";
                    let nomenclatura_stock = "";
                    let combinacion = "";
                    let valencias = "";
                    let masa_molar = 0;
                    //que tipo de combinacion es: oxido...
                    if (es_oxido == true) {
                        combinacion = "Óxido";
                    }
                    else if (es_oxigeno_grupo17 == true) {
                        combinacion = "Óxido (grupo17)";
                    }
                    else if (es_peroxido == true) {
                        combinacion = "Peróxido";
                    }
                    else if (es_hidruro_metalico == true) {
                        combinacion = "Hidruro metálico";
                    }
                    else if (es_hidruro_no_metalico == true) {
                        combinacion = "Hidruro no metálico";
                    }
                    else if (es_salbinaria == true) {
                        combinacion = "Sal binaria";
                    }
                    else {
                        combinacion = "_ _ _";
                    }
                    //crear nomenclatura
                    if (es_oxido == true || es_oxigeno_grupo17 == true) {
                        if (es_oxido == true) {
                            //reiniciar variables basura
                            es_oxido = null;
                            es_peroxido = null;
                            es_oxigeno_grupo17 = null;
                            es_hidruro_no_metalico = null;
                            es_hidruro_metalico = null;
                            es_salbinaria = null;
                            encontrado = null;
                            let tablaperiodica = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og", "Uue", "Ubn", "Ubu", "Ubb", "Ubt", "Ubq", "Ubp", "Ubh", "Ubs"];
                            //buscar elemento compañero
                            let numero_elemento = 0;
                            for (let i = 0; i < tablaperiodica.length; i++) {
                                numero_elemento++;
                                if (tablaperiodica[i] == atomos_formula[0]) {//encontrado
                                    break;
                                }
                            }
                            numero_elemento--;
                            tablaperiodica = null;//borrar variable basura
                            //calcular valencias
                            let valencias_tablaperiodica = ["1", "0", "1", "2", "3", "2, 4", "1, 2, 3, 4, 5", "2", "1, 2", "0", "1", "2", "3", "2, 4", "3, 5", "2, 4, 6", "1, 3, 5, 7", "0", "1", "2", "3", "2, 3, 4", "2, 3, 4, 5", "2, 3, 6", "2, 3, 4, 6, 7", "2, 3, 6", "2, 3", "2, 3", "1, 2", "2", "3", "3, 4", "3, 5", "2, 4, 6", "1, 3, 5, 7", "0", "1", "2", "2, 3", "2, 3, 4", "2, 3, 4, 5", "4, 6", "1, 2, 3, 4, 5, 6, 7", "2, 3, 4, 5, 6, 8", "3", "0, 2, 4", "1, 2, 3", "2", "2, 3", "2, 4", "3, 5", "2, 4, 6", "1, 3, 5, 7", "0", "1", "2", "3, 4, 5", "3, 4, 5, 6", "8", "", "", "", "", "", "", "", "", "", "", "", "", "2, 3", "2, 3, 4", "2, 3, 4", "2, 3, 4", "3", "2, 3", "1, 2, 3", "1, 3, 4", "2, 3, 4", "2, 3", "3", "2, 3", "2, 3", "", "4", "2, 3, 4, 5", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
                            let valencias_elemento_compañero;
                            if (valencias_tablaperiodica[numero_elemento] == undefined || valencias_tablaperiodica[numero_elemento] == "") {
                                valencias_elemento_compañero = "_ _ _";
                            }
                            else {
                                valencias_elemento_compañero = valencias_tablaperiodica[numero_elemento];
                            }
                            valencias_tablaperiodica = null;//borrar variable basura
                            //calcular masa g/mol
                            let masa_tablaperiodica = [1.00784, 4.0026, 6.941, 9.0121, 10.811, 12.0107, 14.0067, 15.9994, 18.9984, 20.1797, 22.9897, 24.3050, 26.9815, 28.0855, 30.9737, 32.065, 35.453, 39.948, 39.0983, 40.078, 44.9559, 47.867, 50.9415, 51.9961, 54.9380, 55.845, 58.9331, 58.6934, 63.546, 65.38, 69.723, 72.64, 74.9216, 78.96, 79.904, 83.798, 85.467, 87.62, 88.9059, 91.224, 92.9064, 95.94, 98.906, 101.07, 102.9055, 106.42, 107.8682, 112.411, 114.818, 118.710, 121.760, 127.60, 126.9045, 131.293, 132.9055, 137.327, 138.9055, 140.116, 140.9077, 144.24, 145, 150.36, 151.964, 157.25, 158.9253, 162.5, 164.9303, 167.259, 168.9342, 173.04, 174.967, 178.49, 180.9479, 183.84, 186.207, 190.23, 192.217, 195.078, 196.9665, 200.59, 204.3833, 207.2, 208.9804, 209, 210, 222, 223, 226, 227, 231.0359, 232.0381, 237, 238.0289, 243, 244, 247, 247, 251, 252, 257, 258, 259, 262, 267, 261.1087, 263.1182, 262.1229, 269, 278, 281.1620, 281.1684, 285.1744, 286.1810, 287.1904, 288.1943, 291.2045, 294.2104, 294.2139, 316, 320, 320, 321, 325, 330, 332, 334, 335];
                            if (masa_tablaperiodica[numero_elemento] == "" || masa_tablaperiodica[numero_elemento] == undefined) {
                                masa_molar = "_ _ _";
                            }
                            else {
                                //masa mol oxigeno--> 15.9994
                                let separar_decimales = (((masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[0]) + (15.9994 * cantidad_atomos_formula[1])).toString());
                                separar_decimales = separar_decimales.split(".");
                                if (separar_decimales.length == 2 && separar_decimales[1].length > 5) {
                                    masa_molar = ((masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[0]) + (15.9994 * cantidad_atomos_formula[1])).toFixed(5);
                                }
                                else {
                                    masa_molar = (masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[0]) + (15.9994 * cantidad_atomos_formula[1]);
                                }
                            }
                            masa_tablaperiodica = null;//borrar variable basura
                            let nombre_tablaperiodica = ["Hidrógeno", "Helio", "Litio", "Berilio", "Boro", "Carbono", "Nitrógeno", "Oxígeno", "Flúor", "Neón", "Sodio", "Magnesio", "Aluminio", "Silicio", "Fósforo", "Azufre", "Cloro", "Argón", "Potasio", "Calcio", "Escandio", "Titanio", "Vanadio", "Cromo", "Manganeso", "Hierro", "Cobalto", "Níquel", "Cobre", "Zinc", "Galio", "Germanio", "Arsénico", "Selenio", "Bromo", "Kriptón", "Rubidio", "Estroncio", "Itrio", "Zirconio", "Niobio", "Molibdeno", "Tecnecio", "Rutenio", "Rodio", "Paladio", "Plata", "Cadmio", "Indio", "Estaño", "Antimonio", "Telurio", "Yodo", "Xenón", "Cesio", "Bario", "Lantano", "Cerio", "Praseodimio", "Neodimio", "Prometio", "Samario", "Europio", "Gadolinio", "Terbio", "Disprosio", "Holmio", "Erbio", "Tulio", "Iterbio", "Lutecio", "Hafnio", "Tantalio", "Wolframio", "Renio", "Osmio", "Iridio", "Platino", "Oro", "Mercurio", "Talio", "Plomo", "Bismutio", "Polonio", "Ástato", "Radón", "Francio", "Radio", "Actinio", "Torio", "Protactinio", "Uranio", "Neptanio", "Plutonio", "Americio", "Curio", "Berkelio", "Californio", "Einstenio", "Fermio", "Mendelevio", "Nobelio", "Laurencio", "Rutherfordio", "Dubnio", "Seaborgio", "Bohrio", "Hassio", "Meitnerio", "Darmstadio", "Roentgenio", "Copernicio", "Nihonio", "Flerovio", "Moscovio", "Livermorio", "Teneso", "Oganesón", "Unbiunium", "Unbinilium", "Unbiunium", "Unbibium", "Unbitrium", "Unbiquandium", "Unbipentium", "Unbihexium", "Unbiseptium"];
                            //nomenclatura sistematica
                            if (cantidad_atomos_formula[0] == 1 && cantidad_atomos_formula[1] == 1) {
                                nomenclatura_sistematica = ("Monóxido de " + nombre_tablaperiodica[numero_elemento]).toString();
                            }
                            else {
                                nomenclatura_sistematica = ("(" + cantidad_atomos_formula[1] + ")" + "óxido de (" + cantidad_atomos_formula[0] + ")" + nombre_tablaperiodica[numero_elemento].toLowerCase()).toString();
                                //prefijos
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(1)óxido", "Óxido");//(poner en mayuscula la 'o')
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(2)", "di");//2
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(1)", "");//1
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(3)", "tri");//3
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(4)", "tetra");//4
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(5)", "penta");//5
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(6)", "hexa");//6
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(7)", "hepta");//7
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(8)", "octa");//8
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(9)", "nona");//9
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(10)", "deca");//10
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(11)", "undeca");//11
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(12)", "dodeca");//12
                            }
                            //calcular total valencias
                            let cantidad_valencias = valencias_elemento_compañero.split(",");
                            valencias_elemento_compañero = null;//borrar variable basura
                            if (cantidad_valencias.length > 1) {
                                let valencia_aceptada = 0;
                                const valencia_oxigeno = (-2) * cantidad_atomos_formula[1];
                                for (let i = 0; i < cantidad_valencias.length; i++) {
                                    if (((cantidad_valencias[i] * cantidad_atomos_formula[0]) * (-1)) == valencia_oxigeno) {
                                        valencia_aceptada = Number(cantidad_valencias[i]);
                                    }
                                }
                                if (valencia_aceptada == 0 || valencia_aceptada == "" || valencia_aceptada == null) {//primera valencia
                                    valencia_aceptada = Number(cantidad_valencias[0]);
                                }
                                if (valencia_aceptada == undefined || valencia_aceptada == "" || valencia_aceptada == null) {//desconocida valencia
                                    valencia_aceptada = "?";
                                }
                                //guardar valencia (mostrar luego)
                                if (valencia_aceptada != "?") {
                                    valencias = ((valencia_aceptada * cantidad_atomos_formula[0]) + " - " + (valencia_oxigeno * (-1))).toString();
                                }
                                else {
                                    valencias = ("? - " + (valencia_oxigeno * (-1))).toString();
                                }
                                //reiniciar variables basura
                                cantidad_valencias = null;
                                //nomenclatura stock
                                if (valencia_aceptada != "?") {
                                    //valencia numeros romanos
                                    let valencia_romana;
                                    switch (valencia_aceptada) {
                                        case 1:
                                            valencia_romana = "I";
                                            break;
                                        case 2:
                                            valencia_romana = "II";
                                            break;
                                        case 3:
                                            valencia_romana = "III";
                                            break;
                                        case 4:
                                            valencia_romana = "IV";
                                            break;
                                        case 5:
                                            valencia_romana = "V";
                                            break;
                                        case 6:
                                            valencia_romana = "VI";
                                            break;
                                        case 7:
                                            valencia_romana = "VII";
                                            break;
                                        case 8:
                                            valencia_romana = "VIII";
                                            break;
                                        case 9:
                                            valencia_romana = "IX";
                                            break;
                                        case 10:
                                            valencia_romana = "X";
                                            break;
                                        case 11:
                                            valencia_romana = "XI";
                                            break;
                                        case 12:
                                            valencia_romana = "XII";
                                            break;
                                        case 13:
                                            valencia_romana = "XIII";
                                            break;
                                    }
                                    nomenclatura_stock = "Óxido de " + nombre_tablaperiodica[numero_elemento] + "(" + valencia_romana + ")";
                                }
                                else {
                                    nomenclatura_stock = "Óxido de " + nombre_tablaperiodica[numero_elemento] + "( ? )";
                                }
                            }
                            else {
                                //valencias + nomenclatura stock
                                if (cantidad_valencias[0] != "?") {
                                    const valencia_aceptada = Number(cantidad_valencias[0]);
                                    const valencia_oxigeno = -2 * cantidad_atomos_formula[1];
                                    valencias = ((valencia_aceptada * cantidad_atomos_formula[0]) + " - " + (valencia_oxigeno * (-1))).toString();
                                    nomenclatura_stock = "Óxido de " + nombre_tablaperiodica[numero_elemento];
                                }
                                else {
                                    const valencia_oxigeno = -2 * cantidad_atomos_formula[1];
                                    valencias = (("?") + " - " + (valencia_oxigeno * (-1))).toString();
                                    nomenclatura_stock = "Óxido de " + nombre_tablaperiodica[numero_elemento];
                                }
                            }
                        }
                        else {//oxigeno + grupo 17
                            //reiniciar variables basura
                            es_oxido = null;
                            es_peroxido = null;
                            es_oxigeno_grupo17 = null;
                            es_hidruro_no_metalico = null;
                            es_hidruro_metalico = null;
                            es_salbinaria = null;
                            encontrado = null;
                            let tablaperiodica = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og", "Uue", "Ubn", "Ubu", "Ubb", "Ubt", "Ubq", "Ubp", "Ubh", "Ubs"];
                            //buscar elemento compañero
                            let numero_elemento = 0;
                            for (let i = 0; i < tablaperiodica.length; i++) {
                                numero_elemento++;
                                if (tablaperiodica[i] == atomos_formula[1]) {//encontrado
                                    break;
                                }
                            }
                            numero_elemento--;
                            tablaperiodica = null;//borrar variable basura
                            //calcular valencias
                            let valencias_tablaperiodica = ["1", "0", "1", "2", "3", "2, 4", "1, 2, 3, 4, 5", "2", "1, 2", "0", "1", "2", "3", "2, 4", "3, 5", "2, 4, 6", "1, 3, 5, 7", "0", "1", "2", "3", "2, 3, 4", "2, 3, 4, 5", "2, 3, 6", "2, 3, 4, 6, 7", "2, 3, 6", "2, 3", "2, 3", "1, 2", "2", "3", "3, 4", "3, 5", "2, 4, 6", "1, 3, 5, 7", "0", "1", "2", "2, 3", "2, 3, 4", "2, 3, 4, 5", "4, 6", "1, 2, 3, 4, 5, 6, 7", "2, 3, 4, 5, 6, 8", "3", "0, 2, 4", "1, 2, 3", "2", "2, 3", "2, 4", "3, 5", "2, 4, 6", "1, 3, 5, 7", "0", "1", "2", "3, 4, 5", "3, 4, 5, 6", "8", "", "", "", "", "", "", "", "", "", "", "", "", "2, 3", "2, 3, 4", "2, 3, 4", "2, 3, 4", "3", "2, 3", "1, 2, 3", "1, 3, 4", "2, 3, 4", "2, 3", "3", "2, 3", "2, 3", "", "4", "2, 3, 4, 5", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
                            let valencias_elemento_compañero;
                            if (valencias_tablaperiodica[numero_elemento] == undefined || valencias_tablaperiodica[numero_elemento] == "") {
                                valencias_elemento_compañero = "_ _ _";
                            }
                            else {
                                valencias_elemento_compañero = valencias_tablaperiodica[numero_elemento];
                            }
                            valencias_tablaperiodica = null;//borrar variable basura
                            //calcular masa g/mol
                            let masa_tablaperiodica = [1.00784, 4.0026, 6.941, 9.0121, 10.811, 12.0107, 14.0067, 15.9994, 18.9984, 20.1797, 22.9897, 24.3050, 26.9815, 28.0855, 30.9737, 32.065, 35.453, 39.948, 39.0983, 40.078, 44.9559, 47.867, 50.9415, 51.9961, 54.9380, 55.845, 58.9331, 58.6934, 63.546, 65.38, 69.723, 72.64, 74.9216, 78.96, 79.904, 83.798, 85.467, 87.62, 88.9059, 91.224, 92.9064, 95.94, 98.906, 101.07, 102.9055, 106.42, 107.8682, 112.411, 114.818, 118.710, 121.760, 127.60, 126.9045, 131.293, 132.9055, 137.327, 138.9055, 140.116, 140.9077, 144.24, 145, 150.36, 151.964, 157.25, 158.9253, 162.5, 164.9303, 167.259, 168.9342, 173.04, 174.967, 178.49, 180.9479, 183.84, 186.207, 190.23, 192.217, 195.078, 196.9665, 200.59, 204.3833, 207.2, 208.9804, 209, 210, 222, 223, 226, 227, 231.0359, 232.0381, 237, 238.0289, 243, 244, 247, 247, 251, 252, 257, 258, 259, 262, 267, 261.1087, 263.1182, 262.1229, 269, 278, 281.1620, 281.1684, 285.1744, 286.1810, 287.1904, 288.1943, 291.2045, 294.2104, 294.2139, 316, 320, 320, 321, 325, 330, 332, 334, 335];
                            //masa mol oxigeno--> 15.9994
                            let separar_decimales = (((masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[1]) + (15.9994 * cantidad_atomos_formula[0])).toString());
                            separar_decimales = separar_decimales.split(".");
                            if (separar_decimales.length == 2 && separar_decimales[1].length > 5) {
                                masa_molar = ((masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[1]) + (15.9994 * cantidad_atomos_formula[0])).toFixed(5);
                            }
                            else {
                                masa_molar = (masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[1]) + (15.9994 * cantidad_atomos_formula[0]);
                            }

                            masa_tablaperiodica = null;//borrar variable basura
                            //solo deberían usarse los nombres que terminen en -uro
                            let nombre_tablaperiodica = ["Hidrógeno", "Helio", "Litio", "Berilio", "Boro", "Carbono", "Nitrógeno", "Oxígeno", "Fluoruro", "Neón", "Sodio", "Magnesio", "Aluminio", "Silicio", "Fósforo", "Azufre", "Cloruro", "Argón", "Potasio", "Calcio", "Escandio", "Titanio", "Vanadio", "Cromo", "Manganeso", "Hierro", "Cobalto", "Níquel", "Cobre", "Zinc", "Galio", "Germanio", "Arsénico", "Selenio", "Bromuro", "Kriptón", "Rubidio", "Estroncio", "Itrio", "Zirconio", "Niobio", "Molibdeno", "Tecnecio", "Rutenio", "Rodio", "Paladio", "Plata", "Cadmio", "Indio", "Estaño", "Antimonio", "Telurio", "Yoduro", "Xenón", "Cesio", "Bario", "Lantano", "Cerio", "Praseodimio", "Neodimio", "Prometio", "Samario", "Europio", "Gadolinio", "Terbio", "Disprosio", "Holmio", "Erbio", "Tulio", "Iterbio", "Lutecio", "Hafnio", "Tantalio", "Wolframio", "Renio", "Osmio", "Iridio", "Platino", "Oro", "Mercurio", "Talio", "Plomo", "Bismutio", "Polonio", "Astaturo", "Radón", "Francio", "Radio", "Actinio", "Torio", "Protactinio", "Uranio", "Neptanio", "Plutonio", "Americio", "Curio", "Berkelio", "Californio", "Einstenio", "Fermio", "Mendelevio", "Nobelio", "Laurencio", "Rutherfordio", "Dubnio", "Seaborgio", "Bohrio", "Hassio", "Meitnerio", "Darmstadio", "Roentgenio", "Copernicio", "Nihonio", "Flerovio", "Moscovio", "Livermorio", "Tenesuro", "Oganesón", "Unbiunium", "Unbinilium", "Unbiunium", "Unbibium", "Unbitrium", "Unbiquandium", "Unbipentium", "Unbihexium", "Unbiseptium"];
                            //nomenclatura sistematica
                            if (cantidad_atomos_formula[0] == 1 && cantidad_atomos_formula[1] == 1) {
                                nomenclatura_sistematica = ("Mono" + nombre_tablaperiodica[numero_elemento].toLowerCase()).toString() + " de oxígeno";
                            }
                            else {
                                nomenclatura_sistematica = ("(" + cantidad_atomos_formula[1] + ")" + (nombre_tablaperiodica[numero_elemento].toLowerCase()).toString() + " de (" + cantidad_atomos_formula[0] + ")oxígeno").toString();
                                //prefijos
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(1) oxígeno", "Oxígeno");//1(oxigeno)
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(1)", "");//1
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(2)", "di");//2
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(3)", "tri");//3
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(4)", "tetra");//4
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(5)", "penta");//5
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(6)", "hexa");//6
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(7)", "hepta");//7
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(8)", "octa");//8
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(9)", "nona");//9
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(10)", "deca");//10
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(11)", "undeca");//11
                                nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(12)", "dodeca");//12
                            }
                            //calcular total valencias
                            let cantidad_valencias = valencias_elemento_compañero.split(",");
                            valencias_elemento_compañero = null;//borrar variable basura
                            if (cantidad_valencias.length > 1) {
                                let valencia_aceptada = 0;
                                const valencia_oxigeno = (-2) * cantidad_atomos_formula[0];
                                for (let i = 0; i < cantidad_valencias.length; i++) {
                                    if (((cantidad_valencias[i] * cantidad_atomos_formula[1]) * (-1)) == valencia_oxigeno) {
                                        valencia_aceptada = Number(cantidad_valencias[i]);
                                    }
                                }
                                if (valencia_aceptada == 0 || valencia_aceptada == "" || valencia_aceptada == null) {//primera valencia
                                    valencia_aceptada = Number(cantidad_valencias[0]);
                                }
                                if (valencia_aceptada == undefined || valencia_aceptada == "" || valencia_aceptada == null) {//desconocida valencia
                                    valencia_aceptada = "?";
                                }
                                //guardar valencia (mostrar luego)
                                if (valencia_aceptada != "?") {
                                    valencias = ((valencia_aceptada * cantidad_atomos_formula[1]) + " - " + (valencia_oxigeno * (-1))).toString();
                                }
                                else {
                                    valencias = ("? - " + (valencia_oxigeno * (-1))).toString();
                                }
                                //reiniciar variables basura
                                cantidad_valencias = null;
                                //nomenclatura stock
                                //cambiar los nombres -uro y poner los normales
                                nombre_tablaperiodica = ["Hidrógeno", "Helio", "Litio", "Berilio", "Boro", "Carbono", "Nitrógeno", "Oxígeno", "Flúor", "Neón", "Sodio", "Magnesio", "Aluminio", "Silicio", "Fósforo", "Azufre", "Cloro", "Argón", "Potasio", "Calcio", "Escandio", "Titanio", "Vanadio", "Cromo", "Manganeso", "Hierro", "Cobalto", "Níquel", "Cobre", "Zinc", "Galio", "Germanio", "Arsénico", "Selenio", "Bromo", "Kriptón", "Rubidio", "Estroncio", "Itrio", "Zirconio", "Niobio", "Molibdeno", "Tecnecio", "Rutenio", "Rodio", "Paladio", "Plata", "Cadmio", "Indio", "Estaño", "Antimonio", "Telurio", "Yodo", "Xenón", "Cesio", "Bario", "Lantano", "Cerio", "Praseodimio", "Neodimio", "Prometio", "Samario", "Europio", "Gadolinio", "Terbio", "Disprosio", "Holmio", "Erbio", "Tulio", "Iterbio", "Lutecio", "Hafnio", "Tantalio", "Wolframio", "Renio", "Osmio", "Iridio", "Platino", "Oro", "Mercurio", "Talio", "Plomo", "Bismutio", "Polonio", "Ástato", "Radón", "Francio", "Radio", "Actinio", "Torio", "Protactinio", "Uranio", "Neptanio", "Plutonio", "Americio", "Curio", "Berkelio", "Californio", "Einstenio", "Fermio", "Mendelevio", "Nobelio", "Laurencio", "Rutherfordio", "Dubnio", "Seaborgio", "Bohrio", "Hassio", "Meitnerio", "Darmstadio", "Roentgenio", "Copernicio", "Nihonio", "Flerovio", "Moscovio", "Livermorio", "Teneso", "Oganesón", "Unbiunium", "Unbinilium", "Unbiunium", "Unbibium", "Unbitrium", "Unbiquandium", "Unbipentium", "Unbihexium", "Unbiseptium"];
                                if (valencia_aceptada != "?") {
                                    //valencia numeros romanos
                                    let valencia_romana;
                                    switch (valencia_aceptada) {
                                        case 1:
                                            valencia_romana = "I";
                                            break;
                                        case 2:
                                            valencia_romana = "II";
                                            break;
                                        case 3:
                                            valencia_romana = "III";
                                            break;
                                        case 4:
                                            valencia_romana = "IV";
                                            break;
                                        case 5:
                                            valencia_romana = "V";
                                            break;
                                        case 6:
                                            valencia_romana = "VI";
                                            break;
                                        case 7:
                                            valencia_romana = "VII";
                                            break;
                                        case 8:
                                            valencia_romana = "VIII";
                                            break;
                                        case 9:
                                            valencia_romana = "IX";
                                            break;
                                        case 10:
                                            valencia_romana = "X";
                                            break;
                                        case 11:
                                            valencia_romana = "XI";
                                            break;
                                        case 12:
                                            valencia_romana = "XII";
                                            break;
                                        case 13:
                                            valencia_romana = "XIII";
                                            break;
                                    }
                                    nomenclatura_stock = "Óxido de " + nombre_tablaperiodica[numero_elemento] + "(" + valencia_romana + ")";
                                }
                                else {
                                    nomenclatura_stock = "Óxido de " + nombre_tablaperiodica[numero_elemento] + "( ? )";
                                }
                            }
                            else {
                                //valencias + nomenclatura stock
                                if (cantidad_valencias[0] != "?") {
                                    const valencia_aceptada = Number(cantidad_valencias[0]);
                                    const valencia_oxigeno = -2 * cantidad_atomos_formula[0];
                                    valencias = ((valencia_aceptada * cantidad_atomos_formula[1]) + " - " + (valencia_oxigeno * (-1))).toString();
                                    nomenclatura_stock = "Óxido de " + nombre_tablaperiodica[numero_elemento];
                                }
                                else {
                                    const valencia_oxigeno = -2 * cantidad_atomos_formula[0];
                                    valencias = (("?") + " - " + (valencia_oxigeno * (-1))).toString();
                                    nomenclatura_stock = "Óxido de " + nombre_tablaperiodica[numero_elemento];
                                }
                            }
                        }
                    }
                    else if (es_peroxido == true) {
                        //reiniciar variables basura
                        es_oxido = null;
                        es_peroxido = null;
                        es_oxigeno_grupo17 = null;
                        es_hidruro_no_metalico = null;
                        es_hidruro_metalico = null;
                        es_salbinaria = null;
                        encontrado = null;
                        let tablaperiodica = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og", "Uue", "Ubn", "Ubu", "Ubb", "Ubt", "Ubq", "Ubp", "Ubh", "Ubs"];
                        //buscar elemento compañero
                        let numero_elemento = 0;
                        for (let i = 0; i < tablaperiodica.length; i++) {
                            numero_elemento++;
                            if (tablaperiodica[i] == atomos_formula[0]) {//encontrado
                                break;
                            }
                        }
                        numero_elemento--;
                        tablaperiodica = null;//borrar variable basura
                        //calcular valencias
                        let valencias_tablaperiodica = ["1", "0", "1", "2", "3", "2, 4", "1, 2, 3, 4, 5", "2", "1, 2", "0", "1", "2", "3", "2, 4", "3, 5", "2, 4, 6", "1, 3, 5, 7", "0", "1", "2", "3", "2, 3, 4", "2, 3, 4, 5", "2, 3, 6", "2, 3, 4, 6, 7", "2, 3, 6", "2, 3", "2, 3", "1, 2", "2", "3", "3, 4", "3, 5", "2, 4, 6", "1, 3, 5, 7", "0", "1", "2", "2, 3", "2, 3, 4", "2, 3, 4, 5", "4, 6", "1, 2, 3, 4, 5, 6, 7", "2, 3, 4, 5, 6, 8", "3", "0, 2, 4", "1, 2, 3", "2", "2, 3", "2, 4", "3, 5", "2, 4, 6", "1, 3, 5, 7", "0", "1", "2", "3, 4, 5", "3, 4, 5, 6", "8", "", "", "", "", "", "", "", "", "", "", "", "", "2, 3", "2, 3, 4", "2, 3, 4", "2, 3, 4", "3", "2, 3", "1, 2, 3", "1, 3, 4", "2, 3, 4", "2, 3", "3", "2, 3", "2, 3", "", "4", "2, 3, 4, 5", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
                        let valencias_elemento_compañero;
                        if (valencias_tablaperiodica[numero_elemento] == undefined || valencias_tablaperiodica[numero_elemento] == "") {
                            valencias_elemento_compañero = "_ _ _";
                        }
                        else {
                            valencias_elemento_compañero = valencias_tablaperiodica[numero_elemento];
                        }
                        valencias_tablaperiodica = null;//borrar variable basura
                        //calcular masa g/mol
                        let masa_tablaperiodica = [1.00784, 4.0026, 6.941, 9.0121, 10.811, 12.0107, 14.0067, 15.9994, 18.9984, 20.1797, 22.9897, 24.3050, 26.9815, 28.0855, 30.9737, 32.065, 35.453, 39.948, 39.0983, 40.078, 44.9559, 47.867, 50.9415, 51.9961, 54.9380, 55.845, 58.9331, 58.6934, 63.546, 65.38, 69.723, 72.64, 74.9216, 78.96, 79.904, 83.798, 85.467, 87.62, 88.9059, 91.224, 92.9064, 95.94, 98.906, 101.07, 102.9055, 106.42, 107.8682, 112.411, 114.818, 118.710, 121.760, 127.60, 126.9045, 131.293, 132.9055, 137.327, 138.9055, 140.116, 140.9077, 144.24, 145, 150.36, 151.964, 157.25, 158.9253, 162.5, 164.9303, 167.259, 168.9342, 173.04, 174.967, 178.49, 180.9479, 183.84, 186.207, 190.23, 192.217, 195.078, 196.9665, 200.59, 204.3833, 207.2, 208.9804, 209, 210, 222, 223, 226, 227, 231.0359, 232.0381, 237, 238.0289, 243, 244, 247, 247, 251, 252, 257, 258, 259, 262, 267, 261.1087, 263.1182, 262.1229, 269, 278, 281.1620, 281.1684, 285.1744, 286.1810, 287.1904, 288.1943, 291.2045, 294.2104, 294.2139, 316, 320, 320, 321, 325, 330, 332, 334, 335];
                        if (masa_tablaperiodica[numero_elemento] == "" || masa_tablaperiodica[numero_elemento] == undefined) {
                            masa_molar = "_ _ _";
                        }
                        else {
                            //masa mol oxigeno--> 15.9994
                            let separar_decimales = (((masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[0]) + (15.9994 * cantidad_atomos_formula[1])).toString());
                            separar_decimales = separar_decimales.split(".");
                            if (separar_decimales.length == 2 && separar_decimales[1].length > 5) {
                                masa_molar = ((masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[0]) + (15.9994 * cantidad_atomos_formula[1])).toFixed(5);
                            }
                            else {
                                masa_molar = (masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[0]) + (15.9994 * cantidad_atomos_formula[1]);
                            }
                        }
                        masa_tablaperiodica = null;//borrar variable basura
                        let nombre_tablaperiodica = ["Hidrógeno", "Helio", "Litio", "Berilio", "Boro", "Carbono", "Nitrógeno", "Oxígeno", "Flúor", "Neón", "Sodio", "Magnesio", "Aluminio", "Silicio", "Fósforo", "Azufre", "Cloro", "Argón", "Potasio", "Calcio", "Escandio", "Titanio", "Vanadio", "Cromo", "Manganeso", "Hierro", "Cobalto", "Níquel", "Cobre", "Zinc", "Galio", "Germanio", "Arsénico", "Selenio", "Bromo", "Kriptón", "Rubidio", "Estroncio", "Itrio", "Zirconio", "Niobio", "Molibdeno", "Tecnecio", "Rutenio", "Rodio", "Paladio", "Plata", "Cadmio", "Indio", "Estaño", "Antimonio", "Telurio", "Yodo", "Xenón", "Cesio", "Bario", "Lantano", "Cerio", "Praseodimio", "Neodimio", "Prometio", "Samario", "Europio", "Gadolinio", "Terbio", "Disprosio", "Holmio", "Erbio", "Tulio", "Iterbio", "Lutecio", "Hafnio", "Tantalio", "Wolframio", "Renio", "Osmio", "Iridio", "Platino", "Oro", "Mercurio", "Talio", "Plomo", "Bismutio", "Polonio", "Ástato", "Radón", "Francio", "Radio", "Actinio", "Torio", "Protactinio", "Uranio", "Neptanio", "Plutonio", "Americio", "Curio", "Berkelio", "Californio", "Einstenio", "Fermio", "Mendelevio", "Nobelio", "Laurencio", "Rutherfordio", "Dubnio", "Seaborgio", "Bohrio", "Hassio", "Meitnerio", "Darmstadio", "Roentgenio", "Copernicio", "Nihonio", "Flerovio", "Moscovio", "Livermorio", "Teneso", "Oganesón", "Unbiunium", "Unbinilium", "Unbiunium", "Unbibium", "Unbitrium", "Unbiquandium", "Unbipentium", "Unbihexium", "Unbiseptium"];
                        //nomenclatura sistematica
                        if (cantidad_atomos_formula[0] == 1 && cantidad_atomos_formula[1] == 1) {
                            nomenclatura_sistematica = ("Monóxido de " + nombre_tablaperiodica[numero_elemento]).toString();
                        }
                        else {
                            nomenclatura_sistematica = ("(" + cantidad_atomos_formula[1] + ")" + "óxido de (" + cantidad_atomos_formula[0] + ")" + nombre_tablaperiodica[numero_elemento].toLowerCase()).toString();
                            //prefijos
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(1)óxido", "Óxido");//(poner en mayuscula la 'o')
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(2)", "di");//2
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(1)", "");//1
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(3)", "tri");//3
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(4)", "tetra");//4
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(5)", "penta");//5
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(6)", "hexa");//6
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(7)", "hepta");//7
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(8)", "octa");//8
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(9)", "nona");//9
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(10)", "deca");//10
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(11)", "undeca");//11
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(12)", "dodeca");//12
                        }
                        //calcular total valencias
                        let cantidad_valencias = valencias_elemento_compañero.split(",");
                        valencias_elemento_compañero = null;//borrar variable basura
                        if (cantidad_valencias.length > 1) {
                            let valencia_aceptada = 0;
                            const valencia_oxigeno = (-1) * cantidad_atomos_formula[1];
                            for (let i = 0; i < cantidad_valencias.length; i++) {
                                if (((cantidad_valencias[i] * cantidad_atomos_formula[0]) * (-1)) == valencia_oxigeno) {
                                    valencia_aceptada = Number(cantidad_valencias[i]);
                                }
                            }
                            if (valencia_aceptada == 0 || valencia_aceptada == "" || valencia_aceptada == null) {//primera valencia
                                valencia_aceptada = Number(cantidad_valencias[0]);
                            }
                            if (valencia_aceptada == undefined || valencia_aceptada == "" || valencia_aceptada == null) {//desconocida valencia
                                valencia_aceptada = "?";
                            }
                            //guardar valencia (mostrar luego)
                            if (valencia_aceptada != "?") {
                                valencias = ((valencia_aceptada * cantidad_atomos_formula[0]) + " - " + (valencia_oxigeno * (-1))).toString();
                            }
                            else {
                                valencias = ("? - " + (valencia_oxigeno * (-1))).toString();
                            }
                            //reiniciar variables basura
                            cantidad_valencias = null;
                            //nomenclatura stock
                            if (valencia_aceptada != "?") {
                                //valencia numeros romanos
                                let valencia_romana;
                                switch (valencia_aceptada) {
                                    case 1:
                                        valencia_romana = "I";
                                        break;
                                    case 2:
                                        valencia_romana = "II";
                                        break;
                                    case 3:
                                        valencia_romana = "III";
                                        break;
                                    case 4:
                                        valencia_romana = "IV";
                                        break;
                                    case 5:
                                        valencia_romana = "V";
                                        break;
                                    case 6:
                                        valencia_romana = "VI";
                                        break;
                                    case 7:
                                        valencia_romana = "VII";
                                        break;
                                    case 8:
                                        valencia_romana = "VIII";
                                        break;
                                    case 9:
                                        valencia_romana = "IX";
                                        break;
                                    case 10:
                                        valencia_romana = "X";
                                        break;
                                    case 11:
                                        valencia_romana = "XI";
                                        break;
                                    case 12:
                                        valencia_romana = "XII";
                                        break;
                                    case 13:
                                        valencia_romana = "XIII";
                                        break;
                                }
                                nomenclatura_stock = "Peróxido de " + nombre_tablaperiodica[numero_elemento] + "(" + valencia_romana + ")";
                            }
                            else {
                                nomenclatura_stock = "Peróxido de " + nombre_tablaperiodica[numero_elemento] + "( ? )";
                            }
                        }
                        else {
                            //valencias + nomenclatura stock
                            if (cantidad_valencias[0] != "?") {
                                const valencia_aceptada = Number(cantidad_valencias[0]);
                                const valencia_oxigeno = (-1) * cantidad_atomos_formula[1];
                                valencias = ((valencia_aceptada * cantidad_atomos_formula[0]) + " - " + (valencia_oxigeno * (-1))).toString();
                                nomenclatura_stock = "Peróxido de " + nombre_tablaperiodica[numero_elemento];
                            }
                            else {
                                const valencia_oxigeno = (-1) * cantidad_atomos_formula[1];
                                valencias = (("?") + " - " + (valencia_oxigeno * (-1))).toString();
                                nomenclatura_stock = "Peróxido de " + nombre_tablaperiodica[numero_elemento];
                            }
                        }
                    }
                    else if (es_hidruro_metalico == true) {
                        //reiniciar variables basura
                        es_oxido = null;
                        es_peroxido = null;
                        es_oxigeno_grupo17 = null;
                        es_hidruro_no_metalico = null;
                        es_hidruro_metalico = null;
                        es_salbinaria = null;
                        encontrado = null;
                        let tablaperiodica = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og", "Uue", "Ubn", "Ubu", "Ubb", "Ubt", "Ubq", "Ubp", "Ubh", "Ubs"];
                        //buscar elemento compañero
                        let numero_elemento = 0;
                        for (let i = 0; i < tablaperiodica.length; i++) {
                            numero_elemento++;
                            if (tablaperiodica[i] == atomos_formula[0]) {//encontrado
                                break;
                            }
                        }
                        numero_elemento--;
                        tablaperiodica = null;//borrar variable basura
                        //calcular valencias
                        let valencias_tablaperiodica = ["1", "0", "1", "2", "3", "2, 4", "1, 2, 3, 4, 5", "2", "1, 2", "0", "1", "2", "3", "2, 4", "3, 5", "2, 4, 6", "1, 3, 5, 7", "0", "1", "2", "3", "2, 3, 4", "2, 3, 4, 5", "2, 3, 6", "2, 3, 4, 6, 7", "2, 3, 6", "2, 3", "2, 3", "1, 2", "2", "3", "3, 4", "3, 5", "2, 4, 6", "1, 3, 5, 7", "0", "1", "2", "2, 3", "2, 3, 4", "2, 3, 4, 5", "4, 6", "1, 2, 3, 4, 5, 6, 7", "2, 3, 4, 5, 6, 8", "3", "0, 2, 4", "1, 2, 3", "2", "2, 3", "2, 4", "3, 5", "2, 4, 6", "1, 3, 5, 7", "0", "1", "2", "3, 4, 5", "3, 4, 5, 6", "8", "", "", "", "", "", "", "", "", "", "", "", "", "2, 3", "2, 3, 4", "2, 3, 4", "2, 3, 4", "3", "2, 3", "1, 2, 3", "1, 3, 4", "2, 3, 4", "2, 3", "3", "2, 3", "2, 3", "", "4", "2, 3, 4, 5", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
                        let valencias_elemento_compañero;
                        if (valencias_tablaperiodica[numero_elemento] == undefined || valencias_tablaperiodica[numero_elemento] == "") {
                            valencias_elemento_compañero = "_ _ _";
                        }
                        else {
                            valencias_elemento_compañero = valencias_tablaperiodica[numero_elemento];
                        }
                        valencias_tablaperiodica = null;//borrar variable basura
                        //calcular masa g/mol
                        let masa_tablaperiodica = [1.00784, 4.0026, 6.941, 9.0121, 10.811, 12.0107, 14.0067, 15.9994, 18.9984, 20.1797, 22.9897, 24.3050, 26.9815, 28.0855, 30.9737, 32.065, 35.453, 39.948, 39.0983, 40.078, 44.9559, 47.867, 50.9415, 51.9961, 54.9380, 55.845, 58.9331, 58.6934, 63.546, 65.38, 69.723, 72.64, 74.9216, 78.96, 79.904, 83.798, 85.467, 87.62, 88.9059, 91.224, 92.9064, 95.94, 98.906, 101.07, 102.9055, 106.42, 107.8682, 112.411, 114.818, 118.710, 121.760, 127.60, 126.9045, 131.293, 132.9055, 137.327, 138.9055, 140.116, 140.9077, 144.24, 145, 150.36, 151.964, 157.25, 158.9253, 162.5, 164.9303, 167.259, 168.9342, 173.04, 174.967, 178.49, 180.9479, 183.84, 186.207, 190.23, 192.217, 195.078, 196.9665, 200.59, 204.3833, 207.2, 208.9804, 209, 210, 222, 223, 226, 227, 231.0359, 232.0381, 237, 238.0289, 243, 244, 247, 247, 251, 252, 257, 258, 259, 262, 267, 261.1087, 263.1182, 262.1229, 269, 278, 281.1620, 281.1684, 285.1744, 286.1810, 287.1904, 288.1943, 291.2045, 294.2104, 294.2139, 316, 320, 320, 321, 325, 330, 332, 334, 335];
                        if (masa_tablaperiodica[numero_elemento] == "" || masa_tablaperiodica[numero_elemento] == undefined) {
                            masa_molar = "_ _ _";
                        }
                        else {
                            //masa mol hidrogeno--> 1.00784
                            let separar_decimales = (((masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[0]) + (1.00784 * cantidad_atomos_formula[1])).toString());
                            separar_decimales = separar_decimales.split(".");
                            if (separar_decimales.length == 2 && separar_decimales[1].length > 5) {
                                masa_molar = ((masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[0]) + (1.00784 * cantidad_atomos_formula[1])).toFixed(5);
                            }
                            else {
                                masa_molar = (masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[0]) + (1.00784 * cantidad_atomos_formula[1]);
                            }
                        }
                        masa_tablaperiodica = null;//borrar variable basura
                        let nombre_tablaperiodica = ["Hidrógeno", "Helio", "Litio", "Berilio", "Boro", "Carbono", "Nitrógeno", "Oxígeno", "Flúor", "Neón", "Sodio", "Magnesio", "Aluminio", "Silicio", "Fósforo", "Azufre", "Cloro", "Argón", "Potasio", "Calcio", "Escandio", "Titanio", "Vanadio", "Cromo", "Manganeso", "Hierro", "Cobalto", "Níquel", "Cobre", "Zinc", "Galio", "Germanio", "Arsénico", "Selenio", "Bromo", "Kriptón", "Rubidio", "Estroncio", "Itrio", "Zirconio", "Niobio", "Molibdeno", "Tecnecio", "Rutenio", "Rodio", "Paladio", "Plata", "Cadmio", "Indio", "Estaño", "Antimonio", "Telurio", "Yodo", "Xenón", "Cesio", "Bario", "Lantano", "Cerio", "Praseodimio", "Neodimio", "Prometio", "Samario", "Europio", "Gadolinio", "Terbio", "Disprosio", "Holmio", "Erbio", "Tulio", "Iterbio", "Lutecio", "Hafnio", "Tantalio", "Wolframio", "Renio", "Osmio", "Iridio", "Platino", "Oro", "Mercurio", "Talio", "Plomo", "Bismutio", "Polonio", "Ástato", "Radón", "Francio", "Radio", "Actinio", "Torio", "Protactinio", "Uranio", "Neptanio", "Plutonio", "Americio", "Curio", "Berkelio", "Californio", "Einstenio", "Fermio", "Mendelevio", "Nobelio", "Laurencio", "Rutherfordio", "Dubnio", "Seaborgio", "Bohrio", "Hassio", "Meitnerio", "Darmstadio", "Roentgenio", "Copernicio", "Nihonio", "Flerovio", "Moscovio", "Livermorio", "Teneso", "Oganesón", "Unbiunium", "Unbinilium", "Unbiunium", "Unbibium", "Unbitrium", "Unbiquandium", "Unbipentium", "Unbihexium", "Unbiseptium"];
                        //nomenclatura sistematica
                        if (cantidad_atomos_formula[0] == 1 && cantidad_atomos_formula[1] == 1) {
                            nomenclatura_sistematica = ("Monohidruro de " + nombre_tablaperiodica[numero_elemento]).toString();
                        }
                        else {
                            nomenclatura_sistematica = ("(" + cantidad_atomos_formula[1] + ")" + "hidruro de (" + cantidad_atomos_formula[0] + ")" + nombre_tablaperiodica[numero_elemento].toLowerCase()).toString();
                            //prefijos
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(1)hidruro", "Hidruro");//(poner en mayuscula la 'o')
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(2)", "di");//2
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(1)", "");//1
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(3)", "tri");//3
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(4)", "tetra");//4
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(5)", "penta");//5
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(6)", "hexa");//6
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(7)", "hepta");//7
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(8)", "octa");//8
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(9)", "nona");//9
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(10)", "deca");//10
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(11)", "undeca");//11
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(12)", "dodeca");//12
                        }
                        //calcular total valencias
                        let cantidad_valencias = valencias_elemento_compañero.split(",");
                        valencias_elemento_compañero = null;//borrar variable basura
                        if (cantidad_valencias.length > 1) {
                            let valencia_aceptada = 0;
                            const valencia_hidrojeno = (-1) * cantidad_atomos_formula[1];
                            for (let i = 0; i < cantidad_valencias.length; i++) {
                                if (((cantidad_valencias[i] * cantidad_atomos_formula[0]) * (-1)) == valencia_hidrojeno) {
                                    valencia_aceptada = Number(cantidad_valencias[i]);
                                }
                            }
                            if (valencia_aceptada == 0 || valencia_aceptada == "" || valencia_aceptada == null) {//primera valencia
                                valencia_aceptada = Number(cantidad_valencias[0]);
                            }
                            if (valencia_aceptada == undefined || valencia_aceptada == "" || valencia_aceptada == null) {//desconocida valencia
                                valencia_aceptada = "?";
                            }
                            //guardar valencia (mostrar luego)
                            if (valencia_aceptada != "?") {
                                valencias = ((valencia_aceptada * cantidad_atomos_formula[0]) + " - " + (valencia_hidrojeno * (-1))).toString();
                            }
                            else {
                                valencias = ("? - " + (valencia_hidrojeno * (-1))).toString();
                            }
                            //reiniciar variables basura
                            cantidad_valencias = null;
                            //nomenclatura stock
                            if (valencia_aceptada != "?") {
                                //valencia numeros romanos
                                let valencia_romana;
                                switch (valencia_aceptada) {
                                    case 1:
                                        valencia_romana = "I";
                                        break;
                                    case 2:
                                        valencia_romana = "II";
                                        break;
                                    case 3:
                                        valencia_romana = "III";
                                        break;
                                    case 4:
                                        valencia_romana = "IV";
                                        break;
                                    case 5:
                                        valencia_romana = "V";
                                        break;
                                    case 6:
                                        valencia_romana = "VI";
                                        break;
                                    case 7:
                                        valencia_romana = "VII";
                                        break;
                                    case 8:
                                        valencia_romana = "VIII";
                                        break;
                                    case 9:
                                        valencia_romana = "IX";
                                        break;
                                    case 10:
                                        valencia_romana = "X";
                                        break;
                                    case 11:
                                        valencia_romana = "XI";
                                        break;
                                    case 12:
                                        valencia_romana = "XII";
                                        break;
                                    case 13:
                                        valencia_romana = "XIII";
                                        break;
                                }
                                nomenclatura_stock = "Hidruro de " + nombre_tablaperiodica[numero_elemento] + "(" + valencia_romana + ")";
                            }
                            else {
                                nomenclatura_stock = "Hidruro de " + nombre_tablaperiodica[numero_elemento] + "( ? )";
                            }
                        }
                        else {
                            //valencias + nomenclatura stock
                            if (cantidad_valencias[0] != "?") {
                                const valencia_aceptada = Number(cantidad_valencias[0]);
                                const valencia_hidrojeno = (-1) * cantidad_atomos_formula[1];
                                valencias = ((valencia_aceptada * cantidad_atomos_formula[0]) + " - " + (valencia_hidrojeno * (-1))).toString();
                                nomenclatura_stock = "Hidruro de " + nombre_tablaperiodica[numero_elemento];
                            }
                            else {
                                const valencia_hidrojeno = (-1) * cantidad_atomos_formula[1];
                                valencias = (("?") + " - " + (valencia_hidrojeno * (-1))).toString();
                                nomenclatura_stock = "Hidruro de " + nombre_tablaperiodica[numero_elemento];
                            }
                        }
                    }
                    else if (es_hidruro_no_metalico == true) {
                        //reiniciar variables basura
                        es_oxido = null;
                        es_peroxido = null;
                        es_oxigeno_grupo17 = null;
                        es_hidruro_no_metalico = null;
                        es_hidruro_metalico = null;
                        es_salbinaria = null;
                        encontrado = null;
                        let tablaperiodica = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og", "Uue", "Ubn", "Ubu", "Ubb", "Ubt", "Ubq", "Ubp", "Ubh", "Ubs"];
                        //buscar elemento compañero
                        let numero_elemento = 0;
                        for (let i = 0; i < tablaperiodica.length; i++) {
                            numero_elemento++;
                            if (tablaperiodica[i] == atomos_formula[1]) {//encontrado
                                break;
                            }
                        }
                        numero_elemento--;

                        //calcular valencias
                        let valencias_tablaperiodica = ["1", "0", "1", "2", "3", "2, 4", "1, 2, 3, 4, 5", "2", "1, 2", "0", "1", "2", "3", "2, 4", "3, 5", "2, 4, 6", "1, 3, 5, 7", "0", "1", "2", "3", "2, 3, 4", "2, 3, 4, 5", "2, 3, 6", "2, 3, 4, 6, 7", "2, 3, 6", "2, 3", "2, 3", "1, 2", "2", "3", "3, 4", "3, 5", "2, 4, 6", "1, 3, 5, 7", "0", "1", "2", "2, 3", "2, 3, 4", "2, 3, 4, 5", "4, 6", "1, 2, 3, 4, 5, 6, 7", "2, 3, 4, 5, 6, 8", "3", "0, 2, 4", "1, 2, 3", "2", "2, 3", "2, 4", "3, 5", "2, 4, 6", "1, 3, 5, 7", "0", "1", "2", "3, 4, 5", "3, 4, 5, 6", "8", "", "", "", "", "", "", "", "", "", "", "", "", "2, 3", "2, 3, 4", "2, 3, 4", "2, 3, 4", "3", "2, 3", "1, 2, 3", "1, 3, 4", "2, 3, 4", "2, 3", "3", "2, 3", "2, 3", "", "4", "2, 3, 4, 5", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
                        let valencias_elemento_compañero;
                        if (valencias_tablaperiodica[numero_elemento] == undefined || valencias_tablaperiodica[numero_elemento] == "") {
                            valencias_elemento_compañero = "_ _ _";
                        }
                        else {
                            switch (tablaperiodica[numero_elemento]) {
                                case "F":
                                    valencias_elemento_compañero = "-1";
                                    break;
                                case "S":
                                    valencias_elemento_compañero = "-2";
                                    break;
                                case "Cl":
                                    valencias_elemento_compañero = "-1";
                                    break;
                                case "Se":
                                    valencias_elemento_compañero = "-2";
                                    break;
                                case "Br":
                                    valencias_elemento_compañero = "-1";
                                    break;
                                case "Te":
                                    valencias_elemento_compañero = "-2";
                                    break;
                                case "I":
                                    valencias_elemento_compañero = "-1";
                                    break;
                                case "Po":
                                    valencias_elemento_compañero = "-2";
                                    break;
                                case "At":
                                    valencias_elemento_compañero = "-1";
                                    break;
                            }
                        }
                        tablaperiodica = null;//borrar variable basura
                        valencias_tablaperiodica = null;//borrar variable basura
                        //calcular masa g/mol
                        let masa_tablaperiodica = [1.00784, 4.0026, 6.941, 9.0121, 10.811, 12.0107, 14.0067, 15.9994, 18.9984, 20.1797, 22.9897, 24.3050, 26.9815, 28.0855, 30.9737, 32.065, 35.453, 39.948, 39.0983, 40.078, 44.9559, 47.867, 50.9415, 51.9961, 54.9380, 55.845, 58.9331, 58.6934, 63.546, 65.38, 69.723, 72.64, 74.9216, 78.96, 79.904, 83.798, 85.467, 87.62, 88.9059, 91.224, 92.9064, 95.94, 98.906, 101.07, 102.9055, 106.42, 107.8682, 112.411, 114.818, 118.710, 121.760, 127.60, 126.9045, 131.293, 132.9055, 137.327, 138.9055, 140.116, 140.9077, 144.24, 145, 150.36, 151.964, 157.25, 158.9253, 162.5, 164.9303, 167.259, 168.9342, 173.04, 174.967, 178.49, 180.9479, 183.84, 186.207, 190.23, 192.217, 195.078, 196.9665, 200.59, 204.3833, 207.2, 208.9804, 209, 210, 222, 223, 226, 227, 231.0359, 232.0381, 237, 238.0289, 243, 244, 247, 247, 251, 252, 257, 258, 259, 262, 267, 261.1087, 263.1182, 262.1229, 269, 278, 281.1620, 281.1684, 285.1744, 286.1810, 287.1904, 288.1943, 291.2045, 294.2104, 294.2139, 316, 320, 320, 321, 325, 330, 332, 334, 335];
                        if (masa_tablaperiodica[numero_elemento] == "" || masa_tablaperiodica[numero_elemento] == undefined) {
                            masa_molar = "_ _ _";
                        }
                        else {
                            //masa mol hidrogeno--> 1.00784
                            let separar_decimales = (((masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[1]) + (1.00784 * cantidad_atomos_formula[0])).toString());
                            separar_decimales = separar_decimales.split(".");
                            if (separar_decimales.length == 2 && separar_decimales[1].length > 5) {
                                masa_molar = ((masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[1]) + (1.00784 * cantidad_atomos_formula[0])).toFixed(5);
                            }
                            else {
                                masa_molar = (masa_tablaperiodica[numero_elemento] * cantidad_atomos_formula[1]) + (1.00784 * cantidad_atomos_formula[0]);
                            }
                        }
                        masa_tablaperiodica = null;//borrar variable basura
                        let nombre_tablaperiodica = ["Hidrógeno", "Helio", "Litio", "Berilio", "Boro", "Carbono", "Nitrógeno", "Oxigenuro", "Fluoruro", "Neón", "Sodio", "Magnesio", "Aluminio", "Silicio", "Fósforo", "Sulfuro", "Cloruro", "Argón", "Potasio", "Calcio", "Escandio", "Titanio", "Vanadio", "Cromo", "Manganeso", "Hierro", "Cobalto", "Níquel", "Cobre", "Zinc", "Galio", "Germanio", "Arsénico", "Seleniuro", "Bromuro", "Kriptón", "Rubidio", "Estroncio", "Itrio", "Zirconio", "Niobio", "Molibdeno", "Tecnecio", "Rutenio", "Rodio", "Paladio", "Plata", "Cadmio", "Indio", "Estaño", "Antimonio", "Telururo", "Yoduro", "Xenón", "Cesio", "Bario", "Lantano", "Cerio", "Praseodimio", "Neodimio", "Prometio", "Samario", "Europio", "Gadolinio", "Terbio", "Disprosio", "Holmio", "Erbio", "Tulio", "Iterbio", "Lutecio", "Hafnio", "Tantalio", "Wolframio", "Renio", "Osmio", "Iridio", "Platino", "Oro", "Mercurio", "Talio", "Plomo", "Bismutio", "Poloniuro", "Astaturo", "Radón", "Francio", "Radio", "Actinio", "Torio", "Protactinio", "Uranio", "Neptanio", "Plutonio", "Americio", "Curio", "Berkelio", "Californio", "Einstenio", "Fermio", "Mendelevio", "Nobelio", "Laurencio", "Rutherfordio", "Dubnio", "Seaborgio", "Bohrio", "Hassio", "Meitnerio", "Darmstadio", "Roentgenio", "Copernicio", "Nihonio", "Flerovio", "Moscovio", "Livermorio", "Teneso", "Oganesón", "Unbiunium", "Unbinilium", "Unbiunium", "Unbibium", "Unbitrium", "Unbiquandium", "Unbipentium", "Unbihexium", "Unbiseptium"];
                        //nomenclatura sistematica
                        if (cantidad_atomos_formula[0] == 1 && cantidad_atomos_formula[1] == 1) {
                            nomenclatura_sistematica = (nombre_tablaperiodica[numero_elemento].toLowerCase()).toString() + " de hidrógeno";
                        }
                        else {
                            nomenclatura_sistematica = (("(" + cantidad_atomos_formula[1] + ")" + nombre_tablaperiodica[numero_elemento].toLowerCase()).toString() + " de (" + cantidad_atomos_formula[0] + ")hidrógeno").toString();
                            //prefijos
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(1)", "");//1
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(2)", "di");//2
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(3)", "tri");//3
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(4)", "tetra");//4
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(5)", "penta");//5
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(6)", "hexa");//6
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(7)", "hepta");//7
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(8)", "octa");//8
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(9)", "nona");//9
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(10)", "deca");//10
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(11)", "undeca");//11
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(12)", "dodeca");//12
                        }
                        //calcular total valencias
                        let cantidad_valencias = valencias_elemento_compañero.split(",");
                        valencias_elemento_compañero = null;//borrar variable basura
                        if (cantidad_valencias.length > 1) {
                            let valencia_aceptada = 0;
                            const valencia_hidrojeno = 1 * cantidad_atomos_formula[1];
                            for (let i = 0; i < cantidad_valencias.length; i++) {
                                if (((cantidad_valencias[i] * cantidad_atomos_formula[0]) * (-1)) == valencia_hidrojeno) {
                                    valencia_aceptada = Number(cantidad_valencias[i]);
                                }
                            }
                            if (valencia_aceptada == 0 || valencia_aceptada == "" || valencia_aceptada == null) {//primera valencia
                                valencia_aceptada = Number(cantidad_valencias[0]);
                            }
                            if (valencia_aceptada == undefined || valencia_aceptada == "" || valencia_aceptada == null) {//desconocida valencia
                                valencia_aceptada = "?";
                            }
                            //guardar valencia (mostrar luego)
                            if (valencia_aceptada != "?") {
                                valencias = ((valencia_aceptada * cantidad_atomos_formula[0]) + " +" + valencia_hidrojeno).toString();
                            }
                            else {
                                valencias = ("? + " + (valencia_hidrojeno)).toString();
                            }
                            //reiniciar variables basura
                            cantidad_valencias = null;
                            //nomenclatura stock
                            if (valencia_aceptada != "?") {
                                //valencia numeros romanos
                                let valencia_romana;
                                switch (valencia_aceptada) {
                                    case 1:
                                        valencia_romana = "I";
                                        break;
                                    case 2:
                                        valencia_romana = "II";
                                        break;
                                    case 3:
                                        valencia_romana = "III";
                                        break;
                                    case 4:
                                        valencia_romana = "IV";
                                        break;
                                    case 5:
                                        valencia_romana = "V";
                                        break;
                                    case 6:
                                        valencia_romana = "VI";
                                        break;
                                    case 7:
                                        valencia_romana = "VII";
                                        break;
                                    case 8:
                                        valencia_romana = "VIII";
                                        break;
                                    case 9:
                                        valencia_romana = "IX";
                                        break;
                                    case 10:
                                        valencia_romana = "X";
                                        break;
                                    case 11:
                                        valencia_romana = "XI";
                                        break;
                                    case 12:
                                        valencia_romana = "XII";
                                        break;
                                    case 13:
                                        valencia_romana = "XIII";
                                        break;
                                }
                                nomenclatura_stock = nombre_tablaperiodica[numero_elemento] + " de hidrógeno";
                            }
                            else {
                                nomenclatura_stock = nombre_tablaperiodica[numero_elemento] + " de hidrógeno";
                            }
                        }
                        else {
                            //valencias + nomenclatura stock
                            if (cantidad_valencias[0] != "?") {
                                const valencia_aceptada = Number(cantidad_valencias[0]);
                                const valencia_hidrojeno = (+1) * cantidad_atomos_formula[1];
                                valencias = ((valencia_aceptada * cantidad_atomos_formula[0]) + " + " + valencia_hidrojeno).toString();
                                nomenclatura_stock = nombre_tablaperiodica[numero_elemento] + " de hidrógeno";
                            }
                            else {
                                const valencia_hidrojeno = (+1) * cantidad_atomos_formula[1];
                                valencias = (("?") + " + " + valencia_hidrojeno).toString();
                                nomenclatura_stock = nombre_tablaperiodica[numero_elemento] + " de hidrógeno";
                            }
                        }
                    }
                    else if (es_salbinaria == true) {
                        //reiniciar variables basura
                        es_oxido = null, es_peroxido = null, es_oxigeno_grupo17 = null;
                        es_hidruro_no_metalico = null, es_hidruro_metalico = null;
                        es_salbinaria = null;
                        encontrado = null;
                        //buscar elementos
                        let numero_elemento_metal = 0;
                        let numero_elemento_no_metal = 0;
                        let tablaperiodica_simbolos = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og", "Uue", "Ubn", "Ubu", "Ubb", "Ubt", "Ubq", "Ubp", "Ubh", "Ubs"];
                        //metal
                        for (let i = 0; i < tablaperiodica_simbolos.length; i++) {
                            numero_elemento_metal++;
                            if (tablaperiodica_simbolos[i] == atomos_formula[0]) {//encontrado
                                break;
                            }
                        }
                        //no metal
                        for (let i = 0; i < tablaperiodica_simbolos.length; i++) {
                            numero_elemento_no_metal++;
                            if (tablaperiodica_simbolos[i] == atomos_formula[1]) {//encontrado
                                break;
                            }
                        }
                        tablaperiodica_simbolos = null;
                        numero_elemento_metal--, numero_elemento_no_metal--;
                        //calcular valencias
                        let valencias_no_metal = "";
                        let valencias_metal = "";
                        //no metal
                        switch (atomos_formula[1]) {
                            case "Br":
                                valencias_no_metal = "-1";
                                break;
                            case "C":
                                valencias_no_metal = "-4";
                                break;
                            case "N":
                                valencias_no_metal = "-1,-2,-3";
                                break;
                            case "P":
                                valencias_no_metal = "-3";
                                break;
                            case "S":
                                valencias_no_metal = "-2";
                                break;
                            case "F":
                                valencias_no_metal = "-1";
                                break;
                            case "Cl":
                                valencias_no_metal = "-1";
                                break;
                            case "I":
                                valencias_no_metal = "-1";
                                break;
                            case "At":
                                valencias_no_metal = "-1";
                                break;
                        }
                        //metal
                        let valencias_tablaperiodica = ["1", "0", "1", "2", "3", "2, 4", "1, 2, 3, 4, 5", "2", "1, 2", "0", "1", "2", "3", "2, 4", "3, 5", "2, 4, 6", "1, 3, 5, 7", "0", "1", "2", "3", "2, 3, 4", "2, 3, 4, 5", "2, 3, 6", "2, 3, 4, 6, 7", "2, 3, 6", "2, 3", "2, 3", "1, 2", "2", "3", "3, 4", "3, 5", "2, 4, 6", "1, 3, 5, 7", "0", "1", "2", "2, 3", "2, 3, 4", "2, 3, 4, 5", "4, 6", "1, 2, 3, 4, 5, 6, 7", "2, 3, 4, 5, 6, 8", "3", "0, 2, 4", "1, 2, 3", "2", "2, 3", "2, 4", "3, 5", "2, 4, 6", "1, 3, 5, 7", "0", "1", "2", "3, 4, 5", "3, 4, 5, 6", "8", "", "", "", "", "", "", "", "", "", "", "", "", "2, 3", "2, 3, 4", "2, 3, 4", "2, 3, 4", "3", "2, 3", "1, 2, 3", "1, 3, 4", "2, 3, 4", "2, 3", "3", "2, 3", "2, 3", "", "4", "2, 3, 4, 5", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
                        valencias_metal = valencias_tablaperiodica[numero_elemento_metal];
                        valencias_tablaperiodica = null;
                        valencias_no_metal = valencias_no_metal.split(",");
                        valencias_metal = valencias_metal.split(",");
                        //calcular masa (g/mol)
                        let masa_molar_elemento_metal = 0;
                        let masa_molar_elemento_no_metal = 0;
                        let masa_tablaperiodica = [1.00784, 4.0026, 6.941, 9.0121, 10.811, 12.0107, 14.0067, 15.9994, 18.9984, 20.1797, 22.9897, 24.3050, 26.9815, 28.0855, 30.9737, 32.065, 35.453, 39.948, 39.0983, 40.078, 44.9559, 47.867, 50.9415, 51.9961, 54.9380, 55.845, 58.9331, 58.6934, 63.546, 65.38, 69.723, 72.64, 74.9216, 78.96, 79.904, 83.798, 85.467, 87.62, 88.9059, 91.224, 92.9064, 95.94, 98.906, 101.07, 102.9055, 106.42, 107.8682, 112.411, 114.818, 118.710, 121.760, 127.60, 126.9045, 131.293, 132.9055, 137.327, 138.9055, 140.116, 140.9077, 144.24, 145, 150.36, 151.964, 157.25, 158.9253, 162.5, 164.9303, 167.259, 168.9342, 173.04, 174.967, 178.49, 180.9479, 183.84, 186.207, 190.23, 192.217, 195.078, 196.9665, 200.59, 204.3833, 207.2, 208.9804, 209, 210, 222, 223, 226, 227, 231.0359, 232.0381, 237, 238.0289, 243, 244, 247, 247, 251, 252, 257, 258, 259, 262, 267, 261.1087, 263.1182, 262.1229, 269, 278, 281.1620, 281.1684, 285.1744, 286.1810, 287.1904, 288.1943, 291.2045, 294.2104, 294.2139, 316, 320, 320, 321, 325, 330, 332, 334, 335];
                        //metal
                        if (masa_tablaperiodica[numero_elemento_metal] == "" || masa_tablaperiodica[numero_elemento_metal] == undefined) {
                            masa_molar_elemento_metal = "_ _ _";
                        }
                        else {
                            masa_molar_elemento_metal = masa_tablaperiodica[numero_elemento_metal] * cantidad_atomos_formula[0];
                        }
                        //no metal
                        if (masa_tablaperiodica[numero_elemento_no_metal] == "" || masa_tablaperiodica[numero_elemento_no_metal] == undefined) {
                            masa_molar_elemento_no_metal = "_ _ _";
                        }
                        else {
                            masa_molar_elemento_no_metal = masa_tablaperiodica[numero_elemento_no_metal] * cantidad_atomos_formula[1];
                        }
                        if (masa_molar_elemento_metal == "_ _ _" || masa_molar_elemento_no_metal == "_ _ _") {
                            //redondear masas
                            let masa_molar_elemento_metal_decimales = masa_molar_elemento_metal.split(".");
                            if (!isNaN(eval(masa_molar_elemento_metal)) && masa_molar_elemento_metal_decimales[1].length > 6) {
                                masa_molar_elemento_metal = masa_molar_elemento_metal.toFixed(6);
                            }
                            masa_molar_elemento_metal_decimales = null;
                            let masa_molar_elemento_no_metal_decimales = masa_molar_elemento_no_metal.split(".");
                            if (!isNaN(eval(masa_molar_elemento_no_metal)) && masa_molar_elemento_no_metal_decimales[1].length > 6) {
                                masa_molar_elemento_no_metal = masa_molar_elemento_no_metal.toFixed(6);
                            }
                            masa_molar_elemento_no_metal_decimales = null;
                            //guardar masas mostrar
                            masa_molar = masa_molar_elemento_metal + " + " + masa_molar_elemento_no_metal;
                        }
                        else {
                            //redondear masas
                            let masa_molar_elemento_metal_decimales = (masa_molar_elemento_metal.toString()).split(".");
                            if (!isNaN(eval(masa_molar_elemento_metal)) && masa_molar_elemento_metal_decimales[1].length > 6) {
                                masa_molar_elemento_metal = masa_molar_elemento_metal.toFixed(6);
                            }
                            masa_molar_elemento_metal_decimales = null;
                            let masa_molar_elemento_no_metal_decimales = (masa_molar_elemento_no_metal.toString()).split(".");
                            if (!isNaN(eval(masa_molar_elemento_no_metal)) && masa_molar_elemento_no_metal_decimales[1].length > 6) {
                                masa_molar_elemento_no_metal = masa_molar_elemento_no_metal.toFixed(6);
                            }
                            masa_molar_elemento_no_metal_decimales = null;
                            //guardar masas mostrar
                            masa_molar = eval((masa_molar_elemento_metal) + "+" + (masa_molar_elemento_no_metal));
                        }
                        masa_tablaperiodica = null;//borrar variable basura
                        //nombres elementos
                        let nombre_tablaperiodica = ["Hidrógeno", "Helio", "Litio", "Berilio", "Boro", "Carbonuro", "Nitruro", "Oxígeno", "Fluoruro", "Neón", "Sodio", "Magnesio", "Aluminio", "Silicio", "Fosfuro", "Sulfuro", "Cloruro", "Argón", "Potasio", "Calcio", "Escandio", "Titanio", "Vanadio", "Cromo", "Manganeso", "Hierro", "Cobalto", "Níquel", "Cobre", "Zinc", "Galio", "Germanio", "Arsénico", "Selenio", "Bromuro", "Kriptón", "Rubidio", "Estroncio", "Itrio", "Zirconio", "Niobio", "Molibdeno", "Tecnecio", "Rutenio", "Rodio", "Paladio", "Plata", "Cadmio", "Indio", "Estaño", "Antimonio", "Telurio", "Yoduro", "Xenón", "Cesio", "Bario", "Lantano", "Cerio", "Praseodimio", "Neodimio", "Prometio", "Samario", "Europio", "Gadolinio", "Terbio", "Disprosio", "Holmio", "Erbio", "Tulio", "Iterbio", "Lutecio", "Hafnio", "Tantalio", "Wolframio", "Renio", "Osmio", "Iridio", "Platino", "Oro", "Mercurio", "Talio", "Plomo", "Bismutio", "Polonio", "Astaturo", "Radón", "Francio", "Radio", "Actinio", "Torio", "Protactinio", "Uranio", "Neptanio", "Plutonio", "Americio", "Curio", "Berkelio", "Californio", "Einstenio", "Fermio", "Mendelevio", "Nobelio", "Laurencio", "Rutherfordio", "Dubnio", "Seaborgio", "Bohrio", "Hassio", "Meitnerio", "Darmstadio", "Roentgenio", "Copernicio", "Nihonio", "Flerovio", "Moscovio", "Livermorio", "Teneso", "Oganesón", "Unbiunium", "Unbinilium", "Unbiunium", "Unbibium", "Unbitrium", "Unbiquandium", "Unbipentium", "Unbihexium", "Unbiseptium"];
                        //nomenclatura sistematica
                        if (cantidad_atomos_formula[0] == 1 && cantidad_atomos_formula[1] == 1) {
                            nomenclatura_sistematica = "Mono" + nombre_tablaperiodica[numero_elemento_no_metal].toLowerCase() + " de " + nombre_tablaperiodica[numero_elemento_metal].toLowerCase();
                        }
                        else {
                            nomenclatura_sistematica = "(" + cantidad_atomos_formula[1] + ")" + nombre_tablaperiodica[numero_elemento_no_metal].toLowerCase() + " de " + nombre_tablaperiodica[numero_elemento_metal].toLowerCase();
                            //prefijos
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(1)", "");//1
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(2)", "di");//2
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(3)", "tri");//3
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(4)", "tetra");//4
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(5)", "penta");//5
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(6)", "hexa");//6
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(7)", "hepta");//7
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(8)", "octa");//8
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(9)", "nona");//9
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(10)", "deca");//10
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(11)", "undeca");//11
                            nomenclatura_sistematica = nomenclatura_sistematica.replaceAll("(12)", "dodeca");//12
                        }
                        //calcular total valencias
                        let valencia_aceptada_elemento_metal = 0;
                        let valencia_aceptada_elemento_no_metal = 0;
                        if (valencias_no_metal.length == 1 && valencias_no_metal[0] < 0) {
                            valencia_aceptada_elemento_no_metal = valencias_no_metal[0];
                        }
                        else if (valencias_no_metal[0] == "") {
                            valencia_aceptada_elemento_no_metal = "?";
                        }
                        if (valencias_metal.length == 1 && valencias_metal[0] > 0) {
                            valencia_aceptada_elemento_metal = valencias_metal[0];
                        }
                        else if (valencias_metal[0] == "?") {
                            valencia_aceptada_elemento_metal = "?";
                        }
                        if (valencia_aceptada_elemento_metal != 0 && valencia_aceptada_elemento_metal != "?" && valencia_aceptada_elemento_no_metal == 0) {
                            for (let i = 0; i < valencias_no_metal.length; i++) {
                                if ((valencia_aceptada_elemento_metal * cantidad_atomos_formula[0]) == (-1 * (valencias_no_metal[i] * cantidad_atomos_formula[1]))) {
                                    valencia_aceptada_elemento_no_metal = valencias_no_metal[i];
                                    break;
                                }
                            }
                            if (valencia_aceptada_elemento_no_metal == 0) {
                                valencia_aceptada_elemento_no_metal = valencias_no_metal[0];
                            }
                        }
                        else if (valencia_aceptada_elemento_metal == 0 && valencia_aceptada_elemento_no_metal != 0 && valencia_aceptada_elemento_no_metal != "?") {
                            for (let i = 0; i < valencias_metal.length; i++) {
                                if ((valencias_metal[i] * cantidad_atomos_formula[0]) == (-1 * (valencia_aceptada_elemento_no_metal * cantidad_atomos_formula[1]))) {
                                    valencia_aceptada_elemento_metal = valencias_metal[i];
                                    break;
                                }
                            }
                            if (valencia_aceptada_elemento_metal == 0) {
                                valencia_aceptada_elemento_metal = valencias_metal[0];
                            }
                        }
                        valencias = ((valencia_aceptada_elemento_metal * cantidad_atomos_formula[0]) + "-" + ((valencia_aceptada_elemento_no_metal * cantidad_atomos_formula[1]) * (-1))).toString();
                        //nomenclatura stock
                        //calcular nomenclatura romana
                        let valencia_romana_elemento_metal = "";
                        if (valencia_aceptada_elemento_metal != "?") {
                            switch (Number(valencia_aceptada_elemento_metal)) {
                                case 1:
                                    valencia_romana_elemento_metal = "I";
                                    break;
                                case 2:
                                    valencia_romana_elemento_metal = "II";
                                    break;
                                case 3:
                                    valencia_romana_elemento_metal = "III";
                                    break;
                                case 4:
                                    valencia_romana_elemento_metal = "IV";
                                    break;
                                case 5:
                                    valencia_romana_elemento_metal = "V";
                                    break;
                                case 6:
                                    valencia_romana_elemento_metal = "VI";
                                    break;
                                case 7:
                                    valencia_romana_elemento_metal = "VII";
                                    break;
                                case 8:
                                    valencia_romana_elemento_metal = "VIII";
                                    break;
                            }
                        }
                        else {
                            valencia_aceptada_elemento_metal = "?";
                        }
                        if (valencias_metal.length > 1) {
                            nomenclatura_stock = (nombre_tablaperiodica[numero_elemento_no_metal] + " de " + nombre_tablaperiodica[numero_elemento_metal].toLowerCase() + "(" + valencia_romana_elemento_metal + ")").toString();
                        }
                        else {
                            nomenclatura_stock = (nombre_tablaperiodica[numero_elemento_no_metal] + " de " + nombre_tablaperiodica[numero_elemento_metal].toLowerCase() + "(" + valencia_romana_elemento_metal + ")").toString();
                        }
                    }
                    else {//mensaje error()
                        console.log("no");
                    }
                    //mostrar en pantalla
                    document.getElementById("div-div-div-datos-formulacion").innerHTML = "<div id='div-div-datos-calculados-formulacion'><div class='div-datos-calculados-formulacion'><h3 class='titulo-datos-calculados-formulacion'>N.Sistemática:</h3><h3 class='text-datos-calculados-formulacion'id='text-datos-nomenclatura-sistematica' style='font-size:16px;'>_ _ _</h3></div><div class='div-datos-calculados-formulacion'><h3 class='titulo-datos-calculados-formulacion'>N.Stock:</h3><h3 class='text-datos-calculados-formulacion'id='text-datos-nomenclatura-stock' style='font-size:16px;'>_ _ _</h3></div><div class='div-datos-calculados-formulacion'><h3 class='titulo-datos-calculados-formulacion'>Tipo:</h3><h3 class='text-datos-calculados-formulacion'id='text-datos-tipo-combinacion' style='font-size:18px;'>_ _ _</h3></div><div class='div-datos-calculados-formulacion'><h3 class='titulo-datos-calculados-formulacion'>Valencia:</h3><h3 class='text-datos-calculados-formulacion'id='text-datos-valencias-combinacion' style='font-size:19px;'>_ _ _</h3></div><div class='div-datos-calculados-formulacion'><h3 class='titulo-datos-calculados-formulacion'>Masa:</h3><h3 class='text-datos-calculados-formulacion'id='text-datos-masa-combinacion' style='font-size:17px;'>_ _ _</h3></div></div>";
                    //nomenclatura sistematica
                    document.getElementById("text-datos-nomenclatura-sistematica").innerHTML = nomenclatura_sistematica;
                    //nomenclatura stock
                    document.getElementById("text-datos-nomenclatura-stock").innerHTML = nomenclatura_stock;
                    //tipo combinacion
                    document.getElementById("text-datos-tipo-combinacion").innerHTML = combinacion;
                    //valencia total compuesto
                    if (!isNaN(eval(valencias))) {
                        document.getElementById("text-datos-valencias-combinacion").innerHTML = valencias + " = " + eval(valencias);
                    }
                    else {
                        document.getElementById("text-datos-valencias-combinacion").innerHTML = valencias + " = ?";
                    }
                    //masa molar
                    let masa_separar_decimales = (masa_molar.toString()).split(".");
                    if (masa_separar_decimales.length == 2 && masa_separar_decimales[1].length > 6) {
                        document.getElementById("text-datos-masa-combinacion").innerHTML = masa_molar.toFixed(6) + " <sub style='font-size:15px;'>(g/mol)</sub>";
                    }
                    else {
                        document.getElementById("text-datos-masa-combinacion").innerHTML = masa_molar + " <sub style='font-size:15px;'>(g/mol)</sub>";
                    }
                }
                else {//no comenzar nomenclatura (error); mandar mensaje error()
                    console.log("nada");
                }
            }
            else {//ternario (oxoacido, oxosal)

            }
        }
        else {//encontrar subindice
            let subindice_encontrado = false;
            combinacion_especial = combinacion_especial.toLowerCase().replace('(', '').replace(')', '')
            switch (combinacion_especial) {
                case "aq"://combinacion acuosa(hidrácidos); -Ácido elemento+hídrico-
                    subindice_encontrado = "ac";
                    break;
                case "ac"://combinacion acuosa(hidrácidos); -Ácido elemento+hídrico-
                    subindice_encontrado = "ac";
                    break;
            }
            if (subindice_encontrado != false) {//crear nomenclatura
                if (subindice_encontrado == "ac") {//hidrácidos
                    //confirmar si la formula es un hidruro para que sea hidracido
                    subindice_encontrado = null;
                    //identificar elemento
                    let masa_tablaperiodica = [1.00784, 4.0026, 6.941, 9.0121, 10.811, 12.0107, 14.0067, 15.9994, 18.9984, 20.1797, 22.9897, 24.3050, 26.9815, 28.0855, 30.9737, 32.065, 35.453, 39.948, 39.0983, 40.078, 44.9559, 47.867, 50.9415, 51.9961, 54.9380, 55.845, 58.9331, 58.6934, 63.546, 65.38, 69.723, 72.64, 74.9216, 78.96, 79.904, 83.798, 85.467, 87.62, 88.9059, 91.224, 92.9064, 95.94, 98.906, 101.07, 102.9055, 106.42, 107.8682, 112.411, 114.818, 118.710, 121.760, 127.60, 126.9045, 131.293, 132.9055, 137.327, 138.9055, 140.116, 140.9077, 144.24, 145, 150.36, 151.964, 157.25, 158.9253, 162.5, 164.9303, 167.259, 168.9342, 173.04, 174.967, 178.49, 180.9479, 183.84, 186.207, 190.23, 192.217, 195.078, 196.9665, 200.59, 204.3833, 207.2, 208.9804, 209, 210, 222, 223, 226, 227, 231.0359, 232.0381, 237, 238.0289, 243, 244, 247, 247, 251, 252, 257, 258, 259, 262, 267, 261.1087, 263.1182, 262.1229, 269, 278, 281.1620, 281.1684, 285.1744, 286.1810, 287.1904, 288.1943, 291.2045, 294.2104, 294.2139, 316, 320, 320, 321, 325, 330, 332, 334, 335];
                    let tablaperiodica = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og", "Uue", "Ubn", "Ubu", "Ubb", "Ubt", "Ubq", "Ubp", "Ubh", "Ubs"];
                    //buscar elemento compañero
                    let numero_elemento = 0;
                    for (let i = 0; i < tablaperiodica.length; i++) {
                        numero_elemento++;
                        if (tablaperiodica[i] == atomos_formula[1]) {//encontrado
                            break;
                        }
                    }
                    numero_elemento--;
                    tablaperiodica = null;//borrar variable basura
                    //nombrar 
                    let nombres_tablaperiodica = ["Hidrógeno", "Helio", "Litio", "Berilio", "Boro", "Carbono", "Nitrógeno", "Oxigenuro", "Fluoruro", "Neón", "Sodio", "Magnesio", "Aluminio", "Silicio", "Fósforo", "Sulfhidrico", "Clorhidrico", "Argón", "Potasio", "Calcio", "Escandio", "Titanio", "Vanadio", "Cromo", "Manganeso", "Hierro", "Cobalto", "Níquel", "Cobre", "Zinc", "Galio", "Germanio", "Arsénico", "Selenhidrico", "Bromuro", "Kriptón", "Rubidio", "Estroncio", "Itrio", "Zirconio", "Niobio", "Molibdeno", "Tecnecio", "Rutenio", "Rodio", "Paladio", "Plata", "Cadmio", "Indio", "Estaño", "Antimonio", "Telururo", "Yoduro", "Xenón", "Cesio", "Bario", "Lantano", "Cerio", "Praseodimio", "Neodimio", "Prometio", "Samario", "Europio", "Gadolinio", "Terbio", "Disprosio", "Holmio", "Erbio", "Tulio", "Iterbio", "Lutecio", "Hafnio", "Tantalio", "Wolframio", "Renio", "Osmio", "Iridio", "Platino", "Oro", "Mercurio", "Talio", "Plomo", "Bismutio", "Poloniuro", "Astaturo", "Radón", "Francio", "Radio", "Actinio", "Torio", "Protactinio", "Uranio", "Neptanio", "Plutonio", "Americio", "Curio", "Berkelio", "Californio", "Einstenio", "Fermio", "Mendelevio", "Nobelio", "Laurencio", "Rutherfordio", "Dubnio", "Seaborgio", "Bohrio", "Hassio", "Meitnerio", "Darmstadio", "Roentgenio", "Copernicio", "Nihonio", "Flerovio", "Moscovio", "Livermorio", "Teneso", "Oganesón", "Unbiunium", "Unbinilium", "Unbiunium", "Unbibium", "Unbitrium", "Unbiquandium", "Unbipentium", "Unbihexium", "Unbiseptium"];
                    let nomenclatura_tradicional = `Ácido ${nombres_tablaperiodica[numero_elemento]}`
                    let masa_molar = masa_tablaperiodica[0] * Number(cantidad_atomos_formula[0]) + masa_tablaperiodica[numero_elemento]
                    //mostrar en pantalla
                    document.getElementById("div-div-div-datos-formulacion").innerHTML = "<div id='div-div-datos-calculados-formulacion'><div class='div-datos-calculados-formulacion'><h3 class='titulo-datos-calculados-formulacion'>N.Tradicional:</h3><h3 class='text-datos-calculados-formulacion'id='text-datos-nomenclatura-stock' style='font-size:16px;'>_ _ _</h3></div><div class='div-datos-calculados-formulacion'><h3 class='titulo-datos-calculados-formulacion'>Tipo:</h3><h3 class='text-datos-calculados-formulacion'id='text-datos-tipo-combinacion' style='font-size:18px;'>_ _ _</h3></div><div class='div-datos-calculados-formulacion'><h3 class='titulo-datos-calculados-formulacion'>Masa:</h3><h3 class='text-datos-calculados-formulacion'id='text-datos-masa-combinacion' style='font-size:17px;'>_ _ _</h3></div></div>";
                    //nomenclatura stock
                    document.getElementById("text-datos-nomenclatura-stock").innerHTML = nomenclatura_tradicional;
                    //tipo combinacion
                    document.getElementById("text-datos-tipo-combinacion").innerHTML = "Hidrácido";
                    //masa molar
                    let masa_separar_decimales = (masa_molar.toString()).split(".");
                    if (masa_separar_decimales.length == 2 && masa_separar_decimales[1].length > 6) {
                        document.getElementById("text-datos-masa-combinacion").innerHTML = masa_molar.toFixed(6) + " <sub style='font-size:15px;'>(g/mol)</sub>";
                    }
                    else {
                        document.getElementById("text-datos-masa-combinacion").innerHTML = masa_molar + " <sub style='font-size:15px;'>(g/mol)</sub>";
                    }
                }
            }
            else {//mandar mensaje de error()
                console.log('Error al identificar el subindice')
            }
        }
    }
    else {//mandar mensaje de error()
        //mandar mensaje a la cola
        console.log("Error al identificar el compuesto");
    }
}