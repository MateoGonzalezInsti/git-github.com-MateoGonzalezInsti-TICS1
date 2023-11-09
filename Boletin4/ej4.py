# Escribir un programa que pregunte al usuario los números ganadores de la lotería primitiva, los almacene en una lista y los muestre por pantalla ordenados de menor a mayor.

boletos =[]

# coger boletos
numeroBoleto_usuario = -1
while numeroBoleto_usuario != 0:
    numeroBoleto_usuario = int(input("Escribe el boleto ganador (0: salir):"))
    if numeroBoleto_usuario != 0:
        boletos.append(numeroBoleto_usuario)
# ordenar
for i in range(boletos):
    for j in range(boletos):
        if boletos[i - 1] > boletos[j - 1]:
            numeroMover = boletos[i - 1]
            boletos[i - 1] = boletos[j - 1]
            boletos[j - 1] = numeroMover

for i in boletos:
    print(i, " ")
