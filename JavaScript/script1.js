function describeStudent(name, age, isPlaced){
        console.log(`${name} is ${age} years old and is ${isPlaced? " placed" : "not placed"}`);

}

describeStudent("John", 22, true);

let Students = [{name: "Alice", age: 21, isPlaced: false},{name: "Bob", age: 23, isPlaced: true}, {name: "Charlie", age: 20, isPlaced: false}];

Students.forEach(student =>{
    describeStudent(student.name, student.age, student.isPlaced);
})