function mostrar_opciones_calcular_datos_electronica(opcion) {
    document.getElementById("body").innerHTML = "<div class='indice-herramientas'><svg class='flecha-volver-herramientas' xmlns='http://www.w3.org/2000/svg' version='1.0' width='90.000000pt' height='90.000000pt' viewBox='0 0 90.000000 90.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,90.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path style='cursor: pointer;'onclick='abrir_menu_herramientas()' d='M113 548 c-46 -46 -83 -90 -83 -98 0 -25 165 -183 186 -178 37 7 27 39 -27 94 l-53 54 364 2 365 3 0 25 0 25 -365 3 -364 2 53 54 c55 56 64 88 26 94 -14 2 -46 -23 -102 -80z'/></g></svg><select class='herramaientas-select-calcular-datos'><option value='Calcular intensidad corriente'onclick='mostrar_calcular_datos_electronica(1)'>Intensidad corriente</option><option value='calcular voltaje'onclick='mostrar_calcular_datos_electronica(2)'>Voltaje</option><option value='calcular resistencia'onclick='mostrar_calcular_datos_electronica(3)'>Resistencia</option></select></div><div id='div-body'></div>";
    mostrar_calcular_datos_electronica(opcion);
}
function mostrar_calcular_datos_electronica(opcion) {
    if (opcion == 1) {//intensisdad corriente
        document.getElementById("div-body").innerHTML = "<input type='text'value=''placeholder='I (A)'id='intensidad'class='herramientas-intensidad-datos-electronica1'onfocus='this.select()'title='Intensidad (operaciones)'><input type='text'value=''placeholder='Q (C)'id='cantidad-carga'class='herramientas-intensidad-datos-electronica2'title='Cantidad carga (operaciones)'onfocus='this.select()'><input type='text'value=''placeholder='T (s)'id='tiempo'class='herramientas-intensidad-datos-electronica3'title='Tiempo (operaciones)'onfocus='this.select()'><div id='div-herramientas-datos-electronica-bt-calcular'class='div-herramientas-datos-electronica-bt-calcular' ><input type='button'value='Calcular'onclick='calcular_intensidad_corriente()'class='herramientas-datos-electronica-bt-calcular'></div><h3 class='resultado-formula-calcular-datos-electronica'id='resultado-formula'></h3>";
        //solo numeros?
        if(herramientas_solo_numeros_inputs){
            document.getElementById("intensidad").type="number";
            document.getElementById("intensidad").title="Intensidad (números)";
            document.getElementById("cantidad-carga").type="number";
            document.getElementById("cantidad-carga").title="Cantidad carga (números)";
            document.getElementById("tiempo").type="number";
            document.getElementById("tiempo").title="Tiempo (números)";
        }
        //ajustar %-->px
        let tamaño_height=5;
        const tamaño_y_pantalla=screen.height;
        tamaño_height=tamaño_y_pantalla*(tamaño_height/100);
        if(tamaño_height<25){
            tamaño_height=25;
        }
        else if(tamaño_height>70){
            tamaño_height=70;
        }
        document.getElementById("intensidad").style.height=tamaño_height+"px";
        document.getElementById("cantidad-carga").style.height=tamaño_height+"px";
        document.getElementById("tiempo").style.height=tamaño_height+"px";
        tamaño_height=4;
        tamaño_height=tamaño_y_pantalla*(tamaño_height/100);
        if(tamaño_height<20){
            tamaño_height=20;
        }
        else if(tamaño_height>75){
            tamaño_height=75;
        }
        document.getElementById("div-herramientas-datos-electronica-bt-calcular").style.height=tamaño_height+"px";
        document.getElementById("intensidad").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                calcular_intensidad_corriente();
            }
        });
        document.getElementById("cantidad-carga").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                calcular_intensidad_corriente();
            }
        });
        document.getElementById("tiempo").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                calcular_intensidad_corriente();
            }
        });
    }
    if (opcion == 2) {//intensisdad corriente
        document.getElementById("div-body").innerHTML = "<input type='text'value=''placeholder='V (V)'id='voltaje'class='herramientas-intensidad-datos-electronica1'onfocus='this.select()'title='Voltaje (operaciones)'><input type='text'value=''placeholder='Q (C)'id='cantidad-carga'class='herramientas-intensidad-datos-electronica2'title='Cantidad carga (operaciones)'onfocus='this.select()'><input type='text'value=''placeholder='Tr (W)'id='trabajo'class='herramientas-intensidad-datos-electronica3'title='Trabajo (operaciones)'onfocus='this.select()'><div id='div-herramientas-datos-electronica-bt-calcular'class='div-herramientas-datos-electronica-bt-calcular' ><input type='button'value='Calcular'onclick='calcular_voltaje()'class='herramientas-datos-electronica-bt-calcular'></div><h3 class='resultado-formula-calcular-datos-electronica'id='resultado-formula'></h3>";
            //solo numeros?
            if(herramientas_solo_numeros_inputs){
                document.getElementById("voltaje").type="number";
                document.getElementById("voltaje").title="Voltaje (números)";
                document.getElementById("cantidad-carga").type="number";
                document.getElementById("cantidad-carga").title="Cantidad carga (números)";
                document.getElementById("trabajo").type="number";
                document.getElementById("trabajo").title="Trabajo (números)";
            }
                //ajustar %-->px
                let tamaño_height=5;
                const tamaño_y_pantalla=screen.height;
                tamaño_height=tamaño_y_pantalla*(tamaño_height/100);
                if(tamaño_height<25){
                    tamaño_height=25;
                }
                else if(tamaño_height>70){
                    tamaño_height=70;
                }
                document.getElementById("voltaje").style.height=tamaño_height+"px";
                document.getElementById("cantidad-carga").style.height=tamaño_height+"px";
                document.getElementById("trabajo").style.height=tamaño_height+"px";
                tamaño_height=4;
                tamaño_height=tamaño_y_pantalla*(tamaño_height/100);
                if(tamaño_height<20){
                    tamaño_height=20;
                }
                else if(tamaño_height>75){
                    tamaño_height=75;
                }
                document.getElementById("div-herramientas-datos-electronica-bt-calcular").style.height=tamaño_height+"px";
            document.getElementById("voltaje").addEventListener("keyup", function (event) {
                event.preventDefault();
                if (event.keyCode === 13) {//aceptar
                    calcular_voltaje();
                }
            });
            document.getElementById("cantidad-carga").addEventListener("keyup", function (event) {
                event.preventDefault();
                if (event.keyCode === 13) {//aceptar
                    calcular_voltaje();
                }
            });
            document.getElementById("trabajo").addEventListener("keyup", function (event) {
                event.preventDefault();
                if (event.keyCode === 13) {//aceptar
                    calcular_voltaje();
                }
            });
    }
    if (opcion == 3) {//resistencia (ley ohm)
        document.getElementById("div-body").innerHTML = "<input type='text'value=''placeholder='I (A)'id='intensidad'class='herramientas-intensidad-datos-electronica1'onfocus='this.select()'title='Intensidad (operaciones)'><input type='text'value=''placeholder='V (V)'id='voltaje'class='herramientas-intensidad-datos-electronica2'title='Voltaje (operaciones)'onfocus='this.select()'><input type='text'value=''placeholder='R (Ω)'id='resistencia'class='herramientas-intensidad-datos-electronica3'title='Resistencia (operaciones)'onfocus='this.select()'><div id='div-herramientas-datos-electronica-bt-calcular'class='div-herramientas-datos-electronica-bt-calcular' ><input type='button'value='Calcular'onclick='calcular_resistencia()'class='herramientas-datos-electronica-bt-calcular'></div><h3 class='resultado-formula-calcular-datos-electronica'id='resultado-formula'></h3>";
            //solo numeros?
            if(herramientas_solo_numeros_inputs){
                document.getElementById("intensidad").type="number";
                document.getElementById("intensidad").title="Intensidad (números)";
                document.getElementById("voltaje").type="number";
                document.getElementById("voltaje").title="Voltaje (números)";
                document.getElementById("resistencia").type="number";
                document.getElementById("resistencia").title="Resistencia (números)";
            }
                //ajustar %-->px
                let tamaño_height=5;
                const tamaño_y_pantalla=screen.height;
                tamaño_height=tamaño_y_pantalla*(tamaño_height/100);
                if(tamaño_height<25){
                    tamaño_height=25;
                }
                else if(tamaño_height>70){
                    tamaño_height=70;
                }
                document.getElementById("intensidad").style.height=tamaño_height+"px";
                document.getElementById("voltaje").style.height=tamaño_height+"px";
                document.getElementById("resistencia").style.height=tamaño_height+"px";
                tamaño_height=4;
                tamaño_height=tamaño_y_pantalla*(tamaño_height/100);
                if(tamaño_height<20){
                    tamaño_height=20;
                }
                else if(tamaño_height>75){
                    tamaño_height=75;
                }
                document.getElementById("div-herramientas-datos-electronica-bt-calcular").style.height=tamaño_height+"px";
            document.getElementById("intensidad").addEventListener("keyup", function (event) {
                event.preventDefault();
                if (event.keyCode === 13) {//aceptar
                    calcular_resistencia();
                }
            });
            document.getElementById("voltaje").addEventListener("keyup", function (event) {
                event.preventDefault();
                if (event.keyCode === 13) {//aceptar
                    calcular_resistencia();
                }
            });
            document.getElementById("resistencia").addEventListener("keyup", function (event) {
                event.preventDefault();
                if (event.keyCode === 13) {//aceptar
                    calcular_resistencia();
                }
            });
    }
}

