// Write your code here
import React, {useState} from 'react'
import {
  CreditCardContainer,
  CardNumberInput,
  CardholderNameInput,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardholderName, setCardholderName] = useState('')

  const handleCardNumberChange = e => {
    setCardNumber(e.target.value)
  }

  const handleCardholderNameChange = e => {
    setCardholderName(e.target.value)
  }

  return (
    <CreditCardContainer data-testid="creditCard">
      <h1>CREDIT CARD</h1>
      <p>CARDHOLDER NAME</p>
      <p>{cardholderName}</p>
      <h2>Payment Method</h2>
      <CardNumberInput
        type="text"
        placeholder="Card Number"
        value={cardNumber}
        onChange={handleCardNumberChange}
      />
      {cardNumber && <p>{cardNumber}</p>}
      <CardholderNameInput
        type="text"
        placeholder="Cardholder Name"
        value={cardholderName}
        onChange={handleCardholderNameChange}
      />
    </CreditCardContainer>
  )
}

export default CreditCard
