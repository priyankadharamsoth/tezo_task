const emp_details = [
    {employeeId: "INF121",name:"John", email: "john@email.com",tech: "Technology",location: "location"},
    {employeeId: "INF122",name:"John", email: "john@email.com",tech: "Technology",location: "location"},
    {employeeId: "INF123",name:"John", email: "john@email.com",tech: "Technology",location: "location"},
    {employeeId: "INF124",name:"John", email: "john@email.com",tech: "Technology",location: "location"},
    {employeeId: "INF125",name:"John", email: "john@email.com",tech: "Technology",location: "location"},
    {employeeId: "INF126",name:"John", email: "john@email.com",tech: "Technology",location: "location"}
];

function getDetails(){
    const fltEmployees = document.getElementById('filtered-employees');
    fltEmployees.innerHTML = '';
    emp_details.forEach(emp => {
        const div = document.createElement('div');
        div.classList.add('filtered-employee-container');
        div.innerHTML = `
                        <div class="flex-align-center pb-20">
                            <img src="/images/profile.png" alt="" height="40px" class = "rounded-img">
                            <div class="flex-column-start pr-8">
                                <p class="bold">${emp.name}</p>
                                <p style = "color: #909aab">${emp.email}</p>
                            </div>
                        </div>
                        <div class="flt-emp-body">
                            <div class="flex-content-start pb-8">
                                <img src="/images/Vector (1).svg" alt="">
                                <p class="pl-10">${emp.employeeId}</p>
                            </div>
                            <div class="flex-content-start pb-8">
                                <img src="/images/email-1_svgrepo.com.svg" alt="">
                                <p class="pl-10">${emp.email}</p>
                            </div>
                            <div class="flex-content-start pb-8">
                                <img src="/images/team_svgrepo.com.svg" alt="">
                                <p class="pl-10">${emp.tech}</p>
                            </div>
                            <div class="flex-content-start pb-8">
                                <img src="/images/location-pin-alt-1_svgrepo.com.svg" alt="">
                                <p class="pl-10">${emp.location}</p>
                            </div>
                        </div>
                        <div class="flex-justify-end">
                            <p>View</p>
                            <img src="/images/arrow_left.svg" alt="" class="pl-4">
                        </div>
                   </div>
        `;
        fltEmployees.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded',getDetails);