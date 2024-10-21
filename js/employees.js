let selectedAlphabet = '';

let searchElement = '';
let statusElement;
let locationElement;
let departmentElement;

let applyFilterBtn;

function loadData() {
    const empContainer = document.getElementById('employee-container');

    // Header Section
    empContainer.appendChild(createHeaderSection());

    // Filter Sections
    empContainer.appendChild(createFilterByAlphabetSection());
    addSpace(empContainer);

    // Category Filter
    empContainer.appendChild(createFilterCategorySection());
    addSpace(empContainer);

    // Employees Container
    empContainer.appendChild(showEmptyDiv());
    empContainer.appendChild(createEmployeesContainerSection());
}

function addSpace(container) {
    const space = document.createElement('div');
    space.classList.add('space');
    container.appendChild(space);
}

function showEmptyDiv() {
    let div = document.createElement('div');
    div.id = "empty-employee-content";
    div.classList.add("hidden");
    div.innerHTML = `
    <p class="center">No Employees Available</p>`;
    return div;
}

function createHeaderSection(){
    const headerSection = document.createElement('section');
    headerSection.innerHTML = `
    <section class="flex-space-between">
               <div>
                    <p class = "filter-header f16 pb-8">Employees</p>
                    <p class= "filter-subtitle f14">Find all of your company's employee accounts and their associated roles.</p>
               </div>
               <div class="flex-space-between">
                    <button class="btn inactive-btn flex-space-between not-allowed"><img src="/images/Interface/Export.svg" alt="" class="pr-10">Export</button>
                    <button class="btn primary-btn  flex-space-between not-allowed"><img src="/images/Interface/Add.svg" alt="" class="pr-10">Add Employee</button>
               </div>
            </section>
            <div class="space"></div>
    `;
   return headerSection;
}

function createFilterByAlphabetSection() {
    const section = document.createElement('section');
    section.id = 'filter-by-letter';
    section.classList.add('flex-space-between');
    section.innerHTML = `<div onClick="clearAlphabetFilter()" class = "cursor-pointer"><img src="/images/filter.png" alt="" class="pl-6"></div>`;
    return section;
}

function createFilterCategorySection(){
     //filter category container
     const filterByCategorySection = document.createElement('section');
     filterByCategorySection.id = 'filter-category-container';
     filterByCategorySection.classList.add('flex-space-between');
     filterByCategorySection.innerHTML = `
         <div class="flex-space-between">
             <p>Filter</p>
             <img src="/images/filter-funnel.svg" alt="">
             <form action="">
                 <div id = "filter-categories" class="flex-space-between">
                     <div class="filter-category">
                         <select name="status" id="status-dropdown">
                             <option value = "" disabled selected>Status</option>
                             <option value="Active">Active</option>
                             <option value="Inactive">Inactive</option>
                         </select>
                     </div>
                     <div class="filter-category">
                         <select name="location" id="location-dropdown" title="location">
                             <option value = "" disabled selected>Location</option>
                             <option value="2">Hyderabad</option>
                             <option value="4">Mumbai</option>
                             <option value="1">Bangalore</option>
                             <option value="3">Chennai</option>
                         </select>
                     </div>
                     <div class="filter-category">
                         <select name="dept" id="dept-dropdown" title="dept">
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
             <button class="reset-btn bordered f12" id="dismiss-filter">Reset</button>
             <button class="accept-btn f12" id = "apply-filter">Apply</button>
         </div>
     `;
     return filterByCategorySection;
}

