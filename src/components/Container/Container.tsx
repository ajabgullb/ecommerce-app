import React from 'react'

interface IContainer {
  children: React.ReactNode
}

export default function Container({ children }: IContainer) {
  return (
    <div>
      {children}
    </div>
  )
}

