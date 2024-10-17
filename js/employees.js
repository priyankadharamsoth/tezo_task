let selectedAlphabet = '';

let searchElement = '';
let statusElement;
let locationElement;
let departmentElement;

let applyFilterBtn;

function createAlphabetButtons() {
    const filterBy = document.getElementById('filter-by-letter');
    const buttons = Array.from(Array(26)).map((_, index) => {
        const button = document.createElement('button');
        button.classList.add('filter-item');
        button.textContent = String.fromCharCode(65 + index);
        button.addEventListener('click', () => {
            const activeButtons = document.querySelectorAll('.active');
            activeButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active')
            selectedAlphabet = String.fromCharCode(65 + index);
            const filteredEmployees = filterEmployees(employees);
            renderTable(filteredEmployees);
        });
        return button;
    });
    buttons.forEach(button => filterBy.appendChild(button));
}

function setupCategoryFilters() {
     searchElement = document.getElementById("search");
     statusElement = document.getElementById("StatusDropDown");
     locationElement = document.getElementById("LocationDropDown");
     departmentElement = document.getElementById("DepartmentDropDown");
     applyFilterBtn = document.getElementById("ApplyFilter");

    const handleFilterChange = () => {
        const filteredEmp = filterEmployees(employees);
        renderTable(filteredEmp);
    };
    console.log(applyFilterBtn);
    applyFilterBtn.addEventListener('click', handleFilterChange);
    searchElement.addEventListener('search', handleFilterChange);
}

function filterEmployees(employeeList) {
    const searchValue = searchElement.value.toLowerCase();
    const statusValue = statusElement.value;
    const locationValue = locationElement.value;
    const departmentValue = departmentElement.value;

    return employeeList.filter(emp => {
        const searchMatch = !searchValue || emp.userName.toLowerCase().includes(searchValue);
        const statusMatch = !statusValue || emp.status === statusValue;
        const locationMatch = !locationValue || emp.location.toString() === locationValue;
        console.log(emp.location, locationValue)
        const departmentMatch = !departmentValue || emp.dept.toString() === departmentValue;
        console.log(emp.de,departmentValue);
        const alphabetMatch = !selectedAlphabet || emp.userName.toLowerCase().startsWith(selectedAlphabet.toLowerCase());

        return searchMatch && statusMatch && locationMatch && departmentMatch && alphabetMatch;
    });
}

function renderTable(employeeList) {
    const tableBody = document.querySelector('#employee-table tbody'); 
    tableBody.innerHTML = ''; 

    employeeList.forEach(emp => {
        const statusCls = emp.status === Status.ACTIVE ? "status-active-btn" : "status-inactive-btn";
        const row = document.createElement('tr');
        const empRole = roles.find(role => role.id == emp.role).role;
        const empDpt = departments.find(dept => dept.id == emp.dept).department;
        const empLocation = locations.find(loc => loc.id == emp.location).location;
        row.innerHTML = `
            <td><input type="checkbox" id="${emp.id}" name="employee" value="${emp.id}"></td>
            <td> 
                <div class="flex-align-center">
                    <img src="/images/profile.png" alt="" height="40px" class="rounded-img">
                    <div class="flex-column-start pr-8">
                        <p class="bold" style="color:#2c2c2c;">${emp.userName}</p>
                        <p style="color: #909aab;">${emp.email}</p>
                    </div>
                </div>
            </td>
            <td>${empLocation}</td>
            <td>${empDpt}</td>
            <td>${empRole}</td>
            <td>${emp.employeeNum}</td>
            <td><p class="${statusCls}">${emp.status}</p></td>
            <td>${emp.jointDt}</td>
            <td><img src="/images/more-hz.svg" alt=""></td>
        `;
        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createAlphabetButtons();
    setupCategoryFilters();
    renderTable(employees);
});
