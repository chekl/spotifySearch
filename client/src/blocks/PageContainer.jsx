import React from 'react'
import BackLink from '../components/BackLink/BackLink'

export default function PageContainer({children}) {
  return (
    <div className='page-container'>
    <BackLink />
      {children}
    </div>
  )
}
