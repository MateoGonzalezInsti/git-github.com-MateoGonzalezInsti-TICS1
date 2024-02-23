def comprobarBisiesto(año):
    if año % 4 == 0:
        if año % 100!=0:
            return True
        elif (año % 100 == 0) and (año % 400 == 0):
            return True
        else:
            return False
    else:
        return False


añosIntervalo = str(input("Introduce el año (año), si es intervalo (año,año): "))
añosIntervalo = añosIntervalo.split(",")
resultadosBisiestos = []

if len(añosIntervalo) == 1:
    if comprobarBisiesto(int(añosIntervalo[0])) == True:
        resultadosBisiestos.append(añosIntervalo[0])
elif len(añosIntervalo) > 1:
    for i in range(int(añosIntervalo[0]), (int(añosIntervalo[1]) + 1)):
        if comprobarBisiesto(i) == True:
            resultadosBisiestos.append(i)


print(resultadosBisiestos)