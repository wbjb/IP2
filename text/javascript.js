a = ""
b = ""
c = ""

types = ["Isosceles","Scalene","Equilateral","Not a triangle"]

function iso(isosceles){
return(types[0])
}

for (count = 0; count < 1; count+=1){
	a = parseInt(prompt("Enter the first measurement"))
  b = parseInt(prompt("Enter the second measurement"))
  c = parseInt(prompt("Enter the third measurement"))
  
}
if (a == b && b == c){
	print (types[2])}
 else if (a + c == b || b + c == a || a + b == c || a + c < b || b + c < a || a + b < c){
	print (types[3])

}

else if (a == b && b !=c){
	iso()

} 
else if (a != b && b ==c){
	iso()

}
else if (a == c && b !=c){
	iso()

}
else if (a != c && b !=c){
	print (types[1])

}

