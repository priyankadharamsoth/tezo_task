//models
const roles  = [
    {id: 1, role : Roles.BUSINESS_ANALYST, departmentId : 6, locationId: 1},
    {id: 2, role : Roles.CUSTOMER_SERVICE_MANAGER,departmentId:6, locationId: 2 },
    {id: 3, role : Roles.DEVELOPER, departmentId:2, locationId:3},
    {id: 4, role : Roles.DEVOPS_ENGINEER, departmentId: 2,locationId: 4},
    {id: 5, role : Roles.HUMAN_RESOURCE_MANAGER, departmentId: 4, locationId:1},
    {id: 6, role : Roles.PROJECT_MANAGER, departmentId: 2,locationId:2},
    {id: 7, role : Roles.QA_ENGINEER, departmentId:3,locationId: 3},
    {id: 8, role : Roles.SYSTEM_ARCHITECT,departmentId: 2,locationId: 4},
    {id: 9, role : Roles.UX_UI_DESIGNER, departmentId: 5,locationId: 2},
]

const departments = [
    {id: 1, department : Departments.DT},
    {id: 2, department : Departments.PE},
    {id: 3, department : Departments.QA},
    {id: 4, department : Departments.HR},
    {id: 5, department : Departments.UIUX},
    {id: 6, department : Departments.IT},
];

const locations = [
    {id: 1, location: Locations.BANGALORE},
    {id: 2, location: Locations.HYDERABAD},
    {id: 3, location: Locations.CHENNAI},
    {id: 4, location: Locations.MUMBAI},
];


const statusOptions = [
    { id: 1, status: Status.ACTIVE },
    { id: 2, status: Status.INACTIVE },
];


let employees = [
    { 
        id: 1, 
        firstName: "John", 
        lastName: "Doe", 
        email: "john.doe@gmail.com", 
        locationId: 2, 
        deptId: 6, 
        roleId: 2, 
        employeeNum: "TZ200102", 
        statusId: 2, 
        jointDt: "12/03/2024", 
        profilePicture: "/images/profile.png"
    },
    { 
        id: 2, 
        firstName: "Jane", 
        lastName: "Smith", 
        email: "jane.smith@gmail.com", 
        locationId: 2, 
        deptId: 2, 
        roleId: 3, 
        employeeNum: "TZ200103", 
        statusId: 1, 
        jointDt: "12/03/2024", 
        profilePicture: "/images/profile-2.jpg"
    },
    { 
        id: 3, 
        firstName: "Mike", 
        lastName: "Johnson", 
        email: "mike.johnson@gmail.com", 
        locationId: 3, 
        deptId: 3, 
        roleId: 7, 
        employeeNum: "TZ200104", 
        statusId: 1, 
        jointDt: "12/03/2024", 
        profilePicture: "/images/profile-3.jpg"
    },
    { 
        id: 4, 
        firstName: "Alice", 
        lastName: "Williams", 
        email: "alice.williams@gmail.com", 
        locationId: 2, 
        deptId: 2, 
        roleId: 3, 
        employeeNum: "TZ200105", 
        statusId: 2, 
        jointDt: "12/03/2024", 
        profilePicture: "/images/profile-4.jpg"
    },
    { 
        id: 5, 
        firstName: "Bob", 
        lastName: "Brown", 
        email: "bob.brown@gmail.com", 
        locationId: 1, 
        deptId: 2, 
        roleId: 8, 
        employeeNum: "TZ200106", 
        statusId: 1, 
        jointDt: "12/03/2024", 
        profilePicture: "/images/profile-5.jpg"
    },
    { 
        id: 6, 
        firstName: "Charlie", 
        lastName: "Davis", 
        email: "charlie.davis@gmail.com", 
        locationId: 2, 
        deptId: 2, 
        roleId: 3, 
        employeeNum: "TZ200107", 
        statusId: 1, 
        jointDt: "12/03/2024", 
        profilePicture: "/images/profile-6.jpg"
    },
    { 
        id: 7, 
        firstName: "Eve", 
        lastName: "Martinez", 
        email: "eve.martinez@gmail.com", 
        locationId: 4, 
        deptId: 2, 
        roleId: 6, 
        employeeNum: "TZ200108", 
        statusId: 1, 
        jointDt: "12/03/2024", 
        profilePicture: "/images/profile-7.jpg"
    },
    { 
        id: 8, 
        firstName: "Frank", 
        lastName: "Garcia", 
        email: "frank.garcia@gmail.com", 
        locationId: 2, 
        deptId: 2, 
        roleId: 3, 
        employeeNum: "TZ200109", 
        statusId: 2, 
        jointDt: "12/03/2024", 
        profilePicture: "/images/profile-2.jpg"
    },
    { 
        id: 9, 
        firstName: "Grace", 
        lastName: "Hernandez", 
        email: "grace.hernandez@gmail.com", 
        locationId: 2, 
        deptId: 3, 
        roleId: 7, 
        employeeNum: "TZ200110", 
        statusId: 1, 
        jointDt: "12/03/2024", 
        profilePicture: "/images/profile-3.jpg"
    },
    { 
        id: 10, 
        firstName: "Hank", 
        lastName: "Lopez", 
        email: "hank.lopez@gmail.com", 
        locationId: 4, 
        deptId: 4, 
        roleId: 5, 
        employeeNum: "TZ200111", 
        statusId: 1, 
        jointDt: "12/03/2024", 
        profilePicture: "/images/profile-4.jpg"
    },
];
