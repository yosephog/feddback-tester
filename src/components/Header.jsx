import React from 'react'
import PropTypes from 'prop-types'
function Header({headerText, bgColour, textColour}) {
    const headerStyle = {
        bgColour: bgColour,
        textColour: textColour,
    }
  return (
    <header style={headerStyle}>
        <div className="container">
            <h1>{headerText}</h1>
        </div>
    </header>
  )
}
Header.defaultProps = {
    headerText : 'Feedback UI',
    bgColour: 'rgba(0,0,0,0.4)',
    textColour: '#ff6a95',
}
Header.propTypes = {
    headerText: PropTypes.string,
    bgColour: PropTypes.string,
    textColour: PropTypes.string,
}

export default Header