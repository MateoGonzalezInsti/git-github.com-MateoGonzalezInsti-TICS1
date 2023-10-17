zodiacos={'Mono','Gallo','Perro','Cerdo','Rata','Buey','Tigre','Conejo','Dragón','Serpiente','Caballo','Oveja'}
mes=int(input('Introduce tu año de nacimiento:'))
print(f'tu signo es {zodiacos[mes%12]}')