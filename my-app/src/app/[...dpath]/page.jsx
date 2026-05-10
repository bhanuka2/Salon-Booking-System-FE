import React from 'react'

async function Page({ params }) {
  const { dpath } = await params

  return (
    <>
      <h1>Catch All Routes</h1>
      <ul>
        {dpath.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default Page