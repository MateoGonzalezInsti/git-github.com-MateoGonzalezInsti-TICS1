#ej1
print('¡Hola mundo!')
#ej2
text_ej2='¡Hola mundo!'
print(text_ej2)
#ej3
nombreUsuario_ej3=str(input('Escriba su nombre:'))
print(f'¡Hola {nombreUsuario_ej3}!')
#ej4
print(((3+2)/(2*5))**2)
#ej5
horasTrabajadasUsuario_ej5=float(input('Introduzca las horas trabajadas totales:'))
costeHoraTrabajada_ej5=float(input('Introduzca el coste por hora trabajada:'))
print(f'El dinero total asciende a {horasTrabajadasUsuario_ej5*costeHoraTrabajada_ej5}')
#ej6
numeroUsuario_ej6=int(input('Introduzca un numero entero:'))
print(f'El resultado de la suma de todos los numeros enteros hasta el numero introducido es {(n*(n+1))/2}')
#ej7
pesoUsuario_ej7=float(input('Introduzca su peso en Kg:'))
alturaUsuario_ej7=float(input('Introduzca su altura en m:'))
print(f'El imc es de {round(pesoUsuario_ej7/(alturaUsuario_ej7**2),2)}')
#ej8
numeroEntero1Usuario_ej8=int(input('1- Escribe un numero entero:'))
numeroEntero2Usuario_ej8=int(input('2- Escribe otro numero entero:'))
resultadoDivisionCociente_ej8=int(numeroEntero1Usuario_ej8/numeroEntero2Usuario_ej8)
resultadoDivisionResto_ej8=int(numeroEntero1Usuario_ej8%numeroEntero2Usuario_ej8)
print(f'n entre m da de cociente {resultadoDivisionCociente_ej8} y como resto {resultadoDivisionResto_ej8}')
#ej9
dineroInvertirUsuario_ej9=float(input('Escribe el dinero a invertir:'))
interesUnualUsuario_ej9=float(input('Escribe el interes anual:'))
añosDuracionUsuario_ej9=float(input('Escribe la duracion en años:'))
    #ecuacion-->(dinero * interes /100) * años
ganancias_ej9=(dineroInvertirUsuario_ej9 * interesUnualUsuario_ej9 / 100)*añosDuracionUsuario_ej9
print(f'El dinero total asciende a {dineroInvertirUsuario_ej9+ganancias_ej9} las ganancias ascienden a {ganancias_ej9}')
#ej10
pesoPayaso_ej10=112#gramos
pesoMuñeca_ej10=75
numeroPayasosUsuario_ej10=int(input('Numero de PAYASOS enviados:'))
numeroMuñecasUsuario_ej10=int(input('Numero de MUÑECAS enviadas:'))
print(f'El peso del PAQUETE es de {pesoPayaso_ej10*numeroPayasosUsuario_ej10+pesoMuñeca_ej10*numeroMuñecasUsuario_ej10}gr')
#ej11
interesAhorros_ej11=4
dineroCuentaAhorrosUsuario_ej11=float(input('Escribe el dinero que quieres ingresar en tu cuenta de ahorros:'))
dineroFinalAñoUno_ej11=dineroFinalAñoUno_ej11+(dineroFinalAñoUno_ej11*interesAhorros_ej11/100)
dineroFinalAñoDos_ej11=dineroFinalAñoUno_ej11+(dineroFinalAñoUno_ej11*interesAhorros_ej11/100)
dineroFinalAñoTres_ej11=dineroFinalAñoDos_ej11+(dineroFinalAñoDos_ej11*interesAhorros_ej11/100)
print(f'El primer año tendras {round(dineroFinalAñoUno_ej11,2)} el segundo tendras {round(dineroFinalAñoDos_ej11,2)} el tercero tendras {round(dineroFinalAñoTres_ej11,2)}')
#ej12
precioPan_ej12=3.49#euros
descuentoPanPasado_ej12=60#porcentaje
numeroPanPasadasUsuario_ej12=int(input('Barras de pan vendidas del dia anterior:'))
print(f'El precio normal de una barra de pan es de {precioPan_ej12}euros al no serlo tienes un decuente de un {descuentoPanPasado_ej12}% con esto el precio final es de {numeroPanPasadasUsuario_ej12*((precioPan_ej12)-(precioPan_ej12*descuentoPanPasado_ej12/100))}euros') 