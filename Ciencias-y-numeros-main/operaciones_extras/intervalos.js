function crear_operacion_intervalo() {
    //variables codigo
    let operacion_mostrar;
    let resultado_mostrar;
    let resultado_codigo = [];//indice (intervalo)-->0: parentesis(0)/corchete(1); 1:numero/infinito(x); 2:numero/infinito(x); 3:parentesis(0)/corchete(1) || indice (recta)--> 0,1:parentesis/corchete/infinito
    //elegir tipo
    const tipo_representacion_intervalo_tocada = Math.floor(Math.random() * 3 + 1);
    if (tipo_representacion_intervalo_tocada === 1) {//recta
        let parentesis_corchete;
        //crear operacion (solucion)
        //1º corchete/parentesis
        parentesis_corchete = Math.floor(Math.random() * 1 + 0);//0:parentesis; 1:corchete
        //1º numero
        if (parentesis_corchete === 0 && (Math.floor(Math.random() * 4 + 1) === 4)) {//infinito
            resultado_codigo.push('x');
        }
        else {//sin numero
            resultado_codigo.push(parentesis_corchete);
        }
        //2º numero y 2º parentesis/corchete
        parentesis_corchete = Math.floor(Math.random() * 1 + 0);
        if (parentesis_corchete === 0 && (Math.floor(Math.random() * 4 + 1) === 4) && resultado_codigo[0] != 'x') {//infinito
            resultado_codigo.push('x');
        }
        else {
            resultado_codigo.push(parentesis_corchete);
        }
    }
    else if (tipo_representacion_intervalo_tocada === 2) {//intervalo

    }
    else {//desigualdad

    }
    //mostrar por pantalla el ejercicio o recta
    document.body.innerHTML = "<svg class='flecha-volver' xmlns='http://www.w3.org/2000/svg' version='1.0' width='90.000000pt' height='90.000000pt' viewBox='0 0 90.000000 90.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,90.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path style='cursor: pointer;'onclick='abrir_menu_operaciones_extras()' d='M113 548 c-46 -46 -83 -90 -83 -98 0 -25 165 -183 186 -178 37 7 27 39 -27 94 l-53 54 364 2 365 3 0 25 0 25 -365 3 -364 2 53 54 c55 56 64 88 26 94 -14 2 -46 -23 -102 -80z'/></g></svg><svg id='bt-informacion' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'width='384' height='384'viewBox='0 0 24 24'><circle style='cursor:pointer;'onclick='mostrar_informacion_intervalo()'cx='12' cy='12' r='10' opacity='.35'></circle><path style='cursor:pointer;'onclick='mostrar_informacion_intervalo()'d='M11,17v-5c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v5c0,0.552-0.448,1-1,1h0C11.448,18,11,17.552,11,17z'></path><circle style='cursor:pointer;'onclick='mostrar_informacion_intervalo()'cx='12' cy='7.5' r='1.5'></circle></svg>";
    if (tipo_representacion_intervalo_tocada === 1) {//recta (canvas)
        //ejercicio
        const tamaño_y_pantalla = screen.height;
        const tamaño_x_pantalla = screen.width;
        document.body.innerHTML += "<canvas id='canvas-ejercicio-intervalo'style='border:1px #000 solid;position:absolute;left:0%;'width='" + tamaño_x_pantalla + "'height='" + tamaño_y_pantalla * 10 / 100 + "'></canvas>";
        //linea central
        const ctx = document.getElementById('canvas-ejercicio-intervalo').getContext('2d');
        const canvas=document.getElementById('canvas-ejercicio-intervalo');
        const height = canvas.height;
        const width = canvas.width;
        //ejes
        ctx.beginPath();
        ctx.moveTo(width / 2, height / 2);
        ctx.lineTo((width / 3) * 2, height / 2);
        ctx.moveTo(width / 2, height / 2);
        ctx.lineTo((width / 3), height / 2);
        ctx.strokeStyle = "red";
        ctx.stroke();
        ctx.stroke();
        //lado izquierdo
        if (resultado_codigo === 'x') {//flecha(infinito)

        }
        else if (resultado_codigo === 0) {//circulo relleno(corchete)

        }
        else {//circulo vacio(parentesis)

        }
        //lado izquierdo
        if (resultado_codigo === 'x') {//flecha(infinito)

        }
        else if (resultado_codigo === 0) {//circulo relleno(corchete)

        }
        else {//circulo vacio(parentesis)

        }

        //resultado usuario
        document.body.innerHTML += "";
    }
    else {//mostrar ejercicio (normal)

    }

    //esperar respuesta usuario

}



function mostrar_informacion_intervalo() {
    if (informacion == false) {
        document.getElementById("div-div-informacion").style.display = "flex";
        document.getElementById("div-div-informacion").style.opacity = 1;
        informacion = true;
        let opacidad = 1;
        s = setTimeout(function () {
            const f = setInterval(function () {
                opacidad = opacidad - 0.1;
                document.getElementById("div-div-informacion").style.opacity = opacidad;
                if (opacidad <= 0) {
                    clearInterval(f);
                }
            }, 50);
            setTimeout(function () {
                document.getElementById("div-div-informacion").style.display = "none";
                informacion = false;
                s = null;
            }, 500);
        }, 5000);
    }
    else if (informacion == true) {
        document.getElementById("div-div-informacion").style.display = "none";
        informacion = false;
        clearTimeout(s);
    }

}
function actualizar_registros_intervalos() {
    document.getElementById("correct-text").innerHTML = contador_correcto;
    //actualizar registros
}