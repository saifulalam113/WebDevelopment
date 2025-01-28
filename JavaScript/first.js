console.log("Hello World");

const student = {
    fullName : "Saiful Alam",
    age : 28,
    cgpa : 3.5,
    isPass : true
};

student["age"] = student["age"] + 1;

console.log(student.fullName);
console.log(student["fullName"]);
console.log(student.age);