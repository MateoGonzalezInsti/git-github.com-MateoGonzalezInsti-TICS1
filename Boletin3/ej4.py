#Escribir un programa que pida al usuario un número enteropositivo y muestre por pantalla la cuenta atrás desde ese número hasta cero separados por comas.

numeroEntero=int(input('Escribe un numero entero positivo:'))
primerResultado=bool(True)
for i in range(0,numeroEntero):
    if not (numeroEntero-i-1)%2==0:
        if primerResultado==True:
            print(numeroEntero-i-1)
            primerResultado=bool(False)
        else:
            print(f',{numeroEntero-i-1}')