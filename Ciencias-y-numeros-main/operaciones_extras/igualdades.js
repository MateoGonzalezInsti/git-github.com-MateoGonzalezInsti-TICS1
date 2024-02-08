function crear_operacion_igualdad(){
    if(Math.floor(Math.random()*2+1)==1){//igualdad
    let numero1;
    let numero2;
    let parentesis1;
    let parentesis2;
    let resultado="";
    let resultado_corregido="";
    let operacion_tocada="";
    let fraccion1=[];
    let fraccion2=[];
        //elegir parentesis
        if(Math.floor(Math.random()*2+1)==1){
            parentesis1="[";
            parentesis2="]";
        }
        else{
            parentesis1="(";
            parentesis2=")";
        }
    //elegir numeros
    if(dificultad<=3){
        numero1=Math.floor(Math.random()*10+0);
        numero2=Math.floor(Math.random()*10+0);
            //corregir
            resultado_corregido=parentesis1;
            resultado_corregido=resultado_corregido+(numero1+numero2);
            resultado_corregido=resultado_corregido+",";
            resultado_corregido=resultado_corregido+(numero1-numero2);
            resultado_corregido=resultado_corregido+parentesis2;

                        resultado=parentesis1;
                        resultado=resultado+(numero1+numero2);
                        resultado=resultado+",";
                        resultado=resultado+(numero1-numero2);
                        resultado=resultado+parentesis2;
    }
    else if(dificultad>3 && dificultad<=6){
        if(Math.floor(Math.random()*4+1)==1){//fracción
            if(Math.floor(Math.random()*3+1)==1){//negativo
                fraccion1.push(Math.floor(Math.random()*15+0));
            }
            else{
                fraccion1.push(Math.floor(Math.random()*15+0));
            }
            if(Math.floor(Math.random()*3+1)==1){//negativo
                fraccion1.push(Math.floor(Math.random()*15+1));
            }
            else{
                fraccion1.push(Math.floor(Math.random()*15+1));
            }
        }
        else{
            if(Math.floor(Math.random()*3+1)==1){//negativo
                fraccion1.push("-"+Math.floor(Math.random()*15+0));
                fraccion1.push(1);
            }
            else{
                fraccion1.push(Math.floor(Math.random()*15+0));
                fraccion1.push(1);
            }
        }
        resultado=resultado+",";
        if(Math.floor(Math.random()*4+1)==1){//fracción
            if(Math.floor(Math.random()*3+1)==1){//negativo
                fraccion2.push(Math.floor(Math.random()*15+0));
            }
            else{
                fraccion2.push(Math.floor(Math.random()*15+0));
            }
            if(Math.floor(Math.random()*3+1)==1){//negativo
                fraccion2.push(Math.floor(Math.random()*15+1));
            }
            else{
                fraccion2.push(Math.floor(Math.random()*15+1));
            }
        }
        else{
            if(Math.floor(Math.random()*3+1)==1){//negativo
                fraccion2.push("-"+Math.floor(Math.random()*15+0));
                fraccion2.push(1);
            }
            else{
                fraccion2.push(Math.floor(Math.random()*15+0));
                fraccion2.push(1);
            }
        }
            //corregir (siemnpre estan en fracciones)
            if(fraccion1[1]==fraccion2[1]){//denominadores iguales
                numero1=fraccion1[0];
                numero2=fraccion2[0];
                    resultado_corregido=parentesis1;
                    resultado_corregido=resultado_corregido+(fraccion1[0]+fraccion2[0])+"/"+fraccion1[1];
                    resultado_corregido=resultado_corregido+",";
                    resultado_corregido=resultado_corregido+(fraccion1[0]-fraccion2[0])+"/"+fraccion1[1];
                    resultado_corregido=resultado_corregido+parentesis2;
                    resultado=parentesis1;
                    if(fraccion1[1]==1){//no poner denominador
                        resultado=resultado+(fraccion1[0]+fraccion2[0]);
                    }
                    else{
                        resultado=resultado+"<sup>"+(fraccion1[0]+fraccion2[0])+"</sup>/<sub>"+fraccion1[1]+"</sub>";
                    }
                    resultado=resultado+",";
                    if(fraccion2[1]==1){//no poner denominador
                        resultado=resultado+(fraccion1[0]-fraccion2[0]);
                    }
                    else{
                        resultado=resultado+"<sup>"+(fraccion1[0]-fraccion2[0])+"</sup>/<sub>"+fraccion1[1]+"</sub>";
                    }
                    resultado=resultado+parentesis2;
            }
            else{
                numero1="<sup>"+fraccion1[0]+"</sup>/<sub>"+fraccion1[1]+"</sub>";
                numero2="<sup>"+fraccion2[0]+"</sup>/<sub>"+fraccion2[1]+"</sub>";
                let terminado=false;
                //reducir fracción 1
                while(terminado==false){
                    if(fraccion1[0]%2==0 && fraccion1[1]%2==0){//reducir francion /2
                        fraccion1[0]=fraccion1[0]/2;
                        fraccion1[1]=fraccion1[1]/2;
                    }
                    else if(fraccion1[0]%3==0 && fraccion1[1]%3==0){//reducir francion /3
                        fraccion1[0]=fraccion1[0]/3;
                        fraccion1[1]=fraccion1[1]/3;
                    }
                    else if(fraccion1[0]%5==0 && fraccion1[1]%5==0){//reducir francion /5
                        fraccion1[0]=fraccion1[0]/5;
                        fraccion1[1]=fraccion1[1]/5;
                    }
                    else if(fraccion1[0]%7==0 && fraccion1[1]%7==0){//reducir francion /7
                        fraccion1[0]=fraccion1[0]/7;
                        fraccion1[1]=fraccion1[1]/7;
                    }
                    else if(fraccion1[0]%11==0 && fraccion1[1]%11==0){//reducir francion /11
                        fraccion1[0]=fraccion1[0]/11;
                        fraccion1[1]=fraccion1[1]/11;
                    }
                    else if(fraccion1[0]%13==0 && fraccion1[1]%13==0){//reducir francion /13
                        fraccion1[0]=fraccion1[0]/13;
                        fraccion1[1]=fraccion1[1]/13;
                    }
                    else if(fraccion1[0]%17==0 && fraccion1[1]%17==0){//reducir francion /17
                        fraccion1[0]=fraccion1[0]/17;
                        fraccion1[1]=fraccion1[1]/17;
                    }
                    else if(fraccion1[0]%23==0 && fraccion1[1]%23==0){//reducir francion /23
                        fraccion1[0]=fraccion1[0]/23;
                        fraccion1[1]=fraccion1[1]/23;
                    }
                    else{
                        terminado=true;
                    }
                }
                //reducir fracción 2
                terminado=false;
                while(terminado==false){
                    if(fraccion2[0]%2==0 && fraccion2[1]%2==0){//reducir francion /2
                        fraccion2[0]=fraccion2[0]/2;
                        fraccion2[1]=fraccion2[1]/2;
                    }
                    else if(fraccion2[0]%3==0 && fraccion2[1]%3==0){//reducir francion /3
                        fraccion2[0]=fraccion2[0]/3;
                        fraccion2[1]=fraccion2[1]/3;
                    }
                    else if(fraccion2[0]%5==0 && fraccion2[1]%5==0){//reducir francion /5
                        fraccion2[0]=fraccion2[0]/5;
                        fraccion2[1]=fraccion2[1]/5;
                    }
                    else if(fraccion2[0]%7==0 && fraccion2[1]%7==0){//reducir francion /7
                        fraccion2[0]=fraccion2[0]/7;
                        fraccion2[1]=fraccion2[1]/7;
                    }
                    else if(fraccion2[0]%11==0 && fraccion2[1]%11==0){//reducir francion /11
                        fraccion2[0]=fraccion2[0]/11;
                        fraccion2[1]=fraccion2[1]/11;
                    }
                    else if(fraccion2[0]%13==0 && fraccion2[1]%13==0){//reducir francion /13
                        fraccion2[0]=fraccion2[0]/13;
                        fraccion2[1]=fraccion2[1]/13;
                    }
                    else if(fraccion2[0]%17==0 && fraccion2[1]%17==0){//reducir francion /17
                        fraccion2[0]=fraccion2[0]/17;
                        fraccion2[1]=fraccion2[1]/17;
                    }
                    else if(fraccion2[0]%23==0 && fraccion2[1]%23==0){//reducir francion /23
                        fraccion2[0]=fraccion2[0]/23;
                        fraccion2[1]=fraccion2[1]/23;
                    }
                    else{
                        terminado=true;
                    }
                }
                    fraccion1[0]=fraccion1[0]*fraccion2[1];
                    fraccion1[1]=fraccion1[1]*fraccion2[1];
                    fraccion2[0]=fraccion2[0]*fraccion1[1];
                    fraccion2[1]=fraccion2[1]*fraccion1[1];
                    //reducir fracción 1
                    while(terminado==false){
                        if(fraccion1[0]%2==0 && fraccion1[1]%2==0){//reducir francion /2
                            fraccion1[0]=fraccion1[0]/2;
                            fraccion1[1]=fraccion1[1]/2;
                        }
                        else if(fraccion1[0]%3==0 && fraccion1[1]%3==0){//reducir francion /3
                            fraccion1[0]=fraccion1[0]/3;
                            fraccion1[1]=fraccion1[1]/3;
                        }
                        else if(fraccion1[0]%5==0 && fraccion1[1]%5==0){//reducir francion /5
                            fraccion1[0]=fraccion1[0]/5;
                            fraccion1[1]=fraccion1[1]/5;
                        }
                        else if(fraccion1[0]%7==0 && fraccion1[1]%7==0){//reducir francion /7
                            fraccion1[0]=fraccion1[0]/7;
                            fraccion1[1]=fraccion1[1]/7;
                        }
                        else if(fraccion1[0]%11==0 && fraccion1[1]%11==0){//reducir francion /11
                            fraccion1[0]=fraccion1[0]/11;
                            fraccion1[1]=fraccion1[1]/11;
                        }
                        else if(fraccion1[0]%13==0 && fraccion1[1]%13==0){//reducir francion /13
                            fraccion1[0]=fraccion1[0]/13;
                            fraccion1[1]=fraccion1[1]/13;
                        }
                        else if(fraccion1[0]%17==0 && fraccion1[1]%17==0){//reducir francion /17
                            fraccion1[0]=fraccion1[0]/17;
                            fraccion1[1]=fraccion1[1]/17;
                        }
                        else if(fraccion1[0]%23==0 && fraccion1[1]%23==0){//reducir francion /23
                            fraccion1[0]=fraccion1[0]/23;
                            fraccion1[1]=fraccion1[1]/23;
                        }
                        else{
                            terminado=true;
                        }
                    }
                    //reducir fracción 2
                    terminado=false;
                    while(terminado==false){
                        if(fraccion2[0]%2==0 && fraccion2[1]%2==0){//reducir francion /2
                            fraccion2[0]=fraccion2[0]/2;
                            fraccion2[1]=fraccion2[1]/2;
                        }
                        else if(fraccion2[0]%3==0 && fraccion2[1]%3==0){//reducir francion /3
                            fraccion2[0]=fraccion2[0]/3;
                            fraccion2[1]=fraccion2[1]/3;
                        }
                        else if(fraccion2[0]%5==0 && fraccion2[1]%5==0){//reducir francion /5
                            fraccion2[0]=fraccion2[0]/5;
                            fraccion2[1]=fraccion2[1]/5;
                        }
                        else if(fraccion2[0]%7==0 && fraccion2[1]%7==0){//reducir francion /7
                            fraccion2[0]=fraccion2[0]/7;
                            fraccion2[1]=fraccion2[1]/7;
                        }
                        else if(fraccion2[0]%11==0 && fraccion2[1]%11==0){//reducir francion /11
                            fraccion2[0]=fraccion2[0]/11;
                            fraccion2[1]=fraccion2[1]/11;
                        }
                        else if(fraccion2[0]%13==0 && fraccion2[1]%13==0){//reducir francion /13
                            fraccion2[0]=fraccion2[0]/13;
                            fraccion2[1]=fraccion2[1]/13;
                        }
                        else if(fraccion2[0]%17==0 && fraccion2[1]%17==0){//reducir francion /17
                            fraccion2[0]=fraccion2[0]/17;
                            fraccion2[1]=fraccion2[1]/17;
                        }
                        else if(fraccion2[0]%23==0 && fraccion2[1]%23==0){//reducir francion /23
                            fraccion2[0]=fraccion2[0]/23;
                            fraccion2[1]=fraccion2[1]/23;
                        }
                        else{
                            terminado=true;
                        }
                    }
                    resultado_corregido=parentesis1;
                    resultado_corregido=resultado_corregido+(fraccion1[0]+fraccion2[0])+"/"+fraccion1[1];
                    resultado_corregido=resultado_corregido+",";
                    resultado_corregido=resultado_corregido+(fraccion1[0]-fraccion2[0])+"/"+fraccion1[1];
                    resultado_corregido=resultado_corregido+parentesis2;

                    resultado=parentesis1;
                    if(fraccion1[1]==1){//no poner denominador
                        resultado=resultado+(fraccion1[0]+fraccion2[0]);
                    }
                    else{
                        resultado=resultado+"<sup>"+(fraccion1[0]+fraccion2[0])+"</sup>/<sub>"+fraccion1[1]+"</sub>";
                    }
                    resultado=resultado+",";
                    if(fraccion2[1]==1){//no poner denominador
                        resultado=resultado+(fraccion1[0]-fraccion2[0]);
                    }
                    else{
                        resultado=resultado+"<sup>"+(fraccion1[0]-fraccion2[0])+"</sup>/<sub>"+fraccion1[1]+"</sub>";
                    }
                    resultado=resultado+parentesis2;
            }
    }
    else if(dificultad>6 && dificultad<=9){
        if(Math.floor(Math.random()*4+1)==1){//fracción
            if(Math.floor(Math.random()*2+1)==1){//negativo
                fraccion1.push(Math.floor(Math.random()*20+0));
            }
            else{
                fraccion1.push(Math.floor(Math.random()*20+0));
            }
            if(Math.floor(Math.random()*2+1)==1){//negativo
                fraccion1.push(Math.floor(Math.random()*20+1));
            }
            else{
                fraccion1.push(Math.floor(Math.random()*20+1));
            }
        }
        else{
            if(Math.floor(Math.random()*2+1)==1){//negativo
                fraccion1.push("-"+Math.floor(Math.random()*20+0));
                fraccion1.push(1);
            }
            else{
                fraccion1.push(Math.floor(Math.random()*20+0));
                fraccion1.push(1);
            }
        }
        resultado=resultado+",";
        if(Math.floor(Math.random()*4+1)==1){//fracción
            if(Math.floor(Math.random()*2+1)==1){//negativo
                fraccion2.push(Math.floor(Math.random()*20+0));
            }
            else{
                fraccion2.push(Math.floor(Math.random()*20+0));
            }
            if(Math.floor(Math.random()*2+1)==1){//negativo
                fraccion2.push(Math.floor(Math.random()*20+1));
            }
            else{
                fraccion2.push(Math.floor(Math.random()*20+1));
            }
        }
        else{
            if(Math.floor(Math.random()*2+1)==1){//negativo
                fraccion2.push("-"+Math.floor(Math.random()*20+0));
                fraccion2.push(1);
            }
            else{
                fraccion2.push(Math.floor(Math.random()*20+0));
                fraccion2.push(1);
            }
        }
            //corregir (siemnpre estan en fracciones)
            if(fraccion1[1]==fraccion2[1]){//denominadores iguales
                numero1=fraccion1[0];
                numero2=fraccion2[0];
                    resultado_corregido=parentesis1;
                    resultado_corregido=resultado_corregido+(fraccion1[0]+fraccion2[0])+"/"+fraccion1[1];
                    resultado_corregido=resultado_corregido+",";
                    resultado_corregido=resultado_corregido+(fraccion1[0]-fraccion2[0])+"/"+fraccion1[1];
                    resultado_corregido=resultado_corregido+parentesis2;
                    resultado=parentesis1;
                    if(fraccion1[1]==1){//no poner denominador
                        resultado=resultado+(fraccion1[0]+fraccion2[0]);
                    }
                    else{
                        resultado=resultado+"<sup>"+(fraccion1[0]+fraccion2[0])+"</sup>/<sub>"+fraccion1[1]+"</sub>";
                    }
                    resultado=resultado+",";
                    if(fraccion2[1]==1){//no poner denominador
                        resultado=resultado+(fraccion1[0]-fraccion2[0]);
                    }
                    else{
                        resultado=resultado+"<sup>"+(fraccion1[0]-fraccion2[0])+"</sup>/<sub>"+fraccion1[1]+"</sub>";
                    }
                    resultado=resultado+parentesis2;
            }
            else{
                numero1="<sup>"+fraccion1[0]+"</sup>/<sub>"+fraccion1[1]+"</sub>";
                numero2="<sup>"+fraccion2[0]+"</sup>/<sub>"+fraccion2[1]+"</sub>";
                let terminado=false;
                //reducir fracción 1
                while(terminado==false){
                    if(fraccion1[0]%2==0 && fraccion1[1]%2==0){//reducir francion /2
                        fraccion1[0]=fraccion1[0]/2;
                        fraccion1[1]=fraccion1[1]/2;
                    }
                    else if(fraccion1[0]%3==0 && fraccion1[1]%3==0){//reducir francion /3
                        fraccion1[0]=fraccion1[0]/3;
                        fraccion1[1]=fraccion1[1]/3;
                    }
                    else if(fraccion1[0]%5==0 && fraccion1[1]%5==0){//reducir francion /5
                        fraccion1[0]=fraccion1[0]/5;
                        fraccion1[1]=fraccion1[1]/5;
                    }
                    else if(fraccion1[0]%7==0 && fraccion1[1]%7==0){//reducir francion /7
                        fraccion1[0]=fraccion1[0]/7;
                        fraccion1[1]=fraccion1[1]/7;
                    }
                    else if(fraccion1[0]%11==0 && fraccion1[1]%11==0){//reducir francion /11
                        fraccion1[0]=fraccion1[0]/11;
                        fraccion1[1]=fraccion1[1]/11;
                    }
                    else if(fraccion1[0]%13==0 && fraccion1[1]%13==0){//reducir francion /13
                        fraccion1[0]=fraccion1[0]/13;
                        fraccion1[1]=fraccion1[1]/13;
                    }
                    else if(fraccion1[0]%17==0 && fraccion1[1]%17==0){//reducir francion /17
                        fraccion1[0]=fraccion1[0]/17;
                        fraccion1[1]=fraccion1[1]/17;
                    }
                    else if(fraccion1[0]%23==0 && fraccion1[1]%23==0){//reducir francion /23
                        fraccion1[0]=fraccion1[0]/23;
                        fraccion1[1]=fraccion1[1]/23;
                    }
                    else{
                        terminado=true;
                    }
                }
                //reducir fracción 2
                terminado=false;
                while(terminado==false){
                    if(fraccion2[0]%2==0 && fraccion2[1]%2==0){//reducir francion /2
                        fraccion2[0]=fraccion2[0]/2;
                        fraccion2[1]=fraccion2[1]/2;
                    }
                    else if(fraccion2[0]%3==0 && fraccion2[1]%3==0){//reducir francion /3
                        fraccion2[0]=fraccion2[0]/3;
                        fraccion2[1]=fraccion2[1]/3;
                    }
                    else if(fraccion2[0]%5==0 && fraccion2[1]%5==0){//reducir francion /5
                        fraccion2[0]=fraccion2[0]/5;
                        fraccion2[1]=fraccion2[1]/5;
                    }
                    else if(fraccion2[0]%7==0 && fraccion2[1]%7==0){//reducir francion /7
                        fraccion2[0]=fraccion2[0]/7;
                        fraccion2[1]=fraccion2[1]/7;
                    }
                    else if(fraccion2[0]%11==0 && fraccion2[1]%11==0){//reducir francion /11
                        fraccion2[0]=fraccion2[0]/11;
                        fraccion2[1]=fraccion2[1]/11;
                    }
                    else if(fraccion2[0]%13==0 && fraccion2[1]%13==0){//reducir francion /13
                        fraccion2[0]=fraccion2[0]/13;
                        fraccion2[1]=fraccion2[1]/13;
                    }
                    else if(fraccion2[0]%17==0 && fraccion2[1]%17==0){//reducir francion /17
                        fraccion2[0]=fraccion2[0]/17;
                        fraccion2[1]=fraccion2[1]/17;
                    }
                    else if(fraccion2[0]%23==0 && fraccion2[1]%23==0){//reducir francion /23
                        fraccion2[0]=fraccion2[0]/23;
                        fraccion2[1]=fraccion2[1]/23;
                    }
                    else{
                        terminado=true;
                    }
                }
                    fraccion1[0]=fraccion1[0]*fraccion2[1];
                    fraccion1[1]=fraccion1[1]*fraccion2[1];
                    fraccion2[0]=fraccion2[0]*fraccion1[1];
                    fraccion2[1]=fraccion2[1]*fraccion1[1];
                    //reducir fracción 1
                    while(terminado==false){
                        if(fraccion1[0]%2==0 && fraccion1[1]%2==0){//reducir francion /2
                            fraccion1[0]=fraccion1[0]/2;
                            fraccion1[1]=fraccion1[1]/2;
                        }
                        else if(fraccion1[0]%3==0 && fraccion1[1]%3==0){//reducir francion /3
                            fraccion1[0]=fraccion1[0]/3;
                            fraccion1[1]=fraccion1[1]/3;
                        }
                        else if(fraccion1[0]%5==0 && fraccion1[1]%5==0){//reducir francion /5
                            fraccion1[0]=fraccion1[0]/5;
                            fraccion1[1]=fraccion1[1]/5;
                        }
                        else if(fraccion1[0]%7==0 && fraccion1[1]%7==0){//reducir francion /7
                            fraccion1[0]=fraccion1[0]/7;
                            fraccion1[1]=fraccion1[1]/7;
                        }
                        else if(fraccion1[0]%11==0 && fraccion1[1]%11==0){//reducir francion /11
                            fraccion1[0]=fraccion1[0]/11;
                            fraccion1[1]=fraccion1[1]/11;
                        }
                        else if(fraccion1[0]%13==0 && fraccion1[1]%13==0){//reducir francion /13
                            fraccion1[0]=fraccion1[0]/13;
                            fraccion1[1]=fraccion1[1]/13;
                        }
                        else if(fraccion1[0]%17==0 && fraccion1[1]%17==0){//reducir francion /17
                            fraccion1[0]=fraccion1[0]/17;
                            fraccion1[1]=fraccion1[1]/17;
                        }
                        else if(fraccion1[0]%23==0 && fraccion1[1]%23==0){//reducir francion /23
                            fraccion1[0]=fraccion1[0]/23;
                            fraccion1[1]=fraccion1[1]/23;
                        }
                        else{
                            terminado=true;
                        }
                    }
                    //reducir fracción 2
                    terminado=false;
                    while(terminado==false){
                        if(fraccion2[0]%2==0 && fraccion2[1]%2==0){//reducir francion /2
                            fraccion2[0]=fraccion2[0]/2;
                            fraccion2[1]=fraccion2[1]/2;
                        }
                        else if(fraccion2[0]%3==0 && fraccion2[1]%3==0){//reducir francion /3
                            fraccion2[0]=fraccion2[0]/3;
                            fraccion2[1]=fraccion2[1]/3;
                        }
                        else if(fraccion2[0]%5==0 && fraccion2[1]%5==0){//reducir francion /5
                            fraccion2[0]=fraccion2[0]/5;
                            fraccion2[1]=fraccion2[1]/5;
                        }
                        else if(fraccion2[0]%7==0 && fraccion2[1]%7==0){//reducir francion /7
                            fraccion2[0]=fraccion2[0]/7;
                            fraccion2[1]=fraccion2[1]/7;
                        }
                        else if(fraccion2[0]%11==0 && fraccion2[1]%11==0){//reducir francion /11
                            fraccion2[0]=fraccion2[0]/11;
                            fraccion2[1]=fraccion2[1]/11;
                        }
                        else if(fraccion2[0]%13==0 && fraccion2[1]%13==0){//reducir francion /13
                            fraccion2[0]=fraccion2[0]/13;
                            fraccion2[1]=fraccion2[1]/13;
                        }
                        else if(fraccion2[0]%17==0 && fraccion2[1]%17==0){//reducir francion /17
                            fraccion2[0]=fraccion2[0]/17;
                            fraccion2[1]=fraccion2[1]/17;
                        }
                        else if(fraccion2[0]%23==0 && fraccion2[1]%23==0){//reducir francion /23
                            fraccion2[0]=fraccion2[0]/23;
                            fraccion2[1]=fraccion2[1]/23;
                        }
                        else{
                            terminado=true;
                        }
                    }
                    resultado_corregido=parentesis1;
                    resultado_corregido=resultado_corregido+(fraccion1[0]+fraccion2[0])+"/"+fraccion1[1];
                    resultado_corregido=resultado_corregido+",";
                    resultado_corregido=resultado_corregido+(fraccion1[0]-fraccion2[0])+"/"+fraccion1[1];
                    resultado_corregido=resultado_corregido+parentesis2;

                    resultado=parentesis1;
                    if(fraccion1[1]==1){//no poner denominador
                        resultado=resultado+(fraccion1[0]+fraccion2[0]);
                    }
                    else{
                        resultado=resultado+"<sup>"+(fraccion1[0]+fraccion2[0])+"</sup>/<sub>"+fraccion1[1]+"</sub>";
                    }
                    resultado=resultado+",";
                    if(fraccion2[1]==1){//no poner denominador
                        resultado=resultado+(fraccion1[0]-fraccion2[0]);
                    }
                    else{
                        resultado=resultado+"<sup>"+(fraccion1[0]-fraccion2[0])+"</sup>/<sub>"+fraccion1[1]+"</sub>";
                    }
                    resultado=resultado+parentesis2;
            }
    }
    else{
        if(Math.floor(Math.random()*3+1)==1){//fracción
            if(Math.floor(Math.random()*2+1)==1){//negativo
                fraccion1.push(Math.floor(Math.random()*30+0));
            }
            else{
                fraccion1.push(Math.floor(Math.random()*30+0));
            }
            if(Math.floor(Math.random()*2+1)==1){//negativo
                fraccion1.push(Math.floor(Math.random()*30+1));
            }
            else{
                fraccion1.push(Math.floor(Math.random()*30+1));
            }
        }
        else{
            if(Math.floor(Math.random()*2+1)==1){//negativo
                fraccion1.push("-"+Math.floor(Math.random()*30+0));
                fraccion1.push(1);
            }
            else{
                fraccion1.push(Math.floor(Math.random()*30+0));
                fraccion1.push(1);
            }
        }
        resultado=resultado+",";
        if(Math.floor(Math.random()*3+1)==1){//fracción
            if(Math.floor(Math.random()*2+1)==1){//negativo
                fraccion2.push(Math.floor(Math.random()*30+0));
            }
            else{
                fraccion2.push(Math.floor(Math.random()*30+0));
            }
            if(Math.floor(Math.random()*2+1)==1){//negativo
                fraccion2.push(Math.floor(Math.random()*30+1));
            }
            else{
                fraccion2.push(Math.floor(Math.random()*30+1));
            }
        }
        else{
            if(Math.floor(Math.random()*2+1)==1){//negativo
                fraccion2.push("-"+Math.floor(Math.random()*30+0));
                fraccion2.push(1);
            }
            else{
                fraccion2.push(Math.floor(Math.random()*30+0));
                fraccion2.push(1);
            }
        }
            //corregir (siemnpre estan en fracciones)
            if(fraccion1[1]==fraccion2[1]){//denominadores iguales
                numero1=fraccion1[0];
                numero2=fraccion2[0];
                    resultado_corregido=parentesis1;
                    resultado_corregido=resultado_corregido+(fraccion1[0]+fraccion2[0])+"/"+fraccion1[1];
                    resultado_corregido=resultado_corregido+",";
                    resultado_corregido=resultado_corregido+(fraccion1[0]-fraccion2[0])+"/"+fraccion1[1];
                    resultado_corregido=resultado_corregido+parentesis2;
                    resultado=parentesis1;
                    if(fraccion1[1]==1){//no poner denominador
                        resultado=resultado+(fraccion1[0]+fraccion2[0]);
                    }
                    else{
                        resultado=resultado+"<sup>"+(fraccion1[0]+fraccion2[0])+"</sup>/<sub>"+fraccion1[1]+"</sub>";
                    }
                    resultado=resultado+",";
                    if(fraccion2[1]==1){//no poner denominador
                        resultado=resultado+(fraccion1[0]-fraccion2[0]);
                    }
                    else{
                        resultado=resultado+"<sup>"+(fraccion1[0]-fraccion2[0])+"</sup>/<sub>"+fraccion1[1]+"</sub>";
                    }
                    resultado=resultado+parentesis2;
            }
            else{
                numero1="<sup>"+fraccion1[0]+"</sup>/<sub>"+fraccion1[1]+"</sub>";
                numero2="<sup>"+fraccion2[0]+"</sup>/<sub>"+fraccion2[1]+"</sub>";
                let terminado=false;
                //reducir fracción 1
                while(terminado==false){
                    if(fraccion1[0]%2==0 && fraccion1[1]%2==0){//reducir francion /2
                        fraccion1[0]=fraccion1[0]/2;
                        fraccion1[1]=fraccion1[1]/2;
                    }
                    else if(fraccion1[0]%3==0 && fraccion1[1]%3==0){//reducir francion /3
                        fraccion1[0]=fraccion1[0]/3;
                        fraccion1[1]=fraccion1[1]/3;
                    }
                    else if(fraccion1[0]%5==0 && fraccion1[1]%5==0){//reducir francion /5
                        fraccion1[0]=fraccion1[0]/5;
                        fraccion1[1]=fraccion1[1]/5;
                    }
                    else if(fraccion1[0]%7==0 && fraccion1[1]%7==0){//reducir francion /7
                        fraccion1[0]=fraccion1[0]/7;
                        fraccion1[1]=fraccion1[1]/7;
                    }
                    else if(fraccion1[0]%11==0 && fraccion1[1]%11==0){//reducir francion /11
                        fraccion1[0]=fraccion1[0]/11;
                        fraccion1[1]=fraccion1[1]/11;
                    }
                    else if(fraccion1[0]%13==0 && fraccion1[1]%13==0){//reducir francion /13
                        fraccion1[0]=fraccion1[0]/13;
                        fraccion1[1]=fraccion1[1]/13;
                    }
                    else if(fraccion1[0]%17==0 && fraccion1[1]%17==0){//reducir francion /17
                        fraccion1[0]=fraccion1[0]/17;
                        fraccion1[1]=fraccion1[1]/17;
                    }
                    else if(fraccion1[0]%23==0 && fraccion1[1]%23==0){//reducir francion /23
                        fraccion1[0]=fraccion1[0]/23;
                        fraccion1[1]=fraccion1[1]/23;
                    }
                    else{
                        terminado=true;
                    }
                }
                //reducir fracción 2
                terminado=false;
                while(terminado==false){
                    if(fraccion2[0]%2==0 && fraccion2[1]%2==0){//reducir francion /2
                        fraccion2[0]=fraccion2[0]/2;
                        fraccion2[1]=fraccion2[1]/2;
                    }
                    else if(fraccion2[0]%3==0 && fraccion2[1]%3==0){//reducir francion /3
                        fraccion2[0]=fraccion2[0]/3;
                        fraccion2[1]=fraccion2[1]/3;
                    }
                    else if(fraccion2[0]%5==0 && fraccion2[1]%5==0){//reducir francion /5
                        fraccion2[0]=fraccion2[0]/5;
                        fraccion2[1]=fraccion2[1]/5;
                    }
                    else if(fraccion2[0]%7==0 && fraccion2[1]%7==0){//reducir francion /7
                        fraccion2[0]=fraccion2[0]/7;
                        fraccion2[1]=fraccion2[1]/7;
                    }
                    else if(fraccion2[0]%11==0 && fraccion2[1]%11==0){//reducir francion /11
                        fraccion2[0]=fraccion2[0]/11;
                        fraccion2[1]=fraccion2[1]/11;
                    }
                    else if(fraccion2[0]%13==0 && fraccion2[1]%13==0){//reducir francion /13
                        fraccion2[0]=fraccion2[0]/13;
                        fraccion2[1]=fraccion2[1]/13;
                    }
                    else if(fraccion2[0]%17==0 && fraccion2[1]%17==0){//reducir francion /17
                        fraccion2[0]=fraccion2[0]/17;
                        fraccion2[1]=fraccion2[1]/17;
                    }
                    else if(fraccion2[0]%23==0 && fraccion2[1]%23==0){//reducir francion /23
                        fraccion2[0]=fraccion2[0]/23;
                        fraccion2[1]=fraccion2[1]/23;
                    }
                    else{
                        terminado=true;
                    }
                }
                    fraccion1[0]=fraccion1[0]*fraccion2[1];
                    fraccion1[1]=fraccion1[1]*fraccion2[1];
                    fraccion2[0]=fraccion2[0]*fraccion1[1];
                    fraccion2[1]=fraccion2[1]*fraccion1[1];
                    //reducir fracción 1
                    while(terminado==false){
                        if(fraccion1[0]%2==0 && fraccion1[1]%2==0){//reducir francion /2
                            fraccion1[0]=fraccion1[0]/2;
                            fraccion1[1]=fraccion1[1]/2;
                        }
                        else if(fraccion1[0]%3==0 && fraccion1[1]%3==0){//reducir francion /3
                            fraccion1[0]=fraccion1[0]/3;
                            fraccion1[1]=fraccion1[1]/3;
                        }
                        else if(fraccion1[0]%5==0 && fraccion1[1]%5==0){//reducir francion /5
                            fraccion1[0]=fraccion1[0]/5;
                            fraccion1[1]=fraccion1[1]/5;
                        }
                        else if(fraccion1[0]%7==0 && fraccion1[1]%7==0){//reducir francion /7
                            fraccion1[0]=fraccion1[0]/7;
                            fraccion1[1]=fraccion1[1]/7;
                        }
                        else if(fraccion1[0]%11==0 && fraccion1[1]%11==0){//reducir francion /11
                            fraccion1[0]=fraccion1[0]/11;
                            fraccion1[1]=fraccion1[1]/11;
                        }
                        else if(fraccion1[0]%13==0 && fraccion1[1]%13==0){//reducir francion /13
                            fraccion1[0]=fraccion1[0]/13;
                            fraccion1[1]=fraccion1[1]/13;
                        }
                        else if(fraccion1[0]%17==0 && fraccion1[1]%17==0){//reducir francion /17
                            fraccion1[0]=fraccion1[0]/17;
                            fraccion1[1]=fraccion1[1]/17;
                        }
                        else if(fraccion1[0]%23==0 && fraccion1[1]%23==0){//reducir francion /23
                            fraccion1[0]=fraccion1[0]/23;
                            fraccion1[1]=fraccion1[1]/23;
                        }
                        else{
                            terminado=true;
                        }
                    }
                    //reducir fracción 2
                    terminado=false;
                    while(terminado==false){
                        if(fraccion2[0]%2==0 && fraccion2[1]%2==0){//reducir francion /2
                            fraccion2[0]=fraccion2[0]/2;
                            fraccion2[1]=fraccion2[1]/2;
                        }
                        else if(fraccion2[0]%3==0 && fraccion2[1]%3==0){//reducir francion /3
                            fraccion2[0]=fraccion2[0]/3;
                            fraccion2[1]=fraccion2[1]/3;
                        }
                        else if(fraccion2[0]%5==0 && fraccion2[1]%5==0){//reducir francion /5
                            fraccion2[0]=fraccion2[0]/5;
                            fraccion2[1]=fraccion2[1]/5;
                        }
                        else if(fraccion2[0]%7==0 && fraccion2[1]%7==0){//reducir francion /7
                            fraccion2[0]=fraccion2[0]/7;
                            fraccion2[1]=fraccion2[1]/7;
                        }
                        else if(fraccion2[0]%11==0 && fraccion2[1]%11==0){//reducir francion /11
                            fraccion2[0]=fraccion2[0]/11;
                            fraccion2[1]=fraccion2[1]/11;
                        }
                        else if(fraccion2[0]%13==0 && fraccion2[1]%13==0){//reducir francion /13
                            fraccion2[0]=fraccion2[0]/13;
                            fraccion2[1]=fraccion2[1]/13;
                        }
                        else if(fraccion2[0]%17==0 && fraccion2[1]%17==0){//reducir francion /17
                            fraccion2[0]=fraccion2[0]/17;
                            fraccion2[1]=fraccion2[1]/17;
                        }
                        else if(fraccion2[0]%23==0 && fraccion2[1]%23==0){//reducir francion /23
                            fraccion2[0]=fraccion2[0]/23;
                            fraccion2[1]=fraccion2[1]/23;
                        }
                        else{
                            terminado=true;
                        }
                    }
                    resultado_corregido=parentesis1;
                    resultado_corregido=resultado_corregido+(fraccion1[0]+fraccion2[0])+"/"+fraccion1[1];
                    resultado_corregido=resultado_corregido+",";
                    resultado_corregido=resultado_corregido+(fraccion1[0]-fraccion2[0])+"/"+fraccion1[1];
                    resultado_corregido=resultado_corregido+parentesis2;

                    resultado=parentesis1;
                    if(fraccion1[1]==1){//no poner denominador
                        resultado=resultado+(fraccion1[0]+fraccion2[0]);
                    }
                    else{
                        resultado=resultado+"<sup>"+(fraccion1[0]+fraccion2[0])+"</sup>/<sub>"+fraccion1[1]+"</sub>";
                    }
                    resultado=resultado+",";
                    if(fraccion2[1]==1){//no poner denominador
                        resultado=resultado+(fraccion1[0]-fraccion2[0]);
                    }
                    else{
                        resultado=resultado+"<sup>"+(fraccion1[0]-fraccion2[0])+"</sup>/<sub>"+fraccion1[1]+"</sub>";
                    }
                    resultado=resultado+parentesis2;
            }
    }
        operacion_tocada=parentesis1+numero1+","+numero2+parentesis2;
    //elegir resultado igualdad
    if(Math.floor(Math.random()*3+1)!=1){//mal hecha la igualdad
            //parentesis corchete
            if(Math.floor(Math.random()*2+1)==1){
                resultado="[";
            }
            else{
                resultado="(";
            }
            //numeros
            if(dificultad<=3){
                resultado=resultado+Math.floor(Math.random()*10+0);
                resultado=resultado+",";
                resultado=resultado+Math.floor(Math.random()*10+1);
            }
            else if(dificultad>3 && dificultad<=6){
                if(Math.floor(Math.random()*4+1)==1){//fracción
                    if(Math.floor(Math.random()*3+1)==1){//negativo
                        resultado=resultado+"<sup>-"+Math.floor(Math.random()*15+0)+"</sup>";
                    }
                    else{
                        resultado=resultado+"<sup>"+Math.floor(Math.random()*15+0)+"</sup>";
                    }
                    resultado=resultado+"/";
                    if(Math.floor(Math.random()*3+1)==1){//negativo
                        resultado=resultado+"<sub>-"+Math.floor(Math.random()*15+2)+"</sub>";
                    }
                    else{
                        resultado=resultado+"<sub>"+Math.floor(Math.random()*15+2)+"</sub>";
                    }
                }
                else{
                    if(Math.floor(Math.random()*3+1)==1){//negativo
                        resultado=resultado+"-"+Math.floor(Math.random()*15+0);
                    }
                    else{
                        resultado=resultado+Math.floor(Math.random()*15+1);
                    }
                }
                resultado=resultado+",";
                if(Math.floor(Math.random()*4+1)==1){//fracción
                    if(Math.floor(Math.random()*3+1)==1){//negativo
                        resultado=resultado+"<sup>-"+Math.floor(Math.random()*15+0)+"</sup>";
                    }
                    else{
                        resultado=resultado+"<sup>"+Math.floor(Math.random()*15+0)+"</sup>";
                    }
                    resultado=resultado+"/";
                    if(Math.floor(Math.random()*3+1)==1){//negativo
                        resultado=resultado+"<sub>-"+Math.floor(Math.random()*15+2)+"</sub>";
                    }
                    else{
                        resultado=resultado+"<sub>"+Math.floor(Math.random()*15+2)+"</sub>";
                    }
                }
                else{
                    if(Math.floor(Math.random()*3+1)==1){//negativo
                        resultado=resultado+"-"+Math.floor(Math.random()*15+0);
                    }
                    else{
                        resultado=resultado+Math.floor(Math.random()*15+1);
                    }
                }
            }
            else if(dificultad>6 && dificultad<=9){
                if(Math.floor(Math.random()*3+1)==1){//fracción
                    if(Math.floor(Math.random()*2+1)==1){//negativo
                        resultado=resultado+"<sup>-"+Math.floor(Math.random()*20+0)+"</sup>";
                    }
                    else{
                        resultado=resultado+"<sup>"+Math.floor(Math.random()*20+0)+"</sup>";
                    }
                    resultado=resultado+"/";
                    if(Math.floor(Math.random()*2+1)==1){//negativo
                        resultado=resultado+"<sub>-"+Math.floor(Math.random()*20+2)+"</sub>";
                    }
                    else{
                        resultado=resultado+"<sub>"+Math.floor(Math.random()*20+2)+"</sub>";
                    }
                }
                else{
                    if(Math.floor(Math.random()*2+1)==1){//negativo
                        resultado=resultado+"-"+Math.floor(Math.random()*20+0);
                    }
                    else{
                        resultado=resultado+Math.floor(Math.random()*20+1);
                    }
                }
                resultado=resultado+",";
                if(Math.floor(Math.random()*3+1)==1){//fracción
                    if(Math.floor(Math.random()*3+1)==1){//negativo
                        resultado=resultado+"<sup>-"+Math.floor(Math.random()*20+0)+"</sup>";
                    }
                    else{
                        resultado=resultado+"<sup>"+Math.floor(Math.random()*20+0)+"</sup>";
                    }
                    resultado=resultado+"/";
                    if(Math.floor(Math.random()*3+1)==1){//negativo
                        resultado=resultado+"<sub>-"+Math.floor(Math.random()*20+2)+"</sub>";
                    }
                    else{
                        resultado=resultado+"<sub>"+Math.floor(Math.random()*20+2)+"</sub>";
                    }
                }
                else{
                    if(Math.floor(Math.random()*3+1)==1){//negativo
                        resultado=resultado+"-"+Math.floor(Math.random()*20+0);
                    }
                    else{
                        resultado=resultado+Math.floor(Math.random()*20+0);
                    }
                }
            }
            else{
                if(Math.floor(Math.random()*3+1)==1){//fracción
                    if(Math.floor(Math.random()*2+1)==1){//negativo
                        resultado=resultado+"<sup>-"+Math.floor(Math.random()*20+0)+"</sup>";
                    }
                    else{
                        resultado=resultado+"<sup>"+Math.floor(Math.random()*20+0)+"</sup>";
                    }
                    resultado=resultado+"/";
                    if(Math.floor(Math.random()*2+1)==1){//negativo
                        resultado=resultado+"<sub>-"+Math.floor(Math.random()*20+2)+"</sub>";
                    }
                    else{
                        resultado=resultado+"<sub>"+Math.floor(Math.random()*20+2)+"</sub>";
                    }
                }
                else{
                    if(Math.floor(Math.random()*2+1)==1){//negativo
                        resultado=resultado+"-"+Math.floor(Math.random()*20+0);
                    }
                    else{
                        resultado=resultado+Math.floor(Math.random()*20+1);
                    }
                }
                resultado=resultado+",";
                if(Math.floor(Math.random()*3+1)==1){//fracción
                    if(Math.floor(Math.random()*2+1)==1){//negativo
                        resultado=resultado+"<sup>-"+Math.floor(Math.random()*20+0)+"</sup>";
                    }
                    else{
                        resultado=resultado+"<sup>"+Math.floor(Math.random()*20+0)+"</sup>";
                    }
                    resultado=resultado+"/";
                    if(Math.floor(Math.random()*2+1)==1){//negativo
                        resultado=resultado+"<sub>-"+Math.floor(Math.random()*20+2)+"</sub>";
                    }
                    else{
                        resultado=resultado+"<sub>"+Math.floor(Math.random()*20+2)+"</sub>";
                    }
                }
                else{
                    if(Math.floor(Math.random()*2+1)==1){//negativo
                        resultado=resultado+"-"+Math.floor(Math.random()*20+0);
                    }
                    else{
                        resultado=resultado+Math.floor(Math.random()*20+0);
                    }
                }
            }
            //parentesis corchete
            if(Math.floor(Math.random()*2+1)==1){
                resultado=resultado+"]";
            }
            else{
                resultado=resultado+")";
            }
    }
    else{
    }
    //mostrar en pantalla
    document.getElementById("body").innerHTML="<svg class='flecha-volver' xmlns='http://www.w3.org/2000/svg' version='1.0' width='90.000000pt' height='90.000000pt' viewBox='0 0 90.000000 90.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,90.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path style='cursor: pointer;'onclick='abrir_menu_operaciones_extras()' d='M113 548 c-46 -46 -83 -90 -83 -98 0 -25 165 -183 186 -178 37 7 27 39 -27 94 l-53 54 364 2 365 3 0 25 0 25 -365 3 -364 2 53 54 c55 56 64 88 26 94 -14 2 -46 -23 -102 -80z'/></g></svg><h1 id='correct-text'>"+contador_correcto+"</h1><h3 id='ejercicio'class='ejercicio'><i>E </i>"+operacion_tocada+" = "+resultado+"</h3><div class='div-resultado'><input id='resultado'class='resultado'type='text' value=''placeholder='[3,-1)' autofocus></div>";
    //corregir
    document.getElementById("resultado").focus();
    document.getElementById("resultado").addEventListener("keyup", function(event) {
        event.preventDefault();
        let resultado_usuario_revisada=document.getElementById("resultado").value.replaceAll(" ","");//revisar
            //corregir errores de escritura
            resultado_usuario_revisada=resultado_usuario_revisada.replaceAll(",,",",");
            resultado_usuario_revisada=resultado_usuario_revisada.replaceAll("..",".");
            resultado_usuario_revisada=resultado_usuario_revisada.replaceAll("((","(");
            resultado_usuario_revisada=resultado_usuario_revisada.replaceAll("[[","[");
            resultado_usuario_revisada=resultado_usuario_revisada.replaceAll(")",")");
            resultado_usuario_revisada=resultado_usuario_revisada.replaceAll("]]","]");
            resultado_usuario_revisada=resultado_usuario_revisada.replaceAll("--","-");
            resultado_usuario_revisada=resultado_usuario_revisada.replaceAll("+","");
        if (event.keyCode === 13  && resultado_usuario_revisada!="") {//aceptar
            //comprobar
            let bien_hecha=true;
            if(resultado_usuario_revisada!=resultado_corregido){
                bien_hecha=false;
            }
            else{
                bien_hecha=true;
            }
            //mostrar corrección
            if(bien_hecha==true){//bien hecho
                contador_correcto++;
                actualizar_contador_igualdades();
                document.getElementById("ejercicio").style.display="none";
                document.getElementById("resultado").style.display="none";
                if(muted==false){//con sonido
                    document.getElementById("body").innerHTML+="<audio src='recursos/correcto.mp3'class='audio-nota'autoplay preload='auto'></audio><div class='nota'><h3 class='texto-nota-bien'>¡Correcto!</h3><img class='emoji'src='recursos/correcto.img.png'/><h3 class='ejercicio-text'>"+operacion_tocada+"</h3><h3 class='sin-corregir-bien'>"+resultado_usuario_revisada+"</h3><h3 class='resuelto'>"+resultado_corregido+"</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><input type='button'onclick='crear_operacion_igualdad()'id='siguinte-nota'class='siguinte-nota'></div>";
                }
                else{//sin sonido
                    document.getElementById("body").innerHTML+="<div class='nota'><h3 class='texto-nota-bien'>¡Correcto!</h3><img class='emoji'src='recursos/correcto.img.png'/><h3 class='ejercicio-text'>"+operacion_tocada+"</h3><h3 class='sin-corregir-bien'>"+resultado_usuario_revisada+"</h3><h3 class='resuelto'>"+resultado_corregido+"</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><input type='button'onclick='crear_operacion_igualdad()'id='siguinte-nota'class='siguinte-nota'></div>";
                }
            }
            else{//mal hecho
                contador_correcto=0;
                actualizar_contador_igualdades();
                if(muted==false){//con sonido
                    document.getElementById("body").innerHTML+="<audio src='recursos/incorrecto.mp3'class='audio-nota'autoplay preload='auto'></audio><div class='nota'><h3 class='texto-nota-mal'>¡Incorrecto!</h3><img class='emoji'src='recursos/incorrecto.img.png'/><h3 class='ejercicio-text'>"+operacion_tocada+"</h3><h3 class='sin-corregir'>"+resultado_usuario_revisada+"</h3><h3 class='resuelto'>"+resultado_corregido+"</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><input type='button'onclick='crear_operacion_igualdad()'id='siguinte-nota'class='siguinte-nota'></div>";
                }
                else{//sin sonido
                    document.getElementById("body").innerHTML+="<div class='nota'><h3 class='texto-nota-mal'>¡Incorrecto!</h3><img class='emoji'src='recursos/incorrecto.img.png'/><h3 class='ejercicio-text'>"+operacion_tocada+"</h3><h3 class='sin-corregir'>"+resultado_usuario_revisada+"</h3><h3 class='resuelto'>"+resultado_corregido+"</h3><svg class='volver-nota' xmlns='http://www.w3.org/2000/svg' version='1.0' width='48.000000pt' height='48.000000pt' viewBox='0 0 48.000000 48.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path  style='cursor: pointer;'onclick='control_pagina(1)' d='M153 375 c-46 -36 -85 -75 -88 -88 -3 -12 -5 -69 -3 -127 l3 -105 65 0 65 0 3 63 3 62 39 0 39 0 3 -63 3 -62 65 0 65 0 3 105 c2 58 0 115 -3 128 -5 19 -158 152 -175 152 -3 0 -42 -29 -87 -65z'/></g></svg><input type='button'onclick='crear_operacion_igualdad()'id='siguinte-nota'class='siguinte-nota'></div>";
                }
            }
            document.getElementById("siguinte-nota").focus();
            document.getElementById("siguinte-nota").addEventListener("keyup", function(event) {
                event.preventDefault();
                if(event.keyCode === 13) {
                    crear_operacion_igualdad();
                }
            });
        }
    });
    }
    else{//numero de x que verifiquen la igualdad
        let numero;
        let numero_igualdad;
        let resultado_corregido;
        let resultado;
        if(dificultad<=3){
                numero=Math.floor(Math.random()*10+1);
            numero_igualdad=Math.floor(Math.random()*10+1);
        }
    }
}
//actualizar contador y registros
function actualizar_contador_igualdades(){
    document.getElementById("correct-text").innerHTML=contador_correcto;
    //actualizar registros
}