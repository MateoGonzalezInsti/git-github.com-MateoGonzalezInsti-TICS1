#f1
dia=int(input('Dia actual:'))
mes=int(input('Mes actual en numero:'))-1
def funcion(dia1,mes1):
    mesesDias= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    timeRestante=0
    for i in range(len(mesesDias)-mes1):
        timeRestante+=mesesDias[mes1+i]
    timeRestante-=dia1
    return timeRestante
print(funcion(dia,mes),'dias restantes')