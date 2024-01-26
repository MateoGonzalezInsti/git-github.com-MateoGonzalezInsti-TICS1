import datetime

entrada = str(
    input(
        "Introduzca una hora en formato HH:MM y que estea comprendida entre 01:00 y 12:59: "
    )
)
hora = datetime.datetime.strptime(entrada, "%H:%M").time()
horaEspejo = hora
if horaEspejo.minute!=0:
    horaEspejo = horaEspejo.replace(minute=(60-horaEspejo.minute))
print(horaEspejo)
if hora.minute > 0:
   horaEspejo = horaEspejo.replace(hour=hora.hour - 1)

print(f"{horaEspejo.hour}:{horaEspejo.minute}")
