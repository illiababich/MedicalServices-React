function UserTableMock() {
  return [
    {
      id: 1,
      email: 'johndoe@gmail.com',
      fullName: 'John Doe',
      birthDate: new Date(1990, 1, 1),
      roles: [
        {
          id: 1,
          role: 'Admin',
        },
        {
          id: 2,
          role: 'Patient',
        },
      ],
    },
    {
      id: 2,
      email: 'janedoe@gmail.com',
      fullName: 'Jane Doe',
      birthDate: new Date(1990, 1, 1),
      roles: [
        {
          id: 3,
          role: 'Patient',
        },
      ],
    },
  ]
}

export function UserRolesMock() {
  return [
    {
      id: 1,
      role: 'Admin',
    },
    {
      id: 2,
      role: 'Manager',
    },
    {
      id: 3,
      role: 'Patient',
    },
  ]
}

export default UserTableMock
