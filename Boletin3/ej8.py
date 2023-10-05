#Escribir un programa que pida al usuario un número entero y muestre por pantalla un triángulo rectángulo como el de más abajo.

numeroUsuario=int(input('Escribe un número entero:'))
for i in range(numeroUsuario):
    texto=str()
    numero=int(0)
    for j in range(i+1):
        terminado=False
        while terminado==False:
            numero+=1
            if numero%2!=0:
                terminado=True
        texto=str(numero)+" "+texto
    print(texto)