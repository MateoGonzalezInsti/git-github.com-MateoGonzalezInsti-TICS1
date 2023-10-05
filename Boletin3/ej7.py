#Escribir un programa que muestre por pantalla la tabla de multiplicar del 1 al 10.

for i in range(10):
    for j in range(10):
        print(f'{i+1}*{j+1}={(i+1)*(j+1)}')