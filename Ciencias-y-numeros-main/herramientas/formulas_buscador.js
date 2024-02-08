//mostrar menu principal buscador formulas
function mostrar_menu_buscador_formulas() {
    //indice herramienta
    document.body.innerHTML = "<div id='indice-herramientas' class='indice-herramientas-buscador-formulas'><svg class='flecha-volver-herramientas' xmlns='http://www.w3.org/2000/svg' version='1.0' width='90.000000pt' height='90.000000pt' viewBox='0 0 90.000000 90.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,90.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path style='cursor: pointer;'onclick='abrir_menu_herramientas()' d='M113 548 c-46 -46 -83 -90 -83 -98 0 -25 165 -183 186 -178 37 7 27 39 -27 94 l-53 54 364 2 365 3 0 25 0 25 -365 3 -364 2 53 54 c55 56 64 88 26 94 -14 2 -46 -23 -102 -80z'/></g></svg><div class='div-div-buscador-formulas'><div class='div-buscador-formulas'><input type='text' class='bt-text-buscador-indice'id='bt-text-buscador-indice'value=''placeholder='Buscar fórmula : nombre, tipo, clase, dificultad, palabras clave...'><div class='div-centrar-imagen-buscador-indice'><img src='recursos/lupa_buscar.png'alt=''class='img-buscador-formulas-indice'></div></div></div><div class='div-lista-buscador-indice-formulas'></div></div>";
    document.getElementById("bt-text-buscador-indice").addEventListener('change', () => {
        actualziar_options_busqueda_formulas(document.getElementById("bt-text-buscador-indice").value.trim());
    });
}

//formulas , palabras claves y datos
const formulas_buscar = [
    //poligonos regulares
    { tipo_formula: 'Perímetro polígonos regulares', nombre_formula: 'Cuadrado', formula: 'lado * lado', formula_simple: 'l * l', palabras_claves: ['perimetro', 'poligonos', 'regulares', 'cuadrado', 'simple', 'facil'] },
    { tipo_formula: 'Perímetro polígonos regulares', nombre_formula: 'Rectágulo', formula: 'altura * base', formula_simple: 'h * b', palabras_claves: ['perimetro', 'poligonos', 'regulares', 'rectangulo', 'simple', 'facil'] },
    { tipo_formula: 'Perímetro polígonos regulares', nombre_formula: 'Triángulo', formula: '(altura * base)/2', formula_simple: '(h * b)/2', palabras_claves: ['perimetro', 'poligonos', 'regulares', 'triangulo', 'simple', 'facil'] },

    //añadir mas formulas
];

