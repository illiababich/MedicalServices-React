import React from 'react'

export interface TableProps {
  headers: string[]
  children: React.ReactNode
}

function Table(props: TableProps) {
  const { headers, children } = props
  const firstHeaders = headers.slice(0, headers.length - 1)
  const lastHeader = headers[headers.length - 1]

  return (
    <div className='flex justify-center w-full'>
      <table className='table-auto w-10/12'>
        <thead className='border-b-2 border-b-blue h-12'>
          <tr>
            {firstHeaders.map((header) => (
              <th
                key={header}
                className='border-r-2 border-r-blue text-2xl font-bold'
              >
                {header}
              </th>
            ))}
            <th className='text-2xl font-bold'>{lastHeader}</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

export default Table
