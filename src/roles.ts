import {StatusOptions,Department, Employee, Locations , roles,locations, departments,employees,Role } from "./models.js";

let searchElement : (HTMLElement |null);
let roleLocationElement : (HTMLElement |null);
let roleDepartmentElement : (HTMLElement |null);
let roleApplydropdownBtn : (HTMLElement |null);

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

 function getRoles(){
    const deptContainer : (HTMLElement | null) = document.getElementById('roles-container');
    const div = document.createElement('div');
    div.innerHTML = `
        <section class="flex-space-between mb-20">
            <div>
                <p class = "filter-header f16">Roles</p>
                <p class= "filter-subtitle f14">All the roles are configured here</p>
            </div>
            <div class="flex-space-between">
                <button class="btn primary-btn flex-space-between not-allowed"><img src="/images/Interface/Add.svg" alt="" class="pr-10">Add Role</button>
            </div>
        </section>
        <!--Filter-->
        <section id = "filter-category-container" class="flex-space-between mb-20">
            <div class="flex-space-between">
                <p class = "color-red">Filter</p>
                <img src="/images/filter-funnel.svg" alt="">
                <form action="">
                    <div id = "filter-categories" class="flex-space-between">
                        ${createDropdown('department', 'role-dept-dropdown',departments ,"filter-category")}
                        ${createDropdown("location","role-location-dropdown",locations,"filter-category")}
                    </div>
                </div>
                </form>
            <div>
                <button class="reset-btn bordered f12" id="role-dismiss-filter">Reset</button>
                <button class="apply-btn f12" id="role-apply-dropdown">Apply</button>
            </div>
        </section>
    `;
    deptContainer?.prepend(div);
}

export function renderRoles(roles: Role[]) {
    const dept : (HTMLElement | null) = document.getElementById('department');
    if(dept){
        dept!.innerHTML  = '';
        if (roles.length === 0) {
            dept!.innerHTML = `<p class="center">No Roles Available</p>`;
        } else {
            roles.forEach(role => {
                // Dept
                const roleDept = departments.find(dept => dept.id == role.departmentId)?.department;
                // Location
                const roleLocation = locations.find(loc => loc.id == role.locationId)?.location;
                // Filtered employees based on role
                const filteredEmpl = employees.filter(emp => emp.roleId == role.id);
    
                const div = document.createElement('div');
                div.classList.add('roles-container');
                
                let profileImages = '';
                let additionalText = '';
    
                if (filteredEmpl.length > 0) {
                    // Create overlapping images
                    profileImages = filteredEmpl.slice(0, 4).map(emp => 
                        `<img src="${emp.profilePicture}" alt="${emp.firstName}" class="profile-pic">`
                    ).join('');
    
                    const additionalCount = filteredEmpl.length > 4 ? filteredEmpl.length - 4 : 0;
                    additionalText = additionalCount > 0 ? `<span class="additional-count">+${additionalCount}</span>` : '';
                } else {
                    profileImages = '0'; // Showing "0" when there are no employees
                }
    
                div.innerHTML = `
                    <div class="flex-space-between dept-header">
                        <p class="bold">${role.role}</p>
                        <img src="/images/edit.svg" alt="" class = "not-allowed">
                    </div>
                    <div class="dept-body">
                        <div class="flex-space-between pb-8">
                            <div class="flex-content-start">
                                <img src="/images/team_svgrepo.com.svg" alt="">
                                <p>Department</p>
                            </div>
                            <p>${roleDept}</p>
                        </div>
                        <div class="flex-space-between pb-8">
                            <div class="flex-content-start">
                                <img src="/images/location-pin-alt-1_svgrepo.com.svg" alt="">
                                <p>Location</p>
                            </div>
                            <p>${roleLocation}</p>
                        </div>
                        <div class="flex-space-between pb-8">
                            <p>Total Employees</p>
                            <div class="profile-pic-container">
                                ${profileImages}
                                ${additionalText}
                            </div>
                        </div>
                    </div>
                    <div class="flex-justify-end dept-link f12 cursor-pointer" onclick="goToRoleDetails(${role.id},${role.departmentId},${role.locationId})">
                        <p>View All Employees</p>
                        <img src="/images/arrow_left.svg" alt="" class="pl-4">
                    </div>
                `;
                dept?.appendChild(div);
            });
        }
    }
   
}

function setupRoleCategoryFilters() {
    searchElement = document.getElementById("search");
    roleLocationElement = document.getElementById("role-location-dropdown");
    roleDepartmentElement = document.getElementById("role-dept-dropdown");
    roleApplydropdownBtn = document.getElementById("role-apply-dropdown");
    const resetBtn = document.getElementById('role-dismiss-filter');

   const handleFilterChange = () => {
       const filteredRoles = filterRoles(roles);
       renderRoles(filteredRoles);
   };
   roleApplydropdownBtn?.addEventListener('click', handleFilterChange);
   searchElement?.addEventListener('input', handleFilterChange);
   resetBtn?.addEventListener('click', () => {
   if(roleLocationElement != null && roleDepartmentElement != null){
      // Reset the dropdowns
      (roleLocationElement as HTMLSelectElement)!.selectedIndex = 0;
      (roleDepartmentElement as HTMLSelectElement)!.selectedIndex = 0;
      const filtRoles = filterRoles(roles);
      renderRoles(filtRoles);
   }
});
}

function filterRoles(rolesList : Role[]) {
   const searchValue = (searchElement as HTMLInputElement)?.value.toLowerCase();
   const locationValue = (roleLocationElement as HTMLSelectElement)?.value;
   const departmentValue = (roleDepartmentElement as HTMLSelectElement)?.value;

   return rolesList.filter(role => {
       const searchMatch = !searchValue || role.role.toLowerCase().includes(searchValue);
       const locationMatch = !locationValue || role.locationId.toString() === locationValue;
       const departmentMatch = !departmentValue || role.departmentId.toString() === departmentValue;
       return searchMatch && locationMatch && departmentMatch;
   });
}

document.addEventListener('DOMContentLoaded',() => {
    getRoles();
    setupRoleCategoryFilters();
    renderRoles(roles);
});