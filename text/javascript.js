a = 0
b = 0
c = 0

types = ["Isosceles","Scalene","Equilateral","Not a triangle"]

function iso(isosceles){
return(alert(types[0]))
}

for (count = 0; count < 1; count+=1){
	a = parseInt(prompt("Enter the first measurement"))
  b = parseInt(prompt("Enter the second measurement"))
  c = parseInt(prompt("Enter the third measurement"))
  
}
if (a == b && b == c){
	print (types[2])}
 else if (a + c == b || b + c == a || a + b == c || a + c < b || b + c < a || a + b < c){
	alert (types[3])

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
	alert (types[1])

else if (a = 0 && b == 0 && c == 0){
	alert (types[4])
}

}

