let numero_atomico = null;
let numero_masico = 0;
let numero_electrones = null;
let carga_electrones = null;
let periodo_atomo = null;
let grupo_atomo = null;
let configuracion_texto = null;
// diseño cambios
function mostrar_calcular_datos_elementos_tablaperiodica() {
    document.getElementById("body").innerHTML = "<div class='div-body-conf-elec'> <svg class='flecha-volver'xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' width='80px' height='80px' viewBox='0 0 80 80' enable-background='new 0 0 80 80'xml:space='preserve'>  <image style='cursor: pointer;'onclick='abrir_menu_herramientas()' id='image0' width='80' height='80' x='0' y='0' href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEUAAACdtc+cts+dts+T tr6OtrWUtr////9do8qvAAAAA3RSTlMAgHcPlLgKAAAAAWJLR0QHFmGI6wAAAAlwSFlzAAALEwAA CxMBAJqcGAAAAAd0SU1FB+cBFQ8uNyXU5JkAAACwSURBVEjH7dW7EYAgEEVRsAVKoIR17MASKMH+ W3CXz5ixNzBSXnznBIoYwtraTxZpmCgoFIRhFBimnYVRThamvaBQQRYqiEIDUWggCStIwgqCsIEg bKAfdrDIdA/ohgOcTx7QCxmoIQM1zAcMN7lYCEkNGWkPfJDumxmkGw7SPz2dBAe3kSBsJPm4KknC SqILwEgUGskuKSVZqCS8SPPx9tUcMg03GoZMQ/yLW1v74G4zBKWuqgjLAwAAACV0RVh0ZGF0ZTpj cmVhdGUAMjAyMy0wMS0yMVQxNDo0Njo1NSswMTowMNpHhD8AAAAldEVYdGRhdGU6bW9kaWZ5ADIw MjMtMDEtMjFUMTQ6NDY6NTUrMDE6MDCrGjyDAAAAAElFTkSuQmCC'/></svg><div class='div-div-numeros'> <div class='div-numeros'>  <input onfocus='this.select()' type='number'placeholder='Z'title='Protones (numero)'id='numero-atomico'value=''>  <input onfocus='this.select()'type='number'placeholder='A'title='Masa (numero)'id='numero-masico'value=''>  <input onfocus='this.select()'type='text'placeholder='X'title='Símbolo, Nombre (texto)'id='text-atomo'value=''> <input onfocus='this.select()'type='text'placeholder='+/-'title='Carga (numeros, texto)'id='carga-electrones'value='' >  <div class='div-herramientas-bt-calcular-conf-elec'><input type='button'id='bt-calcular'onclick='calcular_datos_elementos_tablaperiodica();this.select()'value='Calcular'></div>  <h1 id='texto-typo-atomo-h'></h1></div></div></div>  ";
    document.getElementById("body").innerHTML += "<div id='div-div-datos-calculados'><div class='div-imagen-elemento-tablaperiodica-buscado'id='div-imagen-elemento-tablaperiodica-buscado'><img id='img-elemento-buscado-tablaperiodica'class='img-elemento-buscado-tablaperiodica'src=''alt=''></div><div class='div-datos-calculados'><h3 class='titulo-datos-calculados'>Nombre español:</h3><h3 class='text-datos-calculados'id='text-datos-nombre-español' style='font-size:20px;'>_ _ _</h3></div><div class='div-datos-calculados'><h3 class='titulo-datos-calculados'>Nombre latín:</h3><h3 class='text-datos-calculados'id='text-datos-nombre-latin' style='font-size:20px;'>_ _ _</h3></div><div class='div-datos-calculados'><h3 class='titulo-datos-calculados'>Nombre inglés:</h3><h3 class='text-datos-calculados'id='text-datos-nombre-ingles' style='font-size:20px;'>_ _ _</h3></div><div class='div-datos-calculados'><h3 class='titulo-datos-calculados'>Protones:</h3><h3 class='text-datos-calculados'id='text-datos-total-protones' style='font-size:22px;'>_ _ _</h3></div><div class='div-datos-calculados'><h3 class='titulo-datos-calculados'>Electrones:</h3><h3 class='text-datos-calculados'id='text-datos-total-electrones' style='font-size:22px;'>_ _ _</h3></div><div class='div-datos-calculados'><h3 class='titulo-datos-calculados'>Neutrones:</h3><h3 class='text-datos-calculados'id='text-datos-total-neutrones' style='font-size:22px;'>_ _ _</h3></div><div class='div-datos-calculados'><h3 class='titulo-datos-calculados'>Conf. elec:</h3><h3 class='text-datos-calculados'id='text-datos-configuracion-electronica'style='font-size:16px;'>_ _ _</h3></div><div class='div-datos-calculados'><h3 class='titulo-datos-calculados'>Simplificada:</h3><h3 class='text-datos-calculados'id='text-datos-configuracion-electronica-simplificada' style='font-size:18px;'>_ _ _</h3></div></div>";
    document.getElementById("div-div-datos-calculados").innerHTML += "<div class='div-datos-calculados'><h3 class='titulo-datos-calculados'>Periodo:</h3><h3 class='text-datos-calculados'id='text-datos-periodo' style='font-size:22px;'>_ _ _</h3></div><div class='div-datos-calculados'><h3 class='titulo-datos-calculados'>Grupo:</h3><h3 class='text-datos-calculados'id='text-datos-grupo' style='font-size:22px;'>_ _ _</h3></div><div class='div-datos-calculados'><h3 class='titulo-datos-calculados'>Clase elemento:</h3><h3 class='text-datos-calculados'id='text-datos-clase' style='font-size:17px;'>_ _ _</h3></div><div class='div-datos-calculados'><h3 class='titulo-datos-calculados'>Masa relativa:</h3><h3 class='text-datos-calculados'id='text-datos-masa' style='font-size:17px;'>_ _ _</h3></div><div class='div-datos-calculados'><h3 class='titulo-datos-calculados'>Densidad:</h3><h3 class='text-datos-calculados'id='text-datos-densidad' style='font-size:18px;'>_ _ _</h3></div><div class='div-datos-calculados'><h3 class='titulo-datos-calculados'>Fase:</h3><h3 class='text-datos-calculados'id='text-datos-fase' style='font-size:19px;'>_ _ _</h3></div><div class='div-datos-calculados'><h3 class='titulo-datos-calculados'>Punto fusión:</h3><h3 class='text-datos-calculados'id='text-datos-punto-fusion' style='left:152px;font-size:16px;'>_ _ _</h3></div><div class='div-datos-calculados'><h3 class='titulo-datos-calculados'>Punto ebullición:</h3><h3 class='text-datos-calculados'id='text-datos-punto-ebullicion' style='left:152px;font-size:16px;'>_ _ _</h3></div><div class='div-datos-calculados'><h3 class='titulo-datos-calculados'>Valencias:</h3><h3 class='text-datos-calculados'id='text-datos-valencias' style='font-size:20px;'>_ _ _</h3></div><div class='div-datos-calculados'><h3 class='titulo-datos-calculados'>Estados oxidación:</h3><h3 class='text-datos-calculados'id='text-datos-estados-oxidacion' style='font-size:16px;'>_ _ _</h3></div><div class='div-datos-calculados'><h3 class='titulo-datos-calculados'>Electronegatividad:</h3><h3 class='text-datos-calculados'id='text-datos-electronegatividad' style='font-size:19px;'>_ _ _</h3></div>";
    document.getElementById("div-div-datos-calculados").innerHTML += "<div class='div-datos-calculados'><h3 class='titulo-datos-calculados'>Conduc. elec:</h3><h3 class='text-datos-calculados'id='text-datos-conductividad-electrica' style='font-size:18px;'>_ _ _</h3></div><div class='div-datos-calculados'><h3 class='titulo-datos-calculados'>Tipo eléctrico:</h3><h3 class='text-datos-calculados'id='text-datos-tipo-conductor-electrico' style='font-size:18px;'>_ _ _</h3></div><div class='div-datos-calculados'><h3 class='titulo-datos-calculados'>Tipo magnético:</h3><h3 class='text-datos-calculados'id='text-datos-tipo-magnetico' style='font-size:17px;'>_ _ _</h3></div>";
    document.getElementById("numero-atomico").addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {//aceptar
            calcular_datos_elementos_tablaperiodica();
        }
    });
    document.getElementById("numero-masico").addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {//aceptar
            calcular_datos_elementos_tablaperiodica();
        }
    });
    document.getElementById("carga-electrones").addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {//aceptar
            calcular_datos_elementos_tablaperiodica();
        }
    });
    document.getElementById("text-atomo").addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {//aceptar
            calcular_datos_elementos_tablaperiodica();
        }
    });
}
/*configuracion... */
function calcular_datos_elementos_tablaperiodica() {
    numero_atomico = document.getElementById("numero-atomico").value.replaceAll(" ", "");
    if (!(numero_atomico > 0 && numero_atomico <= 118) && document.getElementById("text-atomo").value != "") {
        numero_atomico = 0;
        const atomos_tablaperodica = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og", "Uue", "Ubn", "Ubu", "Ubb", "Ubt", "Ubq", "Ubp", "Ubh", "Ubs"];
        let t_atomo = document.getElementById("text-atomo").value.replaceAll(" ", "");
        t_atomo = t_atomo.toLowerCase();
        //remplazar nombre por simbolo si puede (español)
        if (t_atomo.length > 3) {
            const tablaperiodica_español = ["Hidrógeno", "Helio", "Litio", "Berilio", "Boro", "Carbono", "Nitrógeno", "Oxígeno", "Flúor", "Neón", "Sodio", "Magnesio", "Aluminio", "Silicio", "Fósforo", "Azufre", "Cloro", "Argón", "Potasio", "Calcio", "Escandio", "Titanio", "Vanadio", "Cromo", "Manganeso", "Hierro", "Cobalto", "Níquel", "Cobre", "Zinc", "Galio", "Germanio", "Arsénico", "Selenio", "Bromo", "Kriptón", "Rubidio", "Estroncio", "Itrio", "Zirconio", "Niobio", "Molibdeno", "Tecnecio", "Rutenio", "Rodio", "Paladio", "Plata", "Cadmio", "Indio", "Estaño", "Antimonio", "Telurio", "Yodo", "Xenón", "Cesio", "Bario", "Lantano", "Cerio", "Praseodimio", "Neodimio", "Prometio", "Samario", "Europio", "Gadolinio", "Terbio", "Disprosio", "Holmio", "Erbio", "Tulio", "Iterbio", "Lutecio", "Hafnio", "Tantalio", "Wolframio", "Renio", "Osmio", "Iridio", "Platino", "Oro", "Mercurio", "Talio", "Plomo", "Bismutio", "Polonio", "Astato", "Radón", "Francio", "Radio", "Actinio", "Torio", "Protactinio", "Uranio", "Neptanio", "Plutonio", "Americio", "Curio", "Berkelio", "Californio", "Einstenio", "Fermio", "Mendelevio", "Nobelio", "Laurencio", "Rutherfordio", "Dubnio", "Seaborgio", "Bohrio", "Hassio", "Meitnerio", "Darmstadio", "Roentgenio", "Copernicio", "Nihonio", "Flerovio", "Moscovio", "Livermorio", "Teneso", "Oganesón", "Ununenio", "Unbinilio", "Unbiunio", "Unbibio", "Unbitrio", "Unbiquadio", "Unbipentio", "Unbihexio", "Unbisetium"];
            for (let i = 0; i < tablaperiodica_español.length; i++) {
                if (t_atomo.toLowerCase() == tablaperiodica_español[i].toLowerCase()) {
                    t_atomo = t_atomo.replaceAll(tablaperiodica_español[i].toLowerCase(), atomos_tablaperodica[i]);
                    break;
                }
            }
        }
        else { }
        //remplazar nombre por simbolo si puede (latin)
        if (t_atomo.length > 3) {
            const tablaperiodica_latin = ["Hydrogenium", "Helium", "Lithium", "Beryllium", "Borum", "Carbonium", "Nitrogenium", "Oxygenium", "Fluorum", "Neon", "Natrium", "Magnesium", "Aluminium", "Silicium", "Phosphorus", "Sulphuris", "Chlorum", "Argon", "Kalium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromiun", "Manganum", "Ferrum", "Cobaltum", "Niccolum", "Cuprum", "Zincum", "Gallium", "Germanium", "Arsenicum", "Selenium", "Bromun", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdaenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Argentium", "Cadmium", "Indium", "Stannum", "Stibium", "Tellurium", "Iodium", "Xenon", "Caesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gandolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Wolframium", "Rhenium", "Osmium", "Iridium", "Platinum", "Aurum", "Hydrargyrum", "Tallium", "Plumbum", "Bisemutum", "Polonium", "Astatum", "Radon", "Francium", "Radium", "Actinium"];
            for (let i = 0; i < tablaperiodica_latin.length; i++) {
                if (t_atomo.toLowerCase() == tablaperiodica_latin[i].toLowerCase()) {
                    t_atomo = t_atomo.replaceAll(tablaperiodica_latin[i].toLowerCase(), atomos_tablaperodica[i]);
                    break;
                }
            }
        }
        else { }
        //remplazar nombre por simbolo si puede (ingles)
        if (t_atomo.length > 3) {
            const tablaperiodica_ingles = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromiun", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdaenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Caesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gandolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Tallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium"];
            for (let i = 0; i < tablaperiodica_ingles.length; i++) {
                if (t_atomo.toLowerCase() == tablaperiodica_ingles[i].toLowerCase()) {
                    t_atomo = t_atomo.replaceAll(tablaperiodica_ingles[i].toLowerCase(), atomos_tablaperodica[i]);
                    break;
                }
            }
        }
        else { }
        let encontrado = false;
        for (let i = 0; i < atomos_tablaperodica.length; i++) {
            numero_atomico++;
            if (atomos_tablaperodica[i].toLowerCase() == t_atomo.toLowerCase()) {
                encontrado = true;
                break;
            }
        }
        if (encontrado == false) {
            numero_atomico = 0;
        }
    }
    else {
        document.getElementById("text-atomo").value = "";
    }
    if (numero_atomico > 0 && numero_atomico <= 127) {
        numero_masico = document.getElementById("numero-masico").value.replaceAll(" ", "");
        if (numero_masico == "" || numero_masico == 0) {//neutrones
            const numeromasico_tablaperiodica = [20, 2, 4, 5, 6, 6, 7, 8, 10, 10, 12, 12, 14, 14, 16, 16, 18, 22, 20, 20, 24, 26, 26, 28, 28, 28, 28, 30, 30, 32, 31, 35, 35, 39, 41, 42, 45, 45, 48, 48, 50, 50, 51, 52, 54, 55, 57, 57, 60, 61, 61, 64, 66, 69, 71, 75, 74, 77, 78, 81, 82, 82, 82, 84, 84, 88, 89, 93, 94, 96, 98, 99, 100, 103, 104, 106, 108, 110, 111, 114, 115, 117, 118, 120, 123, 125, 126, 125, 125, 74, 136, 136, 138, 138, 142, 140, 146, 144, 150, 148, 151, 150, 153, 153, 157, 157, 157, 163, 157, 157, 163, 160, 161, 169, 171, 171, 173, 173, 175, 173, 177, 177, 176, 197, 200, 82, 199, 199, 202, 206, 207, 208, 209];
            numero_masico = numeromasico_tablaperiodica[numero_atomico - 1];
        }
        else {
            numero_masico = numero_masico - numero_atomico;
        }
        carga_electrones = document.getElementById("carga-electrones").value.replaceAll(" ", "");
        if (carga_electrones == "-") {
            carga_electrones = -1;
        }
        else if (carga_electrones == "--") {
            carga_electrones = -2;
        }
        else if (carga_electrones == "---") {
            carga_electrones = -3;
        }
        else if (carga_electrones == "+") {
            carga_electrones = 1;
        }
        else if (carga_electrones == "++") {
            carga_electrones = 2;
        }
        else if (carga_electrones == "+++") {
            carga_electrones = 3;
        }
        else if (carga_electrones == "") {
            carga_electrones = 0;
        }
        numero_electrones = eval(numero_atomico + "+" + (-1 * carga_electrones));
        //iniciar programa o no
        configuracion_texto = "";
        //cambiar diseño por elemento
        cambiar_diseño_elemento();
        //nombres
            /*terminado*/let atomos_tablaperodica_SinReducir = ["Hidrógeno", "Helio", "Litio", "Berilio", "Boro", "Carbono", "Nitrógeno", "Oxígeno", "Flúor", "Neón", "Sodio", "Magnesio", "Aluminio", "Silicio", "Fósforo", "Azufre", "Cloro", "Argón", "Potasio", "Calcio", "Escandio", "Titanio", "Vanadio", "Cromo", "Manganeso", "Hierro", "Cobalto", "Níquel", "Cobre", "Zinc", "Galio", "Germanio", "Arsénico", "Selenio", "Bromo", "Kriptón", "Rubidio", "Estroncio", "Itrio", "Zirconio", "Niobio", "Molibdeno", "Tecnecio", "Rutenio", "Rodio", "Paladio", "Plata", "Cadmio", "Indio", "Estaño", "Antimonio", "Telurio", "Yodo", "Xenón", "Cesio", "Bario", "Lantano", "Cerio", "Praseodimio", "Neodimio", "Prometio", "Samario", "Europio", "Gadolinio", "Terbio", "Disprosio", "Holmio", "Erbio", "Tulio", "Iterbio", "Lutecio", "Hafnio", "Tantalio", "Wolframio", "Renio", "Osmio", "Iridio", "Platino", "Oro", "Mercurio", "Talio", "Plomo", "Bismutio", "Polonio", "Ástato", "Radón", "Francio", "Radio", "Actinio", "Torio", "Protactinio", "Uranio", "Neptanio", "Plutonio", "Americio", "Curio", "Berkelio", "Californio", "Einstenio", "Fermio", "Mendelevio", "Nobelio", "Laurencio", "Rutherfordio", "Dubnio", "Seaborgio", "Bohrio", "Hassio", "Meitnerio", "Darmstadio", "Roentgenio", "Copernicio", "Nihonio", "Flerovio", "Moscovio", "Livermorio", "Teneso", "Oganesón", "Ununenio", "Unbinilio", "Unbiunio", "Unbibio", "Unbitrio", "Unbiquadio", "Unbipentio", "Unbihexio", "Unbisetium"];
        if (atomos_tablaperodica_SinReducir[numero_atomico - 1] != undefined) {
            document.getElementById("text-datos-nombre-español").innerHTML = atomos_tablaperodica_SinReducir[numero_atomico - 1];
        }
        else {
            document.getElementById("text-datos-nombre-español").innerHTML = "_ _ _";
        }
        atomos_tablaperodica_SinReducir = null;
        let atomos_tablaperodica_SinReducir_latin = ["Hydrogenium", "Helium", "Lithium", "Beryllium", "Borum", "Carbonium", "Nitrogenium", "Oxygenium", "Fluorum", "Neon", "Natrium", "Magnesium", "Aluminium", "Silicium", "Phosphorus", "Sulphuris", "Chlorum", "Argon", "Kalium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromiun", "Manganum", "Ferrum", "Cobaltum", "Niccolum", "Cuprum", "Zincum", "Gallium", "Germanium", "Arsenicum", "Selenium", "Bromun", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdaenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Argentium", "Cadmium", "Indium", "Stannum", "Stibium", "Tellurium", "Iodium", "Xenon", "Caesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gandolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Wolframium", "Rhenium", "Osmium", "Iridium", "Platinum", "Aurum", "Hydrargyrum", "Tallium", "Plumbum", "Bisemutum", "Polonium", "Astatum", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium", "Roentgenium", "Copernecium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", "Tennessine", "Oganneson", "Ununennium", "Unbinilium", "Unbiunium", "Unbibium", "Unbitrium", "Unbiquadium", "Unbihexium", "Unbiseptium", "Unbipentium", "Unbihexium"];
        if (atomos_tablaperodica_SinReducir_latin[numero_atomico - 1] != undefined) {
            document.getElementById("text-datos-nombre-latin").innerHTML = atomos_tablaperodica_SinReducir_latin[numero_atomico - 1];
        }
        else {
            document.getElementById("text-datos-nombre-latin").innerHTML = "_ _ _";
        }
        atomos_tablaperodica_SinReducir_latin = null;
        let atomos_tablaperodica_SinReducir_ingles = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromiun", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdaenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Caesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gandolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Tallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium", "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", "Tennessine", "Oganneson", "Ununennium", "Unbinilium", "Unbiunium", "Unbibium", "Unbitrium", "Unbiquadium", "Unbihexium", "Unbiseptium", "Unbipentium", "Unbihexium"];
        if (atomos_tablaperodica_SinReducir_ingles[numero_atomico - 1] != undefined) {
            document.getElementById("text-datos-nombre-ingles").innerHTML = atomos_tablaperodica_SinReducir_ingles[numero_atomico - 1];
        }
        else {
            document.getElementById("text-datos-nombre-ingles").innerHTML = "_ _ _";
        }
        atomos_tablaperodica_SinReducir_ingles = null;
        //protones+electrones+neutrones
        if (numero_atomico >= 0) {
            document.getElementById("text-datos-total-protones").innerHTML = numero_atomico;
        }
        else {
            document.getElementById("text-datos-total-protones").innerHTML = "_ _ _";
        }
        if (numero_electrones >= 0 || numero_electrones < 0) {
            document.getElementById("text-datos-total-electrones").innerHTML = numero_electrones;
        }
        else {
            document.getElementById("text-datos-total-electrones").innerHTML = "_ _ _";
        }
        if (numero_masico >= 0 || numero_masico < 0) {
            document.getElementById("text-datos-total-neutrones").innerHTML = numero_masico;
        }
        else {
            document.getElementById("text-datos-total-neutrones").innerHTML = "_ _ _";
        }
        //masa relativa+densidad
        /*terminado*/let masa_tablaperiodica = [1.00784, 4.0026, 6.941, 9.0121, 10.811, 12.0107, 14.0067, 15.9994, 18.9984, 20.1797, 22.9897, 24.3050, 26.9815, 28.0855, 30.9737, 32.065, 35.453, 39.948, 39.0983, 40.078, 44.9559, 47.867, 50.9415, 51.9961, 54.9380, 55.845, 58.9331, 58.6934, 63.546, 65.38, 69.723, 72.64, 74.9216, 78.96, 79.904, 83.798, 85.467, 87.62, 88.9059, 91.224, 92.9064, 95.94, 98.906, 101.07, 102.9055, 106.42, 107.8682, 112.411, 114.818, 118.710, 121.760, 127.60, 126.9045, 131.293, 132.9055, 137.327, 138.9055, 140.116, 140.9077, 144.24, 145, 150.36, 151.964, 157.25, 158.9253, 162.5, 164.9303, 167.259, 168.9342, 173.04, 174.967, 178.49, 180.9479, 183.84, 186.207, 190.23, 192.217, 195.078, 196.9665, 200.59, 204.3833, 207.2, 208.9804, 209, 210, 222, 223, 226, 227, 231.0359, 232.0381, 237, 238.0289, 243, 244, 247, 247, 251, 252, 257, 258, 259, 262, 267, 261.1087, 263.1182, 262.1229, 269, 278, 281.1620, 281.1684, 285.1744, 286.1810, 287.1904, 288.1943, 291.2045, 294.2104, 294.2139, 316, 320, 320, 321, 325, 330, 332, 334, 335];
        if (masa_tablaperiodica[numero_atomico - 1] != undefined && masa_tablaperiodica[numero_atomico - 1] != "" && masa_tablaperiodica[numero_atomico - 1] != 0) {
            document.getElementById("text-datos-masa").innerHTML = masa_tablaperiodica[numero_atomico - 1] + " <sub style='font-size:13px;'>(g/mol)</sub>";
        }
        else {
            document.getElementById("text-datos-masa").innerHTML = "_ _ _";
        }
        masa_tablaperiodica = null;
        /*terminado*/let densidad_tablaperiodica = [0.0000899, 0.00017846, 0.534, 1.848, 2.34, 2.26, 0.001251, 0.00142897, 0.001696, 0.0009002, 0.971, 1.738, 2.6989, 2.33, 2.82, 2.070, 0.003214, 0.001784, 0.856, 1.55, 2.99, 4.54, 6.11, 7.19, 7.21, 7.874, 8.9, 9.902, 8.92, 7.133, 5.91, 5.323, 5.72, 4.79, 3.14, 0.003749, 1.53, 2.54, 4.47, 6.51, 8.58, 10.22, 11.49, 12.41, 12.41, 12.02, 10.49, 8.64, 7.31, 7.29, 6.69, 6.25, 4.94, 0.005894, 1.9, 3.5, 6.16, 6.77, 6.773, 7, 7.2, 7.54, 5.25, 7.89, 8.25, 8.56, 8.78, 9.05, 9.32, 6.97, 9.84, 13.31, 16.68, 19.26, 21.03, 22.587, 22.562, 21.45, 19.3, 13.55, 11.85, 11.34, 9.8, 9.2, 6.4, 0.0098, 2.48, 5.5, 10.07, 11.72, 15.37, 19.05, 20.48, 19.74, 13.67, 13.51, 13.25, 15.1, 13.5, 19.050, 0, 0, 0, 23, 29, 35, 37, 0, 37.4, 34.8, 0, 20, 16, 14, 13.5, 0, 0, 5, 7, 7, 0, 0, 0, 0, 0, 0, 0];
        if (densidad_tablaperiodica[numero_atomico - 1] != undefined && densidad_tablaperiodica[numero_atomico - 1] != "" && densidad_tablaperiodica[numero_atomico - 1] != 0) {
            document.getElementById("text-datos-densidad").innerHTML = densidad_tablaperiodica[numero_atomico - 1] + " <sub style='font-size:13px;'>(g/cm<sup>3</sup>)</sub>";
        }
        else {
            document.getElementById("text-datos-densidad").innerHTML = "_ _ _";
        }
        densidad_tablaperiodica = null;
        //puntos fusion+ebullicion
        let puntofusion_tablaperiodica = [-259.14, -272.2, 180.5, 1278.0, 2075.8, 3550.0, -209.9, -218.79, -219.67, -248.67, 97.8, 650.0, 660.0, 1414.85, 44.15, 112.8, -100.98, -189.34, 63.38, 842.0, 1541.0, 1660.0, 1910.0, 1907.0, 1245.0, 1539.0, 1493.0, 1455.0, 1084.62, 419.5, 29.8, 937.5, 816, 217.0, -7.25, -157.37, 39.32, 777.0, 1536.0, 1855.0, 2477.0, 2623.0, 2157.0, 2334.0, 1964.0, 1555.0, 961.8, 319.1, 156.6, 231.93, 630.75, 449.55, 113.55, -111.8, 28.45, 727.0, 920.0, 795.0, 931.0, 1010.0, 1167.0, 1072.0, 822.0, 1311.0, 1360.0, 1409.0, 1470.0, 1529.0, 1545.0, 824.0, 1663.0, 2233.0, 3017.0, 3422.0, 3180.0, 3033.0, 2410.0, 1768.0, 1064.43, -38.89, 303.6, 327.4, 271.3, 254.0, 230.0, -71.15, 8.0, 696.0, 1050.0, 1750.0, 1840.0, 1132.4, 644.0, 641.0, 1176.0, 1345.0, 986.0, 900.0, 860.0, 1525.0, 825.0, 825.0, 1625.0, 2100.0, "?", "?", "?", "?", "?", "?", "?", "?", 425.0, 68.0, "?", "?", "?", "?", 30.0, 680.0, "?", "?", "?", "?", "?", "?", "?", "?"];//ºc
        if (puntofusion_tablaperiodica[numero_atomico - 1] != undefined && puntofusion_tablaperiodica[numero_atomico - 1] != "" && puntofusion_tablaperiodica[numero_atomico - 1] != "?") {
            //ºc + k + ºf
            document.getElementById("text-datos-punto-fusion").innerHTML = puntofusion_tablaperiodica[numero_atomico - 1] + "<a style='color:#1565c0;'>ºC</a> = " + (puntofusion_tablaperiodica[numero_atomico - 1] + 273).toFixed(2) + "<a style='color:#1b5e20;'>K</a> = " + ((puntofusion_tablaperiodica[numero_atomico - 1] * 1.8) + 32).toFixed(2) + "<a style='color:#f9a825;'>ºF</a>";
        }
        else {
            document.getElementById("text-datos-punto-fusion").innerHTML = "_ _ _";
        }
        puntofusion_tablaperiodica = null;
        let puntoebullicion_tablaperiodica = [-252.87, -268.9, 1342.0, 2970.0, 3926.8, 4827.0, -195.8, -182.96, -188.11, -246.05, 882.94, 1090.0, 2518.82, 3265.0, 280.5, 444.67, -34.6, -185.85, 758.8, 1484.0, 2836.0, 3287.0, 3407.0, 2672.0, 2061.0, 2862.0, 2870.0, 2915.0, 2562.0, 906.0, 2203.0, 2833.0, 613.0, 684.8, 58.8, -153.4, 687.2, 1382.0, 3338.0, 4409.0, 4927.0, 4639.0, 4265.0, 4077.0, 3727.0, 2963.0, 2162.0, 766.8, 2072.0, 2602.0, 1587.0, 987.8, 184.35, -108.1, 670.8, 1897.0, 3464.0, 3443.0, 3512.0, 3074.0, 3000.0, 1794.0, 1597.0, 3272.0, 3227.0, 2567.0, 2695.0, 2867.0, 1947.0, 1193.0, 3395.0, 4602.0, 5458.0, 5555.0, 5627.0, 5597.0, 4130.0, 3825.0, 2700.0, 356.7, 1473.0, 1749.0, 1560.0, 962.0, 336.8, -61.7, 676.8, 1737.0, 3197.0, 4787.0, 4027.0, 4131.0, 3902.0, 3232.0, 2607.0, 3110.0, 2627.0, 1472.0, 996.0, "?", "?", "?", "?", 5500.0, "?", "?", "?", "?", "?", "?", "?", "?", 1155.0, 146.0, "?", "?", "?", 95.0, 630.0, 1700.0, "?", "?", "?", "?", "?", "?", "?", "?"];//ºc
        if (puntoebullicion_tablaperiodica[numero_atomico - 1] != undefined && puntoebullicion_tablaperiodica[numero_atomico - 1] != "" && puntoebullicion_tablaperiodica[numero_atomico - 1] != "?") {
            //ºc + k + ºf
            document.getElementById("text-datos-punto-ebullicion").innerHTML = puntoebullicion_tablaperiodica[numero_atomico - 1] + "<a style='color:#1565c0;'>ºC</a> = " + (puntoebullicion_tablaperiodica[numero_atomico - 1] + 273).toFixed(2) + "<a style='color:#1b5e20;'>K</a> = " + ((puntoebullicion_tablaperiodica[numero_atomico - 1] * 1.8) + 32).toFixed(2) + "<a style='color:#f9a825;'>ºF</a>";
        }
        else {
            document.getElementById("text-datos-punto-ebullicion").innerHTML = "_ _ _";
        }
        puntoebullicion_tablaperiodica = null;
        /*terminado*///clase
        if (numero_atomico == 1 || numero_atomico == 6 || numero_atomico == 7 || numero_atomico == 8 || numero_atomico == 15 || numero_atomico == 16 || numero_atomico == 34) {
            document.getElementById("text-datos-clase").innerHTML = "No metal";
        }
        else if (numero_atomico == 3 || numero_atomico == 11 | numero_atomico == 19 || numero_atomico == 37 || numero_atomico == 55 || numero_atomico == 87 || numero_atomico == 119) {
            document.getElementById("text-datos-clase").innerHTML = "Metal alcalino";
        }
        else if (numero_atomico == 4 || numero_atomico == 12 || numero_atomico == 20 || numero_atomico == 38 || numero_atomico == 56 || numero_atomico == 88 || numero_atomico == 120) {
            document.getElementById("text-datos-clase").innerHTML = "Metal alcalinotérreo";
        }
        else if (numero_atomico >= 21 && numero_atomico <= 30 || numero_atomico >= 39 && numero_atomico <= 48 || numero_atomico >= 71 && numero_atomico <= 80 || numero_atomico >= 103 && numero_atomico <= 112) {
            document.getElementById("text-datos-clase").innerHTML = "Metal de transición";
        }
        else if (numero_atomico == 13 || numero_atomico == 31 || numero_atomico == 49 || numero_atomico == 50 || numero_atomico == 81 || numero_atomico == 82 || numero_atomico == 83 || numero_atomico >= 113 && numero_atomico <= 116) {
            document.getElementById("text-datos-clase").innerHTML = "Otro metal";
        }
        else if (numero_atomico == 5 || numero_atomico == 14 || numero_atomico == 32 || numero_atomico == 33 || numero_atomico == 51 || numero_atomico == 52 || numero_atomico == 84) {
            document.getElementById("text-datos-clase").innerHTML = "Metaloide";
        }
        else if (numero_atomico == 2 || numero_atomico == 10 || numero_atomico == 18 || numero_atomico == 36 || numero_atomico == 54 || numero_atomico == 86 || numero_atomico == 118) {
            document.getElementById("text-datos-clase").innerHTML = " Gas noble";
        }
        else if (numero_atomico == 9 || numero_atomico == 17 || numero_atomico == 35 || numero_atomico == 53 || numero_atomico == 85 || numero_atomico == 117) {
            document.getElementById("text-datos-clase").innerHTML = "Halógenos";
        }
        else if (numero_atomico >= 57 && numero_atomico <= 70) {
            document.getElementById("text-datos-clase").innerHTML = "Lantánidos";
        }
        else if (numero_atomico >= 89 && numero_atomico <= 102) {
            document.getElementById("text-datos-clase").innerHTML = "Actínidos";
        }
        else if (numero_atomico >= 121 && numero_atomico <= 127) {
            document.getElementById("text-datos-clase").innerHTML = "Superactínidos";
        }
        else {
            document.getElementById("text-datos-clase").innerHTML = "_ _ _";
        }
        /*terminado*///fase
        let clase;
        if (numero_atomico == 1 || numero_atomico == 2 || numero_atomico == 7 || numero_atomico == 8 || numero_atomico == 9 || numero_atomico == 10 || numero_atomico == 17 || numero_atomico == 18 || numero_atomico == 36 || numero_atomico == 54 || numero_atomico == 86 || numero_atomico == 118) {//gases
            clase = "Gas";
        }
        else if (numero_atomico == 35 || numero_atomico == 80) {//liquidos
            clase = "Líquido";
        }
        else if (numero_atomico >= 1 && numero_atomico <= 118) {//solidos
            clase = "Sólido";
        }
        else {
            clase = "_ _ _";
        }
        document.getElementById("text-datos-fase").innerHTML = clase;
        /*terminado*///valencias
        let valencias_tablaperiodica = ["I", "0", "I", "II", "III", "II, IV", "I, II, III, IV, V", "II", "I, II", "0", "I", "II", "III", "II, IV", "III, V", "II, IV, VI", "I, III, V, VII", "0", "I", "II", "III", "II, III, IV", "II, III, IV, V", "II, III, VI", "II, III, IV, VI, VII", "II, III, VI", "II, III", "II, III", "I, II", "II", "III", "III, IV", "III, V", "II, IV, VI", "I, III, V, VII", "0", "I", "II", "II, III", "II, III, IV", "II, III, IV, V", "IV, VI", "I, II, III, IV, V, VI, VII", "II, III, IV, V, VI, VIII", "III", "0, II, IV", "I, II, III", "II", "II, III", "II, IV", "III, V", "II, IV, VI", "I, III, V, VII", "0", "I", "II", "III, IV, V", "III, IV, V, VI", "VIII", "", "", "", "", "", "", "", "", "", "", "", "", "II, III", "II, III, IV", "II, III, IV", "II, III, IV", "III", "II, III", "I, II, III", "I, III, IV", "II, III, IV", "II, III", "III", "II, III", "II, III", "", "IV", "II, III, IV, V", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
        if (valencias_tablaperiodica[numero_atomico - 1] != undefined && valencias_tablaperiodica[numero_atomico - 1] != "" && valencias_tablaperiodica[numero_atomico - 1] != "0") {
            document.getElementById("text-datos-valencias").innerHTML = valencias_tablaperiodica[numero_atomico - 1];
        }
        else {
            document.getElementById("text-datos-valencias").innerHTML = "_ _ _";
        }
        valencias_tablaperiodica = null;
        //estados oxidacion
        let extadosoxidacion_tablaperiodica = ["-1, +1", "", "+1", "+1, +2", "0, -1, -3, +1, +2, +3", "0, -1, -2, -3, -4, +1, +2, +3, +4", "0, -1, -2, -3, +1, +2, +3, +4, +5", "0, -1, -2, +1, +2", "-1", "0", "0, +1", "0, +1, +2", "0, +3", "0, -1, -2, -3, -4, +1, +2, +3, +4", "0, -1, -2, -3, +1, +2, +3, +4, +5", "0, -1, -2, +1, +2, +3, +4, +5, +6", "0, -1, +1, +3, +4, +5, +6, +7", "0", "+1", "+2", "+1, +2, +3", "+1, +2, +3, +4", "+1, +2, +3, +4, +5", "+1, +2, +3, +4, +5, +6", "+1, +2, +3, +4, +5, +6, +7", "+1, +2, +3, +4, +5, +6", "+1, +2, +3, +4, +5", "+1, +2, +3, +4", "+1, +2", "+2", "+1, +2, +3", "-4, +1, +2, +3, +4", "-3, +2, +3, +5", "-2, +2, +4, +6", "-1, +1, +3, +4, +5, +7", "0, +2", "0, -1, +1", "+1, +2", "+1, +2, +3", "+1, +2, +3, +4", "-1, +2, +3, +4, +5", "-1, -2, +1, +2, +3, +4, +5, +6", "-1, -3, -1, -2, -3, -4, -5, -6, -7", "-2, +1, +2, +3, +4, +5, +6, +7, +8", "-1, +1, +2, +3, +4, +5, +6", "+2, +4", "+1, +2, +3", "+1, +2", "+1, +2, +3", "-4, +2, +4", "-3, +3, +5", "-2, +2, +4, +5, +6", "-1, +1, +3, +5, +7", "0, +2, +4, +6, +8", "+1", "+1, +2", "+1, +2, +3", "+2, +3, +4", "+2, +3, +4", "+2, +3", "+3", "+2, +3", "+2, +3", "+1, +2, +3", "+1, +3, +4", "+2, +3", "+3", "+3", "+2, +3", "+2, +3", "+3", "+2, +3, +4", "-1, +2, +3, +4, +5", "-1, -2, +1, +2, +3, +4, +5, +6", "-1, -3, +1, +2, +3, +4, +5, +6, +7", "-1, -2, +1, +2, +3, +4, +5, +6, +7, +8", "-1, -3, +1, +2, +3, +4, +5, +6, +7, +8, +9", "+2, +4, +5, +6", "-1, +1, +2, +3, +5", "+1, +2, +4", "+1, +3", "-4, +2, +4", "-3, +3, +5", "-2, +2, +4, +6", "-1, +1, +3, +5, +7", "0, +2, +4, +6", "+1", "+2", "+3", "+2, +3, +4", "+3, +4, +5", "+3, +4, +5, +6", "+3, +4, +5, +6, +7", "+3, +4, +5, +6, +7", "+2, +3, +4, +5, +6", "+3, +4", "+3, +4", "+2, +3, +4", "+2, +3", "+2, +3", "+2, +3", "+2, +3", "+3", "+4", "+5", "+6", "+7", "+8", "", "", "", "+2", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
        if (extadosoxidacion_tablaperiodica[numero_atomico - 1] != undefined && extadosoxidacion_tablaperiodica[numero_atomico - 1] != "") {
            let numeros_oxidacion = extadosoxidacion_tablaperiodica[numero_atomico - 1].replaceAll(" ", "");
            numeros_oxidacion = numeros_oxidacion.split(",");
            document.getElementById("text-datos-estados-oxidacion").innerHTML = "";
            for (let i = 0; i < numeros_oxidacion.length; i++) {
                if (i == 0) {//primera
                    if (numeros_oxidacion[i] == 0) {
                        document.getElementById("text-datos-estados-oxidacion").innerHTML = "<div style='font-family: Roboto, sans-serif;font-size:17px;display:flex; align-items:center; justify-content: center;text-align:center;margin-bottom:8px;margin-left:10px;background:#26a69a;color:white;width:35px;height:35px;border-radius:100%;float:left;'>" + numeros_oxidacion[i] + "</div>";
                    }
                    if (numeros_oxidacion[i] < 0) {
                        document.getElementById("text-datos-estados-oxidacion").innerHTML = "<div style='font-family: Roboto, sans-serif;font-size:17px;display:flex; align-items:center; justify-content: center;text-align:center;margin-bottom:8px;margin-left:10px;background:#ff3d00;color:white;width:35px;height:35px;border-radius:100%;float:left;'>" + numeros_oxidacion[i] + "</div>";
                    }
                    if (numeros_oxidacion[i] > 0) {
                        document.getElementById("text-datos-estados-oxidacion").innerHTML = "<div style='font-family: Roboto, sans-serif;font-size:17px;display:flex; align-items:center; justify-content: center;text-align:center;margin-bottom:8px;margin-left:10px;background:#2196f3;color:white;width:35px;height:35px;border-radius:100%;float:left;'>" + numeros_oxidacion[i] + "</div>";
                    }
                }
                else {
                    if (numeros_oxidacion[i] == 0) {
                        document.getElementById("text-datos-estados-oxidacion").innerHTML += "<div style='font-family: Roboto, sans-serif;font-size:17px;display:flex; align-items:center; justify-content: center;text-align:center;margin-bottom:8px;margin-left:10px;background:#26a69a;color:white;width:35px;height:35px;border-radius:100%;float:left;'>" + numeros_oxidacion[i] + "</div>";
                    }
                    if (numeros_oxidacion[i] < 0) {
                        document.getElementById("text-datos-estados-oxidacion").innerHTML += "<div style='font-family: Roboto, sans-serif;font-size:17px;display:flex; align-items:center; justify-content: center;text-align:center;margin-bottom:8px;margin-left:10px;background:#ff3d00;color:white;width:35px;height:35px;border-radius:100%;float:left;'>" + numeros_oxidacion[i] + "</div>";
                    }
                    if (numeros_oxidacion[i] > 0) {
                        document.getElementById("text-datos-estados-oxidacion").innerHTML += "<div style='font-family: Roboto, sans-serif;font-size:17px;display:flex; align-items:center; justify-content: center;text-align:center;margin-bottom:8px;margin-left:10px;background:#2196f3;color:white;width:35px;height:35px;border-radius:100%;float:left;'>" + numeros_oxidacion[i] + "</div>";
                    }
                }
            }
        }
        else {
            document.getElementById("text-datos-estados-oxidacion").innerHTML = "_ _ _";
        }
        extadosoxidacion_tablaperiodica = null;
        //simbolo atomo
        /*terminado*/let atomos_tablaperodica = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og", "Uue", "Ubn", "Ubu", "Ubb", "Ubt", "Ubq", "Ubp", "Ubh", "Ubs"];
        if (numero_atomico > 0 && numero_atomico <= 127) {
            document.getElementById("texto-typo-atomo-h").innerHTML = atomos_tablaperodica[numero_atomico - 1];
        }
        else {
            document.getElementById("texto-typo-atomo-h").innerHTML = "_ _ _";
        }
        atomos_tablaperodica = null;
        //electronegatividad
        /*terminado*/let electronegatividad_tablaperiodica = [2.2, 0, 0.98, 1.57, 2.04, 2.55, 3.04, 3.44, 3.98, 0, 0.93, 1.31, 1.61, 1.9, 2.19, 2.58, 3.16, 0, 0.82, 1, 1.36, 1.54, 1.63, 1.66, 1.55, 1.83, 1.88, 1.91, 1.9, 1.65, 1.81, 2.01, 2.18, 2.55, 2.96, 3, 0.82, 0.95, 1.22, 1.33, 1.6, 2.16, 1.9, 2.2, 2.28, 2.2, 1.93, 1.69, 1.78, 1.96, 2.05, 2.1, 2.66, 2.6, 0.79, 0.89, 1.1, 1.12, 1.13, 1.14, 0, 1.1, 0, 1.2, 0, 1.22, 0, 1.22, 1.23, 1.24, 1.25, 0, 1.27, 1.3, 1.5, 2.36, 1.9, 2.2, 2.2, 2.28, 2.54, 2, 1.62, 2.33, 2.02, 2, 2.2, 0, 0.7, 0.9, 1.1, 1.3, 1.5, 1.38, 1.36, 1.28, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.86, 0.91, 0, 0, 0, 0, 0, 0, 0];
        if (electronegatividad_tablaperiodica[numero_atomico - 1] != undefined && electronegatividad_tablaperiodica[numero_atomico - 1] != "" && electronegatividad_tablaperiodica[numero_atomico - 1] != 0) {
            document.getElementById("text-datos-electronegatividad").innerHTML = electronegatividad_tablaperiodica[numero_atomico - 1];
        }
        else {
            document.getElementById("text-datos-electronegatividad").innerHTML = "_ _ _";
        }
        electronegatividad_tablaperiodica = null;
        //conduccion electrica
        let conduccionelectrica_tablaperiodica = ["", "", "1.1*10<sup>7</sup>", "2.5*10<sup>7</sup>", "0.0001*10<sup>7</sup>", "1*10<sup>5</sup>", "", "", "", "", "2.1*10<sup>7</sup>", "2.3*10<sup>7</sup>", "3.8*10<sup>7</sup>", "1*10<sup>7</sup>", "1*10<sup>7</sup>", "1*10<sup>-15</sup>", "1*10<sup>-2</sup>", "", "1.4*10<sup>7</sup>", "2.9*10<sup>7</sup>", "1.8*10<sup>6</sup>", "2.5*10<sup>6</sup>", "5*10<sup>6</sup>", "7.9*10<sup>6</sup>", "6.2*10<sup>5</sup>", "1*10<sup>7</sup>", "1.7*10<sup>7</sup>", "1.4*10<sup>7</sup>", "5.9*10<sup>7</sup>", "1.7*10<sup>7/<sup>", "7.1*10<sup>6</sup>", "2*10<sup>3</sup>", "3.3*10<sup>6</sup>", "", "1*10<sup>-10</sup>", "", "8.3*10<sup>6</sup>", "7.7*10<sup>6</sup>", "1.8*10<sup>6</sup>", "2.4*10<sup>6</sup>", "6.7*10<sup>6</sup>", "2*10<sup>7</sup>", "5*10<sup>6</sup>", "1.4*10<sup>7</sup>", "2.3*10<sup>7</sup>", "1*10<sup>7</sup>", "6.2*10<sup>7</sup>", "1.4*10<sup>7</sup>", "1.2*10<sup>7</sup>", "9.1*10<sup>6</sup>", "2.5*10<sup>6</sup>", "1*10<sup>4</sup>", "1*10<sup>7</sup>", "", "5*10<sup>6</sup>", "2.9*10<sup>6</sup>", "1*10<sup>6</sup>", "1.4*10<sup>6</sup>", "1.4*10<sup>6</sup>", "1.6*10<sup>6</sup>", "1.3*10<sup>6</sup>", "1.1*10<sup>6</sup>", "1.1*10<sup>6</sup>", "7.7*10<sup>6</sup>", "8.3*10<sup>5</sup>", "1.1*10<sup>6</sup>", "1.1*10<sup>6</sup>", "1.2*10<sup>6</sup>", "1.4*10<sup>6</sup>", "3.6*10<sup>6</sup>", "1.8*10<sup>6</sup>", "3.3*10<sup>6</sup>", "7.7*10<sup>6</sup>", "2*10<sup>7</sup>", "5.6*10<sup>6</sup>", "1.2*10<sup>7</sup>", "2.1*10<sup>7</sup>", "9.4*10<sup>6</sup>", "4.5*10<sup>7</sup>", "1*10<sup>6</sup>", "6.7*10<sup>6</sup>", "4.8*10<sup>6</sup>", "7.7*10<sup>6</sup>", "2.3*10<sup>6</sup>", "", "", "", "1*10<sup>6</sup>", "", "6.7*10<sup>6</sup>", "5.6*10<sup>6</sup>", "3.6*10<sup>6</sup>", "8.3*10<sup>5</sup>", "6.7*10<sup>5</sup>", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
        if (conduccionelectrica_tablaperiodica[numero_atomico - 1] != undefined && conduccionelectrica_tablaperiodica[numero_atomico - 1] != "") {
            document.getElementById("text-datos-conductividad-electrica").innerHTML = conduccionelectrica_tablaperiodica[numero_atomico - 1] + " <sub style='font-size:13px;'>(S/m)</sub>";
        }
        else {
            document.getElementById("text-datos-conductividad-electrica").innerHTML = "_ _ _";
        }
        conduccionelectrica_tablaperiodica = null;
        //tipo electrico
        let tipoelectrico_tablaperiodica = ["", "", "Conductor", "Conductor", "Bieléctrico", "Conductor", "", "", "", "", "Conductor", "Conductor", "Conductor", "Semiconductor", "Conductor", "Dieléctrico", "Dieléctrico", "", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Semicunductor", "Conductor", "", "Dieléctrico", "", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Dieléctrico", "", "Conductor", "Conductor", "Conductor", "Conductor", "Dieléctrico", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "", "", "", "", "Conductor", "", "Conductor", "Conductor", "Conductor", "Conductor", "Conductor", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
        if (tipoelectrico_tablaperiodica[numero_atomico - 1] != undefined && tipoelectrico_tablaperiodica[numero_atomico - 1] != "") {
            document.getElementById("text-datos-tipo-conductor-electrico").innerHTML = tipoelectrico_tablaperiodica[numero_atomico - 1];
        }
        else {
            document.getElementById("text-datos-tipo-conductor-electrico").innerHTML = "_ _ _";
        }
        tipoelectrico_tablaperiodica = null;
        //tipo magnetico
        let tipomagnetico_tablaperiodica = ["Diamagnético", "Diamagnético", "Paramagnético", "Diamagnético", "Diamagnético", "Diamagnético", "Diamagnético", "Paramagnético", "Diamagnético", "Paramagnético", "Paramagnético", "Paramagnético", "Diamagnético", "Diamagnético", "Diamagnético", "Diamagnético", "Dieléctrico", "Diamagnético", "", "Paramagnético", "", "Paramagnético", "", "Antiferromagnético", "Paramagnético", "Ferromagnético", "Ferromagnético", "Ferromagnético", "Diamagnético", "Diamagnético", "Diamagnético", "Diamagnético", "Paramagnético", "Diamagnético", "Diamagnético", "Diamagnético", "", "Paramagnético", "", "Paramagnético", "", "Paramagnético", "", "Paramagnético", "Paramagnético", "Paramagnético", "Diamagnético", "Diamagnético", "Diamagnético", "Paramagnético", "Diamagnético", "Diamagnético", "", "Diamagnético", "", "Paramagnético", "", "Paramagnético", "", "Paramagnético", "", "Paramagnético", "Paramagnético", "Ferromagnético", "Paramagnético", "Paramagnético", "Paramagnético", "Paramagnético", "Paramagnético", "", "", "", "", "Paramagnético", "", "Paramagnético", "Paramagnético", "Paramagnético", "Diamagnético", "Diamagnético", "Diamagnético", "Diamagnético", "Diamagnético", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
        if (tipomagnetico_tablaperiodica[numero_atomico - 1] != undefined && tipomagnetico_tablaperiodica[numero_atomico - 1] != "") {
            document.getElementById("text-datos-tipo-magnetico").innerHTML = tipomagnetico_tablaperiodica[numero_atomico - 1];
        }
        else {
            document.getElementById("text-datos-tipo-magnetico").innerHTML = "_ _ _";
        }
        tipomagnetico_tablaperiodica = null;
        //calcular conf. elec...
        calcularP1();
        calcularP2();
        calcularP3();
        calcularP4();
        calcularP5();
        calcularP6();
        calcularP7();
        calcularPExtra1();
        reducirConfiguracionElec();
        calcularGrupo();
        //configuracion electronica
        document.getElementById("text-datos-configuracion-electronica").innerHTML = configuracion_texto;
        //periodo
        document.getElementById("text-datos-periodo").innerHTML = periodo_atomo;
        //grupo
        document.getElementById("text-datos-grupo").innerHTML = grupo_atomo;
        //reiniciar variables
        numero_atomico = null;
        numero_masico = null;
        numero_electrones = null;
        carga_electrones = null;
        periodo_atomo = null;
        grupo_atomo = null;
        configuracion_texto = null;
    }
    //reiniciar variables
    numero_atomico = null;
    numero_masico = null;
    numero_electrones = null;
    carga_electrones = null;
    periodo_atomo = null;
    grupo_atomo = null;
    configuracion_texto = null;
}
/*configuracion */
function calcularP1() {
    if (numero_electrones >= 1) {
        if (numero_electrones == 1) {
            configuracion_texto = " 1s<sup>1</sup>";
            numero_electrones--;
            periodo_atomo = 1;
            grupo_atomo = 1;
        }
        if (numero_electrones >= 2) {
            configuracion_texto = " 1s<sup>2</sup>";
            numero_electrones = numero_electrones - 2;
            periodo_atomo = 1;
            grupo_atomo = 2;
        }
    }
}
function calcularP2() {
    if (numero_electrones >= 1) {
        if (numero_electrones == 1) {
            configuracion_texto += " 2s<sup>1</sup>";
            numero_electrones--;
            periodo_atomo = 2;
            grupo_atomo = 1;
        }
        if (numero_electrones >= 2) {
            configuracion_texto += " 2s<sup>2</sup>";
            numero_electrones = numero_electrones - 2;
            periodo_atomo = 2;
            grupo_atomo = 2;
            if (numero_electrones == 1) {
                configuracion_texto += " 2p<sup>1</sup>";
                numero_electrones = numero_electrones - 1;
                periodo_atomo = 2;
                grupo_atomo = 13;
            }
            if (numero_electrones == 2) {
                configuracion_texto += " 2p<sup>2</sup>";
                numero_electrones = numero_electrones - 2;
                periodo_atomo = 2;
                grupo_atomo = 14;
            }
            if (numero_electrones == 3) {
                configuracion_texto += " 2p<sup>3</sup>";
                numero_electrones = numero_electrones - 3;
                periodo_atomo = 2;
                grupo_atomo = 15;
            }
            if (numero_electrones == 4) {
                configuracion_texto += " 2p<sup>4</sup>";
                numero_electrones = numero_electrones - 4;
                periodo_atomo = 2;
                grupo_atomo = 16;
            }
            if (numero_electrones == 5) {
                configuracion_texto += " 2p<sup>5</sup>";
                numero_electrones = numero_electrones - 5;
                periodo_atomo = 2;
                grupo_atomo = 17;
            }
            if (numero_electrones >= 6) {
                configuracion_texto += " 2p<sup>6</sup>";
                numero_electrones = numero_electrones - 6;
                periodo_atomo = 2;
                grupo_atomo = 18;
            }
        }
    }

}
function calcularP3() {
    if (numero_electrones >= 1) {
        if (numero_electrones == 1) {
            configuracion_texto += " 3s<sup>1</sup>";
            numero_electrones--;
            periodo_atomo = 3;
            grupo_atomo = 1;
        }
        if (numero_electrones >= 2) {
            configuracion_texto += " 3s<sup>2</sup>";
            numero_electrones = numero_electrones - 2;
            periodo_atomo = 3;
            grupo_atomo = 2;
            if (numero_electrones == 1) {
                configuracion_texto += " 3p<sup>1</sup>";
                numero_electrones = numero_electrones - 1;
                periodo_atomo = 3;
                grupo_atomo = 13;
            }
            if (numero_electrones == 2) {
                configuracion_texto += " 3p<sup>2</sup>";
                numero_electrones = numero_electrones - 2;
                periodo_atomo = 3;
                grupo_atomo = 14;
            }
            if (numero_electrones == 3) {
                configuracion_texto += " 3p<sup>3</sup>";
                numero_electrones = numero_electrones - 3;
                periodo_atomo = 3;
                grupo_atomo = 15;
            }
            if (numero_electrones == 4) {
                configuracion_texto += " 3p<sup>4</sup>";
                numero_electrones = numero_electrones - 4;
                periodo_atomo = 3;
                grupo_atomo = 16;
            }
            if (numero_electrones == 5) {
                configuracion_texto += " 3p<sup>5</sup>";
                numero_electrones = numero_electrones - 5;
                periodo_atomo = 3;
                grupo_atomo = 17;
            }
            if (numero_electrones >= 6) {
                configuracion_texto += " 3p<sup>6</sup>";
                numero_electrones = numero_electrones - 6;
                periodo_atomo = 3;
                grupo_atomo = 18;
            }
        }
    }

}
function calcularP4() {
    if (numero_electrones >= 1) {
        if (numero_electrones == 1) {
            configuracion_texto += " 4s<sup>1</sup>";
            numero_electrones--;
            periodo_atomo = 4;
            grupo_atomo = 1;
        }
        if (numero_electrones >= 2) {
            configuracion_texto += " 4s<sup>2</sup>";
            numero_electrones = numero_electrones - 2;
            periodo_atomo = 4;
            grupo_atomo = 2;
            if (numero_electrones == 1) {
                configuracion_texto += " 3d<sup>1</sup>";
                numero_electrones = numero_electrones - 1;
                periodo_atomo = 4;
                grupo_atomo = 3;
            }
            if (numero_electrones == 2) {
                configuracion_texto += " 3d<sup>2</sup>";
                numero_electrones = numero_electrones - 2;
                periodo_atomo = 4;
                grupo_atomo = 4;
            }
            if (numero_electrones == 3) {
                configuracion_texto += " 3d<sup>3</sup>";
                numero_electrones = numero_electrones - 3;
                periodo_atomo = 4;
                grupo_atomo = 5;
            }
            if (numero_electrones == 4) {
                configuracion_texto += " 3d<sup>4</sup>";
                numero_electrones = numero_electrones - 4;
                periodo_atomo = 4;
                grupo_atomo = 6;
            }
            if (numero_electrones == 5) {
                configuracion_texto += " 3d<sup>5</sup>";
                numero_electrones = numero_electrones - 5;
                periodo_atomo = 4;
                grupo_atomo = 7;
            }
            if (numero_electrones == 6) {
                configuracion_texto += " 3d<sup>6</sup>";
                periodo_atomo = 4;
                numero_electrones = numero_electrones - 6;
                grupo_atomo = 8;
            }
            if (numero_electrones == 7) {
                configuracion_texto += " 3d<sup>7</sup>";
                periodo_atomo = 4;
                numero_electrones = numero_electrones - 7;
                grupo_atomo = 9;
            }
            if (numero_electrones == 8) {
                configuracion_texto += " 3d<sup>8</sup>";
                periodo_atomo = 4;
                numero_electrones = numero_electrones - 8;
                grupo_atomo = 10;
            }
            if (numero_electrones == 9) {
                configuracion_texto += " 3d<sup>9</sup>";
                periodo_atomo = 4;
                numero_electrones = numero_electrones - 9;
                grupo_atomo = 11;
            }
            if (numero_electrones >= 10) {
                configuracion_texto += " 3d<sup>10</sup>";
                periodo_atomo = 4;
                numero_electrones = numero_electrones - 10;
                grupo_atomo = 12;
            }
            if (numero_electrones == 1) {
                configuracion_texto += " 4p<sup>1</sup>";
                numero_electrones = numero_electrones - 1;
                periodo_atomo = 4;
                grupo_atomo = 13;
            }
            if (numero_electrones == 2) {
                configuracion_texto += " 4p<sup>2</sup>";
                numero_electrones = numero_electrones - 2;
                periodo_atomo = 4;
                grupo_atomo = 14;
            }
            if (numero_electrones == 3) {
                configuracion_texto += " 4p<sup>3</sup>";
                numero_electrones = numero_electrones - 3;
                periodo_atomo = 4;
                grupo_atomo = 15;
            }
            if (numero_electrones == 4) {
                configuracion_texto += " 4p<sup>4</sup>";
                numero_electrones = numero_electrones - 4;
                periodo_atomo = 4;
                grupo_atomo = 16;
            }
            if (numero_electrones == 5) {
                configuracion_texto += " 4p<sup>5</sup>";
                numero_electrones = numero_electrones - 5;
                periodo_atomo = 4;
                grupo_atomo = 17;
            }
            if (numero_electrones >= 6) {
                configuracion_texto += " 4p<sup>6</sup>";
                numero_electrones = numero_electrones - 6;
                periodo_atomo = 4;
                grupo_atomo = 18;
            }
        }
    }

}
function calcularP5() {
    if (numero_electrones >= 1) {
        if (numero_electrones == 1) {
            configuracion_texto += " 5s<sup>1</sup>";
            numero_electrones--;
            periodo_atomo = 5;
            grupo_atomo = 1;
        }
        if (numero_electrones >= 2) {
            configuracion_texto += " 5s<sup>2</sup>";
            numero_electrones = numero_electrones - 2;
            periodo_atomo = 5;
            grupo_atomo = 2;
            if (numero_electrones == 1) {
                configuracion_texto += " 4d<sup>1</sup>";
                numero_electrones = numero_electrones - 1;
                periodo_atomo = 5;
                grupo_atomo = 3;
            }
            if (numero_electrones == 2) {
                configuracion_texto += " 4d<sup>2</sup>";
                numero_electrones = numero_electrones - 2;
                periodo_atomo = 5;
                grupo_atomo = 4;
            }
            if (numero_electrones == 3) {
                configuracion_texto += " 4d<sup>3</sup>";
                numero_electrones = numero_electrones - 3;
                periodo_atomo = 5;
                grupo_atomo = 5;
            }
            if (numero_electrones == 4) {
                configuracion_texto += " 4d<sup>4</sup>";
                numero_electrones = numero_electrones - 4;
                periodo_atomo = 5;
                grupo_atomo = 6;
            }
            if (numero_electrones == 5) {
                configuracion_texto += " 4d<sup>5</sup>";
                numero_electrones = numero_electrones - 5;
                periodo_atomo = 5;
                grupo_atomo = 7;
            }
            if (numero_electrones == 6) {
                configuracion_texto += " 4d<sup>6</sup>";
                periodo_atomo = 5;
                numero_electrones = numero_electrones - 6;
                grupo_atomo = 8;
            }
            if (numero_electrones == 7) {
                configuracion_texto += " 4d<sup>7</sup>";
                periodo_atomo = 5;
                numero_electrones = numero_electrones - 7;
                grupo_atomo = 9;
            }
            if (numero_electrones == 8) {
                configuracion_texto += " 4d<sup>8</sup>";
                periodo_atomo = 5;
                numero_electrones = numero_electrones - 8;
                grupo_atomo = 10;
            }
            if (numero_electrones == 9) {
                configuracion_texto += " 4d<sup>9</sup>";
                periodo_atomo = 5;
                numero_electrones = numero_electrones - 9;
                grupo_atomo = 11;
            }
            if (numero_electrones >= 10) {
                configuracion_texto += " 4d<sup>10</sup>";
                periodo_atomo = 5;
                numero_electrones = numero_electrones - 10;
                grupo_atomo = 12;
            }
            if (numero_electrones == 1) {
                configuracion_texto += " 5p<sup>1</sup>";
                numero_electrones = numero_electrones - 1;
                periodo_atomo = 5;
                grupo_atomo = 13;
            }
            if (numero_electrones == 2) {
                configuracion_texto += " 5p<sup>2</sup>";
                numero_electrones = numero_electrones - 2;
                periodo_atomo = 5;
                grupo_atomo = 14;
            }
            if (numero_electrones == 3) {
                configuracion_texto += " 5p<sup>3</sup>";
                numero_electrones = numero_electrones - 3;
                periodo_atomo = 5;
                grupo_atomo = 15;
            }
            if (numero_electrones == 4) {
                configuracion_texto += " 5p<sup>4</sup>";
                numero_electrones = numero_electrones - 4;
                periodo_atomo = 5;
                grupo_atomo = 16;
            }
            if (numero_electrones == 5) {
                configuracion_texto += " 5p<sup>5</sup>";
                numero_electrones = numero_electrones - 5;
                periodo_atomo = 5;
                grupo_atomo = 17;
            }
            if (numero_electrones >= 6) {
                configuracion_texto += " 5p<sup>6</sup>";
                numero_electrones = numero_electrones - 6;
                periodo_atomo = 5;
                grupo_atomo = 18;
            }
        }
    }

}
function calcularP6() {
    if (numero_electrones >= 1) {
        if (numero_electrones == 1) {
            configuracion_texto += " 6s<sup>1</sup>";
            numero_electrones--;
            periodo_atomo = 6;
            grupo_atomo = 1;
        }
        if (numero_electrones >= 2) {
            configuracion_texto += " 6s<sup>2</sup>";
            numero_electrones = numero_electrones - 2;
            periodo_atomo = 6;
            grupo_atomo = 2;
            if (numero_electrones == 1) {
                configuracion_texto += " 4f<sup>1</sup>";
                numero_electrones = numero_electrones - 1;
                periodo_atomo = 6;
                grupo_atomo = 3;
            }
            if (numero_electrones == 2) {
                configuracion_texto += " 4f<sup>2</sup>";
                numero_electrones = numero_electrones - 2;
                periodo_atomo = 6;
                grupo_atomo = 4;
            }
            if (numero_electrones == 3) {
                configuracion_texto += " 4f<sup>3</sup>";
                numero_electrones = numero_electrones - 3;
                periodo_atomo = 6;
                grupo_atomo = 5;
            }
            if (numero_electrones == 4) {
                configuracion_texto += " 4f<sup>4</sup>";
                numero_electrones = numero_electrones - 4;
                periodo_atomo = 6;
                grupo_atomo = 6;
            }
            if (numero_electrones == 5) {
                configuracion_texto += " 4f<sup>5</sup>";
                numero_electrones = numero_electrones - 5;
                periodo_atomo = 6;
                grupo_atomo = 7;
            }
            if (numero_electrones == 6) {
                configuracion_texto += " 4f<sup>6</sup>";
                periodo_atomo = 6;
                numero_electrones = numero_electrones - 6;
                grupo_atomo = 8;
            }
            if (numero_electrones == 7) {
                configuracion_texto += " 4f<sup>7</sup>";
                periodo_atomo = 6;
                numero_electrones = numero_electrones - 7;
                grupo_atomo = 9;
            }
            if (numero_electrones == 8) {
                configuracion_texto += " 4f<sup>8</sup>";
                periodo_atomo = 6;
                numero_electrones = numero_electrones - 8;
                grupo_atomo = 10;
            }
            if (numero_electrones == 9) {
                configuracion_texto += " 4f<sup>9</sup>";
                periodo_atomo = 6;
                numero_electrones = numero_electrones - 9;
                grupo_atomo = 11;
            }
            if (numero_electrones == 10) {
                configuracion_texto += " 4f<sup>10</sup>";
                periodo_atomo = 6;
                numero_electrones = numero_electrones - 10;
                grupo_atomo = 12;
            }
            if (numero_electrones == 11) {
                configuracion_texto += " 4f<sup>11</sup>";
                periodo_atomo = 6;
                numero_electrones = numero_electrones - 11;
                grupo_atomo = 12;
            }
            if (numero_electrones == 12) {
                configuracion_texto += " 4f<sup>12</sup>";
                periodo_atomo = 6;
                numero_electrones = numero_electrones - 12;
                grupo_atomo = 12;
            }
            if (numero_electrones == 13) {
                configuracion_texto += " 4f<sup>13</sup>";
                periodo_atomo = 6;
                numero_electrones = numero_electrones - 13;
                grupo_atomo = 12;
            }
            if (numero_electrones >= 14) {
                configuracion_texto += " 4f<sup>14</sup>";
                periodo_atomo = 6;
                numero_electrones = numero_electrones - 14;
                grupo_atomo = 12;
                if (numero_electrones == 1) {
                    configuracion_texto += " 5d<sup>1</sup>";
                    numero_electrones = numero_electrones - 1;
                    periodo_atomo = 6;
                    grupo_atomo = 3;
                }
                if (numero_electrones == 2) {
                    configuracion_texto += " 5d<sup>2</sup>";
                    numero_electrones = numero_electrones - 2;
                    periodo_atomo = 6;
                    grupo_atomo = 4;
                }
                if (numero_electrones == 3) {
                    configuracion_texto += " 5d<sup>3</sup>";
                    numero_electrones = numero_electrones - 3;
                    periodo_atomo = 6;
                    grupo_atomo = 5;
                }
                if (numero_electrones == 4) {
                    configuracion_texto += " 5d<sup>4</sup>";
                    numero_electrones = numero_electrones - 4;
                    periodo_atomo = 6;
                    grupo_atomo = 6;
                }
                if (numero_electrones == 5) {
                    configuracion_texto += " 5d<sup>5</sup>";
                    numero_electrones = numero_electrones - 5;
                    periodo_atomo = 6;
                    grupo_atomo = 7;
                }
                if (numero_electrones == 6) {
                    configuracion_texto += " 5d<sup>6</sup>";
                    periodo_atomo = 6;
                    numero_electrones = numero_electrones - 6;
                    grupo_atomo = 8;
                }
                if (numero_electrones == 7) {
                    configuracion_texto += " 5d<sup>7</sup>";
                    periodo_atomo = 6;
                    numero_electrones = numero_electrones - 7;
                    grupo_atomo = 9;
                }
                if (numero_electrones == 8) {
                    configuracion_texto += " 5d<sup>8</sup>";
                    periodo_atomo = 6;
                    numero_electrones = numero_electrones - 8;
                    grupo_atomo = 10;
                }
                if (numero_electrones == 9) {
                    configuracion_texto += " 5d<sup>9</sup>";
                    periodo_atomo = 6;
                    numero_electrones = numero_electrones - 9;
                    grupo_atomo = 11;
                }
                if (numero_electrones >= 10) {
                    configuracion_texto += " 5d<sup>10</sup>";
                    periodo_atomo = 6;
                    numero_electrones = numero_electrones - 10;
                    grupo_atomo = 12;
                }
                if (numero_electrones == 1) {
                    configuracion_texto += " 6p<sup>1</sup>";
                    numero_electrones = numero_electrones - 1;
                    periodo_atomo = 6;
                    grupo_atomo = 13;
                }
                if (numero_electrones == 2) {
                    configuracion_texto += " 6p<sup>2</sup>";
                    numero_electrones = numero_electrones - 2;
                    periodo_atomo = 6;
                    grupo_atomo = 14;
                }
                if (numero_electrones == 3) {
                    configuracion_texto += " 6p<sup>3</sup>";
                    numero_electrones = numero_electrones - 3;
                    periodo_atomo = 6;
                    grupo_atomo = 15;
                }
                if (numero_electrones == 4) {
                    configuracion_texto += " 6p<sup>4</sup>";
                    numero_electrones = numero_electrones - 4;
                    periodo_atomo = 6;
                    grupo_atomo = 16;
                }
                if (numero_electrones == 5) {
                    configuracion_texto += " 6p<sup>5</sup>";
                    numero_electrones = numero_electrones - 5;
                    periodo_atomo = 6;
                    grupo_atomo = 17;
                }
                if (numero_electrones >= 6) {
                    configuracion_texto += " 6p<sup>6</sup>";
                    numero_electrones = numero_electrones - 6;
                    periodo_atomo = 6;
                    grupo_atomo = 18;
                }
            }

        }
    }

}
function calcularP7() {
    if (numero_electrones >= 1) {
        if (numero_electrones == 1) {
            configuracion_texto += " 7s<sup>1</sup>";
            numero_electrones--;
            periodo_atomo = 7;
            grupo_atomo = 1;
        }
        if (numero_electrones >= 2) {
            configuracion_texto += " 7s<sup>2</sup>";
            numero_electrones = numero_electrones - 2;
            periodo_atomo = 7;
            grupo_atomo = 2;
            if (numero_electrones == 1) {
                configuracion_texto += " 5f<sup>1</sup>";
                numero_electrones = numero_electrones - 1;
                periodo_atomo = 7;
                grupo_atomo = 3;
            }
            if (numero_electrones == 2) {
                configuracion_texto += " 5f<sup>2</sup>";
                numero_electrones = numero_electrones - 2;
                periodo_atomo = 7;
                grupo_atomo = 4;
            }
            if (numero_electrones == 3) {
                configuracion_texto += " 5f<sup>3</sup>";
                numero_electrones = numero_electrones - 3;
                periodo_atomo = 7;
                grupo_atomo = 5;
            }
            if (numero_electrones == 4) {
                configuracion_texto += " 5f<sup>4</sup>";
                numero_electrones = numero_electrones - 4;
                periodo_atomo = 7;
                grupo_atomo = 6;
            }
            if (numero_electrones == 5) {
                configuracion_texto += " 5f<sup>5</sup>";
                numero_electrones = numero_electrones - 5;
                periodo_atomo = 7;
                grupo_atomo = 7;
            }
            if (numero_electrones == 6) {
                configuracion_texto += " 5f<sup>6</sup>";
                periodo_atomo = 7;
                numero_electrones = numero_electrones - 6;
                grupo_atomo = 8;
            }
            if (numero_electrones == 7) {
                configuracion_texto += " 5f<sup>7</sup>";
                periodo_atomo = 7;
                numero_electrones = numero_electrones - 7;
                grupo_atomo = 9;
            }
            if (numero_electrones == 8) {
                configuracion_texto += " 5f<sup>8</sup>";
                periodo_atomo = 7;
                numero_electrones = numero_electrones - 8;
                grupo_atomo = 10;
            }
            if (numero_electrones == 9) {
                configuracion_texto += " 5f<sup>9</sup>";
                periodo_atomo = 7;
                numero_electrones = numero_electrones - 9;
                grupo_atomo = 11;
            }
            if (numero_electrones == 10) {
                configuracion_texto += " 5f<sup>10</sup>";
                periodo_atomo = 7;
                numero_electrones = numero_electrones - 10;
                grupo_atomo = 12;
            }
            if (numero_electrones == 11) {
                configuracion_texto += " 5f<sup>11</sup>";
                periodo_atomo = 7;
                numero_electrones = numero_electrones - 11;
                grupo_atomo = 12;
            }
            if (numero_electrones == 12) {
                configuracion_texto += " 5f<sup>12</sup>";
                periodo_atomo = 7;
                numero_electrones = numero_electrones - 12;
                grupo_atomo = 12;
            }
            if (numero_electrones == 13) {
                configuracion_texto += " 5f<sup>13</sup>";
                periodo_atomo = 7;
                numero_electrones = numero_electrones - 13;
                grupo_atomo = 12;
            }
            if (numero_electrones >= 14) {
                configuracion_texto += " 5f<sup>14</sup>";
                periodo_atomo = 7;
                numero_electrones = numero_electrones - 14;
                grupo_atomo = 12;
                if (numero_electrones == 1) {
                    configuracion_texto += " 6d<sup>1</sup>";
                    numero_electrones = numero_electrones - 1;
                    periodo_atomo = 7;
                    grupo_atomo = 3;
                }
                if (numero_electrones == 2) {
                    configuracion_texto += " 6d<sup>2</sup>";
                    numero_electrones = numero_electrones - 2;
                    periodo_atomo = 7;
                    grupo_atomo = 4;
                }
                if (numero_electrones == 3) {
                    configuracion_texto += " 6d<sup>3</sup>";
                    numero_electrones = numero_electrones - 3;
                    periodo_atomo = 7;
                    grupo_atomo = 5;
                }
                if (numero_electrones == 4) {
                    configuracion_texto += " 6d<sup>4</sup>";
                    numero_electrones = numero_electrones - 4;
                    periodo_atomo = 7;
                    grupo_atomo = 6;
                }
                if (numero_electrones == 5) {
                    configuracion_texto += " 6d<sup>5</sup>";
                    numero_electrones = numero_electrones - 5;
                    periodo_atomo = 7;
                    grupo_atomo = 7;
                }
                if (numero_electrones == 6) {
                    configuracion_texto += " 6d<sup>6</sup>";
                    periodo_atomo = 7;
                    numero_electrones = numero_electrones - 6;
                    grupo_atomo = 8;
                }
                if (numero_electrones == 7) {
                    configuracion_texto += " 6d<sup>7</sup>";
                    periodo_atomo = 7;
                    numero_electrones = numero_electrones - 7;
                    grupo_atomo = 9;
                }
                if (numero_electrones == 8) {
                    configuracion_texto += " 6d<sup>8</sup>";
                    periodo_atomo = 7;
                    numero_electrones = numero_electrones - 8;
                    grupo_atomo = 10;
                }
                if (numero_electrones == 9) {
                    configuracion_texto += " 6d<sup>9</sup>";
                    periodo_atomo = 7;
                    numero_electrones = numero_electrones - 9;
                    grupo_atomo = 11;
                }
                if (numero_electrones >= 10) {
                    configuracion_texto += " 6d<sup>10</sup>";
                    periodo_atomo = 7;
                    numero_electrones = numero_electrones - 10;
                    grupo_atomo = 12;
                }
                if (numero_electrones == 1) {
                    configuracion_texto += " 7p<sup>1</sup>";
                    numero_electrones = numero_electrones - 1;
                    periodo_atomo = 7;
                    grupo_atomo = 13;
                }
                if (numero_electrones == 2) {
                    configuracion_texto += " 7p<sup>2</sup>";
                    numero_electrones = numero_electrones - 2;
                    periodo_atomo = 7;
                    grupo_atomo = 14;
                }
                if (numero_electrones == 3) {
                    configuracion_texto += " 7p<sup>3</sup>";
                    numero_electrones = numero_electrones - 3;
                    periodo_atomo = 7;
                    grupo_atomo = 15;
                }
                if (numero_electrones == 4) {
                    configuracion_texto += " 7p<sup>4</sup>";
                    numero_electrones = numero_electrones - 4;
                    periodo_atomo = 7;
                    grupo_atomo = 16;
                }
                if (numero_electrones == 5) {
                    configuracion_texto += " 7p<sup>5</sup>";
                    numero_electrones = numero_electrones - 5;
                    periodo_atomo = 7;
                    grupo_atomo = 17;
                }
                if (numero_electrones >= 6) {
                    configuracion_texto += " 7p<sup>6</sup>";
                    numero_electrones = numero_electrones - 6;
                    periodo_atomo = 7;
                    grupo_atomo = 18;
                }
            }

        }
    }

}
function calcularPExtra1() {
    //superactinidos
    if (numero_atomico == 119) {
        configuracion_texto += " 8s<sup>1</sup>";
        numero_electrones--;
        periodo_atomo = 8;
        grupo_atomo = 18;
    }
    if (numero_atomico == 120) {
        configuracion_texto += " 8s<sup>2</sup>";
        numero_electrones--;
        periodo_atomo = 8;
        grupo_atomo = 18;
    }
    if (numero_atomico == 121) {
        configuracion_texto += " 8s<sup>2</sup> 8p<sup>1</sup>";
        numero_electrones--;
        periodo_atomo = 8;
        grupo_atomo = 1;
    }
    if (numero_atomico == 122) {
        configuracion_texto += " 7d<sup>1</sup> 8s<sup>2</sup> 8p<sup>1</sup>";
        numero_electrones--;
        periodo_atomo = 8;
        grupo_atomo = 2;
    }
    if (numero_atomico == 123) {
        configuracion_texto += " 6f<sup>1</sup> 7d<sup>1</sup> 8s<sup>2</sup> 8p<sup>1</sup>";
        numero_electrones--;
        periodo_atomo = 8;
        grupo_atomo = 3;
    }
    if (numero_atomico == 124) {
        configuracion_texto += " 6f<sup>3</sup>  8s<sup>2</sup> 8p<sup>1</sup>";
        numero_electrones--;
        periodo_atomo = 8;
        grupo_atomo = 4;
    }
    if (numero_atomico == 125) {
        configuracion_texto += " 5g<sup>1</sup> 6f<sup>2</sup>  8s<sup>2</sup> 8p<sup>2</sup>";
        numero_electrones--;
        periodo_atomo = 8;
        grupo_atomo = 5;
    }
    if (numero_atomico == 126) {
        configuracion_texto += " 5g<sup>2</sup> 6f<sup>2</sup>  8s<sup>2</sup> 8p<sup>1</sup>";
        numero_electrones--;
        periodo_atomo = 8;
        grupo_atomo = 6;
    }
    if (numero_atomico == 127) {
        configuracion_texto += " 5g<sup>3</sup> 6f<sup>2</sup>  8s<sup>2</sup> 8p<sup>2</sup>";
        numero_electrones--;
        periodo_atomo = 8;
        grupo_atomo = 7;
    }
}
/*reducir configuracion */
function reducirConfiguracionElec() {
    const atomos_tablaperodica = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og", "Uue", "Ubn", "Ubu", "Ubb", "Ubt", "Ubq", "Ubp", "Ubh", "Ubs"];
    if (periodo_atomo == 2 || periodo_atomo == 1) {
        document.getElementById("text-datos-configuracion-electronica-simplificada").innerHTML = configuracion_texto.replace("1s<sup>2</sup>", "[He]");
    }
    else if (periodo_atomo == 3) {
        document.getElementById("text-datos-configuracion-electronica-simplificada").innerHTML = configuracion_texto.replace("1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup>", "[Ne]");
    }
    else if (periodo_atomo == 4) {
        document.getElementById("text-datos-configuracion-electronica-simplificada").innerHTML = configuracion_texto.replace("1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup>", "[Ar]");
    }
    else if (periodo_atomo == 5) {
        document.getElementById("text-datos-configuracion-electronica-simplificada").innerHTML = configuracion_texto.replace("1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup>", "[Kr]");
    }
    else if (periodo_atomo == 6) {
        document.getElementById("text-datos-configuracion-electronica-simplificada").innerHTML = configuracion_texto.replace("1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup>", "[Xe]");
    }
    else if (periodo_atomo == 7) {
        document.getElementById("text-datos-configuracion-electronica-simplificada").innerHTML = configuracion_texto.replace("1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup>", "[Rn]");
    }
    else if (periodo_atomo == 8) {
        document.getElementById("text-datos-configuracion-electronica-simplificada").innerHTML = configuracion_texto.replace("1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>10</sup> 7p<sup>6</sup>", "[Og]");
    }
    else {
        document.getElementById("text-datos-configuracion-electronica-simplificada").innerHTML = "_ _ _";
    }
}
/*calcular ggrupo */
function calcularGrupo() {
    if (numero_atomico == 119 || numero_atomico == 120) {
        grupo_atomo = 18;
    }
    else if (numero_atomico >= 121 && numero_atomico <= 127) {
        if (numero_atomico == 119) {
            grupo_atomo = 18;
        }
        if (numero_atomico == 120) {
            grupo_atomo = 18;
        }
        if (numero_atomico == 121) {
            grupo_atomo = 1;
        }
        if (numero_atomico == 122) {
            grupo_atomo = 2;
        }
        if (numero_atomico == 123) {
            grupo_atomo = 3;
        }
        if (numero_atomico == 124) {
            grupo_atomo = 4;
        }
        if (numero_atomico == 125) {
            grupo_atomo = 5;
        }
        if (numero_atomico == 126) {
            grupo_atomo = 6;
        }
        if (numero_atomico == 127) {
            grupo_atomo = 7;
        }
    }
    else {
        if (numero_atomico >= 1) {
            if (numero_atomico >= 1) {
                if (numero_atomico == 1) {
                    numero_atomico--;
                    grupo_atomo = 1;
                }
                if (numero_atomico == 2) {
                    numero_atomico = numero_atomico - 2;
                    grupo_atomo = 18;
                }
                if (numero_atomico > 2) {
                    numero_atomico = numero_atomico - 2;
                    grupo_atomo = 2;
                }
            }
            if (numero_atomico >= 1) {
                if (numero_atomico == 1) {
                    numero_atomico--;
                    grupo_atomo = 1;
                }
                if (numero_atomico >= 2) {
                    numero_atomico = numero_atomico - 2;
                    grupo_atomo = 2;
                    if (numero_atomico == 1) {
                        numero_atomico = numero_atomico - 1;
                        grupo_atomo = 13;
                    }
                    if (numero_atomico == 2) {
                        numero_atomico = numero_atomico - 2;
                        grupo_atomo = 14;
                    }
                    if (numero_atomico == 3) {
                        numero_atomico = numero_atomico - 3;
                        grupo_atomo = 15;
                    }
                    if (numero_atomico == 4) {
                        numero_atomico = numero_atomico - 4;
                        grupo_atomo = 16;
                    }
                    if (numero_atomico == 5) {
                        numero_atomico = numero_atomico - 5;
                        grupo_atomo = 17;
                    }
                    if (numero_atomico >= 6) {
                        numero_atomico = numero_atomico - 6;
                        grupo_atomo = 18;
                    }
                }
            }
            if (numero_atomico >= 1) {
                if (numero_atomico == 1) {
                    numero_atomico--;
                    grupo_atomo = 1;
                }
                if (numero_atomico >= 2) {
                    numero_atomico = numero_atomico - 2;
                    grupo_atomo = 2;
                    if (numero_atomico == 1) {
                        numero_atomico = numero_atomico - 1;
                        grupo_atomo = 13;
                    }
                    if (numero_atomico == 2) {
                        numero_atomico = numero_atomico - 2;
                        grupo_atomo = 14;
                    }
                    if (numero_atomico == 3) {
                        numero_atomico = numero_atomico - 3;
                        grupo_atomo = 15;
                    }
                    if (numero_atomico == 4) {
                        numero_atomico = numero_atomico - 4;
                        grupo_atomo = 16;
                    }
                    if (numero_atomico == 5) {
                        numero_atomico = numero_atomico - 5;
                        grupo_atomo = 17;
                    }
                    if (numero_atomico >= 6) {
                        numero_atomico = numero_atomico - 6;
                        grupo_atomo = 18;
                    }
                }
            }
            if (numero_atomico >= 1) {
                if (numero_atomico == 1) {
                    numero_atomico--;
                    grupo_atomo = 1;
                }
                if (numero_atomico >= 2) {
                    numero_atomico = numero_atomico - 2;
                    grupo_atomo = 2;
                    if (numero_atomico == 1) {
                        numero_atomico = numero_atomico - 1;
                        grupo_atomo = 3;
                    }
                    if (numero_atomico == 2) {
                        numero_atomico = numero_atomico - 2;
                        grupo_atomo = 4;
                    }
                    if (numero_atomico == 3) {
                        numero_atomico = numero_atomico - 3;
                        grupo_atomo = 5;
                    }
                    if (numero_atomico == 4) {
                        numero_atomico = numero_atomico - 4;
                        grupo_atomo = 6;
                    }
                    if (numero_atomico == 5) {
                        numero_atomico = numero_atomico - 5;
                        grupo_atomo = 7;
                    }
                    if (numero_atomico == 6) {
                        numero_atomico = numero_atomico - 6;
                        grupo_atomo = 8;
                    }
                    if (numero_atomico == 7) {
                        numero_atomico = numero_atomico - 7;
                        grupo_atomo = 9;
                    }
                    if (numero_atomico == 8) {
                        numero_atomico = numero_atomico - 8;
                        grupo_atomo = 10;
                    }
                    if (numero_atomico == 9) {
                        numero_atomico = numero_atomico - 9;
                        grupo_atomo = 11;
                    }
                    if (numero_atomico >= 10) {
                        numero_atomico = numero_atomico - 10;
                        grupo_atomo = 12;
                    }
                    if (numero_atomico == 1) {
                        numero_atomico = numero_atomico - 1;
                        grupo_atomo = 13;
                    }
                    if (numero_atomico == 2) {
                        numero_atomico = numero_atomico - 2;
                        grupo_atomo = 14;
                    }
                    if (numero_atomico == 3) {
                        numero_atomico = numero_atomico - 3;
                        grupo_atomo = 15;
                    }
                    if (numero_atomico == 4) {
                        numero_atomico = numero_atomico - 4;
                        grupo_atomo = 16;
                    }
                    if (numero_atomico == 5) {
                        numero_atomico = numero_atomico - 5;
                        grupo_atomo = 17;
                    }
                    if (numero_atomico >= 6) {
                        numero_atomico = numero_atomico - 6;
                        grupo_atomo = 18;
                    }
                }
            }
            if (numero_atomico >= 1) {
                if (numero_atomico == 1) {
                    numero_atomico--;
                    grupo_atomo = 1;
                }
                if (numero_atomico >= 2) {
                    numero_atomico = numero_atomico - 2;
                    grupo_atomo = 2;
                    if (numero_atomico == 1) {
                        numero_atomico = numero_atomico - 1;
                        grupo_atomo = 3;
                    }
                    if (numero_atomico == 2) {
                        numero_atomico = numero_atomico - 2;
                        grupo_atomo = 4;
                    }
                    if (numero_atomico == 3) {
                        numero_atomico = numero_atomico - 3;
                        grupo_atomo = 5;
                    }
                    if (numero_atomico == 4) {
                        numero_atomico = numero_atomico - 4;
                        grupo_atomo = 6;
                    }
                    if (numero_atomico == 5) {
                        numero_atomico = numero_atomico - 5;
                        grupo_atomo = 7;
                    }
                    if (numero_atomico == 6) {
                        numero_atomico = numero_atomico - 6;
                        grupo_atomo = 8;
                    }
                    if (numero_atomico == 7) {
                        numero_atomico = numero_atomico - 7;
                        grupo_atomo = 9;
                    }
                    if (numero_atomico == 8) {
                        numero_atomico = numero_atomico - 8;
                        grupo_atomo = 10;
                    }
                    if (numero_atomico == 9) {
                        numero_atomico = numero_atomico - 9;
                        grupo_atomo = 11;
                    }
                    if (numero_atomico >= 10) {
                        numero_atomico = numero_atomico - 10;
                        grupo_atomo = 12;
                    }
                    if (numero_atomico == 1) {
                        numero_atomico = numero_atomico - 1;
                        grupo_atomo = 13;
                    }
                    if (numero_atomico == 2) {
                        numero_atomico = numero_atomico - 2;
                        grupo_atomo = 14;
                    }
                    if (numero_atomico == 3) {
                        numero_atomico = numero_atomico - 3;
                        grupo_atomo = 15;
                    }
                    if (numero_atomico == 4) {
                        numero_atomico = numero_atomico - 4;
                        grupo_atomo = 16;
                    }
                    if (numero_atomico == 5) {
                        numero_atomico = numero_atomico - 5;
                        grupo_atomo = 17;
                    }
                    if (numero_atomico >= 6) {
                        numero_atomico = numero_atomico - 6;
                        grupo_atomo = 18;
                    }
                }
            }
            if (numero_atomico >= 1) {
                if (numero_atomico == 1) {
                    numero_atomico--;
                    grupo_atomo = 1;
                }
                if (numero_atomico >= 2) {
                    numero_atomico = numero_atomico - 2;
                    grupo_atomo = 2;
                    if (numero_atomico == 1) {
                        numero_atomico = numero_atomico - 1;
                        grupo_atomo = 3;
                    }
                    if (numero_atomico == 2) {
                        numero_atomico = numero_atomico - 2;
                        grupo_atomo = 4;
                    }
                    if (numero_atomico == 3) {
                        numero_atomico = numero_atomico - 3;
                        grupo_atomo = 5;
                    }
                    if (numero_atomico == 4) {
                        numero_atomico = numero_atomico - 4;
                        grupo_atomo = 6;
                    }
                    if (numero_atomico == 5) {
                        numero_atomico = numero_atomico - 5;
                        grupo_atomo = 7;
                    }
                    if (numero_atomico == 6) {
                        numero_atomico = numero_atomico - 6;
                        grupo_atomo = 8;
                    }
                    if (numero_atomico == 7) {
                        numero_atomico = numero_atomico - 7;
                        grupo_atomo = 9;
                    }
                    if (numero_atomico == 8) {
                        numero_atomico = numero_atomico - 8;
                        grupo_atomo = 10;
                    }
                    if (numero_atomico == 9) {
                        numero_atomico = numero_atomico - 9;
                        grupo_atomo = 11;
                    }
                    if (numero_atomico == 10) {
                        numero_atomico = numero_atomico - 10;
                        grupo_atomo = 12;
                    }
                    if (numero_atomico == 11) {
                        numero_atomico = numero_atomico - 11;
                        grupo_atomo = 12;
                    }
                    if (numero_atomico == 12) {
                        numero_atomico = numero_atomico - 12;
                        grupo_atomo = 12;
                    }
                    if (numero_atomico == 13) {
                        numero_atomico = numero_atomico - 13;
                        grupo_atomo = 12;
                    }
                    if (numero_atomico >= 14) {
                        numero_atomico = numero_atomico - 14;
                        grupo_atomo = 12;
                        if (numero_atomico == 1) {
                            numero_atomico = numero_atomico - 1;
                            grupo_atomo = 3;
                        }
                        if (numero_atomico == 2) {
                            numero_atomico = numero_atomico - 2;
                            grupo_atomo = 4;
                        }
                        if (numero_atomico == 3) {
                            numero_atomico = numero_atomico - 3;
                            grupo_atomo = 5;
                        }
                        if (numero_atomico == 4) {
                            numero_atomico = numero_atomico - 4;
                            grupo_atomo = 6;
                        }
                        if (numero_atomico == 5) {
                            numero_atomico = numero_atomico - 5;
                            grupo_atomo = 7;
                        }
                        if (numero_atomico == 6) {
                            numero_atomico = numero_atomico - 6;
                            grupo_atomo = 8;
                        }
                        if (numero_atomico == 7) {
                            numero_atomico = numero_atomico - 7;
                            grupo_atomo = 9;
                        }
                        if (numero_atomico == 8) {
                            numero_atomico = numero_atomico - 8;
                            grupo_atomo = 10;
                        }
                        if (numero_atomico == 9) {
                            numero_atomico = numero_atomico - 9;
                            grupo_atomo = 11;
                        }
                        if (numero_atomico >= 10) {
                            numero_atomico = numero_atomico - 10;
                            grupo_atomo = 12;
                        }
                        if (numero_atomico == 1) {
                            numero_atomico = numero_atomico - 1;
                            grupo_atomo = 13;
                        }
                        if (numero_atomico == 2) {
                            numero_atomico = numero_atomico - 2;
                            grupo_atomo = 14;
                        }
                        if (numero_atomico == 3) {
                            numero_atomico = numero_atomico - 3;
                            grupo_atomo = 15;
                        }
                        if (numero_atomico == 4) {
                            numero_atomico = numero_atomico - 4;
                            grupo_atomo = 16;
                        }
                        if (numero_atomico == 5) {
                            numero_atomico = numero_atomico - 5;
                            grupo_atomo = 17;
                        }
                        if (numero_atomico >= 6) {
                            numero_atomico = numero_atomico - 6;
                            grupo_atomo = 18;
                        }
                    }

                }
            }
            if (numero_atomico >= 1) {
                if (numero_atomico == 1) {
                    numero_atomico--;
                    grupo_atomo = 1;
                }
                if (numero_atomico >= 2) {
                    numero_atomico = numero_atomico - 2;
                    grupo_atomo = 2;
                    if (numero_atomico == 1) {
                        numero_atomico = numero_atomico - 1;
                        grupo_atomo = 3;
                    }
                    if (numero_atomico == 2) {
                        numero_atomico = numero_atomico - 2;
                        grupo_atomo = 4;
                    }
                    if (numero_atomico == 3) {
                        numero_atomico = numero_atomico - 3;
                        grupo_atomo = 5;
                    }
                    if (numero_atomico == 4) {
                        numero_atomico = numero_atomico - 4;
                        grupo_atomo = 6;
                    }
                    if (numero_atomico == 5) {
                        numero_atomico = numero_atomico - 5;
                        grupo_atomo = 7;
                    }
                    if (numero_atomico == 6) {
                        numero_atomico = numero_atomico - 6;
                        grupo_atomo = 8;
                    }
                    if (numero_atomico == 7) {
                        numero_atomico = numero_atomico - 7;
                        grupo_atomo = 9;
                    }
                    if (numero_atomico == 8) {
                        numero_atomico = numero_atomico - 8;
                        grupo_atomo = 10;
                    }
                    if (numero_atomico == 9) {
                        numero_atomico = numero_atomico - 9;
                        grupo_atomo = 11;
                    }
                    if (numero_atomico == 10) {
                        numero_atomico = numero_atomico - 10;
                        grupo_atomo = 12;
                    }
                    if (numero_atomico == 11) {
                        numero_atomico = numero_atomico - 11;
                        grupo_atomo = 12;
                    }
                    if (numero_atomico == 12) {
                        numero_atomico = numero_atomico - 12;
                        grupo_atomo = 12;
                    }
                    if (numero_atomico == 13) {
                        numero_atomico = numero_atomico - 13;
                        grupo_atomo = 12;
                    }
                    if (numero_atomico >= 14) {
                        numero_atomico = numero_atomico - 14;
                        grupo_atomo = 12;
                        if (numero_atomico == 1) {
                            numero_atomico = numero_atomico - 1;
                            grupo_atomo = 3;
                        }
                        if (numero_atomico == 2) {
                            numero_atomico = numero_atomico - 2;
                            grupo_atomo = 4;
                        }
                        if (numero_atomico == 3) {
                            numero_atomico = numero_atomico - 3;
                            grupo_atomo = 5;
                        }
                        if (numero_atomico == 4) {
                            numero_atomico = numero_atomico - 4;
                            grupo_atomo = 6;
                        }
                        if (numero_atomico == 5) {
                            numero_atomico = numero_atomico - 5;
                            grupo_atomo = 7;
                        }
                        if (numero_atomico == 6) {
                            numero_atomico = numero_atomico - 6;
                            grupo_atomo = 8;
                        }
                        if (numero_atomico == 7) {
                            numero_atomico = numero_atomico - 7;
                            grupo_atomo = 9;
                        }
                        if (numero_atomico == 8) {
                            numero_atomico = numero_atomico - 8;
                            grupo_atomo = 10;
                        }
                        if (numero_atomico == 9) {
                            numero_atomico = numero_atomico - 9;
                            grupo_atomo = 11;
                        }
                        if (numero_atomico >= 10) {
                            numero_atomico = numero_atomico - 10;
                            grupo_atomo = 12;
                        }
                        if (numero_atomico == 1) {
                            numero_atomico = numero_atomico - 1;
                            grupo_atomo = 13;
                        }
                        if (numero_atomico == 2) {
                            numero_atomico = numero_atomico - 2;
                            grupo_atomo = 14;
                        }
                        if (numero_atomico == 3) {
                            numero_atomico = numero_atomico - 3;
                            grupo_atomo = 15;
                        }
                        if (numero_atomico == 4) {
                            numero_atomico = numero_atomico - 4;
                            grupo_atomo = 16;
                        }
                        if (numero_atomico == 5) {
                            numero_atomico = numero_atomico - 5;
                            grupo_atomo = 17;
                        }
                        if (numero_atomico >= 6) {
                            numero_atomico = numero_atomico - 6;
                            grupo_atomo = 18;
                        }
                    }

                }
            }
        }
        else {
            grupo_atomo = "_ _ _";
        }
    }
}

/*cambiar el diseño */
function cambiar_diseño_elemento() {
    //imagen atomo
    let imagenes_src = [
        "img-elementos-quimicos-hidrogeno.jpg",
        "",
        "img-elementos-quimicos-litio.jpg"
    ];
    let boxShadow_img = [
        "#595a94",
        "",
        "#abaaae"
    ];
    if (imagenes_src[numero_atomico - 1] != undefined) {
        document.getElementById("div-imagen-elemento-tablaperiodica-buscado").style.display = "block";
        document.getElementById("div-imagen-elemento-tablaperiodica-buscado").style.boxShadow = "0px 0px 6px "+boxShadow_img[numero_atomico - 1];
        document.getElementById("img-elemento-buscado-tablaperiodica").src = "recursos/elementos-quimicos/" + imagenes_src[numero_atomico - 1];
    }
    else{
        document.getElementById("div-imagen-elemento-tablaperiodica-buscado").style.display = "none";
    }
    //tema bordes
    if (numero_atomico == 4 || numero_atomico == 12 || numero_atomico == 20 || numero_atomico == 38 || numero_atomico == 56 || numero_atomico == 88 || numero_atomico == 120) {//azul claro
        for (let i = 0; i < 22; i++) {
            document.getElementsByClassName("div-datos-calculados")[i].style.borderTop = "rgb(5, 97, 177) 1px ridge";
        }
    }
    else if (numero_atomico == 13 || numero_atomico == 31 || numero_atomico == 49 || numero_atomico == 50 || numero_atomico == 81 || numero_atomico == 82 || numero_atomico == 83 || numero_atomico == 113 || numero_atomico == 114 || numero_atomico == 115 || numero_atomico == 116) {//azul oscuro
        for (let i = 0; i < 22; i++) {
            document.getElementsByClassName("div-datos-calculados")[i].style.borderTop = "rgb(1, 62, 177)  1px ridge";
        }
    }
    else if ((numero_atomico >= 21 && numero_atomico <= 30) || (numero_atomico >= 39 && numero_atomico <= 48) || (numero_atomico >= 72 && numero_atomico <= 80) || (numero_atomico >= 104 && numero_atomico <= 112)) {//naranja
        for (let i = 0; i < 22; i++) {
            document.getElementsByClassName("div-datos-calculados")[i].style.borderTop = "rgb(170, 91, 1) 1px ridge";
        }
    }
    else if (numero_atomico == 1 || (numero_atomico >= 6 && numero_atomico <= 8) || numero_atomico == 15 || numero_atomico == 16 || numero_atomico == 34) {//amarillo
        for (let i = 0; i < 22; i++) {
            document.getElementsByClassName("div-datos-calculados")[i].style.borderTop = "rgb(202, 135, 0) 1px ridge";
        }
    }
    else if (numero_atomico == 3 || numero_atomico == 11 || numero_atomico == 19 || numero_atomico == 37 || numero_atomico == 55 || numero_atomico == 87 || numero_atomico == 119 || numero_atomico == 5 || numero_atomico == 14 || numero_atomico == 32 || numero_atomico == 33 || numero_atomico == 51 || numero_atomico == 52 || numero_atomico == 84) {//rojo oscuro
        for (let i = 0; i < 22; i++) {
            document.getElementsByClassName("div-datos-calculados")[i].style.borderTop = "rgb(152, 0, 41) 1px ridge";
        }
    }
    else if (numero_atomico >= 57 && numero_atomico <= 71) {//rojo claro
        for (let i = 0; i < 22; i++) {
            document.getElementsByClassName("div-datos-calculados")[i].style.borderTop = "rgb(198, 46, 0) 1px ridge";
        }
    }
    else if (numero_atomico == 9 || numero_atomico == 17 || numero_atomico == 35 || numero_atomico == 53 || numero_atomico == 85 || numero_atomico == 117) {//verde oscuro
        for (let i = 0; i < 22; i++) {
            document.getElementsByClassName("div-datos-calculados")[i].style.borderTop = "rgb(0, 114, 36) 1px ridge";
        }
    }
    else if (numero_atomico >= 89 && numero_atomico <= 103) {//verde claro
        for (let i = 0; i < 22; i++) {
            document.getElementsByClassName("div-datos-calculados")[i].style.borderTop = "rgb(70, 111, 0 1px ridge";
        }
    }
    else if (numero_atomico == 2 || numero_atomico == 10 || numero_atomico == 18 || numero_atomico == 36 || numero_atomico == 54 || numero_atomico == 89 || numero_atomico == 118) {//morado
        for (let i = 0; i < 22; i++) {
            document.getElementsByClassName("div-datos-calculados")[i].style.borderTop = "rgb(94, 0, 166) 1px ridge";
        }
    }
    else {//blanco
        for (let i = 0; i < 22; i++) {
            document.getElementsByClassName("div-datos-calculados")[i].style.borderTop = "rgb(213, 224, 225) 1px ridge";
        }
    }
}