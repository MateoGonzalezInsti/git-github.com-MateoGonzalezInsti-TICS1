import datetime


entrada = str(
    input(
        "Introduzca una hora en formato HH:MM y que estea comprendida entre 01:00 y 12:59: "
    )
)
hora = datetime.datetime.strptime(entrada, "%H:%M").hour()
minuto = datetime.datetime.strptime(entrada, "%H:%M").minute()

hora = 12 - hora
if hora == 0:
    hora = 1
if minuto > 0:
    hora -= 1
    minuto = 60 - minuto

print(f"Hora correcta:{hora}:{minuto}")
