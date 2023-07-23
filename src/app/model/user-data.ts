import { DepartmentData } from "./department-data";

export interface UserData {
    id:string,
    name:string,
    position: string,
    companyId:string,
    phone: string,
    email:string,
    location:string,
    departmentData:DepartmentData[],
}
