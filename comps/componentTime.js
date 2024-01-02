import React from 'react'

const ComponentTime = () => {
  const d = new Date();
  const componentTime = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}T${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${d.getMilliseconds()}`;

  return (
      <p>componentTime = {componentTime}</p>
  )
}

export default ComponentTime
