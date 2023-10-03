#ej1
edadUsuario_ej1=int(input('indique su edad:'))
if edadUsuario_ej1>=18:
    print('Eres mayor de edad')
else:
    print('Eres menor de edad')
#ej2
contraseñaEnunciado_ej2='contraseña'
textoUsuario_ej2=str(input('Ecribe la contraseña:'))
while textoUsuario_ej2.upper()!=contraseñaEnunciado_ej2.upper():
    print('Contraseña incorrecta')
    textoUsuario_ej2=str(input('Ecribe la contraseña:'))
print('Contraseña correcta')
#ej3
n1Usuario_ej3=float(input('Numero uno:'))
n2Usuario_ej3=float(input('Numero dos:'))
while n2Usuario_ej3<=0:
    if n2Usuario_ej3<=0:
        print('! m no debe ser menor igual a 0')
        n2Usuario_ej3=float(input('Numero dos:'))
    else:
        print(f'La division de n y m es igual a {n1Usuario_ej3/n2Usuario_ej3}')
#ej4
numeroUsuario_ej4=float(input('Escribe un numero:'))
if numeroUsuario_ej4%2==0:
    print(f'{numeroUsuario_ej4} es par')
else:
    print(f'{numeroUsuario_ej4} es impar')
#ej5
edadUsuario_ej5=int(input('Escriba su edad:'))
ingresosUsuario_ej5=float(input('Escriba sus ingresos mensuales:'))
if edadUsuario_ej5>=16 and ingresosUsuario_ej5>=1000:
    print('¡DEBES TRIBUTAR!, sus ingresos superan los 1000 euros')
else:
    print('¡NO DEBES TRIBUTAR!, sus ingresos no superan los 1000 euros o su edad es menor a 16 años')
#ej6
nombreUsuario_ej6=str(input('Escibre su nombre:')).lower()
sexoUsuario_ej6=str(input('Eres hombre Y / N:')).lower()
abecedario_ej6=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
grupoTocado_ej6=str('ninguno')
if sexoUsuario_ej6=='y':
    for i in range(len(abecedario_ej6)):
        if nombreUsuario_ej6[0]==abecedario_ej6[i]:
            if i>=13:#>=n
                grupoTocado_ej6='A'
            else:
                grupoTocado_ej6='B'
elif sexoUsuario_ej6=='n':
    for i in range(len(abecedario_ej6)):
        if nombreUsuario_ej6[0]==abecedario_ej6[i]:
            if i>=12:#<=n
                grupoTocado_ej6='A'
            else:
                grupoTocado_ej6='B'
print(f'El grupo tocado es {grupoTocado_ej6}')
#ej7
rentaUsuario_ej7=float(input('Escriba su renta:'))
impositivo_ej7=int(5)
if rentaUsuario_ej7>=10000 and rentaUsuario_ej7<20000:
    impositivo_ej7=15
elif rentaUsuario_ej7>=20000 and rentaUsuario_ej7<35000:
    impositivo_ej7=20
elif rentaUsuario_ej7>=35000 and rentaUsuario_ej7<=60000:
    impositivo_ej7=30
elif rentaUsuario_ej7>60000:
    impositivo_ej7=45
else: 
    impositivo_ej7=5
print(f'Segun su renta el impositivo es {impositivo_ej7}')
#ej8
puntuacionTrabajadorUsuario_ej8=float('Introduce la puntuacion del trabajador:')
textoTrabajador_ej8=str('Indefinido')
if puntuacionTrabajadorUsuario_ej8==0.0:
    textoTrabajador_ej8='Inaceptable'
elif puntuacionTrabajadorUsuario_ej8==0.4:
    textoTrabajador_ej8='Aceptable'
else:
    textoTrabajador_ej8='Meritorio'
print(f'La puntuacion del trabajador es {puntuacionTrabajadorUsuario_ej8}({textoTrabajador_ej8}) y el dinero es {puntuacionTrabajadorUsuario_ej8*2400}')
#ej9
edadclienteUsuario_ej9=int(input('Introduce su edad:'))
if edadclienteUsuario_ej9<4:
    precioEntrada_ej9=str('gratis')
elif edadclienteUsuario_ej9>=4 and edadclienteUsuario_ej9<=18:
     precioEntrada_ej9=int(5)
else:
    precioEntrada_ej9=int(10)
print(f'La entrada es {precioEntrada_ej9}')
#ej10
print('Pizzas:')
vgtUsuario_ej10=int(input('1)vegetariano , 2)no vegetariana'))

if vgtUsuario_ej10==1:
    ingredientesUsuario_ej10=int(input('● Ingredientes vegetarianos: 1)Pimiento , 2)tofu.'))
    ingredientestext_ej10=['Pimiento','tofu']
    ingredientesUsuario_ej10=str(ingredientestext_ej10[ingredientesUsuario_ej10-1])
    vgtUsuario_ej10=str('vegetariana')
else:
    ingredientesUsuario_ej10=int(input('● Ingredientes no vegetarianos: 1)Peperoni, 2)Jamón , 3)Salmón.'))
    ingredientestext_ej10=['Peperoni','Jamón','Salmón']
    ingredientesUsuario_ej10=str(ingredientestext_ej10[ingredientesUsuario_ej10-1])
    vgtUsuario_ej10=str('no vegetariana')
print(f'La pizza es {vgtUsuario_ej10}.Ingredientes: mozzarella, tomate y {ingredientesUsuario_ej10}')