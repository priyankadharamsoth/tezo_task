import { RolesEnum,StatusEnum, DepartmentsEnum, LocationsEnum } from "./enums.js";


export class Role {
    id: number;
    role: RolesEnum;
    departmentId: number;
    locationId : number;
    constructor({ id, role, departmentId, locationId }
        : { id: number, role: RolesEnum, departmentId: number, locationId: number }) {
        this.id = id;
        this.role = role;
        this.departmentId = departmentId;
        this.locationId = locationId;
    }
}

export class Employee {
    id: number;
    firstName: string;
    lastName : string;
    email: string;
    locationId: number;
    deptId: number;
    roleId: number;
    employeeNum : string;
    statusId: number;
    jointDt: string;
    profilePicture: string;
    constructor({id, firstName,lastName,email,locationId,deptId,roleId,
                employeeNum,statusId,jointDt,profilePicture}
                :{id: number,firstName: string,lastName: string,email: string,
                locationId: number,deptId: number, roleId: number, employeeNum: string,
                statusId: number,jointDt: string,profilePicture: string},) 
            {
                this.id = id;
                this.firstName = firstName; 
                this.lastName = lastName;
                this.email = email;
                this.locationId = locationId;
                this.deptId = deptId;
                this.roleId = roleId;
                this.employeeNum = employeeNum;
                this.statusId = statusId;
                this.jointDt = jointDt;
                this.profilePicture = profilePicture;
            }
}


export class Department {
    id: number;
    department: DepartmentsEnum;
    constructor({ id, department }: { id: number, department: DepartmentsEnum }) {
        this.id = id;
        this.department = department;
    }
}

export class Locations {
    id: number;
    location: LocationsEnum;
    constructor({ id, location }: { id: number, location: LocationsEnum }) {
        this.id = id;
        this.location = location;
    }
}

export class StatusOptions {
    id: number;
    status: StatusEnum;
    constructor({ id, status }: { id: number, status: StatusEnum }) {
        this.id = id;
        this.status = status;
    }
}

export const roles : Role[] = [
    new Role({id: 1, role : RolesEnum.BUSINESS_ANALYST, departmentId : 6, locationId: 1}),
    new Role({id: 2, role : RolesEnum.CUSTOMER_SERVICE_MANAGER,departmentId:6, locationId: 2 }),
    new Role({id: 3, role : RolesEnum.DEVELOPER, departmentId:2, locationId:3}),
    new Role({id: 4, role : RolesEnum.DEVOPS_ENGINEER, departmentId: 2,locationId: 4}),
    new Role({id: 5, role : RolesEnum.HUMAN_RESOURCE_MANAGER, departmentId: 4, locationId:1}),
    new Role({id: 6, role : RolesEnum.PROJECT_MANAGER, departmentId: 2,locationId:2}),
    new Role({id: 7, role : RolesEnum.QA_ENGINEER, departmentId:3,locationId: 3}),
    new Role({id: 8, role : RolesEnum.SYSTEM_ARCHITECT,departmentId: 2,locationId: 4}),
    new Role({id: 9, role : RolesEnum.UX_UI_DESIGNER, departmentId: 5,locationId: 2}),
]

export const departments : Department[] = [
    new Department({id: 1, department : DepartmentsEnum.DT}),
    new Department({id: 2, department : DepartmentsEnum.PE}),
    new Department({id: 3, department : DepartmentsEnum.QA}),
    new Department({id: 4, department : DepartmentsEnum.HR}),
    new Department({id: 5, department : DepartmentsEnum.UIUX}),
    new Department({id: 6, department : DepartmentsEnum.IT}),
];

export let locations : Locations[] = [
    new Locations({id: 1, location: LocationsEnum.BANGALORE}),
    new Locations({id: 2, location: LocationsEnum.HYDERABAD}),
    new Locations({id: 3, location: LocationsEnum.CHENNAI}),
    new Locations({id: 4, location: LocationsEnum.MUMBAI}),
];


export const statusOptions : StatusOptions[] = [
    new StatusOptions({ id: 1, status: StatusEnum.ACTIVE }),
    new StatusOptions({ id: 2, status: StatusEnum.INACTIVE }),
];


export let employees : Employee[] = [
    new Employee({ 
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
    }),
    new Employee({ 
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
    }),
    new Employee({ 
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
    }),
    new Employee({ 
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
    }),
    new Employee({ 
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
    }),
    new Employee({ 
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
    }),
    new Employee({ 
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
    }),
    new Employee({ 
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
    }),
    new Employee({ 
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
    }),
    new Employee({ 
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
    }),
];
