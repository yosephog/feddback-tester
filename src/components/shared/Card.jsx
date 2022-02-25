import React from 'react'
import PropTypes from 'prop-types'
function Card({children}) {
    const reverse = false
  return (
    <div className='card' 
    style={{
        backgroudColor: reverse ? 'rgba(0,0,0,0.4':'#fff',
        color: reverse ? '#fff' : '#000'
    }}
    >{children}</div>
  )
}
Card.defaultProp = {
    reverse: false,
}
Card.prototype = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card