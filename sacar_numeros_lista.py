def sacar_numeros(lista):return [x for x in lista if isinstance(x, int) ==True]

print(sacar_numeros([1,2,'g',3]))