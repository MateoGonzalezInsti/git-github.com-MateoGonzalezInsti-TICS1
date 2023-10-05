#Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un número primo o no.

numeroUsuario=int(input('Introduce un número entero:'))
texto=['par','impar']
print(f'El número es {texto[0] if numeroUsuario%2==0 else texto[1]}')