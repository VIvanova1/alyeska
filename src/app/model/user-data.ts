export interface EmployeeData {
  name: string;
  position: string;
  companyId: string;
  phone: string;
  email: string;
  location: string;
  department: string;
  employmentType: string;
  salary: number;
  role: 'regular';
  manager: string;
  brd: Date;
}

export interface AdditionalInfo {
  institution: string;
  location: string;
  activity: string;
  startDate: string;
  endDate: string;
  description: string;
}
