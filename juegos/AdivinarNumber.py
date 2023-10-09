#adivina un numero aleatorio calculado por el pc
import random
#funciones
def getNumero(vidas,numAdivinar,intentos):#recibir numero usuario y comprobar resultado
    #interfad
    print(f'Vidas restantes {vidas}')
    numeroUsuario=int(input('Escribe un numero:'))
    #comprobar numero
    if numAdivinar==numeroUsuario:#acierto
        print('¡Lo has acertado!')

    else:#fallo
        vidas-=1
        print('¡Has fallado!')
        intentos+=1
def SumarPuntos(intentos):
    puntosSumar=int(0)
    if ((15-intentos)*5)<5:
        puntosSumar=int(5)
    else:
        puntosSumar=int((15-intentos)*5)
        datosJugadores[puertoJugador][1]+=puntosSumar
    
terminarPrograma=False
datosJugadores=[]#0:nombre,1:puntuacion,2:vidas
while terminarPrograma==False:#salir del programa?
    #iniciar jugador 
    #iniciar
    print('Juego de adivinar un numero')
    nombreUsuario=str(input('Escriba su nombre:'))
    puertoJugador=int(-1)#importante(indice del array para acceder a los datos de guardado)
    for i in range(len(datosJugadores)):#encontrar si existen datos de guardado
        if datosJugadores[i][0]==nombreUsuario:
            puertoJugador=i
    valoresDefectoCuenta=[nombreUsuario,0,6]
    if puertoJugador==-1:#no se encontro datos guardados
        puertoJugador=len(datosJugadores)
        #guardar datos si no existen
        datosJugadores.append(valoresDefectoCuenta)#valores por defecto
    else:#existen
        #comprobar si tiene vidas
        if datosJugadores[puertoJugador][1]<=0:#no tiene vidas
            #reiniciar datos del jugador
            datosJugadores[puertoJugador]=valoresDefectoCuenta#valores por defecto
    #generar partidas
    terminarGenerarPartidas=False
    while terminarGenerarPartidas==False and datosJugadores[puertoJugador][2]>0:#bucle partidas
        #numero random
        numeroRangoUsuario=int(input('Escribe el rango de numeros posibles: 1...'))
        numeroAdivinar=random.randint(1,numeroRangoUsuario)
        print('¡Recuerda la partida se termina cuando se te acaben las vidas o abandones!')
        #datos partida
        partidaGanada=False
        intentosPartida=int(0)
        terminarPartida=False
        while terminarPartida==False and datosJugadores[puertoJugador][2]>0:
            getNumero(datosJugadores[puertoJugador][2],numeroAdivinar)
        #sumar una vida si gano la partida
        if partidaGanada:
            datosJugadores[puertoJugador][2]+=1
        
        
print('Programa finalizado...')