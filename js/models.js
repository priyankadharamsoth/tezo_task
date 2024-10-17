const Status = {
    ACTIVE: 'Active',
    INACTIVE: 'Inactive'
};

const Departments = {
    PE: "Product Engg",
    QA: "Quality Analyst",
    DT: "Data Analysis",
    UIUX: "UI/UX",
    IT: "IT",
    HR: "HR",
};

const Roles = {
    DEVELOPER: 'Developer',
    QA_ENGINEER: 'QA Engineer',
    CUSTOMER_SERVICE_MANAGER: 'Customer Service Manager',
    PROJECT_MANAGER: 'Project Manager',
    UX_UI_DESIGNER: 'UX/UI Designer',
    DEVOPS_ENGINEER: 'DevOps Engineer',
    SYSTEM_ARCHITECT: 'System Architect',
    BUSINESS_ANALYST: 'Business Analyst',
    HUMAN_RESOURCE_MANAGER: 'Human Resource Manager',
};


const Locations = {
    HYDERABAD: 'Hyderabad',
    BANGALORE: 'Bangalore',
    CHENNAI: 'Chennai',
    MUMBAI: 'Mumbai'
}


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


const employees = [
    { id: 1, userName: "John", email: "john@gmail.com", location: 2, dept: 6, role: 2, employeeNum: "TZ200102", status: Status.INACTIVE, jointDt: "12/03/2024",},
    { id: 2, userName: "Jane", email: "jane@gmail.com", location: 2, dept: 2, role: 3, employeeNum: "TZ200103", status: Status.ACTIVE, jointDt: "12/03/2024" ,},
    { id: 3, userName: "Mike", email: "mike@gmail.com", location: 3, dept: 3, role: 7, employeeNum: "TZ200104", status: Status.ACTIVE, jointDt: "12/03/2024" ,},
    { id: 4, userName: "Alice", email: "alice@gmail.com", location: 2, dept: 2, role:3, employeeNum: "TZ200105", status: Status.INACTIVE, jointDt: "12/03/2024", },
    { id: 5, userName: "Bob", email: "bob@gmail.com", location: 1, dept: 2, role: 8, employeeNum: "TZ200106", status: Status.ACTIVE, jointDt: "12/03/2024", },
    { id: 6, userName: "John", email: "john@gmail.com", location: 2, dept:2, role:3, employeeNum: "TZ200102", status: Status.ACTIVE, jointDt: "12/03/2024", },
    { id: 7, userName: "Jane", email: "jane@gmail.com", location: 4, dept: 2, role: 6, employeeNum: "TZ200103", status: Status.ACTIVE, jointDt: "12/03/2024", },
    { id: 8, userName: "Mike", email: "mike@gmail.com", location: 2, dept: 2, role: 3, employeeNum: "TZ200104", status: Status.INACTIVE, jointDt: "12/03/2024", },
    { id: 9, userName: "Alice", email: "alice@gmail.com", location: 2, dept: 3, role: 7, employeeNum: "TZ200105", status: Status.ACTIVE, jointDt: "12/03/2024" ,},
    { id: 10, userName: "Bob", email: "bob@gmail.com", location: 4, dept: 4, role: 5, employeeNum: "TZ200106", status: Status.ACTIVE, jointDt: "12/03/2024" ,},
];