import datetime

entrada = input(
    "Introduzca una hora en formato HH:MM y que estea comprendida entre 01:00 y 12:59: "
)
hora = datetime.datetime.strptime(entrada, "%H:%M").time()
horaEspejo = hora
if horaEspejo.hour!=12:
    horaEspejo = horaEspejo.replace(hour=12 - horaEspejo.hour)
if hora.minute != 0 and hora.minute<30:
    horaEspejo = horaEspejo.replace(minute=(60 - horaEspejo.minute))
    horaEspejo = horaEspejo.replace(hour=horaEspejo.hour - 1)
print(f"{horaEspejo.hour}:{horaEspejo.minute}")