function createEmployeesContainerSection(){
    //employees-container
    const employeesContainerSection = document.createElement('section');
    employeesContainerSection.id = 'employees-container';
    
    //add header
    const deleteEmployees = document.createElement('div');
    deleteEmployees.classList.add('flex-space-between','p-16');
    deleteEmployees.innerHTML = `
        <div class="flex-content-start">
            <img src="/images/arrow-turn left -down.png" alt="" height="24px" width="24px" class="pr-6">
            <button class="del-btn" onClick = "deleteSelectedEmployees()" id="delete">Delete</button>
        </div>
        <img src="/images/table-add.png" alt="" class="pr-20 not-allowed">
        `;

    employeesContainerSection.appendChild(deleteEmployees);

    const employeeTable = createEmployeeTable();
    employeesContainerSection.appendChild(employeeTable);
    return employeesContainerSection;
}

function createEmployeeTable(){
     //table
     employeeTable  = document.createElement('table');
     employeeTable.id = 'employee-table';
     employeeTable.cellSpacing = '0';
     employeeTable.innerHTML = `
             <thead>
             <tr>
                 <th><input type="checkbox" class = "headerCheckBox" id="select-all" name="select-all" onclick="toggleAllCheckboxes(this)"></th>
                 <th><div class="flex-align-center cursor-pointer" onclick="sortTable(1)">User<img src="/images/sort.svg" alt="" class="pl-10"></div></th>
                 <th><div class="flex-align-center cursor-pointer" onclick="sortTable(2)">Location<img src="/images/sort.svg" alt="" class="pl-10"></div></th>
                 <th><div class="flex-align-center cursor-pointer" onclick="sortTable(3)">Department<img src="/images/sort.svg" alt="" class="pl-10"></div></th>
                 <th><div class="flex-align-center cursor-pointer" onclick="sortTable(4)">Role<img src="/images/sort.svg" alt="" class="pl-10"></div></th>
                 <th><div class="flex-align-center cursor-pointer" onclick="sortTable(5)">Employee No.<img src="/images/sort.svg" alt="" class="pl-10"></div></th>
                 <th><div class="flex-align-center cursor-pointer" onclick="sortTable(6)">Status<img src="/images/sort.svg" alt="" class="pl-10"></div></th>
                 <th><div class="flex-align-center cursor-pointer" onclick="sortTable(7)>Join Dt.<img src="/images/sort.svg" alt="" class="pl-10"></div></th>
                 <th><img src="/images/more-hz.svg" alt="" class = "not-allowed"></th>
             </tr>
         </thead>
         <tbody>
         </tbody>
     `;
     return employeeTable;
}

function createAlphabetButtons() {
    const filterBy = document.getElementById('filter-by-letter');
    const buttons = [];

    for (let index = 0; index < 26; index++) {
        const button = document.createElement('button');
        button.classList.add('filter-item');
        button.textContent = String.fromCharCode(65 + index);

        button.addEventListener('click', () => {
            const activeButtons = document.querySelectorAll('.active-btn');
            activeButtons.forEach(btn => {
                btn.classList.remove('active-btn');
            });
            button.classList.add('active-btn');
            selectedAlphabet = String.fromCharCode(65 + index);
            const filteredEmployees = filterEmployees(employees);
            renderTable(filteredEmployees);
        });

        buttons.push(button);
    }

    buttons.forEach(button => filterBy.appendChild(button));
}

