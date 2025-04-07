// import React, { useContext } from 'react'
// import { dataStore } from '../Products'

// export default function Image() {
//   const {image} = useContext(dataStore)
//   return (
//     <img src={image} width="150px" height="300px" style={{objectFit:"contain"}}></img>
//   )
// }

import React from 'react'

export default function Image({image}) {
  return (
    <img src={image} width="150px" height="300px" style={{objectFit:"contain"}}></img>
  )
}
