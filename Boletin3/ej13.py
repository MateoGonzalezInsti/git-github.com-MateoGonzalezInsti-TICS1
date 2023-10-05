#Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el usuario escriba “salir” que terminará.

terminado=False
while terminado==False:
    palabra=str(input('Introduce una palabra (salir para terminar programa):'))
    if palabra=='salir':
        terminado=True
    else:
        print(f'Eco: {palabra}')
print('El programa se terminó')