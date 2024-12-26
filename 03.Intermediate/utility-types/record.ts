// EXAMPLE 1

const prices: Record<string, number> = {
  apple: 1.25,
  banana: 0.75,
  cherry: 2.5,
};

prices.orange = 1.5;
console.log(prices.apple);

// EXAMPLE 2

type UserRole = "admin" | "editor" | "viewer";

type PermissionsRights = {
  canEdit: boolean;
  canDelete: boolean;
  canView: boolean;
};

const rolePermissions: Record<UserRole, PermissionsRights> = {
  admin: { canEdit: true, canDelete: true, canView: true },
  editor: { canEdit: true, canDelete: false, canView: true },
  viewer: { canEdit: false, canDelete: false, canView: true },
};
