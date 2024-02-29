import turtle
import time
import random

window_width=600
window_height=600
delay = 0.1
puntos = 0

# minute video 14:56min; enalce:https://youtu.be/lKzEvbGbbPo
window = turtle.Screen()  # ventana
# ajustes ventana
window.title("Juego Snake Python-By Mateo González")
window.setup(width=window_width, height=window_height)
window.bgcolor("light green")


# snake objeto
head = turtle.Turtle()

# ajustes iniciales snake
head.speed(0)  # velocidad animacion(movimiento)
head.shape("square")  # forma snake (cubo)
head.color("green")  # color snake
head.penup()  # elimina el rastro de la animacion
head.goto(0, 100)  # posicion (centro ventana)
head.direction = "stop"  # direccion (up, down, right, left)

# food configuracion
food = turtle.Turtle()
food.speed(0)
food.shape("circle")
food.color("red")
food.penup()
food.goto(0, 0)
food.direction = "stop"


# movimientos del snake
def mov():
    oY = head.ycor()  # guardar posicion y
    oX = head.xcor()  # guardar posicion x
    if head.direction == "up":
        head.sety(oY + 10)
    if head.direction == "down":
        head.sety(oY - 10)
    if head.direction == "right":
        head.setx(oX + 10)
    if head.direction == "left":
        head.setx(oX - 10)


# teclado movimiento snake
def dirUp():  # que hacer
    head.direction = "up"


def dirDown():
    head.direction = "down"


def dirRight():
    head.direction = "right"


def dirLeft():
    head.direction = "left"


window.listen()  # escuchando teclado
window.onkeypress(dirUp, "Up")  # (que hacer,tecla)
window.onkeypress(dirDown, "Down")
window.onkeypress(dirRight, "Right")
window.onkeypress(dirLeft, "Left")


# funciones food
def ColisionFoodSnake():
    if head.distance(food) < 30:
        #puntos=1+puntos#sumar puntos
        Reaparecer()


def Reaparecer():
    minDistance = 30
    # valor
    px = random.randint(minDistance, int((window_width / 2) - minDistance))
    py = random.randint(minDistance, int((window_height / 2) - minDistance))
    # signo
    if random.randint(1, 2) == 1:
        px = -(px)
    if random.randint(1, 2) == 1:
        py = -(py)
    food.goto(px, py)


while True:
    window.update()
    ColisionFoodSnake()
    mov()
    time.sleep(delay)


turtle.done()  # ejecutar codigo
