function mostrar_calcular_datos(opcion){
    document.getElementById("body").innerHTML="<div class='indice-herramientas'><svg class='flecha-volver-herramientas' xmlns='http://www.w3.org/2000/svg' version='1.0' width='90.000000pt' height='90.000000pt' viewBox='0 0 90.000000 90.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,90.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path style='cursor: pointer;'onclick='abrir_menu_herramientas()' d='M113 548 c-46 -46 -83 -90 -83 -98 0 -25 165 -183 186 -178 37 7 27 39 -27 94 l-53 54 364 2 365 3 0 25 0 25 -365 3 -364 2 53 54 c55 56 64 88 26 94 -14 2 -46 -23 -102 -80z'/></g></svg><select class='herramaientas-select-calcular-datos'><option value='Calcular IMC'onclick='mostrar_calcular_datos_herramienta(1)'>IMC</option><option value='calcular Carbono 14'onclick='mostrar_calcular_datos_herramienta(2)'>Carbono 14</option></select></div><div id='div-body'></div>";
    mostrar_calcular_datos_herramienta(opcion);
}
function mostrar_calcular_datos_herramienta(opcion){
    if(opcion==1){//IMC
        document.getElementById("div-body").innerHTML="<input type='number' onfocus='this.select()'class='herramientas-calcular-imc-peso'id='peso'class='herramientas-calcular-imc'value=''placeholder='P(Kg)'title='Peso (Kg)'><input type='number' onfocus='this.select()'title='Altura (m)'class='herramientas-calcular-imc-altura'id='altura'class='herramientas-input-calculos-datos'value=''placeholder='Al(m)'><div id='div-herramientas-calculos-poligonos-bt-calcular'class='div-herramientas-calculos-poligonos-bt-calcular'><input type='button'onclick='calcular_imc()'value='Calcular'class='herramientas-bt-calcular-imc'></div><h3 id='imc'class='resultado-calcular-imc'></h3><h3 class='resultado-calcular-imc-estado'id='estado'></h3>";
            //solo numeros?
            if(herramientas_solo_numeros_inputs){
                document.getElementById("peso").type="number";
                document.getElementById("peso").title="Peso (números)";
                document.getElementById("altura").type="number";
                document.getElementById("altura").title="Altura (números)";
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
        document.getElementById("peso").style.height=tamaño_height+"px";
        document.getElementById("altura").style.height=tamaño_height+"px";
        tamaño_height=4;
        tamaño_height=tamaño_y_pantalla*(tamaño_height/100);
        if(tamaño_height<20){
            tamaño_height=20;
        }
        else if(tamaño_height>75){
            tamaño_height=75;
        }
        document.getElementById("div-herramientas-calculos-poligonos-bt-calcular").style.height=tamaño_height+"px";
        document.getElementById("peso").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                calcular_imc();
            }
        });
        document.getElementById("altura").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                calcular_imc();
            }
        });
    }
    if(opcion==2){//carbono 14
        document.getElementById("div-body").innerHTML="<input type='number'title='Antigüedad (numero)'onfocus='this.select()' class='herramientas-calcular-carbono14-antiguedad'value=''id='antiguedad'placeholder='Años'><input type='number'title='% elemento padre (numeros)'onfocus='this.select()' class='herramientas-calcular-carbono14-elemento-pai'value=''id='elemento-pai'placeholder='N(%)'><input type='number'class='herramientas-calcular-carbono14-elemento-fillo'onfocus='this.select()'title='% elemento hijo (numero)' value=''id='elemento-fillo'placeholder='C(%)'><div id='div-herramientas-calculos-poligonos-bt-calcular'class='div-herramientas-calculos-carbono14'><input type='button'onclick='calcular_carbono14()'value='Calcular'class='herramientas-bt-calcular-carbono14'></div><h3 class='resultado-antiguedade-calcular-carbono14'id='resultado-antiduedade'></h3><h3 class='resultado-pai-calcular-carbono14'id='resultado-porcentaje-pai'></h3><h3 class='resultado-fillo-calcular-carbono14'id='resultado-porcentaje-fillo'></h3>";
            //solo numeros?
            if(herramientas_solo_numeros_inputs){
                document.getElementById("antiguedad").type="number";
                document.getElementById("antiguedad").title="Antigüedad (números)";
                document.getElementById("elemento-pai").type="number";
                document.getElementById("elemento-pai").title="% elemento padre (números)";
                document.getElementById("elemento-fillo").type="number";
                document.getElementById("elemento-fillo").title="% elemento hijo (números)";
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
        document.getElementById("antiguedad").style.height=tamaño_height+"px";
        document.getElementById("elemento-fillo").style.height=tamaño_height+"px";
        document.getElementById("elemento-pai").style.height=tamaño_height+"px";
        tamaño_height=4;
        tamaño_height=tamaño_y_pantalla*(tamaño_height/100);
        if(tamaño_height<20){
            tamaño_height=20;
        }
        else if(tamaño_height>75){
            tamaño_height=75;
        }
        document.getElementById("div-herramientas-calculos-poligonos-bt-calcular").style.height=tamaño_height+"px";
        document.getElementById("antiguedad").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                calcular_carbono14();
            }
        });
        document.getElementById("elemento-fillo").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                calcular_carbono14();
            }
        });
        document.getElementById("elemento-pai").addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {//aceptar
                calcular_carbono14();
            }
        });
    }
}
//calcular datos
function calcular_imc(){
    if(!isNaN(Number(document.getElementById("peso").value)) && !isNaN(Number(document.getElementById("altura").value))){
        const peso=Number(document.getElementById("peso").value.replaceAll(",","."));
        const altura= Number((document.getElementById("altura").value.replaceAll(",",".")) * (document.getElementById("altura").value.replaceAll(",",".")));
        if(peso>0 && altura>0){
            const imc=peso/altura;
            document.getElementById("imc").innerHTML="IMC: <u style='color:rgb(14, 183, 172);'>"+imc.toFixed(3)+"</u>";
            //mostrar si esta gordo, flaco...
            if(imc<18.5){//peso bajo
                document.getElementById("estado").style.color="#e6c70a";
                document.getElementById("estado").innerHTML="Peso bajo: ";
                if(imc<16){//delgadez severa
                    document.getElementById("estado").innerHTML+="<a style='color:#c82700;'>Delgadez severa</a>";
                }
                else if(imc<17 && imc>=16){//delgadez moderada
                    document.getElementById("estado").innerHTML+="<a style='color: #c87500;'>Delgadez moderada</a>";
                }
                else if(imc>=17 && imc<18.5){//delgadez aceptable
                    document.getElementById("estado").innerHTML+="<a style='color:  #c89c00 ;'>Delgadez aceptable</a>";
                }
            }
            else if(imc>=18.5 && imc<25){//peso normal
                document.getElementById("estado").style.color="#0db000";
                document.getElementById("estado").innerHTML="Peso normal: ";
                if(imc>=18.5 && imc<20){//mormal flaco
                    document.getElementById("estado").innerHTML+="<a style='color:  #72b900 ;'>Delgado-Estable</a>";
                }
                else if(imc>=20 && imc<23){//normal estable
                    document.getElementById("estado").innerHTML+="<a style='color:#0db000;'>Estable</a>";
                }
                else if(imc>=23 && imc<25){//normal sobrepeso
                    document.getElementById("estado").innerHTML+="<a style='color:  #72b900 ;'>Estable-sobrepeso</a>";
                }
            }
            else if(imc>=25 && imc<30){//sobrepeso
                document.getElementById("estado").style.color="  #cc5800  ";
                document.getElementById("estado").innerHTML="Sobrepeso: ";
                if(imc>=25 && imc<26.5){//normal
                    document.getElementById("estado").innerHTML+="<a style='color:   #d99000  ;'>posible riesgo de obesidad</a>";
                }
                else if(imc>=26.5 && imc<28.5){//sobrepeso
                    document.getElementById("estado").innerHTML+="<a style='color: #cc5800 ;'>riesgo de obesidad</a>";
                }
                else if(imc>=28.5 && imc<30){//obeso
                    document.getElementById("estado").innerHTML+="<a style='color:   #e24200  ;'>grande riesgo de obesidad</a>";
                }
            }
            else if(imc>=30){//obesidad
                document.getElementById("estado").style.color="   #e93200   ";
                document.getElementById("estado").innerHTML="Sobrepeso: ";
                if(imc>=30 && imc<35){//riesgo modearado
                    document.getElementById("estado").innerHTML+="<a style='color:   #e94400   ;'>Obeso tipo I(riesgo moderado)</a>";
                }
                else if(imc>=35&& imc<40){
                    document.getElementById("estado").innerHTML+="<a style='color:  #e93200  ;'>Obeso tipo II(riesgo severo)</</a>";
                }
                else if(imc>=40){//obeso
                    document.getElementById("estado").innerHTML+="<a style='color:    #d42900   ;'>Obeso tipo III(riesgo muy severo)</</a>";
                }
            }
            else{
                document.getElementById("estado").style.color="   #003be2 ";
                document.getElementById("estado").innerHTML="?";
            }
        }
        else{//mostrar mensaje error
        }
    }
    else{//mostrar mensaje error

    }
}
function calcular_carbono14(){
    let antiguedad=document.getElementById("antiguedad").value;
        antiguedad=antiguedad.replaceAll(" ","");
    let elemento_pai=document.getElementById("elemento-pai").value;
        elemento_pai=elemento_pai.replaceAll(" ","");
    let elemento_fillo=document.getElementById("elemento-fillo").value;
        elemento_fillo=elemento_fillo.replaceAll(" ","");
    if(antiguedad!="" && ((elemento_pai=="" && elemento_fillo=="")||(elemento_pai=="" && elemento_fillo!="") || (elemento_pai!="" && elemento_fillo==""))){//temos a antiguedade(falta un dato)
        antiguedad=Number(antiguedad);
        elemento_pai=Number(elemento_pai);
        elemento_fillo=Number(elemento_fillo);
        let veces_dividir=Math.floor(antiguedad/5730);
        let porcentaje_pai_resultado;
        let veces_dividir_años_demas=0;
        let años_demas=0;

        let resto_division=antiguedad%5730;
        if(elemento_pai=="" && elemento_fillo==""){
            porcentaje_pai_resultado=100;
        }
        else if(elemento_pai=="" && (elemento_fillo!="" && elemento_fillo>0 && elemento_fillo<=100)){
            porcentaje_pai_resultado=Math.abs(100-elemento_fillo);
            let numero_porcentaje=porcentaje_pai_resultado;
            let terminado=false;
            while(terminado==false){
                veces_dividir_años_demas++;
                let numero_porcentaje=100;
                for(let i=0;i<veces_dividir_años_demas;i++){
                    numero_porcentaje=numero_porcentaje/2;
                }
                if(numero_porcentaje==porcentaje_pai_resultado){
                    terminado=true;
                }
                else if(numero_porcentaje<porcentaje_pai_resultado){
                    años_demas=((100-porcentaje_pai_resultado)*5730)/numero_porcentaje;
                    terminado=true;
                    veces_dividir_años_demas--;
                }
            }
        antiguedad=antiguedad+(veces_dividir_años_demas*5730)+(años_demas);
    
        }
        else if(elemento_pai=="" && (elemento_fillo!="" && ( elemento_fillo<0 || elemento_fillo>100))){
            porcentaje_pai_resultado=100;
        }
        else if(elemento_pai<0 || elemento_pai>100){
            porcentaje_pai_resultado=100;
            elemento_pai=document.getElementById("elemento-pai").value=100;
        }
        else{
            porcentaje_pai_resultado=elemento_pai;
            let numero_porcentaje=porcentaje_pai_resultado;
            let terminado=false;
            while(terminado==false){
                veces_dividir_años_demas++;
                let numero_porcentaje=100;
                for(let i=0;i<veces_dividir_años_demas;i++){
                    numero_porcentaje=numero_porcentaje/2;
                }
                if(numero_porcentaje==porcentaje_pai_resultado){
                    terminado=true;
                }
                else if(numero_porcentaje<porcentaje_pai_resultado){
                    años_demas=((100-porcentaje_pai_resultado)*5730)/numero_porcentaje;
                    terminado=true;
                    veces_dividir_años_demas--;
                }
            }
        antiguedad=antiguedad+(veces_dividir_años_demas*5730)+(años_demas);
        }
            for(let i=0;i<veces_dividir;i++){
                porcentaje_pai_resultado=porcentaje_pai_resultado/2;
            }
        resto_division=resto_division*2;
        resto_division=resto_division/5730;
            if(resto_division!=0){
                porcentaje_pai_resultado=porcentaje_pai_resultado/resto_division;
            }
            else{}
        //mostrar en pantalla
            if(antiguedad<=60000){//menor a 60.000 años (puede datarse con carbono 14)
                document.getElementById("resultado-antiduedade").innerHTML="Antigüedad: <u>"+redondear_numero(antiguedad)+"</u> <sub style='font-size:10px;'>(años)</sub>";
                document.getElementById("resultado-porcentaje-pai").innerHTML="% elemento padre: <u>"+redondear_numero(porcentaje_pai_resultado)+"</u><sub style='font-size:10px;'>(%)</sub>";
                document.getElementById("resultado-porcentaje-fillo").innerHTML="% elemento hijo: <u>"+redondear_numero((100-porcentaje_pai_resultado))+"</u><sub style='font-size:10px;'>(%)</sub>";
            }
            else{//maior a 60.000 años (no debe datarse con carbono 14)
                document.getElementById("resultado-antiduedade").innerHTML="<a style='color:red;'>Antigüedad: <u>"+redondear_numero(antiguedad)+"</u> <sub style='font-size:10px;'>(años)</sub> (mucha antigüedad)</a>";
                document.getElementById("resultado-porcentaje-pai").innerHTML="<a style='color:red;'>% elemento padre: <u>"+redondear_numero(porcentaje_pai_resultado)+"</u><sub style='font-size:10px;'>(%)</sub></a>";
                document.getElementById("resultado-porcentaje-fillo").innerHTML="<a style='color:red;'>% elemento hijo: <u>"+redondear_numero((100-porcentaje_pai_resultado))+"</u><sub style='font-size:10px;'>(%)</sub></a>";
            }
    }
    else if(elemento_pai!="" && ((antiguedad=="" && elemento_fillo=="")||(antiguedad=="" && elemento_fillo!="") || (antiguedad!="" && elemento_fillo==""))){//temos o porcentaxe de elemento pai (falta un dato)
        antiguedad=Number(antiguedad);
        elemento_pai=Number(elemento_pai);
        elemento_fillo=Number(elemento_fillo);
            
        let terminado=false;
        let veces_dividir=0;
        let años_demas=0;
        while(terminado==false){
            veces_dividir++;
            let numero_porcentaje=100;
            for(let i=0;i<veces_dividir;i++){
                numero_porcentaje=numero_porcentaje/2;
            }
            if(numero_porcentaje==elemento_pai){
                terminado=true;
            }
            else if(numero_porcentaje<elemento_pai){
                años_demas=((100-elemento_pai)*5730)/numero_porcentaje;
                terminado=true;
                veces_dividir--;
            }
        }
            terminado=null;
        antiguedad=(veces_dividir*5730)+años_demas;
        //mostrar en pantalla
        if(antiguedad<=60000){//menor a 60.000 años (puede datarse con carbono 14)
            document.getElementById("resultado-antiduedade").innerHTML="Antigüedad: <u>"+redondear_numero(antiguedad)+"</u> <sub style='font-size:10px;'>(años)</sub>";
            document.getElementById("resultado-porcentaje-pai").innerHTML="% elemento padre: <u>"+redondear_numero(elemento_pai)+"</u><sub style='font-size:10px;'>(%)</sub>";
            document.getElementById("resultado-porcentaje-fillo").innerHTML="% elemento hijo: <u>"+redondear_numero((100-elemento_pai))+"</u><sub style='font-size:10px;'>(%)</sub>";
        }
        else{//maior a 60.000 años (no debe datarse con carbono 14)
            document.getElementById("resultado-antiduedade").innerHTML="<a style='color:red;'>Antigüedad: <u>"+redondear_numero(antiguedad)+"</u> <sub style='font-size:10px;'>(años)</sub> (mucha antigüedad)</a>";
            document.getElementById("resultado-porcentaje-pai").innerHTML="<a style='color:red;'>% elemento padre: <u>"+redondear_numero(elemento_pai)+"</u><sub style='font-size:10px;'>(%)</sub></a>";
            document.getElementById("resultado-porcentaje-fillo").innerHTML="<a style='color:red;'>% elemento hijo: <u>"+redondear_numero((100-elemento_pai))+"</u><sub style='font-size:10px;'>(%)</sub></a>";
        }
    }
    else if(elemento_fillo!="" && ((antiguedad=="" && elemento_pai=="")||(antiguedad=="" && elemento_pai!="") || (antiguedad!="" && elemento_pai==""))){//temos o porcentaxe de elemento fillo (falta un dato)
        antiguedad=Number(antiguedad);
        elemento_pai=Number(elemento_pai);
        elemento_fillo=Number(elemento_fillo);
        elemento_pai=100-elemento_fillo;
        let terminado=false;
        let veces_dividir=0;
        let años_demas=0;
        while(terminado==false){
            veces_dividir++;
            let numero_porcentaje=100;
            for(let i=0;i<veces_dividir;i++){
                numero_porcentaje=numero_porcentaje/2;
            }
            if(numero_porcentaje==elemento_pai){
                terminado=true;
            }
            else if(numero_porcentaje<elemento_pai){
                años_demas=((100-elemento_pai)*5730)/numero_porcentaje;
                terminado=true;
                veces_dividir--;
            }
        }
            terminado=null;
        antiguedad=(veces_dividir*5730)+años_demas;
        //mostrar en pantalla
        if(antiguedad<=60000){//menor a 60.000 años (puede datarse con carbono 14)
            document.getElementById("resultado-antiduedade").innerHTML="Antigüedad: <u>"+redondear_numero(antiguedad)+"</u> <sub style='font-size:10px;'>(años)</sub>";
            document.getElementById("resultado-porcentaje-pai").innerHTML="% elemento padre: <u>"+redondear_numero(elemento_pai)+"</u><sub style='font-size:10px;'>(%)</sub>";
            document.getElementById("resultado-porcentaje-fillo").innerHTML="% elemento hijo: <u>"+redondear_numero((100-elemento_pai))+"</u><sub style='font-size:10px;'>(%)</sub>";
        }
        else{//maior a 60.000 años (no debe datarse con carbono 14)
            document.getElementById("resultado-antiduedade").innerHTML="<a style='color:red;'>Antigüedad: <u>"+redondear_numero(antiguedad)+"</u> <sub style='font-size:10px;'>(años)</sub> (mucha antigüedad)</a>";
            document.getElementById("resultado-porcentaje-pai").innerHTML="<a style='color:red;'>Porcentaje elemento padre: <u>"+redondear_numero(elemento_pai)+"</u><sub style='font-size:10px;'>(%)</sub></a>";
            document.getElementById("resultado-porcentaje-fillo").innerHTML="<a style='color:red;'>Porcentaje elemento hijo: <u>"+redondear_numero((100-elemento_pai))+"</u><sub style='font-size:10px;'>(%)</sub></a>";
        }
    }
    else{//mensaje error()

    }
}
