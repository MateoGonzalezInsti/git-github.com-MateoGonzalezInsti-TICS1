#mira si una palabra es palindroma o no

palabra=str(input('Escribe una palabra:'))
palabraInversa=""
for i in range(len(palabra)-1,-1,-1):
    palabraInversa+=palabra[i]
if palabra==palabraInversa:
    print('La palabra es palíndroma...')
else:
    print('La palabra no es palíndroma...')