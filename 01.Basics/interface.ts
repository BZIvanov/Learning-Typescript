// example A

interface BasicUser {
  readonly id: number;
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

// example B - augmented interface

// augmenting interfaces means, that if we have 2 with the same name they will be merged
interface Product {
  name: string;
  price: number;
}

interface Product {
  rating: number;
}

const myFavProduct: Product = { name: 'Laptop', price: 1000, rating: 3 };

// example C

// string is default generic type, providing default type is not required
interface CompanyEmployee<A = string> {
  readonly id: number;
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
