export {}

declare global {
    interface Window {
      goToRoles: () => void;
      goToEmployees: () => void;
      goToRoleDetails: (roleId: number, deptId: number, locationId: number) => void;
    }
}