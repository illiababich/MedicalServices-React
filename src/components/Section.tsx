import React from 'react'

function Section({ title }: { title: string }) {
  return (
    <div className='mt-10 mb-8 inline-flex justify-items-start items-center w-full'>
      <hr className='w-11/12 h-px border-1 border-gray-400' />
      <span className='text-lg md:text-xl font-roman absolute px-6 bg-white'>
        {title}
      </span>
    </div>
  )
}

export default Section
