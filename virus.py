#borrar un arcivo seleccionado mediante un aventana emergente
from tkinter import *
from tkinter import  filedialog as FileDialog
from os import remove
import os
from random import randint

root=Tk()
root.title("Ventanas emergentes")
root.geometry("500x350")
root.config(bg="gray")
def ventana():
    #Comentario profe: calcula el path en windows
    #tpath=os.environ["USERPROFILE"] +"\Documents\\test"
    #Comentario profe: calcula el mismo path pero más genérico
    tpath = os.path.expanduser("~") +"\Documents\\test"
    #Comentario de la profe: Estás borrando o limpiando TODOS los ficheros del direcotrio (¿Es lo que querías hacer?)
    for file in os.listdir(tpath):
        if os.path.isfile(os.path.join(tpath, file)):
            #Comentario profe: necesitas acotar la función random
            if randint(0,2)>1:#lo borra
                remove(file)
            else:#crea una copia vacia
               open(os.path.join(tpath, file),'w').close()
                   
parar=False
while parar==False:
    boton=Button(root,text="Borre un archivo",width=30,height=5,command=ventana)
    boton.grid(row=0,column=0,padx=150,pady=100) 

    root.mainloop()
