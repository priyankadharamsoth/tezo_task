function getRoles(){
    const deptContainer = document.getElementById('department-container');
    const div = document.createElement('div');
    div.innerHTML = `
       <section class="flex-space-between">
                    <div>
                         <p class = "filter-header">Roles</p>
                         <p class= "filter-subtitle">All the roles are configured here</p>
                    </div>
                    <div class="flex-space-between">
                         <button class="btn primary-btn flex-space-between"><img src="/images/Interface/Add.svg" alt="" class="pr-10">Add Role</button>
                    </div>
                 </section>
                 <div class="space"></div>
                 <!--Filter-->
                 <section id = "filter-category-container" class="flex-space-between">
                     <div class="flex-space-between">
                         <p>Filter</p>
                         <img src="/images/filter.png" alt="">
                         <form action="">
                             <div id = "filter-categories" class="flex-space-between">
                                 <div class="filter-category">
                                     <select name="dept" id="RoleDepartmentDropDown">
                                        <option value = "" disabled selected>Department</option>
                                        <option value="2">PE</option>
                                        <option value="3">QA</option>
                                        <option value="1">DT</option>
                                        <option value="5">UIUX</option>
                                        <option value="6">IT</option>
                                        <option value="4">HR</option>
                                     </select>
                                 </div>
                                 <div class="filter-category">
                                     <select name="location" id="RoleLocationDropDown">
                                        <option value = "" disabled selected>Location</option>
                                        <option value="2">Hyderabad</option>
                                        <option value="4">Mumbai</option>
                                        <option value="1">Bangalore</option>
                                        <option value="3">Chennai</option>
                                     </select>
                                 </div>
                                 
                             </div>
                         </div>
                         </form>
                     <div>
                         <button class="dismiss-btn bordered f12">Reset</button>
                         <button class="accept-btn f12" id="RoleApplyFilter">Apply</button>
                     </div>
                 </section> 
                 <div class="space"></div>  
    `;
    deptContainer.prepend(div);
}

function renderRoles(roles) {
    const dept = document.getElementById('department');
    dept.innerHTML = '';
    if (roles.length === 0) {
        dept.innerHTML = `<p class="center">No Roles Available</p>`;
    } else {
        roles.forEach(role => {
            // Dept
            const roleDept = departments.find(dept => dept.id == role.departmentId).department;
            // Location
            const roleLocation = locations.find(loc => loc.id == role.location).location;
            // Filtered employees based on role
            const filteredEmpl = employees.filter(emp => emp.role == role.id);

            
                const div = document.createElement('div');
                div.classList.add('department-container');
                
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
                        <img src="/images/edit.svg" alt="">
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
                    <div style="display: flex; justify-content: end; align-items: center" class="dept-link f12" onclick="goToRoleDetails(${role.id})">
                        <p>View All Employees</p>
                        <img src="/images/arrow_left.svg" alt="" class="pl-4">
                    </div>
                `;
                dept.appendChild(div);
        });
    }
}


function goBack() {
    const deptContainer = document.getElementById('department-container');
    const detailsContainer = document.getElementById('details-container');
    deptContainer.classList.remove('hidden');
    detailsContainer.classList.add('hidden');
}


function setupRoleCategoryFilters() {
    searchElement = document.getElementById("search");
    roleLocationElement = document.getElementById("RoleLocationDropDown");
    roleDepartmentElement = document.getElementById("RoleDepartmentDropDown");
    roleApplyFilterBtn = document.getElementById("RoleApplyFilter");

   const handleFilterChange = () => {
       const filteredRoles = filterRoles(roles);
       renderRoles(filteredRoles);
   };
   roleApplyFilterBtn.addEventListener('click', handleFilterChange);
   searchElement.addEventListener('search', handleFilterChange);
}

function filterRoles(rolesList) {
   const searchValue = searchElement.value.toLowerCase();
   const locationValue = roleLocationElement.value;
   const departmentValue = roleDepartmentElement.value;

   return rolesList.filter(role => {
       const searchMatch = !searchValue || role.role.toLowerCase().includes(searchValue);
       const locationMatch = !locationValue || role.location.toString() === locationValue;
       const departmentMatch = !departmentValue || role.departmentId.toString() === departmentValue;
       return searchMatch && locationMatch && departmentMatch;
   });
}


document.addEventListener('DOMContentLoaded',() => {
    getRoles();
    setupRoleCategoryFilters();
    renderRoles(roles);
});