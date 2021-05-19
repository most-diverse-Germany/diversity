import React, { useState, useEffect } from 'react'

export default function Test(props) {
  const [testCounter, setTestCounter] = useState(0)

  useEffect(() => {
    setTestCounter((testCounter) => testCounter + 1)
    // console.log(props)
  }, [props])

  return <div>{testCounter}</div>
}
