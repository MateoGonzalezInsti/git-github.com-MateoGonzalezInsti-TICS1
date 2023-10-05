#Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre por pantalla el número de veces que aparece la letra en la frase.

frase=str(input('Escribe una frase:'))
letra=str(input('Escribe una letra:'))
numeroVeces=int(0)
for i in range(len(frase)):
    if frase[i-1]==letra:
        numeroVeces+=1
print(f'Aparece {numeroVeces} veces')