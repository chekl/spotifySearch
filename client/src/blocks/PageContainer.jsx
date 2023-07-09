import React from 'react'
import BackLink from '../ui/BackLink/BackLink'

export default function PageContainer({children}) {
  return (
    <div className='page-container'>
    <BackLink />
      {children}
    </div>
  )
}
