import React from 'react'

export default function PrimaryButton({children}) {
  return (
    <button className='btn primary-bg secondary-color hover:bg-white hover:text-black p-2 rounded-full h-12 my-2 text-center w-36'>{children}</button>
  )
}
