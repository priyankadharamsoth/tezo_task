const employees = [
    {id: 1, userName: "John",email:"john@gmail.com", location: "Hyderabad", dept: "Prod Engg", role: "Full-stack developer", employeeNum: "TZ200102", status: "Active", jointDt: "12/03/2024"},
    {id: 2, userName: "Jane",email:"jane@gmail.com", location: "Hyderabad", dept: "Prod Engg", role: "Full-stack developer", employeeNum: "TZ200103", status: "Active", jointDt: "12/03/2024"},
    {id: 3, userName: "Mike",email:"mike@gmail.com", location: "Hyderabad", dept: "Prod Engg", role: "Full-stack developer", employeeNum: "TZ200104", status: "Active", jointDt: "12/03/2024"},
    {id: 4, userName: "Alice",email:"alice@gmail.com", location: "Hyderabad", dept: "Prod Engg", role: "Full-stack developer", employeeNum: "TZ200105", status: "Active", jointDt: "12/03/2024"},
    {id: 5, userName: "Bob",email:"bob@gmail.com", location: "Hyderabad", dept: "Prod Engg", role: "Full-stack developer", employeeNum: "TZ200106", status: "Active", jointDt: "12/03/2024"},
    {id: 6, userName: "John",email:"john@gmail.com", location: "Hyderabad", dept: "Prod Engg", role: "Full-stack developer", employeeNum: "TZ200102", status: "Active", jointDt: "12/03/2024"},
    {id: 7, userName: "Jane",email:"jane@gmail.com", location: "Hyderabad", dept: "Prod Engg", role: "Full-stack developer", employeeNum: "TZ200103", status: "Active", jointDt: "12/03/2024"},
    {id: 8, userName: "Mike",email:"mike@gmail.com", location: "Hyderabad", dept: "Prod Engg", role: "Full-stack developer", employeeNum: "TZ200104", status: "Inactive", jointDt: "12/03/2024"},
    {id: 9, userName: "Alice",email:"alice@gmail.com", location: "Hyderabad", dept: "Prod Engg", role: "Full-stack developer", employeeNum: "TZ200105", status: "Active", jointDt: "12/03/2024"},
    {id: 10, userName: "Bob",email:"bob@gmail.com", location: "Hyderabad", dept: "Prod Engg", role: "Full-stack developer", employeeNum: "TZ200106", status: "Active", jointDt: "12/03/2024"},
];

function renderTable() {
    const tableBody = document.querySelector('#employee-table tbody'); 
    tableBody.innerHTML = ''; 

    employees.forEach(emp => {
        const statusCls = emp.status == "Active" ? ("status-active-btn") :" status-inactive-btn";
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="checkbox" id="${emp.id}" name="employee" value="${emp.id}"></td>
            <td> 
                <div class="flex-align-center">
                    <img src="/images/profile.png" alt="" height="40px" class = "rounded-img">
                    <div class="flex-column-start pr-8">
                        <p class="bold" style="color:#2c2c2c; !impoertant">${emp.userName}</p>
                        <p style = "color: #909aab">${emp.email}</p>
                    </div>
                </div>
            </td>
            <td>${emp.location}</td>
            <td>${emp.dept}</td>
            <td>${emp.role}</td>
            <td>${emp.employeeNum}</td>
            <td><p class ="${statusCls}">${emp.status}</p></td>
            <td>${emp.jointDt}</td>
            <td><img src="/images/more-hz.svg" alt=""></td>
        `;
        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', renderTable);
