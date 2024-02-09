from os import path
def getDatos():
    dni=str(input('Introduzca un DNI: '))
    if path.exists('traballo\BaseDatos.txt'):
            with  open('traballo\BaseDatos.txt','r') as file:
                datos=""
                for line in file:
                    datos+=line
                datos=datos.split('\n')
                datosSeparados=[]
                for i in datos:
                    datosSeparados.append(i.split(';'))
                for cita in datosSeparados:
                    if cita[0]==dni:
                        return cita
    else :
        setdatos("")

def setdatos(datos):
    with open("traballo\BaseDatos.txt","w") as file:
        file.write(str(datos))
        
getDatos()