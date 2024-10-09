var Student1 = {
    firstName: 'Badr',
    lastName: 'Bouzagui',
    age: 26,
    location: 'Casablanca',
};
var Student2 = {
    firstName: 'John',
    lastName: 'Wick',
    age: 40,
    location: 'New York',
};
var studentsList = [Student1, Student2];
function renderTable() {
    var table = document.createElement("table");
    studentsList.forEach(function (student) {
        var row = table.insertRow();
        var firstNameC = row.insertCell();
        firstNameC.innerHTML = student.firstName;
        var locationC = row.insertCell();
        locationC.innerHTML = student.location;
    });
    document.body.appendChild(table);
}
renderTable();
