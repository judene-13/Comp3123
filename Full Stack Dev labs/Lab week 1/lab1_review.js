let variablelocal = 200
var variableglobal = 100
variableglobal = "hello"

console.log(variableglobal)

//prototypes: one time use object created from the base proptype called Object

const newObject = {
    prop1: "Judene",
    prop2: "comp3123",
    method1: function(param1){
        console.log(param1)
    }
}

console.log(newObject)
console.log(newObject.prop1)
console.log(newObject.prop2)
newObject.method1("burger")

//Prototype: constructor

function Student(student_name, course, lunch){
    this.prop1 = student_name
    this.prop2 = course
    this.prop3 = lunch

    this.method1 = function(param1){
        console.log(param1)
    }
}

const student_morning = new Student("Judene", "comp3123", "burger")
console.log(student_morning)
console.log(student_morning.prop1)
console.log(student_morning.prop2)
student_morning.method1(student_morning.prop3)

//optional homework: instaniate another student object and print its values
const student_afternoon = new Student("Aisha", "comp2151", "sweet and sour chicken")
console.log(student_afternoon)
console.log(student_afternoon.prop1)
console.log(student_afternoon.prop2)
console.log(student_afternoon.prop3)
//Prototypes: Add a method AFTER/IN ANOTHER FILE to give more capabilities to the prototypes
Student.prototype.introduce = function(){
    return "My name is " + this.prop1 + " and I am taking " + this.prop2
}

console.log(student_morning.introduce())
console.log(student_afternoon.introduce())

Student.prototype.prop4 = "hard-coded value"
Student.prototype.method2 = function(param1){
    return param1
}

console.log(student_morning.prop4)
console.log(student_morning.method2("chow mein"))

//class
class Prof{
    constructor(prof_name_j){
        this.prof_name = prof_name_j
    }
    method1(param1){
        return param1
    }
}

const morning_prof = new Prof("Laily")
console.log(morning_prof)

//Optional HW: call morning_prof's method and directly bext print its property

console.log(morning_prof.method1("COMP3123"))

console.log(morning_prof.prof_name)