const roles = [
    {id: 1, role: "Customer Service Manager", dept: "IT", location: "Hyderabad",total :43},
    {id: 2, role: "UX Designer", dept: "UIUX", location: "Hyderabad",total :43},
    {id: 3, role: "Assistant Backend Developer", dept: "Product Engg", location: "Hyderabad",total :43},
    {id: 4, role: "Human Resource Manager", dept: "IT", location: "Hyderabad",total :43},
    {id: 5, role: "Front End Developer", dept: "Product Engg", location: "Hyderabad",total :43},
    {id: 6, role: "Senior Developer", dept: "Product Engg", location: "Hyderabad",total :43},
];


function getRoles(){
    const dept = document.getElementById('department');
    dept.innerHTML='';
    roles.forEach(role => {
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
                        <p>${role.dept}</p>
                    </div>
                    <div class="flex-space-between pb-8">
                        <div class="flex-content-start"><img src="/images/location-pin-alt-1_svgrepo.com.svg" alt=""> <p>Location</p></div>
                        <p>${role.location}</p>
                    </div>
                    <div class="flex-space-between pb-8">
                        <p>Total Employees</p>
                        <p>${role.total}</p>
                    </div>
                </div>
                <div style="display: flex;justify-content: end;" class = "dept-link">
                    <p>View All Employees</p>
                    <img src="/images/arrow_left.svg" alt="" class="pl-4">
                </div>
               
            `;

        dept.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded',getRoles);