import turtle
#minute video 14:56min; enalce:https://youtu.be/lKzEvbGbbPo
window = turtle.Screen()  # ventana
# ajustes ventana
window.title("Juego Snake Python-By Mateo González")
window.setup(width=600, height=600)
window.bgcolor("light green")


# snake objeto
head = turtle.Turtle()

# ajustes iniciales snake
head.speed(0)  # velocidad animacion(movimiento)
head.shape("square")  # forma snake (cubo)
head.color("green")  # color snake
head.penup()  # elimina el rastro de la animacion
head.goto(0, 0)  # posicion (centro ventana)
head.direction = "up"  # direccion


# movimientos del snake
def mov():
    if head.direction == "up":
        oY = head.ycor()  # guardar posicion y
        oX = head.xcor()  # guardar posicion x

        head.sety(oY + 10)

while True:
    window.update()
    mov()


turtle.done()  # ejecutar codigo
