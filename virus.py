#borrar un arcivo seleccionado mediante un aventana emergente
from tkinter import *
from tkinter import  filedialog as FileDialog
from os import remove

root=Tk()
root.title("Ventanas emergentes")
root.geometry("500x350")
root.config(bg="gray")
def ventana():
    fichero=FileDialog.askopenfilename(title="Abrir un archivo")
    remove(fichero)
parar=False
while parar==False:
    boton=Button(root,text="Elige un archivo",width=30,height=5,command=ventana)
    boton.grid(row=0,column=0,padx=150,pady=100)

    root.mainloop()