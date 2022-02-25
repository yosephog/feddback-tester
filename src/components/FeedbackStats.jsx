import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackStats() {
  const{feedback} = useContext(FeedbackContext)
    let average = feedback.reduce(((acc,cur) =>{
        return acc + cur.rating
    }
         
    ),0) / feedback.length
    average = average.toFixed(1)
  return (
    <div className="feedback-stats">
        <h4>{feedback.length}</h4>
        <h4>Avarage rating is {average}</h4>
    </div>
  )
}
FeedbackStats.propType = {
    feedback : PropTypes.array.isRequired
}


export default FeedbackStats