import React from 'react'
import Table from '../../../components/Table'
import { User } from '../../../store/users/model'
import PatientLastCheckup from './PatientLastCheckup'

interface PatientTableProps {
  patients: User[]
}

function PatientTable(props: PatientTableProps) {
  const { patients } = props

  return (
    <Table headers={['Patients', 'Last check-up']}>
      {patients.map((patient) => (
        <tr
          className='border-b-2 h-20'
          key={patient.id}
        >
          <td className='border-r-2 border-r-blue px-20 w-3/5'>
            <p className='font-bold text-lg'>{patient.fullName}</p>
            <p className='font-roman'>{patient.email}</p>
          </td>
          <td className='flex justify-center items-center h-20 gap-8'>
            <PatientLastCheckup patient={patient} />
          </td>
        </tr>
      ))}
    </Table>
  )
}

export default PatientTable
