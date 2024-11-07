import { getDetails } from "./role-details.js";
document.addEventListener('DOMContentLoaded', () => {
    const departmentContainer = document.getElementById('roles-container');
    const detailContainer = document.getElementById('details-container');
    const employeeContainer = document.getElementById('employee-container');
    const rolesPage = document.getElementById('roles-page');
    const employeesPage = document.getElementById('employees-page');
    window.goToRoles = function () {
        employeeContainer === null || employeeContainer === void 0 ? void 0 : employeeContainer.classList.add('hidden');
        detailContainer === null || detailContainer === void 0 ? void 0 : detailContainer.classList.add('hidden');
        departmentContainer === null || departmentContainer === void 0 ? void 0 : departmentContainer.classList.remove('hidden');
        removeActive();
        rolesPage === null || rolesPage === void 0 ? void 0 : rolesPage.classList.add('active');
        changeIcon();
    };
    window.goToEmployees = function () {
        employeeContainer === null || employeeContainer === void 0 ? void 0 : employeeContainer.classList.remove('hidden');
        detailContainer === null || detailContainer === void 0 ? void 0 : detailContainer.classList.add('hidden');
        departmentContainer === null || departmentContainer === void 0 ? void 0 : departmentContainer.classList.add('hidden');
        removeActive();
        employeesPage === null || employeesPage === void 0 ? void 0 : employeesPage.classList.add('active');
        changeIcon();
    };
    window.goToRoleDetails = function (roleId, deptId, locationId) {
        getDetails(roleId, deptId, locationId);
        employeeContainer === null || employeeContainer === void 0 ? void 0 : employeeContainer.classList.add('hidden');
        detailContainer === null || detailContainer === void 0 ? void 0 : detailContainer.classList.remove('hidden');
        departmentContainer === null || departmentContainer === void 0 ? void 0 : departmentContainer.classList.add('hidden');
    };
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
        rolesSvg.src = '/images/Horizontal nav/Roles.svg';
        employeesSvg.src = '/images/Horizontal nav/active_employees.svg';
        arrowRightSvg.src = '/images/arrow_right.svg';
        if (rolesPage === null || rolesPage === void 0 ? void 0 : rolesPage.classList.contains('active')) {
            if (rolesSvg && arrowRightSvg) {
                rolesSvg.src = '/images/Horizontal nav/active_role.svg';
                arrowRightSvg.src = '/images/active-arrow-right.svg';
            }
        }
        if (!(employeesPage === null || employeesPage === void 0 ? void 0 : employeesPage.classList.contains('active'))) {
            if (employeesSvg) {
                employeesSvg.src = '/images/Horizontal nav/employees.svg';
            }
        }
    }
});
