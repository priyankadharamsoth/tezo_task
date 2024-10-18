function getDetails(roleId) {

    const detailsContainer = document.getElementById('details-container');
    // Clear previous content
    detailsContainer.innerHTML = '';

    // Create and append header section
    const headerSection = document.createElement('section');
    headerSection.className = 'flex-space-between';
    headerSection.innerHTML = `
        <div>
            <div class="filter-header flex-align-center">
                <div onclick="goBack()">Roles</div>
                <img src="/images/arrow_right.svg" alt="" class ="pr-8 pl-8" height = "px">
                <div>Employees</div>
            </div>
            <p class="filter-subtitle">All the roles are configured here</p>
        </div>
        <div class="flex-space-between">
            <button class="btn primary-btn  flex-space-between">
                <img src="/images/Interface/Add.svg" alt="" class="pr-10">Add Employee
            </button>
        </div>
    `;
    detailsContainer.prepend(headerSection);

    // Create role description section
    const descriptionSection = document.createElement('div');
    descriptionSection.innerHTML = `
        <div class="space"></div>
        <p class="f16 bold pb-8">Role Description</p>
        <p class="filter-subtitle">Configure the providers that are available to users when they sign in.</p>
        <div class="space"></div>
    `;
    detailsContainer.append(descriptionSection);

    // Create filtered employees section
    const fltEmployeesSection = document.createElement('section');
    fltEmployeesSection.id = 'filtered-employees';
    fltEmployeesSection.className = 'flex-space-even';

    // Filter employees by role
    const employeesByRole = employees.filter(emp => emp.role === roleId);
    employeesByRole.forEach(emp => {
        const empDept = departments.find(dept => dept.id === emp.dept)?.department || 'N/A';
        const empLoc = locations.find(loc => loc.id === emp.location)?.location || 'N/A';

        const empDiv = document.createElement('div');
        empDiv.classList.add('filtered-employee-container');
        empDiv.innerHTML = `
            <div class="flex-align-center pb-20">
                <img src="/images/profile.png" alt="" height="40px" class="rounded-img">
                <div class="flex-column-start pr-8">
                    <p class="bold">${emp.userName}</p>
                    <p style="color: #909aab">${emp.email}</p>
                </div>
            </div>
            <div class="f12 dept-body">
                <div class="flex-content-start pb-8">
                    <img src="/images/Vector (1).svg" alt="">
                    <p class="pl-10">${emp.employeeNum}</p>
                </div>
                <div class="flex-content-start pb-8">
                    <img src="/images/email-1_svgrepo.com.svg" alt="">
                    <p class="pl-10">${emp.email}</p>
                </div>
                <div class="flex-content-start pb-8">
                    <img src="/images/team_svgrepo.com.svg" alt="">
                    <p class="pl-10">${empDept}</p>
                </div>
                <div class="flex-content-start pb-8">
                    <img src="/images/location-pin-alt-1_svgrepo.com.svg" alt="">
                    <p class="pl-10">${empLoc}</p>
                </div>
            </div>
            <div class="flex-justify-end">
                <p>View</p>
                <img src="/images/arrow_left.svg" alt="" class="pl-4">
            </div>
        `;
        fltEmployeesSection.appendChild(empDiv);
    });

    detailsContainer.appendChild(fltEmployeesSection);
}

