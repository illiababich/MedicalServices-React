import React from 'react'

function AppointmentListMock() {
  return [
    {
      id: 1,
      startTime: new Date(2022, 12, 23, 14, 45),
      endTime: new Date(2022, 12, 23, 15, 0),
      services: ['Flu shot', 'HIV test'],
      provider: 'Antea',
    },
    {
      id: 2,
      startTime: new Date(2023, 12, 23, 14, 0),
      endTime: new Date(2023, 12, 23, 14, 30),
      services: ['Flu shot', 'HIV test'],
      provider: 'Antea',
    },
    {
      id: 3,
      startTime: new Date(2020, 11, 11, 11, 15),
      endTime: new Date(2020, 11, 11, 11, 30),
      services: ['Flu shot', 'HIV test'],
      provider: 'Antea',
    },

    {
      id: 4,
      startTime: new Date(2020, 12, 23, 8, 15),
      endTime: new Date(2020, 12, 23, 8, 45),
      services: ['Flu shot', 'HIV test'],
      provider: 'Antea',
    },
    {
      id: 7,
      startTime: new Date(2020, 11, 11, 11, 15),
      endTime: new Date(2020, 11, 11, 11, 30),
      services: ['Flu shot', 'HIV test'],
      provider: 'Antea',
    },
    {
      id: 8,
      startTime: new Date(2020, 12, 23, 8, 15),
      endTime: new Date(2020, 12, 23, 8, 45),
      services: ['Flu shot', 'HIV test'],
      provider: 'Antea',
    },
  ]
}

export default AppointmentListMock
