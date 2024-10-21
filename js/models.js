//models
const roles  = [
    {id: 1, role : Roles.BUSINESS_ANALYST, departmentId : 6, location: 1},
    {id: 2, role : Roles.CUSTOMER_SERVICE_MANAGER,departmentId:6, location: 2 },
    {id: 3, role : Roles.DEVELOPER, departmentId:2, location:3},
    {id: 4, role : Roles.DEVOPS_ENGINEER, departmentId: 2,location: 4},
    {id: 5, role : Roles.HUMAN_RESOURCE_MANAGER, departmentId: 4, location:1},
    {id: 6, role : Roles.PROJECT_MANAGER, departmentId: 2,location:2},
    {id: 7, role : Roles.QA_ENGINEER, departmentId:3,location: 3},
    {id: 8, role : Roles.SYSTEM_ARCHITECT,departmentId: 2,location: 4},
    {id: 9, role : Roles.UX_UI_DESIGNER, departmentId: 5,location: 2},
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

let employees = [
    { 
        id: 1, 
        firstName: "John", 
        lastName: "Doe", 
        email: "john.doe@gmail.com", 
        location: 2, 
        dept: 6, 
        role: 2, 
        employeeNum: "TZ200102", 
        status: Status.INACTIVE, 
        jointDt: "12/03/2024", 
        profilePicture: "/images/profile.png"
    },
    { 
        id: 2, 
        firstName: "Jane", 
        lastName: "Smith", 
        email: "jane.smith@gmail.com", 
        location: 2, 
        dept: 2, 
        role: 3, 
        employeeNum: "TZ200103", 
        status: Status.ACTIVE, 
        jointDt: "12/03/2024", 
        profilePicture: "/images/profile-2.jpg"
    },
    { 
        id: 3, 
        firstName: "Mike", 
        lastName: "Johnson", 
        email: "mike.johnson@gmail.com", 
        location: 3, 
        dept: 3, 
        role: 7, 
        employeeNum: "TZ200104", 
        status: Status.ACTIVE, 
        jointDt: "12/03/2024", 
        profilePicture: "/images/profile-3.jpg"
    },
    { 
        id: 4, 
        firstName: "Alice", 
        lastName: "Williams", 
        email: "alice.williams@gmail.com", 
        location: 2, 
        dept: 2, 
        role: 3, 
        employeeNum: "TZ200105", 
        status: Status.INACTIVE, 
        jointDt: "12/03/2024", 
        profilePicture: "/images/profile-4.jpg"
    },
    { 
        id: 5, 
        firstName: "Bob", 
        lastName: "Brown", 
        email: "bob.brown@gmail.com", 
        location: 1, 
        dept: 2, 
        role: 8, 
        employeeNum: "TZ200106", 
        status: Status.ACTIVE, 
        jointDt: "12/03/2024", 
        profilePicture: "/images/profile-5.jpg"
    },
    { 
        id: 6, 
        firstName: "Charlie", 
        lastName: "Davis", 
        email: "charlie.davis@gmail.com", 
        location: 2, 
        dept: 2, 
        role: 3, 
        employeeNum: "TZ200107", 
        status: Status.ACTIVE, 
        jointDt: "12/03/2024", 
        profilePicture: "/images/profile-6.jpg"
    },
    { 
        id: 7, 
        firstName: "Eve", 
        lastName: "Martinez", 
        email: "eve.martinez@gmail.com", 
        location: 4, 
        dept: 2, 
        role: 6, 
        employeeNum: "TZ200108", 
        status: Status.ACTIVE, 
        jointDt: "12/03/2024", 
        profilePicture: "/images/profile-7.jpg"
    },
    { 
        id: 8, 
        firstName: "Frank", 
        lastName: "Garcia", 
        email: "frank.garcia@gmail.com", 
        location: 2, 
        dept: 2, 
        role: 3, 
        employeeNum: "TZ200109", 
        status: Status.INACTIVE, 
        jointDt: "12/03/2024", 
        profilePicture: "/images/profile-2.jpg"
    },
    { 
        id: 9, 
        firstName: "Grace", 
        lastName: "Hernandez", 
        email: "grace.hernandez@gmail.com", 
        location: 2, 
        dept: 3, 
        role: 7, 
        employeeNum: "TZ200110", 
        status: Status.ACTIVE, 
        jointDt: "12/03/2024", 
        profilePicture: "/images/profile-3.jpg"
    },
    { 
        id: 10, 
        firstName: "Hank", 
        lastName: "Lopez", 
        email: "hank.lopez@gmail.com", 
        location: 4, 
        dept: 4, 
        role: 5, 
        employeeNum: "TZ200111", 
        status: Status.ACTIVE, 
        jointDt: "12/03/2024", 
        profilePicture: "/images/profile-4.jpg"
    },
];
