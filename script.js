// script.js
let students = [];
let editIndex = -1;

const studentTable = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
function displayStudents() {
    studentTable.innerHTML = '';
    students.forEach((student, index) => {
        const row = studentTable.insertRow();
        row.insertCell(0).innerText = student.name;
        row.insertCell(1).innerText = student.age;
        row.insertCell(2).innerText = student.grade;
        const actionsCell = row.insertCell(3);
        const editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.onclick = () => editStudent(index);
        actionsCell.appendChild(editButton);
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = () => deleteStudent(index);
        actionsCell.appendChild(deleteButton);
    });
}
function saveStudent() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;

    if (editIndex === -1) {
        students.push({ name, age, grade });
    } else {
        students[editIndex] = { name, age, grade };
        editIndex = -1;
    }
    clearInputs();
    displayStudents();
}
function editStudent(index) {
    const student = students[index];
    document.getElementById('name').value = student.name;
    document.getElementById('age').value = student.age;
    document.getElementById('grade').value = student.grade;
    editIndex = index; 
}
function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}
function clearInputs() {
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('grade').value = '';
}
document.getElementById('addStudent').onclick = saveStudent;
