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
                         <button class="btn active-btn flex-space-between"><img src="/images/Interface/Add.svg" alt="" class="pr-10">Add Role</button>
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
                                     <select name="dept" id="dept">
                                         <option  disabled selected>Department</option>
                                         <option value="PE">Product Engg</option>
                                         <option value="QA">QA</option>
                                         <option value="DA">DA</option>
                                         <option value="TA">TA</option>
                                     </select>
                                 </div>
                                 <div class="filter-category">
                                     <select name="location" id="location">
                                         <option  disabled selected>Location</option>
                                         <option value="hyd">Hyderabad</option>
                                         <option value="mumbai">Mumbai</option>
                                         <option value="blr">Bangalore</option>
                                         <option value="ch">Chennai</option>
                                     </select>
                                 </div>
                                 
                             </div>
                         </div>
                         </form>
                     <div>
                         <button class="dismiss-btn bordered f12">Reset</button>
                         <button class="accept-btn f12">Apply</button>
                     </div>
                 </section> 
                 <div class="space"></div>  
    `;
    deptContainer.prepend(div);
    const dept = document.getElementById('department');
    dept.innerHTML='';
    roles.forEach(role => {
        //dept
        const roleDept = departments.find(dept => dept.id == role.departmentId).department;
        //location
        const roleLocation = locations.find(loc => loc.id == role.location).location;
        //filtered empl based on role
        const totalEmpl = employees.filter(emp => emp.role == role.id).length;
        if(totalEmpl != 0){
            const div = document.createElement('div');
            div.classList.add('department-container');
            div.innerHTML = `
                   <div class="flex-space-between dept-header">
                        <p class="bold">${role.role}</p>
                        <img src="/images/edit.svg" alt="">
                    </div>
                   <div class= "dept-body">
                        <div class="flex-space-between pb-8">
                            <div class="flex-content-start"><img src="/images/team_svgrepo.com.svg" alt=""><p>Department</p></div>
                            <p>${roleDept}</p>
                        </div>
                        <div class="flex-space-between pb-8">
                            <div class="flex-content-start"><img src="/images/location-pin-alt-1_svgrepo.com.svg" alt=""> <p>Location</p></div>
                            <p>${roleLocation}</p>
                        </div>
                        <div class="flex-space-between pb-8">
                            <p>Total Employees</p>
                            <p>${totalEmpl}</p>
                        </div>
                    </div>
                    <div style="display: flex;justify-content: end;align-items: center" class = "dept-link f12" onclick = "goToEmployees(${role.id})">
                        <p>View All Employees</p>
                        <img src="/images/arrow_left.svg" alt="" class="pl-4">
                    </div>
                `;
            dept.appendChild(div);
        }
    });
}

function goBack() {
    const deptContainer = document.getElementById('department-container');
    const detailsContainer = document.getElementById('details-container');
    deptContainer.classList.remove('hidden');
    detailsContainer.classList.add('hidden');
}

function goToEmployees(roleId) {
    getDetails(roleId);
}

document.addEventListener('DOMContentLoaded',getRoles);