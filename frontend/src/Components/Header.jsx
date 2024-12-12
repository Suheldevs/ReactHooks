import React from 'react'

function Header() {
    console.log('Header fetched')
  return (
    <div>Header</div>
  )
}

export default React.memo( Header)