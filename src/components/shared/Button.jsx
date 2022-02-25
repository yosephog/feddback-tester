import React from 'react'
import PropTypes from 'prop-types'
function Button({children,isDisabled,version,type}) {
  return (
    <button disabled={isDisabled} type={type} 
    className={`btn btn-${version}`}>
      {children}
    </button>
  )
}
Button.defaultProps = {
  isDisabled: false,
  version: 'primary',
  type: 'button',
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
}

export default Button