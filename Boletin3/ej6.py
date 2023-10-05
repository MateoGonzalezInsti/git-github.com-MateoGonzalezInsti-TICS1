#Escribir un programa que pida al usuario un número entero y muestre por pantalla un triángulo rectángulo como el de más abajo, de altura el número introducido.

numeroUsuario=int(input('Introduce un número:'))
for i in range(numeroUsuario):
    texto=str()
    for j in range(i+1):
        texto+="*"
    print(texto)
