n_bucle=int(input('Introduce la cantidad de nombres: '))
lista_nombres=[]
for i in range(n_bucle):
    texto=str(input('Introduce quien eres:')).split(' ')#[soy ,"nombre"]
    lista_nombres.append(texto[1])
for i in lista_nombres:
    print(f'Hola, {i}')
    
    