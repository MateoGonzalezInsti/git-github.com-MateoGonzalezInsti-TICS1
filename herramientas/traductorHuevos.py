# datos sistema
SistemaProduccionCodigosNombres = {
    "0": "PRODUCCIÓN ECOLÓGICA",
    "1": "GALLINAS CAMPERAS",
    "2": "GALLINAS CRIADAS EN SUELO",
    "3": "GALLINAS CRIADAS EN JAULA",
}
PaisProducciónAbreviaturasNombreCompleto = {
    "ES": "ESPAÑA",
    'DE':'ALEMANIA',
    'BE':'BELGICA',
    'HR':'CROACIA'
    }
ProvinciaProducciónCodigoNombre = {"31": "SIN PONER"}
MunicipioProducciónCodigoNombre = {"050": "SIN PONER"}
GranjaProducciónCodigoNombre = {"374": "SIN PONER"}


# funciones mediante codigo
def SistemaProduccion(digito):  # 1digito
    devolver = SistemaProduccionCodigosNombres[digito]
    if type(devolver) == str:
        return devolver
    else:
        return "NO IDENTIFICADO"


def PaisProducción(digitos):  # 2digitos
    devolver = PaisProducciónAbreviaturasNombreCompleto[digitos]
    if type(devolver) == str:
        return devolver
    else:
        return "NO IDENTIFICADO"


def ProvinciaProducción(digitos):  # 2digitos
    devolver = PaisProducciónAbreviaturasNombreCompleto[digitos]
    if type(devolver) == str:
        return devolver
    else:
        return "NO IDENTIFICADO"


def MunicipioProducción(digitos):  # 3digitos
    devolver = PaisProducciónAbreviaturasNombreCompleto[digitos]
    if type(devolver) == str:
        return devolver
    else:
        return "NO IDENTIFICADO"


def GranjaProcedenciaProducción(digitos):  # digitos sobrantes
    devolver = PaisProducciónAbreviaturasNombreCompleto[digitos]
    if type(devolver) == str:
        return devolver
    else:
        return "NO IDENTIFICADO"


# buscar datos del codigo
def BuscarDatosCodigo(codigo):
    datos = []
    datos.append(SistemaProduccion(codigo[0]))  # sistema produccion
    datos.append(PaisProducción((codigo[1] + codigo[2])))  # pais produccion
    datos.append(ProvinciaProducción((codigo[3] + codigo[4])))  # provincia
    datos.append(MunicipioProducción((codigo[5] + codigo[6] + codigo[7])))  # municipio
    # granja procedencia
    codigoGranja = ""
    for i in range(7, len(codigo)):
        codigoGranja = codigoGranja + codigo[i]
    datos.append(GranjaProcedenciaProducción(codigoGranja))
    #mostrar datos
    print('*Datos conseguidos del codigo')
    print(f'Sistema de produccion:${datos[0]}')
    print(f'Pais:${datos[1]}')
    print(f'Provincia:${datos[2]}')
    print(f'Municipio:${datos[3]}')
    print(f'Granja de procedencia:${datos[4]}')

# recibir datos usuario
while True:
    queHacer = 0
    while not (queHacer == 1 or queHacer == 2):
        queHacer = int(
            input(
                "Que quieres hacer:\n1-Buscar informacion sobre un codigo\n2-Conseguir codigo sobre sus datos\nTu opcion: "
            )
        )
        if queHacer == 1:  # buscar datos codigo
            codigoHuevil = (
                str(input("Codigo del huevo: "))
            )
            codigoHuevil=codigoHuevil.replace(" ", "")
            codigoHuevil=codigoHuevil.upper()
            separado=[x for x in codigoHuevil]
            BuscarDatosCodigo(separado)
        elif queHacer == 2:  # encontrar codigo
            print("encontrar codigo(Sin programar)")
