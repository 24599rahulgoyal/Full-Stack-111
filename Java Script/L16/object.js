var student = {
    'name ram': 'rahul',
    age: 20,
    email: 'rahul@gmail.com',
    city :'Delhi'
}
console.log(student.age);
console.log(student.email);
console.log(student["name ram"]);
console.log(student.city);

for(var key in student){
    console.log(student[key]);
}