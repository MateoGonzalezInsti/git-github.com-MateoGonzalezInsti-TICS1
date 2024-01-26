import datetime

fecha = datetime.date.today()
print(fecha)
hora = datetime.time(10, 30)
print(f"hora:{hora.hour}, minuto:{hora.minute}")


hora = hora.replace(minute=20)
data_time_str = "08:20"
data_time_object = datetime.datetime.strptime(data_time_str, "%H:%M").time()
print(data_time_object)
