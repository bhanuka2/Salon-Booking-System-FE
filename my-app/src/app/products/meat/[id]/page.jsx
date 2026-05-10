import React from 'react'

async function Page({ params }) {
  const { id } = await params

  return (
    <h1>Meat code is {id}</h1>
  )
}

export default Page