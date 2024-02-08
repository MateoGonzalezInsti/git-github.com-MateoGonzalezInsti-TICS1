let cantidad_buscar_tablaperiodica = null;
let n_elementos_posibles_tablaperiodica = null;
let tiempo_cronometro_tablaperiodica = null;
let ocultar_texto_casillas_elementos = false;
function mostrar_menu_tipos_juegos_tablaperiodica() {// clase+grupo; numero atomico;fase; tipo elemento; nombre; configuracion electronica
    document.getElementById("body").innerHTML = "<div id='div-body-girado-tablaperiodica'></div>";
    document.getElementById("div-body-girado-tablaperiodica").innerHTML = "<svg class='flecha-volver-menu-tipos-tablaperiodica'xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' width='80px' height='80px' viewBox='0 0 80 80' enable-background='new 0 0 80 80'xml:space='preserve'>  <image style='cursor: pointer;'onclick='abrir_menu_juegos()' id='image0' width='80' height='80' x='0' y='0' href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEUAAACdtc+cts+dts+T tr6OtrWUtr////9do8qvAAAAA3RSTlMAgHcPlLgKAAAAAWJLR0QHFmGI6wAAAAlwSFlzAAALEwAA CxMBAJqcGAAAAAd0SU1FB+cBFQ8uNyXU5JkAAACwSURBVEjH7dW7EYAgEEVRsAVKoIR17MASKMH+ W3CXz5ixNzBSXnznBIoYwtraTxZpmCgoFIRhFBimnYVRThamvaBQQRYqiEIDUWggCStIwgqCsIEg bKAfdrDIdA/ohgOcTx7QCxmoIQM1zAcMN7lYCEkNGWkPfJDumxmkGw7SPz2dBAe3kSBsJPm4KknC SqILwEgUGskuKSVZqCS8SPPx9tUcMg03GoZMQ/yLW1v74G4zBKWuqgjLAwAAACV0RVh0ZGF0ZTpj cmVhdGUAMjAyMy0wMS0yMVQxNDo0Njo1NSswMTowMNpHhD8AAAAldEVYdGRhdGU6bW9kaWZ5ADIw MjMtMDEtMjFUMTQ6NDY6NTUrMDE6MDCrGjyDAAAAAElFTkSuQmCC'/></svg><div id='div-menu-tipos-tablaperiodica'></div>";
    document.getElementById("div-menu-tipos-tablaperiodica").innerHTML = "<div class='div-centrar-bt-menu-dificultades-tablaperiodica'><input type='button' value='Nombre: mostrar símbolos' onclick='mostrar_menu_dificultad_tipo_juego_tablaperiodica(1)'class='bt-menu-tipo-juego-tablaperiodica'></div>";

}

function mostrar_menu_dificultad_tipo_juego_tablaperiodica(n_tipo) {
    /*mostrar 1 tabla, 1 input, 1 tabla--> una para poner cuantos grupos elementos cojer y otra para poner el tiempo del cronometro 
    y en el medio de las dos poner un inputa para poner la cantidad de elementos que tendrá que buscar y debajo un check para ocultar texto casillas y poner numeros*/
    if (n_tipo == 1) {//tablaperiodica por nombre y mostrar simbolos
        document.getElementById("body").innerHTML ="<svg class='flecha-volver-menu-tipos-tablaperiodica'xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' width='80px' height='80px' viewBox='0 0 80 80' enable-background='new 0 0 80 80'xml:space='preserve'>  <image style='cursor: pointer;'onclick='abrir_menu_juegos()' id='image0' width='80' height='80' x='0' y='0' href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEUAAACdtc+cts+dts+T tr6OtrWUtr////9do8qvAAAAA3RSTlMAgHcPlLgKAAAAAWJLR0QHFmGI6wAAAAlwSFlzAAALEwAA CxMBAJqcGAAAAAd0SU1FB+cBFQ8uNyXU5JkAAACwSURBVEjH7dW7EYAgEEVRsAVKoIR17MASKMH+ W3CXz5ixNzBSXnznBIoYwtraTxZpmCgoFIRhFBimnYVRThamvaBQQRYqiEIDUWggCStIwgqCsIEg bKAfdrDIdA/ohgOcTx7QCxmoIQM1zAcMN7lYCEkNGWkPfJDumxmkGw7SPz2dBAe3kSBsJPm4KknC SqILwEgUGskuKSVZqCS8SPPx9tUcMg03GoZMQ/yLW1v74G4zBKWuqgjLAwAAACV0RVh0ZGF0ZTpj cmVhdGUAMjAyMy0wMS0yMVQxNDo0Njo1NSswMTowMNpHhD8AAAAldEVYdGRhdGU6bW9kaWZ5ADIw MjMtMDEtMjFUMTQ6NDY6NTUrMDE6MDCrGjyDAAAAAElFTkSuQmCC'/></svg>";
    }
}
function comprobar_datos_menu_dificultades_empezar_juego_tablaperiodica(n_tipo) {
    if (n_tipo) {
        let cantidad_buscar = document.getElementById("").value;
        //comprobar

    }
}
//menu instrucciones juegos
{
    let permitido_mostrar_instrucciones_tablaperiodica_tipo_nombre_simbolos = true;
    function mostrar_instrucciones_tablaperiodica_tipo_nombre_simbolos(permitido) {
        document.getElementById("body").innerHTML = "<div id='div-instrucciones'class='div-instrucciones-tablaperiodica'></div>";//instrucciones
        if (permitido_mostrar_instrucciones_tablaperiodica_tipo_nombre_simbolos || permitido) {//mostrar
            //mostrar instrucciones
            document.getElementById("div-instrucciones").style.display = "block";
            if (permitido_mostrar_instrucciones_tablaperiodica_tipo_nombre_simbolos) {//mostrar input check de no volver mostrar sin marcar 

            }
            else {//mostrar input check de no volver mostrar marcado 
                document.getElementById("div-instrucciones").style.display = "none";
            }
        }
        else {//saltar al juego
            mostrar_juego_tablaperiodica_tipo_nombre_simbolos();
        }
    }
}

