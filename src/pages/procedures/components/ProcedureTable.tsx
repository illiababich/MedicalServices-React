import React from 'react'
import Table from '../../../components/Table'
import { Procedure } from '../../../store/procedures/model'

interface ProvidersProps {
  procedures: Procedure[]
  onClick: (procedureInfo: Procedure) => void
}

function ProcedureTable(props: ProvidersProps) {
  const { procedures, onClick } = props

  return (
    <Table headers={['Procedure', 'Price (Eur)']}>
      {procedures
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((procedure) => (
          <tr
            className='border-b-2 h-20 cursor-pointer hover:bg-gray-100'
            key={procedure.id}
            onClick={() => onClick(procedure)}
          >
            <td className='border-r-2 border-r-blue px-20'>
              <p className='font-bold text-lg'>{procedure.name}</p>
              <p className='font-roman'>{procedure.description}</p>
            </td>
            <td className='font-roman text-center text-lg'>
              {procedure.price}
            </td>
          </tr>
        ))}
    </Table>
  )
}

export default ProcedureTable