function renderTable(employeeList) {
    const tableBody = document.querySelector('#employee-table tbody'); 
    tableBody.innerHTML = ''; 
    if(employeeList.length != 0) {
        employeeList.forEach(emp => {
            const statusCls = emp.status === Status.ACTIVE ? "status-active-btn" : "status-inactive-btn";
            const row = document.createElement('tr');
            const empRole = roles.find(role => role.id == emp.role).role;
            const empDpt = departments.find(dept => dept.id == emp.dept).department;
            const empLocation = locations.find(loc => loc.id == emp.location).location;
            row.innerHTML = `
                <td><input type="checkbox" id="${emp.id}" class = "rowCheckBox" name="employee" value="${emp.id}"></td>
                <td> 
                    <div class="flex-align-center">
                        <img src="${emp.profilePicture}" alt="" height="40px" width="40px" class="rounded-img">
                        <div class="flex-column-start pr-8">
                            <p class=" color-charcol">${emp.firstName} ${emp.lastName}</p>
                            <p class= "color-grey">${emp.email}</p>
                        </div>
                    </div>
                </td>
                <td>${empLocation}</td>
                <td>${empDpt}</td>
                <td>${empRole}</td>
                <td>${emp.employeeNum}</td>
                <td><p class="${statusCls}">${emp.status}</p></td>
                <td>${emp.jointDt}</td>
                <td><img src="/images/more-hz.svg" alt="" class = "not-allowed"></td>
            `;
            const checkBox = row.querySelector(`input[id="${emp.id}"]`);
            checkBox.addEventListener('change', () => {
                const headerCheckBox = document.getElementById('select-all');
                headerCheckBox.checked = [...document.querySelectorAll('.rowCheckBox')].every(box => box.checked);
            });
            tableBody.appendChild(row);
        });
    } else{
        const sec = document.getElementById('employees-container');
        sec.classList.add('hidden');
        const emptyContent = document.getElementById('empty-employee-content');
        emptyContent.classList.remove('hidden');
    }
}

function deleteSelectedEmployees() {
    const checkboxes = document.querySelectorAll('.rowCheckBox:checked');
        const idsToDelete = Array.from(checkboxes).map(checkbox => parseInt(checkbox.id));
        // Filter out the employees that are not in the idsToDelete array
        employees = employees.filter(emp => !idsToDelete.includes(emp.id));
        // Re-render the table with updated employee list
        renderTable(employees);
        renderRoles(roles);  
}

function setupCategoryFilters() {
     searchElement = document.getElementById("search");
     statusElement = document.getElementById("status-dropdown");
     locationElement = document.getElementById("location-dropdown");
     departmentElement = document.getElementById("dept-dropdown");
     applyFilterBtn = document.getElementById("apply-filter");
     const resetBtn = document.getElementById('dismiss-filter');

    const handleFilterChange = () => {
        const filteredEmp = filterEmployees(employees);
        renderTable(filteredEmp);
    };
    applyFilterBtn.addEventListener('click', handleFilterChange);
    searchElement.addEventListener('search', handleFilterChange);
    resetBtn.addEventListener('click', () => {
        // Reset the dropdowns
        statusElement.selectedIndex = 0;
        locationElement.selectedIndex = 0;
        departmentElement.selectedIndex = 0;
        const empl = filterEmployees(employees);
        renderTable(empl);
    });
}

function filterEmployees(employeeList) {
    const searchValue = searchElement.value.toLowerCase();
    const statusValue = statusElement.value;
    const locationValue = locationElement.value;
    const departmentValue = departmentElement.value;

    return employeeList.filter(emp => {
        const searchMatch = !searchValue || emp.firstName.toLowerCase().includes(searchValue) || emp.lastName.toLowerCase().includes(searchValue);
        const statusMatch = !statusValue || emp.status === statusValue;
        const locationMatch = !locationValue || emp.location.toString() === locationValue;
        const departmentMatch = !departmentValue || emp.dept.toString() === departmentValue;
        const alphabetMatch = !selectedAlphabet || emp.firstName.toLowerCase().startsWith(selectedAlphabet.toLowerCase());
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

function clearAlphabetFilter(){
    selectedAlphabet = '';
    const activeBtn = document.querySelectorAll('.active-btn');
    activeBtn.forEach(btn => {
        btn.classList.remove('active-btn');  
    });
    const filterEmpl = filterEmployees(employees);
    renderTable(filterEmpl);
}

function toggleAllCheckboxes(source){
    const checkboxes = document.querySelectorAll('.rowCheckBox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = source.checked;
        if(checkbox.classList.contains('checked')){
            checkbox.classList.remove('checked');
        } else{
            checkbox.classList.add('checked');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadData();
    createAlphabetButtons();
    setupCategoryFilters();
    renderTable(employees);
});
