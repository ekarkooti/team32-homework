const class07Students = [];
function addStudentToClass(studentName) {
  if (!class07Students.includes(studentName) && getNumberOfStudents()) {
    class07Students.push(studentName);
    console.log(`${studentName} added to class07`);
  } else if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} already in class07`);
  }
}
function getNumberOfStudents() {
  if (class07Students.length < 6) {
    return true;
  } else {
    console.log("Cannot add more students to class 07");
    return false;
  }
}
