import { getDetails } from "./role-details.js";


document.addEventListener('DOMContentLoaded', () => {
    const departmentContainer = document.getElementById('roles-container'); 
    const detailContainer = document.getElementById('details-container');
    const employeeContainer = document.getElementById('employee-container');
    const rolesPage = document.getElementById('roles-page');
    const employeesPage = document.getElementById('employees-page');

    window.goToRoles = function() {
        employeeContainer?.classList.add('hidden');
        detailContainer?.classList.add('hidden');
        departmentContainer?.classList.remove('hidden');
        removeActive();
        rolesPage?.classList.add('active');
        changeIcon();
    };

    window.goToEmployees = function() {
        employeeContainer?.classList.remove('hidden');
        detailContainer?.classList.add('hidden');
        departmentContainer?.classList.add('hidden');
        removeActive();
        employeesPage?.classList.add('active');
        changeIcon();
    };

    window.goToRoleDetails = function(roleId: number,deptId: number,locationId: number) {
        getDetails(roleId,deptId,locationId);
        employeeContainer?.classList.add('hidden');
        detailContainer?.classList.remove('hidden');
        departmentContainer?.classList.add('hidden');
    }

    
    function removeActive() {
        const getAll = document.querySelectorAll('.active');
        getAll.forEach(element => {
            element.classList.remove('active');
        });
    }

    function changeIcon() {
        let rolesSvg = document.getElementById('roles-svg');
        let employeesSvg = document.getElementById('employees-svg');
        let arrowRightSvg = document.getElementById('arrow-right-svg');

        (rolesSvg as HTMLImageElement).src = '/images/Horizontal nav/Roles.svg';
        (employeesSvg as HTMLImageElement).src = '/images/Horizontal nav/active_employees.svg'; 
        (arrowRightSvg as HTMLImageElement).src = '/images/arrow_right.svg';

        if (rolesPage?.classList.contains('active')) {
          if(rolesSvg && arrowRightSvg){
            (rolesSvg as HTMLImageElement).src = '/images/Horizontal nav/active_role.svg';
            (arrowRightSvg as HTMLImageElement).src = '/images/active-arrow-right.svg';
          }
        }
        
        if (!employeesPage?.classList.contains('active')) {
            if(employeesSvg){
                (employeesSvg as HTMLImageElement).src= '/images/Horizontal nav/employees.svg';
            }

        }
    }
});
