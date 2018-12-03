a = ""
b = ""
c = ""

types = ["Isosceles","Scalene","Equilateral","Not a triangle"]

function iso(isosceles){
return(alert(types[0]))
}
function equal(equiangular){
	return (alert(types[2]))
}
function Nan(notatriangle){
	return (alert(types[3]))
}

for (count = 0; count < 1; count+=1){
	a = parseInt(prompt("Enter the first measurement"))
  b = parseInt(prompt("Enter the second measurement"))
  c = parseInt(prompt("Enter the third measurement"))
  
}
if (a == b && b == c){
	equal()}
 else if (a + c == b || b + c == a || a + b == c || a + c < b || b + c < a || a + b < c){
	Nan()

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
else if (a!=c && b!=c){
	alert(types[1])
}