//calcular datos
function calcular_intensidad_corriente() {
    let intensidad = document.getElementById("intensidad").value.replaceAll(" ", "");
    let cantidad_carga = document.getElementById("cantidad-carga").value.replaceAll(" ", "");
    let tiempo = document.getElementById("tiempo").value.replaceAll(" ", "");
    //intensidad = cantidad carga / tiempo
    if ((intensidad == "" || intensidad == null || intensidad == 0) && ((cantidad_carga != "" && cantidad_carga != 0 && cantidad_carga != null) && !isNaN(eval(cantidad_carga))) && ((tiempo != "" && tiempo != 0 && tiempo != null) && !isNaN(eval(tiempo)))) {
        //intensidad = cantidad carga / tiempo
        cantidad_carga = eval(cantidad_carga);
        tiempo = eval(tiempo);
        document.getElementById("resultado-formula").innerHTML = "I = " + cantidad_carga + " / " + tiempo + " : <u style='color:rgb(230, 58, 178);'>" + redondear_numero(cantidad_carga / tiempo) + "</u> <sub style='font-size:11px;'>(A)</sub>";
    }
    else if ((cantidad_carga == "" || cantidad_carga == null || cantidad_carga == 0) && ((intensidad != "" && intensidad != 0 && intensidad != null) && !isNaN(eval(intensidad))) && ((tiempo != "" && tiempo != 0 && tiempo != null) && !isNaN(eval(tiempo)))) {
        //tiempo * intensidad = cantidad carga 
        intensidad = eval(intensidad);
        tiempo = eval(tiempo);
        document.getElementById("resultado-formula").innerHTML = "Q = " + intensidad + " * " + tiempo + " : <u style='color:rgb(230, 58, 178);'>" + redondear_numero(intensidad * tiempo) + "</u> <sub style='font-size:11px;'>(C)</sub>";
    }
    else if ((tiempo == "" || tiempo == null || tiempo == 0)  && ((intensidad != "" && intensidad != 0 && intensidad != null) && !isNaN(eval(intensidad))) && ((cantidad_carga != "" && cantidad_carga != 0 && cantidad_carga != null) && !isNaN(eval(cantidad_carga)))) {
        //tiempo = cantidad carga / intensidad
        intensidad = eval(intensidad);
        cantidad_carga = eval(cantidad_carga);
        document.getElementById("resultado-formula").innerHTML = "T = " + cantidad_carga + " / " + intensidad + " : <u style='color:rgb(230, 58, 178);'>" + redondear_numero(cantidad_carga / intensidad) + "</u> <sub style='font-size:11px;'>(s)</sub>";
    }
    else {//mensaje error()
        console.log("no");
    }
}

