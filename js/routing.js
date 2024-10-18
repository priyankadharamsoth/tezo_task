//routing

function goToRoles() {
    const departmentContainer =document.getElementById('department-container'); 
    const detailContainer = document.getElementById('details-container');
    const employeeContainer = document.getElementById('employee-container');
    const rolesPage = document.getElementById('roles-page');

    employeeContainer.classList.add('hidden');
    detailContainer.classList.add('hidden');
    departmentContainer.classList.remove('hidden');
    removeActive()
    rolesPage.classList.add('active');
}

function removeActive(){
    const getAll = document.querySelectorAll('.active');
    getAll.forEach(element => {
        element.classList.remove('active');
    });
}


function goToEmployees() {
    const departmentContainer =document.getElementById('department-container'); 
    const detailContainer = document.getElementById('details-container');
    const employeeContainer = document.getElementById('employee-container'); 
    const employeesPage = document.getElementById('employees-page');

    employeeContainer.classList.remove('hidden');
    detailContainer.classList.add('hidden');
    departmentContainer.classList.add('hidden');
    removeActive()
    employeesPage.classList.add('active');
    
}

function goToRoleDetails(roleId) {
    getDetails(roleId);
    const departmentContainer =document.getElementById('department-container'); 
    const detailContainer = document.getElementById('details-container');
    const employeeContainer = document.getElementById('employee-container'); 

    employeeContainer.classList.add('hidden');
    detailContainer.classList.remove('hidden');
    departmentContainer.classList.add('hidden');
}