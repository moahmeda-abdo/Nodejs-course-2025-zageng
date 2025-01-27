
const students = [
    { name: "Mohamed", grades: [80, 90, 100], passed: false },
    { name: "Ali", grades: [60, 70, 65], passed: false },
    { name: "Salah", grades: [85, 95, 100], passed: false },
];


const calculateAverage = (grades) => {
    const sum = grades.reduce((acc, num) => acc + num)
    return sum / grades.length
}


const isPassed = (grade) => {
    return grade >= 70
}

const updatedStudents = students.map((student) => {
    const avg = calculateAverage(student.grades)
    const passed = isPassed(avg)
    return { ...student, passed : passed , avg : avg }
})

const passedStudents = sortedStudents.filter((student) => student.passed).map((student) => student.name)

const sortedStudents = updateStudents.sort((a, b) => b.grades[0] - a.grades[0])


updatedStudents.forEach((student) => {
    console.log(`${student.name}: Average = ${student.avg}, Passed = ${student.passed}`);
});

console.log("Passed Students:", passedStudents.map((student) => student.name));