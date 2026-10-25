const students = [
    { id: 1, name: "Sara", marks: 85 },
    { id: 2, name: "Ashmil", marks: 78 },
    { id: 3, name: "Hunazala", marks: 90 }
];
function getStudentData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const student = students.find(s => s.id === id);
            if (student) {
                resolve(student);
            } else {
                reject(`Student with id ${id} was not found.`);
            }
        }, 2000);
    });
}
async function loadStudents() {
    try {
        console.log("Loading Student 1...");
        const student1 = await getStudentData(1);
        console.log("Student 1=", student1);

        console.log("Loading Student 2...");
        const student2 = await getStudentData(2);
        console.log("Student 2=", student2);

        console.log("Loading Student 3...");
        const student3 = await getStudentData(3);
        console.log("Student 3=", student3);
    } catch (error) {
        console.log("Error=", error);
    }
}
loadStudents();
console.log("line runs while the students are loading");
// I used await so each student loads one after the other.
// It waits only inside this function, so the browser does not freeze.