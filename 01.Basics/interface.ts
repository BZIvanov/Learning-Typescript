// example A

interface BasicUser {
  id: number;
  name: string;
  city?: string;
}

interface PermissionedUser extends BasicUser {
  permissions: string[];
}

const basic: BasicUser = {
  id: 10,
  name: 'Toni',
};

const admin: PermissionedUser = {
  id: 1,
  name: 'Iva',
  city: 'Sofia',
  permissions: ['read', 'write'],
};

// example B

// string is default generic type
interface CompanyEmployee<A = string> {
  id: number;
  name: string;
  benefits: A;
}

const employeeWithExtraHolidays: CompanyEmployee<number> = {
  id: 10,
  name: 'Iva',
  benefits: 5,
};

const employeeWithBenefit: CompanyEmployee = {
  id: 10,
  name: 'Iva',
  benefits: 'Sport card',
};

const employeeWitPermissions: CompanyEmployee<string[]> = {
  id: 10,
  name: 'Iva',
  benefits: ['read', 'write'],
};
