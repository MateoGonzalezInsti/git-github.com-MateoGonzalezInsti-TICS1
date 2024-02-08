/*variables */
let datos_problema_impedir_repetido=[0,0]//indice--> 0_dificultad;1:numero problema
function crear_problema(activo) {
    if (direcionar_aleatorio == true && activo == true) {
        direccionar_aleatorio();
    }
    else {
        //buscar problema por dificultad
        switch (dificultad) {
            case 1:
                encontrar_problemas_d1();
                break;
            case 2:
                encontrar_problemas_d2();
                break;
            case 3:
                encontrar_problemas_d3();
                break;
            case 4:
                encontrar_problemas_d4();
                break;
            case 5:
                encontrar_problemas_d5();
                break;
            case 6:
                encontrar_problemas_d6();
                break;
            case 7:
                encontrar_problemas_d7();
                break;
            case 8:
                encontrar_problemas_d8();
                break;
            case 9:
                encontrar_problemas_d9();
                break;
            case 10:
                encontrar_problemas_d10();
                break;
        }
    }
}
//herramientas
function actualizar_contador_problemas() {
    document.getElementById("correct-text").innerHTML = contador_correcto;
}
function buscar_nombre() {
    let number_aleatorio_nombres = Math.trunc(Math.random() * 3 + 1);//numero de stack de nombres (stack: cada uno maximo 30 nombres y minimo 15)
    let nombres = [];
    switch (number_aleatorio_nombres) {
        case 1://30 nombres
            nombres = ["Mateo", "Luís", "Paco", "Lara", "María", "Juan", "José", "Carmen", "Laura", "Ángel", "Iago", "Elisa", "Félix", "Xoán", "Xián", "Julia", "Julián", "Aldara", "Yasmín", "Alexandra", "Mónica", "Zaira", "Aitana", "Carla", "Anxo", "Sergio", "Marian", "Antía", "Mariña", "Andrea"];
            break;
        case 2://30 nombres
            nombres = ["Sofía", "Alicia", "Alan", "Paula", "Ana", "Teresa", "Maite", "Antonio", "Fran", "Sheila", "Marco", "Noa", "Alcira", "Guillermo", "Clotilde", "Pablo", "Daniel", "Raúl", "Brais", "Santiago", "Óscar", "Rubén", "Ainara", "Vicente", "Carlos", "Lidia", "Rosa", "Matilda", "Inés", "Noela"]
            break;
        case 3://30 nombres
            nombres = ["Gabriela", "Mariángel", "Diana", "Daniela", "Miguel", "Clara", "Lucía", "Bea", "Marisol", "Tomás", "Nico", "Roi", "Martín", "Saray", "Antón", "Roberto", "Gabriela", "Ángela", "Josefa", "Alba", "Ainoa", "Gonzalo", "Javier", "Fátima", "Sara", "Rodrigo", "Nuria", "Samuel", "Dlenia", "Mara", "Iria", "Héctor", "Herman", "Christian"];
            break;
    }
    return nombres[Math.trunc(Math.random() * nombres.length + 0)];
}
function desmarcar_marcar_datos(texto_problema) {
    texto_problema = texto_problema.replaceAll("<b style='color:#295dfb'>", "");//color de los nombres de personas
    texto_problema = texto_problema.replaceAll("<b style='color:#0b9211'>", "");//color de las unidades que te piden en la pregunta: manzanas,metros,Kg,personas...
    texto_problema = texto_problema.replaceAll("<b style='color:#8bb011'>", "");//color datos importantes
    texto_problema = texto_problema.replaceAll("<b style='color:#bb3bf2'>", "");//color de lo que te pregunta: ¿cuantos ,...
    texto_problema = texto_problema.replaceAll("<b>", "");//sin estilos
    texto_problema = texto_problema.replaceAll("</b>", "");//cerrar etiquetas
    texto_problema = texto_problema.replaceAll("<u style='color:#f31919'>", "");//color de los numeros 
    texto_problema = texto_problema.replaceAll("<u>", "");//sin estilos
    texto_problema = texto_problema.replaceAll("</u>", "");//cerrar etiquetas
    return texto_problema;
}
//mostrar pantalla
function mostrar_pantalla_estructura_problema(enunciado,placeholder){
    document.getElementById("body").innerHTML="<svg class='home' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='1200px' height='1200px'><path  style='cursor: pointer;'onclick='control_pagina(1)'d='M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9 C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52 C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z'/></svg><h1 id='correct-text'>"+contador_correcto+"</h1><div class='div-enunciado'><h3 id='enunciado'class='enunciado'>"+enunciado+"</h3></div><div class='div-resultado'><input id='resultado'class='resultado'type='number' placeholder='"+placeholder+"'autofocus></div>";
}