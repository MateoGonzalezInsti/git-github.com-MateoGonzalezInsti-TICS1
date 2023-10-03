#Escribir un programa que pida al usuario un número enteropositivo y muestre por pantalla todos los números impares desde 1 hasta ese número separados por comas.

numeroEntero=int(input('Escribe un numero entero positivo:'))
primerResultado=bool(True)
for i in range(numeroEntero):
    if not i%2==0:
        if primerResultado==True:
            print(i)
            primerResultado=bool(False)
        else:
            print(f',{i}')