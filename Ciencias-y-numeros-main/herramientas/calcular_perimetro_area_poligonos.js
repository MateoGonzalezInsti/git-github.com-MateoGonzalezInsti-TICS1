function mostrar_calcular_area_perimetro_poligonos(opcion) {
    document.getElementById("body").innerHTML = "<div class='indice-herramientas'><svg class='flecha-volver-herramientas' xmlns='http://www.w3.org/2000/svg' version='1.0' width='90.000000pt' height='90.000000pt' viewBox='0 0 90.000000 90.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,90.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path style='cursor: pointer;'onclick='abrir_menu_herramientas()' d='M113 548 c-46 -46 -83 -90 -83 -98 0 -25 165 -183 186 -178 37 7 27 39 -27 94 l-53 54 364 2 365 3 0 25 0 25 -365 3 -364 2 53 54 c55 56 64 88 26 94 -14 2 -46 -23 -102 -80z'/></g></svg><select id='select-option'><option value='Perímetro cuadrado'onclick='mostrar_calcular_area_perimetro_poligonos_herramienta(1)'>Perímetro Cuadrado</option><option value='Área Cuadrado'onclick='mostrar_calcular_area_perimetro_poligonos_herramienta(2)'>Área Cuadrado</option><option value='Perímetro Rectángulo'onclick='mostrar_calcular_area_perimetro_poligonos_herramienta(3)'>Perímetro Rectángulo</option><option value='Área Rectángulo'onclick='mostrar_calcular_area_perimetro_poligonos_herramienta(4)'>Área Rectágulo</option><option value='Perímetro Triángulo'onclick='mostrar_calcular_area_perimetro_poligonos_herramienta(5)'>Perímetro Triángulo</option><option value='Área Triángulo'onclick='mostrar_calcular_area_perimetro_poligonos_herramienta(6)'>Área Triángulo</option><option value='Perímetro Rómbo'onclick='mostrar_calcular_area_perimetro_poligonos_herramienta(7)'>Perímetro Rombo</option><option value='Área Rómbo'onclick='mostrar_calcular_area_perimetro_poligonos_herramienta(8)'>Área Rombo</option><option value='Perímetro Romboide'onclick='mostrar_calcular_area_perimetro_poligonos_herramienta(9)'>Perímetro Romboide</option><option value='Área Romboide'onclick='mostrar_calcular_area_perimetro_poligonos_herramienta(10)'>Área Romboide</option><option value='Perímetro Trapecio'onclick='mostrar_calcular_area_perimetro_poligonos_herramienta(11)'>Perímetro Trapecio</option><option value='Área Trapecio'onclick='mostrar_calcular_area_perimetro_poligonos_herramienta(12)'>Área Trapecio</option><option value='Perímetro Trapezoide'onclick='mostrar_calcular_area_perimetro_poligonos_herramienta(13)'>Perímetro Trapezoide</option></select></div><div id='div-body'></div>";
    document.getElementById("select-option").innerHTML += "<option value='Perímetro Polígono Regular'onclick='mostrar_calcular_area_perimetro_poligonos_herramienta(14)'>Perímetro Polígono Regular</option><option value='Área Polígono Regular'onclick='mostrar_calcular_area_perimetro_poligonos_herramienta(15)'>Área Polígono Regular</option>";
    mostrar_calcular_area_perimetro_poligonos_herramienta(opcion);
}
function mostrar_calcular_area_perimetro_poligonos_herramienta(opcion) {
    if (opcion == 1) {
        //perimetro cuadrado
        document.getElementById("div-body").innerHTML = "<input type='text'value=''id='lado'class='herramientas-calculos-poligonos-bt-datos-pcuadrado1'placeholder='Lado'onfocus='this.select()' title='(operaciones)'><div id='div-herramientas-calculos-poligonos-bt-calcular'class='div-herramientas-calculos-poligonos-bt-calcular'><input type='button'class='herramientas-calculos-poligonos-bt-calcular'value='Calcular'onclick='resolver_perimetro_cuadrado()'></div><h3 id='formula-resultado-pap'></h3>";
        //solo numeros?
        if (herramientas_solo_numeros_inputs) {
            document.getElementById("lado").type = "number";
            document.getElementById("lado").title = "(números)";
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
        document.getElementById("lado").style.height = tamaño_height + "px";
        tamaño_height = 4;
        tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
        if (tamaño_height < 20) {
            tamaño_height = 20;
        }
        else if (tamaño_height > 75) {
            tamaño_height = 75;
        }
        document.getElementById("div-herramientas-calculos-poligonos-bt-calcular").style.height = tamaño_height + "px";
        document.getElementById("lado").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_perimetro_cuadrado();
            }
        });
    }
    if (opcion == 2) {
        //area cuadrado
        document.getElementById("div-body").innerHTML = "<input type='text'value=''id='lado'class='herramientas-calculos-poligonos-bt-datos-acuadrado1'placeholder='Lado'onfocus='this.select()'title='(operaciones)'><div id='div-herramientas-calculos-poligonos-bt-calcular'class='div-herramientas-calculos-poligonos-bt-calcular'><input type='button'class='herramientas-calculos-poligonos-bt-calcular'value='Calcular'onclick='resolver_area_cuadrado()'></div><h3 id='formula-resultado-pap'></h3>";
        //solo numeros?
        if (herramientas_solo_numeros_inputs) {
            document.getElementById("lado").type = "number";
            document.getElementById("lado").title = "(números)";
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
        document.getElementById("lado").style.height = tamaño_height + "px";
        tamaño_height = 4;
        tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
        if (tamaño_height < 20) {
            tamaño_height = 20;
        }
        else if (tamaño_height > 75) {
            tamaño_height = 75;
        }
        document.getElementById("div-herramientas-calculos-poligonos-bt-calcular").style.height = tamaño_height + "px";
        document.getElementById("lado").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_area_cuadrado();
            }
        });
    }
    if (opcion == 3) {
        //perimetro rectangulo
        document.getElementById("div-body").innerHTML = "<input type='text'value=''id='lado'class='herramientas-calculos-poligonos-bt-datos-prectangulo1'placeholder='Base'onfocus='this.select()'title='(operaciones)'><input type='text'value=''id='lado2'class='herramientas-calculos-poligonos-bt-datos-prectangulo2'placeholder='Altura'onfocus='this.select()'title='(operaciones)'><div id='div-herramientas-calculos-poligonos-bt-calcular'class='div-herramientas-calculos-poligonos-bt-calcular'><input type='button'class='herramientas-calculos-poligonos-bt-calcular'value='Calcular'onclick='resolver_perimetro_rectangulo()'></div><h3 id='formula-resultado-pap'></h3>";
        //solo numeros?
        if (herramientas_solo_numeros_inputs) {
            document.getElementById("lado").type = "number";
            document.getElementById("lado").title = "(números)";
            document.getElementById("lado2").type = "number";
            document.getElementById("lado2").title = "(números)";
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
        document.getElementById("lado").style.height = tamaño_height + "px";
        document.getElementById("lado2").style.height = tamaño_height + "px";
        tamaño_height = 4;
        tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
        if (tamaño_height < 20) {
            tamaño_height = 20;
        }
        else if (tamaño_height > 75) {
            tamaño_height = 75;
        }
        document.getElementById("div-herramientas-calculos-poligonos-bt-calcular").style.height = tamaño_height + "px";
        document.getElementById("lado").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_perimetro_rectangulo();
            }
        });
        document.getElementById("lado2").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_perimetro_rectangulo();
            }
        });
    }
    if (opcion == 4) {
        //area rectangulo
        document.getElementById("div-body").innerHTML = "<input type='text'value=''id='lado'class='herramientas-calculos-poligonos-bt-datos-arectangulo1'placeholder='Base'onfocus='this.select()'title='(operaciones)'><input type='text'id='lado2'class='herramientas-calculos-poligonos-bt-datos-arectangulo2'value=''placeholder='Altura'onfocus='this.select()'title='(operaciones)'><div id='div-herramientas-calculos-poligonos-bt-calcular'class='div-herramientas-calculos-poligonos-bt-calcular'><input type='button'class='herramientas-calculos-poligonos-bt-calcular'value='Calcular'onclick='resolver_area_rectangulo()'></div><h3 id='formula-resultado-pap'></h3>";
        //solo numeros?
        if (herramientas_solo_numeros_inputs) {
            document.getElementById("lado").type = "number";
            document.getElementById("lado").title = "(números)";
            document.getElementById("lado2").type = "number";
            document.getElementById("lado2").title = "(números)";
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
        document.getElementById("lado").style.height = tamaño_height + "px";
        document.getElementById("lado2").style.height = tamaño_height + "px";
        tamaño_height = 4;
        tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
        if (tamaño_height < 20) {
            tamaño_height = 20;
        }
        else if (tamaño_height > 75) {
            tamaño_height = 75;
        }
        document.getElementById("div-herramientas-calculos-poligonos-bt-calcular").style.height = tamaño_height + "px";
        document.getElementById("lado").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_area_rectangulo();
            }
        });
        document.getElementById("lado2").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_area_rectangulo();
            }
        });
    }
    if (opcion == 5) {
        //perimetro triangulo
        document.getElementById("div-body").innerHTML = "<input type='text'value=''id='lado'class='herramientas-calculos-poligonos-bt-datos-ptriangulo1'placeholder='Lado'onfocus='this.select()'title='(operaciones)'><input type='text'id='lado2'class='herramientas-calculos-poligonos-bt-datos-ptriangulo2'value=''placeholder='Lado'onfocus='this.select()'title='(operaciones)'><input type='text'value=''id='lado3'class='herramientas-calculos-poligonos-bt-datos-ptriangulo3'placeholder='Lado'onfocus='this.select()'title='(operaciones)'><div id='div-herramientas-calculos-poligonos-bt-calcular'class='div-herramientas-calculos-poligonos-bt-calcular'><input type='button'class='herramientas-calculos-poligonos-bt-calcular'value='Calcular'onclick='resolver_perimetro_triangulo()'></div><h3 id='formula-resultado-pap'></h3>";
        //solo numeros?
        if (herramientas_solo_numeros_inputs) {
            document.getElementById("lado").type = "number";
            document.getElementById("lado").title = "(números)";
            document.getElementById("lado2").type = "number";
            document.getElementById("lado2").title = "(números)";
            document.getElementById("lado3").type = "number";
            document.getElementById("lado3").title = "(números)";
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
        document.getElementById("lado").style.height = tamaño_height + "px";
        document.getElementById("lado2").style.height = tamaño_height + "px";
        document.getElementById("lado3").style.height = tamaño_height + "px";
        tamaño_height = 4;
        tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
        if (tamaño_height < 20) {
            tamaño_height = 20;
        }
        else if (tamaño_height > 75) {
            tamaño_height = 75;
        }
        document.getElementById("div-herramientas-calculos-poligonos-bt-calcular").style.height = tamaño_height + "px";
        document.getElementById("lado").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_perimetro_triangulo();
            }
        });
        document.getElementById("lado2").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_perimetro_triangulo();
            }
        });
        document.getElementById("lado3").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_perimetro_triangulo();
            }
        });
    }
    if (opcion == 6) {
        //area triangulo
        document.getElementById("div-body").innerHTML = "<input type='text'value=''id='base'class='herramientas-calculos-poligonos-bt-datos-atriangulo1'placeholder='Base'onfocus='this.select()'title='(operaciones)'><input type='text'id='altura'class='herramientas-calculos-poligonos-bt-datos-atriangulo2'value=''placeholder='Altura'onfocus='this.select()'title='(operaciones)'><div id='div-herramientas-calculos-poligonos-bt-calcular'class='div-herramientas-calculos-poligonos-bt-calcular'><input type='button'class='herramientas-calculos-poligonos-bt-calcular'value='Calcular'onclick='resolver_area_triangulo()'></div><h3 id='formula-resultado-pap'></h3>";
        //solo numeros?
        if (herramientas_solo_numeros_inputs) {
            document.getElementById("base").type = "number";
            document.getElementById("base").title = "(números)";
            document.getElementById("altura").type = "number";
            document.getElementById("altura").title = "(números)";
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
        document.getElementById("base").style.height = tamaño_height + "px";
        document.getElementById("altura").style.height = tamaño_height + "px";
        tamaño_height = 4;
        tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
        if (tamaño_height < 20) {
            tamaño_height = 20;
        }
        else if (tamaño_height > 75) {
            tamaño_height = 75;
        }
        document.getElementById("div-herramientas-calculos-poligonos-bt-calcular").style.height = tamaño_height + "px";
        document.getElementById("base").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_area_triangulo();
            }
        });
        document.getElementById("altura").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_area_triangulo();
            }
        });
    }
    if (opcion == 7) {
        //perimetro rombo
        document.getElementById("div-body").innerHTML = "<input type='text'value=''id='lado'class='herramientas-calculos-poligonos-bt-datos-prombo1'placeholder='Lado'onfocus='this.select()'title='(operaciones)'><div id='div-herramientas-calculos-poligonos-bt-calcular'class='div-herramientas-calculos-poligonos-bt-calcular'><input type='button'class='herramientas-calculos-poligonos-bt-calcular'value='Calcular'onclick='resolver_perimetro_rombo()'></div><h3 id='formula-resultado-pap'></h3>";
        //solo numeros?
        if (herramientas_solo_numeros_inputs) {
            document.getElementById("lado").type = "number";
            document.getElementById("lado").title = "(números)";
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
        document.getElementById("lado").style.height = tamaño_height + "px";
        tamaño_height = 4;
        tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
        if (tamaño_height < 20) {
            tamaño_height = 20;
        }
        else if (tamaño_height > 75) {
            tamaño_height = 75;
        }
        document.getElementById("div-herramientas-calculos-poligonos-bt-calcular").style.height = tamaño_height + "px";
        document.getElementById("lado").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_perimetro_rombo();
            }
        });
    }
    if (opcion == 8) {
        //area rombo
        document.getElementById("div-body").innerHTML = "<input type='text'value=''id='diametro-grande'title='Diámetro grande (operaciones)'class='herramientas-calculos-poligonos-bt-datos-arombo1'placeholder='D.G.'onfocus='this.select()'><input type='text'value=''id='diametro-pequeño'title='diámetro pequeño (operaciones)'class='herramientas-calculos-poligonos-bt-datos-arombo2'placeholder='d.p.'onfocus='this.select()'title='(operaciones)'><div id='div-herramientas-calculos-poligonos-bt-calcular'class='div-herramientas-calculos-poligonos-bt-calcular'><input type='button'class='herramientas-calculos-poligonos-bt-calcular'value='Calcular'onclick='resolver_area_rombo()'></div><h3 id='formula-resultado-pap'></h3>";
        //solo numeros?
        if (herramientas_solo_numeros_inputs) {
            document.getElementById("diametro-grande").type = "number";
            document.getElementById("diametro-grande").title = "Diámetro grande (números)";
            document.getElementById("diametro-pequeño").type = "number";
            document.getElementById("diametro-pequeño").title = "diámetro pequeño (números)";
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
        document.getElementById("diametro-grande").style.height = tamaño_height + "px";
        document.getElementById("diametro-pequeño").style.height = tamaño_height + "px";
        tamaño_height = 4;
        tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
        if (tamaño_height < 20) {
            tamaño_height = 20;
        }
        else if (tamaño_height > 75) {
            tamaño_height = 75;
        }
        document.getElementById("div-herramientas-calculos-poligonos-bt-calcular").style.height = tamaño_height + "px";
        document.getElementById("diametro-grande").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_area_rombo();
            }
        });
        document.getElementById("diametro-pequeño").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_area_rombo();
            }
        });
    }
    if (opcion == 9) {
        //perimetro romboide
        document.getElementById("div-body").innerHTML = "<input type='text'value=''id='lado'class='herramientas-calculos-poligonos-bt-datos-promboide1'placeholder='Lado'onfocus='this.select()'title='(operaciones)'><input type='text'value=''id='lado2'class='herramientas-calculos-poligonos-bt-datos-promboide2'placeholder='Lado'onfocus='this.select()'title='(operaciones)'><div id='div-herramientas-calculos-poligonos-bt-calcular'class='div-herramientas-calculos-poligonos-bt-calcular'><input type='button'class='herramientas-calculos-poligonos-bt-calcular'value='Calcular'onclick='resolver_perimetro_romboide()'></div><h3 id='formula-resultado-pap'></h3>";
        //solo numeros?
        if (herramientas_solo_numeros_inputs) {
            document.getElementById("lado").type = "number";
            document.getElementById("lado").title = "(números)";
            document.getElementById("lado2").type = "number";
            document.getElementById("lado2").title = "(números)";
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
        document.getElementById("lado").style.height = tamaño_height + "px";
        document.getElementById("lado2").style.height = tamaño_height + "px";
        tamaño_height = 4;
        tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
        if (tamaño_height < 20) {
            tamaño_height = 20;
        }
        else if (tamaño_height > 75) {
            tamaño_height = 75;
        }
        document.getElementById("div-herramientas-calculos-poligonos-bt-calcular").style.height = tamaño_height + "px";
        document.getElementById("lado").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_perimetro_romboide();
            }
        });
        document.getElementById("lado2").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_perimetro_romboide();
            }
        });
    }
    if (opcion == 10) {
        //area romboide
        document.getElementById("div-body").innerHTML = "<input type='text'value=''id='base'class='herramientas-calculos-poligonos-bt-datos-aromboide1'placeholder='Base'onfocus='this.select()'title='(operaciones)'><input type='text'value=''id='altura'class='herramientas-calculos-poligonos-bt-datos-aromboide2'placeholder='Altura'onfocus='this.select()'title='(operaciones)'><div id='div-herramientas-calculos-poligonos-bt-calcular'class='div-herramientas-calculos-poligonos-bt-calcular'><input type='button'class='herramientas-calculos-poligonos-bt-calcular'value='Calcular'onclick='resolver_area_romboide()'></div><h3 id='formula-resultado-pap'></h3>";
        //solo numeros?
        if (herramientas_solo_numeros_inputs) {
            document.getElementById("base").type = "number";
            document.getElementById("base").title = "(números)";
            document.getElementById("altura").type = "number";
            document.getElementById("altura").title = "(números)";
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
        document.getElementById("base").style.height = tamaño_height + "px";
        document.getElementById("altura").style.height = tamaño_height + "px";
        tamaño_height = 4;
        tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
        if (tamaño_height < 20) {
            tamaño_height = 20;
        }
        else if (tamaño_height > 75) {
            tamaño_height = 75;
        }
        document.getElementById("div-herramientas-calculos-poligonos-bt-calcular").style.height = tamaño_height + "px";
        document.getElementById("base").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_area_romboide();
            }
        });
        document.getElementById("altura").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_area_romboide();
            }
        });
    }
    if (opcion == 11) {
        //perimetro trapecio
        document.getElementById("div-body").innerHTML = "<input type='text'value=''id='lado'class='herramientas-calculos-poligonos-bt-datos-ptrapecio1'placeholder='Lado'onfocus='this.select()'title='(operaciones)'><input type='text'value=''id='lado2'class='herramientas-calculos-poligonos-bt-datos-ptrapecio2'placeholder='Lado'onfocus='this.select()'title='(operaciones)'><input type='text'value=''id='lado3'class='herramientas-calculos-poligonos-bt-datos-ptrapecio3'placeholder='Lado'onfocus='this.select()'title='(operaciones)'><input type='text'value=''id='lado4'class='herramientas-calculos-poligonos-bt-datos-ptrapecio4'placeholder='Lado'onfocus='this.select()'title='(operaciones)'><div id='div-herramientas-calculos-poligonos-bt-calcular'class='div-herramientas-calculos-poligonos-bt-calcular'><input type='button'class='herramientas-calculos-poligonos-bt-calcular'value='Calcular'onclick='resolver_perimetro_trapecio()'></div><h3 id='formula-resultado-pap'></h3>";
        //solo numeros?
        if (herramientas_solo_numeros_inputs) {
            document.getElementById("lado").type = "number";
            document.getElementById("lado").title = "(números)";
            document.getElementById("lado2").type = "number";
            document.getElementById("lado2").title = "(números)";
            document.getElementById("lado3").type = "number";
            document.getElementById("lado3").title = "(números)";
            document.getElementById("lado4").type = "number";
            document.getElementById("lado4").title = "(números)";
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
        document.getElementById("lado").style.height = tamaño_height + "px";
        document.getElementById("lado2").style.height = tamaño_height + "px";
        document.getElementById("lado3").style.height = tamaño_height + "px";
        document.getElementById("lado4").style.height = tamaño_height + "px";
        tamaño_height = 4;
        tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
        if (tamaño_height < 20) {
            tamaño_height = 20;
        }
        else if (tamaño_height > 75) {
            tamaño_height = 75;
        }
        document.getElementById("div-herramientas-calculos-poligonos-bt-calcular").style.height = tamaño_height + "px";
        document.getElementById("lado").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_perimetro_trapecio();
            }
        });
        document.getElementById("lado2").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_perimetro_trapecio();
            }
        });
        document.getElementById("lado3").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_perimetro_trapecio();
            }
        });
        document.getElementById("lado4").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_perimetro_trapecio();
            }
        });
    }
    if (opcion == 12) {
        //area trapecio
        document.getElementById("div-body").innerHTML = "<input type='text'value=''id='base-mayor'title='Base grande (operaciones)'class='herramientas-calculos-poligonos-bt-datos-atrapecio1'placeholder='B.G.'onfocus='this.select()'><input type='text'value=''id='base-menor'title='base pequeña (operaciones)'class='herramientas-calculos-poligonos-bt-datos-atrapecio2'placeholder='b.p.'onfocus='this.select()'><input type='text'value=''id='altura'class='herramientas-calculos-poligonos-bt-datos-atrapecio3'placeholder='Altura'onfocus='this.select()'title='(operaciones)'><div id='div-herramientas-calculos-poligonos-bt-calcular'class='div-herramientas-calculos-poligonos-bt-calcular'><input type='button'class='herramientas-calculos-poligonos-bt-calcular'value='Calcular'onclick='resolver_area_trapecio()'></div><h3 id='formula-resultado-pap'></h3>";
        //solo numeros?
        if (herramientas_solo_numeros_inputs) {
            document.getElementById("base-mayor").type = "number";
            document.getElementById("base-mayor").title = "Base grande (números)";
            document.getElementById("base-menor").type = "number";
            document.getElementById("base-menor").title = "base pequeña (números)";
            document.getElementById("altura").type = "number";
            document.getElementById("altura").title = "(números)";
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
        document.getElementById("base-mayor").style.height = tamaño_height + "px";
        document.getElementById("base-menor").style.height = tamaño_height + "px";
        document.getElementById("altura").style.height = tamaño_height + "px";
        tamaño_height = 4;
        tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
        if (tamaño_height < 20) {
            tamaño_height = 20;
        }
        else if (tamaño_height > 75) {
            tamaño_height = 75;
        }
        document.getElementById("div-herramientas-calculos-poligonos-bt-calcular").style.height = tamaño_height + "px";
        document.getElementById("base-mayor").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_area_trapecio();
            }
        });
        document.getElementById("base-menor").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_area_trapecio();
            }
        });
        document.getElementById("altura").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_area_trapecio();
            }
        });
    }
    if (opcion == 13) {
        //perimetro trapezoide
        document.getElementById("div-body").innerHTML = "<input type='text'value=''id='lado'class='herramientas-calculos-poligonos-bt-datos-ptrapezoide1'placeholder='Lado'onfocus='this.select()'title='(operaciones)'><input type='text'value=''id='lado2'class='herramientas-calculos-poligonos-bt-datos-ptrapezoide2'placeholder='Lado'onfocus='this.select()'title='(operaciones)'><input type='text'value=''id='lado3'class='herramientas-calculos-poligonos-bt-datos-ptrapezoide3'placeholder='Lado'onfocus='this.select()'title='(operaciones)'><input type='text'value=''id='lado4'class='herramientas-calculos-poligonos-bt-datos-ptrapezoide4'placeholder='Lado'onfocus='this.select()'title='(operaciones)'><div id='div-herramientas-calculos-poligonos-bt-calcular'class='div-herramientas-calculos-poligonos-bt-calcular'><input type='button'class='herramientas-calculos-poligonos-bt-calcular'value='Calcular'onclick='resolver_perimetro_trapezoide()'></div><h3 id='formula-resultado-pap'></h3>";
        //solo numeros?
        if (herramientas_solo_numeros_inputs) {
            document.getElementById("lado").type = "number";
            document.getElementById("lado").title = "(números)";
            document.getElementById("lado2").type = "number";
            document.getElementById("lado2").title = "(números)";
            document.getElementById("lado3").type = "number";
            document.getElementById("lado3").title = "(números)";
            document.getElementById("lado4").type = "number";
            document.getElementById("lado4").title = "(números)";
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
        document.getElementById("lado").style.height = tamaño_height + "px";
        document.getElementById("lado2").style.height = tamaño_height + "px";
        document.getElementById("lado3").style.height = tamaño_height + "px";
        document.getElementById("lado4").style.height = tamaño_height + "px";
        tamaño_height = 4;
        tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
        if (tamaño_height < 20) {
            tamaño_height = 20;
        }
        else if (tamaño_height > 75) {
            tamaño_height = 75;
        }
        document.getElementById("div-herramientas-calculos-poligonos-bt-calcular").style.height = tamaño_height + "px";
        document.getElementById("lado").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_perimetro_trapezoide();
            }
        });
        document.getElementById("lado2").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_perimetro_trapezoide();
            }
        });
        document.getElementById("lado3").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_perimetro_trapezoide();
            }
        });
        document.getElementById("lado4").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_perimetro_trapezoide();
            }
        });
    }
    if (opcion == 14) {
        //perimetro poligono regular
        document.getElementById("div-body").innerHTML = "<input type='text'value=''id='lado'class='herramientas-calculos-poligonos-bt-datos-ppr1'placeholder='Lado'onfocus='this.select()'title='(operaciones)'><input type='text'value=''id='n-lados'class='herramientas-calculos-poligonos-bt-datos-ppr2'placeholder='Nº lados'onfocus='this.select()'title='(operaciones)'><div class='div-herramientas-calculos-poligonos-bt-calcular'><input type='button'class='herramientas-calculos-poligonos-bt-calcular'value='Calcular'onclick='resolver_perimetro_poligono_regular()'></div><h3 id='formula-resultado-pap'></h3>";
        //solo numeros?
        if (herramientas_solo_numeros_inputs) {
            document.getElementById("lado").type = "number";
            document.getElementById("lado").title = "(números)";
            document.getElementById("n-lados").type = "number";
            document.getElementById("n-lados").title = "(números)";
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
        document.getElementById("lado").style.height = tamaño_height + "px";
        document.getElementById("n-lados").style.height = tamaño_height + "px";
        tamaño_height = 4;
        tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
        if (tamaño_height < 20) {
            tamaño_height = 20;
        }
        else if (tamaño_height > 75) {
            tamaño_height = 75;
        }
        document.getElementById("div-herramientas-calculos-poligonos-bt-calcular").style.height = tamaño_height + "px";
        document.getElementById("lado").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_perimetro_poligono_regular();
            }
        });
        document.getElementById("n-lados").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_perimetro_poligono_regular();
            }
        });
    }
    if (opcion == 15) {
        //area poligono regular
        document.getElementById("div-body").innerHTML = "<input type='text'value=''id='lado'class='herramientas-calculos-poligonos-bt-datos-apr1'placeholder='Lado'onfocus='this.select()'title='(operaciones)'><input type='text'value=''id='n-lados'class='herramientas-calculos-poligonos-bt-datos-apr2'placeholder='Nº lados'onfocus='this.select()'title='(operaciones)'><input type='text'value=''id='apotema'class='herramientas-calculos-poligonos-bt-datos-apr3'title='Apotema (operaciones)'placeholder='Apt.'onfocus='this.select()'><div class='div-herramientas-calculos-poligonos-bt-calcular'><input type='button'class='herramientas-calculos-poligonos-bt-calcular'value='Calcular'onclick='resolver_area_poligono_regular()'></div><h3 id='formula-resultado-pap'></h3>";
        //solo numeros?
        if (herramientas_solo_numeros_inputs) {
            document.getElementById("lado").type = "number";
            document.getElementById("lado").title = "(números)";
            document.getElementById("n-lados").type = "number";
            document.getElementById("n-lados").title = "(números)";
            document.getElementById("apotema").type = "number";
            document.getElementById("apotema").title = "Apotema (números)";
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
        document.getElementById("lado").style.height = tamaño_height + "px";
        document.getElementById("n-lados").style.height = tamaño_height + "px";
        document.getElementById("apotema").style.height = tamaño_height + "px";
        tamaño_height = 4;
        tamaño_height = tamaño_y_pantalla * (tamaño_height / 100);
        if (tamaño_height < 20) {
            tamaño_height = 20;
        }
        else if (tamaño_height > 75) {
            tamaño_height = 75;
        }
        document.getElementById("div-herramientas-calculos-poligonos-bt-calcular").style.height = tamaño_height + "px";
        document.getElementById("lado").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_area_poligono_regular();
            }
        });
        document.getElementById("n-lados").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_area_cuadrado();
            }
        });
        document.getElementById("apotema").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                resolver_area_poligono_regular();
            }
        });
    }
}