function calcular_voltaje() {
    let voltaje = document.getElementById("voltaje").value.replaceAll(" ", "");
    let cantidad_carga = document.getElementById("cantidad-carga").value.replaceAll(" ", "");
    let trabajo = document.getElementById("trabajo").value.replaceAll(" ", "");
    //voltaje = trabajo / cantidad carga
    if ((voltaje == "" || voltaje == null || voltaje == 0)  && ((trabajo != "" && trabajo != 0 && trabajo != null) && !isNaN(eval(trabajo))) && ((cantidad_carga != "" && cantidad_carga != 0 && cantidad_carga != null) && !isNaN(eval(cantidad_carga)))) {
        //voltaje = trabajo / cantidad carga
        cantidad_carga = eval(cantidad_carga);
        trabajo = eval(trabajo);
        document.getElementById("resultado-formula").innerHTML = "V = " + trabajo + " / " + cantidad_carga + " : <u style='color:rgb(230, 58, 178);'>" + redondear_numero(trabajo / cantidad_carga) + "</u> <sub style='font-size:11px;'>(v)</sub>";
    }
    else if ((trabajo == "" || trabajo == null || trabajo == 0)  && ((cantidad_carga != "" && cantidad_carga != 0 && cantidad_carga != null) && !isNaN(eval(cantidad_carga))) && ((voltaje != "" && voltaje != 0 && voltaje != null) && !isNaN(eval(voltaje)))) {
        //trabajo = voltaje * cantidad carga
        voltaje = eval(voltaje);
        trabajo = eval(trabajo);
        document.getElementById("resultado-formula").innerHTML = "W = " + voltaje + " * " + cantidad_carga + " : <u style='color:rgb(230, 58, 178);'>" + redondear_numero(voltaje * cantidad_carga) + "</u> <sub style='font-size:11px;'>(w)</sub>";
    }
    else if ((cantidad_carga == "" || cantidad_carga == null || cantidad_carga == 0) && ((voltaje != "" && voltaje != 0 && voltaje != null) && !isNaN(eval(voltaje))) && ((trabajo != "" && trabajo != 0 && trabajo != null) && !isNaN(eval(trabajo)))) {
        //cantidad carga = trabajo / voltaje
        trabajo = eval(trabajo);
        voltaje = eval(voltaje);
        document.getElementById("resultado-formula").innerHTML = "Q = " + trabajo + " / " + voltaje + " : <u style='color:rgb(230, 58, 178);'>" + redondear_numero(trabajo / voltaje) + "</u> <sub style='font-size:11px;'>(C)</sub>";
    }
    else {//mensaje error()

    }
}

