n=int(input('Introduce tu fila'))
if n>0:
    print('Buh')
for i in range(n):
    t=0
    p1=""
    for j in range(i):
        t+=1
        p1+=('B'+('U'*(t))+'H')
        if i<=t-1:
            t=0
    semilla=p1+' '+("B"+('U'*(i+1))+"H")+' '+p1
    print(semilla)