const course = {
    coursename: "Course",
    price: "999",
    courseInstructor: "Hitesh"
}

//course.courseInstructor => its one method to access a value from object

const {courseInstructor} = course

console.log(courseInstructor);

const {courseInstructor: Instructor} = course

console.log(Instructor);

//**************************JSON ******************************************

//{
    "name": "Zaki",
    "coursename": "JS",
    "price": "free"
}

[
    {},
    {},
    {}
]


// THere are lot of tools to understand JSON in better way one of them is https://jsonformatter.org/
