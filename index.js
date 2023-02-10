// Today's assignment
// Create a class called Person that has properties for firstName, lastName, and id. 
// Add a method fullName that returns the full name of the person.

// Create a class called Student that inherits from the Person class and adds
 //a property enrolledCourses that is an array of strings. 
// Add a method addCourse that adds a course to the enrolledCourses array.

// Create a class called Course that has properties for name, code, and teacher. 
// Add a method toString that returns a string representation of the course.

// Modify the Student class to also have a property coursesTaken that is a 
//Map where the keys are course codes and the values are instances of the Course class. 
// Add a method addTakenCourse that adds a course to the coursesTaken map.

// Handle errors in the code by using try-catch blocks. 
// For example, if a student tries to enroll in a course that has already been taken, 
//throw an error saying "Course already taken".

// Add error handling to the code to ensure that inputs are valid, for example, check that 
//the student's ID is a number.

// Create a module that exports the classes. In another module, import the classes and use 
//them to create objects.

// This is a pure JS challenge, no need for any HTML/CSS

export class Person{
    
    constructor(firstName, lastName, id){
        if(typeof firstName !== 'string' || typeof lastName !== 'string' || typeof id !== 'number'){
            throw new Error('Invalid input');
        }
        if(firstName.length <= 0 || lastName.length <= 0 || id < 0){
            throw new Error('Invalid input');
        }

        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }
    fullName(){
        if(this.firstName.length <=0 || this.firstName.length <=0 ){
            throw new Error('Invalid input');
        }
        return `${this.firstName} ${this.lastName}`
    }
}

export class Student extends Person{
    constructor(firstName, lastName, id){
        super(firstName, lastName, id);
        this.enrolledCourses = [];
    }
    addCourse(course){
        if(typeof course !== 'string'){
            throw new Error('Invalid input');
        }
        if(course.length <= 0){
            throw new Error('Invalid input');
        }
        if(this.enrolledCourses.includes(course)){
            throw new Error('Course already taken');
        }

        this.enrolledCourses.push(course);
    }
}

export class Course{
    constructor(name, code, teacher){

        if(typeof name !== 'string' || typeof code !== 'string' || typeof teacher !== 'string'){
            throw new Error('Invalid input');
        }
        if(name.length <= 0 || code.length <= 0 || teacher.length <= 0){
            throw new Error('Invalid input');
        }

        this.name = name;
        this.code = code;
        this.teacher = teacher;
    }

    toString(){
        return `Name: ${this.name}\nCode:${this.code}\nTeacher:${this.teacher}`;
    }
}


Student.prototype.courseTaken = new Map(); //{course_code: Course}
// addTakenCourse using prototyping 
Student.prototype.addTakenCourse = function(course){
    this.courseTaken.set(course.code, course);
}
