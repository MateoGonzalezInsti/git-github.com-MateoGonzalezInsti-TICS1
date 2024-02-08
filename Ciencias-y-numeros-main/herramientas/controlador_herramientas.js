function abrir_menu_herramientas() {
    document.getElementById("body").innerHTML = "<svg class='home' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='1200px' height='1200px'><path  style='cursor: pointer;'onclick='control_pagina(1)'d='M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9 C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52 C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z'/></svg><div id='indice-opciones-herramientas'></div>";

    //calculadora cientifica
    document.getElementById("indice-opciones-herramientas").innerHTML += "<input type='button'class='bt-indice-herramientas'value='Calculadora científica'onclick='mostrar_calculadora_cientifica()'>";
    //calcular area perimetro poligonos regulares
    // document.getElementById("indice-opciones-herramientas").innerHTML += "<input type='button'class='bt-indice-herramientas'value='Polígonos regulares'onclick='mostrar_calcular_area_perimetro_poligonos(1)'>";
    //calculador area perimetro circulo
    //document.getElementById("indice-opciones-herramientas").innerHTML += "<input type='button'class='bt-indice-herramientas'value='Circunferencias'onclick='mostrar_calcular_circulo(1)'>";
    //calculadora grafica
    document.getElementById("indice-opciones-herramientas").innerHTML += "<input type='button'class='bt-indice-herramientas'value='Calculadora Gráfica'onclick='mostrar_calcular_funciones_graficamente()'>";
    //calcular perimetro area volumen figuras geometricas
    //document.getElementById("indice-opciones-herramientas").innerHTML += "<input type='button'class='bt-indice-herramientas'value='Figuras geométricas'onclick='mostrar_calcular_volumen_area_figurasGeometricas_opciones(1)'>";
    //buscador formulas
    document.getElementById("indice-opciones-herramientas").innerHTML += "<input type='button'class='bt-indice-herramientas'value='Fórmulas'onclick='mostrar_menu_buscador_formulas()'>";
    //calcular datos
    //document.getElementById("indice-opciones-herramientas").innerHTML += "<input type='button'class='bt-indice-herramientas'value='Calculadora datos'onclick='mostrar_calcular_datos(1)'>";
    //calcular datos electronica
    //document.getElementById("indice-opciones-herramientas").innerHTML += "<input type='button'class='bt-indice-herramientas'value='Calculadora datos electrónica'onclick='mostrar_opciones_calcular_datos_electronica(1)'>";
    //gases ideales
    //document.getElementById("indice-opciones-herramientas").innerHTML += "<input type='button'class='bt-indice-herramientas'value='Gases ideales'onclick='mostrar_calcular_gases_ideales()'>";
    //calculadora masa molar
    document.getElementById("indice-opciones-herramientas").innerHTML += "<input type='button'class='bt-indice-herramientas'value='Calculadora masa molar'onclick='mostrar_calcular_masa_molar_compuesto()'>";
    //elementos quimicos
    document.getElementById("indice-opciones-herramientas").innerHTML += "<input type='button'class='bt-indice-herramientas'value='Elementos químicos'onclick='mostrar_calcular_datos_elementos_tablaperiodica()'>";
    // inorganica(formulacion + nombrar)
    document.getElementById("indice-opciones-herramientas").innerHTML += "<input type='button'class='bt-indice-herramientas'value='Inorgánica'onclick='mostrar_formulacion_nomenclatura(1)'>";
    //calculador pitagoras
    //document.getElementById("indice-opciones-herramientas").innerHTML += "<input type='button'class='bt-indice-herramientas'value='Pitágoras'onclick='mostrar_pitagoras()'>";
    //calcular numeros fibonacci
    document.getElementById("indice-opciones-herramientas").innerHTML += "<input type='button'class='bt-indice-herramientas'value='Números Fibonacci'onclick='mostrar_calcular_fibonacci()'>";
    //descomponer en factores primos, mcm,mcd
    document.getElementById("indice-opciones-herramientas").innerHTML += "<input type='button'class='bt-indice-herramientas'value='Descomponer números'onclick='mostrar_calcular_primos_opciones(1)'>";
    //convertir notacion cientifica
    document.getElementById("indice-opciones-herramientas").innerHTML += "<input type='button'class='bt-indice-herramientas'value='Notación científica'onclick='mostrar_convertir_notacioncientifica()'>";
    //contar digitos
    document.getElementById("indice-opciones-herramientas").innerHTML += "<input type='button'class='bt-indice-herramientas'value='Contador dígitos'onclick='mostrar_contador_digitos()'>";
    //graficas

}




