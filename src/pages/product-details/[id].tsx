import { useParams } from 'next/navigation'
import React from 'react'

const Index = () => {

    const params=useParams()

    console.log(params)
  return (
    <div>
        {JSON.stringify(params)}
    </div>
  )
}

export default Index

// product-details/1
