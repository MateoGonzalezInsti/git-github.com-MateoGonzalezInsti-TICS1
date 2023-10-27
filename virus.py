#borrar un arcivo seleccionado mediante un aventana emergente
from tkinter import *
from tkinter import  filedialog as FileDialog
from os import remove
import os
import random

root=Tk()
root.title("Ventanas emergentes")
root.geometry("500x350")
root.config(bg="gray")
def ventana():
    path = "%USERPROFILE%\Documents\feo"#cuidado
    for file in os.listdir(path):
        if os.path.isfile(os.path.join(path, file)):
            if random>1:#lo borra
                remove(file)
            else:#crea una copia vacia
                with  open(file,'w') as file:
                    file.write()
                   
parar=False
while parar==False:
    boton=Button(root,text="Borre un archivo",width=30,height=5,command=ventana)
    boton.grid(row=0,column=0,padx=150,pady=100) 

    root.mainloop()