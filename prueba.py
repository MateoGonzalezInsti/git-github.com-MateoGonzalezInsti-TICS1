#ej10
print('Pizzas:')
vgtUsuario_ej10=int(input('1)vegetariano , 2)no vegetariana\n Introduce tu opcion: '))

if vgtUsuario_ej10==1:
    ingredientesUsuario_ej10=int(input('● Ingredientes vegetarianos: 1)Pimiento , 2)tofu.'))
    ingredientestext_ej10=['Pimiento','tofu']
    ingredientesUsuario_ej10=str(ingredientestext_ej10[ingredientesUsuario_ej10-1])
    vgtUsuario_ej10=str('vegetariana')
else:
    ingredientesUsuario_ej10=int(input('● Ingredientes no vegetarianos: 1)Peperoni, 2)Jamón , 3)Salmón.'))
    ingredientestext_ej10=['Peperoni','Jamón','Salmón']
    ingredientesUsuario_ej10=str(ingredientestext_ej10[ingredientesUsuario_ej10-1])
    vgtUsuario_ej10=str('no vegetariana')
print(f'La pizza es {vgtUsuario_ej10}.Ingredientes: mozzarella, tomate y {ingredientesUsuario_ej10}')