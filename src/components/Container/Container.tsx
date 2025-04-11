import React from 'react'

interface IContainer {
  children: React.ReactNode
}

export default function Container({ children }: IContainer) {
  return (
    <div className='m-3 p-6 flex items-center'>
      {children}
    </div>
  )
}

