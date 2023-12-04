import React from 'react'

function PageTitle({ title }: { title: string }) {
  return (
    <div className='my-20 inline-flex justify-center items-center w-full'>
      <hr className='w-10/12 h-px border-1 border-gray-400' />
      <span className='text-2xl md:text-3xl font-bold absolute left-44 px-4 bg-white'>
        {title}
      </span>
    </div>
  )
}

export default PageTitle
