#calculadora
#globales
resultadoFinal=float(0)
opcionEjecutarUsuario=int()
terminar=bool(False)
#programa
while terminar==False:
    print('¡Bienvenido a Una calculadora mas!\n')
    #OPCIONES TEXT
    print('Opciones:')
    print('1) Sumar')
    print('2) Restar')
    print('3) Multiplicar')
    print('4) Dividir')
    print('5) Calcular resto division')
    print('6) Calcular cociente division')
    print('7) Mostrar resultado final')
    print('0) Salir')
    opcionEjecutarUsuario=int(input('Elige una opcion:'))
    resultadoFinal=float()
    if opcionEjecutarUsuario==0:
        terminar=bool(True)
        print(f'Resultado final{resultadoFinal}')
    elif opcionEjecutarUsuario==1:
        numeroUsuario=float(input('Escibe el numero para sumar:'))
        resultadoFinal+=numeroUsuario
    elif opcionEjecutarUsuario==2:
        numeroUsuario=float(input('Escibe el numero para restar:'))
        resultadoFinal-=numeroUsuario
    elif opcionEjecutarUsuario==3:
        numeroUsuario=float(input('Escibe el numero para multiplicar:'))
        resultadoFinal*=numeroUsuario
    elif opcionEjecutarUsuario==4:
        numeroUsuario=float(input('Escibe el numero para dividir:'))
        resultadoFinal/=numeroUsuario
    elif opcionEjecutarUsuario==5:
        numeroUsuario=float(input('Escibe el numero para calcular el resto de la division:'))
        resultadoFinal%=numeroUsuario
    elif opcionEjecutarUsuario==6:
        numeroUsuario=float(input('Escibe el numero para calcular el cociente de la division:'))
        resultadoFinal/=int(numeroUsuario)
    elif opcionEjecutarUsuario==7:
        print(f'Resultado operaciones:{resultadoFinal}')
    if opcionEjecutarUsuario!=0 and opcionEjecutarUsuario!=7:
        print(resultadoFinal)