/*funciones*/
{
    function resolver_perimetro_cuadrado() {
        if (!isNaN(eval(document.getElementById("lado").value))) {
            const lado = eval(document.getElementById("lado").value);
            document.getElementById("formula-resultado-pap").innerHTML = "4*" + lado + " : <u style='color:rgb(14, 183, 172);'>" + redondear_numero(lado * 4) + "</u>";
        }
        else {//mensaje error()

        }
    }
    function resolver_area_cuadrado() {
        if (!isNaN(eval(document.getElementById("lado").value))) {
            const lado = eval(document.getElementById("lado").value);
            document.getElementById("formula-resultado-pap").innerHTML = lado + "*" + lado + " : <u>" + redondear_numero(lado * lado) + "</u>";
        }
        else {//mensaje error

        }
    }
    function resolver_perimetro_rectangulo() {
        if (!isNaN(eval(document.getElementById("lado").value)) && !isNaN(eval(document.getElementById("lado2").value))) {
            const lado = eval(document.getElementById("lado").value);
            const lado2 = eval(document.getElementById("lado2").value);
            document.getElementById("formula-resultado-pap").innerHTML = "2*(" + lado + "+" + lado2 + ") : <u>" + redondear_numero(2 * (lado + lado2)) + "</u>";
        }
        else {//mensaje error()

        }
    }
    function resolver_area_rectangulo() {
        if (!isNaN(eval(document.getElementById("lado").value)) && !isNaN(eval(document.getElementById("lado2").value))) {
            const lado = eval(document.getElementById("lado").value);
            const lado2 = eval(document.getElementById("lado2").value);
            document.getElementById("formula-resultado-pap").innerHTML = lado + "*" + lado2 + " : <u>" + redondear_numero(lado * lado2) + "</u>";
        }
        else {//mensaje error()

        }
    }
    function resolver_perimetro_triangulo() {
        if (!isNaN(eval(document.getElementById("lado").value)) && !isNaN(eval(document.getElementById("lado2").value)) && !isNaN(eval(document.getElementById("lado3").value))) {
            const lado = eval(document.getElementById("lado").value);
            const lado2 = eval(document.getElementById("lado2").value);
            const lado3 = eval(document.getElementById("lado3").value);
            document.getElementById("formula-resultado-pap").innerHTML = lado + " + " + lado2 + " + " + lado3 + " : <u>" + redondear_numero(lado + lado2 + lado3) + "</u>";
        }
        else {//mensaje error()

        }
    }
    function resolver_area_triangulo() {
        if (!isNaN(eval(document.getElementById("base").value)) && !isNaN(eval(document.getElementById("altura").value))) {
            const base = eval(document.getElementById("base").value);
            const altura = eval(document.getElementById("altura").value);
            document.getElementById("formula-resultado-pap").innerHTML = "(" + base + "*" + altura + ")/2 : <u>" + redondear_numero((base * altura) / 2) + "</u>";
        }
        else {//mensaje error()

        }
    }
    function resolver_perimetro_rombo() {
        if (!isNaN(eval(document.getElementById("lado").value))) {
            const lado = eval(document.getElementById("lado").value);
            document.getElementById("formula-resultado-pap").innerHTML = "4*" + lado + " : <u>" + redondear_numero(4 * lado) + "</u>";
        }
        else {//mensaje error()

        }
    }
    function resolver_area_rombo() {
        if (!isNaN(eval(document.getElementById("diametro-grande").value)) && !isNaN(eval(document.getElementById("diametro-pequeño").value))) {
            const Diametro = eval(document.getElementById("diametro-grande").value);
            const diametro = eval(document.getElementById("diametro-pequeño").value);
            if (Diametro > diametro) {
                document.getElementById("formula-resultado-pap").innerHTML = "(" + Diametro + "*" + diametro + ")/2 : <u>" + redondear_numero((Diametro * diametro) / 2) + "</u>";
            }
            else {
                document.getElementById("formula-resultado-pap").innerHTML = "(" + Diametro + "*" + diametro + ")/2 : <u style='color:#f36024;'>! r.p. > R.G.</u>";
            }
        }
        else {//mensaje error

        }
    }
    function resolver_perimetro_romboide() {
        if (!isNaN(eval(document.getElementById("lado").value)) && !isNaN(eval(document.getElementById("lado2").value))) {
            const lado = eval(document.getElementById("lado").value);
            const lado2 = eval(document.getElementById("lado2").value);
            document.getElementById("formula-resultado-pap").innerHTML = "2*(" + lado + "*" + lado2 + ") : <u>" + redondear_numero(2 * (lado * lado2)) + "</u>";
        }
        else {//mensaje error()

        }
    }
    function resolver_area_romboide() {
        if (!isNaN(eval(document.getElementById("base").value)) && !isNaN(eval(document.getElementById("altura").value))) {
            const base = eval(document.getElementById("base").value);
            const altura = eval(document.getElementById("altura").value);
            document.getElementById("formula-resultado-pap").innerHTML = base + "*+" + altura + " : <u>" + redondear_numero(base * altura) + "</u>";
        }
        else {//mensaje error()

        }
    }
    function resolver_perimetro_trapecio() {
        if (!isNaN(eval(document.getElementById("lado").value)) && !isNaN(eval(document.getElementById("lado2").value)) && !isNaN(eval(document.getElementById("lado3").value)) && !isNaN(eval(document.getElementById("lado4").value))) {
            const lado = eval(document.getElementById("lado").value);
            const lado2 = eval(document.getElementById("lado2").value);
            const lado3 = eval(document.getElementById("lado3").value);
            const lado4 = eval(document.getElementById("lado4").value);
            document.getElementById("formula-resultado-pap").innerHTML = lado + " + " + lado2 + " + " + lado3 + " + " + lado4 + " : <u>" + redondear_numero(lado + lado2 + lado3 + lado4) + "</u>";
        }
        else {//mensaje error()

        }
    }
    function resolver_area_trapecio() {
        if (!isNaN(eval(document.getElementById("base-mayor").value)) && !isNaN(eval(document.getElementById("base-menor").value)) && !isNaN(eval(document.getElementById("altura").value))) {
            const Base = eval(document.getElementById("base-mayor").value);
            const base = eval(document.getElementById("base-menor").value);
            const altura = eval(document.getElementById("altura").value);
            if (Base > base) {
                document.getElementById("formula-resultado-pap").innerHTML = "((" + Base + "*" + base + ")/2)*" + altura + " : <u>" + redondear_numero(((Base * base) / 2) * altura) + "</u>";
            }
            else {
                document.getElementById("formula-resultado-pap").innerHTML = "((" + Base + "*" + base + ")/2)*" + altura + " : <u style='color:#f36024;'>! b.p. > B.G.</u>";
            }
        }
        else {//mensaje error()

        }
    }
    function resolver_perimetro_trapezoide() {
        if (!isNaN(eval(document.getElementById("lado").value)) && !isNaN(eval(document.getElementById("lado2").value)) && !isNaN(eval(document.getElementById("lado3").value)) && !isNaN(eval(document.getElementById("lado4").value))) {
            const lado = eval(document.getElementById("lado").value);
            const lado2 = eval(document.getElementById("lado2").value);
            const lado3 = eval(document.getElementById("lado3").value);
            const lado4 = eval(document.getElementById("lado4").value);
            document.getElementById("formula-resultado-pap").innerHTML = lado + " + " + lado2 + " + " + lado3 + " + " + lado4 + " : <u>" + redondear_numero(lado + lado2 + lado3 + lado4) + "</u>";
        }
        else {//mensaje error()

        }
    }
    function resolver_perimetro_poligono_regular() {
        if (!isNaN(eval(document.getElementById("lado").value)) && !isNaN(eval(document.getElementById("n-lados").value))) {
            const lado = eval(document.getElementById("lado").value);
            const n_lados = eval(document.getElementById("n-lados").value);
            document.getElementById("formula-resultado-pap").innerHTML = n_lados + "*" + n_lados + ": <u>" + redondear_numero(lado * n_lados) + "</u>";
        }
        else {//mensaje error()

        }
    }
    function resolver_area_poligono_regular() {
        if (!isNaN(eval(document.getElementById("lado").value)) && !isNaN(eval(document.getElementById("n-lados").value)) && !isNaN(eval(document.getElementById("apotema").value))) {
            const lado = eval(document.getElementById("lado").value);
            const n_lados = eval(document.getElementById("n-lados").value);
            const apotema = eval(document.getElementById("apotema").value);
            document.getElementById("formula-resultado-pap").innerHTML = "((" + lado + "*" + n_lados + ")/2)*" + apotema + " : <u>" + redondear_numero(((lado * n_lados) / 2) * apotema) + "</u>";
        }
        else {//mensaje error()

        }
    }
}