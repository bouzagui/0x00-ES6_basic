interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const Student1: Student = {
    firstName: 'Badr',
    lastName: 'Bouzagui',
    age: 26,
    location: 'Casablanca',
};

const Student2: Student = {
    firstName: 'John',
    lastName: 'Wick',
    age: 40,
    location: 'New York',
};

const studentsList: Student[] = [Student1, Student2];

function renderTable(): void {
    const table = document.createElement("table");

    studentsList.forEach(student => {
        const row = table.insertRow();
    
        const firstNameC = row.insertCell();
        firstNameC.innerHTML = student.firstName;

        const locationC = row.insertCell();
        locationC.innerHTML = student.location;
    });

    document.body.appendChild(table);
}

renderTable();
