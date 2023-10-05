#Escribir un programa que pida al usuario una palabra y luego muestre por pantalla una a una las letras de la palabra introducida empezando por la última.

palabraUsuario=str(input('Intrudce una palabra para deletrear:'))
texto=str()
for i in range(len(palabraUsuario)):
    texto=palabraUsuario[i-1]+" "+texto
print(texto)