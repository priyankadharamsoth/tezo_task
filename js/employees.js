let selectedAlphabet = '';

let searchElement = '';
let statusElement;
let locationElement;
let departmentElement;

let applyFilterBtn;


function loadData() {
    const empContainer = document.getElementById('employee-container');
    const headerSection = document.createElement('section');
    headerSection.innerHTML = `
    <section class="flex-space-between">
               <div>
                    <p class = "filter-header">Employees</p>
                    <p class= "filter-subtitle">Find all of your company's employee accounts and their associated roles.</p>
               </div>
               <div class="flex-space-between">
                    <button class="btn inactive-btn flex-space-between"><img src="/images/Interface/Export.svg" alt="" class="pr-10">Export</button>
                    <button class="btn primary-btn  flex-space-between"><img src="/images/Interface/Add.svg" alt="" class="pr-10">Add Employee</button>
               </div>
            </section>
            <div class="space"></div>
    `;
    empContainer.appendChild(headerSection);

    //alphabet filtering
    const filterByAlphabetSection = document.createElement('section');
    filterByAlphabetSection.id = 'filter-by-letter';
    filterByAlphabetSection.classList.add('flex-space-between');
    filterByAlphabetSection.innerHTML = ` <img src="/images/filter.png" alt="" srcset="" class="pl-6">`;

    empContainer.appendChild(filterByAlphabetSection);

    //space
    const space = document.createElement('div');
    space.classList.add('space');
    empContainer.appendChild(space);

    //filter category container
    const filterByCategorySection = document.createElement('section');
    filterByCategorySection.id = 'filter-category-container';
    filterByCategorySection.classList.add('flex-space-between');
    filterByCategorySection.innerHTML = `
        <div class="flex-space-between">
            <p>Filter</p>
            <img src="/images/filter.png" alt="">
            <form action="">
                <div id = "filter-categories" class="flex-space-between">
                    <div class="filter-category">
                        <select name="status" id="StatusDropDown">
                            <option value = "" disabled selected>Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                    <div class="filter-category">
                        <select name="location" id="LocationDropDown">
                            <option value = "" disabled selected>Location</option>
                            <option value="2">Hyderabad</option>
                            <option value="4">Mumbai</option>
                            <option value="1">Bangalore</option>
                            <option value="3">Chennai</option>
                        </select>
                    </div>
                    <div class="filter-category">
                        <select name="dept" id="DepartmentDropDown">
                            <option value = "" disabled selected>Department</option>
                            <option value="2">PE</option>
                            <option value="3">QA</option>
                            <option value="1">DT</option>
                            <option value="5">UIUX</option>
                            <option value="6">IT</option>
                            <option value="4">HR</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
        <div>
            <button class="dismiss-btn bordered f12">Reset</button>
            <button class="accept-btn f12" id = "ApplyFilter">Apply</button>
        </div>
    `;

    empContainer.appendChild(filterByCategorySection);

    //add space
    const space2 = document.createElement('div');
    space2.classList.add('space');
    empContainer.appendChild(space2);

    //employees-container
    const employeesContainerSection = document.createElement('section');
    employeesContainerSection.id = 'employees-container';

        //add header
        const deleteEmployees = document.createElement('div');
        deleteEmployees.classList.add('flex-space-between');
        deleteEmployees.innerHTML = `
        <div class="flex-content-start">
                            <img src="/images/arrow-turn left -down.png" alt="" height="24px" width="24px" class="pr-6">
                            <button class="accept-btn">Delete</button>
                        </div>
                        <img src="/images/table-add.png" alt="">
        `;

        employeesContainerSection.appendChild(deleteEmployees);

        //add space
        const space3 = document.createElement('div');
        space3.classList.add('space');
        employeesContainerSection.appendChild(space3);

        //table
        employeeTable  = document.createElement('table');
        employeeTable.id = 'employee-table';
        employeeTable.innerHTML = `
                <thead>
                <tr>
                    <th><input type="checkbox" id="select-all" name="select-all"></th>
                    <th><div class="flex-align-center" onclick="sortTable(1)">User<img src="/images/sort.svg" alt="" class="pl-10"></div></th>
                    <th><div class="flex-align-center" onclick="sortTable(2)">Location<img src="/images/sort.svg" alt="" class="pl-10"></div></th>
                    <th><div class="flex-align-center" onclick="sortTable(3)">Department<img src="/images/sort.svg" alt="" class="pl-10"></div></th>
                    <th><div class="flex-align-center" onclick="sortTable(4)">Role<img src="/images/sort.svg" alt="" class="pl-10"></div></th>
                    <th><div class="flex-align-center" onclick="sortTable(5)">Employee No.<img src="/images/sort.svg" alt="" class="pl-10"></div></th>
                    <th><div class="flex-align-center" onclick="sortTable(6)">Status<img src="/images/sort.svg" alt="" class="pl-10"></div></th>
                    <th><div class="flex-align-center" onclick="sortTable(7)>Join Dt.<img src="/images/sort.svg" alt="" class="pl-10"></div></th>
                    <th><img src="/images/more-hz.svg" alt=""></th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;
        employeesContainerSection.appendChild(employeeTable);


    empContainer.appendChild(employeesContainerSection);

    
}

function createAlphabetButtons() {
    const filterBy = document.getElementById('filter-by-letter');
    const buttons = Array.from(Array(26)).map((_, index) => {
        const button = document.createElement('button');
        button.classList.add('filter-item');
        button.textContent = String.fromCharCode(65 + index);
        button.addEventListener('click', () => {
            const activeButtons = document.querySelectorAll('.active-btn');
            activeButtons.forEach(btn => {
                btn.classList.remove('active-btn');
            });
            button.classList.add('active-btn')
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

function sortTable(columnIndex) {
    const table = document.getElementById("employee-table");
    const tbody = table.tBodies[0];
    const rows = Array.from(tbody.rows);
    const isAsc = tbody.dataset.sortOrder === 'asc';
    
    // Toggle sort order
    tbody.dataset.sortOrder = isAsc ? 'desc' : 'asc';

    rows.sort((a, b) => {
        const aText = a.cells[columnIndex].textContent.trim();
        const bText = b.cells[columnIndex].textContent.trim();
        
        return isAsc 
            ? aText > bText ? 1 : -1 
            : aText < bText ? 1 : -1;
    });

    // Reattach sorted rows to tbody
    rows.forEach(row => tbody.appendChild(row));
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

function hideNavBar(){
    const navBar = document.getElementById('horizontal-nav');
    const rightContent = document.getElementById('right-content');
    const openNavBar = document.getElementById('open-navbar');

    if(navBar.classList.contains('hidden')){
        navBar.classList.remove('hidden');
        openNavBar.classList.add('hidden');
        rightContent.classList.remove('cover-all');
    } else{
        navBar.classList.add('hidden');
        openNavBar.classList.remove('hidden');
        rightContent.classList.add('cover-all');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    createAlphabetButtons();
    setupCategoryFilters();
    renderTable(employees);
});
