function PatientTableMock() {
  return [
    {
      id: 1,
      email: 'johndoe@devbridge.com',
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
      lastCheckup: new Date(2020, 12, 10),
    },
    {
      id: 2,
      email: 'janedoe@devbridge.com',
      fullName: 'Jane Doe',
      birthDate: new Date(1990, 1, 1),
      roles: [
        {
          id: 3,
          role: 'Patient',
        },
      ],
      lastCheckup: new Date(2021, 3, 3),
    },
  ]
}

export default PatientTableMock
