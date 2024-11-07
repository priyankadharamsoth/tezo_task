import { statusOptions,locations,departments,employees, Employee, roles } from "./models.js";
import {renderRoles} from './roles.js';
import { getDetails } from "./role-details.js";

let selectedAlphabet = '';

let searchElement  : (HTMLElement |null);
let statusElement : (HTMLElement |null);
let locationElement : (HTMLElement |null);
let departmentElement : (HTMLElement |null);


let empLocation: (HTMLElement |null);
let empDepartment : (HTMLElement |null);
let empRole :(HTMLElement |null); 

let applyFilterBtn;

let roleDiv = document.createElement('div');

let isAsc = true;

function loadData() {
    const empContainer = document.getElementById('employee-container');

    // Header Section
    empContainer?.appendChild(createHeaderSection());

    // Filter Sections
    empContainer?.appendChild(createFilterByAlphabetSection());

    // Category Filter
    empContainer?.appendChild(createFilterCategorySection());

    // Empty text
    empContainer?.appendChild(createNoDataDiv());

    // Employees Container
    empContainer?.appendChild(createEmployeesContainerSection());
}

function createNoDataDiv() {
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
        <section class="flex-space-between mb-20">
            <div>
                <p class = "filter-header f16 pb-8">Employees</p>
                <p class= "filter-subtitle f14">Find all of your company's employee accounts and their associated roles.</p>
            </div>
            <div class="flex-space-between">
                <button class="btn inactive-btn flex-space-between not-allowed"><img src="/images/Interface/Export.svg" alt="" class="pr-10">Export</button>
                <button class="btn primary-btn  flex-space-between openModal"><img src="/images/Interface/Add.svg" alt="" class="pr-10">Add Employee</button>
            </div>
        </section>
    `;
   return headerSection;
}

function createFilterByAlphabetSection() {
    const section = document.createElement('section');
    section.id = 'filter-by-letter';
    section.classList.add('flex-space-between','mb-20');
    section.innerHTML = `<div class = "cursor-pointer"><img src="/images/filter.png" alt="" class="pl-6"></div>`;
    const filterDiv = section.querySelector('div');
    if (filterDiv) {
        filterDiv.addEventListener('click', clearAlphabetFilter);
    }
    return section;
}

function createDropdown(name : string, id: string, options : Array<{ id: number, [key: string]: any }>, className : string) {
    return `
        <div class="${className}">
            <select name="${name}" id="${id}" title="${name}" required>
                <option value="" disabled selected>${name.charAt(0).toUpperCase() + name.slice(1)}</option>
                ${options.map(option => 
                    `<option value="${option.id}">${option[name]}</option>`).join('')}
            </select>
        </div>
    `;
}

function createFilterCategorySection(){
     //filter category container
     const filterByCategorySection = document.createElement('section');
     filterByCategorySection.id = 'filter-category-container';
     filterByCategorySection.classList.add('flex-space-between','mb-20');
     filterByCategorySection.innerHTML = `
         <div class="flex-space-between">
             <p class= "color-red">Filter</p>
             <img src="/images/filter-funnel.svg" alt="">
             <form action="">
                 <div id = "filter-categories" class="flex-space-between">
                    ${createDropdown('status', 'status-dropdown', statusOptions,"filter-category")}
                    ${createDropdown('location', 'location-dropdown', locations,"filter-category")}
                    ${createDropdown('department', 'dept-dropdown', departments,"filter-category")}
                 </div>
             </form>
         </div>
         <div>
             <button class="reset-btn bordered f12" id="dismiss-filter">Reset</button>
             <button class="apply-btn f12" id = "apply-filter">Apply</button>
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
            <button class="del-btn" id="delete">Delete</button>
        </div>
        <img src="/images/table-add.png" alt="" class="pr-20 not-allowed">
        `;

    employeesContainerSection.appendChild(deleteEmployees);
    const deleteButton = deleteEmployees.querySelector('#delete') as HTMLButtonElement;
    deleteButton?.addEventListener('click', deleteSelectedEmployees);

    const employeeTable = createEmployeeTable();
    employeesContainerSection.appendChild(employeeTable);
    return employeesContainerSection;
}

function createEmployeeTable(){
     //table
     let employeeTable : (HTMLElement | null)  = document.createElement('table');
     employeeTable.id = 'employee-table';
     (employeeTable as HTMLTableElement) .cellSpacing = '0';
     employeeTable.innerHTML = `
             <thead>
             <tr>
                 <th><input type="checkbox" class = "headerCheckBox" id="select-all" name="select-all"></th>
                 <th><div class="flex-align-center cursor-pointer">User<img src="/images/sort.svg" alt="" class="pl-10"></div></th>
                 <th><div class="flex-align-center cursor-pointer">Location<img src="/images/sort.svg" alt="" class="pl-10"></div></th>
                 <th><div class="flex-align-center cursor-pointer">Department<img src="/images/sort.svg" alt="" class="pl-10"></div></th>
                 <th><div class="flex-align-center cursor-pointer">Role<img src="/images/sort.svg" alt="" class="pl-10"></div></th>
                 <th><div class="flex-align-center cursor-pointer">Employee No<img src="/images/sort.svg" alt="" class="pl-10"></div></th>
                 <th><div class="flex-align-center cursor-pointer">Status<img src="/images/sort.svg" alt="" class="pl-10"></div></th>
                 <th><div class="flex-align-center cursor-pointer">Join Dt<img src="/images/sort.svg" alt="" class="pl-10"></div></th>
                 <th><img src="/images/more-hz.svg" alt="" class = "not-allowed"></th>
             </tr>
         </thead>
         <tbody>
         </tbody>
     `;
     const selectAllCheckbox = employeeTable.querySelector('#select-all') as HTMLInputElement;
     if (selectAllCheckbox) {
         selectAllCheckbox.addEventListener('click', () => toggleAllCheckboxes(selectAllCheckbox));
     }
 
     // Get all the sortable columns and attach click event listeners for sorting
     const sortableColumns = employeeTable.querySelectorAll('th div.cursor-pointer');
     sortableColumns.forEach((column, index) => {
         column.addEventListener('click', () => sortTable(index + 1)); 
     });
     return employeeTable;
}

function createAlphabetButtons() {
    const filterBy :(HTMLElement | null) = document.getElementById('filter-by-letter');
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

    buttons.forEach(button => filterBy?.appendChild(button));
}

function renderTable(employeeList : Employee[]) {
    const tableBody = document.querySelector('#employee-table tbody');
    const empContainer = document.getElementById('employees-container');
    const emptyContainer = document.getElementById('empty-employee-content');
    if(employeeList.length == 0){
        empContainer?.classList.add('hidden');
        emptyContainer?.classList.remove('hidden');
    } else {
        empContainer?.classList.remove('hidden');
        emptyContainer?.classList.add('hidden');
        if(tableBody != null) {
            tableBody!.innerHTML = '';
            employeeList.forEach(emp => {
                const statusCls = emp.statusId == 1 ? "status-active-btn" : "status-inactive-btn";
                const row = document.createElement('tr');
                const empRole = roles.find(role => role.id == emp.roleId)?.role;
                const empDpt = departments.find(dept => dept.id == emp.deptId)?.department;
                const empLocation = locations.find(loc => loc.id == emp.locationId)?.location;
                const empStatus = statusOptions.find(st => st.id == emp.statusId)?.status;
                row.innerHTML = `
                    <td><input type="checkbox" id="${emp.id}" class = "rowCheckBox" name="employee" value="${emp.id}"></td>
                    <td> 
                        <div class="flex-align-center">
                            <img src="${emp.profilePicture}" alt="" height="40px" width="40px" class="rounded-img">
                            <div class="flex-column-start pr-8">
                                <p class=" color-charcol">${emp.firstName} ${emp.lastName}</p>
                                <p class= "color-light-grey">${emp.email}</p>
                            </div>
                        </div>
                    </td>
                    <td>${empLocation}</td>
                    <td>${empDpt}</td>
                    <td>${empRole}</td>
                    <td>${emp.employeeNum}</td>
                    <td><p class="${statusCls}">${empStatus}</p></td>
                    <td>${emp.jointDt}</td>
                    <td><img src="/images/more-hz.svg" alt="" class = "not-allowed"></td>
                `;
                const checkBox = row.querySelector(`input[id="${emp.id}"]`);
                checkBox?.addEventListener('change', () => {
                    const deleteBtn = document.getElementById('delete');
                    const headerCheckBox :(HTMLElement |null) = document.getElementById('select-all');
                    (headerCheckBox as HTMLInputElement)!.checked = [...document.querySelectorAll('.rowCheckBox')].every(box => (box as HTMLInputElement).checked);
                    if([...document.querySelectorAll('.rowCheckBox')].some(box => (box as HTMLInputElement).checked) || (headerCheckBox as HTMLInputElement).checked) {
                        deleteBtn?.classList.add('active-delete');
                    } else if(![...document.querySelectorAll('.rowCheckBox')].every(box => (box as HTMLInputElement).checked)){
                        deleteBtn?.classList.remove('active-delete');
                    }
                });
                tableBody.appendChild(row);
            });
        }
       
       
    }
    
}

function deleteSelectedEmployees() {
    const checkboxes = document.querySelectorAll('.rowCheckBox:checked');
    const deleteBtn = document.getElementById('delete');
    if(checkboxes.length != 0) {
        if (confirm('Are you sure you want to delete the selected employess?')) {
            const idsToDelete = Array.from(checkboxes).map(checkbox => parseInt(checkbox.id));
            // Filter out the employees that are not in the idsToDelete array
            for (let i = employees.length - 1; i >= 0; i--) {
                if (idsToDelete.includes(employees[i].id)) {
                    employees.splice(i, 1); // Remove the employee at index i
                }
            }            
            // Re-render the table with updated employee list
            let filterEmpl = filterEmployees(employees);
            renderTable(filterEmpl);
            renderRoles(roles);
            deleteBtn?.classList.remove('active-delete');
        } 
    }
    else{
        alert("Please select employees to delete");
    }
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
    applyFilterBtn?.addEventListener('click', handleFilterChange);
    searchElement?.addEventListener('input', handleFilterChange);
    resetBtn?.addEventListener('click', () => {
        // Reset the dropdowns
        if(statusElement && locationElement && departmentElement){
            (statusElement as HTMLSelectElement).selectedIndex = 0;
            (locationElement as HTMLSelectElement).selectedIndex = 0;
            (departmentElement as HTMLSelectElement).selectedIndex = 0;
            const empl = filterEmployees(employees);
            renderTable(empl);
        }
        
    });
}

function filterEmployees(employeeList: Employee[]) {
    //uncheck all checkboxes:
    let headerCheckBox = document.getElementById('select-all');
    (headerCheckBox as HTMLInputElement).checked = false;
    //make delete disable
    const deleteBtn = document.getElementById('delete');
    deleteBtn?.classList.remove('active-delete');

    const searchValue = (searchElement as HTMLInputElement).value.toLowerCase();
    const statusValue = (statusElement as HTMLSelectElement).value;
    const locationValue = (locationElement as HTMLSelectElement).value;
    const departmentValue = (departmentElement as HTMLSelectElement).value;

    return employeeList.filter(emp => {
        const searchMatch = !searchValue || emp.firstName.toLowerCase().includes(searchValue) || emp.lastName.toLowerCase().includes(searchValue);
        const statusMatch = !statusValue || emp.statusId.toString() === statusValue;
        const locationMatch = !locationValue || emp.locationId.toString() === locationValue;
        const departmentMatch = !departmentValue || emp.deptId.toString() === departmentValue;
        const alphabetMatch = !selectedAlphabet || emp.firstName.toLowerCase().startsWith(selectedAlphabet.toLowerCase());
        return searchMatch && statusMatch && locationMatch && departmentMatch && alphabetMatch;
    });
}

function sortTable(columnIndex: number) {
    const table : (HTMLElement | null)= document.getElementById("employee-table");
    const tbody = (table as HTMLTableElement).tBodies[0];
    const rows = Array.from(tbody.rows);

    rows.sort((a, b) => {
        const aText = a.cells[columnIndex].textContent?.trim().toLowerCase();
        const bText = b.cells[columnIndex].textContent?.trim().toLowerCase();
        return isAsc 
            ? (aText??"" )> (bText ?? "") ? 1 : -1 
            : (aText ?? "") < (bText??"") ? 1 : -1;
    });
    isAsc = !isAsc;
    // Reattach sorted rows to tbody
    rows.forEach(row => tbody.appendChild(row));
}

export function hideNavBar(){
    const navBar :( HTMLElement | null) = document.getElementById('horizontal-nav');
    const rightContent :( HTMLElement | null) = document.getElementById('right-content');
    const openNavBar :( HTMLElement | null) = document.getElementById('open-navbar');

    if(navBar?.classList.contains('hidden')){
        navBar.classList.remove('hidden');
        openNavBar?.classList.add('hidden');
        rightContent?.classList.remove('cover-all');
    } else{
        navBar?.classList.add('hidden');
        openNavBar?.classList.remove('hidden');
        rightContent?.classList.add('cover-all');
    }
}

function clearAlphabetFilter(){
    selectedAlphabet = '';
    const activeBtn = document.querySelector('.active-btn');
    activeBtn?.classList.remove('active-btn');  
    const filterEmpl = filterEmployees(employees);
    renderTable(filterEmpl);
}

function toggleAllCheckboxes(source: HTMLInputElement){
    const checkboxes = document.querySelectorAll('.rowCheckBox');
    const headerCheckBox = document.getElementById('select-all');
    const deleteBtn = document.getElementById('delete');
    if((headerCheckBox as HTMLInputElement)?.checked){
        deleteBtn?.classList.add('active-delete');
    } else {
        deleteBtn?.classList.remove('active-delete');
    }

    checkboxes.forEach(checkbox => {
        (checkbox as HTMLInputElement).checked = source.checked;
        if(checkbox.classList.contains('checked')){
            checkbox.classList.remove('checked');
        } else{
            checkbox.classList.add('checked');
        }
    });
}

function addEmployee(event: Event) {
    event.preventDefault();
    empLocation= document.getElementById('empl-location-dropdown');
    empDepartment = document.getElementById('empl-dept-dropdown');
    empRole = document.getElementById('empl-role-dropdown');
    let empJoinDate = document.getElementById('emp-join-date');
    let empFirstName = (document.getElementById('emp-first-name') as HTMLInputElement).value;
    let empLastName = (document.getElementById('emp-last-name') as HTMLInputElement).value;
    let empNumber = (document.getElementById('emp-number')as HTMLInputElement).value;
    let empEmail = (document.getElementById('emp-email') as HTMLInputElement).value;
    const newEmpl = {
        id: employees.length+1,
        firstName: empFirstName, 
        lastName: empLastName, 
        email: empEmail, 
        locationId: parseInt((empLocation as HTMLSelectElement).value), 
        deptId: parseInt((empDepartment as HTMLSelectElement).value), 
        roleId: parseInt((empRole as HTMLSelectElement).value), 
        employeeNum: empNumber, 
        statusId: 1, 
        jointDt:(empJoinDate as HTMLInputElement).value, 
        profilePicture: "/images/profile.png"
    }
   employees.push(newEmpl);
   const modal : (HTMLElement | null) = document.getElementById("myModal");
   if(modal) modal.style.display = "none";
    renderTable(employees);
    renderRoles(roles);
    getDetails(parseInt((empRole as HTMLSelectElement).value),parseInt((empDepartment as HTMLSelectElement).value),parseInt((empLocation as HTMLSelectElement).value));
    return false;
}

function setSelectedValue(dropdownId: string, valueToSelect: string) {
   const dropdown = document.getElementById(dropdownId);
   if(dropdown != null && (dropdown as HTMLSelectElement).value != null){
    (dropdown as HTMLSelectElement).value = valueToSelect; 
    (dropdown as HTMLSelectElement).disabled = true;
   }
}

function modal(){
    empLocation = document.getElementById('empl-location-dropdown');
    empDepartment = document.getElementById('empl-dept-dropdown');
    empRole = document.getElementById('empl-role-dropdown');
    const addEmployeeForm = document.getElementById('add-employee-form');
    if (!(addEmployeeForm as HTMLFormElement).hasListener) {
        addEmployeeForm?.addEventListener('submit', (event) => {
            addEmployee(event);
            (addEmployeeForm as HTMLFormElement).reset(); 
        });
        (addEmployeeForm as HTMLFormElement).hasListener = true;
    }
    const modal = document.getElementById("myModal");

    const openModalButtons = document.getElementsByClassName("openModal");

    const closeModalButton = document.getElementsByClassName("close")[0];

    Array.from(openModalButtons).map(btn => (btn as HTMLElement)?.addEventListener("click", ()=> {openModal()}));

    closeModalButton.addEventListener("click", closeModal);

    function closeModal() {
       if(modal){
        modal.style.display = "none";
       }
       (addEmployeeForm as HTMLFormElement).reset(); 
        (empDepartment as HTMLSelectElement).selectedIndex = 0;
        (empLocation as HTMLSelectElement).selectedIndex = 0;
        if(empRole != null){
            (empRole as HTMLSelectElement).selectedIndex = 0;
        }
    }

    // Close the modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    }
}

 function openModal(roleId?: string,deptId?: string,locationId?: string) {
    const modal = document.getElementById("myModal");
    if(modal)
    modal!.style.display = "block";
    //for adding employees based on role
    if(deptId != null && roleId != null && locationId != null){
        setSelectedValue('empl-dept-dropdown',deptId);
        handleRoleContent(deptId.toString(), roleDiv); 
        setSelectedValue('empl-role-dropdown',roleId);
        setSelectedValue('empl-location-dropdown',locationId);
    }
    //for adding employees in emp page
    //make it enable everytime
     else{
        (document.getElementById('empl-dept-dropdown') as HTMLSelectElement).disabled= false;
        (document.getElementById('empl-role-dropdown')as HTMLSelectElement).disabled= false;
        (document.getElementById('empl-location-dropdown')as HTMLSelectElement).disabled= false;
    }
}

function addEmployeeContent() {
    let employeeDropDowns = document.getElementById('emp-drop-downs');

    let locationDiv = document.createElement('div');
    let departmentDiv = document.createElement('div'); 
     
    locationDiv.classList.add('input-container');
    departmentDiv.classList.add('input-container');

    locationDiv.innerHTML = `
        ${createDropdown('location', 'empl-location-dropdown', locations, "filte-category")}
    `;
    departmentDiv.innerHTML = `
        ${createDropdown('department', 'empl-dept-dropdown', departments, "filte-category")}
    `;

    employeeDropDowns?.appendChild(departmentDiv);
    employeeDropDowns?.appendChild(roleDiv);
    employeeDropDowns?.appendChild(locationDiv); 

    const deptValue = document.getElementById('empl-dept-dropdown');

    deptValue?.addEventListener('change', () => {
        handleRoleContent((deptValue as HTMLSelectElement).value, roleDiv); 
    });

    if ((deptValue as HTMLSelectElement).value) {
        handleRoleContent((deptValue as HTMLSelectElement).value, roleDiv);
    }
}

function handleRoleContent(selectedDeptId: string, roleDiv: HTMLElement) {
    roleDiv.classList.add('input-container');
    roleDiv.innerHTML = ''; 
    const filteredRoles = roles.filter(role => role.departmentId.toString() === selectedDeptId);
    if (filteredRoles.length > 0) {
        roleDiv.innerHTML = `
            ${createDropdown('role', 'empl-role-dropdown', filteredRoles, "filte-category")}
        `;
    } else {
        roleDiv.innerHTML = '<p>No roles available for this department.</p>'; // Optional message
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadData();
    createAlphabetButtons();
    setupCategoryFilters();
    addEmployeeContent();
    modal();
    renderTable(employees);
});
