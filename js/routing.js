// Ensure this script runs after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const departmentContainer = document.getElementById('department-container'); 
    const detailContainer = document.getElementById('details-container');
    const employeeContainer = document.getElementById('employee-container');
    const rolesPage = document.getElementById('roles-page');
    const employeesPage = document.getElementById('employees-page');

    // Define your functions here
    window.goToRoles = function() {
        employeeContainer.classList.add('hidden');
        detailContainer.classList.add('hidden');
        departmentContainer.classList.remove('hidden');
        removeActive();
        rolesPage.classList.add('active');
        changeIcon();
    };

    window.goToEmployees = function() {
        employeeContainer.classList.remove('hidden');
        detailContainer.classList.add('hidden');
        departmentContainer.classList.add('hidden');
        removeActive();
        employeesPage.classList.add('active');
        changeIcon();
    };

    function removeActive() {
        const getAll = document.querySelectorAll('.active');
        getAll.forEach(element => {
            element.classList.remove('active');
        });
    }

    function changeIcon() {
        const rolesSvg = document.getElementById('roles-svg');
        const employeesSvg = document.getElementById('employees-svg');

        rolesSvg.src = '/images/Horizontal nav/Roles.svg';
        employeesSvg.src = '/images/Horizontal nav/active_employees.svg'; 

        if (rolesPage.classList.contains('active')) {
            rolesSvg.src = '/images/Horizontal nav/active_role.svg';
        }
        if (!employeesPage.classList.contains('active')) {
            employeesSvg.src = '/images/Horizontal nav/employees.svg'; 
        }
    }

    window.goToRoleDetails = function(roleId) {
        getDetails(roleId);
        employeeContainer.classList.add('hidden');
        detailContainer.classList.remove('hidden');
        departmentContainer.classList.add('hidden');
    }
});
