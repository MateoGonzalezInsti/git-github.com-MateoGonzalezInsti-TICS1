# Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el número de años, y muestre por pantalla el capital obtenido en la inversión cada año que dura la inversión.

cantidadInvertir = float(input("Escribe la cantidad a imprimir:"))
interesAnual = float(input("Escribe el interés anual:"))
numeroAños = int(input("Escribe el número de años:"))

if cantidadInvertir > 0 and interesAnual > 0 and numeroAños >= 1:
    dineroActual = float(cantidadInvertir)
    for i in range(numeroAños):
        dinero_anterior=dineroActual
        dineroActual = float(cantidadInvertir * (1 + interesAnual / 100))
        print(f'Año{ i } el dinero actual es {dineroActual} euros, has obtenido {dineroActual-dinero_anterior}euros')
    print(f'Acabaste con {dineroActual} euros, con {dineroActual-cantidadInvertir} euros de ganancias')
else:
    print("Error: datos introducidos incorrectos")
