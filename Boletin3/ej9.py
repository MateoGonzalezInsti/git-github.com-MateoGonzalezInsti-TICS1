#Escribir un programa que almacene la cadena de caracteres contraseña en una variable, pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.

contraseñaEnunciado_ej2=('contraseña').upper()
textoUsuario_ej2=str(input('Ecribe la contraseña:'))
while textoUsuario_ej2.upper()!=contraseñaEnunciado_ej2:
    print('Contraseña incorrecta')
    textoUsuario_ej2=str(input('Ecribe la contraseña:'))
print('Contraseña correcta')