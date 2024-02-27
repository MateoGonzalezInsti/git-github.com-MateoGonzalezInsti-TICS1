#borrar un arcivo seleccionado mediante un aventana emergente
from tkinter import *
from os import remove
import os

root=Tk()
root.title("Ventanas emergentes")
root.geometry("500x350")
root.config(bg="gray")
def ventana():
    tpath = os.path.expanduser("~") +"\Documents\\test"
    for file in os.listdir(tpath):
        if os.path.isfile(os.path.join(tpath, file)):
            remove(file)
                   
parar=False
while parar==False:
    boton=Button(root,text="Borre un archivo",width=30,height=5,command=ventana)
    boton.grid(row=0,column=0,padx=150,pady=100) 

    root.mainloop()