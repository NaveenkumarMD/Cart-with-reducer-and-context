fil=open("text.txt")
arr=fil.read()
print(type(arr))
file2=open("text1.txt","w")
arr=arr.split("\n")
arr="','".join(arr)
print(type(arr))
arr=arr.split("','")
dt=[]
for i in range(len(arr)):
    dit={}
    dit[ids]=i
    dit[value]=arr[i]
    dt.append(dit)
print(dt)