//codigo juegos tablaperiodica
{
    //juego tablaperiodica nombre
    {
        let elemento_encontrar = null;
        let elementos_usados = [];
        function mostrar_juego_tablaperiodica_tipo_nombre_simbolos() {
            //botones
            document.getElementById("body").innerHTML += "<h3 id='text-correctas-tablaperiodica'>0</h3><h3 id='text-incorrectas-tablaperiodica'>0</h3><h3 id='text-tiempo-tablaperiodica'>" + tiempo_cronometro_tablaperiodica + "</h3><img onclick='abrir_menu_juegos()'class='volver-menu-juegos-tablaperiodica'alt=''src='recursos/.png'><img onclick='pausar_juego_tablaperiodica()'class='pausar-menu-juego-tablaperiodica'alt=''src='recursos/.png'>";
            document.getElementById("body").innerHTML += "<div id='div-tablaperiodica'></div><div id='div-tablaperiodica-abajo'></div>";
            //poner elementos de la tabla
            const datos_poner_casilla = ["H", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "_", "_", "_", "_", "_", "_", "_", "_", "_", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og", "Uue", "Ubn", "Ubu", "Ubb", "Ubt", "Ubq", "Ubp", "Ubh", "Ubs"];
            let numero_casilla = 0;
            for (let i = 0; i < datos_poner_casilla.length; i++) {
                if (i <= n_elementos_posibles_tablaperiodica) {//esta casilla se puede utilizar (sin oscuridad y con eventos)
                    if ((i >= 89 & i <= 102) || (i >= 119 && i <= 132)) {//casillas tabla abajo
                        numero_casilla++;
                        if (ocultar_texto_casillas_elementos) {
                            document.getElementById("div-tablaperiodica-abajo").innerHTML += "<div onclick='corregir_elemento_buscar_tablaperiodica_tipo_nombre(" + numero_casilla + ")'id='elemento-tablaperiodica-" + datos_poner_casilla[i] + "'class='casilla-elemento-tablaperiodica'>" + datos_poner_casilla[i] + "</div>";
                        }
                        else {
                            document.getElementById("div-tablaperiodica-abajo").innerHTML += "<div onclick='corregir_elemento_buscar_tablaperiodica_tipo_nombre(" + datos_poner_casilla[i] + ")'id='elemento-tablaperiodica-" + datos_poner_casilla[i] + "'class='casilla-elemento-tablaperiodica'>" + datos_poner_casilla[i] + "</div>";
                        }
                    }
                    else {//casillas tabla arriba
                        if (datos_poner_casilla[i] === "_") {//casilla vacia
                            document.getElementById("div-tablaperiodica").innerHTML += "<div class='casilla-elemento-vacia-tablaperiodica'></div>";
                        }
                        else {
                            numero_casilla++;
                            if (ocultar_texto_casillas_elementos) {
                                document.getElementById("div-tablaperiodica").innerHTML += "<div onclick='corregir_elemento_buscar_tablaperiodica_tipo_nombre(" + datos_poner_casilla[i] + ")'id='elemento-tablaperiodica-" + datos_poner_casilla[i] + "'class='casilla-elemento-tablaperiodica'>" + datos_poner_casilla[i] + "</div>";
                            }
                            else {
                                document.getElementById("div-tablaperiodica").innerHTML += "<div onclick='corregir_elemento_buscar_tablaperiodica_tipo_nombre(" + datos_poner_casilla[i] + ")'id='elemento-tablaperiodica-" + numero_casilla + "'class='casilla-elemento-tablaperiodica'>" + datos_poner_casilla[i] + "</div>";
                            }
                        }
                    }
                }
                else {//esta casilla no se puede utilizar (ponerla algo oscura y sin eventos)

                }
            }
        }
        function crear_elemento_buscar_tablaperiodica_tipo_nombre() {

        }
        function corregir_elemento_buscar_tablaperiodica_tipo_nombre(elemento_usuario) {
            if (elemento_usuario == elemento_encontrar) {//correcto

            }
            else {//incorrecto

            }
            crear_elemento_buscar_tablaperiodica_tipo_nombre();
        }
    }
}