import csv
DIRECCION_BASE_DATOS='bibliotecaContraseñas-Proyecto Propio/biblioteca.csv'

def LeerDatosBiblioteca():
    DatosCompletosContraseña=''
    with open(DIRECCION_BASE_DATOS,newline='') as biblioteca:
        data=csv.reader(biblioteca,delimiter=',')
        DatosCompletosContraseña=list(data)
    return str(DatosCompletosContraseña)

def CogerDatosBiblioteca(data):
    Datos=data.replace('[','').replace(']','').split(',')
    DatosDevolver=[]
    for i in range(len(Datos)):
        DatosDevolver.append(Datos[i])
    return DatosDevolver

def ActualizarDatosBiblioteca(data):
    with open(DIRECCION_BASE_DATOS,newline='') as biblioteca:
        writer=csv.writer(biblioteca,delimiter=',')
        writer.writerows(data)

ActualizarDatosBiblioteca(CogerDatosBiblioteca(LeerDatosBiblioteca()))