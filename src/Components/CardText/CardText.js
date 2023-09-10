import React from 'react'

function CardText({ head, info, clock, eth, ethText, time }) {
  return (
    <div className='card-text'>
      <h1>{head}</h1>
      <p>{info}</p>
      <div className='svg-bar'>
        <span className='eth'>{eth} {ethText} </span>
        <span className='clock'>{clock}{time}</span>
      </div>

    </div>
  )
}

export default CardText
