import React, { useContext, useState, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'

function FeedbackForm() {
    const{addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)
    useEffect(() =>{
        if(feedbackEdit.edit === true){
            setBtnStatus(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])

    const[text,setText]  = useState('')
    const[btnStatus,setBtnStatus] = useState(true)
    const[message,setMessage] = useState('')
    const[rating,setRating]= useState(10)

    const handleTextChange = (e) =>{
        if(text === ''){
            setBtnStatus(true)
            setMessage(null)
        }else if(text != null && text.trim().length <= 10){
            setBtnStatus(true)
            setMessage("message must be at least ten character long.")
        }else{
            setBtnStatus(false)
            setMessage(null);
        }
        setText(e.target.value)
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text:text,
                rating:rating,
            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }else{
                addFeedback(newFeedback)
            }
            setText('')
            
        }
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate out service?</h2>
            <RatingSelect select= {(rating) => setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" className="input-group" 
                 placeholder='write review' value={text}/>
                 <Button children='Send' isDisabled={btnStatus} type='submit' version='primary'  />
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm