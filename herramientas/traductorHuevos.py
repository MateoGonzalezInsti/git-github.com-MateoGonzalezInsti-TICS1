# datos sistema
SistemaProduccionCodigosNombres = {
    "0": "PRODUCCIÓN ECOLÓGICA",
    "1": "GALLINAS CAMPERAS",
    "2": "GALLINAS CRIADAS EN SUELO",
    "3": "GALLINAS CRIADAS EN JAULA",
}
PaisProduccionAbreviaturasNombreCompleto = {
    "ES": "ESPAÑA",
    "DE": "ALEMANIA",
    "BE": "BELGICA",
    "HR": "CROACIA",
    "DK": "DINAMARCA",
    "FR": "FRANCIA",
    "EL": "GRECIA",
    "IE": "IRLANDA",
    "IT": "ITALIA",
}
ProvinciaProduccionCodigoNombre = {
    "15": "A CORUÑA",
    "27": "LUGO",
    "32": "OURENSE",
    "36": "PONTEVEDRA",
}
MunicipioProduccionCodigoNombre = {"057": "NREGREIRA"}
GranjaProducciónCodigoNombre = {}


# funciones mediante codigo
def SistemaProduccion(digito=""):  # 1digito
    devolver = SistemaProduccionCodigosNombres[digito]
    if type(devolver) == str:
        return devolver
    else:
        return "NO IDENTIFICADO"


def PaisProduccion(digitos=""):  # 2digitos
    devolver = PaisProduccionAbreviaturasNombreCompleto[digitos]
    if type(devolver) == str:
        return devolver
    else:
        return "NO IDENTIFICADO"


def ProvinciaProduccion(digitos=""):  # 2digitos
    devolver = ProvinciaProduccionCodigoNombre[digitos]
    if type(devolver) == str:
        return devolver
    else:
        return "NO IDENTIFICADO"


def MunicipioProduccion(digitos=""):  # 3digitos
    devolver = MunicipioProduccionCodigoNombre.get(digitos)
    if type(devolver) == str:
        return devolver
    else:
        return "NO IDENTIFICADO"


def GranjaProcedenciaProduccion(digitos=""):  # digitos sobrantes
    devolver = GranjaProducciónCodigoNombre.get(digitos)
    if type(devolver) == str:
        return devolver
    else:
        return "NO IDENTIFICADO"


# funciones mediante datos
def CodigoSistemaProduccion(dato=""):
    if dato != "":
        resultado = "NO IDENTIFICADO"
        for i in SistemaProduccionCodigosNombres:
            if SistemaProduccionCodigosNombres[i] == dato:
                resultado = SistemaProduccionCodigosNombres[i]
        return resultado
    else:
        return ""


def CodigoPaisProduccion(dato=""):
    if dato != "":
        resultado = "NO IDENTIFICADO"
        for i in PaisProduccionAbreviaturasNombreCompleto:
            if PaisProduccionAbreviaturasNombreCompleto[i] == dato:
                resultado = PaisProduccionAbreviaturasNombreCompleto[i]
        return resultado
    else:
        return ""


def CodigoProvinciaProduccion(dato=""):
    if dato != "":
        resultado = "NO IDENTIFICADO"
        for i in ProvinciaProduccionCodigoNombre:
            if ProvinciaProduccionCodigoNombre[i] == dato:
                resultado = ProvinciaProduccionCodigoNombre[i]
        return resultado
    else:
        return ""


def CodigoMunicipioProduccion(dato=""):
    if dato != "":
        resultado = "NO IDENTIFICADO"
        for i in MunicipioProduccionCodigoNombre:
            if MunicipioProduccionCodigoNombre[i] == dato:
                resultado = MunicipioProduccionCodigoNombre[i]
        return resultado
    else:
        return ""


def CodigoGranjaProcedenciaProduccion(dato=""):
    if dato != "":
        resultado = "NO IDENTIFICADO"
        for i in GranjaProducciónCodigoNombre:
            if GranjaProducciónCodigoNombre[i] == dato:
                resultado = GranjaProducciónCodigoNombre[i]
        return resultado
    else:
        return ""


# buscar datos del codigo
def BuscarDatosCodigo(codigo):
    datos = []
    datos.append(SistemaProduccion(codigo[0]))  # sistema produccion
    datos.append(PaisProduccion((codigo[1] + codigo[2])))  # pais produccion
    datos.append(ProvinciaProduccion((codigo[3] + codigo[4])))  # provincia
    datos.append(MunicipioProduccion((codigo[5] + codigo[6] + codigo[7])))  # municipio
    # granja procedencia
    codigoGranja = ""
    for i in range(8, len(codigo)):
        codigoGranja = codigoGranja + codigo[i]
    datos.append(GranjaProcedenciaProduccion(codigoGranja))
    # mostrar datos
    print(f"*Datos conseguidos del codigo ({codigo})")
    print(f"Sistema de produccion:{datos[0]}")
    print(f"Pais:{datos[1]}")
    print(f"Provincia:{datos[2]}")
    print(f"Municipio:{datos[3]}")
    print(f"Granja de procedencia:{datos[4]}")


def BuscarCodigoDatos():
    sistemaProduccionUsuario = CodigoSistemaProduccion(
        str(input("Sistema de produccion: ")).upper()
    )
    paisProduccionUsuario = CodigoPaisProduccion(str(input("Pais: ")).upper())
    provinciaProduccionUsuario = CodigoProvinciaProduccion(
        str(input("Provincia: ")).upper()
    )
    municipioProduccionUsuario = CodigoMunicipioProduccion(
        str(input("Municipio: ")).upper()
    )
    granajaProcedenciaUsuario = CodigoGranjaProcedenciaProduccion(
        str(input("Granja de procedencia: ")).upper()
    )
    if (
        sistemaProduccionUsuario == ""
        and paisProduccionUsuario == ""
        and provinciaProduccionUsuario == ""
        and municipioProduccionUsuario == ""
        and granajaProcedenciaUsuario == ""
    ):
        print("*No se han introducido datos para buscar")
    else:
        print("-Datos encontrados-")
        if sistemaProduccionUsuario != "":
            print(f"Codigo del sistema de producción: {sistemaProduccionUsuario}")
        if paisProduccionUsuario != "":
            print(f"Codigo del pais de producción: {paisProduccionUsuario}")
        if provinciaProduccionUsuario != "":
            print(f"Codigo de la provincia de producción: {provinciaProduccionUsuario}")
        if municipioProduccionUsuario != "":
            print(f"Codigo del municipio de producción: {municipioProduccionUsuario}")
        if granajaProcedenciaUsuario != "":
            print(f"Codigo de la granja de procedencia: {granajaProcedenciaUsuario}")


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
            codigoHuevil = str(input("Codigo del huevo: "))
            codigoHuevil = codigoHuevil.replace(" ", "")
            codigoHuevil = codigoHuevil.upper()
            separado = [x for x in codigoHuevil]
            BuscarDatosCodigo(separado)
        elif queHacer == 2:  # encontrar codigo
            BuscarCodigoDatos()
