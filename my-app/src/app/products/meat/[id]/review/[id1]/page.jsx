import React from 'react'

async function Page({ params }) {
  const { id, id1 } = await params

  return (
    <h1>Review for Meat {id} is {id1}</h1>
  )
}

export default Page