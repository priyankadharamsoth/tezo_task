//routing

function goToRoles() {
    const departmentContainer =document.getElementById('department-container'); 
    const detailContainer = document.getElementById('details-container');
    const employeeContainer = document.getElementById('employee-container'); 

    employeeContainer.classList.add('hidden');
    detailContainer.classList.add('hidden');
    departmentContainer.classList.remove('hidden');

}