function calcular_resistencia() {//ley ohm
    let intensidad = document.getElementById("intensidad").value.replaceAll(" ", "");
    let voltaje = document.getElementById("voltaje").value.replaceAll(" ", "");
    let resistencia = document.getElementById("resistencia").value.replaceAll(" ", "");
    //intensidad = voltaje / resistencia
    if ((intensidad == "" || intensidad == null || intensidad == 0) && ((voltaje != "" && voltaje != 0 && voltaje != null) && !isNaN(eval(voltaje))) && ((resistencia != "" && resistencia != 0 && resistencia != null) && !isNaN(eval(resistencia)))) {
        //intensidad = voltaje / resistencia
        voltaje = eval(voltaje);
        resistencia = eval(resistencia);
        document.getElementById("resultado-formula").innerHTML = "I = " + voltaje + " / " + resistencia + " : <u style='color:rgb(230, 58, 178);'>" + redondear_numero(voltaje / resistencia) + "</u> <sub style='font-size:11px;'>(A)</sub>";
    }
    else if ((voltaje == "" || voltaje == null || voltaje == 0) &&  ((intensidad != "" && intensidad != 0 && intensidad != null) && !isNaN(eval(intensidad))) && ((resistencia != "" && resistencia != 0 && resistencia != null) && !isNaN(eval(resistencia)))) {
        //voltaje = intensidad * resistencia
        intensidad = eval(intensidad);
        resistencia = eval(resistencia);
        document.getElementById("resultado-formula").innerHTML = "V = " + intensidad + " * " + resistencia + " : <u style='color:rgb(230, 58, 178);'>" + redondear_numero(intensidad * resistencia) + "</u> <sub style='font-size:11px;'>(V)</sub>";
    }
    else if ((resistencia == "" || resistencia == null || resistencia == 0) && ((voltaje != "" && voltaje != 0 && voltaje != null) && !isNaN(eval(voltaje))) && ((intensidad != "" && intensidad != 0 && intensidad != null) && !isNaN(eval(intensidad)))) {
        //resistencia = voltaje / intensidad
        intensidad = eval(intensidad);
        voltaje = eval(voltaje);
        document.getElementById("resultado-formula").innerHTML = "R = " + voltaje + " / " + intensidad + " : <u style='color:rgb(230, 58, 178);'>" + redondear_numero(voltaje / intensidad) + "</u> <sub style='font-size:13px;'>(Ω)</sub>";
    }
    else {//mensaje error()

    }
}