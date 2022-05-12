//For Loop

var number = [10, 15, 20, 30, 40, 50, 60, 70, 80]
 
for (var i = 0; i < number.length; i++) {
console.log(number[i])
}

//For In Loop

var object = {
    FirstName : "Pradeep",
    SecondName : "Raj",
    Age : 25,
    Nationality : "Indian",
}

for (var i in object) {
    console.log(i, object[i]);
}

//For of 

const cars=["BMW", "Audi", "Polo", "Tata", "Nissan"]

for (const i in cars){
    console.log(i, cars[i])
}

//For Each

const numbers = [10, 20, 30, 40, 50];
numbers.forEach(Multiplication)

function Multiplication(item, index, arr) {
  console.log(arr[index] = item * 2);
}

//Resume

var resume = {
    FirstName : "Pradeep",
    LastName : "Raj",
    Age : 25,
    Designation: "Developer",
    Skills : ["HTML", "CSS", "JavaScript"]
}

for (var i in resume) {
    console.log(i, resume[i]);
}