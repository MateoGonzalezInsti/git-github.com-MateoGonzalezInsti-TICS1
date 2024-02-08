function mostrar_calcular_circulo(opcion) {
    document.getElementById("body").innerHTML = "<div class='indice-herramientas'><svg class='flecha-volver-herramientas' xmlns='http://www.w3.org/2000/svg' version='1.0' width='90.000000pt' height='90.000000pt' viewBox='0 0 90.000000 90.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,90.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path style='cursor: pointer;'onclick='abrir_menu_herramientas()' d='M113 548 c-46 -46 -83 -90 -83 -98 0 -25 165 -183 186 -178 37 7 27 39 -27 94 l-53 54 364 2 365 3 0 25 0 25 -365 3 -364 2 53 54 c55 56 64 88 26 94 -14 2 -46 -23 -102 -80z'/></g></svg><select class='select-herramientas-circulo'><option value='Perímetro círculo'onclick='mostrar_calcular_circulo_herramienta(2)'>Perímetro círculo</option><option value='Área círculo'onclick='mostrar_calcular_circulo_herramienta(1)'>Área círculo</option><option value='Área semicírculo'onclick='mostrar_calcular_circulo_herramienta(3)'>Área semicírculo</option><option value='Longitud arcocírculo'onclick='mostrar_calcular_circulo_herramienta(4)'>Longitud arcocírculo</option><option value='Área arcocírculo'onclick='mostrar_calcular_circulo_herramienta(5)'>Área arcocírculo</option><option value='Área corona circular'onclick='mostrar_calcular_circulo_herramienta(6)'>Área corona circular</option><option value='Trapecio circular'onclick='mostrar_calcular_circulo_herramienta(7)'>Trapecio circular</option></select></div><div id='div-body'></div>";
    mostrar_calcular_circulo_herramienta(opcion);
}
function mostrar_calcular_circulo_herramienta(opcion) {
    if (opcion == 1) {
        //area circulo
        document.getElementById("div-body").innerHTML = "<input type='text'value=''id='radio'class='herramientas-calculos-circulo-bt-datos-acirculo1'placeholder='Radio'onfocus='this.select()'><div id='div-herramientas-calculos-circulos-bt-calcular'class='div-herramientas-calculos-circulos-bt-calcular'><input type='button'class='herramientas-calculos-circulo-bt-calcular'value='Calcular'onclick='resolver_area_circulo()'></div><h3 id='formula-resultado-calcular-circulo'></h3>";
        //solo numeros?
        if (herramientas_solo_numeros_inputs) {
            document.getElementById("radio").type = "number";
            document.getElementById("radio").title = "(" + traduccion_numero[idioma].toLowerCase() + ")";
        }
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
        document.getElementById("radio").style.height = tamaño_height + "px";
        tamaño_height = 4;
        tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
        if (tamaño_height < 20) {
            tamaño_height = 20;
        }
        else if (tamaño_height > 75) {
            tamaño_height = 75;
        }
        document.getElementById("div-herramientas-calculos-circulos-bt-calcular").style.height = tamaño_height + "px";
        document.getElementById("radio").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_area_circulo();
            }
        });
    }
    if (opcion == 2) {
        //perimetro circulo
        document.getElementById("div-body").innerHTML = "<input type='text'value=''id='radio'class='herramientas-calculos-circulo-bt-datos-pcirculo1'placeholder='Radio'onfocus='this.select()'><div id='div-herramientas-calculos-circulos-bt-calcular'class='div-herramientas-calculos-circulos-bt-calcular'><input type='button'class='herramientas-calculos-circulo-bt-calcular'value='Calcular'onclick='resolver_perimetro_circulo()'></div><h3 id='resultado'></h3>";
        //solo numeros?
        if (herramientas_solo_numeros_inputs) {
            document.getElementById("radio").type = "number";
            document.getElementById("radio").title = "(" + traduccion_numero[idioma].toLowerCase() + ")";
        }
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
        document.getElementById("radio").style.height = tamaño_height + "px";
        tamaño_height = 4;
        tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
        if (tamaño_height < 20) {
            tamaño_height = 20;
        }
        else if (tamaño_height > 75) {
            tamaño_height = 75;
        }
        document.getElementById("div-herramientas-calculos-circulos-bt-calcular").style.height = tamaño_height + "px";
        document.getElementById("radio").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_area_circulo();
            }
        });
        document.getElementById("radio").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_perimetro_circulo();
            }
        });
    }
    if (opcion == 3) {
        //area semicirculo
        document.getElementById("div-body").innerHTML = "<input type='text'value=''id='radio'class='herramientas-calculos-circulo-bt-datos-asemicirculo1'placeholder='Radio'onfocus='this.select()'><div id='div-herramientas-calculos-circulos-bt-calcular'class='div-herramientas-calculos-circulos-bt-calcular'><input type='button'class='herramientas-calculos-circulo-bt-calcular'value='Calcular'onclick='resolver_perimetro_circulo()'></div><h3 id='formula-resultado-calcular-circulo'></h3>";
        //solo numeros?
        if (herramientas_solo_numeros_inputs) {
            document.getElementById("radio").type = "number";
            document.getElementById("radio").title = "(" + traduccion_numero[idioma].toLowerCase() + ")";
        }
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
        document.getElementById("radio").style.height = tamaño_height + "px";
        tamaño_height = 4;
        tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
        if (tamaño_height < 20) {
            tamaño_height = 20;
        }
        else if (tamaño_height > 75) {
            tamaño_height = 75;
        }
        document.getElementById("div-herramientas-calculos-circulos-bt-calcular").style.height = tamaño_height + "px";
        document.getElementById("radio").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_area_semicirculo();
            }
        });
    }
    if (opcion == 4) {
        //longitud arcocirculo
        document.getElementById("div-body").innerHTML = "<input type='text'value=''id='radio'class='herramientas-calculos-circulo-bt-datos-larcocirculo1'placeholder='Radio'onfocus='this.select()'><input type='text'id='grados'class='herramientas-calculos-circulo-bt-datos-larcocirculo2'value=''placeholder='Grados'onfocus='this.select()'><div id='div-herramientas-calculos-circulos-bt-calcular'class='div-herramientas-calculos-circulos-bt-calcular'><input type='button'class='herramientas-calculos-circulo-bt-calcular'value='Calcular'onclick='resolver_longitud_arcocirculo()'></div><h3 id='formula-resultado-calcular-circulo'></h3>";
        //solo numeros?
        if (herramientas_solo_numeros_inputs) {
            document.getElementById("radio").type = "number";
            document.getElementById("radio").title = "(" + traduccion_numero[idioma].toLowerCase() + ")";
            document.getElementById("grados").type = "number";
            document.getElementById("grados").title = "(" + traduccion_numero[idioma].toLowerCase() + ")";
        }
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
        document.getElementById("radio").style.height = tamaño_height + "px";
        document.getElementById("grados").style.height = tamaño_height + "px";
        tamaño_height = 4;
        tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
        if (tamaño_height < 20) {
            tamaño_height = 20;
        }
        else if (tamaño_height > 75) {
            tamaño_height = 75;
        }
        document.getElementById("div-herramientas-calculos-circulos-bt-calcular").style.height = tamaño_height + "px";
        document.getElementById("radio").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_longitud_arcocirculo();
            }
        });
        document.getElementById("grados").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_area_semicirculo();
            }
        });
    }
    if (opcion == 5) {
        //area arcocirculo
        document.getElementById("div-body").innerHTML = "<input type='text'value=''id='radio'class='herramientas-calculos-circulo-bt-datos-aarcocirculo1'placeholder='Radio'onfocus='this.select()'><input type='text'id='grados'class='herramientas-calculos-circulo-bt-datos-aarcocirculo2'value=''placeholder='Grados'onfocus='this.select()'><div id='div-herramientas-calculos-circulos-bt-calcular'class='div-herramientas-calculos-circulos-bt-calcular'><input type='button'class='herramientas-calculos-circulo-bt-calcular'value='Calcular'onclick='resolver_area_arcocirculo()'></div><h3 id='formula-resultado-calcular-circulo'></h3>";
        //solo numeros?
        if (herramientas_solo_numeros_inputs) {
            document.getElementById("radio").type = "number";
            document.getElementById("radio").title = "(" + traduccion_numero[idioma].toLowerCase() + ")";
            document.getElementById("grados").type = "number";
            document.getElementById("grados").title = "(" + traduccion_numero[idioma].toLowerCase() + ")";
        }
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
        document.getElementById("radio").style.height = tamaño_height + "px";
        document.getElementById("grados").style.height = tamaño_height + "px";
        tamaño_height = 4;
        tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
        if (tamaño_height < 20) {
            tamaño_height = 20;
        }
        else if (tamaño_height > 75) {
            tamaño_height = 75;
        }
        document.getElementById("div-herramientas-calculos-circulos-bt-calcular").style.height = tamaño_height + "px";
        document.getElementById("radio").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_area_arcocirculo();
            }
        });
        document.getElementById("grados").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_area_arcocirculo();
            }
        });
    }
    if (opcion == 6) {
        //area corona circular
        document.getElementById("div-body").innerHTML = "<input type='text'title='radio grande'value=''id='radio-grande'class='herramientas-calculos-circulo-bt-datos-accircular1'placeholder='R.G.'onfocus='this.select()'><input type='text'id='radio-pequeño'title='radio pequeño'class='herramientas-calculos-circulo-bt-datos-accircular2'value=''placeholder='r.p.'onfocus='this.select()'><div id='div-herramientas-calculos-circulos-bt-calcular'class='div-herramientas-calculos-circulos-bt-calcular'><input type='button'class='herramientas-calculos-circulo-bt-calcular'value='Calcular'onclick='resolver_corona_circular()'></div><h3 id='formula-resultado-calcular-circulo'></h3>";
        //solo numeros?
        if (herramientas_solo_numeros_inputs) {
            document.getElementById("radio-grande").type = "number";
            document.getElementById("radio-grande").title = "Radio grande (" + traduccion_numero[idioma].toLowerCase() + ")";
            document.getElementById("radio-pequeño").type = "number";
            document.getElementById("radio-pequeño").title = "Radio pequeño (" + traduccion_numero[idioma].toLowerCase() + ")";
        }
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
        document.getElementById("radio-grande").style.height = tamaño_height + "px";
        document.getElementById("radio-pequeño").style.height = tamaño_height + "px";
        tamaño_height = 4;
        tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
        if (tamaño_height < 20) {
            tamaño_height = 20;
        }
        else if (tamaño_height > 75) {
            tamaño_height = 75;
        }
        document.getElementById("div-herramientas-calculos-circulos-bt-calcular").style.height = tamaño_height + "px";
        document.getElementById("radio-grande").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_corona_circular();
            }
        });
        document.getElementById("radio-pequeño").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_corona_circular();
            }
        });
    }
    if (opcion == 7) {
        //trapecio circular
        document.getElementById("div-body").innerHTML = "<input type='text'value=''title='radio grande'id='radio-grande'class='herramientas-calculos-circulo-bt-datos-tcircular1'placeholder='R.G.'onfocus='this.select()'><input type='text'title='radio pequeño'id='radio-pequeño'class='herramientas-calculos-circulo-bt-datos-tcircular2'value=''placeholder='r.p.'onfocus='this.select()'><input type='text'id='grados'class='herramientas-calculos-circulo-bt-datos-tcircular3'value=''placeholder='Grados'onfocus='this.select()'><div id='div-herramientas-calculos-circulos-bt-calcular'class='div-herramientas-calculos-circulos-bt-calcular'><input type='button'class='herramientas-calculos-circulo-bt-calcular'value='Calcular'onclick='resolver_trapecio_circular()'></div><h3 id='formula-resultado-calcular-circulo'></h3>";
        //solo numeros?
        if (herramientas_solo_numeros_inputs) {
            document.getElementById("radio-grande").type = "number";
            document.getElementById("radio-grande").title = "Radio grande (" + traduccion_numero[idioma].toLowerCase() + ")";
            document.getElementById("radio-pequeño").type = "number";
            document.getElementById("radio-pequeño").title = "Radio pequeño (" + traduccion_numero[idioma].toLowerCase() + ")";
            document.getElementById("grados").type = "number";
            document.getElementById("grados").title = "Grados (" + traduccion_numero[idioma].toLowerCase() + ")";
        }
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
        document.getElementById("radio-grande").style.height = tamaño_height + "px";
        document.getElementById("radio-pequeño").style.height = tamaño_height + "px";
        document.getElementById("grados").style.height = tamaño_height + "px";
        tamaño_height = 4;
        tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
        if (tamaño_height < 20) {
            tamaño_height = 20;
        }
        else if (tamaño_height > 75) {
            tamaño_height = 75;
        }
        document.getElementById("div-herramientas-calculos-circulos-bt-calcular").style.height = tamaño_height + "px";
        document.getElementById("radio-grande").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_trapecio_circular();
            }
        });
        document.getElementById("radio-pequeño").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_trapecio_circular();
            }
        });
        document.getElementById("grados").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_trapecio_circular();
            }
        });
    }
}
//calcular
{
    function resolver_area_circulo() {
        if (!isNaN(eval(document.getElementById("radio").value))) {
            const radio = eval(document.getElementById("radio").value);
            document.getElementById("formula-resultado-calcular-circulo").innerHTML = radio + "<sup>2</sup> * π : <u style='color:rgb(14, 183, 172);'>" + redondear_numero(Number(radio * radio) * Math.PI) + "</u>";
        }
        else {//mensaje error()

        }
    }
    function resolver_perimetro_circulo() {
        if (!isNaN(eval(document.getElementById("radio").value))) {
            const radio = eval(document.getElementById("radio").value);
            document.getElementById("formula-resultado-calcular-circulo").innerHTML = "2 * π * " + radio + " : <u style='color:rgb(14, 183, 172);'>" + redondear_numero(2 * (Math.PI) * radio) + "</u>";
        }
        else {//mensaje error()

        }
    }
    function resolver_area_semicirculo() {
        if (!isNaN(eval(document.getElementById("radio").value))) {
            const radio = eval(document.getElementById("radio").value);
            document.getElementById("formula-resultado-calcular-circulo").innerHTML = "(" + radio + "<sup>2</sup> * π)/2 : <u style='color:rgb(14, 183, 172);'>" + redondear_numero(((radio * radio) * Math.PI) / 2) + "</u>";
        }
        else {//mensaje error()

        }
    }
    function resolver_longitud_arcocirculo() {
        if (!isNaN(eval(document.getElementById("radio").value)) && !isNaN(eval(document.getElementById("grados").value))) {
            const radio = eval(document.getElementById("radio").value);
            const grados = eval(document.getElementById("grados").value);
            document.getElementById("formula-resultado-calcular-circulo").innerHTML = "((2 * π)*" + radio + "*" + grados + ")/360 : <u style='color:rgb(14, 183, 172);'>" + redondear_numero(((2 * Math.PI) * radio * grados) / 360) + "</u>";
        }
        else {//mensaje error()

        }
    }
    function resolver_area_arcocirculo() {
        if (!isNaN(eval(document.getElementById("radio").value)) && !isNaN(eval(document.getElementById("grados").value))) {
            const radio = eval(document.getElementById("radio").value);
            const grados = eval(document.getElementById("grados").value);
            document.getElementById("formula-resultado-calcular-circulo").innerHTML = "(π * " + radio + "<sup>2</sup> * " + grados + ")/360 : <u style='color:rgb(14, 183, 172);'>" + redondear_numero((Math.PI * (radio * radio) * grados) / 360) + "</u>";
        }
        else {//mensaje error()

        }
    }
    function resolver_corona_circular() {
        if (!isNaN(eval(document.getElementById("radio-grande").value)) && !isNaN(eval(document.getElementById("radio-pequeño").value))) {
            const radio_grande = eval(document.getElementById("radio-grande").value);
            const radio_pequeño = eval(document.getElementById("radio-pequeño").value);
            if (radio_grande > radio_pequeño) {
                document.getElementById("formula-resultado-calcular-circulo").innerHTML = "π *(" + radio_grande + "<sup>2</sup> - " + radio_pequeño + "<sup>2</sup>) : <u style='color:rgb(14, 183, 172);'>" + redondear_numero(Math.PI * ((radio_grande * radio_grande) - (radio_pequeño * radio_pequeño))) + "</u>";
            }
            else {
                document.getElementById("formula-resultado-calcular-circulo").innerHTML = "π *(" + radio_grande + "<sup>2</sup> - " + radio_pequeño + "<sup>2</sup>) : <u style='color:#f36024;'>! r.p. > R.G.</u>";
            }
        }
        else {//mensaje error()

        }
    }
    function resolver_trapecio_circular() {
        if (!isNaN(eval(document.getElementById("radio-grande").value)) && !isNaN(eval(document.getElementById("radio-pequeño").value)) && !isNaN(eval(document.getElementById("grados").value))) {
            const grados = eval(document.getElementById("grados").value);
            const radio_grande = eval(document.getElementById("radio-grande").value);
            const radio_pequeño = eval(document.getElementById("radio-pequeño").value);
            if (radio_grande > radio_pequeño) {
                document.getElementById("formula-resultado-calcular-circulo").innerHTML = "(π* " + grados + " *(" + radio_grande + "<sup>2</sup> - " + radio_pequeño + "<sup>2</sup>))/360 : <u style='color:rgb(14, 183, 172);'>" + redondear_numero((Math.PI * grados * ((radio_grande * radio_grande) - (radio_pequeño * radio_pequeño))) / 360) + "</u>";
            }
            else {
                document.getElementById("formula-resultado-calcular-circulo").innerHTML = "(π* " + grados + " *(" + radio_grande + "<sup>2</sup> - " + radio_pequeño + "<sup>2</sup>))/360 : <u style='color:#f36024;'>! r.p. > R.G.</u>";
            }
        }
        else {//mensaje error()

        }
    }
}