//buscar y cambiar options busqueda
function actualziar_options_busqueda_formulas(texto_buscador) {
    if (texto_buscador == "" || !isNaN(Number(texto_buscador[0]))) {//nada

    }
    else {
        // formulas posibles que estea buscando el susuario
        texto_buscador = texto_buscador.replaceAll(" ", "").toLowerCase();
        texto_buscador=texto_buscador.replaceAll("é","e").replaceAll("á","a").replaceAll("í","i").replaceAll("ó","o").replaceAll("ú","u");
        let puntuacion_objetos_resultado = [];
        let numero_objeto_resultado = [];
        let tipo_formula_obtenidas = [];
        let nombre_formula = [];
        let formula_text = [];
        //buscar formula mas acertada
        let formula_buscar = false;
        for (let i = 0; i < texto_buscador.length; i++) {
            if (texto_buscador[i] == '+' || texto_buscador[i] == '-' || texto_buscador[i] == '*' || texto_buscador[i] == '/' || texto_buscador[i] == '(' || texto_buscador[i] == ')' || texto_buscador[i] == '=') {
                formula_buscar = true;
                break;
            }
        }
        for (let i = 0; i < formulas_buscar.length; i++) {
            puntuacion_objetos_resultado.push(0);
            numero_objeto_resultado.push(i);
        }
        //tipo_formula
        if (!formula_buscar) {
            for (let i = 0; i < formulas_buscar.length; i++) {
                let numero_letra_palabra_buscar = 0;
                let puntuacion_objeto_buscando = 0;
                if (formulas_buscar[i].tipo_formula.replaceAll(" ", "").toLowerCase().replaceAll("é","e").replaceAll("á","a").replaceAll("í","i").replaceAll("ó","o").replaceAll("ú","u") == texto_buscador[numero_letra_palabra_buscar]) {
                    puntuacion_objeto_buscando = texto_buscador.length;
                }
                else {
                    for (let j = 0; j < formulas_buscar[i].tipo_formula.replaceAll(" ", "").length; j++) {
                        if (formulas_buscar[i].tipo_formula[j].replaceAll(" ", "").toLowerCase().replaceAll("é","e").replaceAll("á","a").replaceAll("í","i").replaceAll("ó","o").replaceAll("ú","u") == texto_buscador[numero_letra_palabra_buscar]) {
                            puntuacion_objeto_buscando++;
                        }
                        else {
                            j--;
                        }
                        numero_letra_palabra_buscar++;
                    }
                }
                puntuacion_objetos_resultado[i] += puntuacion_objeto_buscando;
            }
        }
        //nombre_formula
        if (!formula_buscar) {
            for (let i = 0; i < formulas_buscar.length; i++) {
                let numero_letra_palabra_buscar = 0;
                let puntuacion_objeto_buscando = 0;
                if (formulas_buscar[i].nombre_formula.replaceAll(" ", "").toLowerCase().replaceAll("é","e").replaceAll("á","a").replaceAll("í","i").replaceAll("ó","o").replaceAll("ú","u") == texto_buscador[numero_letra_palabra_buscar]) {
                    puntuacion_objeto_buscando = texto_buscador.length;
                }
                else {
                    for (let j = 0; j < formulas_buscar[i].nombre_formula.replaceAll(" ", "").length; j++) {
                        if (formulas_buscar[i].nombre_formula[j].replaceAll(" ", "").toLowerCase().replaceAll("é","e").replaceAll("á","a").replaceAll("í","i").replaceAll("ó","o").replaceAll("ú","u") == texto_buscador[numero_letra_palabra_buscar]) {
                            puntuacion_objeto_buscando++;
                        }
                        else {
                            j--;
                        }
                        numero_letra_palabra_buscar++;
                    }
                }
                puntuacion_objetos_resultado[i] += puntuacion_objeto_buscando;
            }
        }
        //formula
        if (formula_buscar) {
            for (let i = 0; i < formulas_buscar.length; i++) {
                let numero_letra_palabra_buscar = 0;
                let puntuacion_objeto_buscando = 0;
                if (formulas_buscar[i].formula.replaceAll(" ", "").toLowerCase().length + 8 >= texto_buscador[numero_letra_palabra_buscar].length) {
                    if (formulas_buscar[i].formula.replaceAll(" ", "").toLowerCase() == texto_buscador[numero_letra_palabra_buscar]) {
                        puntuacion_objeto_buscando = texto_buscador.length;
                    }
                    else {
                        for (let j = 0; j < formulas_buscar[i].formula.replaceAll(" ", "").length; j++) {
                            if (formulas_buscar[i].formula[j].replaceAll(" ", "").toLowerCase() == texto_buscador[numero_letra_palabra_buscar]) {
                                puntuacion_objeto_buscando++;
                            }
                            else {
                                j--;
                            }
                            numero_letra_palabra_buscar++;
                        }
                    }
                }
                puntuacion_objetos_resultado[i] += puntuacion_objeto_buscando;
            }
        }
        //formula simple
        if (formula_buscar) {
            for (let i = 0; i < formulas_buscar.length; i++) {
                let numero_letra_palabra_buscar = 0;
                let puntuacion_objeto_buscando = 0;
                if (formulas_buscar[i].formula_simple.replaceAll(" ", "").toLowerCase().length + 4 >= texto_buscador[numero_letra_palabra_buscar].length) {
                    if (formulas_buscar[i].formula_simple.replaceAll(" ", "").toLowerCase() == texto_buscador[numero_letra_palabra_buscar]) {
                        puntuacion_objeto_buscando = texto_buscador.length;
                    }
                    else {
                        for (let j = 0; j < formulas_buscar[i].formula_simple.replaceAll(" ", "").length; j++) {
                            if (formulas_buscar[i].formula_simple[j].replaceAll(" ", "").toLowerCase() == texto_buscador[numero_letra_palabra_buscar]) {
                                puntuacion_objeto_buscando++;
                            }
                            else {
                                j--;
                            }
                            numero_letra_palabra_buscar++;
                        }
                    }
                }
                puntuacion_objetos_resultado[i] += puntuacion_objeto_buscando;
            }
        }
        //palabras clave
        if (!formula_buscar) {
            for (let i = 0; i < formulas_buscar.length; i++) {
                let numero_letra_palabra_buscar = 0;
                let puntuacion_objeto_buscando = 0;
                for (let k = 0; k < formula_buscar[i].palabras_claves.length; k++) {
                    if (formulas_buscar[i].palabras_claves[k].replaceAll(" ", "").toLowerCase().length + 4 >= texto_buscador[numero_letra_palabra_buscar].length) {
                        if (formulas_buscar[i].palabras_claves[k].replaceAll(" ", "").toLowerCase().replaceAll("é","e").replaceAll("á","a").replaceAll("í","i").replaceAll("ó","o").replaceAll("ú","u") == texto_buscador[numero_letra_palabra_buscar]) {
                            puntuacion_objeto_buscando = texto_buscador.length;
                        }
                        else {
                            for (let j = 0; j < formulas_buscar[i].palabras_claves[k].replaceAll(" ", "").length; j++) {
                                if (formulas_buscar[i].palabras_claves[k].replaceAll(" ", "").toLowerCase().replaceAll("é","e").replaceAll("á","a").replaceAll("í","i").replaceAll("ó","o").replaceAll("ú","u") == texto_buscador[numero_letra_palabra_buscar]) {
                                    puntuacion_objeto_buscando++;
                                }
                                else {
                                    j--;
                                }
                                numero_letra_palabra_buscar++;
                            }
                        }
                    }
                    puntuacion_objetos_resultado[i] += puntuacion_objeto_buscando;
                }
            }
        }
        //ordenar por mas puntuacion
        for (let i = 0; i < tipo_formula_obtenidas.length; i++) {
            const puntuacion_usando = puntuacion_objetos_resultado[i];
            const numero_resultado_usando = numero_objeto_resultado[i];
            let cantidad_numeros_menor = 0;
            for (let j = 0; j < tipo_formula_obtenidas.length; j++) {
                if (puntuacion_usando < puntuacion_objetos_resultado[j]) {
                    cantidad_numeros_menor++;
                }
            }
            const puntuacion_cambiar = puntuacion_objetos_resultado[cantidad_numeros_menor];
            const numero_cambiar = numero_objeto_resultado[cantidad_numeros_menor];
            puntuacion_objetos_resultado[i] = puntuacion_cambiar;
            numero_objeto_resultado[i] = numero_cambiar;
            puntuacion_objetos_resultado[cantidad_numeros_menor] = puntuacion_usando;
            numero_objeto_resultado[cantidad_numeros_menor] = numero_resultado_usando;
            if (cantidad_numeros_menor != 0) {
                i = 0;
            }
        }
        //coger las 5 mejores
        let cinco_mejores_posibles_formulas_buscar_usuario = [];
        for (let i = 0; i < 5; i++) {
            cinco_mejores_posibles_formulas_buscar_usuario.push(numero_objeto_resultado[i]);
        }
        //mostrar resultados en la lista de busqueda
        console.log(cinco_mejores_posibles_formulas_buscar_usuario);
    }
}


//buscar y recibir datos formulas
function buscador_recibir_datos_formulas() {

}