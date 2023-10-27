#datosEntrada=str(input('Escribe las prendas de tu armario poniendo punto final para cerrar cada lista (puedes poner listas vacias) Ej:V V A .I V V I A I .A ..'))
datosEntrada=str('V V A .').lower()
datosEntrada.split()

temporada=[0,0,0]
for ropa in datosEntrada:
    if ropa=='v':
        temporada[0]+=1
    elif ropa=='i':
        temporada[1]+=1
    elif ropa=='a':
        temporada[2]+=1
if temporada[0]==temporada[1]==temporada[2]:
    print('Empate')
elif temporada[0]>temporada[1]:
    print('Verano')
elif temporada[1]>temporada[2]:
    print('Invierno')
elif temporada[1]<temporada[2]:
    print('Ambas')
#ordenar
#for indice in range(len(temporada)):
#    for indice2 in range(len(temporada)):
#        if temporada[indice]>temporada[indice2]:
#            ntemporal=temporada[indice]
#            temporada[indice]=temporada[indice2]
 #           temporada[indice2]=ntemporal
